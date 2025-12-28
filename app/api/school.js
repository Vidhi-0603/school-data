import { getDB } from "./db";

export async function getSchoolsFromDB() {
  const db = await getDB();
  const [rows] = await db.execute("SELECT * FROM schools");
  return rows;
}
