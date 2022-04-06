import MysqlDataBase from "@Backend/Services/db/mysql";

async function getClassrooms() {
  const connection = await new MysqlDataBase().createConnection();
  const [rows] = await connection.execute("SELECT * FROM `classrooms`");
  return rows;
}

async function createClassroom(label: string) {
  const connection = await new MysqlDataBase().createConnection();
  const [rows] = await connection.query("INSERT INTO classrooms SET ?", {
    label,
  });
  console.log('createClassroom: rows', rows)
  return rows;
}

async function deleteClassroom(id: number) {
  const connection = await new MysqlDataBase().createConnection();
  const [rows] = await connection.query("DELETE FROM classrooms WHERE id = ?", [id]);
  console.log('deleteClassroom: rows', rows)
  return rows;
}

export { getClassrooms, createClassroom, deleteClassroom };
