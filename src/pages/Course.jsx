import React from 'react';
import { Link } from 'react-router-dom';

function Course() {
  return (
    <>
      
  {/* sample */}


  <section className="hidden md:block">
    {/* Page wrapper WITH background */}
    <div className="relative w-full bg-cover bg-center bg-no-repeat&#xA;             min-h-[500px] lg:min-h-[420px] h-auto py-10 lg:py-0" style={{"backgroundImage":"url('assets/images/bgshade.png')"}}>

      {/* Optional soft overlay */}
      <div className="absolute inset-0 bg-white/40 sm:bg-white/30 md:bg-white/20 z-0"></div>

      {/* All content sits above overlay */}
      <div className="relative z-10 h-full flex flex-col">

        {/* Header */}
        

        {/* Hero Section */}
        <div className="relative flex-1 px-4 sm:px-6 lg:px-14 overflow-hidden">
          <div className="mx-auto max-w-[1200px] h-full grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-8 lg:gap-16 py-6 lg:py-0 relative">

            {/* Text Section */}
            <div className="text-base lg:text-left order-2 lg:order-1 relative lg:-translate-y-[60%]">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D5183] leading-snug">
                Explore Our<br />Professional Courses
              </h1>
            </div>


            {/* Image Section */}
            <div className="flex justify-center lg:justify-center relative order-1 lg:order-2">
              {/* Girl (smaller) */}
              <img src="assets/images/coursegirl.png" alt="Girl Student" className="w-40 sm:w-60 lg:w-[310px] h-[340px] object-contain relative lg:translate-x-[26%] lg:translate-y-[6%]" />
              {/* Boy (original size) */}
              <img src="assets/images/boybag.png" alt="Boy Student" className="w-40 sm:w-60 lg:w-[370px] h-auto object-contain relative lg:translate-x-[-24%] lg:translate-y-[1%]" />
            </div>
          </div>

          {/* Bottom Pattern */}
          <div className="absolute bottom-0 left-0 w-full -z-10">
            <img src="assets/images/background.png" alt="Background pattern" className="w-full h-auto object-cover lg:translate-y-[4%]" />
          </div>
        </div>
      </div>
    </div>


    {/* Management Courses Section */}
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-14 bg-white h-[64vh] ">
      <div className="w-full max-w-[1200px] mx-auto text-left lg:translate-y-[60%] ">

        {/* Heading */}
        <h2 className="text-[32px] sm:text-[40px] lg:text-[45px] font-bold text-[#0d5183]&#xA;               leading-[40px] sm:leading-[50px] lg:leading-[55px] tracking-[1px] mb-6">
          Management Courses
        </h2>

        {/* Paragraph */}
        <p className="text-[18px] sm:text-[20px] lg:text-[22px] text-[#282828]&#xA;               leading-[28px] sm:leading-[32px] lg:leading-[36px] mb-8">
          Our management programs are designed to build strong leadership, business,
          and decision-making skills for today’s competitive world. Through courses
          like BBA, Bcom, BA, MBA, and MCA, students gain practical knowledge in
          business strategy, entrepreneurship, and organizational management while
          preparing for successful careers in the corporate and business sectors.
        </p>

        {/* Enquire Button */}
        <button className="bg-[#1b9fa7] rounded-[30px] px-8 py-3 flex items-center gap-2 hover:bg-[#17898f]&#xA;             transition-colors shadow-sm">
          <span className="text-[18px] font-semibold text-white leading-[24px]">Enquire now</span>
          <div className="w-[34px] h-[34px] bg-cover bg-center rounded-full flex items-center justify-center" style={{"backgroundImage":"url('assets/images/img_ellipse_3_copy_7.svg')"}}>
            <img src="assets/images/img_vector_smart_object_12x16.png" className="w-[14px] h-[10px]" alt="Arrow" />
          </div>
        </button>

      </div>
    </section>

    {/* Booking Section */}
    <div className="absolute left-1/2 top-[414px] -translate-x-1/2 w-[90%] max-w-[1196px] h-[225px] bg-[#0E5284] overflow-hidden rounded-[28px] z-30 flex items-center justify-between px-10">
      {/* Background Image */}
      <img src="assets/images/woman-working-laptop-with-headphones.png" alt="Woman working" className="absolute top-[-160px] w-[442px] h-[586px] object-contain mix-blend-overlay opacity-100 scale-[1.17] left-[20%] -translate-x-1/2" />

      {/* Left Text */}
      <div className="relative z-10 ml-[60px]">
        <h2 className="font-inter font-bold text-white text-[50px] leading-[53px] tracking-[-0.04em]">
          Book your <br />
          seats NOW!
        </h2>
      </div>

      {/* Right Form */}
      <form className="relative z-10 flex flex-wrap gap-3 justify-end max-w-[680px]">
        <input type="text" placeholder="Name" className="w-[327px] h-[58px] bg-[#0C5890] border border-[#3A92D2] rounded-[12px] px-4 text-white placeholder-white/70 focus:outline-none" />
        <input type="text" placeholder="Phone" className="w-[327px] h-[58px] bg-[#0C5890] border border-[#3A92D2] rounded-[12px] px-4 text-white placeholder-white/70 focus:outline-none" />
        <select className="w-[327px] h-[58px] bg-[#0C5890] border border-[#3A92D2] rounded-[12px] px-4 text-white focus:outline-none">
          <option value="">Interested course</option>
          <option value="bca">BCA</option>
          <option value="bcom">B.Com</option>
          <option value="bba">BBA</option>
        </select>
        <button type="submit" className="w-[327px] h-[58px] bg-[#149CA4] text-white font-semibold rounded-[12px] hover:bg-[#118b93] transition">
          Submit
        </button>
      </form>
    </div>





  </section>

  <section className="bg-white min-h-10">

  </section>
  <div className="block md:hidden">

    {/* Header */}
    

    
    


    {/* Hero Section */}
    {/* Hero Section */}
    <section className="hidden lg:block relative w-full bg-gradient-to-r from-blue-50 to-teal-50 overflow-hidden block md:hidden">

      {/* ✅ Background Pattern FULL WIDTH */}
      <div className="absolute bottom-0 left-0 w-full">
        <img src="assets/images/background.png" alt="Background pattern" className="w-full h-auto object-cover" />
      </div>

      {/* Main Container (content width-limited) */}
      <div className="relative w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between py-16 lg:py-20">

          {/* Left Text */}
          <div className="flex-1 text-center lg:text-left -mt-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D5183] leading-snug">
              Lorem Ipsum is<br />simply dummy text
            </h1>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <img src="assets/images/boybag.png" alt="Student" className="w-[250px] sm:w-[320px] lg:w-[400px] object-contain" />
          </div>
        </div>

        {/* Floating Form Box */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-[65%] lg:top-[70%] w-full max-w-[900px] bg-[#0D5183] rounded-2xl shadow-lg p-6 flex flex-col lg:flex-row items-center gap-4 z-10">

          {/* Form Text */}
          <div className="text-white text-2xl font-bold flex-1 text-center lg:text-left">
            Book your seats NOW!
          </div>

          {/* Form Fields */}
          <form className="flex flex-col gap-3 flex-1">
            <div className="flex flex-col lg:flex-row gap-3">
              <input type="text" placeholder="Name" className="px-4 py-2 rounded-lg outline-none w-full lg:flex-1" />
              <input type="text" placeholder="Phone" className="px-4 py-2 rounded-lg outline-none w-full lg:flex-1" />
            </div>
            <div className="flex flex-col lg:flex-row gap-3">
              <select className="px-4 py-2 rounded-lg outline-none w-full lg:flex-1">
                <option>Interested course</option>
                <option>Course 1</option>
                <option>Course 2</option>
              </select>
              <button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg w-full lg:w-auto">
                Submit
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>

    {/* Mobile-only Hero Section */}
    <section className=" block lg:hidden relative w-full bg-gradient-to-r from-blue-50 to-teal-50 overflow-hidden block lg:hidden ">

      {/* Container */}
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 relative">

        {/* Hero Content (Text + Image) */}
        <div className="flex flex-col items-center justify-center py-16 relative z-10">

          {/* Text */}
          <div className="text-center mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0D5183] leading-snug">
              Lorem Ipsum is<br />simply dummy text
            </h1>
          </div>

          {/* Image */}
          <div className="mb-6">
            <img src="assets/images/boybag.png" alt="Student" className="w-[250px] sm:w-[320px] object-contain relative z-20" />
          </div>

          {/* Floating Form Box */}
          <div className="w-full max-w-[90%] bg-[#0D5183] rounded-2xl shadow-lg p-6 flex flex-col gap-4 z-30">

            {/* Form Text */}
            <div className="text-white text-xl font-bold text-center">
              Book your seats NOW!
            </div>

            {/* Form Fields */}
            <form className="flex flex-col gap-3">

              {/* Row 1 */}
              <div className="flex flex-col gap-3">
                <input type="text" placeholder="Name" className="px-4 py-2 rounded-lg outline-none w-full" />
                <input type="text" placeholder="Phone" className="px-4 py-2 rounded-lg outline-none w-full" />
              </div>

              {/* Row 2 */}
              <div className="flex flex-col gap-3">
                <select className="px-4 py-2 rounded-lg outline-none w-full">
                  <option>Interested course</option>
                  <option>Course 1</option>
                  <option>Course 2</option>
                </select>
                <button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg w-full">
                  Submit
                </button>
              </div>

            </form>

          </div>
        </div>

        {/* Background Pattern anchored at bottom */}
        <div className="absolute bottom-0 left-0 w-full z-0">
          <img src="assets/images/background.png" alt="Background pattern" className="w-full object-cover" />
        </div>

      </div>
    </section>











    {/* dummy */}

  </div>


  
  
  








  {/* Management Courses Section */}
  <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-14 bg-white block md:hidden">
    <div className="w-full max-w-[1200px] mx-auto text-left">

      {/* Heading */}
      <h2 className="text-[32px] sm:text-[40px] lg:text-[45px] font-bold text-[#0d5183]&#xA;               leading-[40px] sm:leading-[50px] lg:leading-[55px] tracking-[1px] mb-6">
        Management Courses
      </h2>

      {/* Paragraph */}
      <p className="text-[18px] sm:text-[20px] lg:text-[22px] text-[#282828]&#xA;               leading-[28px] sm:leading-[32px] lg:leading-[36px] mb-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took
        a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
        text of the printing and typesetting industry.Lorem Ipsum is simply dummy
        text of the printing and typesetting industry.
      </p>

      {/* Enquire Button */}
      <button className="bg-[#1b9fa7] rounded-[30px] px-8 py-3 flex items-center gap-2 hover:bg-[#17898f]&#xA;             transition-colors shadow-sm">
        <span className="text-[18px] font-semibold text-white leading-[24px]">Enquire now</span>
        <div className="w-[34px] h-[34px] bg-cover bg-center rounded-full flex items-center justify-center" style={{"backgroundImage":"url('assets/images/img_ellipse_3_copy_7.svg')"}}>
          <img src="assets/images/img_vector_smart_object_12x16.png" className="w-[14px] h-[10px]" alt="Arrow" />
        </div>
      </button>

    </div>
  </section>

  





  {/* Our Management Programs Section */}
  <section className="w-full bg-[#eff3f5] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
    <div className="w-full max-w-[1200px] mx-auto">

      <h2 className="text-[32px] sm:text-[38px] lg:text-[45px] font-bold text-[#0d5183] leading-[40px] sm:leading-[48px] lg:leading-[55px] tracking-[1px] text-center mb-20">
        Our Management Programs
      </h2>

      {/* FIRST ROW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 place-items-center">

        {/* CARD COMPONENT (use same class always) */}
        {/* BBA CARD */}
        <div className="relative bg-white rounded-[20px] shadow-md w-full max-w-[381px] h-[461px] px-6 pt-[150px] pb-6">
          <div className="absolute top-[50px] left-0 w-full h-[160px] bg-cover bg-no-repeat bg-center z-[1]" style={{"backgroundImage":"url('assets/images/cardbg.png')"}}></div>

          <div className="absolute inset-x-0 -top-[40px] flex justify-center z-[2]">
            <img src="assets/images/img_untitled_2025.png" className="w-[225px] h-[252px] object-contain drop-shadow-md" />
          </div>

          <div className="relative z-[3] mt-24 text-left">
            <h3 className="text-[30px] font-bold text-[#0e5284] leading-[35px] mb-3">BBA</h3>
            <p className="text-[18px] leading-[28px] mb-8">
              Learn business management, leadership, and entrepreneurship skills for modern careers. </p>
            <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <span className="text-[19px] font-semibold text-[#0e5284] leading-[24px]">More</span>
              <div className="w-[26px] h-[26px] bg-cover bg-center rounded-full flex items-center justify-center" style={{"backgroundImage":"url('assets/images/img_ellipse_3_copy_12.svg')"}}>
                <img src="assets/images/img_vector_smart_object_8x10.png" className="w-[10px] h-[8px]" alt="" />
              </div>
            </button>
          </div>
        </div>

        {/* BCA CARD */}
        <div className="relative bg-white rounded-[20px] shadow-md w-full max-w-[381px] h-[461px] px-6 pt-[150px] pb-6">
          <div className="absolute top-[50px] left-0 w-full h-[160px] bg-cover bg-no-repeat bg-center z-[1]" style={{"backgroundImage":"url('assets/images/cardbg.png')"}}></div>

          <div className="absolute inset-x-0 -top-[40px] flex justify-center z-[2]">
            <img src="assets/images/img_graphic_element_252x204.png" className="w-[205px] h-[253px] object-contain" />
          </div>

          <div className="relative z-[3] mt-24 text-left">
            <h3 className="text-[30px] font-bold text-[#0e5284] leading-[35px] mb-3">BCA</h3>
            <p className="text-[18px] leading-[28px] mb-8">
              Learn programming, software development, and computer applications for IT careers. </p>
            <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <span className="text-[19px] font-semibold text-[#0e5284] leading-[24px]">More</span>
              <div className="w-[26px] h-[26px] bg-cover bg-center rounded-full flex items-center justify-center" style={{"backgroundImage":"url('assets/images/img_ellipse_3_copy_12.svg')"}}>
                <img src="assets/images/img_vector_smart_object_8x10.png" className="w-[10px] h-[8px]" alt="" />
              </div>
            </button>
          </div>
        </div>

        {/* BA CARD */}
        <div className="relative bg-white rounded-[20px] shadow-md w-full max-w-[381px] h-[461px] px-6 pt-[150px] pb-6">
          <div className="absolute top-[50px] left-0 w-full h-[160px] bg-cover bg-no-repeat bg-center z-[1]" style={{"backgroundImage":"url('assets/images/cardbg.png')"}}></div>

          <div className="absolute inset-x-0 -top-[40px] flex justify-center z-[2]">
            <img src="assets/images/img_model.png" className="w-[205px] h-[253px] object-contain" />
          </div>

          <div className="relative z-[3] mt-24 text-left">
            <h3 className="text-[30px] font-bold text-[#0e5284] leading-[35px] mb-3">BA</h3>
            <p className="text-[18px] leading-[28px] mb-8">
              Study humanities and social sciences to build strong analytical skills.
            </p>
            <p></p>
            <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <span className="text-[19px] font-semibold text-[#0e5284] leading-[24px]">More</span>
              <div className="w-[26px] h-[26px] bg-cover bg-center rounded-full flex items-center justify-center" style={{"backgroundImage":"url('assets/images/img_ellipse_3_copy_12.svg')"}}>
                <img src="assets/images/img_vector_smart_object_8x10.png" className="w-[10px] h-[8px]" alt="" />
              </div>
            </button>
          </div>
        </div>

      </div>

      {/* SECOND ROW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 place-items-center">

        {/* MBA CARD */}
        <div className="relative bg-white rounded-[20px] shadow-md w-full max-w-[381px] h-[461px] px-6 pt-[150px] pb-6">
          <div className="absolute top-[50px] left-0 w-full h-[160px] bg-cover bg-no-repeat bg-center z-[1]" style={{"backgroundImage":"url('assets/images/cardbg.png')"}}></div>

          <div className="absolute inset-x-0 -top-[40px] flex justify-center z-[2]">
            <img src="assets/images/img_layer_424.png" className="w-[225px] h-[252px] object-contain drop-shadow-md" />
          </div>

          <div className="relative z-[3] mt-24 text-left">
            <h3 className="text-[30px] font-bold text-[#0e5284] leading-[35px] mb-3">MBA</h3>
            <p className="text-[18px] leading-[28px] mb-8">
              Build advanced leadership and strategic management skills for business growth. </p>
            <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <span className="text-[19px] font-semibold text-[#0e5284] leading-[24px]">More</span>
              <div className="w-[26px] h-[26px] bg-cover bg-center rounded-full flex items-center justify-center" style={{"backgroundImage":"url('assets/images/img_ellipse_3_copy_12.svg')"}}>
                <img src="assets/images/img_vector_smart_object_8x10.png" className="w-[10px] h-[8px]" alt="" />
              </div>
            </button>
          </div>
        </div>

        {/* MCA CARD */}
        <div className="relative bg-white rounded-[20px] shadow-md w-full max-w-[381px] h-[461px] px-6 pt-[150px] pb-6">
          <div className="absolute top-[50px] left-0 w-full h-[160px] bg-cover bg-no-repeat bg-center z-[1]" style={{"backgroundImage":"url('assets/images/cardbg.png')"}}></div>

          <div className="absolute inset-x-0 -top-[40px] flex justify-center z-[2]">
            <img src="assets/images/img_layer_425.png" className="w-[225px] h-[252px] object-contain drop-shadow-md" />
          </div>

          <div className="relative z-[3] mt-24 text-left">
            <h3 className="text-[30px] font-bold text-[#0e5284] leading-[35px] mb-3">MCA</h3>
            <p className="text-[18px] leading-[28px] mb-8">
              Master advanced programming, software systems, and modern technology solutions. </p>
            <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <span className="text-[19px] font-semibold text-[#0e5284] leading-[24px]">More</span>
              <div className="w-[26px] h-[26px] bg-cover bg-center rounded-full flex items-center justify-center" style={{"backgroundImage":"url('assets/images/img_ellipse_3_copy_12.svg')"}}>
                <img src="assets/images/img_vector_smart_object_8x10.png" className="w-[10px] h-[8px]" alt="" />
              </div>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE TEXT */}
        <div className="flex flex-col justify-start self-start py-14 text-left">
          <p className="text-[28px] sm:text-[32px] lg:text-[37px] font-bold text-[#0d5183] mb-4 leading-tight">
            Start Your<br />Journey with<br />Our Management<br />Programs Today<br />and Build Success </p>
          <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-[19px] font-semibold text-[#33a9b0]">Enquiry Now</span>
            <div className="w-[26px] h-[26px] bg-cover bg-center rounded-full flex items-center justify-center" style={{"backgroundImage":"url('assets/images/img_ellipse_3_copy_12.svg')"}}>
              <img src="assets/images/img_vector_smart_object_8x10.png" className="w-[10px] h-[8px]" alt="" />
            </div>
          </button>
        </div>


      </div>

    </div>
  </section>


  {/* Why Study with Vidya Section */}
  <section className="w-full bg-[#0e5284] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
    <div className="w-full max-w-[1200px] mx-auto">

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {/* Strategic Location */}
        <div className="   p-6 lg:p-4">
          <div className="flex flex-col justify-start items-start ">

            <h2 className="text-[32px] sm:text-[38px] lg:text-[45px] font-bold text-[#ffffff] leading-[40px] sm:leading-[46px] lg:leading-[53px] tracking-[1px] ">
              Why Study<br />with Vidya?
            </h2>

          </div>
        </div>

        {/* Modern Learning Environment */}
        <div className="bg-[#0c5890] border border-[#3a92d2] rounded-[20px] p-6 lg:p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-[40px] h-[40px] bg-cover bg-center rounded-full flex items-center justify-center" style={{"backgroundImage":"url('assets/images/img_ellipse_6.svg')"}}>
              <img src="assets/images/img_vector_smart_object_16x22.png" className="w-[22px] h-[16px]" alt="Icon" />
            </div>
            <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold text-[#ffffff] leading-[26px] sm:leading-[27px] lg:leading-[29px]">
              Modern Learning<br />Environment
            </h3>
          </div>
        </div>

        {/* Industry-Oriented Courses */}
        <div className="bg-[#0c5890] border border-[#3a92d2] rounded-[20px] p-6 lg:p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-[40px] h-[40px] bg-cover bg-center rounded-full flex items-center justify-center" style={{"backgroundImage":"url('assets/images/img_ellipse_6.svg')"}}>
              <img src="assets/images/img_vector_smart_object_16x22.png" className="w-[22px] h-[16px]" alt="Icon" />
            </div>
            <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold text-[#ffffff] leading-[26px] sm:leading-[27px] lg:leading-[29px]">
              Industry-Oriented<br />Courses
            </h3>
          </div>
        </div>

        {/* Dedicated Faculty & Mentors */}
        <div className="bg-[#0c5890] border border-[#3a92d2] rounded-[20px] p-6 lg:p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-[40px] h-[40px] bg-[#33a9b0] rounded-[20px] flex items-center justify-center">
              <img src="assets/images/img_vector_smart_object_16x22.png" className="w-[22px] h-[16px]" alt="Icon" />
            </div>
            <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold text-[#ffffff] leading-[26px] sm:leading-[27px] lg:leading-[29px]">
              Dedicated Faculty<br />&amp; Mentors
            </h3>
          </div>
        </div>

        {/* Career Support & Placement Assistance */}
        <div className="bg-[#0c5890] border border-[#3a92d2] rounded-[20px] p-6 lg:p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-[40px] h-[40px] bg-cover bg-center rounded-full flex items-center justify-center" style={{"backgroundImage":"url('assets/images/img_ellipse_6.svg')"}}>
              <img src="assets/images/img_vector_smart_object_16x22.png" className="w-[22px] h-[16px]" alt="Icon" />
            </div>
            <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold text-[#ffffff] leading-[26px] sm:leading-[27px] lg:leading-[29px]">
              Career Support &amp;<br />Placement Assistance
            </h3>
          </div>
        </div>

        {/* Affordable Fee Structure */}
        <div className="bg-[#0c5890] border border-[#3a92d2] rounded-[20px] p-6 lg:p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-[40px] h-[40px] bg-cover bg-center rounded-full flex items-center justify-center" style={{"backgroundImage":"url('assets/images/img_ellipse_6.svg')"}}>
              <img src="assets/images/img_vector_smart_object_16x22.png" className="w-[22px] h-[16px]" alt="Icon" />
            </div>
            <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold text-[#ffffff] leading-[26px] sm:leading-[27px] lg:leading-[29px]">
              Affordable Fee<br />Structure
            </h3>
          </div>
        </div>

        {/* Inclusive Support for Newcomers */}
        <div className="bg-[#0c5890] border border-[#3a92d2] rounded-[20px] p-6 lg:p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-[40px] h-[40px] bg-[#33a9b0] rounded-[20px] flex items-center justify-center">
              <img src="assets/images/img_vector_smart_object_16x22.png" className="w-[22px] h-[16px]" alt="Icon" />
            </div>
            <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold text-[#ffffff] leading-[26px] sm:leading-[27px] lg:leading-[29px]">
              Inclusive Support for<br />Newcomers
            </h3>
          </div>
        </div>

        {/* Value-Based Education */}
        <div className="bg-[#0c5890] border border-[#3a92d2] rounded-[20px] p-6 lg:p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-[40px] h-[40px] bg-cover bg-center rounded-full flex items-center justify-center" style={{"backgroundImage":"url('assets/images/img_ellipse_6.svg')"}}>
              <img src="assets/images/img_vector_smart_object_16x22.png" className="w-[22px] h-[16px]" alt="Icon" />
            </div>
            <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold text-[#ffffff] leading-[26px] sm:leading-[27px] lg:leading-[29px]">
              Value-Based<br />Education
            </h3>
          </div>
        </div>

        {/* Strong Community & Campus Culture */}
        <div className="bg-[#0c5890] border border-[#3a92d2] rounded-[20px] p-6 lg:p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-[40px] h-[40px] bg-cover bg-center rounded-full flex items-center justify-center" style={{"backgroundImage":"url('assets/images/img_ellipse_6.svg')"}}>
              <img src="assets/images/img_vector_smart_object_16x22.png" className="w-[22px] h-[16px]" alt="Icon" />
            </div>
            <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold text-[#ffffff] leading-[26px] sm:leading-[27px] lg:leading-[29px]">
              Strong Community &amp;<br />Campus Culture
            </h3>
          </div>
        </div>

        {/* Safe & Student-Friendly Campus */}
        <div className="bg-[#0c5890] border border-[#3a92d2] rounded-[20px] p-6 lg:p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-[40px] h-[40px] bg-cover bg-center rounded-full flex items-center justify-center" style={{"backgroundImage":"url('assets/images/img_ellipse_6.svg')"}}>
              <img src="assets/images/img_vector_smart_object_16x22.png" className="w-[22px] h-[16px]" alt="Icon" />
            </div>
            <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold text-[#ffffff] leading-[26px] sm:leading-[27px] lg:leading-[29px]">
              Safe &amp; Student -<br />Friendly Campus
            </h3>
          </div>
        </div>

        {/* Strategic Location */}
        <div className="bg-[#0c5890] border border-[#3a92d2] rounded-[20px] p-6 lg:p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-[40px] h-[40px] bg-cover bg-center rounded-full flex items-center justify-center" style={{"backgroundImage":"url('assets/images/img_ellipse_6.svg')"}}>
              <img src="assets/images/img_vector_smart_object_16x22.png" className="w-[22px] h-[16px]" alt="Icon" />
            </div>
            <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold text-[#ffffff] leading-[26px] sm:leading-[27px] lg:leading-[29px]">
              Strategic<br />Location
            </h3>
          </div>
        </div>

        {/* Apply Now Button */}
        <div className="bg-[#f37666] rounded-[20px] p-6 lg:p-8 flex items-center justify-center">
          <button className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold text-[#ffffff] leading-[26px] sm:leading-[28px] lg:leading-[31px] hover:opacity-90 transition-opacity">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  </section>


  {/* Academic Partners Section */}
  <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
    <div className="w-full max-w-[1200px] mx-auto">
      <h2 className="text-[32px] sm:text-[38px] lg:text-[44px] font-bold text-[#0e5284] leading-[40px] sm:leading-[48px] lg:leading-[54px] mb-12">
        Academic Partners &amp; University Collaborations
      </h2>

      {/* Partners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* JAIN Online */}
        <div className="bg-[#eff3f5] rounded-[30px] p-8 lg:p-12">
          <img src="assets/images/img_jain_online_list.png" className="w-full max-w-[298px] h-auto mb-6" alt="JAIN Online" />
          <p className="text-[17px] sm:text-[18px] lg:text-[19px] font-normal text-[#000000] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
            One of India's top-ranked deemed-to-be universities, Jain University offers flexible, UGC-approved online
            degree programs. Our partnership enables students to pursue industry-relevant courses while learning at
            their own pace, with access to world-class faculty and digital resources.
          </p>
        </div>

        {/* Yenepoya */}
        <div className="bg-[#eff3f5] rounded-[30px] p-8 lg:p-12">
          <img src="assets/images/img_logo_a522cd08.png" className="w-full max-w-[264px] h-auto mb-6" alt="Yenepoya" />
          <p className="text-[17px] sm:text-[18px] lg:text-[19px] font-normal text-[#000000] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
            A prestigious institution in healthcare and life sciences, Yenepoya (Deemed to be University) delivers
            exceptional online programs in Allied Health Sciences and Public Health. This collaboration allows our
            students to benefit from its medical expertise and academic rigor.
          </p>
        </div>

        {/* DY Patil */}
        <div className="bg-[#eff3f5] rounded-[30px] p-8 lg:p-12">
          <img src="assets/images/img_dyp_online_logo.png" className="w-full max-w-[220px] h-auto mb-6" alt="DY Patil" />
          <p className="text-[17px] sm:text-[18px] lg:text-[19px] font-normal text-[#000000] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
            A well-known name in Indian higher education, DY Patil University offers UGC-approved online programs across
            diverse streams including Management, IT, and Healthcare. This partnership empowers our students to gain
            quality education from a reputed institution through a flexible digital platform.
          </p>
        </div>

        {/* ISDC */}
        <div className="bg-[#eff3f5] rounded-[30px] p-8 lg:p-12">
          <img src="assets/images/img_layer_413.png" className="w-full max-w-[174px] h-auto mb-6" alt="ISDC" />
          <p className="text-[17px] sm:text-[18px] lg:text-[19px] font-normal text-[#000000] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
            A global leader in professional education, ISDC supports our students with skill-based training aligned with
            international certifications like ACCA, CMA, and more. This partnership bridges the gap between academics
            and employability.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* What Our Students Say Section */}
  <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <h2 className="text-[32px] sm:text-[38px] lg:text-[47px] font-bold text-[#0e5284] leading-[40px] sm:leading-[48px] lg:leading-[57px] mb-4 sm:mb-0">
          What Our Students Say
        </h2>
        <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span className="text-[19px] font-semibold text-[#33a9b0] leading-[24px]">Enquiry Now</span>
          <div className="w-[26px] h-[26px] bg-cover bg-center rounded-full flex items-center justify-center" style={{"backgroundImage":"url('assets/images/img_ellipse_3_copy_12.svg')"}}>
            <img src="assets/images/img_vector_smart_object_8x10.png" className="w-[10px] h-[8px]" alt="Arrow" />
          </div>
        </button>
      </div>

      {/* Testimonials */}
      <div className="w-full">
        <img src="assets/images/img_layer_403.png" className="w-full h-auto" alt="Student Testimonials" />
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

export default Course;
