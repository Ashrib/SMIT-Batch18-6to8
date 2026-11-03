import { NextResponse } from "next/server";

export async function GET(request , {params}) {

    let {id} = await params
    console.log(id)

    return NextResponse.json({
        message: 'single post'
    });
}