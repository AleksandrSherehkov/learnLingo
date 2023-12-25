'use client';
import { FC } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { Auth } from '../Auth/Auth';
import Modal from '../Modal/Modal';

import { Thema } from '@/utils/definitions';

interface AttentionModalProps {
  status: Thema;
}

export const AttentionModal: FC<AttentionModalProps> = ({ status }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (path: string) => {
    // Get current query parameters
    const currentQueryParams = new URLSearchParams(window.location.search);

    // Add or update your custom parameter
    currentQueryParams.set(path, 'true');

    // Construct the new pathname with updated query parameters
    const newPathname = `${pathname}?${currentQueryParams.toString()}`;

    // Update the overflow style
    document.body.style.overflow = 'hidden';

    // Push the new pathname
    router.push(newPathname);
  };

  return (
    <Modal>
      <div>
        <h3 className="text-3xl font-medium text-center mb-5">Attention</h3>
        <p className="text-sm font-medium tracking-[0.56px] text-center mb-10">
          We would like to remind you that certain functionality is available only to authorized
          users.If you have an account, please log in with your credentials. If you do not already
          have an account, you must register to access these features.
        </p>
        <div className="md:flex items-center justify-center md:gap-5">
          <Auth handleClick={handleClick} status={status} />
        </div>
      </div>
    </Modal>
  );
};
