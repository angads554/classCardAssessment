import React from "react";

const DashboardLayout = () => {
  const balanceSessions = 6; // The number of balance indicators
  const scheduledSessions = 3; // The number of scheduled indicators
  const attendedSessions = 5; // The number of attended indicators
  const missedSessions = 1; // The number of missed indicators


  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="rounded-lg m-8 flex w-full">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 z-10">
          <div className="py-4 px-3">
            <div className="flex items-center space-x-3 mb-5">
              <img
                className="h-16 w-16 rounded-full"
                src="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
              />
              <div className="mt-4">
                <div className="flex items-center space-x-12">
                  <h2 className="text-lg font-semibold text-gray-700">
                    Suraj Talreja
                  </h2>
                  {/* Up and down arrow SVG */}
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 10.22a.75.75 0 010 1.06L8 11.94l1.72-1.72a.75.75 0 111.06 1.06l-2.25 2.25a.75.75 0 01-1.06 0l-2.25-2.25a.75.75 0 010-1.06zM10.78 5.78a.75.75 0 010 1.06L8 4.06 6.28 5.78a.75.75 0 11-1.06-1.06l2.25-2.25a.75.75 0 011.06 0l2.25 2.25z"
                      />
                    </svg>
                  </button>
                </div>
                <p className="text-gray-600">surajtalreja@gmail.com</p>
              </div>
            </div>
            <nav className="flex flex-col space-y-2">
              <button className="p-2 text-base font-normal text-black bg-white hover:bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.2 2.24a.75.75 0 0 0 .04 1.06l2.1 1.95H6.75a.75.75 0 0 0 0 1.5h8.59l-2.1 1.95a.75.75 0 1 0 1.02 1.1l3.5-3.25a.75.75 0 0 0 0-1.1l-3.5-3.25a.75.75 0 0 0-1.06.04Zm-6.4 8a.75.75 0 0 0-1.06-.04l-3.5 3.25a.75.75 0 0 0 0 1.1l3.5 3.25a.75.75 0 1 0 1.02-1.1l-2.1-1.95h8.59a.75.75 0 0 0 0-1.5H4.66l2.1-1.95a.75.75 0 0 0 .04-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
                Switch organization
              </button>
              <button className="p-2 text-base font-normal text-black bg-white hover:bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                  <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
                </svg>
                Edit profile
              </button>
              <button className="p-2 text-base font-normal text-gray-500 hover:bg-gray-300 rounded-lg flex items-center justify-center w-full">
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-3"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z"
                    clipRule="evenodd"
                  />
                </svg>
                My calendar
              </button>
              <button className="p-2 text-base font-normal text-gray-500 hover:bg-gray-300 rounded-lg flex items-center  justify-center w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
                  />
                </svg>
                My bookings
              </button>

              <button className="p-2 text-base font-normal text-gray-500 hover:bg-gray-300 rounded-lg flex items-center  justify-center w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002"
                  />
                </svg>
                Attendance history
              </button>

              <button className="p-2 text-base font-normal text-gray-500 hover:bg-gray-300 rounded-lg flex items-center  justify-center w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Billing history
              </button>

              <button className="p-2 text-base font-normal text-gray-500 hover:bg-gray-300 rounded-lg flex items-center  justify-center w-full">
          
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                  />
                </svg>
                My files
              </button>

              <button className="p-2 text-base font-normal text-gray-500 hover:bg-gray-300 rounded-lg flex items-center  justify-center w-full">
          
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
                  />
                </svg>
                My courses
              </button>

              <button className="p-2 text-base font-normal text-gray-500 hover:bg-gray-300 rounded-lg flex items-center  justify-center w-full">
              
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                  />
                </svg>
                Grades
              </button>
            </nav>
          </div>
        </aside>
        <div className="absolute w-2 bg-gradient-to-r from-transparent to-gray-100 top-0 bottom-0 right-0 z-0"></div>
      
        <div className="flex-1 bg-gray-100 ">
          <h1 className="text-2xl p-10" style={{ color: '#000', fontFamily: 'Arial, sans-serif', padding: "1.5rem"}}>My bookings</h1>
          <div className="bg-white p-6 rounded-lg" style={{marginLeft: "inherit"}}>
            <div className="px-4 py-5 sm:px-6" >
              <div className="flex flex-wrap justify-between items-center">
                <div className="flex items-center" >
                  <div className="p-2 bg-gray-200 rounded-lg mr-4">
                   
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Graphic design (full course)
                  </h3>
                </div>
                <div className="flex items-center space-x-2 ml-auto">
                  <button className="bg-white text-black hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2 border border-gray-300 flex items-center mr-2">
                    {/* Invoice PDF button SVG and text */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 mr-2"
                    >
                      <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                      <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
                    </svg>
                    Invoice PDF
                  </button>
                  <button className="bg-white text-black hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2 border border-gray-300 flex items-center">
                    {/* Receipt PDF button SVG and text */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 mr-2"
                    >
                      <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                      <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
                    </svg>
                    Receipt PDF
                  </button>
                </div>
              </div>

              {/* Session Information */}
              <div className="mt-4  flex items-center space-x-6">
                <div className="mt-4">
                  <p className="text-sm text-gray-500 ">Subject</p>
                  <p className="text-sm">Design for intermediates - L1</p>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500 ">Sessions</p>
                  <p className="text-sm"> 10 sessions</p>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500 ">Invoice</p>
                  <p className="text-sm">13</p>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500 ">Valid till</p>
                  <p className="text-sm"> Feb 15, 2024 (23 days left)</p>
                </div>
              </div>
            </div>
            {/* Session status indicators: Balance, Scheduled, Attended */}
            <div className="border-t border-gray-200 px-4 py-5 bg-gray-200 rounded-lg">
              <dl className="space-y-4">
                {/* Balance */}
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    Balance {balanceSessions}
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    <div className="flex">
                      {[...Array(balanceSessions)].map((_, index) => (
                        <div
                          key={index}
                          className="border border-gray-300 bg-white rounded-md w-4 h-4 p-1 mr-1"
                        ></div>
                      ))}
                    </div>
                  </dd>
                </div>
                {/* Scheduled */}
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    Scheduled {scheduledSessions}
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    <div className="flex">
                      {[...Array(scheduledSessions)].map((_, index) => (
                        <div
                          key={index}
                          className="border border-gray-300 bg-gray-200 rounded-md w-4 h-4 flex items-center justify-center mr-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="w-4 h-4 text-gray-600"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7.75-4.25a.75.75 0 0 0-1.5 0V8c0 .414.336.75.75.75h3.25a.75.75 0 0 0 0-1.5h-2.5v-3.5Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      ))}
                    </div>
                  </dd>
                </div>
                {/* Attended */}
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    Attended {attendedSessions}
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    <div className="flex">
                      {[...Array(attendedSessions)].map((_, index) => (
                        <div
                          key={index}
                          className="border border-gray-300 bg-green-200 rounded-md w-4 h-4 flex justify-center items-center mr-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-green-800"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      ))}
                      {[...Array(missedSessions)].map((_, index) => (
                        <div
                          key={index}
                          className="border border-gray-300 bg-red-200 rounded-md w-4 h-4 flex justify-center items-center mr-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-red-800"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      ))}
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
