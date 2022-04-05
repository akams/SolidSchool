import mysql from "mysql2/promise";


export default class MysqlDataBase {
  constructor() {}

  async createConnection() {
    try {
      const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "mySecret1!",
        database: "solid-school-mysql",
        port: 6033,
      });
      console.log("connection work with succeed");
      console.log("connected as id " + connection.threadId);

      return connection
    } catch (error) {
      //@ts-ignore
      console.error("error connecting: " + error.stack);
      throw error;
    }
  }

}
