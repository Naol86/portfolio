import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const blogs = await prisma.post.findMany({
      include: {
        category: true,
      },
    });
    return NextResponse.json({
      success: true,
      data: blogs,
      message: "Blogs fetched successfully",
    });
  } catch (error) {
    console.log("Error fetching blogs", error);
    return NextResponse.json({
      success: false,
      message: "Error fetching blogs",
    });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // const res = await prisma.category.create/''
    const blogs = await prisma.post.create({
      data: body,
    });
    return NextResponse.json(
      {
        success: true,
        data: blogs,
        message: "blogs created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log("Error creating blogs", error);
    return NextResponse.json({
      success: false,
      message: "Error creating blogs",
    });
  }
}
