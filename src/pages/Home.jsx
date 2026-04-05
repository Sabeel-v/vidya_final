import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      
{/* HERO Section Unified */}
<section className="relative w-full bg-cover bg-center bg-no-repeat" style={{"backgroundImage":"url('assets/images/bgshade.png')"}}>


   {/* soft bottom pattern */}
  <div className="absolute inset-x-0 bottom-0 z-0 pointer-events-none">
    <img src="assets/images/background.png" alt="" className="w-full h-auto object-cover" />
  </div>

  {/* main container */}
  <div className="relative z-10 max-w-[1300px] mx-auto px-6 lg:px-12 py-12 lg:py-20">

    {/* grid: left image, right text */}
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">

      {/* IMAGE column (left on desktop, top on mobile natively) */}
      <img src="assets/images/homegirl.png" alt="Girl" className="w-[260px] sm:w-[300px] lg:w-[380px] max-w-full object-contain lg:-ml-14 lg:translate-y-20 mx-auto" />

      {/* TEXT column (right on desktop, bottom on mobile via native DOM order) */}
      <div className="order-2 lg:order-2 text-center lg:text-left lg:pl-8">
        <h1 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[59px] font-bold leading-tight text-[#0d5183] mb-4">
          <span className="block">Build Your Future</span>
          <span className="block">with Vidya Academy</span>
        </h1>

        <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#222] mb-6 max-w-lg mx-auto lg:mx-0">
Vidya Academy offers industry-oriented courses, expert faculty, and modern learning to help students build successful careers.        </p>

        <div className="flex items-center justify-center lg:justify-start">
          <button onClick={() => window.open("https://wa.me/9072514040?text=Hello", "_blank")} className="flex items-center gap-3 bg-[#1a9ea6] text-white px-6 py-3 rounded-full text-[16px] sm:text-[18px] font-semibold hover:bg-[#158a91] transition transform">
            Enquire Now
            <span className="w-7 h-7 bg-[#0e5284] rounded-full flex items-center justify-center">
              <img src="assets/images/img_vector_smart_object_8x10.png" className="w-[10px] h-[10px]" alt="" />
            </span>
          </button>
        </div>
      </div>

    </div>
  </div>
</section>

{/* sample */}

{/* Our Courses Section Unified */}
<section className="relative w-full py-16 lg:py-24 bg-white overflow-hidden">
  <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Title Area shown primarily on mobile */}
    <div className="flex lg:hidden flex-col justify-center mb-8">
      <p className="text-[#f37666] text-[18px] sm:text-[20px] font-semibold mb-3">Our Courses</p>
      <h2 className="text-[#0e5284] text-[32px] sm:text-[44px] font-bold leading-tight mb-6">
  Explore Our<br />Professional<br />Courses
      </h2>
      <button className="flex items-center gap-2 text-[#1B9FA7] text-[16px] sm:text-[19px] font-semibold hover:gap-4 transition-all duration-300 w-fit">
        Apply Now
        <div className="w-[26px] h-[26px] bg-[#f37666] rounded-full flex items-center justify-center">
          <img src="assets/images/img_vector_smart_object_8x10.png" className="w-[10px] h-[8px]" alt="Arrow" />
        </div>
      </button>
    </div>

    {/* The actual Grid of cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {/* COLUMN 1 */}
      <div className="lg:grid lg:grid-rows-[280px_320px] flex flex-col gap-6">
        {/* Top Left (Our Courses Text) - Hidden on mobile because it's extracted above */}
        <div className="hidden lg:flex flex-col justify-center">
          <p className="text-[#f37666] text-[18px] sm:text-[20px] font-semibold mb-3">Our Courses</p>
          <h2 className="text-[#0e5284] text-[36px] sm:text-[44px] lg:text-[54px] font-bold leading-tight mb-6">
 Explore Our<br />Professional<br />Courses          </h2>
          <button className="flex items-center gap-2 text-[#1B9FA7] text-[16px] sm:text-[19px] font-semibold hover:gap-4 transition-all duration-300">
            Apply Now
            <div className="w-[26px] h-[26px] bg-[#f37666] rounded-full flex items-center justify-center">
              <img src="assets/images/img_vector_smart_object_8x10.png" className="w-[10px] h-[8px]" alt="Arrow" />
            </div>
          </button>
        </div>

        {/* Bottom Left */}
        <div className="bg-[#E9F1F9] rounded-[24px] p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden shadow-md lg:shadow-[0_10px_25px_rgba(0,0,0,0.05)] w-full sm:min-h-[250px] lg:h-full">
          <div>
            <img src="assets/images/mediim.png" className="w-[50px] h-auto mb-6" alt="Medical Coaching" />
            <h3 className="text-[#0E5284] text-[22px] sm:text-[26px] lg:text-[28px] font-bold leading-snug">
              Medical Coaching<br />&amp; Admission<br />Guidance
            </h3>
          </div>
          <div className="absolute bottom-5 right-5 w-[24px] h-[24px] border-2 border-[#f37666] rounded-full flex items-center justify-center">
            <img src="assets/images/redarrow.png" alt="Arrow" className="w-[14px] h-[14px] object-contain" />
          </div>
        </div>
      </div>

      {/* COLUMN 2 */}
      <div className="flex flex-col gap-6 lg:h-full">
        {/* Top Middle (Management) */}
        <div className="bg-[#0E5284] rounded-[24px] p-6 lg:p-8 text-white flex flex-col justify-between relative overflow-hidden shadow-md lg:shadow-[0_10px_25px_rgba(0,0,0,0.05)] h-[240px] sm:h-[250px] lg:h-[247px] w-full">
          <div>
            <img src="assets/images/img_vector_smart_object_52x66.png" className="w-[52px] h-auto mb-6" alt="Management" />
            <h3 className="text-[22px] sm:text-[26px] lg:text-[28px] font-bold">Management</h3>
          </div>
          <div className="absolute bottom-5 right-5 w-[24px] h-[24px] bg-white rounded-full flex items-center justify-center">
            <img src="assets/images/whitearrow.png" alt="Arrow" className="w-[14px] h-[14px] object-contain" />
          </div>
        </div>

        {/* Bottom Middle (Commerce) */}
        <div className="relative rounded-[24px] overflow-hidden shadow-md lg:shadow-[0_10px_25px_rgba(0,0,0,0.05)] h-[260px] sm:h-[300px] lg:h-auto lg:flex-1 w-full bg-cover bg-center" style={{"backgroundImage":"url('assets/images/homegirl3.jpg')"}}>
          <div className="absolute inset-0 bg-[#0E5284]/30 flex flex-col justify-end p-6 lg:p-8 text-white">
            <img src="assets/images/comim.png" className="w-[50px] h-auto mb-4" alt="Commerce Icon" />
            <h3 className="text-[22px] sm:text-[26px] lg:text-[28px] font-bold">Commerce</h3>
            <div className="absolute bottom-5 right-5 w-[24px] h-[24px] bg-white rounded-full flex items-center justify-center">
              <img src="assets/images/whitearrow.png" alt="Arrow" className="w-[14px] h-[14px] object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* COLUMN 3 */}
      <div className="flex flex-col gap-6 sm:col-span-2 lg:col-span-1 lg:h-full">
        {/* Top Right: Allied Health Science */}
        <div className="bg-[#1B9FA7] rounded-[24px] p-6 lg:p-8 text-white flex flex-col justify-between relative overflow-hidden shadow-md lg:shadow-[0_10px_25px_rgba(0,0,0,0.05)] h-[240px] sm:h-auto lg:h-[347px] w-full">
          <div>
            <img src="assets/images/img_vector_smart_object_64x64.png" className="w-[52px] h-auto mb-6" alt="Health Icon" />
            <h3 className="text-[22px] sm:text-[26px] lg:text-[28px] font-bold leading-snug">Allied Health<br />Science</h3>
          </div>
          <div className="absolute bottom-5 right-5 w-[24px] h-[24px] bg-white rounded-full flex items-center justify-center">
            <img src="assets/images/whitearrow.png" alt="Arrow" className="w-[14px] h-[14px] object-contain" />
          </div>
        </div>

        {/* Bottom Right: Language Learning */}
        <div className="bg-[#F37666] rounded-[24px] p-6 lg:p-8 text-white flex flex-col justify-between relative overflow-hidden shadow-md lg:shadow-[0_10px_25px_rgba(0,0,0,0.05)] h-[240px] sm:h-auto lg:flex-1 w-full">
          <div>
            <img src="assets/images/booka.png" className="w-[50px] h-auto mb-6" alt="Language" />
            <h3 className="text-[22px] sm:text-[26px] lg:text-[28px] font-bold leading-snug">Language<br />Learning</h3>
          </div>
          <div className="absolute bottom-5 right-5 w-[24px] h-[24px] bg-white rounded-full flex items-center justify-center">
            <img src="assets/images/whitearrow.png" alt="Arrow" className="w-[14px] h-[14px] object-contain" />
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>

