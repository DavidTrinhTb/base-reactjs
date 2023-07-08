import type { FC, SVGProps } from 'react';

const NotificationIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg width='30' height='31' viewBox='0 0 30 31' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M15 4.25C13.6193 4.25 12.5 5.36929 12.5 6.75V7.17676C9.58702 8.20636 7.5 10.9845 7.5 14.25V20.5H6.25C5.55964 20.5 5 21.0596 5 21.75C5 22.4404 5.55964 23 6.25 23H23.75C24.4404 23 25 22.4404 25 21.75C25 21.0596 24.4404 20.5 23.75 20.5H22.5V14.25C22.5 10.9845 20.413 8.20636 17.5 7.17676V6.75C17.5 5.36929 16.3807 4.25 15 4.25Z'
      fill='#2EF0D7'
    />
    <path
      d='M15 26.75C13.6193 26.75 12.5 25.6307 12.5 24.25H17.5C17.5 25.6307 16.3807 26.75 15 26.75Z'
      fill='#2EF0D7'
    />
  </svg>
);

export default NotificationIcon;
