import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function LoginScreen() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        const userData = {
            email,
            password,
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

                    <h1 className="text-[28px] w-[188px] font-[500]">
                        Signin to your PopX account
                    </h1>
                    <h2 className="text-[18px] text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </h2>

                    <form onSubmit={(e) => e.preventDefault()} className="mt-6">
                        <div className="floating-label mb-4">
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter email address"
                            />
                            <label htmlFor="email">Email Address</label>
                        </div>

                        <div className="floating-label mb-6">
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password"
                            />
                            <label htmlFor="password">Password</label>
                        </div>

                        <button
                            onClick={handleLogin}
                            className=" bg-[#CBCBCB] h-[46px] text-white py-3 w-full rounded-md transition-opacity duration-300 ease-out"
                        > Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default LoginScreen;

