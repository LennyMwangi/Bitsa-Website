import Link from 'next/link'
import Image from 'next/image'
// import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { useState } from 'react';
import { useFormik } from 'formik';
import { registerValidate } from '../../lib/validate'
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';

export default function register() {

    const [show, setShow] = useState({ password: false, cpassword: false })
    const[loading,setLoading]=useState(false)
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            fname: '',
            lname: '',
            email: '',
            password: '',
            cpassword: ''
        },
        validate: registerValidate,
        onSubmit
    })

    async function onSubmit(values) {
        const options = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        }

        await fetch('http://localhost:3000/api/auth/signup', options)
            setLoading(true)
            .then(res => res.json())
            .then((data) => {
                if (data) {
                    toast.success('Registration successful! Please check your email to verify your account');
                    router.push('http://localhost:3000')
                }
            })
            setLoading(false)
        }
    
    return (
        <section className="">
            <ToastContainer />
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:my-8 min-h-screen lg:py-0">

                <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Create your account Now
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>
                            <div
                            className={`${formik.errors.fname && formik.touched.fname ? 'border-rose-600' : ''}`}>
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="fname"
                                    id="fname"
                                    {...formik.getFieldProps('fname')}
                                    // {...register("email", { required: true })}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="First Name"
                                />
                                {/* {errors.email && <span className="text-red-600 text-sm">Email is required</span>} */}
                            </div>
                            <div
                            className={`${formik.errors.lname && formik.touched.lname ? 'border-rose-600' : ''}`}>
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lname"
                                    id="lname"
                                    {...formik.getFieldProps('lname')}
                                    // {...register("email", { required: true })}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Last Name"
                                />
                                {/* {errors.email && <span className="text-red-600 text-sm">Email is required</span>} */}
                            </div>
                            <div
                                className={`${formik.errors.email && formik.touched.email ? 'border-rose-600' : ''}`}>

                            
                                <label
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
                            <div 
                            className={`${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Password
                                </label>
                                <input
                                    type={show ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    {...formik.getFieldProps('password')}

                                    // {...register("password", { required: true, minLength: 8})}
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                                />
                                {/* {errors.password && (<span className="text-red-600 text-sm">{errors.password.message}</span>)} */}

                            </div>
                            <div
                                className={`${formik.errors.cpassword && formik.touched.cpassword ? 'border-rose-600' : ''}`}>

                                <label
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                Confirm Password
                                </label>
                                <input
                                    // onKeyUp={passwordMatch}
                                    type={show ? "text" : "password"}
                                    {...formik.getFieldProps('cpassword')}

                                    // {...register("cpassword", { required: true, minLength: 8, validate: passwordMatch})}
                                    name="cpassword"
                                    id="cpassword"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                {/* {errors.cpassword && <span className="text-red-600 text-sm">{errors.cpassword.message}</span>} */}
                            </div>
                            
                            <button
                                type="submit"
                                className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                {loading ? 'Loading...' : 'Sign Up'}

                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account with us?{" "}
                                <Link
                                    href="/auth/login"
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Sign In
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}
