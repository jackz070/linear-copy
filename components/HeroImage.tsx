'use client';

import classNames from 'classnames';
import { CSSProperties, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const randomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

interface Line {
  id: string;
  direction: 'to bottom' | 'to right';
  size: number;
  duration: number;
}

export const HeroImage = () => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  const [lines, setLines] = useState<Line[]>([]);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const removeLine = (id: string) => {
    setLines((prev) => prev.filter((line) => line.id !== id));
  };

  useEffect(() => {
    if (!inView) {
      return;
    }

    const renderLine = (timeout: number) =>
      (timeoutRef.current = setTimeout(() => {
        setLines((lines) => [
          ...lines,
          {
            direction: Math.random() > 0.5 ? 'to bottom' : 'to right',
            duration: randomNumberBetween(1300, 3500),
            size: randomNumberBetween(10, 30),
            id: Math.random().toString(36).substring(7),
          },
        ]);
        renderLine(randomNumberBetween(800, 2500));
      }, timeout));

    renderLine(randomNumberBetween(800, 1300));

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [inView, setLines]);

  return (
    <div ref={ref} className='mt-[12.8rem] [perspective:2000px] '>
      <div
        className={classNames(
          'bg-hero-gradient border-transparent-white relative rounded-lg  border bg-white bg-opacity-[0.01] ',
          inView ? 'animate-image-rotate' : '[transform:rotateX(25deg)]',
          'before:bg-hero-glow before:absolute before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:blur-[160px]',
          inView && 'before:animate-image-glow'
        )}
      >
        <div className='absolute left-0 top-0 z-20 h-full w-full'>
          {lines.map((line) => (
            <span
              key={line.id}
              onAnimationEnd={() => {
                removeLine(line.id);
              }}
              style={
                {
                  '--direction': line.direction,
                  '--size': line.size,
                  '--animation-duration': `${line.duration}ms`,
                } as CSSProperties
              }
              className={classNames(
                'bg-glow-lines absolute  top-0 ',
                line.direction === 'to right' &&
                  `animate-glow-line-horizontal left-0 h-[1px] w-[calc(var(--size)*1rem)]`,
                line.direction === 'to bottom' &&
                  `animate-glow-line-vertical right-0 h-[calc(var(--size)*1rem)] w-[1px]`
              )}
            />
          ))}
        </div>
        <svg
          width='100%'
          viewBox='0 0 1499 778'
          fill='none'
          className={classNames(
            'absolute left-0 top-0 h-full w-full',
            'animate-sketch-lines [&_path]:stroke-white [&_path]:[stroke-opacity:0.2] [&_path]:[stroke-dasharray:1] [&_path]:[stroke-dashoffset:1]',
            inView && '[&_path]:animate-sketch-lines'
          )}
        >
          <path pathLength='1' d='M1500 72L220 72'></path>
          <path pathLength='1' d='M1500 128L220 128'></path>
          <path pathLength='1' d='M1500 189L220 189'></path>
          <path pathLength='1' d='M220 777L220 1'></path>
          <path pathLength='1' d='M538 777L538 128'></path>
        </svg>
        <img
          src='./img/hero.webp'
          alt='Hero image'
          className={classNames(
            'relative  transition-opacity delay-[680ms] duration-700',
            inView ? 'opacity-100' : 'opacity-0'
          )}
        />
      </div>
    </div>
  );
};
