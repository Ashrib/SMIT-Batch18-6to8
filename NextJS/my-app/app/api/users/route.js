import dbConnect from "@/app/lib/db"
import { NextResponse } from "next/server"
import User from "@/app/lib/models/Users";



// import { redis } from "@/app/lib/redis/redis"

// let users = [
//     { username: 'user1' },
//     { username: 'user2' },
//     { username: 'user3' },
// ]



// export async function GET() {  /// all users

//     console.log('users api');

//     let cacheUsers = await redis.get("users:all");

//     console.log(cacheUsers)

//     if (cacheUsers) {

//         console.log("cache hit !")

//         return NextResponse.json({
//             message: 'getting all users',
//             data: JSON.parse(cacheUsers)
//         })
//     }


//     //// getting data from db


//     redis.set("users:all", JSON.stringify(users), "EX", 10)
//         console.log("cache miss !")



//     return NextResponse.json({
//         message: 'getting all users',
//         data: users
//     })
// }

// // export async function DELETE() {
// // }

// // export async function POST() {
// // }


export async function GET() {
  try {
    await dbConnect();

    const users = await User.find();

    console.log(users)

    if (users && users.length > 0) {
      return NextResponse.json(
        {
          message: "getting all users from db",
          users: users,
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        message: "couldn't find users",
        users: [],
      },
      { status: 404 }
    );
  } catch (error) {
    console.error(error);

    // 1. Added 'return' before NextResponse.json
    // 2. Passed 'error.message' instead of the raw 'error' object
    // 3. Added { status: 500 } so the client knows it failed
    return NextResponse.json(
      {
        message: "error in finding users",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
