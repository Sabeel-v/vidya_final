import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      
  {/* Main Container with Background */}
  {/* Page wrapper WITH background */}
  <section className="relative w-full bg-cover bg-center bg-no-repeat&#xA;         h-[70vh] sm:h-[66vh] md:h-[64vh] lg:h-[63vh] xl:h-[60vh] min-h-[520px]" style={{"backgroundImage":"url('assets/images/bgshade.png')"}}>
    {/* Optional soft overlay */}
    <div className="absolute inset-0 bg-white/40 sm:bg-white/30 md:bg-white/20 z-0"></div>

    {/* All content sits above overlay */}
    <div className="relative z-10 h-full flex flex-col">

      {/* Header */}
      


      {/* Hero Section */}
      <div className="relative flex-1 px-4 sm:px-6 lg:px-14 overflow-hidden">
        {/* 2-col container centered in the hero */}
        <div className="mx-auto max-w-[1200px] h-full grid grid-cols-1 lg:grid-cols-[auto_1fr] items-center gap-8 lg:gap-16 py-6 lg:py-0 relative translate-x-[5%]">

          {/* Girl image */}
          <div className="flex justify-center lg:justify-start relative">
            <img src="assets/images/girlbook.png" alt="Student" className="w-full sm:w-72 lg:w-[420px] h-auto object-cover relative lg:translate-x-[8%] lg:translate-y-[7%]" />
          </div>

          {/* Headline */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D5183] leading-snug">
              Empowering Students<br />Through Education
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





  {/* About Section */}
  <section className="w-full px-4 sm:px-6 lg:px-8 mt-[60px] lg:mt-[100px]">
    <div className="w-full max-w-[1200px] mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

        {/* Left Content */}
        <div className="w-full lg:w-[40%]">
          <h2 className="[font-family:'Inter',sans-serif] font-bold text-[#0D5183]&#xA;         text-[40px] sm:text-[45px] lg:text-[50px] leading-[53px] tracking-[1.35px]"> About<br />Vidya Academy
          </h2>
          <p className="[font-family:'Inter',sans-serif] font-normal text-[#282828]&#xA;         text-[20px] sm:text-[25px] lg:text-[31px] leading-[42px] tracking-[0.62px] max-w-[434px]"> Vidya Academy
            offers career-focused education with expert mentors and modern learning.
          </p>

          {/* Statistics */}
          <div className="flex items-center gap-10 sm:gap-14">
            <div className="text-left">
              <span className="text-[36px] sm:text-[40px] lg:text-[45px] font-bold text-[#0e5284]">35</span>
              <span className="text-[24px] font-normal text-[#f37666]">+</span>
              <div className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-[#0e5284] mt-2">
                Programs
              </div>
            </div>

            <div className="text-left">
              <span className="text-[36px] sm:text-[40px] lg:text-[45px] font-bold text-[#0e5284]">100</span>
              <span className="text-[24px] font-normal text-[#f37666]">%</span>
              <div className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-[#0e5284] mt-2">
                Dedicated Mentors
              </div>
            </div>
          </div>

        </div>

        {/* Right Content */}
        <div className="max-w-[624.43px] [font-family:'Inter',sans-serif] font-normal&#xA;         text-[25px] leading-[37px] tracking-[0.563px] text-[#282828]">
          <p>
            Vidya Academy is committed to providing quality education that prepares
            students for successful careers. With experienced mentors and modern
            learning methods, we focus on practical knowledge and skill development
            that helps students grow in today’s competitive world.
          </p>

          <p>
            Our programs in management, commerce, healthcare, and language training
            are designed to combine academic excellence with real-world career
            opportunities and professional growth.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Why Choose Us Section */}
  <section className="w-full bg-[#eff3f5] py-[60px] sm:py-[80px] lg:py-[100px] px-4 sm:px-6 lg:px-8 mt-[80px] lg:mt-[120px]">
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {/* Why Choose Us Button */}
        <div className="sm:col-span-2 lg:col-span-1 mb-4 lg:mb-0">
          <button className="w-full sm:w-auto bg-[#0c5890] text-white text-[24px] sm:text-[30px] lg:text-[36px] font-bold leading-[32px] sm:leading-[38px] lg:leading-[44px] px-[24px] sm:px-[28px] lg:px-[34px] py-[24px] sm:py-[28px] lg:py-[34px] rounded-[20px] shadow-[24px_29px_57px_#5e6c750f] hover:bg-[#0a4d7a] transition-colors">
            Why Choose Us
          </button>
        </div>

        {/* Feature Cards */}
        <div className="bg-white rounded-[20px] shadow-[24px_29px_57px_#5e6c750f] p-[20px] sm:p-[24px] lg:p-[28px] flex items-center gap-4 hover:shadow-lg transition-shadow">
          <div className="w-[40px] h-[40px] bg-[#33a9b0] rounded-[20px] flex items-center justify-center flex-shrink-0">
            <img src="assets/images/img_vector_smart_object_16x22.png" className="w-[22px] h-[16px]" alt="icon" />
          </div>
          <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold leading-[24px] sm:leading-[26px] lg:leading-[29px] text-[#0c5890]">
            Modern Learning<br />Environment
          </h3>
        </div>

        <div className="bg-white rounded-[20px] shadow-[24px_29px_57px_#5e6c750f] p-[20px] sm:p-[24px] lg:p-[28px] flex items-center gap-4 hover:shadow-lg transition-shadow">
          <div className="w-[40px] h-[40px] bg-[#33a9b0] rounded-[20px] flex items-center justify-center flex-shrink-0">
            <img src="assets/images/img_vector_smart_object_16x22.png" className="w-[22px] h-[16px]" alt="icon" />
          </div>
          <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold leading-[24px] sm:leading-[26px] lg:leading-[29px] text-[#0c5890]">
            Industry-Oriented<br />Courses
          </h3>
        </div>

        <div className="bg-white rounded-[20px] shadow-[24px_29px_57px_#5e6c750f] p-[20px] sm:p-[24px] lg:p-[30px] flex items-center gap-4 hover:shadow-lg transition-shadow">
          <div className="w-[40px] h-[40px] bg-[#33a9b0] rounded-[20px] flex items-center justify-center flex-shrink-0">
            <img src="assets/images/img_vector_smart_object_16x22.png" className="w-[22px] h-[16px]" alt="icon" />
          </div>
          <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold leading-[24px] sm:leading-[26px] lg:leading-[29px] text-[#0c5890]">
            Dedicated Faculty<br />&amp; Mentors
          </h3>
        </div>

        <div className="bg-white rounded-[20px] shadow-[24px_29px_57px_#5e6c750f] p-[20px] sm:p-[24px] lg:p-[30px] flex items-center gap-4 hover:shadow-lg transition-shadow">
          <div className="w-[40px] h-[40px] bg-[#33a9b0] rounded-[20px] flex items-center justify-center flex-shrink-0">
            <img src="assets/images/img_vector_smart_object_16x22.png" className="w-[22px] h-[16px]" alt="icon" />
          </div>
          <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold leading-[24px] sm:leading-[26px] lg:leading-[29px] text-[#0c5890]">
            Career Support &amp;<br />Placement Assistance
          </h3>
        </div>

        <div className="bg-white rounded-[20px] shadow-[24px_29px_57px_#5e6c750f] p-[20px] sm:p-[24px] lg:p-[30px] flex items-center gap-4 hover:shadow-lg transition-shadow">
          <div className="w-[40px] h-[40px] bg-[#33a9b0] rounded-[20px] flex items-center justify-center flex-shrink-0">
            <img src="assets/images/img_vector_smart_object_16x22.png" className="w-[22px] h-[16px]" alt="icon" />
          </div>
          <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold leading-[24px] sm:leading-[26px] lg:leading-[29px] text-[#0c5890]">
            Affordable Fee<br />Structure
          </h3>
        </div>

        <div className="bg-white rounded-[20px] shadow-[24px_29px_57px_#5e6c750f] p-[20px] sm:p-[24px] lg:p-[30px] flex items-center gap-4 hover:shadow-lg transition-shadow">
          <div className="w-[40px] h-[40px] bg-[#33a9b0] rounded-[20px] flex items-center justify-center flex-shrink-0">
            <img src="assets/images/img_vector_smart_object_16x22.png" className="w-[22px] h-[16px]" alt="icon" />
          </div>
          <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold leading-[24px] sm:leading-[26px] lg:leading-[29px] text-[#0c5890]">
            Inclusive Support for<br />Newcomers
          </h3>
        </div>

        <div className="bg-white rounded-[20px] shadow-[24px_29px_57px_#5e6c750f] p-[20px] sm:p-[24px] lg:p-[30px] flex items-center gap-4 hover:shadow-lg transition-shadow">
          <div className="w-[40px] h-[40px] bg-[#33a9b0] rounded-[20px] flex items-center justify-center flex-shrink-0">
            <img src="assets/images/img_vector_smart_object_16x22.png" className="w-[22px] h-[16px]" alt="icon" />
          </div>
          <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold leading-[24px] sm:leading-[26px] lg:leading-[29px] text-[#0c5890]">
            Value-Based<br />Education
          </h3>
        </div>

        <div className="bg-white rounded-[20px] shadow-[24px_29px_57px_#5e6c750f] p-[20px] sm:p-[24px] lg:p-[30px] flex items-center gap-4 hover:shadow-lg transition-shadow">
          <div className="w-[40px] h-[40px] bg-[#33a9b0] rounded-[20px] flex items-center justify-center flex-shrink-0">
            <img src="assets/images/img_vector_smart_object_16x22.png" className="w-[22px] h-[16px]" alt="icon" />
          </div>
          <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold leading-[24px] sm:leading-[26px] lg:leading-[29px] text-[#0c5890]">
            Strong Community &amp;<br />Campus Culture
          </h3>
        </div>

        <div className="bg-white rounded-[20px] shadow-[24px_29px_57px_#5e6c750f] p-[20px] sm:p-[24px] lg:p-[28px] flex items-center gap-4 hover:shadow-lg transition-shadow">
          <div className="w-[40px] h-[40px] bg-[#33a9b0] rounded-[20px] flex items-center justify-center flex-shrink-0">
            <img src="assets/images/img_vector_smart_object_16x22.png" className="w-[22px] h-[16px]" alt="icon" />
          </div>
          <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold leading-[24px] sm:leading-[26px] lg:leading-[29px] text-[#0c5890]">
            Safe &amp; Student -<br />Friendly Campus
          </h3>
        </div>

        <div className="bg-white rounded-[20px] shadow-[24px_29px_57px_#5e6c750f] p-[20px] sm:p-[24px] lg:p-[30px] flex items-center gap-4 hover:shadow-lg transition-shadow">
          <div className="w-[40px] h-[40px] bg-[#33a9b0] rounded-[20px] flex items-center justify-center flex-shrink-0">
            <img src="assets/images/img_vector_smart_object_16x22.png" className="w-[22px] h-[16px]" alt="icon" />
          </div>
          <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold leading-[24px] sm:leading-[26px] lg:leading-[29px] text-[#0c5890]">
            Strategic<br />Location
          </h3>
        </div>

        <button className="w-full sm:w-auto bg-[#f37666] text-white text-[18px] sm:text-[20px] lg:text-[24px] font-bold leading-[24px] sm:leading-[28px] lg:leading-[31px] px-[24px] sm:p-[28px] lg:px-[34px] py-[24px] sm:py-[28px] lg:py-[34px] rounded-[20px] hover:bg-[#e56555] transition-colors">
          Apply Now
        </button>
      </div>
    </div>
  </section>

  {/* Vision & Mission Section */}
  <section className="w-full flex flex-col lg:flex-row">
    {/* Our Vision */}
    <div className="w-full lg:w-1/2 bg-[#33a9b0] py-[60px] sm:py-[80px] lg:py-[100px] px-[32px] sm:px-[40px] lg:px-[56px]">
      <div className="max-w-[500px] ml-[25%] text-left">

        <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold leading-[36px] sm:leading-[40px] lg:leading-[44px] text-white mb-6 lg:mb-8">
          Our Vision
        </h2>
        <p className="text-[18px] sm:text-[22px] lg:text-[25px] font-normal leading-[28px] sm:leading-[32px] lg:leading-[37px] text-white">
          Our vision is to become a leading center for education and skill development, empowering students with modern
          learning, innovation, and practical knowledge to succeed in their careers and contribute positively to
          society.
        </p>
      </div>
    </div>


    {/* Our Mission */}
    <div className="w-full lg:w-1/2 bg-[#f37666] py-[60px] sm:py-[80px] lg:py-[100px] px-[32px] sm:px-[40px] lg:px-[112px]">
      <div className="max-w-[500px] ml-[10%] text-left">
        <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold leading-[36px] sm:leading-[40px] lg:leading-[44px] text-white mb-6 lg:mb-8">
          Our Mission
        </h2>
        <p className="text-[18px] sm:text-[22px] lg:text-[25px] font-normal leading-[28px] sm:leading-[32px] lg:leading-[37px] text-white">
          Our mission is to provide quality education through expert mentors, industry-focused programs, and modern
          teaching methods that help students develop knowledge, confidence, and the skills required for future success.
        </p>
      </div>
    </div>
  </section>

  {/* Leadership Team Section */}
  <section className="w-full px-4 sm:px-6 lg:px-8 py-[60px] sm:py-[80px] lg:py-[100px]">
    <div className="w-full max-w-[1200px] mx-auto">
      <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold leading-[36px] sm:leading-[40px] lg:leading-[44px] text-[#0e5284] mb-12 lg:mb-16">
        Leadership Team
      </h2>

      {/* Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
        <div className="text-center">
          <div className="w-full aspect-square bg-gray-200 rounded-lg mb-4 overflow-hidden">
            {/* Placeholder for team member image */}
            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
              <span className="text-gray-600 text-sm">Team Member</span>
            </div>
          </div>
          <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold leading-[26px] sm:leading-[28px] lg:leading-[31px] text-[#0c5890] mb-1">
            Adeeb Ahamed
          </h3>
          <p className="text-[18px] sm:text-[19px] lg:text-[21px] font-normal leading-[22px] sm:leading-[24px] lg:leading-[26px] text-[#303030]">
            Managing Director
          </p>
        </div>

        <div className="text-center">
          <div className="w-full aspect-square bg-gray-200 rounded-lg mb-4 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
              <span className="text-gray-600 text-sm">Team Member</span>
            </div>
          </div>
          <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold leading-[26px] sm:leading-[28px] lg:leading-[31px] text-[#0c5890] mb-1">
            Adeeb Ahamed
          </h3>
          <p className="text-[18px] sm:text-[19px] lg:text-[21px] font-normal leading-[22px] sm:leading-[24px] lg:leading-[26px] text-[#303030]">
            Managing Director
          </p>
        </div>

        <div className="text-center">
          <div className="w-full aspect-square bg-gray-200 rounded-lg mb-4 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
              <span className="text-gray-600 text-sm">Team Member</span>
            </div>
          </div>
          <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold leading-[26px] sm:leading-[28px] lg:leading-[31px] text-[#0c5890] mb-1">
            Adeeb Ahamed
          </h3>
          <p className="text-[18px] sm:text-[19px] lg:text-[21px] font-normal leading-[22px] sm:leading-[24px] lg:leading-[26px] text-[#303030]">
            Managing Director
          </p>
        </div>

        <div className="text-center">
          <div className="w-full aspect-square bg-gray-200 rounded-lg mb-4 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
              <span className="text-gray-600 text-sm">Team Member</span>
            </div>
          </div>
          <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold leading-[26px] sm:leading-[28px] lg:leading-[31px] text-[#0c5890] mb-1">
            Adeeb Ahamed
          </h3>
          <p className="text-[18px] sm:text-[19px] lg:text-[21px] font-normal leading-[22px] sm:leading-[24px] lg:leading-[26px] text-[#303030]">
            Managing Director
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Academic Partners Section */}
  <section className="w-full px-4 sm:px-6 lg:px-8 pb-[60px] sm:pb-[80px] lg:pb-[100px]">
    <div className="w-full max-w-[1200px] mx-auto">
      <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold leading-[36px] sm:leading-[40px] lg:leading-[44px] text-[#0e5284] mb-12 lg:mb-16">
        Academic Partners &amp; University Collaborations
      </h2>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16">
        <img src="assets/images/img_jain_online_list.png" className="w-[200px] sm:w-[240px] lg:w-[280px] h-auto" alt="JAIN Online" />
        <img src="assets/images/img_logo_a522cd08.png" className="w-[180px] sm:w-[220px] lg:w-[248px] h-auto" alt="Yenepoya Online" />
        <img src="assets/images/img_dyp_online_logo.png" className="w-[160px] sm:text-[180px] lg:w-[208px] h-auto" alt="DY Patil Online" />
        <img src="assets/images/img_layer_413.png" className="w-[140px] sm:w-[150px] lg:w-[164px] h-auto" alt="ISDC" />
      </div>
    </div>
  </section>




  {/* new sample */}



  


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

export default About;
