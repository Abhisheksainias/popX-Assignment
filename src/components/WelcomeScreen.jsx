import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomeScreen = () => {
    const navigate = useNavigate();


    const handleSignupClick = () => {
        document.body.classList.add("fade-out");
        setTimeout(() => {
            navigate("/signup");
        }, 300);
    };

    const handleLoginClick = () => {
        document.body.classList.add("fade-out");
        setTimeout(() => {
            navigate("/login");
        }, 300);
    };

    return (
        <>
            <div className="border flex flex-col h-screen w-[375px] bg-white p-6">
                <div className="flex-grow"></div>

                <div className="space-y-4 mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Welcome to PopX</h1>
                    <p className="text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>

                <div className="space-y-3">
                    <button
                        className="w-full py-3 bg-[#6c47ff] text-white font-medium rounded-md hover:bg-[#5a3cd7] transition-colors"
                        onClick={handleSignupClick}
                    >
                        Create Account
                    </button>

                    <button
                        className="w-full py-3 bg-[#DCD4F9] text-[#6c47ff] font-medium rounded-md hover:bg-[#DCD4F9] transition-colors"
                        onClick={handleLoginClick}
                    >
                        Already Registered? Login
                    </button>
                </div>
            </div>
        </>
    );
}

export default WelcomeScreen;