import { useFormik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import login_validate from "../lib/validate";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      subject: "",
      email: "",
      message: "",
    },
    // validate: login_validate,
    onSubmit,
  });
  const router = useRouter();
  async function onSubmit(values, { resetForm }) {
    try {
      const response = await axios.post("/api/contact", values);
      console.log(response);
      if (response.status === 200) {
        resetForm();
        toast.success("message sent successfully", { autoClose: 2000 });
        setTimeout(() => {
          router.push("/");
        }, 2000);
      }
    } catch (error) {
      toast.error(error);
    }
  }
  return (
    <section className="container mx-auto bg-white ">
      <ToastContainer />
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-[568px]">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 d">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about how we operate? Let us know.
        </p>
        <form className="space-y-8" onSubmit={formik.handleSubmit}>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Your email
            </label>
            <input
              type="email"
              id="email"
              required
              {...formik.getFieldProps("email")}
              className={`${
                formik.errors.email && formik.touched.email
                  ? "border-rose-600"
                  : ""
              } shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5`}
              placeholder="name@ueab.ac.ke"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              {...formik.getFieldProps("subject")}
              className={`${
                formik.errors.subject && formik.touched.subject
                  ? "border-rose-600"
                  : ""
              } shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5`}
              placeholder="Let us know how we can help you"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              required
              {...formik.getFieldProps("message")}
              className={`${
                formik.errors.message && formik.touched.message
                  ? "border-rose-600"
                  : ""
              } shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5`}
              placeholder="Leave a comment..."
            />
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-500 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
