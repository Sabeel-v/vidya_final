import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      
  {/* Main Container with Background */}
  {/* Page wrapper WITH background */}
  <section className="relative w-full bg-cover bg-center bg-no-repeat&#xA;         h-[70vh] sm:h-[66vh] md:h-[64vh] lg:h-[63vh] xl:h-[60vh] min-h-[520px]" style={{"backgroundImage":"url('assets/images/bgshade.png')"}}>
    {/* Optional soft overlay */}
    <div className="absolute inset-0 bg-white/40 sm:bg-white/30 md:bg-white/20 z-0"></div>

    {/* All content sits above overlay */}
    <div className="relative z-10 h-full flex flex-col">
<Navbar />

      {/* Header */}
      


      {/* Hero Section */}
      <div className="relative flex-1 px-4 sm:px-6 lg:px-14 overflow-hidden">
        {/* 2-col container centered in the hero */}
        <div className="mx-auto max-w-[1200px] h-full grid grid-cols-1 lg:grid-cols-[auto_1fr] items-center gap-8 lg:gap-16 py-6 lg:py-0 relative translate-x-[5%]">

          {/* Girl image */}
          <div className="flex justify-center lg:justify-start relative">
            <img src="assets/images/girlbook.png" alt="Student" className="w-56 sm:w-72 lg:w-[420px] h-auto object-contain relative lg:translate-x-[8%] lg:translate-y-[7%]" />
          </div>

          {/* Headline */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D5183] leading-snug">
              Contact Us<br />We'd love to hear from you
            </h1>
          </div>

        </div>

        {/* Background pattern at bottom */}
        <div className="absolute bottom-0 left-0 w-full -z-10">
          <img src="assets/images/background.png" alt="Background pattern" className="w-full h-auto object-cover" />
        </div>
      </div>

    </div>
  </section>





  {/* Get in Touch Section */}
  <section className="relative w-full py-20" id="contactform">
    {/* Background Split */}
    <div className="absolute inset-0">
      <div className="h-1/2 bg-white"></div>
      <div className="h-1/2 bg-[#0E5284]"></div>
    </div>

    {/* Contact Card */}
    <div className="relative z-10 max-w-[1300px] mx-auto bg-[#F37666] rounded-[30px] shadow-lg flex items-center justify-between px-10 py-10 overflow-visible">
      {/* Left Image */}
      <div className="absolute left-[30px] bottom-0">
        <img src="assets/images/img_layer_416.png" alt="Support representative" className="w-[370px] h-auto object-contain" />
      </div>

      {/* Right Form Section */}
      <div className="ml-[380px] w-full flex flex-col">
        <h2 className="text-white text-[32px] lg:text-[36px] font-bold mb-6">
          Get in touch
        </h2>

        <form className="flex gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-4 flex-1">
            <input type="text" placeholder="Name" className="w-full h-[58px] bg-[#F37666] border border-white rounded-[12px] px-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50" />
            <input type="email" placeholder="Email" className="w-full h-[58px] bg-[#F37666] border border-white rounded-[12px] px-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50" />
            <input type="tel" placeholder="Phone" className="w-full h-[58px] bg-[#F37666] border border-white rounded-[12px] px-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50" />
            <button type="submit" className="w-full h-[58px] bg-[#0E5284] text-white font-semibold rounded-[12px] hover:bg-[#0B4670] transition">
              Submit
            </button>
          </div>

          {/* Right Column */}
          <div className="flex-1">
            <textarea placeholder="Messages" className="w-full h-[275px] bg-[#F37666] border border-white rounded-[12px] px-6 py-4 text-white placeholder-white/70 resize-none focus:outline-none focus:ring-2 focus:ring-white/50"></textarea>
          </div>
        </form>
      </div>
    </div>
  </section>
  

  {/* Footer */}
  

  
  
  
  <div id="contactform2"></div>



    </>
  );
}

export default Contact;
