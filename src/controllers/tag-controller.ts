import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { Tag } from "../entity/tag";
import { validate } from "class-validator";
import { createResponse } from "../responses/create-response";

class TagController {
  static list = async (req: Request, res: Response) => {
    const tagRepository = getRepository(Tag);
    const users = await tagRepository.find({
      select: ["id", "name"] //We dont want to send the passwords on response
    });
    res.send(users);
  };
  static create = async (req: Request, res: Response) => {
    const { name } = req.body;
    const tag = new Tag();
    tag.name = name;

    const errors = await validate(tag);
    if (errors.length > 0) {
      return res.status(400).send(errors);
    }
    const tagRepository = getRepository(Tag);
    try {
      tagRepository.save(tag);
      return res
        .status(201)
        .send(createResponse({ message: "created successfully" }));
    } catch (e) {
      return res.status(400).send(
        createResponse({
          message: "failed to create"
        })
      );
    }
  };
}
export { TagController };
