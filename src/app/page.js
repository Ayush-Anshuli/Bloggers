import Image from "next/image";
import "../app/home.css"
import Link from "next/link";

export default function Home() {
  return (
    
    <>
      <div className="home-container">
        <div className="text-container">
          <h1 className="title">Welcome to Blogypedia...</h1>
          <p className="description">
          We bring you the latest insights, tips, and stories from the world,Whether you’re a seasoned expert or just starting your journey,
          our blog is here to inspire, educate, and connect you with like-minded enthusiasts.
          </p>
          {/* <div className="home-btn" > */}
            <Link href={"/blog"}><button className="home-btn">Our Blog</button></Link>
          {/* </div> */}
        </div>

        <div className="home-img">
            <Image src={"/hero.png"} alt="" fill={true} className="hero-img" />
        </div>
      </div>
    </>
  );
}
