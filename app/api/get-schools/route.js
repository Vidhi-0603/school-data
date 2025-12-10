import { NextResponse } from "next/server";
import { createSchoolsTable } from "../create-table";
import { getDB } from "../db";

export async function GET() {
  await createSchoolsTable();

  const db = await getDB();
  const [rows] = await db.execute("SELECT * FROM schools");

  return NextResponse.json(rows);
}
