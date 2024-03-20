import Image from "next/image"



export default function Home() {



    return (
        <>
            <div className='righ-top-cont w-full py-3 gap-5 px-4 flex flex-col bg-white md:flex-row  lg:rounded-xl '>
                <div className="box-1 px-1 flex-grow">
                 
                    <h1 className="text-2xl font-bold mt-1 mb-3">Dashboard</h1>
                    <div className="dashboard flex justify-between border-2 p-3 rounded-lg">
                        <div className="dashboard-data">
                            <h2 className="font-black text-[#4E86FF] text-2xl">50</h2>
                            <h2 className="text-2xl font-black">Verified till now</h2>
                            <div className="valid_&_invalid_data mt-2 ml-1 space-x-4">
                                <span className="valid">
                                    <Image width={20} height={20} src="https://www.cloudemailverification.com/img/thumbs_up.png" alt="" className="align-middle inline-block " />
                                        <span className="align-middle text-[#34B53A]">25</span>
                                </span>
                                <span className="invalid">
                                    <Image width={20} height={20} src="https://www.cloudemailverification.com/img/thumbs_down.png" alt="" className="align-middle inline-block " />
                                    <span className="align-middle text-[#828282]">25</span>
                                </span>
                            </div>
                        </div>
                        <div className="illnus">
                            <Image width={150} height={150} src="https://www.cloudemailverification.com/img/illus.png" alt="" /> 
                        </div>
                    </div>
                    <div className="my-4 flex justify-between items-center">
                        <span className="text-2xl font-bold">Verification Activity</span>
                        <div className="inline-block relative cursor-pointer bg-slate-200 border-2 rounded-md pr-2">
                     
                        </div>
                    </div>
                    <div className="btns grid  grid-cols-2 md:grid-cols-3 md:text-sm md:gap-y-3 xl:grid-cols-4 gap-5">
                        <button className="border-[1px] border-[#727272] py-3 w-full rounded-md">Last 24
                            Hours</button>
                        <button className="border-[1px] border-[#727272] py-3 w-full rounded-md">Last 7
                            Days</button>
                        <button className="border-[1px] border-[#727272] py-3 w-full rounded-md">Last 30
                            Days</button>
                        <button className="border-[1px] border-[#727272] py-3 w-full rounded-md">Last 12
                            Months</button>
                    </div>
                    <div className=" my-3 mt-8">
                        <canvas id="line-chart" className="w-full"></canvas>
                    </div>
                </div >
                <div className="box-2 space-y-10 mx-auto w-[340px] md:mt-7 md:mx-0 md:w-[260px] xl:w-[280px] ">
                    <div className="card-1 mx-auto rounded-md bg-[#EDF0F6] px-9 py-5 md:pt-8 md:p-3 xl:px-9">
                        <div
                            className="meter relative mx-auto aspect-square h-[130px] rounded-full bg-[#1C66DE] after:absolute after:h-[87%] after:w-[87%] after:content-[''] after:inset-0 after:m-auto after:bg-[#EDF0F6] after:rounded-full before:content-['80%'] before: before:text-white before:grid before:place-content-center before:font-bold before:inset-0 before:m-auto before:rounded-full before:w-2/5 before:h-2/5 before:bg-[#1C66DE] before:absolute before:z-[2]">
                        </div>
                        <p className="text-xl mt-2">Almost out of Credits,</p>
                        <b className="text-xl">Recharge Now!</b>
                        <div className="credits_bala    nce mt-3">
                            <p className="text-[#404852]">Remaining Credits: <span className="text-[#34B53A]">35</span></p>
                            <p className="text-[#404852]">Used Credits: <span>75</span></p>
                        </div>
                        <button className="w-full text-white rounded-md font-bold text-center py-3 bg-[#1C66DE] mt-2">View
                            Pricing</button>
                    </div>
                    <div className="card-2 relative mx-auto rounded-md bg-[#EDF0F6]  px-9 py-5 md:pt-8 md:p-3 xl:px-9">
                        <div className="flex justify-around -mt-16">
                            <Image width={20} height={20} src="https://www.cloudemailverification.com/img/dollar.png" alt=""  />
                                <Image width={20} height={20} src="https://www.cloudemailverification.com/img/banknotes.png" alt=""  />
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