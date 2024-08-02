import connect from '@/dbConfig/db'
import User from '@/models/userModel'
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'


connect()
console.log("means connected");

export async function POST(request:NextRequest){
    try{
        const reqBody =await request.json()
        console.log("data sent to back end is "  , reqBody);
        const{fname,lname , email , password} = reqBody
        console.log(reqBody);

        //check if already exist
        const user = await User.findOne({email})
        if(user){
            return NextResponse.json({error:"user already exists "} ,{status:400})
        }

        //hash password
        const salt= await bcryptjs.genSalt(10)
        const hashedpassword=await bcryptjs.hash(password,salt)

        //create new user
        const newUser = new User({
            fname,lname , email,password:hashedpassword
        })

        const savedUser = await newUser.save();
        console.log(savedUser);

        return NextResponse.json({success:"user created successfully "} ,{status:201})

    }
    catch(error : any){
        return NextResponse.json({error:error.message},{status:500})
    }
}