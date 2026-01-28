import pool from "@/lib/db"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"

export async function POST(req) {
  try {
    const { username, email, password } = await req.json()

    if (!username || !email || !password) {
      return NextResponse.json(
        { error: "All fields required" },
        { status: 400 }
      )
    }

    const hashed = await bcrypt.hash(password, 10)

    await pool.query(
      "INSERT INTO users (username, email, password) VALUES ($1,$2,$3)",
      [username, email, hashed]
    )

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: "User already exists" },
      { status: 400 }
    )
  }
}
