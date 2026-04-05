import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="w-full bg-[#0e5284] px-[16px] sm:px-[24px] lg:px-[32px] py-[16px] sm:py-[24px] lg:py-[32px]">
      <div className="flex flex-col gap-[37px] sm:gap-[56px] lg:gap-[74px] justify-start items-center w-full max-w-[1258px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-8 lg:gap-0">
          <div className="flex flex-col justify-start items-start w-full lg:w-[18%]">
            <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold leading-[20px] sm:leading-[23px] lg:leading-[25px] text-white mb-4 lg:mb-6">Management</h3>
            <ul className="flex flex-col justify-start items-start w-auto space-y-2">
              <li className="flex gap-[6px] sm:gap-[7px] lg:gap-[8px] justify-start items-center w-auto">
                <img src="/assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px]" alt="Bullet point" />
                <Link to="/course" className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">BBA</Link>
              </li>
              <li className="flex gap-[6px] sm:gap-[7px] lg:gap-[8px] justify-start items-center w-auto">
                <img src="/assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px]" alt="Bullet point" />
                <Link to="/course" className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">BCA</Link>
              </li>
              <li className="flex gap-[6px] sm:gap-[7px] lg:gap-[8px] justify-start items-start w-auto">
                <img src="/assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px] mt-[6px]" alt="Bullet point" />
                <Link to="/course" className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">BA</Link>
              </li>
              <li className="flex gap-[6px] sm:gap-[7px] lg:gap-[8px] justify-start items-start w-auto">
                <img src="/assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px] mt-[6px]" alt="Bullet point" />
                <Link to="/course" className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">MBA</Link>
              </li>
              <li className="flex gap-[6px] sm:gap-[7px] lg:gap-[8px] justify-start items-start w-auto">
                <img src="/assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px] mt-[6px]" alt="Bullet point" />
                <Link to="/course" className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">MCA</Link>
              </li>
            </ul>
            
            <h4 className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold leading-[20px] sm:leading-[23px] lg:leading-[25px] text-white mt-6 mb-4">Commerce</h4>
            <ul className="flex flex-col justify-start items-start w-auto space-y-2">
               <li className="flex gap-[8px] sm:gap-[9px] lg:gap-[10px] justify-start items-center w-auto">
                <img src="/assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px]" alt="Bullet point" />
                <Link to="/course" className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">B.com</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-start items-start w-full lg:w-[34%]">
            <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold leading-[20px] sm:leading-[23px] lg:leading-[25px] text-white mb-4 lg:mb-6">Allied Health Science</h3>
            <ul className="flex flex-col justify-start items-start w-auto space-y-2">
              <li className="flex gap-[8px] sm:gap-[9px] lg:gap-[10px] justify-start items-center w-auto">
                <img src="/assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px]" alt="Bullet point" />
                <Link to="/course" className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">Medical Laboratory Technology (MLT)</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-start items-start w-full lg:w-[24%]">
            <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold leading-[20px] sm:leading-[23px] lg:leading-[26px] text-white mb-4 lg:mb-6">Medical Coaching<br/>& Admission Guidence</h3>
            <ul className="flex flex-col justify-start items-start w-auto space-y-2">
              <li className="flex gap-[8px] sm:gap-[9px] lg:gap-[10px] justify-start items-center w-auto">
                <img src="/assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px]" alt="Bullet point" />
                <Link to="/course" className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">MBBS</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-start items-start w-full lg:w-auto">
            <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold leading-[20px] sm:leading-[23px] lg:leading-[25px] text-white mb-4 lg:mb-6">Language Learning</h3>
            <ul className="flex flex-col justify-start items-start w-auto space-y-2">
              <li className="flex gap-[6px] sm:gap-[7px] lg:gap-[8px] justify-start items-center w-auto">
                <img src="/assets/images/img_ellipse_4.svg" className="w-[5px] h-[5px]" alt="Bullet point" />
                <Link to="/course" className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-[#b3daf7] hover:text-white transition-colors">IELTS Coaching</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-8 lg:gap-0">
          <div className="flex flex-col gap-[21px] sm:gap-[32px] lg:gap-[42px] justify-start items-start w-full lg:w-[56%]">
            <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-6 lg:gap-0">
              <div className="flex gap-[8px] sm:gap-[9px] lg:gap-[10px] justify-start items-center w-auto">
                 <img src="/assets/images/img_vector_smart_object_66x158.png" className="w-[118px] sm:w-[138px] lg:w-[158px] h-[50px] sm:h-[58px] lg:h-[66px] ml-[8px] sm:ml-[12px] lg:ml-[16px]" alt="Vidya Academy Footer Logo" />
              </div>
              <div className="flex flex-col justify-start items-start w-full lg:w-[42%]">
                <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-normal leading-[17px] sm:leading-[19px] lg:leading-[21px] text-[#f37565]">Contact</p>
                <p className="text-[18px] sm:text-[21px] lg:text-[24px] font-bold leading-[25px] sm:leading-[29px] lg:leading-[33px] text-white mt-[2px] sm:mt-[3px] lg:mt-[4px]">
                  <span>+91 9072514040</span><br/>
                  <span className="leading-[22px] sm:leading-[26px] lg:leading-[29px]">+91 9072524040</span>
                </p>
                <div className="flex gap-[9px] sm:gap-[11px] lg:gap-[12px] justify-start items-start w-auto mt-4 lg:mt-6">
                  <p className="text-[15px] sm:text-[17px] lg:text-[19px] font-normal leading-[19px] sm:leading-[22px] lg:leading-[24px] text-white">hello@myvidyaacademy.com</p>
                </div>
              </div>
            </div>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-normal leading-[16px] sm:leading-[18px] lg:leading-[20px] text-[#7cb9e7]">Copyright ©2025 Vidya Academy. All Rights Reserved</p>
          </div>
          <div className="flex flex-col gap-[2px] sm:gap-[3px] lg:gap-[4px] justify-start items-start w-full lg:w-[34%]">
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-normal leading-[17px] sm:leading-[19px] lg:leading-[21px] text-[#f37565]">Location</p>
            <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[22px] sm:leading-[25px] lg:leading-[28px] text-white">1st Floor , Adattil Complex ,<br/>OPP Aryavaidyasala OP Dept Changuvetty ,<br/>SH 71 , Kottakkal , Kerala 676501</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
