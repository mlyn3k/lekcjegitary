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
        <p>Posiadam wieloletnie doświadczenie sceniczne oraz pedagogiczne. </p>
        <p>Gitarową pasją z uczniami dzielę się od ponad 15 lat. </p>
        <p>Na co dzień jestem instruktorem muzykoterapii i realizuję się gitarowo w kilku projektach muzycznych (m.in. Czarek Kuczyński i Brylanty i Bażanty)</p>
      </div>
    </div>
  </div>
  </section>;
};

export default About;
