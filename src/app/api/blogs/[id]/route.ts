import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
      include: {
        category: true,
      },
    });
    return NextResponse.json({
      success: true,
      data: post,
      message: "Blog fetched successfully",
    });
  } catch (error) {
    console.log("Error fetching blog", error);
    return NextResponse.json({
      success: false,
      message: "Error fetching blog",
    });
  }
}
