import { NextResponse } from 'next/server';
import prisma from "@/prisma/client";


export async function POST(request) {
  const { type,createdAt,prodDuration,
    quantity } = await request.json();
    // const data = await prisma.cycle.findMany({
    // })
    // console.log(data)
  const newdata = await prisma.production.create({
    data: {
      type,createdAt:(new Date(createdAt)).toISOString(),prodDuration,
      quantity
    },
  });
  return NextResponse.json(newdata, { status: 201 });
}

