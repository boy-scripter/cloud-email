'use client'
import Image from "next/image"
import { useRef } from "react"
import { faUpload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Verification() {

    const upload = useRef<HTMLInputElement>(null)

    return (
        <>
            <div
                className='righ-top-cont py-3 flex-grow justify-around gap-5 px-4 flex flex-col bg-white lg:rounded-xl md:flex-row'>
                <div className="box-1 px-1 w-full md:w-auto">
                    <div className="email_verfication_box mt-5">
                        <h1 className="text-2xl font-bold mt-1 mb-3">Email Verification</h1>
                        <div className="email_verfication text-[#5C5C5C] font-bold my-3">
                            We ensure the accuracy and deliverability of your email list. Check one address at a time or upload
                            multiple for verification.
                        </div>
                        <div className="flex justify-center gap-2 mt-5">
                            <input type="text" placeholder="abcxyz@gmail.com"
                                className="rounded-l-3xl border-2 p-3 outline-none placeholder:text-black  w-3/5" />
                            <button
                                className="rounded-r-3xl border-2 p-3 px-5 outline-none border-none bg-blue-500 text-white md:px-14">Verify</button>
                        </div>
                    </div>
                    <div className="Upload_section mt-12">
                        <h1 className="text-2xl font-bold">Bulk Upload</h1>
                        <div className="email_verfication text-[#5C5C5C] font-bold my-3">
                            Our accurate bulk email verifier can verify and validate email addresses in large quantities.
                        </div>
                        <div className="w-full h-[300px] p-3">
                            <input type="file" id="upload" ref={upload} className="hidden" />
                            <div onClick={() => upload.current?.click()} className=" cursor-pointer flex justify-center items-center w-full h-full border-2 border-[#1C66DE] border-dashed rounded-lg bg-[#EEEEEE] text-center">
                                <div className="box space-y-2 md:space-y-2">
                                    <Image width={100} height={100} alt="upload image" src="https://www.cloudemailverification.com/img/upload.png" className="w-12 md:w-24 mx-auto" />
                                    <h1 className="text-xl font-bold md:text-xl "> Drag & drop a CSV, TXT, <br /> XLS, XLSX or ODS
                                    </h1>
                                    <p className="text-[#1C66DE]">Browse Your Files</p>

                                    <button onClick={e => e.stopPropagation()} className="cursor-pointer border-[1px] font-bold tracking-wider px-5 rounded-md py-1 duration-500 ease-in-out transition-[color,border,background-color, box-shadow]  text-white bg-[#1C66DE] hover:bg-white hover:text-[#1C66DE] hover:border-[#1C66DE] hover:shadow-[4px_4px_25px_#4E86FF,_4px_4px_50px_#86FDE8] md:py-2"
                                        type="submit" >Upload</button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="upload_information border-2 rounded-md py-2 px-3">
                        <div className="border-b-2 flex justify-between items-center">
                            <span className="text-xl font-bold">
                            <FontAwesomeIcon icon={faUpload} className="text-blue-500" />
                               email.xlsx</span>
                            <button type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 mt-2 py-2.5 mr-2 mb-2 focus:outline-none">Download</button>
                        </div>
                        <p className="p-2 py-5"> Status: <b>Complete</b> | Emails: <b>1</b> | Run Time: <b>0.017 Sec. </b></p>
                        <p className="font-extrabold text-xl my-2">Verification Summary</p>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="box1">
                                <p> <span className="px-4 bg-blue-500 text-white">0</span> SafeToSend Addresses</p>
                                <p> <span className="px-4 bg-blue-500 text-white">0</span> SafeToSend Addresses</p>
                                <p> <span className="px-4 bg-blue-500 text-white">0</span> SafeToSend Addresses</p>
                                <p> <span className="px-4 bg-blue-500 text-white">0</span> SafeToSend Addresses</p>
                            </div>
                            <div className="box2">
                                <p> <span className="px-4 bg-blue-500 text-white">0</span> SafeToSend Addresses</p>
                                <p> <span className="px-4 bg-blue-500 text-white">0</span> SafeToSend Addresses</p>
                                <p> <span className="px-4 bg-blue-500 text-white">0</span> SafeToSend Addresses</p>
                                <p> <span className="px-4 bg-blue-500 text-white">0</span> SafeToSend Addresses</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="box-2 space-y-10 w-[340px] mx-auto md:w-[370px] md:mx-0 ">
                    <div className="card-1 mx-auto rounded-md bg-[#EDF0F6] px-9 py-5 md:pt-8 md:p-3 xl:px-9">
                        <div
                            className="meter relative mx-auto aspect-square h-[130px] rounded-full bg-[#1C66DE] after:absolute after:h-[87%] after:w-[87%] after:content-[''] after:inset-0 after:m-auto after:bg-[#EDF0F6] after:rounded-full before:content-['80%'] before: before:text-white before:grid before:place-content-center before:font-bold before:inset-0 before:m-auto before:rounded-full before:w-2/5 before:h-2/5 before:bg-[#1C66DE] before:absolute before:z-[2]">
                        </div>
                        <p className="text-xl mt-2">Almost out of Credits,</p>
                        <b className="text-xl">Recharge Now!</b>
                        <div className="credits_balance mt-3">
                            <p className="text-[#404852]">Remaining Credits: <span className="text-[#34B53A]">35</span></p>
                            <p className="text-[#404852]">Used Credits: <span>75</span></p>
                        </div>
                        <button className="w-full text-white rounded-md font-bold text-center py-3 bg-[#1C66DE] mt-2">View
                            Pricing</button>
                    </div>
                    <div className="card-2 relative mx-auto rounded-md bg-[#EDF0F6]  px-9 py-5 md:pt-8 md:p-3 xl:px-9">
                        <div className="flex justify-around -mt-16">
                            <Image width={100} height={100} src="https://www.cloudemailverification.com/dollar.png" alt="" className="w-2/5" />
                            <Image width={100} height={100} src="https://www.cloudemailverification.com/banknotes.png" alt="" className=" w-2/5" />
                        </div>
                        <h1 className="text-2xl font-bold my-3 ">Save more money on our Pay - As - You
                            - Go
                            Plans</h1>
                        <span className="text-[#404852]">We offer best in class Plans <br /> For Every individual.</span>
                        <button className="w-full text-white rounded-md font-bold text-center py-3 bg-[#1C66DE] mt-3">View
                            Pricing</button>
                    </div>

                </div>

            </div>

        </>
    )
}


