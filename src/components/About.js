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
    <div>
      <div className='flex-1 bg-about bg-contain bg-no-repeat h-[500px]
      mix-blend-lighten bg-top'></div>
      <div>
        <h1>Nazywam się Łukasz Młynarczyk.</h1>
        <h3>Jestem absolwentem Edukacji Artystycznej w Zakresie Sztuki Muzycznej.</h3>
        <p>Na co dzień jestem instruktorem muzykoterapii i realizuję się gitarowo w kilku projektach muzycznych (m.in. Czarek Kuczyński i Brylanty i Bażanty).</p><br></br>
      <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
      <div>
          <div className='text-[40px] font-tertiary text-gradient
          mb-2'>
            { inView ?
              <CountUp start={0} end={20} duration={3}/> : null} 
          </div>
          <div className='font-primary text-sm tracking-[2px]'>
          Lat doświadczenia<br/>muzycznego
          </div>
        </div>
        <div>
          <div className='text-[40px] font-tertiary text-gradient
          mb-2'>
            { inView ?
              <CountUp start={0} end={15} duration={5}/> : null} 
          </div>
          <div className='font-primary text-sm tracking-[2px]'>
          Lat praktyki<br/>pedagogicznej
          </div>
        </div>
        <div>
          <div className='text-[40px] font-tertiary text-gradient
          mb-2'>
            { inView ?
              <CountUp start={0} end={200} duration={50}/> : null} 
          </div>
          <div className='font-primary text-sm tracking-[2px]'>
          Uczniów<br></br> / Absolwentów<br/>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
  </section>;
};

export default About;
