import { NextResponse } from "next/server";

const tarefas = ["ir à academia", "Estudar Node"];

export async function GET(request: Request): Promise<NextResponse> {
  return NextResponse.json({ tarefas });
}

export async function POST(request: Request): Promise<NextResponse> {
  const data = await request.json();

  tarefas.push(data);

  return NextResponse.json({
    success: "ok",
    tarefas,
  });
}
