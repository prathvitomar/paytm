import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signin() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  return (
    <>
      <div className="flex flex-wrap">
        <div className="flex w-full flex-col md:w-1/2">
          <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
            <div className="flex flex-col">
              <img
                src="images/paytm-logo.svg"
                alt="Paytm Logo"
                className="mt-4 w-auto"
              />
              <p className="mt-2 text-left text-3xl font-bold">Welcome back</p>
              <p className="mt-2 text-left text-gray-500">
                Welcome back, please enter your details.
              </p>
            </div>

            <button className="cursor-pointer mt-8 hover:bg-indigo-800 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white">
              <img
                className="mr-2 h-5"
                src="https://static.cdnlogo.com/logos/g/35/google-icon.svg"
                alt="Google"
              />
              Log in with Google
            </button>

            <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
              <div className="absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white text-center text-sm text-gray-500">
                or
              </div>
            </div>

            <form className="flex flex-col pt-3 md:pt-8">
              <div className="flex flex-col pt-4">
                <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                  <input
                    type="username"
                    name="username"
                    id="username"
                    className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    placeholder="Enter Username"
                    value={formData.username}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="mb-12 flex flex-col pt-4">
                <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer rounded-lg bg-blue-600 hover:bg-indigo-800 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2"
              >
                Log in
              </button>
            </form>

            <div className="py-12 text-center">
              <p className="whitespace-nowrap text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="cursor-pointer underline-offset-4 font-semibold text-gray-900 underline hover:text-indigo-800"
                >
                  Sign up for free.
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="pointer-events-none relative hidden h-screen select-none md:block md:w-1/2">
          <img
            className="-z-1 absolute top-0 h-full w-full object-cover opacity-90"
            src="https://assetscdn1.paytm.com/images/catalog/view/1752735625336.png"
            alt="Background"
          />
        </div>
      </div>
    </>
  );
}

export default Signin;