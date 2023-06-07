import type { FC } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import type { IComment } from './Comment.types';

const defaultComment = {
  name: 'User Name',
  email: 'user.name@gmail.com',
  body: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
};
interface CommentProps {
  comment: Partial<IComment>;
}
export const Comment: FC<Partial<CommentProps>> = ({
  comment = defaultComment,
}) => {
  const { name, email, body } = comment;
  return (
    <Card>
      <CardContent sx={{ pb: 0 }}>
        <Typography gutterBottom component="div">
          Name: {name}
        </Typography>
        <Typography gutterBottom component="div">
          Email: {email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button size="small">Reply</Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  );
};
