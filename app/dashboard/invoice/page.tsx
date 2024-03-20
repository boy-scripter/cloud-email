
export default function invoice() {

    return (
        <>
            <div className='righ-top-cont py-3 w-full  gap-3 px-4 flex flex-col bg-white lg:rounded-xl '>
                <div className="box-1 px-1 w-full">

                </div>

                <div className="buy_credit border-2 p-3 rounded-lg mt-3">
                    <h1 className="text-2xl font-bold my-3">Billing & Invoices</h1>
                    <div className="email_verfication text-[#5C5C5C] font-bold mt-1">
                        Manage your Active subscriptions, view your invoices and update your payment methods
                    </div>
                </div>

                <div className='bg-white mt-5 w-full'>
                    <div className="table-cont overflow-auto rounded-2xl border-2 border-[#E0E0E0] ">
                        <table className="text-center w-[750px] md:w-full" cellPadding={20}>
                            <thead className="border-b-2 border-[#E0E0E0]">

                                <tr>
                                    <th>Invoices</th>
                                    <th>Item</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                </tr>

                            </thead>
                            <tbody>
                                <tr className="font-medium">
                                    <td className="font-bold">#BCS1012</td>
                                    <td className="font-bold">Standard Membership</td>
                                    <td>June 1, 2023</td>
                                    <td className="font-bold">$ 599.68</td>
                                    <td>
                                        <button type="submit" className="paid">Paid</button>
                                    </td>
                                </tr>
                                <tr className="font-medium">
                                    <td className="font-bold">#BCS1012</td>
                                    <td className="font-bold">Standard Membership</td>
                                    <td>June 1, 2023</td>
                                    <td className="font-bold">$ 599.68</td>
                                    <td>
                                        <button type="submit" className="unpaid">Unpaid</button>
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