"use client";
import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";
import { github, google } from "@src/utils/oAuth";
import { Logo } from "@/public";
import { useAppSelector } from "@src/store/hooks";
import {
    isEmailValid,
    isNameValid,
    isPasswordValid,
    isConfirmPasswordValid,
    handleRegister,
    isReadyToRegister,
} from "@src/utils/user";

const SignUp = () => {
    const status = useAppSelector((state) => state.userReducer.status);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [acceptedPolicy, setAcceptedPolicy] = useState(false);

    const handleInputChange = ({
        target,
    }: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [target.name]: target.value });
    };
    return (
        <div className="min-h-screen flex flex-col justify-center items-center p-10">
            <div className="flex flex-col justify-center gap-10">
                <div className="flex items-center justify-center flex-col gap-5">
                    <Image src={Logo} alt="loading..." width={70} height={30} />
                    <div className="text-4xl font-semibold">Sign Up</div>
                    <div className="flex gap-2 hover:brightness-150 duration-300 text-accent-dark ">
                        Already have an account?{" "}
                        <Link href="/signin">Sign in</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="relative w-full formInput group">
                        <input
                            type="text"
                            required={true}
                            onChange={handleInputChange}
                            name="name"
                            className={`border-2 duration-300 ${
                                isNameValid(formData.name)
                                    ? "border-green-500"
                                    : "border-red-500"
                            }`}
                        />
                        <span
                            className={`border-2 ${
                                isNameValid(formData.name)
                                    ? "text-green-500"
                                    : "text-red-500"
                            }`}
                        >
                            Name
                        </span>
                    </div>
                    <div className="relative w-full formInput">
                        <input
                            type="text"
                            required={true}
                            onChange={handleInputChange}
                            name="email"
                            className={`border-2 duration-300 ${
                                isEmailValid(formData.email)
                                    ? "border-green-500"
                                    : "border-red-500"
                            }`}
                        />
                        <span
                            className={`border-2 ${
                                isEmailValid(formData.email)
                                    ? "text-green-500"
                                    : "text-red-500"
                            }`}
                        >
                            Email address
                        </span>
                    </div>
                    <div className="relative w-full formInput">
                        <input
                            type="password"
                            required={true}
                            onChange={handleInputChange}
                            name="password"
                            className={`border-2 duration-300 ${
                                isPasswordValid(formData.password)
                                    ? "border-green-500"
                                    : "border-red-500"
                            }`}
                        />
                        <span
                            className={`border-2 ${
                                isPasswordValid(formData.password)
                                    ? "text-green-500"
                                    : "text-red-500"
                            }`}
                        >
                            Password
                        </span>
                    </div>
                    <div className="relative w-full formInput">
                        <input
                            type="password"
                            required={true}
                            onChange={handleInputChange}
                            name="confirmPassword"
                            className={`border-2 duration-300 ${
                                isConfirmPasswordValid(
                                    formData.password,
                                    formData.confirmPassword
                                )
                                    ? "border-green-500"
                                    : "border-red-500"
                            }`}
                        />
                        <span
                            className={`border-2 ${
                                isConfirmPasswordValid(
                                    formData.password,
                                    formData.confirmPassword
                                )
                                    ? "text-green-500"
                                    : "text-red-500"
                            }`}
                        >
                            Confirm Password
                        </span>
                    </div>
                    <div className="flex justify-start">
                        <div
                            className={`flex gap-2 justify-center items-center text-accent-dark
							${acceptedPolicy ? "brightness-150" : ""}
						`}
                        >
                            <input
                                type="checkbox"
                                className="h-5 w-5"
                                onChange={(e) => {
                                    setAcceptedPolicy(e.target.checked);
                                }}
                            />
                            Accept our policy
                        </div>
                    </div>
                    <button
                        className={`w-full h-12 bg-primary-btn text-xl flex items-center justify-center rounded-lg duration-300  ${
                            isReadyToRegister(
                                acceptedPolicy,
                                formData.name,
                                formData.email,
                                formData.password,
                                formData.confirmPassword
                            ) === false
                                ? "hover:brightness-95"
                                : "brightness-75 cursor-not-allowed"
                        }`}
                        onClick={() =>
                            handleRegister(
                                formData.name,
                                formData.email,
                                formData.password,
                                formData.confirmPassword
                            )
                        }
                        disabled={isReadyToRegister(
                            acceptedPolicy,
                            formData.name,
                            formData.email,
                            formData.password,
                            formData.confirmPassword
                        )}
                    >
                        {status === "loading" ? "Signin..." : "Sign Up"}
                    </button>
                    <div className="flex justify-center items-center text-accent-dark gap-2"></div>
                </div>
                <div className="flex gap-3 justify-center items-center">
                    <div className="w-32 h-1 bg-slate-600" />
                    Or
                    <div className="w-32 h-1 bg-slate-600" />
                </div>
                <div className="flex justify-center items-center gap-12 md:gap-20">
                    <div
                        className="flex items-center justify-center gap-4 border-slate-600 hover:bg-slate-600 cursor-pointer rounded-lg border-2 p-3 duration-300"
                        onClick={google}
                    >
                        <FcGoogle className="text-3xl" />
                        Google
                    </div>
                    <div
                        className="flex items-center justify-center gap-4 border-slate-600 hover:bg-slate-600 cursor-pointer rounded-lg border-2 p-3 duration-300"
                        onClick={github}
                    >
                        <AiFillGithub className="text-3xl" />
                        Github
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
