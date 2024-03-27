import React from "react";

export const TeamCard = ({ img, auth, text,site1,site2,site3 }) => {
  return (
    <>
      <div className="rounded-lg border bg-white text-[#020817] shadow-sm hover:bg-[#f1f5f9] cursor-pointer transition-all ease-in-out duration-200 flex flex-col space-y-1.5 p-6 text-center items-center gap-2">
        <img src={img} alt="" className="rounded-full" />
        <h3 class="text-2xl font-semibold leading-none tracking-tight">
          {auth}
          <a
            class="inline-block ml-2"
            target="_blank"
            href="https://www.linkedin.com/in/azimjon-pulatov/"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
            >
              <g clip-path="url(#clip0_20_2)">
                <path
                  d="M18.375 0H5.625C2.5184 0 0 2.5184 0 5.625V18.375C0 21.4816 2.5184 24 5.625 24H18.375C21.4816 24 24 21.4816 24 18.375V5.625C24 2.5184 21.4816 0 18.375 0Z"
                  fill="white"
                ></path>
                <path
                  d="M18.375 0H5.625C2.5184 0 0 2.5184 0 5.625V18.375C0 21.4816 2.5184 24 5.625 24H18.375C21.4816 24 24 21.4816 24 18.375V5.625C24 2.5184 21.4816 0 18.375 0Z"
                  fill="#0A66C2"
                ></path>
                <path
                  d="M17.317 20.408H20.0611C20.1605 20.408 20.2559 20.3685 20.3262 20.2982C20.3965 20.2279 20.4361 20.1325 20.4361 20.0331L20.4375 14.2354C20.4375 11.2051 19.7845 8.87588 16.2433 8.87588C14.8972 8.82581 13.6277 9.51975 12.9427 10.6785C12.9393 10.6841 12.9342 10.6885 12.9281 10.691C12.9221 10.6934 12.9154 10.6938 12.909 10.6921C12.9027 10.6904 12.8971 10.6867 12.8931 10.6815C12.8891 10.6763 12.8869 10.67 12.8869 10.6634V9.53063C12.8869 9.43117 12.8474 9.33579 12.777 9.26546C12.7067 9.19513 12.6113 9.15563 12.5119 9.15563H9.90778C9.80832 9.15563 9.71294 9.19513 9.64262 9.26546C9.57229 9.33579 9.53278 9.43117 9.53278 9.53063V20.0325C9.53278 20.132 9.57229 20.2273 9.64262 20.2977C9.71294 20.368 9.80832 20.4075 9.90778 20.4075H12.6517C12.7511 20.4075 12.8465 20.368 12.9168 20.2977C12.9871 20.2273 13.0267 20.132 13.0267 20.0325V14.8413C13.0267 13.3734 13.3051 11.9519 15.1249 11.9519C16.9188 11.9519 16.942 13.6315 16.942 14.9363V20.033C16.942 20.1324 16.9815 20.2278 17.0519 20.2981C17.1222 20.3685 17.2176 20.408 17.317 20.408ZM3.5625 5.59003C3.5625 6.70237 4.47816 7.61756 5.5905 7.61756C6.70256 7.61747 7.61766 6.70172 7.61766 5.58966C7.61747 4.47759 6.70228 3.5625 5.59012 3.5625C4.47769 3.5625 3.5625 4.47778 3.5625 5.59003ZM4.21491 20.408H6.96244C7.06189 20.408 7.15728 20.3685 7.2276 20.2981C7.29793 20.2278 7.33744 20.1324 7.33744 20.033V9.53063C7.33744 9.43117 7.29793 9.33579 7.2276 9.26546C7.15728 9.19513 7.06189 9.15563 6.96244 9.15563H4.21491C4.11545 9.15563 4.02007 9.19513 3.94974 9.26546C3.87942 9.33579 3.83991 9.43117 3.83991 9.53063V20.033C3.83991 20.1324 3.87942 20.2278 3.94974 20.2981C4.02007 20.3685 4.11545 20.408 4.21491 20.408Z"
                  fill="white"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_20_2">
                  <rect width="24" height="24" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </a>
        </h3>
        <p class="text-sm text-[#64748b]">{text}</p>
      
      <hr class="border-separate my-4" />
      <div className="p-6 pt-0 flex flex-col items-center justify-center gap-6">
        <img src={site1} alt="" />
        <img src={site2} alt="" />
        <img src={site3} alt="" />
      </div>
      </div>
    </>
  );
};
