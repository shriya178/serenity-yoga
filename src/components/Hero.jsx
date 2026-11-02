import hero from '../assets/images/hero.jpg';
import avatar1 from '../assets/images/avatar -1.jpg';
import avatar2 from '../assets/images/avatar-2.jpg';
import avatar3 from '../assets/images/avatar-3.jpg';
import { Link } from 'react-router-dom';

import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
function Hero() {
  return (
    <section
      className='relative flex min-h-screen items-start bg-stone-700 bg-cover bg-center text-white'
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className='absolute inset-0 bg-black/30'></div>

      <div className='relative px-6 pt-32 md:px-24'>
        <h2 className='text-5xl md:text-7xl font-serif leading-tight'>
          Restore Balance <br />
          Renew Your Spirit
        </h2>

        <div className='flex gap-4 mt-10'>
          <a
            href='#about'
            className='inline-flex items-center gap-2 bg-[#8b6450] px-6 py-3 text-sm uppercase transition hover:bg-[#232920]'
          >
            Unwind with us <FiArrowRight />
          </a>
          <a
            href='#classes'
            className='inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-sm uppercase transition hover:bg-gray-200'
          >
            Discover our classes <FiArrowRight />
          </a>
        </div>
      </div>

      {/* bottom bar */}
      <div className='absolute bottom-6 left-6 right-6 flex items-center justify-between'>
        <div className='flex items-center'>
          <img src={avatar1} className='w-11 h-11 rounded-full' />
          <img src={avatar2} className='w-11 h-11 rounded-full -ml-4' />
          <img src={avatar3} className='w-11 h-11 rounded-full -ml-4' />
          <p className='hidden sm:block ml-4'>
            <b>1,5K+</b> people supported on <br />
            their wellness journey
          </p>
        </div>

        <div className='flex gap-2'>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noreferrer'
            aria-label='Facebook'
            className='w-8 h-8 bg-white/30 flex items-center justify-center transition hover:bg-white hover:text-black'
          >
            <FaFacebookF />
          </a>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noreferrer'
            aria-label='Twitter'
            className='w-8 h-8 bg-white/30 flex items-center justify-center transition hover:bg-white hover:text-black'
          >
            <FaTwitter />
          </a>
          <a
            href='https://youtube.com'
            target='_blank'
            rel='noreferrer'
            aria-label='Youtube'
            className='w-8 h-8 bg-white/30 flex items-center justify-center transition hover:bg-white hover:text-black'
          >
            <FaYoutube />
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noreferrer'
            aria-label='Instagram'
            className='w-8 h-8 bg-white/30 flex items-center justify-center transition hover:bg-white hover:text-black'
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
}
export default Hero;
