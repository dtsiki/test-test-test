import { ReactNode } from 'react';
import classNames from 'classnames';

export enum ButtonVariant {
  INFO = 'is-info',
  SUCCESS = 'is-success',
  WARNING = 'is-warning',
  DANGER = 'is-danger'
}

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant = ButtonVariant.INFO, onClick }: ButtonProps) => {
  const bind = classNames.bind([]);

  return (
    <button
      className={bind(['button', variant])}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
