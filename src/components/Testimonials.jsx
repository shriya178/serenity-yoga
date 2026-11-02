import { FaStar } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

const reviews = [
  {
    text: 'Joining this yoga studio has completely transformed my daily routine. The instructors are knowledgeable, the atmosphere is calming, and I feel healthier both physically and mentally.',
    name: 'Harriet Elysia',
    role: 'Yoga Enthusiast',
    img: 'https://i.pravatar.cc/80?img=45',
  },
  {
    text: "The classes are suitable for all skill levels, and everyone is incredibly welcoming. I've improved my flexibility, reduced stress, and made great friends along the way.",
    name: 'Balthazar Julian',
    role: 'Mindfulness Practitioner',
    img: 'https://i.pravatar.cc/80?img=15',
  },
];

function Stars({ className }) {
  return (
    <div className={`flex gap-1 ${className}`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <FaStar key={n} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className='bg-[#f5f0ed] px-6 py-16'>
      <div className='mx-auto max-w-4xl rounded-lg bg-[#232920] p-8 text-white md:p-10'>
        {/* top row */}
        <div className='flex flex-col gap-6 md:flex-row md:items-end md:justify-between'>
          <div>
            <p className='text-xs font-medium uppercase'>Testimonials</p>
            <h2 className='mt-3 font-serif text-4xl'>
              What Our Members Say <br /> After Joining
            </h2>
          </div>

          <div className='flex items-center gap-3'>
            <div className='flex items-center'>
              <img
                src='https://i.pravatar.cc/80?img=47'
                className='h-9 w-9 rounded-full border border-white'
              />
              <img
                src='https://i.pravatar.cc/80?img=12'
                className='-ml-3 h-9 w-9 rounded-full border border-white'
              />
              <img
                src='https://i.pravatar.cc/80?img=32'
                className='-ml-3 h-9 w-9 rounded-full border border-white'
              />
              <span className='-ml-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-black'>
                <FiArrowUpRight />
              </span>
            </div>
            <div>
              <Stars className='text-[10px] text-orange-400' />
              <p className='mt-1 text-xs text-white/70'>4.9/5 Rating</p>
            </div>
          </div>
        </div>

        {/* review cards */}
        <div className='mt-8 grid gap-4 md:grid-cols-2'>
          {reviews.map((r) => (
            <div key={r.name} className='rounded-lg bg-white/10 p-5'>
              <p className='text-sm leading-relaxed text-white/80'>
                "{r.text}"
              </p>
              <Stars className='mt-5 text-xs text-yellow-400' />
              <div className='mt-5 flex items-center gap-3'>
                <img src={r.img} className='h-10 w-10 rounded-full' />
                <div>
                  <p className='font-serif text-sm'>{r.name}</p>
                  <p className='text-xs text-white/60'>{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* dots */}
        <div className='mt-6 flex justify-center gap-1.5'>
          <span className='h-1.5 w-1.5 rounded-full bg-white'></span>
          <span className='h-1.5 w-1.5 rounded-full bg-white/50'></span>
        </div>
      </div>
    </section>
  );
}
