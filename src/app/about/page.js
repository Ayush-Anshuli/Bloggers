import React from 'react'
import "../about/about.css"
import Image from 'next/image'
import Link from 'next/link'
const About = () => {
  return (
    <div className='abt-container'>
      <div className='abt-img-container'>
        <Image src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" fill={true} alt='' className='cover' />
        <div className='img-text'>
          <h1 className='img-title'>We create digital ideas that are bigger,bolder,braver.</h1>
          <h3 className='img-desc'>We belive in good ideas flexibility and precission We&apos;re world&apos;s Our Special Team bes Consulting & finance solution provider.Wide range of Web and software development services. </h3>
        </div>
      </div>
      <div className='about-text-container'>
        <div className='abt-item'>
          <h1 className='abt-title'>What we do?</h1>
          <p className='abt-desc'>We specialize in creating high-quality blog content tailored to your unique voice and goals. Whether you&apos;re a startup looking to build brand awareness, a company aiming to engage your audience with thought leadership, or an individual wanting to share your expertise, we have the skills and experience to help you succeed.</p>
        </div>
        <div className='abt-item'>
        <h1 className='abt-title'>Who We Are?</h1>
        <p className='abt-desc'>Founded in 2024, BlogyPedia is a team of passionate writers, editors, strategists, and digital marketers dedicated to elevating your online presence. With diverse backgrounds in journalism, creative writing, marketing, and design, we bring a wealth of experience and creativity to every project.</p>
      </div>
      </div>


<div className="experience">
              <div className='border'>
                <p className="color">10K+</p>
                <p className="sizes">Year Of experience</p>
              </div>

              <div className='border'>
                <p className="color">234K+</p>
                <p className="sizes">People reached</p>
              </div>

              <div className='border'>
                <p className="color">5K+</p>
                <p className="sizes">Services</p>
              </div>

            </div>

      <div className='about-text-container'>
        <div className='abt-item'>
          <h1 className='abt-title'>Our Services</h1>
          <p className='abt-desc'> Content Creation:From in-depth articles and how-to guides to engaging listicles and opinion pieces, our team produces a wide range of content to suit your needs.</p>
          <p className='abt-desc'>Editing and Proofreading: Ensure your content is polished, professional, and error-free with our expert editing services.</p>
          <p className="abt-desc" >
              Content Creation:From in-depth articles and how-to guides to engaging listicles and opinion pieces, our team produces a wide range of content to suit your needs.
            </p>
        </div>

        <div className='abt-item'>
          <h1 className='abt-title'>Why Choose Us?</h1>
          <p className="abt-desc" >
              Expertise: Our team consists of industry professionals with years of experience in content creation and digital marketing.
            </p>

            <p className="abt-desc" >
              Customization: We understand that every brand is unique, and we tailor our services to meet your specific needs and goals.
            </p>
            <p className="abt-desc" >
              Quality: We pride ourselves on delivering top-notch content that not only meets but exceeds your expectations.
            </p>

            <p className="abt-desc" >
              Results-Driven: Our strategies are designed to drive engagement, increase traffic, and achieve measurable results.
            </p>

            <div className='btn'>
              <Link href={"/portfolio"} ><button className='abt-btn'>Content</button></Link>
            </div>
        </div>

      </div>

    </div>
  )
}

export default About