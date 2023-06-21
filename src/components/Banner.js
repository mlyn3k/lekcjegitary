import React from 'react';
import Image from '../assets/avatar1.jpg';
import {FaYoutube, FaFacebook } from 'react-icons/fa';
import {TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import {Link} from 'react-scroll';

const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
  <div className='container mx-auto'>
    <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center
    lg:gap-x-2'>
      <div className='flex-1 text-center font-secondary lg:text-left'>
        <motion.h1 variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} 
        className='text-[55px] font-bold leading-[0.8] lg:text-[70px]'>LEKCJE GITARY <span>OLSZTYN</span></motion.h1>
        <motion.div variants={fadeIn('up', 0.4)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} 
        className='mb-6 text-[20px] lg:text-[40px]
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
        </motion.div>
        <motion.p 
        variants={fadeIn('up', 0.5)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} 
        className='mb-8 max-w-lg mx-auto lg:mx-0'>Indywidualne lekcje gry dla dzieci, młodzieży i dorosłych.<br></br>
        Pomoc w doborze odpowiedniego instrumentu.<br></br>
        Konsultacje muzyczno - sprzętowe.<br></br>
        Aranżacje oraz nagrania.</motion.p>
        <motion.div variants={fadeIn('up', 0.6)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} 
         className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
          <Link to='contact' activeClass='active'
      smooth={true}
      spy={true} 
    >
          <button className='btn btn-lg'>Kontakt</button></Link>
          <Link to='about' activeClass='active'
      smooth={true}
      spy={true} 
    ><a href='#' className='text-gradient btn-link'>O mnie</a>
        </Link>
        </motion.div>
        <motion.div variants={fadeIn('up', 0.7)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} 
        className='flex text-[30px] gap-x-6 max-w-max mx-auto
        lg:mx-0'>
        <a href='https://www.facebook.com/lekcjegitaryolsztyn/'>
<FaFacebook/>
        </a>
        <a href='https://www.youtube.com/shorts/p1FWtfjamVA'>
<FaYoutube/>
        </a>
        </motion.div>
      </div>
      <motion.div className='hidden lg:flex flex-1 max-w-[320px]
      lg:max-w-[482px]' variants={fadeIn('down', 0.5)} initial='hidden' whileInView={'show'}   >
        <img src={Image} alt='Image' style={{height:400, borderRadius:180}}/>
      </motion.div>
    </div>
  </div>
  </section>;
};

export default Banner;
