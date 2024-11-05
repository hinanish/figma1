import React from "react"
import Header from "./components/header"
import Image from "next/image"


function Home() {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-[80%]">
        <div className="w-1/2 flex flex-col justify-center items-start m-7">
          <h1 className="text-[35px] font-semi-bold">IMPECCABLE</h1>
          <h1 className="text-[35px] font-semi-bold">CRAFTSMANSHIP AND</h1>
          <h1 className="text-[35px] font-semi-bold">FINESSE</h1>
          <p className="text-[22px] w-[571px] font-semibold text-[#A29875]">An example of intricate workmanship and detail, elegant necklaces and
          long and short chains form a part of our desirable collection.
          </p>
          <button className="mt-8 text-white bg-[#A29875] w-[200px] h-[50px] rounded-full hover:bg-[#978235]">Explore Now</button>
        </div>
        <div className="w-1/2 flex justify-center m-16">
          <Image
            src={"/image/hero..jpg"}
            alt="hero image"
            width={380.1}
            height={525.43}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default Home