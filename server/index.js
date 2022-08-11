import app from "./app.js";
import { sequelize } from "./database/db.js";

import "./models/Option.js";
import "./models/Question.js";

async function main() {
  await sequelize.sync();
  app.listen(4000);
  console.log("Server on port 4000");
}

main();
