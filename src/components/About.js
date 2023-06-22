import React from 'react';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return <section className='section' id='about'
  ref={ref}>
  <div className='container mx-auto'>
    <div className='gap-y-10
     lg:flex lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
      <motion.div 
      variants={fadeIn('right', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.3}}
      className='flex-1 bg-about bg-contain bg-no-repeat h-[300px] lg:h-[680px]
      mix-blend-lighten bg-top'></motion.div>
      <motion.div 
      variants={fadeIn('left', 0.5)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.3}}
      className='flex-1'>
        <h1 className='h2 text-accent'>O mnie</h1>
        <h2 className='mb-3 font-semibold'>Nazywam się Łukasz Młynarczyk</h2>
        <p className='mb-1'>Jestem absolwentem Edukacji Artystycznej w Zakresie Sztuki Muzycznej.</p>
        <p>Na co dzień jestem instruktorem muzykoterapii i realizuję się gitarowo w kilku projektach muzycznych (m.in. Czarek Kuczyński i Brylanty i Bażanty).</p><br></br>
      <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
      <div>
          <div className='text-[30px] font-tertiary text-gradient
          mb-1'>
            { inView ?
              <CountUp start={0} end={20} duration={3}/> : null} 
          </div>
          <div className='font-primary text-sm tracking-[2px]'>
          Lat doświadczenia<br/>muzycznego
          </div>
        </div>
        <div>
          <div className='text-[30px] font-tertiary text-gradient
          mb-1'>
            { inView ?
              <CountUp start={0} end={300} duration={30}/> : null} 
          </div>
          <div className='font-primary text-sm tracking-[2px]'>
          Uczniów<br></br> / Absolwentów<br/>
          </div>
        </div>
      </div>
      </motion.div>
    </div>
  </div>
  </section>;
};

export default About;
