import { NextResponse } from "next/server";
import { createSchoolsTable } from "../create-table";
import { getDB } from "../db";
import { v2 as cloudinary } from "cloudinary";

export const runtime = "nodejs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  await createSchoolsTable(); // Ensure table exists

  try {
    const form = await req.formData();

    const name = form.get("name");
    const address = form.get("address");
    const city = form.get("city");
    const state = form.get("state");
    const contact = form.get("contact");
    const email_id = form.get("email_id");
    const image = form.get("image");

    if (!image) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    // Read image buffer
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to Cloudinary
    const uploadRes = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "schoolImages" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      stream.end(buffer);
    });

    const imageUrl = uploadRes.secure_url;

    // Save to MySQL
    const db = await getDB();
    const [rows] = await db.query(
      `INSERT INTO schools (name, address, city, state, contact, image, email_id)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [name, address, city, state, contact, imageUrl, email_id]
    );

    return NextResponse.json({ success: true, id: rows.insertId });
  } catch (err) {
    console.error("UPLOAD ERROR:", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
