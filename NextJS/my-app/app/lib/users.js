
import { cacheLife, cacheTag } from 'next/cache'
import { NextResponse } from 'next/server';

export async function getUsers() {
  'use cache'

  cacheLife('hours');
  cacheTag('users');

  //// data fetching from db

  let response = await fetch('https://dummyjson.com/users');

  if(!response.ok){
    return NextResponse.json({
      message:'error in  fetching users'
    })
  }

  const users = await response.json()



  // revalidatePath('/users')

  return users.users
}
