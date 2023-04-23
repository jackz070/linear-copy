import { Container } from 'components/Container';
import Link from 'next/link';

import { GithubIcon } from './icons/github';
import { Logo } from './icons/logo';
import { SlackIcon } from './icons/slack';
import { TwitterIcon } from './icons/twitter';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { title: 'Features', href: '#' },
      { title: 'Integrations', href: '#' },
      { title: 'Pricing', href: '#' },
      { title: 'Changelog', href: '#' },
      { title: 'Docs', href: '#' },
      { title: 'Linear Method', href: '#' },
      { title: 'Download', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About us', href: '#' },
      { title: 'Blog', href: '#' },
      { title: 'Careers', href: '#' },
      { title: 'Customers', href: '#' },
      { title: 'Brand', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { title: 'Community', href: '#' },
      { title: 'Contact', href: '#' },
      { title: 'DPA', href: '#' },
      { title: 'Terms of service', href: '#' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { title: 'API', href: '#' },
      { title: 'Status', href: '#' },
      { title: 'GitHub', href: '#' },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className='border-transparent-white mt-12 border-t py-[5.6rem] text-sm'>
      <Container className='flex flex-col justify-between md:flex-row'>
        <div>
          <div className='flex h-full flex-row justify-between lg:flex-col'>
            <div className='text-gray flex items-center'>
              <Logo className='mr-4 h-4 w-4' /> Linear - Designed worldwide
            </div>
            <div className='text-gray mt-auto flex cursor-pointer space-x-4 '>
              {' '}
              <TwitterIcon className='hover:text-off-white' />
              <GithubIcon className='hover:text-off-white' />
              <SlackIcon className='hover:text-off-white' />
            </div>
          </div>
        </div>
        <div className='flex flex-wrap'>
          {footerLinks.map((column) => (
            <div
              key={column.title}
              className='mt-10 min-w-[50%] lg:mt-0 lg:min-w-[18rem]'
            >
              <h3 className='mb-3 font-medium'>{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li
                    key={link.title}
                    className='text-gray hover:text-off-white mb-3 block cursor-pointer transition-colors last:mb-0'
                  >
                    <Link href={link.href} />
                    {link.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
};
