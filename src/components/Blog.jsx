import blog1 from '../assets/images/blog1.jpg';
import blog2 from '../assets/images/blog2.jpg';
import blog3 from '../assets/images/blog3.jpg';
import blog4 from '../assets/images/blog4.jpg';

import { FiArrowRight } from 'react-icons/fi';

const posts = [
  {
    tag: 'Yoga',
    title: 'Morning Yoga Routine For Busy Professionals',
    date: 'August 7, 2026',
    img: blog1,
  },
  {
    tag: 'Benefits',
    title: 'Yoga For Seniors: Benefits And Safe Practices',
    date: 'August 7, 2026',
    img: blog2,
  },
  {
    tag: 'Health',
    title: 'The Benefits Of Yoga For Health And Well-being',
    date: 'August 7, 2026',
    img: blog3,
  },
];

export default function Blog() {
  return (
    <section id='blog' className='bg-[#f5f0ed] px-6 py-16'>
      <div className='mx-auto max-w-5xl'>
        <div className='text-center'>
          <p className='text-xs uppercase text-[#8b6450]'>Our blog</p>

          <h2 className='mt-4 font-serif text-4xl text-stone-900 md:text-5xl'>
            Stories, Tips & Yoga <br /> Inspiration
          </h2>
        </div>

        <div className='mt-10 grid gap-6 md:grid-cols-2'>
          {/* Left: Small Posts */}
          <div className='space-y-5'>
            {posts.map((p) => (
              <div key={p.title} className='flex gap-4'>
                <div
                  className='h-40 w-52 shrink-0 rounded-lg bg-stone-300 bg-cover bg-center'
                  style={{ backgroundImage: `url(${p.img})` }}
                ></div>

                <div>
                  <p className='text-xs text-[#8b6450]'>{p.tag}</p>

                  <h3 className='mt-2 font-serif text-base leading-snug text-stone-900'>
                    {p.title}
                  </h3>

                  <p className='mt-2 text-xs text-stone-600'>
                    by <span className='text-[#8b6450]'>rizal</span> • {p.date}
                  </p>

                  <button className='mt-4 flex items-center gap-2 rounded bg-[#8b6450] px-4 py-2.5 text-xs uppercase text-white'>
                    Read more <FiArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Big Post */}
          <div
            className='relative min-h-[380px] overflow-hidden rounded-lg bg-stone-400 bg-cover bg-center'
            style={{ backgroundImage: `url(${blog4})` }}
          >
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent'></div>

            <div className='absolute inset-x-5 bottom-5 text-white'>
              <p className='text-xs'>Practice</p>

              <h3 className='mt-2 font-serif text-2xl'>
                Building A Consistent Yoga Practice At Home
              </h3>

              <p className='mt-2 text-xs'>
                by <b>rizal</b> • August 3, 2026
              </p>

              <p className='mt-3 text-xs text-white/80'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut...
              </p>

              <button className='mt-4 flex items-center gap-2 rounded bg-white px-4 py-2.5 text-xs uppercase text-stone-900'>
                Read more <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
