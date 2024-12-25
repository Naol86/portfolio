import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const categories = await prisma.category.findMany({});
    return NextResponse.json({
      success: true,
      data: categories,
      message: "Categories are fetched successfully",
    });
  } catch (error) {
    console.log("Error fetching category", error);
    return NextResponse.json({
      success: false,
      message: "Error fetching category",
    });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // const res = await prisma.category.create/''
    const category = await prisma.category.create({
      data: body,
    });
    return NextResponse.json(
      {
        success: true,
        data: category,
        message: "Category created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log("Error creating category", error);
    return NextResponse.json({
      success: false,
      message: "Error creating category",
    });
  }
}
