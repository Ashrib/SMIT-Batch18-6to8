"use client"
import { updateUsers } from "./actions";

export default async function RefreshUsers() {
    return (
        <button
        onClick={async () => updateUsers()}
        style={{ margin: '10px', padding: '10px', border: '1px solid black' }}>refresh users</button>

    )
}

