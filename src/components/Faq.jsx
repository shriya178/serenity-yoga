import { useState } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

function Faq() {
  const [open, setOpen] = useState(0);

  const faqs = [
    {
      q: 'What Types Of Yoga Classes Do You Offer?',
      a: 'We offer a variety of classes including Hatha Yoga, Vinyasa Flow, Yin Yoga, Meditation, and beginner-friendly sessions.',
    },
    {
      q: 'Do I Need Prior Yoga Experience To Join?',
      a: 'No, our classes are open to beginners as well as experienced practitioners.',
    },
    {
      q: 'What Should I Bring To My First Yoga Class?',
      a: 'Wear comfortable clothes and bring a water bottle. Mats can be rented for free.',
    },
    {
      q: 'How Long Is Each Yoga Session?',
      a: 'Most sessions are 60 minutes long.',
    },
    {
      q: 'How Often Should I Practice Yoga?',
      a: '2 to 3 times a week is a great way to start.',
    },
    {
      q: 'Are Private Yoga Sessions Available?',
      a: 'Yes, private sessions are included in the Premium Package.',
    },
  ];

  return (
    <section className='mx-auto grid max-w-5xl gap-10 px-6 pb-14 md:grid-cols-2'>
      <div className='space-y-2'>
        {faqs.map((item, i) => (
          <div key={i} className={open === i ? 'bg-white' : 'bg-light'}>
            <button
              onClick={() => setOpen(i)}
              className='flex w-full justify-between px-4 py-3 text-left text-sm'
            >
              {item.q}
              <span>{open === i ? '−' : '?'}</span>
            </button>
            {open === i && (
              <p className='px-4 pb-4 text-xs text-gray-600'>{item.a}</p>
            )}
          </div>
        ))}
      </div>

      <div>
        <p className='text-xs uppercase text-brown'>FAQs</p>
        <h2 className='mt-2 text-3xl'>
          Have Questions? <br /> We're Here To Help
        </h2>
        <p className='mt-3 max-w-xs text-xs text-gray-600'>
          Get quick answers about our services, instructors, booking process,
          and studio experience.
        </p>
        <button className='mt-5 bg-brown px-4 py-2 text-xs uppercase text-white'>
          Learn More <FaLongArrowAltRight />
        </button>
      </div>
    </section>
  );
}

export default Faq;
