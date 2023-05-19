import process from "node:process";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const exampleSecret = process.env.HF_EXAMPLE_SECRET;

  return response.status(200).json({ HF_EXAMPLE_SECRET: exampleSecret });
}