{/* sample popular program */}

 {/* Our Management Programs Section */}
<section className="w-full  px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
  <div className="w-full max-w-[1200px] mx-auto">

    <h2 className="text-[32px] sm:text-[38px] lg:text-[45px] font-bold text-[#0d5183] leading-[40px] sm:leading-[48px] lg:leading-[55px] tracking-[1px] text-start mb-20">
      Popular Programs
    </h2>

    {/* FIRST ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 place-items-center">

      {/* CARD COMPONENT (use same class always) */}
      

      {/* BCA CARD */}
      <div className="relative bg-[#e8fafc] rounded-[20px] shadow-md w-full max-w-[381px] h-[461px] px-6 pt-[150px] pb-6">
        <div className="absolute top-[50px] left-0 w-full h-[160px] bg-cover bg-no-repeat bg-center z-[1]" style={{"backgroundImage":"url('assets/images/cardbg.png')"}}></div>

        <div className="absolute inset-x-0 -top-[40px] flex justify-center z-[2]">
          <img src="assets/images/img_scientist_wearing.png" className=" object-contain w-full max-w-[260px] h-auto mx-auto mb-4 rounded-lg" />
        </div>

        <div className="relative z-[3] mt-24 text-left">
          <h3 className="text-[30px] font-bold text-[#0e5284] leading-[35px] mb-3">Medical Laboratory<br />Technology (MLT)</h3>
          <p className="text-[18px] leading-[28px] mb-8">
