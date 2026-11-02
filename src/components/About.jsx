import { FiArrowRight } from 'react-icons/fi';
import about1 from '../assets/images/about-1.jpg';
import about2 from '../assets/images/about-2.jpg';

const stats = [
  { number: '22', sign: '+', label: 'Years of Experience' },
  { number: '2 K', sign: '+', label: 'Active Members' },
  { number: '97', sign: '%', label: 'Positive Reviews' },
];

export default function About() {
  return (
    <section id='about' className='bg-[#f5f0ed] px-6 py-16'>
      <div className='mx-auto max-w-6xl'>
        <p className='text-xs uppercase text-[#8b6450]'>About us</p>

        <div className='mt-3 flex flex-col gap-8 md:flex-row md:items-end md:justify-between'>
          <h2 className='max-w-md font-serif text-4xl leading-tight text-stone-900 md:text-5xl'>
            More Than A Studio. It's A Way Of Coming Home.
          </h2>

          <div className='flex gap-10 md:gap-14'>
            {stats.map((s) => (
              <div key={s.label}>
                <p className='font-serif text-3xl text-stone-900'>
                  {s.number} <span className='text-[#8b6450]'>{s.sign}</span>
                </p>
                <p className='mt-1 text-sm text-stone-600'>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* photos + text */}
        <div className='mt-10 grid gap-6 md:grid-cols-2'>
          <div>
            <div
              className='h-60 rounded-lg bg-stone-300 bg-cover bg-center'
              style={{ backgroundImage: `url(${about1})` }}
            ></div>
            <p className='mt-10 max-w-md text-sm leading-relaxed text-stone-600'>
              Our studio is a place to relax, recharge, and transform. We offer
              yoga and fitness programs designed to improve your strength,
              flexibility, and overall well-being through mindful daily healthy
              practices.
            </p>
            <button className='mt-8 flex items-center gap-2 rounded bg-[#8b6450] px-5 py-3 text-xs font-medium uppercase text-white'>
              More about us <FiArrowRight />
            </button>
          </div>

          <div
            className='min-h-[400px] rounded-lg bg-stone-300 bg-cover bg-center'
            style={{ backgroundImage: `url(${about2})` }}
          ></div>
        </div>
      </div>
    </section>
  );
}
