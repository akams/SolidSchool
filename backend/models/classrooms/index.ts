import MysqlDataBase from "@Backend/Services/db/mysql";


async function getClassrooms() {
    const connection = await new MysqlDataBase().createConnection()
    const [rows] = await connection.execute('SELECT * FROM `classrooms`');
    return rows
}

export {
    getClassrooms,
}