import User from "@/models/User";
import connectTodb from "@/utils/db";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github"
import GooglrProvider from "next-auth/providers/google"
import bcrypt from "bcryptjs"


const handler = NextAuth({
    providers: [
        GithubProvider({
            clientId:process.env.GITHUB_ID,
            clientSecret:process.env.GITHUB_SECRET
        }),
        GooglrProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_SECRET
        }),
        
        CredentialsProvider({
            id:"credentials",
            name:"Credentials",

            async authorize(credentials){
                // connecting to dataabase
                await connectTodb();

                try{
                // finding user in the database through email
                    const user = await User.findOne({email: credentials.email})
                // if user exist then check the password is coorect or not
                    if(user) {
                        const isPasswordCorrect = await bcrypt.compare(
                            credentials.password,
                            user.password
                        )

                        if(isPasswordCorrect){
                            return user;
                        }
                        else{
                            throw new Error("Wrong Credentials")
                        }
                    }
                    else{
                        throw new Error("User not found")
                    }
                }
                catch(err) {
                    throw new Error(err)
                }
            }
        })
    ],
    pages:{
        error:"/dashboard/login"
    }
})

export {handler as GET, handler as POST};