import Sequelize from "sequelize";

export const sequelize = new Sequelize("provedb", "root", "brunopasssword", {
  host: "localhost",
  dialect: "mysql",
});
