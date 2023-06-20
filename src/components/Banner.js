import React from 'react';
import Image from '../assets/avatar1.jpg';
import {FaYoutube, FaFacebook } from 'react-icons/fa';
import {TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
  <div className='container mx-auto'>
    <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center
    lg:gap-x-2'>
      <div className='flex-1 text-center font-secondary lg:text-left'>
        <h1 className='text-[55px] font-bold leading-[0.8] lg:text-[70px]'>LEKCJE GITARY <span>OLSZTYN</span></h1>
        <div className='mb-6 text-[20px] lg:text-[40px]
        font-secondary font-semibold uppercase leading-[1]'>
          <span className='text-white mr-4'>Nauka gry na:</span>
          <TypeAnimation sequence={[
            'Gitarze elektrycznej',
            1000,
            'Gitarze akustycznej',
            1000,
            'Gitarze klasycznej',
            1000,
            'Ukulele',
            1000,
            'Gitarze basowej',
            1000,
          ]}
          speed={50} 
            className='text-accent'
            wrapper='span'
            repeat={Infinity}
          />
        </div>
        <p className='mb-8 max-w-lg mx-auto lg:mx-0'>Indywidualne lekcje gry dla dzieci, młodzieży i dorosłych.<br></br>
        Pomoc w doborze odpowiedniego instrumentu.<br></br>
        Konsultacje muzyczno - sprzętowe.<br></br>
        Aranżacje oraz nagrania.</p>
        <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
          <button className='btn btn-lg'>Kontakt</button>
          <a href='#' className='text-gradient btn-link'>O mnie</a>
        </div>
        <div className='flex text-[30px] gap-x-6 max-w-max mx-auto
        lg:mx-0'>
        <a href='https://www.facebook.com/lekcjegitaryolsztyn/'>
<FaFacebook/>
        </a>
        <a href='https://www.youtube.com/shorts/p1FWtfjamVA'>
<FaYoutube/>
        </a>
        </div>
      </div>
      <div>
        <img src={Image} alt='Image' style={{height:400, borderRadius:180}}/>
      </div>
    </div>
  </div>
  </section>;
};

export default Banner;
