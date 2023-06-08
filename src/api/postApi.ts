import { api } from 'api';

enum HttpMethod {
  GET = 'GET',
}

const postApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query({
      query: () => ({
        url: `/posts`,
        method: HttpMethod.GET,
      }),
    }),
    getPostComments: build.query({
      query: (postId: number) => ({
        url: `/posts/${postId}/comments`,
        method: HttpMethod.GET,
      }),
    }),
  }),
});

export const getPostsQuery = postApi.endpoints.getPosts.initiate;
