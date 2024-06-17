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
  const { type, createdAt } = await request.json();


  let newCycle;

  if (type === "down") {
    // If cycle is not ongoing, create a new cycle
    if (true) {
      const latest = await prisma.production.findMany({
        take: 1,
        orderBy: {
          createdAt: 'desc',
        },
      });
      console.log("latest",latest)

      newCycle = await prisma.cyc.create({
        data: {
          start: new Date(createdAt).toISOString(),
          prod: latest[0].type,
          quantity: latest[0].quantity,
          end:null
        },
      });
    }
  }

  if (type === "up") {
    // If cycle is ongoing, update the end time
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
       end: new Date(createdAt).toISOString(),
      },
    });
  }


  const createdCycle = await prisma.cycle.create({
    data: {
      type,
      createdAt: new Date(createdAt).toISOString(),
    },
  });

  return NextResponse.json(createdCycle, { status: 201 });
}
