import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative antialiased bg-white dark:bg-[#25292A] z-0 overflow-hidden">
    <div
      className="absolute hidden md:block -left-40 -top-40 text-gray-100 dark:text-gray-600"
      style={{ zIndex: -20 }}
    >
      <svg
        id="visual"
        viewBox="0 0 900 900"
        width="600"
        height="600"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <g transform="translate(423.6017287294153 429.411998482734)">
          <path
            d="M164.8 -274.6C221 -253 278.9 -223.8 345.5 -176.7C412.1 -129.7 487.3 -64.8 476.3 -6.3C465.4 52.2 368.2 104.3 297.9 144.9C227.6 185.5 184.1 214.6 138.9 253C93.8 291.4 46.9 339.2 -6.9 351.1C-60.7 363.1 -121.3 339.2 -194.4 316.8C-267.4 294.5 -352.8 273.7 -394 221.2C-435.1 168.7 -432.1 84.3 -400.9 18C-369.7 -48.3 -310.4 -96.7 -267.6 -146.3C-224.8 -196 -198.4 -246.9 -156.5 -276.8C-114.7 -306.6 -57.3 -315.3 -1.5 -312.7C54.3 -310.1 108.7 -296.2 164.8 -274.6"
            fill="currentColor"
          ></path>
        </g>
      </svg>
    </div>
    <nav className="flex flex-row items-center justify-between px-4 md:px-20 py-10">
      <div className="relative flex flex-row space-x-1 items-center">
        <div className="absolute h-6 w-4 bg-blue-500 transform -skew-x-12 z-10"></div>
        <div className="absolute top-0 left-1 h-6 w-4 bg-green-500 transform -skew-x-12"></div>
        <h1 className="pl-5 text-2xl font-bold italic text-gray-700 dark:text-gray-50">AcePay</h1>
      </div>
      <div className="flex flex-row items-center space-x-8">
        <a
          href="#"
          className="hidden md:block font-semibold text-gray-500 hover:text-green-500 transition duration-100 dark:text-gray-200"
        >
          Home
        </a>
        <a
          href="#"
          className="hidden md:block font-semibold text-gray-500 hover:text-green-500 transition duration-100 dark:text-gray-200"
        >
          Cards
        </a>
        <a
          href="#"
          className="hidden md:block font-semibold text-gray-500 hover:text-green-500 transition duration-100 dark:text-gray-200"
        >
          Payments
        </a>
        <a
          href="#"
          className="hidden md:block font-semibold text-gray-500 hover:text-green-500 transition duration-100 dark:text-gray-200"
        >
          Finance
        </a>
        <div className="relative px-8 py-2 border border-gray-800 rounded-3xl bg-white dark:border-gray-50">
          <div
            className="absolute inset-0 transform translate-x-1 translate-y-2 rounded-3xl border border-gray-800 dark:border-gray-50 px-8 py-2"
            style={{ zIndex: -10 }}
          ></div>
          <Link
            href="/login"
            className="relative text-gray-700 font-light hover:text-green-500 transition duration-100 transform hover:-translate-y-2 hover:-translate-x-1"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>

    <header className="mt-4 md:mt-20 flex flex-col md:flex-row space-x-2 px-4 md:px-20">
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-800 dark:text-gray-50">
          International payments simplified, money at your{' '}
          <span className="font-thin tracking-wider">fingertips.</span>
        </h1>
        <p className="my-10 text-gray-800 font-light max-w-xl dark:text-gray-200">
          AcePay simplified international payments so that you don't have to worry about your
          money. Grab your licence and start earning today!
        </p>
        <div className="relative px-8 py-2 border rounded-3xl bg-white cursor-pointer inline-block">
          <div
            className="absolute inset-0 transform translate-x-1 translate-y-2 rounded-3xl border px-8 py-2"
            style={{ zIndex: -10 }}
          ></div>
          <Link
            href="/register"
            className="relative text-gray-700 font-bold hover:text-green-500 transition duration-100 transform hover:-translate-y-2 hover:-translate-x-1"
          >
            Create Account
          </Link>
        </div>
      </div>

      <div className="hidden md:block w-full md:w-1/2" style={{ perspective: '800px' }}>
        <div
          className="img-container rounded-xl overflow-hidden p-2 bg-white transform shadow-2xl"
          style={{ transform: 'rotateX(40deg) rotateZ(6deg) rotateY(-10deg)' }}
        >
          <img
            className="rounded-lg"
            src="https://res.cloudinary.com/tailwindmasterkit/image/upload/v1627290155/assets/untitled-design-47png-a821832209.png"
            alt="img-container"
          />
        </div>
      </div>
    </header>
    <section className="flex flex-col md:flex-row justify-between bg-gray-600 items-center px-20 py-10 mt-20">
      <h1 className="text-2xl font-bold text-gray-50">Companies who trust us</h1>
      <div className="companies flex flex-row items-center flex-wrap justify-center">
        <div className="my-4 mx-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
            className="w-28 h-auto"
            alt="logo company"
          />
        </div>
        <div className="my-4 mx-4">
          <img
            src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
            className="w-28 h-auto"
            alt="logo company"
          />
        </div>
        <div className="my-4 mx-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/1024px-Slack_Technologies_Logo.svg.png"
            className="w-28 h-auto"
            alt="logo company"
          />
        </div>
        <div className="my-4 mx-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/800px-Shopify_logo_2018.svg.png"
            className="w-28 h-auto"
            alt="logo company"
          />
        </div>
      </div>
    </section>
    <section className="pt-20 dark:bg-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-2 px-8 my-2 max-w-6xl mx-auto items-center mt-10">
        <div>
          <h1 className="text-4xl font-bold dark:text-gray-50 text-gray-700">
            Payments in <span className="text-[#1a759f]">one click</span> without any hassle
          </h1>
          <p className="my-8 dark:text-gray-200 text-gray-600">
            Get additional 40% off on your next referral. Refer a friend and earn money.
            Conditions apply!
          </p>
          <div className="relative px-8 py-2 border rounded-3xl bg-white cursor-pointer inline-block">
            <div
              className="absolute inset-0 transform translate-x-1 translate-y-2 rounded-3xl border px-8 py-2 dark:border-gray-50"
              style={{ zIndex: -10 }}
            ></div>
            <a
              href="#"
              className="relative text-gray-700 font-bold hover:text-green-500 transition duration-100 transform hover:-translate-y-2 hover:-translate-x-1 dark:border-gray-50"
            >
              Refer Now
            </a>
          </div>
        </div>

        <div className="relative shadow-2xl p-2 bg-gray-400 rounded-md mt-8 md:mt-0">
          <img
            src="https://svgsilh.com/svg/26432.svg"
            className="absolute -right-10 opacity-5 -top-10 w-48 h-48 z-10"
            style={{ zIndex: 20 }}
            alt="hero"
          />

          <img
            src="https://res.cloudinary.com/tailwindmasterkit/image/upload/v1627290155/assets/untitled-design-47png-a821832209.png"
            className="rounded-lg"
            alt="hero"
          />
        </div>
      </div>

      <div className="mt-8">
        <div className="box-border max-w-6xl mx-auto md:masonry before:box-inherit after:box-inherit">
          <div className="px-8 py-2 my-2 rounded-lg break-inside">
            <img
              src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1390&q=80"
              alt="hero here"
              className="rounded-lg"
            />
          </div>
          <div className="px-8 py-2 my-2 rounded-lg break-inside">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1404&q=80"
              alt="hero image"
              className="rounded-lg"
            />
          </div>
          <div className="px-8 py-2 my-2 rounded-lg break-inside">
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1640&q=80"
              alt="hero here"
              className="rounded-lg"
            />
          </div>

          <div className="px-8 py-2 my-6 rounded-lg break-inside">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
              alt="hero here"
              className="rounded-lg"
            />
          </div>
          <div className="px-8 py-2 my-6 rounded-lg break-inside">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
              alt="hero here"
              className="rounded-lg"
            />
          </div>
          <div className="px-8 py-2 my-6 rounded-lg break-inside">
            <img
              src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
              alt="hero here"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
    <div className="py-6 flex flex-col justify-center sm:py-12 md:-mt-20 dark:bg-[#25292A]">
      <div className="h-90 rounded-xl p-4 m-2">
        <div className="md:flex justify-around px-10 py-8">
          <div className="py-5 md:py-0">
            <h4 className="font-bold text-green-500 mb-2 px-2">Explore</h4>
            <ul className="text-gray-600">
              <li className="py-2 cursor-pointer hover:border-purple-300 border border-transparent px-2 rounded-full">
                Free tutorials
              </li>
              <li className="py-2 cursor-pointer hover:border-purple-300 border border-transparent px-2 rounded-full">
                Payments
              </li>
              <li className="py-2 cursor-pointer hover:border-purple-300 border border-transparent px-2 rounded-full">
                Referrals
              </li>
              <li className="py-2 cursor-pointer hover:border-purple-300 border border-transparent px-2 rounded-full">
                Open Source
              </li>
            </ul>
          </div>
          <div className="py-5 md:py-0">
            <h4 className="font-bold text-green-500 mb-2 px-2">Site</h4>
            <ul className="text-gray-600">
              <li className="py-2 cursor-pointer hover:border-purple-300 border border-transparent px-2 rounded-full">
                License
              </li>
              <li className="py-2 cursor-pointer hover:border-purple-300 border border-transparent px-2 rounded-full">
                Articles
              </li>
              <li className="py-2 cursor-pointer hover:border-purple-300 border border-transparent px-2 rounded-full">
                About
              </li>
              <li className="py-2 cursor-pointer hover:border-purple-300 border border-transparent px-2 rounded-full">
                Support
              </li>
            </ul>
          </div>
          <div className="py-5 md:py-0">
            <h4 className="font-bold text-green-500 mb-2 px-2">Follow Us</h4>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="flex justify-between items-end px-12 md:px-32 py-8 text-gray-500">
          <div>Legal</div>
          <div>© 2021 AcePay. All Rights Reserved.</div>
          <div className="hidden md:block">
            <p className="font-bold tracking-tighter text-xl">1384</p>
            <p>Cr. funds transferred</p>
          </div>
        </div>
      </div>
    </div>
  </main>
  );
}
