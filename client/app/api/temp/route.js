import { NextResponse } from 'next/server';
import prisma from "@/prisma/client";


export async function POST(request) {
  const { temp,createdAt } = await request.json();
  try {
  const newtemp = await prisma.temperature.create({
    data: {
    temp,createdAt
    },
  });
  return NextResponse.json(newtemp, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("failed", { status: 500 });
  }
  
}



