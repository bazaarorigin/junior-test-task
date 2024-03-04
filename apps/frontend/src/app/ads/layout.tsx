import React from 'react';

export default function AdsLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <section>{children}</section>
  );
}
