import MysqlDataBase from "@Backend/Services/db/mysql";

async function getClassrooms() {
  const connection = await new MysqlDataBase().createConnection();
  try {
    const [rows] = await connection.execute("SELECT * FROM `classrooms`");
    return rows;
  } catch (error) {
    throw error;
  }
}

async function createClassroom(label: string) {
  const connection = await new MysqlDataBase().createConnection();
  const [rows] = await connection.query("INSERT INTO classrooms SET ?", {
    label,
  });
  console.log('rows', rows)
  return rows;
}

export { getClassrooms, createClassroom };
