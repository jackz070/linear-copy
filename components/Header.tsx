'use client';

import classNames from 'classnames';
import { Button } from 'components/Button';
import { Container } from 'components/Container';
import { HamburgerIcon } from 'components/icons/hamburger';
import { Logo } from 'components/icons/logo';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const Header = () => {
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
  useEffect(() => {
    document
      .querySelector('html')
      ?.classList.toggle('overflow-hidden', hamburgerIsOpen);
  }, [hamburgerIsOpen]);

  useEffect(() => {
    const closeHamburger = () => setHamburgerIsOpen(false);
    if (hamburgerIsOpen) {
      window.addEventListener('orientationchange', closeHamburger);
      window.addEventListener('resize', closeHamburger);
    }

    return () => {
      window.removeEventListener('orientationchange', closeHamburger);
      window.removeEventListener('resize', closeHamburger);
    };
  }, [setHamburgerIsOpen, hamburgerIsOpen]);

  return (
    <header className=' fixed left-0 top-0 z-10 w-full  px-2 backdrop-blur-[12px]'>
      <Container className='h-navigation-height border-transparent-white flex border-b'>
        <Link href='/' className='text-md  flex items-center'>
          <Logo className='mr-2 block h-[1.8rem] w-[1.8rem]' /> Linear
        </Link>
        <div
          className={classNames(
            'transition-[visibility] md:visible',
            hamburgerIsOpen ? 'visible ' : 'invisible delay-500'
          )}
        >
          <nav
            className={classNames(
              hamburgerIsOpen
                ? 'translate-x-0 opacity-100'
                : 'translate-x-[-100vw] opacity-0',
              'bg-background top-navigation-height fixed left-0 h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto transition-opacity duration-500 md:visible  md:relative md:top-0 md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100'
            )}
          >
            <ul
              className={classNames(
                ' [&_li]:border-b-gray-dark flex h-full flex-col md:flex-row md:items-center [&_li]:border-b md:[&_li]:border-none',
                '[&_a]:h-navigation-height [&_a:hover]:text-gray [&_a]:transition-[color, transform] [&_a]:text-md ease-in [&_a]:flex [&_a]:w-full [&_a]:items-center [&_a]:duration-500 md:[&_a]:ml-6 [&_a]:md:translate-y-0 [&_a]:md:text-sm [&_a]:md:transition-none [&_li]:mx-auto [&_li]:w-[88%]',
                hamburgerIsOpen ? '' : '[&_a]:translate-y-8'
              )}
            >
              <li>
                <Link href='#'>Features</Link>
              </li>
              <li>
                <Link href='#'>Method</Link>
              </li>
              <li className='md:hidden lg:block'>
                <Link href='#'>Customers</Link>
              </li>
              <li className='md:hidden lg:block'>
                <Link href='#'>Changelog</Link>
              </li>
              <li className='md:hidden lg:block'>
                <Link href='#'>Integrations</Link>
              </li>
              <li>
                <Link href='#'>Pricing</Link>
              </li>
              <li>
                <Link href='#'>Company</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='ml-auto flex h-full items-center  '>
          <Link href='#' className='text-md mr-6'>
            Log in
          </Link>
          <Button href='#'>Sign Up</Button>
        </div>
        <button
          className='ml-6 md:hidden'
          onClick={() => setHamburgerIsOpen(!hamburgerIsOpen)}
        >
          <span className='sr-only'>Toggle menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  );
};
