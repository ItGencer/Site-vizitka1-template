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
}: ButtonOptions): HTMLAnchorElement => {
  const button = document.createElement('a');
  button.className = `btn btn--${variant}${className ? ` ${className}` : ''}`;
  button.href = href;
  button.textContent = label;

  return button;
};
