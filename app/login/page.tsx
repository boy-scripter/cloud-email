
import Image from "next/image"
import Logo from "@/components/Logo"
import Link from "next/link"

export default function Login() {
    return (
        <>
            <div className="flex flex-col md:flex-row">
                <div className=' text-center md:basis-[50%] first-cont'>
                    <div className="logo p-2 bg-[#1C66DE] md:bg-transparent">
             <Logo></Logo>
                    </div>
                    <h1 className="mt-12 leading-8 font-semibold text-[25px]">Welcome Back!</h1>
                    <span className="inline-block text-[#676767] font-semibold leading-8 mt-2 ">Please enter your credentials to
                        continue.</span>
                    <form className="mt-12 px-5" action="">
                        <input
                            className="border-b-2 border-[#B4B4B4] rounded-none w-full p-1 focus:outline-none placeholder:text-[#676767] border-box max-w-sm"
                            type="text" placeholder="Username" /> <br />
                        <input
                            className="border-b-2  border-[#B4B4B4] rounded-none w-full p-1 focus:outline-none placeholder:text-[#676767] border-box max-w-sm mt-5"
                            type="password" placeholder="Password" />
                        <p className="w-full  invisible  max-w-sm mx-auto text-right text-[#1C66DE] font-bold leading-10"><a
                            href="/forgot" >Forgot Password?</a> </p>
                        <button
                            className="cursor-pointer border-2 mt-6 font-bold tracking-wider px-24 py-3 duration-500 ease-in-out transition-[color,border,background-color, box-shadow]  text-white rounded-full bg-[#1C66DE] hover:bg-white hover:text-[#1C66DE] hover:border-[#1C66DE] hover:shadow-[4px_4px_25px_#4E86FF,_4px_4px_50px_#86FDE8]"
                            type="submit">Login</button>
                        <p className="mt-5 text-[#1C66DE] font-bold">
                            <Link href="/signup">Don’t have an Account yet? Create New
                                Account</Link>

                        </p>
                    </form>
                </div>
                <div className="second-cont mt-10 md:basis-[50%] md:m-0">
                    <Image width={200} height={50} src="https://www.cloudemailverification.com/img/cloud_top.svg" className="md:hidden" alt="" />
                    <div className="text-white text-center bg-[#1C66DE] shadow-[0px_-3px_0px_0px_#1C66DE] md:h-screen">
                        <div className="computer w-full flex justify-center px-3 relative overflow-hidden">
                            <Image width={40} height={40} className="hidden absolute top-[-13%] left-[-310px] md:block" src="https://www.cloudemailverification.com/img/blob_login.png" alt="" />
                            <Image width={40} height={40} className="hidden absolute top-[10%] right-0 md:block" src="https://www.cloudemailverification.com/img/paper_plan.png" alt="" />
                            <Image width={300} height={300} src="https://www.cloudemailverification.com/img/computer_login.gif" className="w-[80%]" alt="" />
                        </div>
                        <p className="leading-8 text-lg">Trusted by more than 500 Companies.</p>
                        <div className="brand w-full flex justify-center p-3 pt-0">
                            GOOGLR , FACEBOOK
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}