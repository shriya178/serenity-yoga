import logo from '../assets/images/logo.png';
import { PiFlowerLotus } from 'react-icons/pi';
import { FiChevronDown } from 'react-icons/fi';

function Dropdown({ label, items }) {
  return (
    <li className='group relative'>
      <button className='flex items-center gap-1 uppercase'>
        {label} <FiChevronDown size={18} />
      </button>

      <div className='absolute left-0 top-full hidden pt-4 group-hover:block'>
        <ul className='w-48 bg-white text-black shadow-lg'>
          {items.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className='block px-5 py-3 text-sm normal-case hover:bg-stone-100'
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
function Header() {
  return (
    <nav className='absolute top-0 left-0 z-10 flex w-full items-center justify-between px-6 py-6 text-white'>
      {/* Left: logo */}
      <img src={logo} alt='Flowra Logo' className='h-10 w-auto' />

      {/* Right: links + button */}
      <div className='flex items-center gap-10'>
        <ul className='hidden md:flex items-center gap-9 text-sm font-medium uppercase'>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About us</a>
          </li>
          <Dropdown
            label='Classes'
            items={[
              { name: 'Hatha Yoga', link: '#classes' },
              { name: 'Vinyasa Flow', link: '#classes' },
              { name: 'Meditation', link: '#classes' },
            ]}
          />

          <Dropdown
            label='Pages'
            items={[
              { name: 'Pricing', link: '#pricing' },
              { name: 'Schedule', link: '#schedule' },
              { name: 'FAQ', link: '#faq' },
            ]}
          />

          <Dropdown
            label='Blog'
            items={[
              { name: 'Latest posts', link: '#blog' },
              { name: 'Wellness tips', link: '#blog' },
            ]}
          />
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>

        <a
          href='#contact'
          className='bg-white text-black px-6 py-3 text-sm font-medium uppercase'
        >
          Contact us →
        </a>
      </div>
    </nav>
  );
}
export default Header;
