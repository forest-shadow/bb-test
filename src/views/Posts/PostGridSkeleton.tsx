import type { FC } from 'react';
import Card from '@mui/material/Card';
import Skeleton from '@mui/material/Skeleton';

export const PostSkeleton: FC = () => (
  <Card>
    <Skeleton variant="rectangular" width="100%" height={172} />
  </Card>
);

export const PostGridSkeleton: FC = () => (
  <>
    {[...Array(9).keys()].map(() => (
      <PostSkeleton />
    ))}
  </>
);
