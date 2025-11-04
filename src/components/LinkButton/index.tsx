import type { ReactNode } from 'react';
import clsx from 'clsx';

type Props = {
  href: string;
  children: ReactNode;
  containerClassName?: string;
};

export default function LinkButton({
  href,
  children,
  containerClassName,
}: Props) {
  return (
    <div className={clsx('linkButtonContainer', containerClassName)}>
      <a className="linkButton" href={href}>
        {children}
      </a>
    </div>
  );
}
