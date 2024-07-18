import User from "@/models/User";
import connectTodb from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
export const POST = async (request) => {
    const {name,email,password} = await request.json();

    await connectTodb();
    const hashpasword = await bcrypt.hash(password,5);
    const newUser = new User({
        name,
        email,
        password:hashpasword
    })

    try {
        await newUser.save();

        return new NextResponse("User created",{
            status:201
        })
    }
    catch (err) {
        return new NextResponse(err.message,{
            status:500
        })
    }
}