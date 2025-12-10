import { NextResponse } from "next/server";
import { createSchoolsTable } from "../create-table";
import { getDB } from "../db";
import { writeFile } from "fs/promises";
import fs from "fs";
import path from "path";
import { v2 as cloudinary } from "cloudinary";

export async function POST(req) {
  await createSchoolsTable(); // ensure table exists

  try {
    const imgFolder = path.join(process.cwd(), "public", "schoolImages");

    if (!fs.existsSync(imgFolder)) {
      fs.mkdirSync(imgFolder, { recursive: true });
    }

    const form = await req.formData();

    const name = form.get("name");
    const address = form.get("address");
    const city = form.get("city");
    const state = form.get("state");
    const contact = form.get("contact");
    const email_id = form.get("email_id");
    const image = form.get("image");

    // save image to public folder
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload image to Cloudinary
    const uploadToCloudinary = (buffer) =>
      new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "schoolImages" },
          (err, result) => {
            if (err) return reject(err);
            resolve(result);
          }
        );
        stream.end(buffer);
      });

    const uploadRes = await uploadToCloudinary(buffer);
    const imageUrl = uploadRes.secure_url;

    const db = await getDB();
    const [rows] = await db.query(
      `INSERT INTO schools (name, address, city, state, contact, image, email_id)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [name, address, city, state, contact, imageUrl, email_id]
    );

    return NextResponse.json({ success: true, id: rows.insertId });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}