import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="w-full bg-[#0e5284] px-[16px] sm:px-[24px] lg:px-[32px] py-[16px] sm:py-[24px] lg:py-[32px]"
    id="105_4_0_2445_1920_904">
    <div
      className="flex flex-col gap-[37px] sm:gap-[56px] lg:gap-[74px] justify-start items-center w-full max-w-[1258px] mx-auto"
      id="105_4_361_2703_1258_612">

      {/* Footer Links */}
      <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-8 lg:gap-0"
        id="105_4_364_2703_1194_350">

        {/* Management Column */}
        <div className="flex flex-col justify-start items-start w-full lg:w-[18%]" id="105_4_364_2706_210_348">
          <h3
            className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold leading-[20px] sm:leading-[23px] lg:leading-[25px] text-white mb-4 lg:mb-6"
            id="105:95">Management</h3>
          <ul className="flex flex-col justify-start items-start w-auto space-y-2" id="105_4_364_2735_102_320">
            <li className="flex gap-[6px] sm:gap-[7px] lg:gap-[8px] justify-start items-center w-auto">
              <img src="assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px]" alt="Bullet point" id="105:106" />
              <Link to="/course"
                className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">BBA</Link>
            </li>
            <li className="flex gap-[6px] sm:gap-[7px] lg:gap-[8px] justify-start items-center w-auto">
              <img src="assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px]" alt="Bullet point" id="105:136" />
              <Link to="/course"
                className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">BCA</Link>
            </li>
            <li className="flex gap-[6px] sm:gap-[7px] lg:gap-[8px] justify-start items-start w-auto">
              <img src="assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px] mt-[6px]" alt="Bullet point"
                id="105:137" />
              <Link to="/course"
                className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">BA</Link>
            </li>
            <li className="flex gap-[6px] sm:gap-[7px] lg:gap-[8px] justify-start items-start w-auto">
              <img src="assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px] mt-[6px]" alt="Bullet point"
                id="105:138" />
              <Link to="/course"
                className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">MBA</Link>
            </li>
            <li className="flex gap-[6px] sm:gap-[7px] lg:gap-[8px] justify-start items-start w-auto">
              <img src="assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px] mt-[6px]" alt="Bullet point"
                id="105:139" />
              <Link to="/course"
                className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">MCA</Link>
            </li>
          </ul>

          <h4
            className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold leading-[20px] sm:leading-[23px] lg:leading-[25px] text-white mt-6 mb-4"
            id="105:96">Commerce</h4>
          <ul className="flex flex-col justify-start items-start w-auto space-y-2">
            <li className="flex gap-[8px] sm:gap-[9px] lg:gap-[10px] justify-start items-center w-auto">
              <img src="assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px]" alt="Bullet point" id="105:107" />
              <Link to="/course"
                className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">B.com</Link>
            </li>
            <li className="flex gap-[8px] sm:gap-[9px] lg:gap-[10px] justify-start items-center w-auto">
              <img src="assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px]" alt="Bullet point" id="105:132" />
              <Link to="/course"
                className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">M.com</Link>
            </li>
            <li className="flex gap-[8px] sm:gap-[9px] lg:gap-[10px] justify-start items-center w-auto">
              <img src="assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px]" alt="Bullet point" id="105:133" />
              <Link to="/course"
                className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">CMA</Link>
            </li>
            <li className="flex gap-[8px] sm:gap-[9px] lg:gap-[10px] justify-start items-start w-auto">
              <img src="assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px] mt-[6px]" alt="Bullet point"
                id="105:134" />
              <Link to="/course"
                className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">ACCA</Link>
            </li>
            <li className="flex gap-[8px] sm:gap-[9px] lg:gap-[10px] justify-start items-start w-auto">
              <img src="assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px] mt-[4px]" alt="Bullet point"
                id="105:135" />
              <Link to="/course"
                className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">CA</Link>
            </li>
          </ul>
        </div>

        {/* Allied Health Science Column */}
        <div className="flex flex-col justify-start items-start w-full lg:w-[34%]" id="105_4_575_2703_414_282">
          <h3
            className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold leading-[20px] sm:leading-[23px] lg:leading-[25px] text-white mb-4 lg:mb-6"
            id="105:99">Allied Health Science</h3>
          <ul className="flex flex-col justify-start items-start w-auto space-y-2" id="105_4_577_2735_380_252">
            <li className="flex gap-[8px] sm:gap-[9px] lg:gap-[10px] justify-start items-center w-auto">
              <img src="assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px]" alt="Bullet point" id="105:108" />
              <Link to="/course"
                className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">Medical
                Laboratory Technology (MLT)</Link>
            </li>
            <li className="flex gap-[8px] sm:gap-[9px] lg:gap-[10px] justify-start items-center w-auto">
              <img src="assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px]" alt="Bullet point" id="105:124" />
              <Link to="/course"
                className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">Radiology
                & Imaging Technology</Link>
            </li>
            <li className="flex gap-[8px] sm:gap-[9px] lg:gap-[10px] justify-start items-center w-auto">
              <img src="assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px]" alt="Bullet point" id="105:125" />
              <Link to="/course"
                className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">Operation
                Theatre & Anesthesia Technology</Link>
            </li>
            <li className="flex gap-[8px] sm:gap-[9px] lg:gap-[10px] justify-start items-center w-auto">
              <img src="assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px]" alt="Bullet point" id="105:126" />
              <Link to="/course"
                className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">Optometry</Link>
            </li>
            <li className="flex gap-[8px] sm:gap-[9px] lg:gap-[10px] justify-start items-start w-auto">
              <img src="assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px] mt-[6px]" alt="Bullet point"
                id="105:127" />
              <Link to="/course"
                className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">Cardiac
                Care Technology</Link>
            </li>
            <li className="flex gap-[8px] sm:gap-[9px] lg:gap-[10px] justify-start items-center w-auto">
              <img src="assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px]" alt="Bullet point" id="105:128" />
              <Link to="/course"
                className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">Dialysis
                Technology</Link>
            </li>
            <li className="flex gap-[8px] sm:gap-[9px] lg:gap-[10px] justify-start items-start w-auto">
              <img src="assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px] mt-[6px]" alt="Bullet point"
                id="105:129" />
              <Link to="/course"
                className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">Physician
                Assistant</Link>
            </li>
            <li className="flex gap-[8px] sm:gap-[9px] lg:gap-[10px] justify-start items-start w-auto">
              <img src="assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px] mt-[6px]" alt="Bullet point"
                id="105:130" />
              <Link to="/course"
                className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">Neuro
                Science Technology</Link>
            </li>
            <li className="flex gap-[8px] sm:gap-[9px] lg:gap-[10px] justify-start items-start w-auto">
              <img src="assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px] mt-[4px]" alt="Bullet point"
                id="105:131" />
              <Link to="/course"
                className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">Respiratory
                Therapy</Link>
            </li>
          </ul>
        </div>

        {/* Medical Coaching Column */}
        <div className="flex flex-col justify-start items-start w-full lg:w-[24%]" id="105_4_990_2705_290_256">
          <h3
            className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold leading-[20px] sm:leading-[23px] lg:leading-[26px] text-white mb-4 lg:mb-6"
            id="105:101">Medical Coaching<br />& Admission Guidence</h3>
          <ul className="flex flex-col justify-start items-start w-auto space-y-2" id="105_4_993_2765_78_196">
            <li className="flex gap-[8px] sm:gap-[9px] lg:gap-[10px] justify-start items-center w-auto">
              <img src="assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px]" alt="Bullet point" id="105:109" />
              <Link to="/course"
                className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">MBBS</Link>
            </li>
            <li className="flex gap-[8px] sm:gap-[9px] lg:gap-[10px] justify-start items-center w-auto">
              <img src="assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px]" alt="Bullet point" id="105:118" />
              <Link to="/course"
                className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">BDS</Link>
            </li>
            <li className="flex gap-[8px] sm:gap-[9px] lg:gap-[10px] justify-start items-center w-auto">
              <img src="assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px]" alt="Bullet point" id="105:119" />
              <Link to="/course"
                className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">BAMS</Link>
            </li>
            <li className="flex gap-[8px] sm:gap-[9px] lg:gap-[10px] justify-start items-start w-auto">
              <img src="assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px] mt-[6px]" alt="Bullet point"
                id="105:120" />
              <Link to="/course"
                className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">BHMS</Link>
            </li>
            <li className="flex gap-[8px] sm:gap-[9px] lg:gap-[10px] justify-start items-start w-auto">
              <img src="assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px] mt-[6px]" alt="Bullet point"
                id="105:121" />
              <Link to="/course"
                className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">BNYS</Link>
            </li>
            <li className="flex gap-[8px] sm:gap-[9px] lg:gap-[10px] justify-start items-start w-auto">
              <img src="assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px] mt-[6px]" alt="Bullet point"
                id="105:122" />
              <Link to="/course"
                className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">BPT</Link>
            </li>
            <li className="flex gap-[8px] sm:gap-[9px] lg:gap-[10px] justify-start items-start w-auto">
              <img src="assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px] mt-[4px]" alt="Bullet point"
                id="105:123" />
              <Link to="/course"
                className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">Nursing</Link>
            </li>
          </ul>
        </div>

        {/* Language Learning Column */}
        <div className="flex flex-col justify-start items-start w-full lg:w-auto" id="105_4_1280_2708_278_258">
          <h3
            className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold leading-[20px] sm:leading-[23px] lg:leading-[25px] text-white mb-4 lg:mb-6"
            id="105:103">Language Learning</h3>
          <ul className="flex flex-col justify-start items-start w-auto space-y-2" id="105_4_1281_2744_278_224">
            <li className="flex gap-[6px] sm:gap-[7px] lg:gap-[8px] justify-start items-center w-auto">
              <img src="assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px]" alt="Bullet point" id="105:110" />
              <Link to="/course"
                className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">IELTS
                Coaching</Link>
            </li>
            <li className="flex gap-[6px] sm:gap-[7px] lg:gap-[8px] justify-start items-center w-auto">
              <img src="assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px]" alt="Bullet point" id="105:111" />
              <Link to="/course"
                className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">TOEFL
                Training</Link>
            </li>
            <li className="flex gap-[6px] sm:gap-[7px] lg:gap-[8px] justify-start items-center w-auto">
              <img src="assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px]" alt="Bullet point" id="105:112" />
              <Link to="/course"
                className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">PTE
                Coaching</Link>
            </li>
            <li className="flex gap-[6px] sm:gap-[7px] lg:gap-[8px] justify-start items-center w-auto">
              <img src="assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px]" alt="Bullet point" id="105:113" />
              <Link to="/course"
                className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">Duolingo
                English Test Prep</Link>
            </li>
            <li className="flex gap-[6px] sm:gap-[7px] lg:gap-[8px] justify-start items-center w-auto">
              <img src="assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px]" alt="Bullet point" id="105:114" />
              <Link to="/course"
                className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">German
                Language (A1 to B2)</Link>
            </li>
            <li className="flex gap-[6px] sm:gap-[7px] lg:gap-[8px] justify-start items-start w-auto">
              <img src="assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px] mt-[6px]" alt="Bullet point"
                id="105:115" />
              <Link to="/course"
                className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">French
                Language (DELF / DALF)</Link>
            </li>
            <li className="flex gap-[6px] sm:gap-[7px] lg:gap-[8px] justify-start items-start w-auto">
              <img src="assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px] mt-[6px]" alt="Bullet point"
                id="105:116" />
              <Link to="/course"
                className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">Spanish
                Language</Link>
            </li>
            <li className="flex gap-[6px] sm:gap-[7px] lg:gap-[8px] justify-start items-start w-auto">
              <img src="assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px] mt-[6px]" alt="Bullet point"
                id="105:117" />
              <Link to="/course"
                className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">Spoken
                English Training</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-8 lg:gap-0"
        id="105_4_361_3129_1258_186">
        <div className="flex flex-col gap-[21px] sm:gap-[32px] lg:gap-[42px] justify-start items-start w-full lg:w-[56%]"
          id="105_4_361_3129_706_186">
          <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-6 lg:gap-0"
            id="105_4_362_3129_706_120">
            <div className="flex flex-col gap-[12px] sm:gap-[15px] lg:gap-[18px] justify-start items-start w-auto"
              id="105_4_362_3133_200_116">
              <img src="assets/images/img_vector_smart_object_66x158.png"
                className="w-[118px] sm:w-[138px] lg:w-[158px] h-[50px] sm:h-[58px] lg:h-[66px] ml-[8px] sm:ml-[12px] lg:ml-[16px]"
                alt="Vidya Academy Footer Logo" id="105:48" />
              <div className="flex gap-[8px] sm:gap-[9px] lg:gap-[10px] justify-start items-center w-auto"
                id="105_4_362_3218_200_32">
                <img src="assets/images/img_vector_smart_object_30x30.png"
                  className="w-[24px] sm:w-[27px] lg:w-[30px] h-[24px] sm:h-[27px] lg:h-[30px]" alt="Social media icon"
                  id="105:19" />
                <img src="assets/images/img_vector_smart_object_1.png"
                  className="w-[24px] sm:w-[27px] lg:w-[30px] h-[24px] sm:h-[27px] lg:h-[30px]" alt="Social media icon"
                  id="105:20" />
                <img src="assets/images/img_vector_smart_object_32x32.png"
                  className="w-[24px] sm:w-[28px] lg:w-[32px] h-[24px] sm:h-[28px] lg:h-[32px]" alt="Social media icon"
                  id="105:21" />
                <img src="assets/images/img_vector_smart_object_2.png"
                  className="w-[24px] sm:w-[27px] lg:w-[30px] h-[24px] sm:h-[27px] lg:h-[30px]" alt="Social media icon"
                  id="105:22" />
                <img src="assets/images/img_vector_smart_object_3.png"
                  className="w-[24px] sm:w-[28px] lg:w-[32px] h-[24px] sm:h-[28px] lg:h-[32px]" alt="Social media icon"
                  id="105:23" />
              </div>
            </div>
            <div className="flex flex-col justify-start items-start w-full lg:w-[42%]" id="105_4_770_3129_296_118">
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-normal leading-[17px] sm:leading-[19px] lg:leading-[21px] text-[#f37565]"
                id="105:40">Contact</p>
              <p className="text-[18px] sm:text-[21px] lg:text-[24px] font-bold leading-[25px] sm:leading-[29px] lg:leading-[33px] text-white mt-[2px] sm:mt-[3px] lg:mt-[4px]"
                id="105:17">
                <span>+91 9072514040</span><br />
                <span className="leading-[22px] sm:leading-[26px] lg:leading-[29px]">+91 9072524040</span>
              </p>
              <div className="flex gap-[9px] sm:gap-[11px] lg:gap-[12px] justify-start items-start w-auto mt-4 lg:mt-6"
                id="105_4_772_3222_296_24">
                <img src="assets/images/img_vector_smart_object_12x16.png"
                  className="w-[12px] sm:w-[14px] lg:w-[16px] h-[9px] sm:h-[11px] lg:h-[12px] mt-[3px] sm:mt-[4px] lg:mt-[5px]"
                  alt="Email icon" id="105:18" />
                <p className="text-[15px] sm:text-[17px] lg:text-[19px] font-normal leading-[19px] sm:leading-[22px] lg:leading-[24px] text-white"
                  id="105:16">hello@myvidyaacademy.com</p>
              </div>
            </div>
          </div>
          <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-normal leading-[16px] sm:leading-[18px] lg:leading-[20px] text-[#7cb9e7]"
            id="105:11">Copyright ©2025 Vidya Academy. All Rights Reserved</p>
        </div>
        <div className="flex flex-col gap-[2px] sm:gap-[3px] lg:gap-[4px] justify-start items-start w-full lg:w-[34%]"
          id="105_4_1183_3131_436_142">
          <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-normal leading-[17px] sm:leading-[19px] lg:leading-[21px] text-[#f37565]"
            id="105:41">Location</p>
          <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-white"
            id="105:15">1st Floor , Adattil Complex ,<br />OPP Aryavaidyasala OP Dept Changuvetty ,<br />SH 71 ,
            Kottakkal , Kerala 676501</p>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
