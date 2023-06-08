import type { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';

import type { IPost } from 'types/Post.types';

interface PostProps {
  post: IPost;
  isSelected: boolean;
  onClickHandler: (post: IPost) => void;
}
export const Post: FC<PostProps> = ({ post, isSelected, onClickHandler }) => {
  const { title, body } = post;
  return (
    <Card
      sx={{
        border: isSelected ? `3px solid ${blue[800]}` : '3px solid transparent',
      }}
      onClick={() => onClickHandler(post)}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};
