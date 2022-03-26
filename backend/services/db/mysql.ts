import mysql from "mysql2";

export default class MysqlDataBase {
  constructor() {
    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "mySecret1!",
      database: "solid-school-mysql",
      port: 6033,
    });
    connection.connect(function (err) {
      if (err) {
        console.error("error connecting: " + err.stack);
        throw err;
      }
      console.log("connection work with succeed");
      console.log("connected as id " + connection.threadId);
    });

    return connection;
  }
}
