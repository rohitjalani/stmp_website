import { NextRequest, NextResponse } from "next/server"

export const GET = () => {
    return NextResponse.json({ message: "Server Running" });
}

export const POST = async (request: NextRequest) => {
    const body = await request.json();
}
