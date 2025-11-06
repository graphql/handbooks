import type { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  mailto: string;
  subject?: string;
  children: ReactNode;
  containerClassName?: string;
};

export default function ContactButton({
  mailto,
  subject,
  children,
  containerClassName,
}: Props) {
  const href =
    subject && subject.length > 0
      ? `mailto:${mailto}?${new URLSearchParams({ subject }).toString()}`
      : `mailto:${mailto}`;

  return (
    <div className={clsx("contactButtonContainer", containerClassName)}>
      <a className="contactButton" href={href}>
        {children}
      </a>
    </div>
  );
}
