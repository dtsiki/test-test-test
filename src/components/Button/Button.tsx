import React, { ReactNode } from 'react';
import classNames from 'classnames';

export enum ButtonVariant {
  INFO = 'is-info',
  SUCCESS = 'is-success',
  WARNING = 'is-warning',
  DANGER = 'is-danger'
}

export enum ButtonSize {
  NORMAL = 'is-normal',
  LARGE = 'is-large'
}

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = ButtonSize.NORMAL,
  variant = ButtonVariant.INFO,
  onClick
}: ButtonProps) => {
  const bind = classNames.bind([]);

  return (
    <button
      className={bind(['button', variant, size])}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
