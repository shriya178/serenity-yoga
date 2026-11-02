import brand1 from '../assets/images/brand-1.png';
import brand2 from '../assets/images/brand-2.png';
import brand3 from '../assets/images/brand-3.png';
import brand4 from '../assets/images/brand-4.png';
import brand5 from '../assets/images/brand-5.png';

const brands = [
  { name: 'AlphaWave', img: brand1 },
  { name: 'Kintsugi', img: brand2 },
  { name: '45 Degrees', img: brand3 },
  { name: 'Boltshift', img: brand4 },
  { name: 'Acme Corp', img: brand5 },
];

function Brands() {
  return (
    <section className='bg-[#f5f0ed] px-6 py-10'>
      <div className='mx-auto flex max-w-6xl flex-col items-center gap-6 md:flex-row md:justify-center'>
        <p className='max-w-[170px] text-sm text-stone-800'>
          We team up with trusted brands and experts
        </p>

        <div className='flex flex-wrap items-center justify-center gap-10'>
          {brands.map((b) => (
            <img
              key={b.name}
              src={b.img}
              alt={b.name}
              className='h-7 w-auto opacity-60 grayscale'
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;
