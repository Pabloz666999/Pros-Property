import { HiX } from 'react-icons/hi';
import Link from 'next/link';

export default function SideMenu({ sideMenuOpen, setSideMenuOpen }) {
  const handleCloseMenu = () => {
    setSideMenuOpen(false);
  };

  return (
    <>
      <div
        className={`bg-white fixed top-0 w-[260px] h-full z-30 p-6 pt-12 ${
          sideMenuOpen ? 'right-0' : 'right-[-100%]'
        } transition-all duration-300`}
      >
        <button onClick={handleCloseMenu} className='absolute top-3 right-3'>
          <HiX />
        </button>
        <ul className='space-y-6'>
          <li><Link href="/">Homepage</Link></li>
          <li><Link href="/listings">Listings</Link></li>
          <li><a href="#">Agents</a></li>
          <li><a href="#">My Favorites</a></li>
        </ul>
      </div>
      {sideMenuOpen && (
        <div
          className='bg-black/50 fixed w-full h-full inset-0 z-20'
          onClick={handleCloseMenu}
        ></div>
      )}
    </>
  );
}
