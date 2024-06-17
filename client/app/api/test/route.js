import { NextResponse } from 'next/server';
import prisma from "@/prisma/client";

export async function GET(request) {
  const data = await prisma.cycle.findMany({
    take: 15,
    orderBy: {
      createdAt: 'desc',
    },
    select: {
      type: true,
      createdAt: true,
    },
  });
  return NextResponse.json(data);
}

export async function POST(request) {
    const latest = await prisma.cyc.findMany({
        take: 1,
        orderBy: {
          start: 'desc',
        },
      });
    console.log("latest",latest)
      await prisma.cyc.updateMany({
        where: {
          id: {
            equals: latest[0].id,
          },
        },
        data: {
          // Update fields as needed
         end: new Date(),
        },
      });

  return NextResponse.json("success", { status: 201 });
}
