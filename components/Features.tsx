'use client';
import classNames from 'classnames';
import { Container } from 'components/Container';
import { useInView } from 'react-intersection-observer';

type FeaturesProps = {
  children: React.ReactNode;
  color: string;
  colorDark: string;
};

export const Features = ({ children, color, colorDark }: FeaturesProps) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <section
      ref={ref}
      className={classNames(
        'relative flex flex-col items-center overflow-x-hidden py-[6rem] before:pointer-events-none before:absolute before:h-[20rem] before:w-full  before:bg-[conic-gradient(from_90deg_at_80%_50%,#000212,rgb(var(--feature-color-dark))),_conic-gradient(from_270deg_at_20%_50%,rgb(var(--feature-color-dark)),#000212)] before:bg-no-repeat before:transition-[transform,opacity] before:duration-700 before:ease-in before:[mask:_radial-gradient(100%_50%_at_center_center,_black,_transparent)] before:[background-position:1%_0%,99%_0%] before:[background-size:50%_100%,50%_100%] after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_50%_50%_at_center,rgba(var(--feature-color),0.1),transparent)]',
        inView &&
          'is-visible before:opacity-100 before:[transform:rotate(180deg)_scale(2)]',
        !inView && 'before:rotate-180 before:opacity-40'
      )}
      style={
        {
          '--feature-color': color,
          '--feature-color-dark': colorDark,
        } as React.CSSProperties
      }
    >
      <div className='mb-[15rem] w-full first:my-[15rem]'>{children}</div>
    </section>
  );
};

type MainFeatureProps = {
  image: string;
  text: string;
  title: React.ReactNode;
  imageSize?: 'small' | 'large';
};

const MainFeature = ({
  image,
  text,
  title,
  imageSize = 'small',
}: MainFeatureProps) => {
  return (
    <>
      <div className='relative before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_50%_50%_at_center,rgba(var(--feature-color),0.1),transparent)]'>
        <Container
          className={classNames(
            'max-w-[90%] text-center',
            imageSize === 'small' ? 'w-[78rem]' : 'w-[102.4rem]'
          )}
        >
          <h2
            className='text-gradient mb-11 translate-y-[40%] text-center text-6xl [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s]
            md:text-8xl [.is-visible_&]:translate-y-0'
          >
            {title}
          </h2>
          <div className='relative rounded-[14px] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0)_120%)] before:p-[1px] before:[mask-composite:xor] before:[mask:linear-gradient(black,_black)_content-box_content-box,_linear-gradient(black,_black)] after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-[rgba(255,255,255,0.15)] after:[mask:linear-gradient(black,transparent)]'>
            <img src={image} className='h-auto w-full' />
          </div>
        </Container>
      </div>
      <Container className='w-[78rem] max-w-[90%] text-center'>
        <p className='md:w-70% max-auto my-16 w-full text-2xl leading-tight text-white md:text-4xl'>
          {text}
        </p>
        <hr className='mb-[7.2rem] h-[1px] border-none bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1)_50%,transparent)]' />
      </Container>
    </>
  );
};

type FeatureGridProps = {
  features: { icon: React.FC; title: string; text: string }[];
};

const FeatureGrid = ({ features }: FeatureGridProps) => {
  return (
    <Container>
      <div className='text-primary-text md:text-md mb-[14rem] grid w-full grid-cols-2 place-items-center gap-x-2 gap-y-9 text-sm md:grid-cols-3 md:gap-x-0'>
        {features.map(({ title, text, icon: Icon }) => (
          <div
            key={title}
            className='max-w-[26.5rem] [&_svg]:mb-[4px] [&_svg]:block [&_svg]:fill-white md:[&_svg]:mb-[2px] md:[&_svg]:mr-[6px] md:[&_svg]:inline'
          >
            <Icon />
            <span className='block text-white md:inline'>{title}</span>
            {' ' + text}
          </div>
        ))}
      </div>
    </Container>
  );
};

type FeatureCardsProps = {
  features: {
    image: string;
    title: string;
    text: string;
    imageClassName: string;
  }[];
};

const FeatureCards = ({ features }: FeatureCardsProps) => {
  return (
    <Container>
      <div className='grid w-full grid-cols-1 gap-6 md:grid-cols-2'>
        {features.map(({ title, image, text, imageClassName }) => (
          <div
            key={title}
            className='before:bg-glass-gradient border-transparent-white  relative aspect-[1.1/1] overflow-hidden rounded-[2.4rem] border bg-[radial-gradient(ellipse_at_center,rgba(var(--feature-color),0.15),transparent)] px-8 py-6 before:pointer-events-none before:absolute before:inset-0 md:rounded-[4.8rem] md:p-14'
          >
            <h3 className='mb-2 text-2xl text-white'>{title}</h3>
            <p className='text-md text-primary-text max-w-[31rem]'>{text}</p>
            <img
              src={image}
              className={classNames('absolute max-w-none', imageClassName)}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

Features.Main = MainFeature;
Features.Grid = FeatureGrid;
Features.Cards = FeatureCards;
