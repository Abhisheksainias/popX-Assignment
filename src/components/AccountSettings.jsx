import React from 'react'

function AccountSettings() {
    return (
        <>
            <div className="border flex flex-col h-screen w-[375px] ">
                <div className="p-4 border-b bg-white">
                    <h1 className="flex items-center text-[18px] h-[40px] pl-4 bg-white">Account Settings</h1>
                </div>

                <div className="p-4 flex items-center border-b pb-6">
                    <div className="relative mr-4">
                        <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
                            <img src="./public/Profile.png" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -right-1 -bottom-1 bg-popx-label-purple text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                            ✎
                        </div>
                    </div>
                    <div>
                        <h2 className="font-medium text-[15px]">Marry Doe</h2>
                        <h2 className="text-[14px] text-gray-600">Marry@Gmail.Com</h2>
                    </div>
                </div>

                <div className="p-4 text-sm text-gray-500 border-b pb-6">
                    Lorem ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                </div>
            </div>

        </>
    )
}

export default AccountSettings