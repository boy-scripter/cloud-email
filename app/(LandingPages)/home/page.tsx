'use client'

import Image from "next/image"

function Home() {


    console.log('server')

    return (
        <>
            <div className="bg-blue-500 rounded-t-2xl mt-2 h-[calc(100vh-59px)]">
                <div className="flex flex-col justify-between items-center pt-10 px-8 md:flex-row md:px-12">
                    <div className="">
                        <p className="text-white w-full ">Say Goodbye to Email Bounces, Hello to Success.</p>
                        <p className="text-4xl font-bold text-white leading-tight 2xl:leading-[6.8rem] 2xl:text-5xl ">Powerful Email Verification Tool
                        </p>
                        <p className="text-white mt-5 leading-loose 2xl:text-2xl 2xl:leading-[50px]">Don't Let Invalid Emails Hold You Back - Validate Now!
                            Boost your Email Deliverability, Engagement, and Sender Reputation with our Advanced Email Verification Technology. Enjoy Increased Open Rates, Better Engagement, and Ultimately, More Successful Campaigns.
                        </p>
                        <button className="bg-white px-10 py-2 rounded-md text-sky-500 shadow-[0px_4px_20px_#00000040] mt-6">
                            Try Now
                        </button>

                    </div>
                    <div className="md:basis-[1300px]">
                        <Image width={500} height={500} src="https://www.cloudemailverification.com/img/pagegirl.svg" alt="" className=" " />
                    </div>
                </div>
                <p className="text-white w-full p-5 px-14">Trusted by more than 500 Companies.</p>
            </div>
        </>
    )

}

export default Home