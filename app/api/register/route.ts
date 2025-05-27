import { connectToDB } from '@/lib/moongoose'
import User from '@/models/User'
import bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json()
    await connectToDB()

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const user = new User({ name, email, password: hashedPassword })
    await user.save()

    return NextResponse.json({ message: 'User registered successfully' }, { status: 201 })
  } catch (error) {
    console.error('Error in POST /api/register:', error)
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 })
  }
}
