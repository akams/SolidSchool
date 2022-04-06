import { NextApiRequest, NextApiResponse } from "next";
import { deleted } from "@Backend/Controllers/classrooms";

const classroom = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "PUT":
    // return updateUser();
    case "DELETE":
      return deleteClassroom(req, res);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

async function deleteClassroom(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    await deleted(Number(id));
    return res.status(200).end();
  } catch (error) {
    return res.status(500).json({ error });
  }
}

export default classroom;
