'use client';

import Image from 'next/image';

import dataImg from '@/public/images/common/nodata.png';

interface NodataProp {
  text: string;
}

const NotData = (props: NodataProp) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mb-16 items-center justify-center text-center">
      <Image src={dataImg} alt="" />
      <h2 className="my-2 font-heading text-2xl font-bold">
        Something&apos;s missing
      </h2>
      <p>
        Sorry, <span className="font-bold text-clifford">{props.text}</span> is
        not available or data has not been updated
      </p>
      <div className="mt-8 flex justify-center gap-2"></div>
    </div>
  );
};

export default NotData;
