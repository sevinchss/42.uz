import React, { useContext } from "react";


import LanguageChanger from "../../Utils/languageChanger";
import { ThemeApi } from "../../Context/DarkMode";
import ThemeChanger from "../../Utils/ThemeChanger";
const Section4 = () => {
    var { theme } = useContext(ThemeApi);
    return (
        <>
            <section className="space-y-6 pt-36 dark:bg-transparent container">
                <div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 class="font-heading text-3xl font-semibold leading-[1.1] sm:text-3xl md:text-6xl">
                        {LanguageChanger(
                            "Teams",
                            "Команды ",
                            "Jamoa"
                        )}

                    </h2>
                    <p class="max-w-[85%] leading-normal text-[#64748b] sm:text-lg sm:leading-7">
                        {LanguageChanger(
                            "Learn programming from experts with international experience",
                            "Изучайте программирование у экспертов с международным опытом            ",
                            "  Xalqaro tajribaga ega mutaxassislar bilan birga dasturlashni o'rganing"
                        )}

                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                    <div className={`rounded-lg border   shadow-sm  cursor-pointer transition-all ease-in-out duration-200 flex flex-col space-y-1.5 p-6 text-center items-center gap-2 ${ThemeChanger("bg-white text-[#020817] border border-[#E2E8F0] hover:bg-[#f1f5f9] ", "border-[#1E293B] hover:bg-[#1e293b]")}`}>
                        <div className="flex flex-col space-y-1.5 p-6 text-center items-center gap-2">
                            <img alt="Azimjon Pulatov's profile" loading="lazy" width="120" height="120" decoding="async" data-nimg="1" className="rounded-full" style={{ color: 'transparent' }} srcSet="https://42.uz/_next/image?url=%2Fauthors%2Fazimjon.jpg&amp;w=128&amp;q=75 1x, https://42.uz/_next/image?url=%2Fauthors%2Fazimjon.jpg&amp;w=256&amp;q=75 2x" src="https://42.uzhttps://42.uz/_next/image?url=%2Fauthors%2Fazimjon.jpg&amp;w=256&amp;q=75" />
                            <h3 className="text-2xl font-semibold leading-none tracking-tight">
                                {`${LanguageChanger("Azimjon Pulatov","Азимжон Пулатов","Azimjon Pulatov")}`}
                                <a className="inline-block ml-2" target="_blank" href="https://www.linkedin.com/in/azimjon-pulatov/">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                                        <g clipPath="url(#clip0_20_2)">
                                            <path d="M18.375 0H5.625C2.5184 0 0 2.5184 0 5.625V18.375C0 21.4816 2.5184 24 5.625 24H18.375C21.4816 24 24 21.4816 24 18.375V5.625C24 2.5184 21.4816 0 18.375 0Z" fill="white">
                                            </path>
                                            <path d="M18.375 0H5.625C2.5184 0 0 2.5184 0 5.625V18.375C0 21.4816 2.5184 24 5.625 24H18.375C21.4816 24 24 21.4816 24 18.375V5.625C24 2.5184 21.4816 0 18.375 0Z" fill="#0A66C2"></path>
                                            <path d="M17.317 20.408H20.0611C20.1605 20.408 20.2559 20.3685 20.3262 20.2982C20.3965 20.2279 20.4361 20.1325 20.4361 20.0331L20.4375 14.2354C20.4375 11.2051 19.7845 8.87588 16.2433 8.87588C14.8972 8.82581 13.6277 9.51975 12.9427 10.6785C12.9393 10.6841 12.9342 10.6885 12.9281 10.691C12.9221 10.6934 12.9154 10.6938 12.909 10.6921C12.9027 10.6904 12.8971 10.6867 12.8931 10.6815C12.8891 10.6763 12.8869 10.67 12.8869 10.6634V9.53063C12.8869 9.43117 12.8474 9.33579 12.777 9.26546C12.7067 9.19513 12.6113 9.15563 12.5119 9.15563H9.90778C9.80832 9.15563 9.71294 9.19513 9.64262 9.26546C9.57229 9.33579 9.53278 9.43117 9.53278 9.53063V20.0325C9.53278 20.132 9.57229 20.2273 9.64262 20.2977C9.71294 20.368 9.80832 20.4075 9.90778 20.4075H12.6517C12.7511 20.4075 12.8465 20.368 12.9168 20.2977C12.9871 20.2273 13.0267 20.132 13.0267 20.0325V14.8413C13.0267 13.3734 13.3051 11.9519 15.1249 11.9519C16.9188 11.9519 16.942 13.6315 16.942 14.9363V20.033C16.942 20.1324 16.9815 20.2278 17.0519 20.2981C17.1222 20.3685 17.2176 20.408 17.317 20.408ZM3.5625 5.59003C3.5625 6.70237 4.47816 7.61756 5.5905 7.61756C6.70256 7.61747 7.61766 6.70172 7.61766 5.58966C7.61747 4.47759 6.70228 3.5625 5.59012 3.5625C4.47769 3.5625 3.5625 4.47778 3.5625 5.59003ZM4.21491 20.408H6.96244C7.06189 20.408 7.15728 20.3685 7.2276 20.2981C7.29793 20.2278 7.33744 20.1324 7.33744 20.033V9.53063C7.33744 9.43117 7.29793 9.33579 7.2276 9.26546C7.15728 9.19513 7.06189 9.15563 6.96244 9.15563H4.21491C4.11545 9.15563 4.02007 9.19513 3.94974 9.26546C3.87942 9.33579 3.83991 9.43117 3.83991 9.53063V20.033C3.83991 20.1324 3.87942 20.2278 3.94974 20.2981C4.02007 20.3685 4.11545 20.408 4.21491 20.408Z" fill="white"></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_20_2">
                                                <rect width="24" height="24" fill="white"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Software Engineer @ Google, Ex-Amazon, Ex-Facebook
                            </p>
                        </div>
                        <hr className="border-separate my-4" />
                        <div className="p-6 pt-0 flex flex-col items-center justify-center gap-6">
                            <img alt="google.png" loading="lazy" width="120" height="24" decoding="async" data-nimg="1" className={`h-8 object-contain ${ThemeChanger("bg-transparent", "bg-[#F1F5F9] p-1 rounded-md")}`} style={{ color: 'transparent' }} srcSet="https://42.uz/_next/image?url=%2Fcompanies%2Fgoogle.png&amp;w=128&amp;q=75 1x, https://42.uz/_next/image?url=%2Fcompanies%2Fgoogle.png&amp;w=256&amp;q=75 2x" src="https://42.uzhttps://42.uz/_next/image?url=%2Fcompanies%2Fgoogle.png&w=128&q=75" />
                            <img alt="amazon.png" loading="lazy" width="120" height="24" decoding="async" data-nimg="1" className={`h-8 object-contain ${ThemeChanger("bg-transparent", "bg-[#F1F5F9] p-1 rounded-md")}`} style={{ color: 'transparent' }} srcSet="https://42.uz/_next/image?url=%2Fcompanies%2Famazon.png&amp;w=128&amp;q=75 1x, https://42.uz/_next/image?url=%2Fcompanies%2Famazon.png&amp;w=256&amp;q=75 2x" src="https://42.uzhttps://42.uz/_next/image?url=%2Fcompanies%2Famazon.png&amp;w=256&amp;q=75" />
                            <img alt="meta.png" loading="lazy" width="120" height="24" decoding="async" data-nimg="1" className={`h-8 object-contain ${ThemeChanger("", "bg-[#F1F5F9] p-1 rounded-md")}`} style={{ color: 'transparent' }} srcSet="https://42.uz/_next/image?url=%2Fcompanies%2Fmeta.png&amp;w=128&amp;q=75 1x, https://42.uz/_next/image?url=%2Fcompanies%2Fmeta.png&amp;w=256&amp;q=75 2x" src="https://42.uzhttps://42.uz/_next/image?url=%2Fcompanies%2Fmeta.png&amp;w=256&amp;q=75" />
                        </div>
                    </div>
                    <div className={`rounded-lg border   shadow-sm  cursor-pointer transition-all ease-in-out duration-200 flex flex-col space-y-1.5 p-6 text-center items-center gap-2 ${ThemeChanger("bg-white text-[#020817] border border-[#E2E8F0] hover:bg-[#f1f5f9] ", "border-[#1E293B] hover:bg-[#1e293b]")}`}>
                        <div className="flex flex-col space-y-1.5 p-6 text-center items-center gap-2">
                            <img alt="Muhammadyusuf Abdullaev's profile" loading="lazy" width="120" height="120" decoding="async" data-nimg="1" className="rounded-full" style={{ color: 'transparent' }} srcSet="https://42.uz/_next/image?url=%2Fauthors%2Fyusuf-mobile.jpg&amp;w=128&amp;q=75 1x, https://42.uz/_next/image?url=%2Fauthors%2Fyusuf-mobile.jpg&amp;w=256&amp;q=75 2x" src="https://42.uzhttps://42.uz/_next/image?url=%2Fauthors%2Fyusuf-mobile.jpg&amp;w=256&amp;q=75" />
                            <h3 className="text-2xl font-semibold leading-none tracking-tight">
                                {`${LanguageChanger(" Muhammadyusuf Abdullaev","МухаммадЮсуф Абдуллаев","Muhammadyusuf Abdullaev")}`}
                                <a className="inline-block ml-2" target="_blank" href="https://www.linkedin.com/in/yusuf-abdullaev/">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                                        <g clipPath="url(#clip0_20_2)">
                                            <path d="M18.375 0H5.625C2.5184 0 0 2.5184 0 5.625V18.375C0 21.4816 2.5184 24 5.625 24H18.375C21.4816 24 24 21.4816 24 18.375V5.625C24 2.5184 21.4816 0 18.375 0Z" fill="white">
                                            </path>
                                            <path d="M18.375 0H5.625C2.5184 0 0 2.5184 0 5.625V18.375C0 21.4816 2.5184 24 5.625 24H18.375C21.4816 24 24 21.4816 24 18.375V5.625C24 2.5184 21.4816 0 18.375 0Z" fill="#0A66C2">
                                            </path>
                                            <path d="M17.317 20.408H20.0611C20.1605 20.408 20.2559 20.3685 20.3262 20.2982C20.3965 20.2279 20.4361 20.1325 20.4361 20.0331L20.4375 14.2354C20.4375 11.2051 19.7845 8.87588 16.2433 8.87588C14.8972 8.82581 13.6277 9.51975 12.9427 10.6785C12.9393 10.6841 12.9342 10.6885 12.9281 10.691C12.9221 10.6934 12.9154 10.6938 12.909 10.6921C12.9027 10.6904 12.8971 10.6867 12.8931 10.6815C12.8891 10.6763 12.8869 10.67 12.8869 10.6634V9.53063C12.8869 9.43117 12.8474 9.33579 12.777 9.26546C12.7067 9.19513 12.6113 9.15563 12.5119 9.15563H9.90778C9.80832 9.15563 9.71294 9.19513 9.64262 9.26546C9.57229 9.33579 9.53278 9.43117 9.53278 9.53063V20.0325C9.53278 20.132 9.57229 20.2273 9.64262 20.2977C9.71294 20.368 9.80832 20.4075 9.90778 20.4075H12.6517C12.7511 20.4075 12.8465 20.368 12.9168 20.2977C12.9871 20.2273 13.0267 20.132 13.0267 20.0325V14.8413C13.0267 13.3734 13.3051 11.9519 15.1249 11.9519C16.9188 11.9519 16.942 13.6315 16.942 14.9363V20.033C16.942 20.1324 16.9815 20.2278 17.0519 20.2981C17.1222 20.3685 17.2176 20.408 17.317 20.408ZM3.5625 5.59003C3.5625 6.70237 4.47816 7.61756 5.5905 7.61756C6.70256 7.61747 7.61766 6.70172 7.61766 5.58966C7.61747 4.47759 6.70228 3.5625 5.59012 3.5625C4.47769 3.5625 3.5625 4.47778 3.5625 5.59003ZM4.21491 20.408H6.96244C7.06189 20.408 7.15728 20.3685 7.2276 20.2981C7.29793 20.2278 7.33744 20.1324 7.33744 20.033V9.53063C7.33744 9.43117 7.29793 9.33579 7.2276 9.26546C7.15728 9.19513 7.06189 9.15563 6.96244 9.15563H4.21491C4.11545 9.15563 4.02007 9.19513 3.94974 9.26546C3.87942 9.33579 3.83991 9.43117 3.83991 9.53063V20.033C3.83991 20.1324 3.87942 20.2278 3.94974 20.2981C4.02007 20.3685 4.11545 20.408 4.21491 20.408Z" fill="white">
                                            </path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_20_2">
                                                <rect width="24" height="24" fill="white">
                                                </rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Ex-Senior Android Developer @ CAFU, Noon &amp; Super Unlimited Inc.
                            </p>
                        </div>
                        <hr className="border-separate my-4" />
                        <div className="p-6 pt-0 flex flex-col items-center justify-center gap-6">
                            <img alt="cafu.png" loading="lazy" width="120" height="24" decoding="async" data-nimg="1" className={`h-8 object-contain ${ThemeChanger("", "bg-[#F1F5F9] p-1 rounded-md")}`} style={{ color: 'transparent' }} srcSet="https://42.uz/_next/image?url=%2Fcompanies%2Fcafu.png&amp;w=128&amp;q=75 1x, https://42.uz/_next/image?url=%2Fcompanies%2Fcafu.png&amp;w=256&amp;q=75 2x" src="https://42.uz/_next/image?url=%2Fcompanies%2Fcafu.png&amp;w=256&amp;q=75" />
                            <img alt="noon.png" loading="lazy" width="120" height="24" decoding="async" data-nimg="1" className={`h-8 object-contain ${ThemeChanger("", "bg-[#F1F5F9] p-1 rounded-md")}`} style={{ color: 'transparent' }} srcSet="https://42.uz/_next/image?url=%2Fcompanies%2Fnoon.png&amp;w=128&amp;q=75 1x, https://42.uz/_next/image?url=%2Fcompanies%2Fnoon.png&amp;w=256&amp;q=75 2x" src="https://42.uz/_next/image?url=%2Fcompanies%2Fnoon.png&amp;w=256&amp;q=75" />
                        </div>
                    </div>
                    <div className={`rounded-lg border   shadow-sm  cursor-pointer transition-all ease-in-out duration-200 flex flex-col space-y-1.5 p-6 text-center items-center gap-2 ${ThemeChanger("bg-white text-[#020817] border border-[#E2E8F0] hover:bg-[#f1f5f9] ", "border-[#1E293B] hover:bg-[#1e293b]")}`}>
                        <div className="flex flex-col space-y-1.5 p-6 text-center items-center gap-2">
                            <img alt="Jasurbek Zokirov's profile" loading="lazy" width="120" height="120" decoding="async" data-nimg="1" className="rounded-full" style={{ color: 'transparent' }} srcSet="https://42.uz/_next/image?url=%2Fauthors%2Fjasurbek.jpg&amp;w=128&amp;q=75 1x, https://42.uz/_next/image?url=%2Fauthors%2Fjasurbek.jpg&amp;w=256&amp;q=75 2x" src="https://42.uz/_next/image?url=%2Fauthors%2Fjasurbek.jpg&amp;w=256&amp;q=75" />
                            <h3 className="text-2xl font-semibold leading-none tracking-tight">
                                {`${LanguageChanger(" Jasurbek Zokirov","Жасурбек Зокиров","Jasurbek Zokirov")}`}
                                <a className="inline-block ml-2" target="_blank" href="https://www.linkedin.com/in/jasonzachbusiness/">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                                        <g clipPath="url(#clip0_20_2)">
                                            <path d="M18.375 0H5.625C2.5184 0 0 2.5184 0 5.625V18.375C0 21.4816 2.5184 24 5.625 24H18.375C21.4816 24 24 21.4816 24 18.375V5.625C24 2.5184 21.4816 0 18.375 0Z" fill="white">
                                            </path>
                                            <path d="M18.375 0H5.625C2.5184 0 0 2.5184 0 5.625V18.375C0 21.4816 2.5184 24 5.625 24H18.375C21.4816 24 24 21.4816 24 18.375V5.625C24 2.5184 21.4816 0 18.375 0Z" fill="#0A66C2">
                                            </path>
                                            <path d="M17.317 20.408H20.0611C20.1605 20.408 20.2559 20.3685 20.3262 20.2982C20.3965 20.2279 20.4361 20.1325 20.4361 20.0331L20.4375 14.2354C20.4375 11.2051 19.7845 8.87588 16.2433 8.87588C14.8972 8.82581 13.6277 9.51975 12.9427 10.6785C12.9393 10.6841 12.9342 10.6885 12.9281 10.691C12.9221 10.6934 12.9154 10.6938 12.909 10.6921C12.9027 10.6904 12.8971 10.6867 12.8931 10.6815C12.8891 10.6763 12.8869 10.67 12.8869 10.6634V9.53063C12.8869 9.43117 12.8474 9.33579 12.777 9.26546C12.7067 9.19513 12.6113 9.15563 12.5119 9.15563H9.90778C9.80832 9.15563 9.71294 9.19513 9.64262 9.26546C9.57229 9.33579 9.53278 9.43117 9.53278 9.53063V20.0325C9.53278 20.132 9.57229 20.2273 9.64262 20.2977C9.71294 20.368 9.80832 20.4075 9.90778 20.4075H12.6517C12.7511 20.4075 12.8465 20.368 12.9168 20.2977C12.9871 20.2273 13.0267 20.132 13.0267 20.0325V14.8413C13.0267 13.3734 13.3051 11.9519 15.1249 11.9519C16.9188 11.9519 16.942 13.6315 16.942 14.9363V20.033C16.942 20.1324 16.9815 20.2278 17.0519 20.2981C17.1222 20.3685 17.2176 20.408 17.317 20.408ZM3.5625 5.59003C3.5625 6.70237 4.47816 7.61756 5.5905 7.61756C6.70256 7.61747 7.61766 6.70172 7.61766 5.58966C7.61747 4.47759 6.70228 3.5625 5.59012 3.5625C4.47769 3.5625 3.5625 4.47778 3.5625 5.59003ZM4.21491 20.408H6.96244C7.06189 20.408 7.15728 20.3685 7.2276 20.2981C7.29793 20.2278 7.33744 20.1324 7.33744 20.033V9.53063C7.33744 9.43117 7.29793 9.33579 7.2276 9.26546C7.15728 9.19513 7.06189 9.15563 6.96244 9.15563H4.21491C4.11545 9.15563 4.02007 9.19513 3.94974 9.26546C3.87942 9.33579 3.83991 9.43117 3.83991 9.53063V20.033C3.83991 20.1324 3.87942 20.2278 3.94974 20.2981C4.02007 20.3685 4.11545 20.408 4.21491 20.408Z" fill="white">
                                            </path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_20_2">
                                                <rect width="24" height="24" fill="white">
                                                </rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Software Engineer @ Affirm, Ex-Optochka
                            </p>
                        </div>
                        <hr className="border-separate my-4" />
                        <div className="p-6 pt-0 flex flex-col items-center justify-center gap-6">
                            <img alt="affirm.png" loading="lazy" width="120" height="24" decoding="async" data-nimg="1" className={`h-8 object-contain ${ThemeChanger("", "bg-[#F1F5F9] p-1 rounded-md")}`} style={{ color: 'transparent' }} srcSet="https://42.uz/_next/image?url=%2Fcompanies%2Faffirm.png&amp;w=128&amp;q=75 1x, https://42.uz/_next/image?url=%2Fcompanies%2Faffirm.png&amp;w=256&amp;q=75 2x" src="https://42.uz/_next/image?url=%2Fcompanies%2Faffirm.png&amp;w=256&amp;q=75" />
                            <img alt="optochka.png" loading="lazy" width="120" height="24" decoding="async" data-nimg="1" className={`h-8 object-contain ${ThemeChanger("", "bg-[#F1F5F9] p-1 rounded-md")}`} style={{ color: 'transparent' }} srcSet="https://42.uz/_next/image?url=%2Fcompanies%2Foptochka.png&amp;w=128&amp;q=75 1x, https://42.uz/_next/image?url=%2Fcompanies%2Foptochka.png&amp;w=256&amp;q=75 2x" src="https://42.uz/_next/image?url=%2Fcompanies%2Foptochka.png&amp;w=256&amp;q=75" />
                        </div>
                    </div>
                    <div className={`rounded-lg border   shadow-sm  cursor-pointer transition-all ease-in-out duration-200 flex flex-col space-y-1.5 p-6 text-center items-center gap-2 ${ThemeChanger("bg-white text-[#020817] border border-[#E2E8F0] hover:bg-[#f1f5f9] ", "border-[#1E293B] hover:bg-[#1e293b]")}`}>
                        <div className="flex flex-col space-y-1.5 p-6 text-center items-center gap-2">
                            <img alt="Otabek Nurmatov's profile" loading="lazy" width="120" height="120" decoding="async" data-nimg="1" className="rounded-full" style={{ color: 'transparent' }} srcSet="https://42.uz/_next/image?url=%2Fauthors%2Fotabek.jpg&amp;w=128&amp;q=75 1x, https://42.uz/_next/image?url=%2Fauthors%2Fotabek.jpg&amp;w=256&amp;q=75 2x" src="https://42.uz/_next/image?url=%2Fauthors%2Fotabek.jpg&amp;w=256&amp;q=75" />
                            <h3 className="text-2xl font-semibold leading-none tracking-tight">
                                {`${LanguageChanger("Otabek Nurmatov", "Отабек Нурматов", "Otabek Nurmatov")}`}
                                <a className="inline-block ml-2" target="_blank" href="https://www.linkedin.com/in/otabekswe/">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                                        <g clipPath="url(#clip0_20_2)">
                                            <path d="M18.375 0H5.625C2.5184 0 0 2.5184 0 5.625V18.375C0 21.4816 2.5184 24 5.625 24H18.375C21.4816 24 24 21.4816 24 18.375V5.625C24 2.5184 21.4816 0 18.375 0Z" fill="white"></path>
                                            <path d="M18.375 0H5.625C2.5184 0 0 2.5184 0 5.625V18.375C0 21.4816 2.5184 24 5.625 24H18.375C21.4816 24 24 21.4816 24 18.375V5.625C24 2.5184 21.4816 0 18.375 0Z" fill="#0A66C2"></path>
                                            <path d="M17.317 20.408H20.0611C20.1605 20.408 20.2559 20.3685 20.3262 20.2982C20.3965 20.2279 20.4361 20.1325 20.4361 20.0331L20.4375 14.2354C20.4375 11.2051 19.7845 8.87588 16.2433 8.87588C14.8972 8.82581 13.6277 9.51975 12.9427 10.6785C12.9393 10.6841 12.9342 10.6885 12.9281 10.691C12.9221 10.6934 12.9154 10.6938 12.909 10.6921C12.9027 10.6904 12.8971 10.6867 12.8931 10.6815C12.8891 10.6763 12.8869 10.67 12.8869 10.6634V9.53063C12.8869 9.43117 12.8474 9.33579 12.777 9.26546C12.7067 9.19513 12.6113 9.15563 12.5119 9.15563H9.90778C9.80832 9.15563 9.71294 9.19513 9.64262 9.26546C9.57229 9.33579 9.53278 9.43117 9.53278 9.53063V20.0325C9.53278 20.132 9.57229 20.2273 9.64262 20.2977C9.71294 20.368 9.80832 20.4075 9.90778 20.4075H12.6517C12.7511 20.4075 12.8465 20.368 12.9168 20.2977C12.9871 20.2273 13.0267 20.132 13.0267 20.0325V14.8413C13.0267 13.3734 13.3051 11.9519 15.1249 11.9519C16.9188 11.9519 16.942 13.6315 16.942 14.9363V20.033C16.942 20.1324 16.9815 20.2278 17.0519 20.2981C17.1222 20.3685 17.2176 20.408 17.317 20.408ZM3.5625 5.59003C3.5625 6.70237 4.47816 7.61756 5.5905 7.61756C6.70256 7.61747 7.61766 6.70172 7.61766 5.58966C7.61747 4.47759 6.70228 3.5625 5.59012 3.5625C4.47769 3.5625 3.5625 4.47778 3.5625 5.59003ZM4.21491 20.408H6.96244C7.06189 20.408 7.15728 20.3685 7.2276 20.2981C7.29793 20.2278 7.33744 20.1324 7.33744 20.033V9.53063C7.33744 9.43117 7.29793 9.33579 7.2276 9.26546C7.15728 9.19513 7.06189 9.15563 6.96244 9.15563H4.21491C4.11545 9.15563 4.02007 9.19513 3.94974 9.26546C3.87942 9.33579 3.83991 9.43117 3.83991 9.53063V20.033C3.83991 20.1324 3.87942 20.2278 3.94974 20.2981C4.02007 20.3685 4.11545 20.408 4.21491 20.408Z" fill="white"></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_20_2">
                                                <rect width="24" height="24" fill="white"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Software Engineer, ex U-EDU Team, Mobal.io
                            </p>
                        </div>
                        <hr className="border-separate my-4" />
                        <div className="p-6 pt-0 flex flex-col items-center justify-center gap-6">
                            <img alt="mobal.png" loading="lazy" width="120" height="24" decoding="async" data-nimg="1" className={`h-8 object-contain ${ThemeChanger("", "bg-[#F1F5F9] p-1 rounded-md")}`} style={{ color: 'transparent' }} srcSet="https://42.uz/_next/image?url=%2Fcompanies%2Fmobal.png&amp;w=128&amp;q=75 1x, https://42.uz/_next/image?url=%2Fcompanies%2Fmobal.png&amp;w=256&amp;q=75 2x" src="https://42.uz/_next/image?url=%2Fcompanies%2Fmobal.png&amp;w=256&amp;q=75" />
                            <img alt="uedu.png" loading="lazy" width="120" height="24" decoding="async" data-nimg="1" className={`h-8 object-contain ${ThemeChanger("", "bg-[#F1F5F9] p-1 rounded-md")}`} style={{ color: 'transparent' }} srcSet="https://42.uz/_next/image?url=%2Fcompanies%2Fuedu.png&amp;w=128&amp;q=75 1x, https://42.uz/_next/image?url=%2Fcompanies%2Fuedu.png&amp;w=256&amp;q=75 2x" src="https://42.uz/_next/image?url=%2Fcompanies%2Fuedu.png&amp;w=256&amp;q=75" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Section4;
