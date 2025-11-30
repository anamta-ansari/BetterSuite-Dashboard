"use client"
import Image from "next/image";
import { Car, User } from "lucide-react";
import OrdersTable from "./Components/OrdersTable";
import ActivityList from "./Components/ActivityList";

export default function Home() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US");

  const customers = [
    { rank: 1, name: "sabastian Coke", amount: "$1,204,250.88", isTop3: true },
    { rank: 2, name: "Customer 2", amount: "$160,630.94", isTop3: true },
    { rank: 3, name: "João savo", amount: "$98,851.95", isTop3: true },
    { rank: 4, name: "Tarek Mesalam", amount: "$30,237.51", isTop3: false },
    { rank: 5, name: "John Smith", amount: "$24,322.61", isTop3: false },
    { rank: 6, name: "BWS Group", amount: "$19,712.93", isTop3: false },
    { rank: 7, name: "Mateus Oliveira", amount: "$16,658.64", isTop3: false },
    { rank: 8, name: "Fatih TAMER", amount: "$15,098.45", isTop3: false },
  ];

  const drivers = [...customers];

  return (
    <main>
      <h1 className="text-[28px] sm:text-[32px] font-bold -mt-4">Hello World</h1>
      <p className="text-[14px] sm:text-[16px] mt-3 mb-6">
        <span className="text-gray-500">Today is</span> {formattedDate}
      </p>

      {/* TOP CARDS RESPONSIVE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {[1, 2, 3, 4].map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-sm border px-3 py-4 h-[100px]"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-gray-700 text-[14px]">Total Orders</h3>
              <button className="text-gray-500 text-[12px]">See More</button>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-blue-100 rounded-full p-2.5">
                <Car className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-[24px] leading-none">46024</span>
            </div>
          </div>
        ))}
      </div>

      {/* --- ONLINE DRIVERS --- */}
      <div className="bg-white rounded-2xl shadow-sm mt-12 p-0">
        <h1 className="text-[18px] sm:text-[20px] font-semibold pl-5 pt-5">
          Online Drivers
        </h1>
        <p className="text-[13px] sm:text-[14px] text-gray-400 pl-5 pb-5">
          Online Drivers and Current Location
        </p>

        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <div className="overflow-hidden w-full h-[300px] sm:h-[400px]">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.671438003524!2d67.028511!3d24.810674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d4f0a8b79b3%3A0xaf163d7514514a1e!2sKarachi!5e0!3m2!1sen!2s!4v1710000000000"
              ></iframe>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <p className="bg-gray-100 border border-gray-300 py-3 px-3">
              Online Drivers
            </p>
          </div>
        </div>
      </div>

      {/* ACTIVE ORDERS */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-8 gap-4">
        <p className="text-[14px]">
          Active Orders <span className="bg-blue-600 text-white px-2 py-1">46028</span>
        </p>

        <div className="flex gap-2 flex-wrap">
          <button className="text-blue-600 border border-gray-400 rounded text-[14px] sm:text-[16px] py-2 px-4">
            Dispatch A Trip
          </button>
          <button className="border border-gray-400 rounded text-[14px] sm:text-[16px] py-2 px-4">
            View All
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <OrdersTable />
      </div>

      {/* PENDING SECTION */}
      <div className="flex flex-col lg:flex-row gap-5 pt-20">
        <div className="bg-white w-full lg:w-1/2 rounded-2xl shadow-sm h-[400px]">
          <div className="flex items-center justify-between px-5 pt-5">
            <p className="text-[16px] font-semibold">
              Pending Drivers <span className="bg-blue-600 text-white px-2 py-1">0 Unverified</span>
            </p>
            <button className="border border-gray-400 rounded text-[16px] py-2 px-3">
              View All
            </button>
          </div>

          <div className="flex justify-center items-center mt-8">
            <Image src="/assets/4041.png" width={250} height={250} alt="Car Icon" />
          </div>
        </div>

        <div className="bg-white w-full lg:w-1/2 rounded-2xl shadow-sm h-[400px]">
          <div className="flex items-center justify-between px-5 pt-5 mb-5">
            <p className="text-[16px] font-semibold">
              Pending Support Requests{" "}
              <span className="bg-blue-600 text-white px-2 py-1">378 Unresolved</span>
            </p>
            <button className="border border-gray-400 rounded text-[16px] py-2 px-3">
              View All
            </button>
          </div>
          <ActivityList />
        </div>
      </div>

      {/* LAST SECTION */}
      <div className="flex flex-col lg:flex-row gap-5 mt-20">
        {/* CUSTOMERS */}
        <div className="bg-white rounded-2xl shadow-sm border p-4 w-full lg:w-1/2">
          <h2 className="text-lg font-semibold">Top spending customers</h2>
          <p className="text-sm text-gray-500 mb-6">
            Top 10 highest spending customers
          </p>

          <div className="flex justify-center items-end gap-8 mb-8">
            {/* SAME CONTENT */}
          </div>

          <div className="overflow-y-auto max-h-[320px]">
            {/* SAME CONTENT */}
          </div>
        </div>

        {/* DRIVERS */}
        <div className="bg-white rounded-2xl shadow-sm border p-4 w-full lg:w-1/2">
          {/* SAME CONTENT */}
        </div>
      </div>
    </main>
  );
}
