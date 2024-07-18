
import Post from "@/models/Post";
import connectTodb from "@/utils/db"
import { NextResponse } from "next/server";

export const GET = async (request) => {

  const url = new URL(request.url);
  const username = url.searchParams.get("username")
  
    try {
      await connectTodb();
      const posts = await Post.find(username && {username});
      return new NextResponse(JSON.stringify(posts), { status: 200 });
    } catch (error) {
      return new NextResponse("Database error", { status: 500 });
    }
  };

  0

export const POST = async (request) => {
  const body = await request.json();
  const newPost = new Post(body);

  try {
    await connectTodb();
    // const posts = await Post.find(username && {username});
    await newPost.save()
    return new NextResponse("Post is created",{status:201})
  }
  catch(err) {
    return new NextResponse("Database error",{status:500})
  }
}