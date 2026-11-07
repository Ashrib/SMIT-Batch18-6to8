'use server'

import { updateTag } from 'next/cache'

export async function updateUsers() {

    //   await db.users.update(...)

    await fetch('https://dummyjson.com/users');

    updateTag('users') // Invalidates all 'users' caches
}