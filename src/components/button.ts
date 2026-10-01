type ButtonVariant = 'filled' | 'outline' | 'pill';

type ButtonOptions = {
  label: string;
  href: string;
  variant?: ButtonVariant;
  className?: string;
};

export const renderButton = ({
  label,
  href,
  variant = 'filled',
  className = ''
}: ButtonOptions): string => (
  `<a class="btn btn--${variant} ${className}" href="${href}">${label}</a>`
);
