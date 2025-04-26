import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function SignupPage() {
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [isAgency, setIsAgency] = useState("");

    const navigate = useNavigate();

    const handleCreateAccount = (e) => {
        e.preventDefault();
        if (!fullName || !phoneNumber || !email || !password || !isAgency) {
            alert("Please fill all required fields.");
            return;
        }
        const userData = {
            fullName,
            phoneNumber,
            email,
            password,
            companyName,
            isAgency,
        };
        localStorage.setItem("reactInternship", JSON.stringify(userData));
        setTimeout(() => {
            navigate("/profile");
        }, 300);
    };
    return (
        <>
            <div className="border flex flex-col h-screen w-[375px] bg-white p-6">
                <div className="mt-6">
                    <h1 className="text-2xl font-bold mb-6">Create your PopX account</h1>
                    <form onSubmit={handleCreateAccount}>

                        <div className="floating-label">
                            <input
                                type="text"
                                id="fullname"
                                placeholder="Full Name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                            />
                            <label htmlFor="fullName">Full Name<span>*</span></label>
                        </div>

                        <div className="floating-label">
                            <input
                                type="text"
                                id="phonenumber"
                                placeholder="Phone Number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                            <label htmlFor="phoneNumber">Phone number<span>*</span></label>
                        </div>

                        <div className="floating-label">
                            <input
                                type="email"
                                id="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <label htmlFor="email">Email address<span>*</span></label>
                        </div>

                        <div className="floating-label">
                            <input
                                type="password"
                                id="pass"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <label htmlFor="password">Password<span>*</span></label>
                        </div>

                        <div className="floating-label">
                            <input
                                type="text"
                                id="companyname"
                                placeholder="Company Name"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                            <label htmlFor="companyName">Company name</label>
                        </div>

                        <div className="mb-6">
                            <p className="text-sm font-medium text-popx-label-purple mb-2">
                                Are you an Agency?<span className="text-red-500">*</span>
                            </p>
                            <div className="flex items-center">
                                <div className="mr-4 flex items-center">
                                    <input
                                        type="radio"
                                        name="agency"
                                        value="Yes"
                                        checked={isAgency === "Yes"}
                                        onChange={(e) => setIsAgency(e.target.value)}
                                        className="h-4 w-4 text-popx-purple focus:ring-popx-purple accent-popx-purple"
                                        defaultChecked
                                    />
                                    <label htmlFor="agency-yes" className="ml-2 text-sm">
                                        Yes
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        name="agency"
                                        value="No"
                                        checked={isAgency === "No"}
                                        onChange={(e) => setIsAgency(e.target.value)}
                                        className="h-4 w-4 text-popx-purple focus:ring-popx-purple accent-popx-purple"
                                    />
                                    <label htmlFor="agency-no" className="ml-2 text-sm">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleCreateAccount}
                            className="w-full bg-popx-purple text-white py-3 rounded-md font-medium"
                        >
                            Create Account
                        </button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default SignupPage