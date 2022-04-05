import { NextApiRequest, NextApiResponse } from "next";
import { get, create } from "@Backend/Controllers/classrooms";

const classrooms = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      return getClassrooms(res);
    case "POST":
      return postClassroom(req, res);
    case "PUT":
    // return updateUser();
    case "DELETE":
    // return deleteUser();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

async function getClassrooms(res: NextApiResponse) {
  try {
    const data = await get();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function postClassroom(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { label } = req.body;
    await create(label);
    return res.status(200).end();
  } catch (error) {
    return res.status(500).json({ error });
  }
}

export default classrooms;
