import { getDB } from "./db";

export async function createSchoolsTable() {
  const db = await getDB();

  await db.execute(`
    CREATE TABLE IF NOT EXISTS schools (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name TEXT,
      address TEXT,
      city TEXT,
      state TEXT,
      contact VARCHAR(20),
      image TEXT,
      email_id VARCHAR(255)
    )
  `);

  console.log("✔ Table checked/created");
}