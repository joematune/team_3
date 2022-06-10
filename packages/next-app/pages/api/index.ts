import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    return res.status(200).json({
      yeah: "yeah",
    });
  } catch (error) {
    console.log({ error });

    res.status(400).json({ statusCode: 400, message: error.message });
  }
};

export default handler;
