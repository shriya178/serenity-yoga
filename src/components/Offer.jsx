import { GiMeditation } from 'react-icons/gi';
import { PiLeaf, PiFlowerLotus } from 'react-icons/pi';
import { FiArrowRight } from 'react-icons/fi';

const offers = [
  {
    icon: <GiMeditation size={24} />,
    title: 'Professional Yoga',
    text: 'Enhance flexibility, improve strength, and cultivate inner peace through yoga practice.',
  },
  {
    icon: <PiLeaf size={24} />,
    title: 'Nutrition Strategies',
    text: 'Personalized nutrition guidance to support a balanced, healthy, and mindful lifestyle.',
  },
  {
    icon: <PiFlowerLotus size={24} />,
    title: 'Yoga Classes',
    text: 'Explore diverse yoga classes designed for beginners and experienced alike.',
  },
];

export default function Offer() {
  return (
    <section className='bg-[#f5f0ed] px-6 pb-20 pt-16 md:px-24'>
      {/* heading */}
      <div className='text-center'>
        <p className='text-xs uppercase text-[#8b6450]'>What we offer</p>
        <h2 className='mt-4 font-serif text-4xl text-stone-900 md:text-5xl'>
          Discover Wellness Through <br /> Every Practice
        </h2>
      </div>

      {/* cards */}
      <div className='mt-14 grid gap-6 md:grid-cols-3'>
        {offers.map((item) => (
          <div
            key={item.title}
            className='flex min-h-[270px] flex-col rounded-lg bg-[#eee4df] p-1.5'
          >
            {/* white icon box */}
            <div className='flex h-10 w-10 items-center justify-center rounded bg-white text-[#8b6450]'>
              {item.icon}
            </div>

            <div className='mt-auto px-4 pb-4'>
              <h3 className='font-serif text-xl text-stone-900'>
                {item.title}
              </h3>
              <p className='mt-2 text-sm leading-relaxed text-stone-600'>
                {item.text}
              </p>

              <button className='mt-5 flex items-center gap-2 rounded bg-[#8b6450] px-4 py-2.5 text-xs font-medium uppercase text-white'>
                Learn more <FiArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
