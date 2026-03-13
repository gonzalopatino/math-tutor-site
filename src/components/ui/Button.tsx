import { ButtonHTMLAttributes, forwardRef } from 'react';
import { Link, LinkProps } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
    href?: never;
    to?: never;
  };

type ButtonAsLink = BaseProps &
  Omit<LinkProps, 'to'> & {
    as: 'link';
    to: string;
    href?: never;
  };

type ButtonAsAnchor = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'anchor';
    href: string;
    to?: never;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary-600 text-white hover:bg-primary-500 focus:ring-primary-500',
  secondary: 'bg-primary-800 text-neutral-100 hover:bg-primary-700 focus:ring-primary-700',
  outline:
    'border-2 border-accent text-accent hover:bg-accent hover:text-primary-900 focus:ring-accent',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
};

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(props, ref) {
    const { variant = 'primary', size = 'md', children, className = '', ...rest } = props;

    const baseStyles =
      'inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-900 disabled:opacity-50 disabled:cursor-not-allowed';

    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    if (rest.as === 'link') {
      const { as: _asLink, to, ...linkProps } = rest as ButtonAsLink;
      void _asLink; // Intentionally unused
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          to={to}
          className={combinedStyles}
          {...linkProps}
        >
          {children}
        </Link>
      );
    }

    if (rest.as === 'anchor') {
      const { as: _asAnchor, href, ...anchorProps } = rest as ButtonAsAnchor;
      void _asAnchor; // Intentionally unused
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={combinedStyles}
          {...anchorProps}
        >
          {children}
        </a>
      );
    }

    const { as: _asButton, ...buttonProps } = rest as ButtonAsButton;
    void _asButton; // Intentionally unused
    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={combinedStyles} {...buttonProps}>
        {children}
      </button>
    );
  },
);

export default Button;
