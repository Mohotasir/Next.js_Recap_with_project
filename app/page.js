import Image from "next/image";
import UserInfo from "./components/userInfo";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <div className="min-h-screen">
  {/* Hero Section */}
  <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    
    {/* Left Content */}
    <div>
      <span className="inline-block mb-4 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
        🔥 New Collection 2025
      </span>

      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
        Discover Products <br />
        That Fit Your <span className="text-indigo-600">Lifestyle</span>
      </h1>

      <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
        Shop the latest trends with unbeatable prices.  
        Quality products, fast delivery, and secure checkout.
      </p>

      <div className="mt-8 flex gap-4">
        <button className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
          Shop Now
        </button>
        <button className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 transition">
          Browse Categories
        </button>
      </div>
    </div>

    {/* Right Image */}
    <div className="relative">
      <div className="absolute -top-6 -left-6 w-full h-full bg-indigo-100 dark:bg-indigo-900 rounded-2xl"></div>
       <Image
        src="/home.jpg"
        alt="Hero Image"
        width={550}
        height={500}
        className="relative rounded-2xl shadow-lg"
      />
    </div>

  </section>
    <UserInfo />
    <p>USER INFO FROM SERVER COMPONENT:</p>
    <p>{JSON.stringify(session)}</p>
</div>

  );
}
