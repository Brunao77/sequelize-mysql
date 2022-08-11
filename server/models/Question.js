import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";
import { Option } from "./Option.js";

export const Question = sequelize.define("question", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  author: {
    type: DataTypes.STRING,
  },
});
Question.hasOne(Option, {
  foreinkey: "option1Id",
});
Option.belongsTo(Question);
