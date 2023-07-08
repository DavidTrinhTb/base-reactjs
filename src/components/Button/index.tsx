import type { FC, PropsWithChildren, RefAttributes } from 'react';

import { Button as ButtonComponent, ButtonProps } from 'antd';
import { cva, cx, VariantProps } from 'class-variance-authority';

const Button: FC<PropsWithChildren<ButtonProps & RefAttributes<HTMLElement> & ButtonVariantsProps>> = ({
  children,
  variant,
  size,
  className,
  ...props
}) => {
  return (
    <ButtonComponent className={cx(className, ButtonVariants({ variant, size }))} {...props}>
      {children}
    </ButtonComponent>
  );
};

type ButtonVariantsProps = VariantProps<typeof ButtonVariants>;
const ButtonVariants = cva('', {
  variants: {
    variant: {
      primary:
        'bg-primary color-white hover:bg-primary hover:color-white focus:bg-primary focus:color-white active:bg-primary active:color-white border-transparent hover:border-transparent active:border-transparent focus:border-transparent',
      ghost:
        'bg-transparent color-primary hover:bg-transparent hover:color-primary focus:bg-transparent focus:color-primary active:bg-transparent active:color-primary border-solid border-primary hover:border-primary active:border-primary focus:border-primary',
    },

    size: {
      large: ['p-24', 'w-100%'],
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
});

export default Button;
