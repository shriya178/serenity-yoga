import why1 from '../assets/images/why1.jpg';
import why2 from '../assets/images/why2.jpg';

import { FiUser, FiSliders } from 'react-icons/fi';
import { PiLeaf } from 'react-icons/pi';

const points = [
  {
    icon: <FiUser size={20} />,
    title: 'Expert Instructors',
    text: 'Learn from experienced trainers who guide you with professional knowledge and care.',
  },
  {
    icon: <FiSliders size={20} />,
    title: 'Personalized Classes',
    text: 'Classes designed to support different goals, levels, and wellness journeys successfully.',
  },
  {
    icon: <PiLeaf size={22} />,
    title: 'Peaceful Environment',
    text: 'A relaxing space to refresh your body and mind through mindful movement every day.',
  },
];

export default function Why() {
  return (
    <section className='bg-[#f5f0ed] px-6 py-16'>
      <div className='mx-auto grid max-w-6xl gap-4 md:grid-cols-4'>
        {/* two photos */}
        <div
          className='h-96 rounded-lg bg-stone-300 bg-cover bg-center md:h-[480px]'
          style={{ backgroundImage: `url(${why1})` }}
        ></div>
        <div
          className='h-96 rounded-lg bg-stone-300 bg-cover bg-center md:h-[480px]'
          style={{ backgroundImage: `url(${why2})` }}
        ></div>

        {/* dark card */}
        <div className='rounded-lg bg-[#232920] p-8 text-white md:col-span-2 md:p-14'>
          <p className='text-xs uppercase'>Why choose us</p>
          <h2 className='mt-4 max-w-sm font-serif text-3xl md:text-4xl'>
            More Than Yoga, It's A Way Of Living Together
          </h2>
          <p className='mt-5 max-w-sm text-xs leading-relaxed text-white/70'>
            At Our Studio, we create experiences that inspire mindful living,
            helping you achieve balance through movement, breath, and
            self-awareness.
          </p>

          <div className='mt-8 space-y-5'>
            {points.map((p) => (
              <div key={p.title} className='flex gap-4'>
                <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded bg-white/10'>
                  {p.icon}
                </div>
                <div>
                  <h3 className='font-serif text-lg'>{p.title}</h3>
                  <p className='mt-1 max-w-xs text-xs leading-relaxed text-white/70'>
                    {p.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
