import { useState } from 'react';
import { FiUser, FiArrowRight } from 'react-icons/fi';

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const classes = [
  {
    title: 'Vinyasa Flow',
    teacher: 'James Thompson',
    level: 'Beginner',
    time: '07.00 AM - 08.00 AM',
  },
  {
    title: 'Hatha Yoga',
    teacher: 'Henry Wilson',
    level: 'All Levels',
    time: '09. 00 AM - 10.00 AM',
  },
  {
    title: 'Yin Yoga',
    teacher: 'Charlotte Bexley',
    level: 'Beginner',
    time: '11.00 AM - 12.00 PM',
  },
  {
    title: 'Power Yoga',
    teacher: 'Oliver Smith',
    level: 'All Levels',
    time: '02.00 PM - 03.00 PM',
  },
  {
    title: 'Restorative Yoga',
    teacher: 'Evelyn Thorne',
    level: 'Beginner',
    time: '04.00 PM - 05.00 PM',
  },
  {
    title: 'Hot Yoga',
    teacher: 'Clara Hargrove',
    level: 'Beginner',
    time: '06.00 PM - 07.00 PM',
  },
];

export default function Schedule() {
  const [active, setActive] = useState(0); // which day is selected

  return (
    <section id='schedule' className='bg-[#f5f0ed] px-6 py-16'>
      <div className='mx-auto max-w-5xl'>
        <div className='text-center'>
          <p className='text-xs uppercase text-[#8b6450]'>Class schedule</p>
          <h2 className='mt-4 font-serif text-4xl text-stone-900 md:text-5xl'>
            Weekly Yoga Schedule For <br /> Mind, Body & Soul
          </h2>
        </div>

        {/* day tabs */}
        <div className='mt-10 grid grid-cols-3 gap-2 md:grid-cols-7'>
          {days.map((d, i) => (
            <button
              key={d}
              onClick={() => setActive(i)}
              className={`rounded py-3 text-[11px] font-medium uppercase ${
                i === active
                  ? 'bg-[#232920] text-white'
                  : 'bg-white text-stone-800'
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* class cards */}
        <div className='mt-8 grid gap-4 md:grid-cols-3'>
          {classes.map((c, i) => (
            <div
              key={c.title}
              className={`rounded-lg p-5 hover:bg-white ${i === 1 ? 'bg-white' : 'bg-[#eee4df]'}`}
            >
              <h3 className='font-serif text-xl text-stone-900'>{c.title}</h3>
              <p className='mt-1 text-xs text-stone-600'>
                Instructors: {c.teacher}
              </p>

              <div className='mt-4 border-t border-dashed border-stone-300 pt-4'>
                <p className='flex items-center gap-2 text-xs text-[#8b6450]'>
                  <FiUser /> {c.level}
                </p>
                <p className='mt-2 text-xs font-medium text-stone-900'>
                  {c.time}
                </p>
              </div>

              <button className='mt-5 flex w-full items-center justify-center gap-2 rounded bg-[#8b6450] py-3 text-xs font-medium uppercase text-white'>
                Join classes <FiArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
