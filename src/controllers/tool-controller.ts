import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { validate } from "class-validator";
import { createResponse } from "../response/create-response";
import { Tool } from "../entity/tool";

class ToolController {
  static list = async (req: Request, res: Response) => {
    const { tag } = req.query;
    let where = {};
    if (tag) {
      where = [{ tags: tag }];
    }
    const toolRepository = getRepository(Tool);
    const tools = await toolRepository.find({
      select: ["id", "title", "description", "link", "tags"],
      where
    });
    res.send(tools);
  };

  static create = async (req: Request, res: Response) => {
    const { title, link, description, tags } = req.body;
    const tool = new Tool();
    tool.title = title;
    tool.link = link;
    tool.description = description;
    tool.tags = tags;

    const errors = await validate(tool);
    if (errors.length > 0) {
      return res
        .status(400)
        .send(createResponse({ message: "validation errors", data: errors }));
    }
    const toolRepository = getRepository(Tool);
    try {
      const createdTool = await toolRepository.save(tool);
      return res
        .status(201)
        .send(
          createResponse({ message: "created successfully", data: createdTool })
        );
    } catch (e) {
      return res.status(400).send(
        createResponse({
          message: "failed to create"
        })
      );
    }
  };

  static delete = async (req: Request, res: Response) => {
    const id = req.params.id;

    const toolRepository = getRepository(Tool);
    try {
      await toolRepository.findOneOrFail(id);
    } catch (error) {
      return res
        .status(404)
        .send(createResponse({ message: "Tool not found" }));
    }
    await toolRepository.delete(id);

    res.status(200).send(createResponse({ message: "deleted" }));
  };
}
export { ToolController };
