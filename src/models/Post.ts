export interface Post {
    id: number;
    created_at: string;
    title: string;
    slug: string;
    author_id: number;
    body: string;
    image: string;
  }

  export interface User {
    id: number
    username: string
  }