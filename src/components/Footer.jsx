import {
  AiFillGoogleCircle,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillFacebook,
} from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <footer className="w-[100%]">
        <div className="starter-box w-[60vw] bg-indigo-200 -translate-y-[50%] translate-x-[35%] rounded-md">
          <div className="flex justify-around items-center py-6">
            <div className="footer-text1 text-center">
              <p>Ready to get started?</p>
              <p>Talk to us today</p>
            </div>
            <div>
              <a
                href="#home"
                className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
              >
                <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="relative z-20 flex items-center text-sm">
                  <svg
                    className="relative w-5 h-5 mr-2 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                  Get Started
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="container2 grid grid-cols-4 gap-3 p-6">
          <div className="footer-about pl-8">
            <p className="cursive-div text-lg font-bold text-indigo-600">
              Quickstart
            </p>
            <p className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              hic!
            </p>
          </div>
          <div className="footer-subscribe">
            <p className="cursive-div text-lg font-bold text-indigo-600">
              Subscribe to get our important updates
            </p>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
                className="hadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <div className="space"></div>
              <a
                href="#home"
                className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
              >
                <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="relative z-20 flex items-center text-sm">
                  <svg
                    className="relative w-5 h-5 mr-2 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                  Subscribe
                </span>
              </a>
            </form>
          </div>
          <div className="footer-social pl-16">
            <p className="cursive-div text-lg font-bold text-indigo-600">
              Follow Us
            </p>
            <div className="social-icons flex gap-2">
              <div className="p-1 rounded-2xl text-indigo-600 cursor-pointer hover:text-indigo-300">
                <AiFillInstagram className="icons " />
              </div>
              <div className="p-1 rounded-2xl text-indigo-600 cursor-pointer hover:text-indigo-300">
                <AiFillFacebook className="icons " />
              </div>
              <div className="p-1 rounded-2xl text-indigo-600 cursor-pointer hover:text-indigo-300">
                <AiFillTwitterCircle className="icons " />
              </div>
              <div className="p-1 rounded-2xl text-indigo-600 cursor-pointer hover:text-indigo-300">
                <AiFillGoogleCircle className="icons " />
              </div>
            </div>
          </div>
          <div className="footer-copy">
            <p className="cursive-div text-lg font-bold text-indigo-600">
              QuickStart.
            </p>
            <p className="italic">@copyrights2023-quickstart.com</p>
          </div>
        </div>
      </footer>
    </>
  );
}

/*
<a href="#_" class="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
<span class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
<span class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
<span class="relative z-20 flex items-center text-sm">
<svg class="relative w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
Get Started
</span>
</a>
*/
