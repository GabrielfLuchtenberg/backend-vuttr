import { Response } from "./type";

interface Args {
  message: String;
  data?: any[];
}

export const createResponse = ({ message, data }: Args): Response => {
  const hasEmptyMessage = !message || message.length === 0;
  const hasData = Boolean(data) && data.length > 0;
  if (hasEmptyMessage) throw Error("Message not defined");
  if (!hasData) return { message, data: [] };

  return { message, data };
};
