// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/hello
import { NextApiRequest, NextApiResponse } from "next";
import MysqlDataBase from "@Backend/Services/db/mysql";

const auth = (req: NextApiRequest, res: NextApiResponse) => {
    const connection = new MysqlDataBase();
    res.status(200).json({ name: "John Doe" });
};

export default auth;
