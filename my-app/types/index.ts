export interface Candidate {
  id: number;
  name: string;
  profession: string;
  bio?: string;
  image: string;
}

export type AuthFormType = 'signup' | 'login';