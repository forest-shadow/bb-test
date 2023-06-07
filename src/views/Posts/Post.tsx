import type { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import type { IPost } from './Post.types';

const defaultProps: Partial<IPost> = {
  title: 'Lizard',
  body: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
};
interface PostProps {
  post: Partial<IPost>;
}
export const Post: FC<Partial<PostProps>> = ({ post = defaultProps }) => {
  const { title, body } = post;
  return (
    <Card>
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
