import { connectDB } from "../../../../lib/db"
import User from "../../../models/User"
import bcrypt from "bcryptjs"


export async function POST(req) {
   try {
     await connectDB();
     const { username, email, password } = await req.json();
     const existingUser = await User.findOne({ email });
     if (existingUser) {
       return new Response(JSON.stringify({ error: "User already exists" }), { status: 400 });
     }
 
     const hashedPassword = await bcrypt.hash(password, 10);
     const newUser = await User.create({ username, email, password: hashedPassword }); 
     return new Response(JSON.stringify({ message: "User registered successfully", user: { username, email } }), { status: 201 });
 
   } catch (err) {
     return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
   }
 }