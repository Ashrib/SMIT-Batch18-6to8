import { NextResponse } from "next/server"

export async function GET() {
    let users = [
        {username: 'user1'},
        {username: 'user2'},
        {username: 'user3'},
    ]

    console.log('users api')

    return NextResponse.json({
        message: 'getting all users',
        data: users
    })
}

// export async function DELETE() {
// }

// export async function POST() {
// }

