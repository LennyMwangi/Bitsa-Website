import Link from "next/link";
import React from "react";

function EventCard() {
  return (
    <Link href={"/events"} className="mb-16 cursor-pointer">
      <div className="container flex flex-col justify-center mx-auto pt-16">
        <div>
          <p className="text-gray-500 text-lg text-center font-normal pb-3">
            BITSA EVENTS
          </p>
          <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
            Upcoming Events
          </h1>
        </div>

        <div className="lg:flex  rounded-lg shadow-md md:shadow-none md:border px-2">
          <div className="bg-gradient-to-tr from-sky-300 to-blue-500  shadow-md rounded-lg lg:w-2/12 py-4 block h-full ">
            <div className="text-center tracking-wide">
              <div className="text-white font-bold text-2xl px-2">
                To be Announced
              </div>
              {/* <div className="text-white font-normal text-2xl">Announced</div> */}
            </div>
          </div>
          <div className="w-full  px-5 bg-white py-5 lg:px-2 lg:py-2 tracking-wide">
            <div className="flex flex-row lg:justify-start justify-center">
              <div className="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
                {/* <i className="far fa-clock" /> 11:30 AM */}
              </div>
              <div className="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
                Organiser : ISC Department
              </div>
            </div>
            <div className="font-semibold text-gray-800 text-xl text-center lg:text-left px-2">
              Huawei Academy Official Launch
            </div>
            <div className="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">
              Venue: Amphitheatre
            </div>
          </div>
          <div className="flex flex-row items-center w-full lg:w-1/3 bg-white lg:justify-end justify-center px-2 py-4 lg:px-0">
            <span className="tracking-wider text-gray-600 bg-gray-200 px-2 text-sm rounded leading-loose mx-2 font-semibold">
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default EventCard;
