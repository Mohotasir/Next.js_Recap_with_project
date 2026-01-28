import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import pool from "../../../../lib/db"
import bcrypt from "bcryptjs"
export const authOptions = {
   providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "email", type: "email"},
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
          if(!credentials.email || !credentials.password){
          throw new Error("crdential missing!!!") 
          }
          const result = await pool.query(
            `SELECT id, username, email, password
             FROM users
             WHERE email = $1`,
             [credentials.email]
          );
          if(result.rows.length === 0){
            throw new Error("User not found.")
          }
          const user = result.rows[0]

          const isvalid = await bcrypt.compare(
            credentials.password , user.password
          )
          if(!isvalid){
            throw new Error("Invalid password.")

          }
          return {
            id: user.id,
            username:user.username,
            email: user.email
          }
        }
      })
    ],

    // session: {
    //   strategy: "jwt",
    // },
  
    pages: {
      signIn: "/login",
    },
  
    secret: process.env.NEXTAUTH_SECRET,
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }