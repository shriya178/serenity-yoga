import class1 from '../assets/images/class-1.jpg';
import class2 from '../assets/images/class-2.jpg';
import class3 from '../assets/images/class-3.jpg';

import { FiHeart, FiUser, FiClock, FiArrowRight } from 'react-icons/fi';
import { PiLeaf, PiMoonStars, PiSparkleFill } from 'react-icons/pi';

const classes = [
  {
    icon: <FiHeart size={20} />,
    title: 'Vinyasa Flow',
    text: 'A smooth sequence of movements that builds strength and flexibility.',
    level: 'Beginner',
    time: '60 Minutes',
    img: class1,
  },
  {
    icon: <PiLeaf size={20} />,
    title: 'Hatha Yoga',
    text: 'A gentle practice focused on basic poses, breathing, and relaxation.',
    level: 'All Levels',
    time: '60 Minutes',
    img: class2,
  },
  {
    icon: <PiMoonStars size={20} />,
    title: 'Yin Yoga',
    text: 'Slow-paced stretches that improve flexibility and release tension.',
    level: 'Beginner',
    time: '60 Minutes',
    img: class3,
  },
];

export default function Classes() {
  return (
    <section
      id='classes'
      className='relative overflow-hidden bg-[#eee4df] px-6 py-20'
    >
      {/* decoration */}
      <PiSparkleFill className='absolute left-24 top-56 text-5xl text-white/70' />
      <PiSparkleFill className='absolute right-24 top-28 text-5xl text-white/70' />

      <div className='relative mx-auto max-w-5xl'>
        <div className='text-center'>
          <p className='text-xs uppercase text-[#8b6450]'>Our classes</p>
          <h2 className='mt-4 font-serif text-4xl text-stone-900 md:text-5xl'>
            Explore Mindful Classes To <br /> Strengthen Your Body
          </h2>
        </div>

        <div className='mt-12 grid gap-4 md:grid-cols-3'>
          {classes.map((c) => (
            <div
              key={c.title}
              className='relative h-[330px] overflow-hidden rounded-lg bg-stone-400 bg-cover bg-center'
              style={{ backgroundImage: `url(${c.img})` }}
            >
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10'></div>

              <div className='absolute left-2 top-2 flex h-9 w-9 items-center justify-center bg-white text-stone-700'>
                {c.icon}
              </div>

              <div className='absolute inset-x-5 bottom-5 text-white'>
                <h3 className='font-serif text-xl'>{c.title}</h3>
                <p className='mt-1 text-xs text-white/80'>{c.text}</p>
                <div className='mt-3 flex gap-5 text-xs font-medium'>
                  <span className='flex items-center gap-1.5'>
                    <FiUser /> {c.level}
                  </span>
                  <span className='flex items-center gap-1.5'>
                    <FiClock /> {c.time}
                  </span>
                </div>
                <button className='mt-4 flex items-center gap-2 rounded bg-white px-4 py-2.5 text-xs uppercase text-stone-900'>
                  View details <FiArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className='mx-auto mt-12 max-w-sm text-center text-sm text-stone-600'>
          Explore our complete range of yoga classes designed to improve your
          strength, flexibility, balance, and overall wellness.
        </p>
        <div className='mt-6 text-center'>
          <button className='inline-flex items-center gap-2 rounded bg-[#8b6450] px-6 py-3 text-xs font-medium uppercase text-white'>
            All classes <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
