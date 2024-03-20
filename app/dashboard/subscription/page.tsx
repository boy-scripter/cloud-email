
export default function Subscription() {
    return (
        <>
            <div className='righ-top-cont py-3 w-full  gap-3 px-4 flex flex-col bg-white lg:rounded-xl'>
            

                <div className="buy_credit border-2 p-3 rounded-lg mt-3">
                    <h1 className="text-2xl font-bold my-3">Subscriptions and Billing</h1>
                    <div className="email_verfication text-[#5C5C5C] font-bold mt-1">
                        Manage your Active subscriptions, view your invoices and update your payment methods
                    </div>
                </div>

                <div className='bg-white mt-4 w-full border-2 rounded-md p-3'>
                    <h1 className="text-2xl font-bold my-3">Active Subscriptions</h1>
                    <div className="table-cont overflow-auto rounded-2xl border-2 border-[#E0E0E0]">
                        <table className="text-center w-[750px] md:w-full" cellPadding={20} >
                            <thead className="border-b-2 border-[#E0E0E0]">
                                <tr>
                                    <th>Item</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Next Billing</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                <tr className="font-medium border-b-2">
                                    <td className="font-bold">Standard Membership</td>
                                    <td>June 1, 2022</td>
                                    <td>June 1, 2023</td>
                                    <td>June 1, 2023</td>
                                    <td className="font-bold">$ 599.68</td>
                                </tr>
                                <tr className="font-medium">
                                    <td className="text-[#1BC05D]  font-bold">
                                        <span className="cursor-pointer">Upgrade to Pro</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
             
            </div>
        </>
    )
}