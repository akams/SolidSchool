import { NextApiRequest, NextApiResponse } from "next";
import { get } from '@Backend/Controllers/classrooms'

const classrooms = async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'GET':
            return getClassrooms(res)
        case 'PUT':
            // return updateUser();
        case 'DELETE':
            // return deleteUser();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }
};

async function getClassrooms(res: NextApiResponse) {
    const data = await get();
    return res.status(200).json(data);
}

export default classrooms;
