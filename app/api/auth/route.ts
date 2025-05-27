
import { connectToDB } from '@/lib/moongoose'
import User from '@/models/User'
import bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { name, email, password } = await req.json()
  await connectToDB()

  const existingUser = await User.findOne({ email })
  if (existingUser) {
    return NextResponse.json({ message: 'User already exists' }, { status: 400 })
  }

  const hashedPassword = await bcrypt.hash(password, 10)
  const newUser = new User({ name, email, password: hashedPassword })
  await newUser.save()

  return NextResponse.json({ message: 'User registered successfully' })
}
