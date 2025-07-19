import React from "react";

function Send() {
  return (
    <>
      <div className="p-4">
        <div className="max-w-md mx-auto bg-slate-900 rounded-xl overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-blue-500 to-indigo-600">
            <h2 className="text-xl font-semibold text-white">Send Money</h2>
            <div className="flex items-center mt-4">
              <div className="w-8 h-8 rounded-full bg-indigo-800 flex items-center justify-center text-indigo-300 text-sm font-medium">
                1
              </div>
              <div className="h-px w-12 bg-indigo-700 mx-2"></div>
              <div className="w-8 h-8 rounded-full bg-indigo-800 flex items-center justify-center text-indigo-300 text-sm font-medium">
                2
              </div>
              <div className="h-px w-12 bg-indigo-700 mx-2"></div>
              <div className="w-8 h-8 rounded-full bg-indigo-800 flex items-center justify-center text-indigo-300 text-sm font-medium">
                3
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex mb-6 bg-slate-800 rounded-md overflow-hidden">
              <button className="cursor-pointer flex-1 py-3 px-1 text-sm text-center bg-indigo-600 text-white font-medium">
                Bank Transfer
              </button>
              <button className="cursor-pointer flex-1 py-3 px-1 text-sm text-center text-slate-400 font-medium">
                PayPal
              </button>
              <button className="cursor-pointer flex-1 py-3 px-1 text-sm text-center text-slate-400 font-medium">
                Credit Card
              </button>
            </div>

            <form>
              <div className="mb-4">
                <label
                  className="block text-slate-300 text-sm mb-2"
                  for="cardName"
                >
                  Cardholder Name
                </label>
                <input
                  type="text"
                  id="cardName"
                  className="px-4 py-2.5 bg-slate-800 border border-slate-600 text-slate-300 w-full text-sm rounded-md outline-0"
                  placeholder="John Smith"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-slate-300 text-sm mb-2"
                  for="cardNumber"
                >
                  Card Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="cardNumber"
                    className="px-4 py-2.5 bg-slate-800 border border-slate-600 text-slate-300 w-full text-sm rounded-md outline-0"
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label
                    className="block text-slate-300 text-sm mb-2"
                    for="expDate"
                  >
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expDate"
                    className="px-4 py-2.5 bg-slate-800 border border-slate-600 text-slate-300 w-full text-sm rounded-md outline-0"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-slate-300 text-sm mb-2"
                    for="cvv"
                  >
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    className="px-4 py-2.5 bg-slate-800 border border-slate-600 text-slate-300 w-full text-sm rounded-md outline-0"
                    placeholder="123"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="saveCard"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded"
                    required
                  />
                  <label
                    for="saveCard"
                    className="ml-2 block text-sm text-slate-400"
                  >
                    I agree to the{" "}
                    <a
                      href="javascript:void(0)"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>

              <div className="flex flex-col space-y-4">
                <button
                  type="submit"
                  className="cursor-pointer w-full py-2.5 px-4 rounded-md flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-sm text-white font-medium transition-colors"
                >
                  Pay $79.99
                </button>
                <div className="flex items-center justify-center text-center text-slate-400 text-sm">
                  <span>Secure payment powered by Paytm</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Send;
