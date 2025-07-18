import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import SigninBanner from "../banners/SigninBanner";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  return (
    <>
    <div className="flex justify-around items-center flex-row gap-2 mt-2">
      <div className="bg-indigo-300 flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 rounded-xl">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            src="images/paytm-logo.svg"
            alt="Paytm Logo"
            className="mx-auto h-8 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Create your account
          </h2>
        </div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <Label for="username" text="Username" />
              <div className="mt-2">
                <Input
                  id="username"
                  type="username"
                  name="username"
                  required={true}
                  autoComplete="username"
                  placeholder="Enter your username"
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

            <div>
              <div className="flex items-center justify-between">
                <Label for="password" text="Password" />
                <div className="text-sm">
                  <Link
                    to="/"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <Input
                  id="password"
                  type="password"
                  name="password"
                  required={true}
                  // autoComplete="current-password"
                  placeholder="Enter your Password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mt-2">
                <Label for="firstName" text="First Name" />
              </div>
              <div className="mt-2">
                <Input
                  id="firstName"
                  type="text"
                  name="firstName"
                  required={true}
                  // autoComplete="current-password"
                  placeholder="Enter your last name"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mt-2">
                <Label for="lastName" text="Last Name" />
              </div>
              <div className="mt-2">
                <Input
                  id="lastName"
                  type="text"
                  name="lastName"
                  required={true}
                  // autoComplete="current-password"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div>
              <Button type="submit" text="Create Account" />
            </div>
          </form>

          <p className="mt-4 text-center text-sm/6 text-gray-500">
            Already have a Account?
            <Link
              to="/signin"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Click Here to Sign in
            </Link>
          </p>
        </div>
      </div>
      <div className="flex min-h-full flex-col justify-center lg:px-8 rounded-xl">
        <SigninBanner/>
      </div>
    </div>
    </>
  );
}

export default Signup;
