import React from "react";

const Page = () => {
  return (
    <section className="w-[100vw] flex flex-col items-center bg-white text-black gap-8 sm:gap-16">
      <section className="text-center w-full sm:w-[60%] flex flex-col gap-8">
        <h1 className="text-4xl sm:text-5xl font-semibold">
          <span className="text-blue-900">Payment</span> Gateways
        </h1>
        <div className="w-48 h-48 sm:w-96 sm:h-96 bg-blue-300 self-center"></div>
        <p className="text-lg sm:text-2xl font-semibold text-gray-600">
          Welcome to the Payment Gateways at Xettle! We understand that the
          choice of payment gateways is a critical decision for any e-commerce
          business. This page provides an overview of the payment gateway
          options we offer to ensure secure and seamless transactions for your
          online store.
        </p>
      </section>
      <section className="w-full sm:w-[85%] flex flex-col gap-8">
        <h1 className="text-2xl sm:text-3xl font-semibold">
          Our Payment Gateway options
        </h1>
        <div className="w-full flex flex-col">
          <p className="font-bold">Debit & Credit Cards</p>
          <div className="flex gap-1">
            <div className="w-16 h-8 bg-orange-300"></div>
            <div className="w-16 h-8 bg-orange-300"></div>
            <div className="w-16 h-8 bg-orange-300"></div>
          </div>

          <div className="self-end">
            <p className="font-bold">Debit & Credit Cards</p>
            <div className="flex gap-1 ">
              <div className="w-16 h-8 bg-orange-300"></div>
              <div className="w-16 h-8 bg-orange-300"></div>
              <div className="w-16 h-8 bg-orange-300"></div>
            </div>
          </div>

          <p className="font-bold">Debit & Credit Cards</p>
          <div className="flex gap-1">
            <div className="w-16 h-8 bg-orange-300"></div>
            <div className="w-16 h-8 bg-orange-300"></div>
            <div className="w-16 h-8 bg-orange-300"></div>
          </div>
        </div>
      </section>
      <section className="w-full sm:w-[76%] ">
        <div className="flex flex-col gap-6 w-full">
          <h2 className="w-[24ch] font-bold text-2xl">
            A System Designed to Handle End to End Payments
          </h2>

          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-lg text-gray-600">
              Accept All Payment Modes
            </h3>
            <p className="text-gray-500">
              With Domestic and International Credit & Debit cards, EMIs (
              Credit/Debit Cards & Cardless), PayLater, Netbanking from 58
              banks, UPI and 8 mobile wallets, Razorpay provides the most
              extensive set of payment methods.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-lg text-gray-600">
              Accept All Payment Modes
            </h3>
            <p className="text-gray-500">
              With Domestic and International Credit & Debit cards, EMIs (
              Credit/Debit Cards & Cardless), PayLater, Netbanking from 58
              banks, UPI and 8 mobile wallets, Razorpay provides the most
              extensive set of payment methods.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-lg text-gray-600">
              Accept All Payment Modes
            </h3>
            <p className="text-gray-500">
              With Domestic and International Credit & Debit cards, EMIs (
              Credit/Debit Cards & Cardless), PayLater, Netbanking from 58
              banks, UPI and 8 mobile wallets, Razorpay provides the most
              extensive set of payment methods.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-lg text-gray-600">
              Accept All Payment Modes
            </h3>
            <p className="text-gray-500">
              With Domestic and International Credit & Debit cards, EMIs (
              Credit/Debit Cards & Cardless), PayLater, Netbanking from 58
              banks, UPI and 8 mobile wallets, Razorpay provides the most
              extensive set of payment methods.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-lg text-gray-600">
              Accept All Payment Modes
            </h3>
            <p className="text-gray-500">
              With Domestic and International Credit & Debit cards, EMIs (
              Credit/Debit Cards & Cardless), PayLater, Netbanking from 58
              banks, UPI and 8 mobile wallets, Razorpay provides the most
              extensive set of payment methods.
            </p>
          </div>

          <button className="bg-blue-400 px-6 py-3 w-max  font-medium text-white rounded-sm">
            Sign Up Now
          </button>
        </div>
      </section>

      <section className="w-full sm:w-[85%] flex flex-col gap-8">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Choosing the Right Payment Gateway
        </h1>

        <div className="w-full flex justify-center gap-8 flex-wrap">
          <div className="w-full sm:w-[30vw] shadow-2xl p-4 flex flex-col gap-3">
            <h1 className="text-2xl font-semibold">Right Payment Gateway</h1>
            <p className="text-lg">
              Selecting the right payment gateway is crucial for your e-commerce
              success. Factors to consider when choosing a payment gateway
              include transaction fees, security, ease of integration, and the
              payment methods it supports.
            </p>
            <p className="text-lg">
              Our team of experts at Xettle can guide you through the selection
              process, ensuring that you choose the payment gateway that aligns
              best with your business goals and customer preferences.
            </p>
          </div>
          <div className="w-full sm:w-[30vw] shadow-2xl p-4 flex flex-col gap-3">
            <h1 className="text-2xl font-semibold">Right Payment Gateway</h1>

            <p className="text-lg">
              Ready to enhance your e-commerce store's payment processing
              capabilities? Contact us today to discuss your requirements and
              let us help you integrate a secure and efficient payment gateway
              solution into your online store.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Page;
