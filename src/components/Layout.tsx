import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';

import {Header} from '@/components';
import {Loader} from '@/shared/ui';
import {FadeIn, Hover, LeftToRight} from '@/shared/animations';
import {ArrowRight} from 'lucide-react';

/**
 * The Layout component serves as the main structure of the application.
 * It initially displays a loading screen with an animated loader for 4 seconds,
 * after which it reveals the main content including a header, outlet for nested routes,
 * and a footer with creator information and a link to the GitHub repository.
 *
 * @returns {JSX.Element} The rendered Layout component.
 */
const Layout: React.FC = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoader(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  if (loader) {
    return (
      <FadeIn>
        <Loader
          className='h-screen flex items-center justify-center gap-1'
          needSpin={false}
          iconSize={25}
          title={{need: true, text: 'Created by'}}
          sub={true}
        />
      </FadeIn>
    );
  }

  return (
    <>
      <header>
        <Header />
      </header>

      <Outlet />

      <footer>
        <LeftToRight className='h-[5vh] text-[13px] flex items-center justify-center gap-1'>
          <div className='flex items-center gap-1'>
            created by
            <FadeIn delay={1.5}>
              <span className='font-bold text-orange-400'>txzy</span>
            </FadeIn>
          </div>

          <ArrowRight size={16} />

          <code>
            <Hover>
              <a
                className='font-bold text-[14px] hover:underline'
                href='https://github.com/txzy2/react-starter'
                target='_blank'
              >
                Github
              </a>
            </Hover>
          </code>
        </LeftToRight>
      </footer>
    </>
  );
};

export default Layout;
