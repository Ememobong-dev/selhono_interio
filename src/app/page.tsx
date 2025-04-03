import { Col, Row } from "antd";
import { Navbar } from "../components/nav/Navbar";
import leftBentImg from "@/public/images/home-secondArea-left.png"
import rightBentImg from "@/public/images/home-secondArea-right.png"
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-28 justify-center items-center mt-40 w-full">
        {/* HEADER */}
        <div className="w-[70%]">
          <div className="home_headerBg w-full">

          <div className="p-14 text-white flex flex-col gap-4">
            <h2 className="text-6xl font-normal font-serif-display">
              Let&apos;s make your
            </h2>
            <h2 className="text-6xl font-normal font-serif-display">
              home beautiful together
            </h2>
            <p className="font-inter">
              There are many variations of the passages of lorem Ipsum
              fromavailable, majority.
            </p>
            <button className="flex font-inter justify-center items-center rounded-lg bg-light-brown py-3 px-8 w-40 text-white ">
              Get Started
            </button>
          </div>
        </div>
        </div>
        {/*  */}
        <div className="w-[70%]">
          <Row gutter={[32, 32]}>
            <Col xs={8}>
              <div className="flex flex-col items-center text-center">
                <h1 className="text-3xl font-serif-display">Project Plan</h1>
                <span className="mt-3">
                  <p>
                    There are many variations of the passages of lorem Ipsum
                    from available, majority.
                  </p>
                </span>
                <div className="mt-8">
                  <button className="">Read More</button>
                </div>
              </div>
            </Col>
            <Col xs={8}>
              <div className="flex flex-col items-center text-center">
                <h1 className="text-3xl font-serif-display">Project Plan</h1>
                <span className="mt-3">
                  <p>
                    There are many variations of the passages of lorem Ipsum
                    from available, majority.
                  </p>
                </span>
                <div className="mt-8">
                  <button className="">Read More</button>
                </div>
              </div>
            </Col>
            <Col xs={8}>
              <div className="flex flex-col items-center text-center">
                <h1 className="text-3xl font-serif-display">Project Plan</h1>
                <span className="mt-3">
                  <p>
                    There are many variations of the passages of lorem Ipsum
                    from available, majority.
                  </p>
                </span>
                <div className="mt-8">
                  <button className="">Read More</button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="flex w-[70%]">
          <div>
            <h3>We create art
            for modern life</h3>
            <p>There are many variations of the passages of lorem Ipsum from 
            available, majority.</p>
            <button className="flex font-inter justify-center items-center rounded-lg bg-light-brown py-3 px-8 w-40 text-white ">
              Get Started
            </button>
          </div>
          <Image src={rightBentImg} className="w-1/2"  alt="" />
        </div>
      </div>
    </div>
  );
}
