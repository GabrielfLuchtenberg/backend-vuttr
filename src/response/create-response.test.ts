import { createResponse } from "./create-response";

describe("create-response", () => {
  it("Should return empty data", () => {
    const expectedResponse = { message: "failed", data: [] };
    const response = createResponse({ message: "failed" });
    expect(response).toEqual(expectedResponse);
  });
  it("Should return expected response object", () => {
    const expectedResponse = {
      message: "failed",
      data: [{ error: "email required" }]
    };

    const response = createResponse({
      message: "failed",
      data: [{ error: "email required" }]
    });
    expect(response).toEqual(expectedResponse);
  });
  it("Should throw error because message is not defined", () => {
    expect(() => {
      createResponse({ message: "" });
    }).toThrowError();
  });
});
