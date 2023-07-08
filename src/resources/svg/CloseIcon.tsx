import type { FC, SVGProps } from 'react';

const CloseIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11.9947 13.093L7.91783 17.0645L7 16.1727L11.0861 12.2101L7 8.23984L7.91783 7.34802L12.0039 11.3183L16.0822 7.34802L17 8.23984L12.9125 12.2011L17 16.1727L16.0822 17.0645L11.9947 13.093Z'
      fill='#6F7B80'
      stroke='#6F7B80'
      strokeWidth='0.5'
    />
    <path
      d='M22.25 12.2063C22.25 17.6748 17.6814 22.1445 12 22.1445C6.3186 22.1445 1.75 17.6748 1.75 12.2063C1.75 6.73778 6.3186 2.26813 12 2.26813C17.6814 2.26813 22.25 6.73778 22.25 12.2063Z'
      stroke='#6F7B80'
      strokeWidth='1.5'
    />
  </svg>
);

export default CloseIcon;
