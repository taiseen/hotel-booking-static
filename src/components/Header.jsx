import { LogoWhite } from '../assets'; // SVG Logo
import { LogoDark } from '../assets'; // SVG Logo
import { useEffect, useState } from 'react';


const Header = () => {

  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () =>
      window.scrollY > 50
        ? setHeader(true)
        : setHeader(false)
    );
  });


  return (
    <header
      className={`fixed z-50 w-full transition-all duration-300 
      ${header ? 'bg-white py-6 shadow-lg' : 'bg-transparent py-8'}`}
    >

      <div className='container mx-auto'>
        <a href="/">
          {
            header
              ? <LogoDark className='w-[160px]' /> //<img className='w-[160px]' src={LogoDark} />
              : <LogoWhite className='w-[160px]' /> //<img className='w-[160px]' src={LogoWhite} />
          }
        </a>
      </div>

    </header>
  );
};

export default Header;
