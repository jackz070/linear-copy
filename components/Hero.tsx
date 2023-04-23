import classNames from 'classnames';

interface HeroProps {
  children: React.ReactNode;
}

interface HeroElementProps {
  children: React.ReactNode;
  className?: string;
}

export const HeroTitle = ({ children, className }: HeroElementProps) => {
  return (
    <h1
      className={classNames(
        className,
        'text-gradient my-6 text-6xl md:text-8xl'
      )}
    >
      {children}
    </h1>
  );
};
export const HeroSubtitle = ({ children, className }: HeroElementProps) => {
  return (
    <p
      className={classNames(
        className,
        'text-primary-text mb-12 text-lg md:text-xl'
      )}
    >
      {children}
    </p>
  );
};

export const Hero = ({ children }: HeroProps) => {
  return <div className=' text-center'>{children}</div>;
};
