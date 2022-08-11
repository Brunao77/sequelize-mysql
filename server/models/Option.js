import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

export const Option = sequelize.define("option", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  description: {
    type: DataTypes.STRING,
  },
  votes: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});
