import React from 'react';
import { notFound } from 'next/navigation';
import { NextPage } from 'next';
import AdDetails from '../../../components/AdDetails/AdDetails';

const AdPage: NextPage<{
  params: {
    id: string
  }
}> = ({ params }) => {
  const { id } = params;

  if (!+id) {
    notFound();
  }

  return (
    <AdDetails id={+id} />
  );
};

export default AdPage;
