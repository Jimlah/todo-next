import {NextRequest, NextResponse} from "next/server";


export async function POST(request: NextRequest){
    const {username, password} = await request.json();
    console.log(username, password);

}


export async function GET(request: NextRequest){

    return new NextResponse('gone', {status: 200})
}

