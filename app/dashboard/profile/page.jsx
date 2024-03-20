

export default function Profile() {
    return (
        <>
            <div className='righ-top-cont py-3 w-full justify-around gap-5 px-4 flex flex-col bg-white lg:rounded-xl md:flex-row'>
                <div className="box-1 px-1 w-full">
                    <div className="user_icon_&_searchbar flex justify-between items-center ">

                    </div>
                    <div className="p-3 rounded-lg">
                        <h1 className="text-2xl font-bold my-4">Profile Settings</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            <div className="edit_your_profile border-2 rounded-md p-5">
                                <h1 className="text-xl font-black leading-10">Edit Profile</h1>
                                <hr className="mb-5" />
                                <div className="Email Address">
                                    <label for="Email Address" className="block my-2 font-black ">Email Address</label>
                                    <input type="text" id="Email Address"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                                        value="abcy@gmail.com" readonly disabled />
                                </div>
                                <div className="first_name">
                                    <label for="first_name" className="block my-2 font-black ">First name</label>
                                    <input type="text" id="first_name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                        placeholder="Enter Name" value="XYZ Kumar" />
                                </div>
                                <div className="Last Name">
                                    <label for="Last Name" className="block my-2 font-black ">Last Name</label>
                                    <input type="text" id="Last Name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                        placeholder="Enter Name" value="XYZ Kumar" />
                                </div>
                                <div className="Company Name">
                                    <label for="Company Name" className="block my-2 font-black ">Company Name</label>
                                    <input type="text" id="Company Name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                        placeholder="Enter Name" value="XYZ Kumar" />
                                </div>
                                <button type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 mt-5 py-2.5 mr-2 mb-2 focus:outline-none">Save
                                    Changes</button>
                            </div>



                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}