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
      <div className='flex-1 bg-about bg-contain bg-no-repeat h-[640px]
      mix-blend-lighten bg-top'></div>
      <div>
        <h2>O mnie...</h2>
        <h3>Jestem absolwentem Edukacji artystycznej w zakresie sztuki muzycznej.</h3>
        <p>Na co dzień jestem instruktorem muzykoterapii i realizuję się gitarowo w kilku projektach muzycznych (m.in. Czarek Kuczyński i Brylanty i Bażanty)</p>
      <div className='flex'>
        <div>
          <div className='text-[40px] font-tertiary text-gradient
          mb-2'>
            <CountUp start={0} end={15} duration={5}/> 
          </div>
          <div className='font-primary text-sm tracking-[2px]'>
          Lat doświadczenia<br/>w Edukacji.
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
  </section>;
};

export default About;
