import { FiCheck, FiArrowRight } from 'react-icons/fi';
import { PiSparkleFill } from 'react-icons/pi';

const plans = [
  {
    name: 'Basic Package',
    desc: 'Perfect for starting your yoga journey with confidence and consistency.',
    price: '$89',
    note: 'Ideal for regular weekly practice.',
    features: [
      'Up to 8 classes per month',
      'Access to all regular yoga classes',
      'Beginner-friendly sessions',
      'Free mat rental',
      'Pause or cancel anytime',
    ],
  },
  {
    name: 'Ultimate Package',
    popular: true,
    desc: 'Unlimited access for dedicated practitioners seeking growth and balance.',
    price: '$129',
    note: 'Unlimited access to all yoga classes.',
    features: [
      'Unlimited yoga classes',
      'Priority class booking',
      'Access to workshops & special events',
      'Complimentary guest pass each month',
      'Exclusive member discounts',
    ],
  },
  {
    name: 'Premium Package',
    desc: 'Personalized yoga experience tailored to your goals and lifestyle.',
    price: '$169',
    note: 'Personalized yoga tailored to your goals.',
    features: [
      'Private one-on-one sessions',
      'Personalized yoga program',
      'Flexible scheduling',
      'Dedicated instructor support',
      'Nutrition & wellness consultation',
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id='pricing'
      className='relative overflow-hidden bg-[#eee4df] px-6 py-20'
    >
      <PiSparkleFill className='absolute left-24 top-32 text-5xl text-white/70' />
      <PiSparkleFill className='absolute right-24 top-48 text-5xl text-white/70' />

      <div className='relative mx-auto max-w-5xl'>
        <div className='text-center'>
          <p className='text-xs uppercase text-[#8b6450]'>Our pricing</p>
          <h2 className='mt-4 font-serif text-4xl text-stone-900 md:text-5xl'>
            Personalized Memberships <br /> That Fit Your Lifestyle
          </h2>
        </div>

        <div className='mt-12 grid gap-4 md:grid-cols-3'>
          {plans.map((p) => (
            <div key={p.name} className='relative rounded-lg bg-white'>
              {p.popular && (
                <span className='absolute right-0 top-1 rounded-l bg-[#232920] px-3 py-1.5 text-xs text-white'>
                  Popular
                </span>
              )}

              <div className='p-5'>
                <h3 className='font-serif text-xl text-stone-900'>{p.name}</h3>
                <p className='mt-2 text-xs leading-relaxed text-stone-600'>
                  {p.desc}
                </p>
                <p className='mt-6 font-serif text-4xl text-[#8b6450]'>
                  {p.price}{' '}
                  <span className='font-sans text-xs text-stone-600'>
                    /Package
                  </span>
                </p>
                <p className='mt-2 text-xs text-stone-600'>{p.note}</p>
              </div>

              <div className='border-t border-stone-200 p-5'>
                <p className='text-xs font-semibold text-stone-900'>
                  What's Included:
                </p>
                <ul className='mt-4 space-y-3'>
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className='flex items-center gap-2 text-xs text-stone-600'
                    >
                      <FiCheck className='text-[#8b6450]' /> {f}
                    </li>
                  ))}
                </ul>

                <button className='mt-7 flex w-full items-center justify-center gap-2 rounded bg-[#8b6450] py-3 text-xs font-medium uppercase text-white'>
                  Select package <FiArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
