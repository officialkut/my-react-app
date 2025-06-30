export type Candidate = {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  tags: string[];
  about: string;
  portfolioImages?: string[];
  email?: string;
  phone?: string;
};

export type FeatureCard = {
  icon: string;
  id: string;
  title: string;
  description: string;
};

export type FormData = {
  surname?: string;
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

export type AppData = {
  candidateCards: Record<string, Candidate>;
  featureCards: Record<string, FeatureCard>;
  swiperCandidates: Candidate[];
};