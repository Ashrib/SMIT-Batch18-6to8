import { NextResponse } from "next/server"
import { redis } from "@/app/lib/redis/redis"

let users = [
    { username: 'user1' },
    { username: 'user2' },
    { username: 'user3' },
]



export async function GET() {  /// all users

    console.log('users api');

    let cacheUsers = await redis.get("users:all");

    console.log(cacheUsers)

    if (cacheUsers) {

        console.log("cache hit !")

        return NextResponse.json({
            message: 'getting all users',
            data: JSON.parse(cacheUsers)
        })
    }


    //// getting data from db


    redis.set("users:all", JSON.stringify(users), "EX", 10)
        console.log("cache miss !")



    return NextResponse.json({
        message: 'getting all users',
        data: users
    })
}

// export async function DELETE() {
// }

// export async function POST() {
// }

