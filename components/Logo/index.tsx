import Image from "next/image"
import Link from "next/link"    
export default function Logo() {
    return (
        <div className="logo  bg-blue-500 cursor-pointer inline-flex p-3 flex-nowrap gap-1 items-center rounded-md">
         <Link href='/home'>   <Image src='/logo.png' width={35} height={35} alt="logo"></Image></Link>
            <p className="text-lg font-medium text-white ">Email Verifier</p>
        </div>
    )
}