import classNames from 'classnames';
import { Container } from 'components/Container';
import { BuildMomentum } from 'components/sections/Build-momentum';
import { Clients } from 'components/sections/Clients';
import { EnjoyIssueTracking } from 'components/sections/Enjoy-issue-tracking';
import { HomepageHero } from 'components/sections/HomepageHero';
import { SetDirection } from 'components/sections/Set-direction';
import { UnlikeAnyTool } from 'components/sections/Unlike-any-tool';
import { StarsIllustration } from 'components/StarsIllustration';
import * as React from 'react';

export default function Homepage() {
  return (
    <>
      <div className='overflow-hidden pb-[16.4rem] md:pb-[25.6rem]'>
        <Container className='pt-[6.4rem]'>
          <HomepageHero />
        </Container>
      </div>
      <Container className='pt-[6.4rem]'>
        <Clients />{' '}
        <div
          className={classNames(
            'pointer-events-none relative z-[-1] my-[-12.8rem] h-[60rem] overflow-hidden',
            'before:bg-radial-faded mask-radial-faded [--color:#7877C6] before:absolute before:inset-0 before:opacity-[0.4]',
            'after:bg-background after:absolute after:-left-1/2 after:top-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)]'
          )}
        >
          <StarsIllustration />
        </div>
      </Container>
      <UnlikeAnyTool />
      <EnjoyIssueTracking />
      <BuildMomentum />
      <SetDirection />
    </>
  );
}
