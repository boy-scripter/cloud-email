import Logo from "@/components/Logo"
import Image from "next/image"
import Link from "next/link"

export default function Signup() {
    return (
        <>
            <div className='cont flex flex-col md:flex-row'>
                <div className='first-cont bg-white text-center md:basis-[50%] '>
                    <div className="mt-4">
                        <Logo></Logo>
                    </div>
                    <h1 className="mt-8 leading-8 font-semibold text-[25px]">Let’s Get Started</h1>
                    <span className="inline-block text-[#676767] font-semibold leading-8 mt-2 ">Sign up for free. No credit card
                        required.</span>

                    {/* <div className="text-lg text-red-600">
                        {'error'}
                    </div> */}

                    <form className="px-5 space-y-3 mt-8 max-w-md mx-auto text-[#676767]" action="/signup" method="POST">

                        <input type="text" placeholder="First Name" name="name"
                            className="border-b-2 font-bold border-[#B4B4B4] rounded-none w-full p-1 focus:outline-none placeholder:text-[#676767] placeholder:font-bold border-box " /><br />
                        {/* <p className="text-sm text-red-600 text-left">@error('name'){{ $message }}@enderror</p><br /> */}

                        <input type="text" placeholder="Last Name" name="last_name"
                            className="border-b-2 font-bold border-[#B4B4B4] rounded-none w-full p-1 focus:outline-none placeholder:text-[#676767] placeholder:font-bold border-box" /><br />
                        {/* <p className="text-sm text-red-600 text-left ">@error('last_name'){{ $message }}@enderror</p><br /> */}

                        <input type="text" placeholder="Company Name" name="company_name"
                            className="border-b-2 font-bold border-[#B4B4B4] rounded-none w-full p-1 focus:outline-none placeholder:text-[#676767] placeholder:font-bold border-box" /><br />
                        {/* <p className="text-sm text-red-600 text-left ">@error('company_name'){{ $message }}@enderror</p><br /> */}

                        <input type="text" placeholder="Email Address" name="email"
                            className="border-b-2 font-bold border-[#B4B4B4] rounded-none w-full p-1 focus:outline-none placeholder:text-[#676767] placeholder:font-bold border-box" /><br />



                        <input type="password" placeholder="Password" name="password"
                            className="border-b-2 font-bold border-[#B4B4B4] rounded-none w-full p-1 focus:outline-none placeholder:text-[#676767] placeholder:font-bold border-box" /><br />
                        {/* <p className="text-sm text-red-600 text-left w-full">@error('password'){{ $message }}@enderror</p> */}
                        <p className="text-left text-sm leading-10 font-bold">Must have at least 16 characters.</p>

                        <div className="checkbox text-left mt-1 mb-1 w-full ">
                            <label className="px-1 align-middle cursor-pointer">
                                <input type="checkbox" className="align-middle w-4 h-4" />
                                <span className="align-middle font-bold text-[13px]">&nbsp;Yes! Send me the latest news from Cloud Email
                                    Verification.</span></label> <br />
                        </div>
                        <div className="checkbox text-left mt-1 mb-3 w-full ">
                            <label className="px-1 align-middle cursor-pointer">
                                <input type="checkbox" className="align-middle w-4 h-4" />
                                <span className="align-middle font-bold text-[13px]"> &nbsp;I Agree to the Terms of Services and Privacy
                                    Policy.</span></label>  <br />
                        </div>
                        <button
                            className="cursor-pointer border-2 mt-6 font-bold duration-500 ease-in-out transition-[color,border,background-color, box-shadow] tracking-wider px-24 py-3 text-white rounded-full bg-[#1C66DE] hover:bg-white hover:text-[#1C66DE] hover:border-[#1C66DE] hover:shadow-[4px_4px_25px_#4E86FF,_4px_4px_50px_#86FDE8]"
                            type="submit">Sign Up</button>
                        <p className="mt-5 text-[#1C66DE] my-3 pb-5 font-bold"><Link href="/login">Already have an Account? Login</Link> </p>
                    </form>
                </div>
                <div className="second-cont mt-10 md:basis-[50%] md:m-0">
                    <Image width={200} height={50} src="https://www.cloudemailverification.com/img/cloud_top.svg" className="md:hidden" alt="" />
                    <div className="text-white text-center bg-[#1C66DE] shadow-[0px_-3px_0px_0px_#1C66DE] md:h-full">

                        <div className="computer w-full flex justify-center px-3 relative overflow-hidden">
                            <Image width={400} height={400} className="hidden absolute top-[-2%] left-[-200px] md:block"
                                src="https://www.cloudemailverification.com/img/reset-blob.png" alt="" />

                            <Image width={300} height={100} src="https://www.cloudemailverification.com/img/reset-password.gif" className="w-3/4 ml-5 md:mt-8 " alt="" />
                        </div>

                        <p className="leading-8 text-lg md:mt-14">Trusted by more than 500 Companies.</p>
                        <div className="brand w-full flex justify-center p-3 pt-0">
                            GOOGLE FACEBOOK
                        </div>
                    </div>

                </div>

            </div>


        </>
    )
}