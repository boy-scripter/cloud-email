'use client'

import Image from "next/image"
import Link from "next/link"
import Logo from "@/components/Logo"

export default function Navbar() {


    return (
        <>
            <header className="flex items-center justify-between p-3 rounded-b-xl bg-blue-500">
                <Link href='/home'>
                    <Logo></Logo>
                </Link>
                <ul className="block flex gap-2">
                    <li> <Link href='login'> <button className="btn-primary-white">Login</button>  </Link>  </li>
                    <li> <Link href='signup'> <button className="btn-primary-white">Signup</button>  </Link> </li>
                </ul>
            </header>
        </>
    )
}

