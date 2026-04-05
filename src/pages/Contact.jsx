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
<section className="relative w-full py-20 hidden sm:block" id="contactform2">
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

{/* mobile version get in touch */}

<section>
  {/* Contact Section */}
  <div className="relative grid grid-rows-2 w-full h-[600px] sm:h-[550px] md:h-[500px] overflow-hidden block sm:hidden">

    {/* Top (Light Gray) */}
    <div className="bg-[#f2f7f7] flex items-center justify-center text-black text-sm md:text-base" id="contactform">
      {/* Optional: You can remove this placeholder text */}
    </div>

    {/* Bottom (Dark Blue) */}
    <div className="bg-[#0E5284] flex items-center justify-center text-white text-sm md:text-base">
    </div>

    {/* Middle Contact Box (Desktop) */}
    <div className="hidden md:flex absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 &#xA;                w-full max-w-6xl justify-center px-6 lg:px-12">
      <div className="bg-[#f37666] rounded-2xl flex flex-col md:flex-row items-center &#xA;                  gap-6 md:gap-10 p-6 lg:p-10 shadow-lg w-full">

        {/* Image */}
        <img alt="Smiling woman with headset" className="w-32 md:w-44 lg:w-60 rounded-lg object-cover flex-shrink-0" src="https://storage.googleapis.com/a1aa/image/f9fbf604-eb92-41a6-e03c-e73ca99f2516.jpg" />

        {/* Form */}
        <form aria-label="Get in touch form" className="flex flex-col md:flex-row md:gap-6 text-white w-full">

          {/* Left Inputs */}
          <div className="flex flex-col gap-3 w-full md:w-72">
            <h2 className="font-semibold text-base mb-1">Get in touch</h2>
            <input className="bg-[#f26a5e] border border-[#f9a59a] rounded-md px-3 py-2 &#xA;                          text-sm placeholder-[#f9a59a] focus:outline-none" placeholder="Name" type="text" />
            <input className="bg-[#f26a5e] border border-[#f9a59a] rounded-md px-3 py-2 &#xA;                          text-sm placeholder-[#f9a59a] focus:outline-none" placeholder="Email" type="email" />
            <input className="bg-[#f26a5e] border border-[#f9a59a] rounded-md px-3 py-2 &#xA;                          text-sm placeholder-[#f9a59a] focus:outline-none" placeholder="Phone" type="tel" />
            <button className="bg-[#0a4a85] text-white text-sm rounded-md py-2 mt-1" type="submit">
              Submit
            </button>
          </div>

          {/* Right Textarea */}
          <textarea className="bg-[#f26a5e] border border-[#f9a59a] rounded-md px-3 py-2 &#xA;                            text-sm placeholder-[#f9a59a] w-full md:w-72 resize-none &#xA;                            mt-4 md:mt-0" placeholder="Message" rows="6"></textarea>
        </form>
      </div>
    </div>

    {/* Middle Contact Box (Mobile) */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 &#xA;                w-full px-4 sm:px-6 flex justify-center md:hidden">
      <div className="max-w-md w-full bg-[#f37666] rounded-2xl flex flex-col &#xA;                  items-center gap-4 p-4 sm:p-6 shadow-lg">

        {/* Image */}
        <img alt="Smiling woman with headset" className="w-24 sm:w-32 rounded-lg object-cover flex-shrink-0" src="https://storage.googleapis.com/a1aa/image/f9fbf604-eb92-41a6-e03c-e73ca99f2516.jpg" />

        {/* Form */}
        <form aria-label="Get in touch form" className="flex flex-col gap-3 text-white w-full">
          <h2 className="font-semibold text-base mb-1">Get in touch</h2>
          <input className="bg-[#f26a5e] border border-[#f9a59a] rounded-md px-3 py-2 &#xA;                        text-sm placeholder-[#f9a59a] focus:outline-none" placeholder="Name" type="text" />
          <input className="bg-[#f26a5e] border border-[#f9a59a] rounded-md px-3 py-2 &#xA;                        text-sm placeholder-[#f9a59a] focus:outline-none" placeholder="Email" type="email" />
          <input className="bg-[#f26a5e] border border-[#f9a59a] rounded-md px-3 py-2 &#xA;                        text-sm placeholder-[#f9a59a] focus:outline-none" placeholder="Phone" type="tel" />
          <textarea className="bg-[#f26a5e] border border-[#f9a59a] rounded-md px-3 py-2 &#xA;                            text-sm placeholder-[#f9a59a] w-full resize-none" placeholder="Message" rows="4"></textarea>
          <button className="bg-[#0a4a85] text-white text-sm rounded-md py-2 mt-1" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>

  </div>


{/* finished */}





  

  {/* Footer */}
  

  

  




</section>
  

  {/* Footer */}
  

  
  
  
  <div id="contactform2"></div>



    </>
  );
}

export default Contact;
