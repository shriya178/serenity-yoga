import { FiMail } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../assets/images/logo.png';

const links = [
  { label: 'Home', to: '#home' },
  { label: 'About', to: '#about' },
  { label: 'Classes', to: '#classes' },
  { label: 'Schedule', to: '#schedule' },
  { label: 'Pricing', to: '#pricing' },
  { label: 'Blog', to: '#blog' },
  { label: 'Contact', to: '#contact' },
];
const socials = [FaFacebookF, FaTwitter, FaInstagram, FaYoutube];

function Footer() {
  return (
    <footer id='contact' className='bg-[#232920] px-6 py-16 text-white'>
      <div className='mx-auto max-w-5xl'>
        {/* newsletter */}
        <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
          <div className='max-w-md'>
            <h3 className='font-serif text-3xl'>Subscribe Our Newsletter</h3>
            <p className='mt-2 text-xs leading-relaxed text-white/70'>
              Subscribe to our newsletter for yoga tips, wellness inspiration,
              exclusive offers, and the latest studio updates.
            </p>
          </div>
          <div className='flex gap-2'>
            <input
              placeholder='Your Email Address'
              className='w-full rounded bg-white/10 px-4 py-3 text-xs text-white placeholder-white/60 md:w-72'
            />
            <button className='flex items-center gap-2 rounded bg-white px-5 py-3 text-xs uppercase text-black'>
              Subscribe <FiMail />
            </button>
          </div>
        </div>

        <hr className='my-10 border-white/10' />

        {/* columns */}
        <div className='grid gap-10 md:grid-cols-3'>
          <div>
            <img src={logo} alt='Flowra Logo' className='h-10 w-auto' />
            <p className='mt-5 max-w-[220px] text-xs leading-relaxed text-white/70'>
              Experience the harmony of mind, body, and spirit in a space
              designed for growth, balance, and well-being.
            </p>
            <p className='mt-6 font-serif'>Follow Us:</p>
            <div className='mt-3 flex gap-2'>
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href='#'
                  className='flex h-7 w-7 items-center justify-center rounded bg-white/10'
                >
                  <Icon size={12} />
                </a>
              ))}
            </div>
          </div>

          <div className='md:mx-auto'>
            <h4 className='font-serif text-lg'>Quick Links</h4>
            <ul className='mt-4 space-y-2.5 text-xs text-white/70'>
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.to} className='transition hover:text-white'>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='space-y-5 md:ml-auto'>
            <div>
              <h4 className='font-serif text-lg'>
                <a
                  href='mailto:Flowra@support.com'
                  className='hover:text-white'
                >
                  Flowra@support.com
                </a>
              </h4>
            </div>
            <div>
              <h4 className='font-serif text-lg'>Our Phone:</h4>
              <a href='tel:+15559876543' className='hover:text-white'>
                (555) 987-6543
              </a>
            </div>
            <div>
              <h4 className='font-serif text-lg'>Our Location:</h4>
              <p className='mt-1 max-w-[180px] text-xs text-white/70'>
                Jalan By Pass Ngurah Rai – Denpasar, Bali.
              </p>
            </div>
          </div>
        </div>

        <hr className='my-10 border-white/10' />

        <div className='flex flex-col justify-between gap-3 text-xs text-white/70 md:flex-row'>
          <p>© Flowra. All Right Reserved 2026.</p>
          <div className='flex gap-6'>
            <span>Privacy Policy</span>
            <span>Terms & Services</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
