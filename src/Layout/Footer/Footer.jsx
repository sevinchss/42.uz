import React from "react";
import LanguageChanger from "../../Utils/languageChanger";
import ThemeChanger from "../../Utils/ThemeChanger";

export const Footer = () => {
  return (
    <>
      <footer className="border-t mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-12 lg:px-8">
        <nav
          class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          <div class="pb-6 flex items-center justify-center">
            <a
              class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 px-4 py-2"
              href="/#team"
            >
              {LanguageChanger("About us", "О нас", "Biz haqimizda")}
              
            </a>
          </div>
          <div class="pb-6 flex items-center justify-center">
            <a
              class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 px-4 py-2"
              href="/courses"
            >
              {LanguageChanger("Courses", "Курсы", "Kurslar")}
              
            </a>
          </div>
          <div class="pb-6 flex items-center justify-center">
            <a
              class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 px-4 py-2"
              href="https://youtube.com/@qirikki"
            >
              {LanguageChanger("  42Podcast", "  42Подкасты", "  42Podcast")}

            
            </a>
          </div>
          <div class="pb-6 flex items-center justify-center">
            <a
              class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 px-4 py-2"
              href="/faq"
            >
              {LanguageChanger("  FAQ", "  ФАК", "  FAQ")}

              
            </a>
          </div>
        </nav>
        <div class="mt-10 flex justify-center space-x-10">
          <a
            class={`text-[#02081799] ${ThemeChanger("text-[#02081799] hover:text-black","text-[#555A64] hover:text-white")} hover:text-black`}
            target="_blank"
            href="https://instagram.com/qirikki"
          >
            <span class="sr-only">Instagram</span>
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              class="h-6 w-6"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            class={`text-[#02081799] ${ThemeChanger("text-[#02081799] hover:text-black","text-[#555A64] hover:text-white")} hover:text-black`}
            target="_blank"
            href="https://t.me/qirikki"
          >
            <span class="sr-only">Telegram</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.32697 10.888C8.51026 8.63021 11.9658 7.14161 13.6936 6.42245C18.6324 4.36885 19.6574 4.01219 20.3268 4.00011C20.4741 3.99774 20.8018 4.03413 21.0157 4.20705C21.1935 4.35288 21.2435 4.5501 21.2685 4.68857C21.2907 4.8269 21.3213 5.14218 21.2963 5.38829C21.0296 8.19938 19.8713 15.021 19.2824 18.1696C19.0352 19.5018 18.5435 19.9485 18.0685 19.9921C17.0352 20.0871 16.2519 19.3099 15.2519 18.6546C13.688 17.6288 12.8047 16.9904 11.2852 15.9896C9.5297 14.8329 10.6686 14.1971 11.6686 13.1582C11.9297 12.8863 16.4796 8.74882 16.5658 8.37355C16.5769 8.3266 16.588 8.1516 16.4824 8.05938C16.3797 7.96688 16.2269 7.99855 16.1158 8.02355C15.9574 8.0591 13.4602 9.71131 8.61582 12.9799C7.90749 13.4671 7.26583 13.7046 6.68806 13.6921C6.05473 13.6785 4.83251 13.3332 3.92419 13.0382C2.81308 12.6763 1.92698 12.4849 2.00476 11.8702C2.04365 11.5502 2.48531 11.2227 3.32697 10.888Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          <a
            class={`text-[#02081799] ${ThemeChanger("text-[#02081799] hover:text-black","text-[#555A64] hover:text-white")} hover:text-black`}
            target="_blank"
            href="https://twitter.com/@qirqikki"
          >
            <span class="sr-only">Twitter</span>
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              class="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
          </a>
          <a
            class={`text-[#02081799] ${ThemeChanger("text-[#02081799] hover:text-black","text-[#555A64] hover:text-white")} hover:text-black`}
            target="_blank"
            href="https://github.com/42uz"
          >
            <span class="sr-only">GitHub</span>
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              class="h-6 w-6"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            class={`text-[#02081799] ${ThemeChanger("text-[#02081799] hover:text-black","text-[#555A64] hover:text-white")} hover:text-black`}
            target="_blank"
            href="https://youtube.com/@qirikki"
          >
            <span class="sr-only">YouTube</span>
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              class="h-6 w-6"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <p class="mt-10 text-center text-xs leading-5">
          © 2023 QIRIKKI LLC. Barcha huquqlar himoyalangan.
        </p>
        <div class="flex items-center justify-center gap-2 text-xs text-foreground/80">
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
