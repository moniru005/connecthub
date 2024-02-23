import { NextResponse } from "next/server"

export default function middleware(req){


      // const verify = localStorage.getItem('session')
      const url = req.url

      console.log(url)
      if(true && url.includes('/home')){
      return NextResponse.redirect('http://localhost:3000/')
      }
}