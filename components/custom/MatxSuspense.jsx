import { Suspense } from 'react';
import { MatxLoading } from '@/customComponents/index';

const MatxSuspense = ({ children }) => {
  return <Suspense fallback={<MatxLoading />}>{children}</Suspense>;
};

export default MatxSuspense;
