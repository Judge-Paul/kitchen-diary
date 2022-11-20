import React from 'react'
import Google from '../assets/continue-with-google.svg'
import BG from '../assets/form-bg.png'


const Login = () => {
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
                <form className="mt-6 lg:pl-20 px-10 py-12">
                    <h4 className="text-4xl text-[#F67A24] font-bold pb-2 text-bold">Welcome back!</h4>
                    <h4 className="text-base pb-10">Login to your account to access our amazing features</h4>
                    <a href="#">
                        <img src={Google} alt="Google" className="w-full pb-5" />
                    </a>
                    <div className="grid grid-cols-9 text-center items-center">
                        <hr className="col-span-4" />
                        <p className="col-span-1">or</p>
                        <hr className="col-span-4" />
                    </div>
                    <div className="mb-2 pt-4">
                        <label
                            htmlFor="email"
                            className="block text-md text-gray-500"
                        >
                            Email address
                        </label>
                        <label className="relative block">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg className="h-5 w-5 fill-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30"
                                    height="30" viewBox="0 0 30 30">
                                    <path xmlns="http://www.w3.org/2000/svg" d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#6A6A6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path xmlns="http://www.w3.org/2000/svg" d="M22 6L12 13L2 6" stroke="#6A6A6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                            <input
                                className="w-full py-2 pl-10 pr-4 bg-white border rounded-md focus:border-[#F67A24] focus:outline-none"
                                placeholder="Johndoe@gmail.com" type="email" />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-md text-gray-500"
                        >
                            Password
                        </label>
                        <label className="relative block">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg className="h-5 w-5 fill-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30"
                                    height="30" viewBox="0 0 30 30">
                                    <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="#6A6A6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="#6A6A6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                            <input
                                className="w-full py-2 pl-10 pr-4 bg-white border rounded-md focus:border-[#F67A24] focus:outline-none"
                                placeholder="Minimum of 8 characters" type="password" />
                        </label>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                            Keep me logged in
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-[#F67A24] hover:text-[#FB923C]">
                            Forgot Password?
                            </a>
                        </div>
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transform bg-[#F67A24] rounded-md hover:bg-[#F97316] focus:outline-none focus:bg-[#EA580C]">
                            Login
                        </button>
                    </div>
                    <p className="mt-5 text-xs font-light text-center text-gray-700">
                        Don&apos;t have an account?{" "}
                        <a
                            href="/register"
                            className="font-medium text-[#F67A24] hover:underline"
                        >
                            Sign up
                        </a>
                    </p>
                </form>
                <img src={BG} alt="Kitchen Login Background Image" className="max-h-[800px] ml-auto hidden lg:block" />
        </div>
    )
}

export default Login