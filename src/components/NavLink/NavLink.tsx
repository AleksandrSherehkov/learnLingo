import { FC } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Thema } from '@/utils/definitions';

interface NavLinkProps {
  toggleMenu?: () => void;
  status?: Thema;
  isLoggedIn?: boolean | null;
}

export const NavLink: FC<NavLinkProps> = ({ toggleMenu, status, isLoggedIn }) => {
  const pathname = usePathname();
  const activeClass = 'active';
  const inactiveClass = 'text-2xl font-medium md:text-base/5 md:font-normal relative group';
  const hoverEffectClass =
    'absolute inset-x-0 bottom-0 w-0 h-0.5 bg-transparent transition-all duration-300 group-hover:w-full';

  return (
    <nav
      className="flex flex-col gap-10 items-center
      md:flex-row "
    >
      <Link
        href="/"
        className={`link ${pathname === '/' ? activeClass : inactiveClass}`}
        onClick={toggleMenu}
      >
        Home
        <span
          className={clsx(hoverEffectClass, {
            'group-hover:bg-orange': status === 'themaA',
            'group-hover:bg-darkGreen': status === 'themaB',
            'group-hover:bg-darkBlue': status === 'themaC',
            'group-hover:bg-rose': status === 'themaD',
            'group-hover:bg-peach': status === 'themaF',
          })}
        ></span>
      </Link>
      <Link
        href="/teachers"
        className={`link ${pathname === '/teachers' ? activeClass : inactiveClass}`}
        onClick={toggleMenu}
      >
        Teachers
        <span
          className={clsx(hoverEffectClass, {
            'group-hover:bg-orange': status === 'themaA',
            'group-hover:bg-darkGreen': status === 'themaB',
            'group-hover:bg-darkBlue': status === 'themaC',
            'group-hover:bg-rose': status === 'themaD',
            'group-hover:bg-peach': status === 'themaF',
          })}
        ></span>
      </Link>
      {isLoggedIn && (
        <Link
          href="/favorites"
          className={`link ${pathname === '/favorites' ? activeClass : inactiveClass}`}
          onClick={toggleMenu}
        >
          Favorites
          <span
            className={clsx(hoverEffectClass, {
              'group-hover:bg-orange': status === 'themaA',
              'group-hover:bg-darkGreen': status === 'themaB',
              'group-hover:bg-darkBlue': status === 'themaC',
              'group-hover:bg-rose': status === 'themaD',
              'group-hover:bg-peach': status === 'themaF',
            })}
          ></span>
        </Link>
      )}
    </nav>
  );
};
