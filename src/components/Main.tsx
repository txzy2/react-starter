import {Hover, FadeIn, LeftToRight} from '@/shared/animations';
import {BookCopy} from 'lucide-react';
import React from 'react';
import {Link} from 'react-router-dom';

const Main: React.FC = () => {
  return (
    <div className='h-[95vh] flex flex-col justify-center items-center gap-2'>
      <div className='flex flex-col items-center gap-2'>
        <div className='flex items-center gap-2'>
          <FadeIn delay={1}>
            <a href='https://vitejs.dev' target='_blank'>
              <Hover
                className='cursor-pointer flex items-center gap-2 '
                scale={1.05}
              >
                <img src='/vite.svg' width={60} alt='logo1' />
                <code className='px-2 font-bold border rounded-lg'>Vite</code>
              </Hover>
            </a>
          </FadeIn>

          <span className='text-[20px]'>+</span>

          <FadeIn delay={1.2}>
            <a href='https://react.dev' target='_blank'>
              <Hover
                className='cursor-pointer flex items-center gap-2 '
                scale={1.05}
              >
                <img src='/react.svg' width={60} alt='logo2' />
                <code className='px-2 font-bold border rounded-lg'>React</code>
              </Hover>
            </a>
          </FadeIn>
        </div>
      </div>

      <LeftToRight>
        <Link to='/about'>
          <Hover>
            <code className='flex items-center gap-1 underline'>
              <BookCopy /> About
            </code>
          </Hover>
        </Link>
      </LeftToRight>
    </div>
  );
};

export default Main;
