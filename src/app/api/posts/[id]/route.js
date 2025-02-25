import Post from "@/models/Post";
import connectTodb from "@/utils/db"
import { NextResponse } from "next/server";

export const GET = async (request,{params}) => {
    const {id} = params;
    try {
        await connectTodb()
        const post = await Post.findById(id);
        return new NextResponse(JSON.stringify(post), {status:200})
    }
    catch(error) {
        return new NextResponse("Database Error", {status:500})
    }
}


export const DELETE = async (request,{params}) => {
    const {id} = params;

    try{
        await connectTodb()
        await Post.findByIdAndDelete(id);
        return new NextResponse("Post is deleted",{status:200});
    }
    catch(err) {
        return new NextResponse("Database eror", {status:500})
    }

}