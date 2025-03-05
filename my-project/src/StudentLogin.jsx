import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

const StudentLogin = () => {
    const [rollNumber, setRollNumber] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = () => {
        // Dummy authentication (Replace with backend API call later)
        if (rollNumber === "DS202401" && password === "123456") {
            router.push("/student-dashboard");
        } else {
            setError("Invalid Roll Number or Password");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center mb-4">Student Login</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <Input
                    type="text"
                    placeholder="Roll Number"
                    value={rollNumber}
                    onChange={(e) => setRollNumber(e.target.value)}
                    className="mb-4"
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mb-4"
                />
                <Button onClick={handleLogin} className="w-full bg-blue-600 text-white">
                    Login
                </Button>
            </div>
        </div>
    );
};

export default StudentLogin;
