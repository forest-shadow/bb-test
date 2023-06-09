import type { ITag } from 'components/form/TagInput';

export interface IComment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
  tags?: ITag[];
}
