import React, { ReactNode } from "react";

export default function Section({
  id,
  number,
  eyebrow,
  title,
  children
}: {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="section">
      <div className="section-label">
        <span>{number}</span>
        <span>{eyebrow}</span>
      </div>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
