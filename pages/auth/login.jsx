import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import login_validate from '../../lib/validate';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { HiFingerPrint } from 'react-icons/hi'


const Login = () => {
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    // formik hook
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate: login_validate,
        onSubmit
    })

    

    async function onSubmit(values,{ resetForm }) {
        setLoading(true)
        const status = await signIn('credentials', {
            redirect: false,
            email: values.email,
            password: values.password,
            callbackUrl: "/"
        })

        if (status.ok) {
            resetForm()
            toast.success('Login successful!');
            router.push(status.url)
        }
        toast.error('Login failed')
        setLoading(false)
    }
    
    // Google Handler function
    async function handleGoogleSignin() {
        signIn('google', { callbackUrl: "http://localhost:3000" })
    }
    



    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <ToastContainer />
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Log into your Account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>
                            <div
                                className={`${formik.errors.email && formik.touched.email ? 'border-rose-600' : ''}`}>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    {...formik.getFieldProps('email')}
                                    // {...register("email", { required: true })}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="<studentid>@ueab.ac.ke"
                                />
                                {/* {errors.email && <span className="text-red-600 text-sm">Email is required</span>} */}
                            </div>
                            <div>

                                <label
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Password
                                </label>
                                <div
                                    className={`${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''} flex items-center justify-between bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  w-full `}
                                >
                                <input
                                    type={show ? "text" : "password"}
                                    name="password"
                                        id="password"
                                        className='flex-auto p-2.5 bg-transparent'
                                    {...formik.getFieldProps('password')}
                                    placeholder="••••••••"

                                />
                                <span className='icon flex items-center px-4' onClick={() => setShow(!show)}>
                                    <HiFingerPrint size={25} />
                                    </span>
                                </div>

                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                {loading ? 'Loading...' : 'Sign In'}

                            </button>
                            <div className="border border-gray-400 hover:border-gray-800 rounded p-2 grid place-items-center">
                                <button type='button' className='flex items-center cursor-pointer text-gray-600' onClick={handleGoogleSignin} >
                                    <Image src='https://freesvg.org/img/1534129544.png' className='mr-2' width="20" height={20} ></Image>    Sign In with Google 
                                </button>
                            </div>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don't have an account?{" "}
                                <Link
                                    href="/auth/register"
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Sign Up
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Login