Gain practical skills in medical laboratory testing and diagnostics. 
          </p>
          <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-[19px] font-semibold text-[#0e5284] leading-[24px]">More</span>
            <div className="w-[26px] h-[26px] bg-cover bg-center rounded-full flex items-center justify-center" style={{"backgroundImage":"url('assets/images/img_ellipse_3_copy_12.svg')"}}>
              <img src="assets/images/img_vector_smart_object_8x10.png" className="w-[10px] h-[8px]" alt="" />
            </div>
          </button>
        </div>
      </div>

      {/* BBA CARD */}
      <div className="relative bg-[#e4f1f9] rounded-[20px] shadow-md w-full max-w-[381px] h-[461px] px-6 pt-[150px] pb-6">
        <div className="absolute top-[50px] left-0 w-full h-[160px] bg-cover bg-no-repeat bg-center z-[1]" style={{"backgroundImage":"url('assets/images/cardbg.png')"}}></div>

        <div className="absolute inset-x-0 -top-[40px] flex justify-center z-[2]">
          <img src="assets/images/img_untitled_2025.png" className="w-[225px] h-[252px] object-contain drop-shadow-md" />
        </div>

        <div className="relative z-[3] mt-24 text-left">
          <h3 className="text-[30px] font-bold text-[#0e5284] leading-[35px] mb-3">BBA</h3>
          <p className="text-[18px] leading-[28px] mb-8">
             Build strong business, management, and leadership skills for careers in corporate and entrepreneurial fields.   
          </p>
          <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-[19px] font-semibold text-[#0e5284] leading-[24px]">More</span>
            <div className="w-[26px] h-[26px] bg-cover bg-center rounded-full flex items-center justify-center" style={{"backgroundImage":"url('assets/images/img_ellipse_3_copy_12.svg')"}}>
              <img src="assets/images/img_vector_smart_object_8x10.png" className="w-[10px] h-[8px]" alt="" />
            </div>
          </button>
        </div>
      </div>

      {/* BA CARD */}
      <div className="relative bg-[#fbf5f4] rounded-[20px] shadow-md w-full max-w-[381px] h-[461px] px-6 pt-[150px] pb-6">
        <div className="absolute top-[50px] left-0 w-full h-[160px] bg-cover bg-no-repeat bg-center z-[1]" style={{"backgroundImage":"url('assets/images/cardbg.png')"}}></div>

        <div className="absolute inset-x-0 -top-[40px] flex justify-center z-[2]">
          <img src="assets/images/img_image.png" className=" object-contain max-w-[252px] h-auto mx-auto mb-4 rounded-lg" />
        </div>

        <div className="relative z-[3] mt-24 text-left">
          <h3 className="text-[30px] font-bold text-[#0e5284] leading-[35px] mb-3">B.com</h3>
          <p className="text-[18px] leading-[28px] mb-8">
              Gain in-depth knowledge in accounting, finance, and commerce to prepare for careers in business and finance.
          </p>
          <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-[19px] font-semibold text-[#0e5284] leading-[24px]">More</span>
            <div className="w-[26px] h-[26px] bg-cover bg-center rounded-full flex items-center justify-center" style={{"backgroundImage":"url('assets/images/img_ellipse_3_copy_12.svg')"}}>
              <img src="assets/images/img_vector_smart_object_8x10.png" className="w-[10px] h-[8px]" alt="" />
            </div>
          </button>
        </div>
      </div>

    </div>
</div></section>

    

    {/* Why Choose Us Section */}
<section className="w-full py-16 lg:py-20 bg-[#0c5890] text-white">
  <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center gap-10">
    {/* Left Image Card */}
    <div className="relative w-full max-w-[360px] rounded-[24px] overflow-hidden shadow-lg ">
      <img src="assets/images/image-bg.jpg" alt="Students" className="w-full h-full object-cover z-30" />
      <div className="absolute inset-0 bg-[#0c5890]/30 flex flex-col justify-end p-8">
        <h2 className="text-[30px] sm:text-[36px] font-bold mb-3 leading-tight">
          Why<br />Choose us
        </h2>
        <p className="text-[15px] sm:text-[16px] leading-relaxed mb-6">
           Discover quality education, expert mentors, and career-focused programs designed for your success.
        </p>
        <button className="bg-[#f37666] text-white px-8 py-3 rounded-full text-[16px] font-semibold hover:bg-[#e55a4a] transition-all duration-300 hover:scale-105 flex items-center gap-2 w-fit">
          Apply Now
          <div className="w-[26px] h-[26px] bg-[#0e5284] rounded-full flex items-center justify-center">
            <img src="assets/images/img_vector_smart_object_8x10.png" className="w-[10px] h-[8px]" alt="Arrow" />
          </div>
        </button>
      </div>
    </div>

    {/* Right Side Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 w-full max-w-[780px]">
      {/* Each Card */}
      <div className="bg-[#0c5890] border border-[#3a92d2] rounded-[18px] p-5 flex items-center gap-4">
        <div className="w-[38px] h-[38px] bg-[#33a9b0] rounded-full flex items-center justify-center flex-shrink-0">
          <img src="assets/images/img_vector_smart_object_16x22.png" className="w-[20px] h-[14px]" alt="Check" />
        </div>
        <h3 className="text-[18px] font-bold leading-tight">
          Modern Learning<br />Environment
        </h3>
      </div>

      <div className="bg-[#0c5890] border border-[#3a92d2] rounded-[18px] p-5 flex items-center gap-4">
        <div className="w-[38px] h-[38px] bg-[#33a9b0] rounded-full flex items-center justify-center flex-shrink-0">
          <img src="assets/images/img_vector_smart_object_16x22.png" className="w-[20px] h-[14px]" alt="Check" />
        </div>
        <h3 className="text-[18px] font-bold leading-tight">
          Industry-Oriented<br />Courses
        </h3>
      </div>

      <div className="bg-[#0c5890] border border-[#3a92d2] rounded-[18px] p-5 flex items-center gap-4">
        <div className="w-[38px] h-[38px] bg-[#33a9b0] rounded-full flex items-center justify-center flex-shrink-0">
          <img src="assets/images/img_vector_smart_object_16x22.png" className="w-[20px] h-[14px]" alt="Check" />
        </div>
        <h3 className="text-[18px] font-bold leading-tight">
          Dedicated Faculty<br />&amp; Mentors
        </h3>
      </div>

      <div className="bg-[#0c5890] border border-[#3a92d2] rounded-[18px] p-5 flex items-center gap-4">
        <div className="w-[38px] h-[38px] bg-[#33a9b0] rounded-full flex items-center justify-center flex-shrink-0">
          <img src="assets/images/img_vector_smart_object_16x22.png" className="w-[20px] h-[14px]" alt="Check" />
        </div>
        <h3 className="text-[18px] font-bold leading-tight">
          Career Support &amp;<br />Placement Assistance
        </h3>
      </div>

      {/* <div
        className="bg-[#0c5890] border border-[#3a92d2] rounded-[18px]  flex items-center gap-4"
      >
        <div
          className="w-[38px] h-[38px] bg-[#33a9b0] rounded-full flex items-center justify-center flex-shrink-0"
        >
          <img
            src="assets/images/img_vector_smart_object_16x22.png"
            className="w-[20px] h-[14px]"
            alt="Check"
          />
        </div>
        <h3 className="text-[18px] font-bold leading-tight">
          Affordable Fee<br />Structure
        </h3>
      </div> */}

            <div className="bg-[#0c5890] border border-[#3a92d2] rounded-[18px] p-5 flex items-center gap-4">
        <div className="w-[38px] h-[38px] bg-[#33a9b0] rounded-full flex items-center justify-center flex-shrink-0">
          <img src="assets/images/img_vector_smart_object_16x22.png" className="w-[20px] h-[14px]" alt="Check" />
        </div>
        <h3 className="text-[18px] font-bold leading-tight">
         Affordable Fee<br />Structure
        </h3>
      </div>

      <div className="bg-[#0c5890] border border-[#3a92d2] rounded-[18px] p-5 flex items-center gap-4">
        <div className="w-[38px] h-[38px] bg-[#33a9b0] rounded-full flex items-center justify-center flex-shrink-0">
          <img src="assets/images/img_vector_smart_object_16x22.png" className="w-[20px] h-[14px]" alt="Check" />
        </div>
        <h3 className="text-[18px] font-bold leading-tight">
          Inclusive Support for<br />Newcomers
        </h3>
      </div>

      <div className="bg-[#0c5890] border border-[#3a92d2] rounded-[18px] p-5 flex items-center gap-4">
        <div className="w-[38px] h-[38px] bg-[#33a9b0] rounded-full flex items-center justify-center flex-shrink-0">
          <img src="assets/images/img_vector_smart_object_16x22.png" className="w-[20px] h-[14px]" alt="Check" />
        </div>
        <h3 className="text-[18px] font-bold leading-tight">
          Value-Based<br />Education
        </h3>
      </div>

      <div className="bg-[#0c5890] border border-[#3a92d2] rounded-[18px] p-5 flex items-center gap-4">
        <div className="w-[38px] h-[38px] bg-[#33a9b0] rounded-full flex items-center justify-center flex-shrink-0">
          <img src="assets/images/img_vector_smart_object_16x22.png" className="w-[20px] h-[14px]" alt="Check" />
        </div>
        <h3 className="text-[18px] font-bold leading-tight">
          Strong Community &amp;<br />Campus Culture
        </h3>
      </div>

      <div className="bg-[#0c5890] border border-[#3a92d2] rounded-[18px] p-5 flex items-center gap-4">
        <div className="w-[38px] h-[38px] bg-[#33a9b0] rounded-full flex items-center justify-center flex-shrink-0">
          <img src="assets/images/img_vector_smart_object_16x22.png" className="w-[20px] h-[14px]" alt="Check" />
        </div>
        <h3 className="text-[18px] font-bold leading-tight">
          Safe &amp; Student-<br />Friendly Campus
        </h3>
      </div>

      <div className="bg-[#0c5890] border border-[#3a92d2] rounded-[18px] p-5 flex items-center gap-4">
        <div className="w-[38px] h-[38px] bg-[#33a9b0] rounded-full flex items-center justify-center flex-shrink-0">
          <img src="assets/images/img_vector_smart_object_16x22.png" className="w-[20px] h-[14px]" alt="Check" />
        </div>
        <h3 className="text-[18px] font-bold leading-tight">
          Strategic<br />Location
        </h3>
      </div>
    </div>
  </div>
</section>


   {/* About Us (like the screenshot) */}
<section className="w-full py-14 lg:py-28">
  <div className="w-full px-4 sm:px-6 lg:px-14">
    <div className="mx-auto w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-[520px_1fr] items-center gap-10 lg:gap-16">
      
      {/* Image + coral backdrop */}
      <div className="relative flex justify-center lg:justify-start">
        {/* coral rounded card behind */}
        <div className="w-[320px] sm:w-[380px] h-[480px] bg-[#f37666] rounded-[24px]"></div>

        {/* student image */}
        <img src="assets/images/studenthome.png" alt="Student" className="absolute bottom-0 left-1/3 -translate-x-1/3 lg:-left-4 lg:translate-x-0 w-[300px] sm:w-[360px] lg:w-[420px] drop-shadow-lg" />
      </div>

      {/* Right side content */}
      <div className="text-left">
        <p className="text-[18px] sm:text-[21px] font-semibold text-[#f37666] mb-3">About Us</p>

        <h2 className="text-[32px] sm:text-[42px] lg:text-[47px] font-bold text-[#0e5284] leading-tight mb-4">
Empowering Students<br className="hidden sm:block" />Through Quality Education        </h2>

        <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#282828] leading-relaxed mb-8 max-w-[680px]">
          Vidya Academy provides industry-oriented education designed to prepare students for successful and rewarding careers. With experienced mentors, modern learning methods, and career-focused programs, we help students gain the knowledge, confidence, and practical skills needed to succeed. 
        </p>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row items-stretch gap-6 lg:gap-8">
          <div className="bg-white border border-[#bfc6cb] rounded-[18px] px-6 py-4 flex items-center gap-2">
            <span className="text-[48px] sm:text-[58px] lg:text-[65px] font-bold text-[#0e5284] leading-none">35</span>
            <span className="text-[32px] sm:text-[40px] lg:text-[46px] font-normal text-[#f37666] leading-none">+</span>
            <span className="text-[20px] sm:text-[26px] lg:text-[30px] font-bold text-[#0e5284] leading-none">Programs</span>
          </div>

          <div className="bg-white border border-[#bfc6cb] rounded-[18px] px-6 py-4 flex items-center gap-2">
            <span className="text-[48px] sm:text-[58px] lg:text-[65px] font-bold text-[#0e5284] leading-none">100</span>
            <span className="text-[32px] sm:text-[40px] lg:text-[46px] font-normal text-[#f37666] leading-none">%</span>
            <span className="text-[18px] sm:text-[22px] lg:text-[27px] font-bold text-[#0e5284] leading-tight">
              Dedicated<br />Mentors
            </span>
          </div>
        </div>

        {/* Optional: “More About Us” link like the design */}
        <a href="#" className="inline-flex items-center gap-2 mt-6 text-[16px] sm:text-[18px] font-semibold text-[#0e5284]">
          More About Us
          <span className="inline-block translate-y-[1px]">➜</span>
        </a>
      </div>
    </div>
  </div>
</section>


{/* Academic Partners Section */}
<section className="relative w-full py-16 lg:py-24 bg-[#f5f9fc] ">
  {/* Top background graphic */}
  <div className="absolute right-0 top-0 w-full h-full bg-no-repeat bg-right-top bg-contain lg:bg-[length:auto_100%]" style={{"backgroundImage":"url('assets/images/bggraph.png')","opacity":"0.3"}}></div>

  <div className="relative w-full px-4 sm:px-6 lg:px-14">
    <div className="w-full max-w-[1200px] mx-auto relative flex flex-col items-start gap-10">
      {/* Heading */}
      <h2 className="text-[30px] sm:text-[36px] lg:text-[44px] font-bold text-[#0e5284] leading-tight mb-10 relative z-30">
        Academic Partners<br />&amp; University Collaborations
      </h2>

      {/* Logos and Image Container */}
      <div className="relative hidden lg:block lg:h-[480px]">
        {/* Background pattern behind student */}
        <div className="absolute w-[810px] h-[370px] left-[400px] top-[20px] bg-no-repeat bg-contain z-10" style={{"backgroundImage":"url('assets/images/img_vector_smart_object.png')"}}></div>

        {/* Graduate image */}
<div className="absolute w-[493px] h-[655px] left-[600px] top-[-430px] z-20">
  <img src="assets/images/graduatebg.png" alt="Graduate Student" className="w-full h-auto drop-shadow-lg" />
</div>


        {/* Logo Cards */}
        <div className="relative z-30">
          {/* Card 1 */}
          <div className="absolute w-[385.99px] h-[199.21px] left-0 top-0 bg-white rounded-[30px]&#xA;                   shadow-[24px_29px_57px_rgba(94,108,117,0.06)] flex items-center justify-center">
            <img src="assets/images/img_jain_online_list.png" className="max-w-[210px]" alt="JAIN Online" />
          </div>

          {/* Card 2 */}
          <div className="absolute w-[385.99px] h-[199.21px] left-0 top-[217px] bg-white rounded-[30px]&#xA;                   shadow-[24px_29px_57px_rgba(94,108,117,0.06)] flex items-center justify-center">
            <img src="assets/images/img_logo_a522cd08.png" className="max-w-[210px]" alt="YENEPOYA Online" />
          </div>

          {/* Card 3 */}
          <div className="absolute w-[385.99px] h-[199.21px] left-[405.14px] top-[217px] bg-white rounded-[30px]&#xA;                   shadow-[24px_29px_57px_rgba(94,108,117,0.06)] flex items-center justify-center">
            <img src="assets/images/img_dyp_online_logo.png" className="max-w-[210px]" alt="DY Patil Online" />
          </div>

          {/* Card 4 */}
          <div className="absolute w-[385.99px] h-[199.21px] left-[811.23px] top-[217px] bg-white rounded-[30px]&#xA;                   shadow-[24px_29px_57px_rgba(94,108,117,0.06)] flex items-center justify-center">
            <img src="assets/images/img_layer_413.png" className="max-w-[210px]" alt="ISDC" />
          </div>
        </div>
      </div>

      {/* Apply Now Button */}
    {/* Apply Now Button */}
<div className="mt-10 w-full flex justify-center items-center relative z-30">
  <a href="#" className="inline-flex items-center gap-2 px-10 py-4 bg-[#1BA1A8] text-white text-[16px] sm:text-[18px] font-semibold rounded-full shadow-md hover:bg-[#0b4570] transition-all">
    Apply Now
    <span className="inline-block text-[#f37666] text-xl">➜</span>
  </a>
</div>


    
  </div>
</div></section>



    {/* Latest Insights Section */}
  {/* Latest Insights Section */}
{/* Latest Insights Section */}
<section className="w-full px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 bg-white">
  <div className="max-w-[1250px] mx-auto">
    {/* Header */}
    <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
      <h2 className="text-[36px] sm:text-[44px] lg:text-[48px] font-bold text-[#0E5284]">
        Latest Insights
      </h2>
      <button className="flex items-center gap-2 text-[#33A9B0] text-[16px] sm:text-[18px] font-semibold hover:gap-3 transition-all duration-300">
        Read all Blogs
        <div className="w-[26px] h-[26px] bg-[#F37666] rounded-full flex items-center justify-center">
          <img src="assets/images/img_vector_smart_object_7.png" className="w-[10px] h-[10px]" alt="Arrow" />
        </div>
      </button>
    </div>

    {/* Main content: Two columns */}
    <div className="grid grid-cols-1 lg:grid-cols-[382px_1fr] gap-8 items-start">
      
      {/* News & Events */}
      <div className="w-full h-[510px] bg-[#1BA1A8] text-white rounded-[24px] p-8 flex flex-col justify-between shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
        <div>
          <h3 className="text-[22px] font-semibold mb-6">News &amp; Events</h3>

          {/* Dates Row */}
          <div className="flex items-center justify-between mb-6">
            <img src="assets/images/leftarrow.png" alt="Prev" className="w-[14px] h-[24px] opacity-90" />
            <div className="flex items-center justify-center gap-6">
              <div className="text-center">
                <span className="block text-[40px] font-bold leading-none">02</span>
                <span className="text-[15px]">August</span>
              </div>
              <div className="text-center">
                <span className="block text-[40px] font-bold leading-none">03</span>
                <span className="text-[15px]">August</span>
              </div>
              <div className="text-center">
                <span className="block text-[40px] font-bold leading-none">05</span>
                <span className="text-[15px]">August</span>
              </div>
            </div>
            <img src="assets/images/rightarrow.png" alt="Next" className="w-[14px] h-[24px] opacity-90" />
          </div>

          <div className="w-full h-[1px] bg-white/70 mb-6"></div>

          <p className="text-[15px] mb-4 font-semibold tracking-wide">11:00 AM GST</p>
          <p className="text-[15px] leading-relaxed opacity-90">
                         Join our upcoming seminar and interactive session designed to guide students about career opportunities and course options at Vidya Academy.

          </p>
        </div>

        <button className="flex items-center gap-2 text-white font-medium mt-8 hover:underline transition-all duration-200">
          View All
          <img src="assets/images/img_vector_smart_object_7.png" className="w-[10px] h-[10px]" alt="Arrow" />
        </button>
      </div>

      {/* Blogs Section */}
      <div className="w-full h-[510px] bg-[#EFF3F5] rounded-[30px] p-8 flex flex-col shadow-[0_10px_25px_rgba(0,0,0,0.05)]  hidden sm:block">
        {/* Title */}
        <h3 className="text-[22px] font-semibold text-[#0E5284] mb-6">Blogs</h3>

        {/* Content Grid */}
        <div className="grid grid-cols-[1.5fr_1fr] gap-6 h-full">
          {/* Left Column (Featured Blog) */}
          <div className="flex flex-col">
            <img src="assets/images/homeblog.png" alt="Students" className="w-full h-[220px] object-cover  mb-4" />

            <h4 className="text-[#0E5284] font-bold text-[20px] mb-2 leading-snug">
How to Choose the Right Course After Higher Secondary            </h4>
            <p className="text-[#F37666] text-[15px] mb-4 font-medium">
              Friday, 1 August 2025
            </p>

            <button className="flex items-center gap-2 text-[#0E5284] font-medium hover:gap-3 transition-all duration-300 mt-auto">
              Read more
              <img src="assets/images/img_vector_smart_object_7.png" className="w-[10px] h-[10px]" alt="Arrow" />
            </button>
          </div>

          {/* Right Column (Other Blogs) */}
          <div className="flex flex-col justify-between">
            {/* Blog Item */}
            <div className="flex gap-3">
              <img src="assets/images/hba.png" alt="Blog Image" className="w-[110px] h-[80px]  object-cover" />
              <div>
                <h5 className="text-[#0E5284] font-bold text-[15px] leading-snug mb-1">
                  Top Career Opportunities in Allied Health Science
                </h5>
                <p className="text-[#F37666] text-[13px] font-medium">
                  Friday, 1 August 2025
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <img src="assets/images/hbb.png" alt="Blog Image" className="w-[110px] h-[80px] r object-cover" />
              <div>
                <h5 className="text-[#0E5284] font-bold text-[15px] leading-snug mb-1">
                 Why Business and Commerce Courses Are in High Demand
                </h5>
                <p className="text-[#F37666] text-[13px] font-medium">
                  Friday, 1 August 2025
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <img src="assets/images/hbc.png" alt="Blog Image" className="w-[110px] h-[80px]  object-cover" />
              <div>
                <h5 className="text-[#0E5284] font-bold text-[15px] leading-snug mb-1">
                   Benefits of Learning Foreign Languages for Your Career
                </h5>
                <p className="text-[#F37666] text-[13px] font-medium">
                  Friday, 1 August 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


{/* mobile version of blog */}  




{/* Blogs Section (Mobile Only) */}
<div className="block lg:hidden w-full bg-[#EFF3F5] rounded-[20px] p-5 shadow-[0_10px_25px_rgba(0,0,0,0.05)]">

  {/* Title */}
  <h3 className="text-[20px] font-semibold text-[#0E5284] mb-5">Blogs</h3>

  {/* Featured Blog */}
  <div className="mb-6">
    <img src="assets/images/homeblog.png" alt="Students" className="w-full h-[180px] object-cover rounded-[10px] mb-3" />

    <h4 className="text-[#0E5284] font-bold text-[18px] leading-snug mb-1">
       How to Choose the Right Course After Higher Secondary
    </h4>
    <p className="text-[#F37666] text-[14px] font-medium mb-3">
      Friday, 1 August 2025
    </p>

    <button className="flex items-center gap-2 text-[#0E5284] font-medium transition-all duration-300">
      Read more
      <img src="assets/images/img_vector_smart_object_7.png" className="w-[10px] h-[10px]" alt="Arrow" />
    </button>
  </div>

  {/* Other Blogs List */}
  <div className="space-y-4">

    {/* Blog 1 */}
    <div className="flex gap-3">
      <img src="assets/images/hba.png" className="w-[100px] h-[70px] rounded-[8px] object-cover" alt="" />
      <div>
        <h5 className="text-[#0E5284] font-bold text-[15px] leading-snug mb-1">
          Top Career Opportunities in Allied Health Science
        </h5>
        <p className="text-[#F37666] text-[13px] font-medium">
          Friday, 1 August 2025
        </p>
      </div>
    </div>

    {/* Blog 2 */}
    <div className="flex gap-3">
      <img src="assets/images/hbb.png" className="w-[100px] h-[70px] rounded-[8px] object-cover" alt="" />
      <div>
        <h5 className="text-[#0E5284] font-bold text-[15px] leading-snug mb-1">
          Why Business and Commerce Courses Are in High Demand
        </h5>
        <p className="text-[#F37666] text-[13px] font-medium">
          Friday, 1 August 2025
        </p>
      </div>
    </div>

    {/* Blog 3 */}
    <div className="flex gap-3">
      <img src="assets/images/hbc.png" className="w-[100px] h-[70px] rounded-[8px] object-cover" alt="" />
      <div>
        <h5 className="text-[#0E5284] font-bold text-[15px] leading-snug mb-1">
           Benefits of Learning Foreign Languages for Your Career
           
        </h5>
        <p className="text-[#F37666] text-[13px] font-medium">
          Friday, 1 August 2025
        </p>
      </div>
    </div>

  </div>
</div>





   



    



 {/* What Our Students Say Section */}
    <section className="w-full px-4 sm:px-6 lg:px-4 py-12 sm:py-16 lg:py-20">
        <div className="w-full max-w-[1250px] mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                <h2 className="text-[32px] sm:text-[38px] lg:text-[47px] font-bold text-[#0e5284] leading-[40px] sm:leading-[48px] lg:leading-[57px] mb-4 sm:mb-0">
                    What Our Students Say
                </h2>
                <button className="flex items-center gap-2 text-[#33a9b0] text-[16px] sm:text-[19px] font-semibold hover:gap-4 transition-all duration-300">
                    Enquiry Now
                    <div className="w-[26px] h-[26px] bg-[#33a9b0] rounded-full flex items-center justify-center">
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
    </>
  );
}

export default Home;
