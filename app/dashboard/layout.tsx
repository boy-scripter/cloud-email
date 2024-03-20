'use client'

import Image from "next/image"
import Logo from "@/components/Logo"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmarkCircle, faCircleCheck, faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons"
import { faHouse, faReceipt, faHandHoldingHand, faUser } from "@fortawesome/free-solid-svg-icons"

export default function Layout({ children }: { children: ReactNode }) {

    let [isMobNavOpen, setIsMobNavOpen] = useState<Boolean>(false)
    let pathName = usePathname().split('/').at(-1);
    console.log(pathName)

    return (
        <>
            <div className="flex bg-blue-500 flex-col  lg:flex-row  lg:py-2 lg:pr-2 "   >
                <div className="flex relative bg-blue-500  lg:py-2  ">

                    <div className="lg:hidden flex  w-full bg-white p-3 pt-4">
                        <label onClick={() => setIsMobNavOpen(true)} className="hamburger-lines  inline-block mb-2 space-y-1  cursor-pointer " >
                            <span className="block h-1 w-7 rounded-lg bg-black"></span>
                            <span className="block h-1 w-7 rounded-lg bg-black"></span>
                            <span className="block h-1 w-7 rounded-lg bg-black"></span>
                        </label>
                    </div>

                    <nav className={`absolute transition-transform z-100 ${isMobNavOpen ? 'translate-x-0' : '-translate-x-full'} left-0 bg-blue-500 top-0 navbar lg:translate-x-0 lg:static lg:inline-block`}>
                        <div className="h-screen inline-flex flex-col ">
                            <div className="logo mb-4 items-center mx-5 w-max flex justify-center rounded-lg">
                                <Logo></Logo>
                                <FontAwesomeIcon onClick={() => setIsMobNavOpen(false)} className="lg:hidden text-2xl text-white cursor-pointer" icon={faXmarkCircle} />
                            </div>

                            <ul className="menu-items inline-flex flex-col text-lg  text-white font-bold">
                                <li className={`p-2 pl-4 ${pathName == 'profile' ? 'bg-white text-blue-500' : ''}`}>
                                    <Link className="inline-flex items-center gap-1" href="profile">
                                        <FontAwesomeIcon icon={faUser} />
                                        Profile
                                    </Link>
                                </li>
                                <li className={`p-2 pl-4 ${pathName == 'home' ? 'bg-white text-blue-500' : ''}`}>
                                    <Link className="inline-flex items-center gap-1" href="home">
                                        <FontAwesomeIcon icon={faHouse} />
                                        Dashboard
                                    </Link>
                                </li>
                                <li className={`p-2 pl-4 ${pathName == 'verfication' ? 'bg-white text-blue-500' : ''}`}>
                                    <Link className="inline-flex items-center gap-1" href="verfication">
                                        <FontAwesomeIcon icon={faCircleCheck} />
                                        Email Verification
                                    </Link>
                                </li>
                                <li className={`p-2 pl-4 ${pathName == 'subscription' ? 'bg-white text-blue-500' : ''}`}>
                                    <Link className="inline-flex items-center gap-1" href="subscription">
                                        <FontAwesomeIcon icon={faHandHoldingHand} />
                                        Subscriptions
                                    </Link>
                                </li>
                                <li className={`p-2 pl-4 ${pathName == 'invoice' ? 'bg-white text-blue-500' : ''}`}>
                                    <Link className="inline-flex items-center gap-1" href="invoice">
                                        <FontAwesomeIcon icon={faReceipt} />
                                        Invoices
                                    </Link>
                                </li>
                                <li className={`p-2 pl-4 ${pathName == 'logout' ? 'bg-white text-blue-500' : ''}`}>
                                    <Link className="inline-flex items-center gap-1" href="logout">
                                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                            <div className="dot-dot-image bg-blue-500 mt-1">
                                <Image width={100} height={300} src="https://www.cloudemailverification.com/img/dots.png" alt="dots" className=" overflow-hidden " />
                            </div>
                        </div>
                    </nav>

                </div>
                {children}
            </div >
        </>
    )


}