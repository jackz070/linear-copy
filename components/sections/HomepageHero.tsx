import { Button, Highlight } from 'components/Button';
import { Hero, HeroSubtitle, HeroTitle } from 'components/Hero';
import { HeroImage } from 'components/HeroImage';
import { ChevronIcon } from 'components/icons/chevron';

export const HomepageHero = () => {
  return (
    <Hero>
      <Button
        variant='secondary'
        size='small'
        href='#'
        className='animate-fade-in translate-y-[-1rem] opacity-0'
      >
        Introducing Linear Insights <Highlight>→</Highlight>
      </Button>
      <HeroTitle className='animate-fade-in translate-y-[-1rem] opacity-0 [--animation-delay:200ms]'>
        Linear is a better way
        <br className='hidden md:block' /> to build products
      </HeroTitle>
      <HeroSubtitle className='animate-fade-in translate-y-[-1rem] opacity-0 [--animation-delay:400ms]'>
        Meet the new standard for modern software development.
        <br className='hidden md:block' /> Streamline issues, sprints, and
        product roadmaps.
      </HeroSubtitle>
      <Button
        href='/'
        size='large'
        variant='primary'
        className='animate-fade-in translate-y-[-1rem] opacity-0 [--animation-delay:600ms]'
      >
        Get Started
        <Highlight>
          <ChevronIcon />
        </Highlight>
      </Button>
      <HeroImage />
    </Hero>
  );
};
