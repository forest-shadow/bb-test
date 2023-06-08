import type { FC } from 'react';
import Card from '@mui/material/Card';
import Skeleton from '@mui/material/Skeleton';

export const CommentSkeleton: FC = () => (
  <Card>
    <Skeleton
      variant="rectangular"
      animation="wave"
      width="100%"
      height={152}
    />
  </Card>
);

export const CommentGridSkeleton: FC = () => (
  <>
    {[...Array(3).keys()].map((key) => (
      <CommentSkeleton key={key} />
    ))}
  </>
);
