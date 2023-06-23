import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import {FaYoutube, FaFacebook } from 'react-icons/fa';

const services = [
  {
    name: 'Nauka gry dla dzieci, młodzieży i dorosłych',
    description:
    'Lekcje skierowane są zarówno do stawiających pierwsze kroki w świecie muzyki, jak również dla osób zaawansowanych chcących doskonalić swoją technikę, improwizację czy teorię muzyki.',

  },
  {
    name: 'Indywidualne podejście do ucznia',
    description:
    'Program edukacyjny jest układany do każdego ucznia.',

  },
  {
    name: 'Pomoc w doborze odpowiedniego instrumentu',
    description:
    'Oferuję pomoc w wyborze i zakupie odpowiedniego instrumentu.',

  },
  {
    name: 'Konsultacje muzyczno - sprzętowe',
    description:
    'Jeśli potrzebujesz porozmawiać czy ograć dany sprzęt - zapraszam.',

  },
  {
    name: 'Aranżacje oraz nagrania',
    description:
    'Oferuję tworzenie aranżacji oraz realizację profesjonalnych nagrań.',
  }
]

const Services = () => {
  return (
<section className='section' id='services'>
  <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row'>
      <div className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
        <h2 className='h2 text-accent mb-6'>Lekcje Gitary Olsztyn</h2>
        <h3 className='h4 max-w-[455px] mb-16'>
          Ponad 15 - letnie doświadczenie w edukacji to wypracowane metody w skutecznej nauce gry na instrumencie.<br></br><br></br>
          Zajęcia odbywają się w specjalnie zaadaptowanym muzycznie pomieszczeniu.<br></br>
          Podczas lekcji wykorzystywane są nowoczesne programy, materiały oraz profesjonalny sprzęt.
        </h3>
        <motion.div variants={fadeIn('up', 0.7)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} 
        className='flex text-[20px] gap-x-6 max-w-max mx-auto
        lg:mx-0'>
        <a href='https://www.facebook.com/lekcjegitaryolsztyn/'>
<FaFacebook/>
        </a>
        <a href='https://www.youtube.com/shorts/p1FWtfjamVA'>
<FaYoutube/>
        </a>
        </motion.div>
      </div>
      <div className='flex-1'>
        <div>
        {services.map((service, index) => {
          const {name, description} = service;
          return <div className='border-b border-white/20 flex'  key={index}>
            <div className='max-w-[476px]'>
              <h4 className='text-[20px] tracking-wider 
              font-bold mb-6'>{name}</h4>
              <p className='font-secondary leading-tight mb-2'>{description}</p>
            </div>
            <div></div>
          </div>
        })}
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Services;
