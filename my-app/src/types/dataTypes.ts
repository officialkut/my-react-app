export interface CandidateCard {
  title: string;
  subtitle: string;
  location: string;
  tags: string[];
  about: string;
  portfolioImages?: string[];
  email?: string;
  phone?: string;
}

export interface FeatureCard {
  title: string;
  description: string;
}

export interface SwiperCandidate {
  title: string;
  subtitle: string;
  location: string;
  about: string;
  tags: string[];
}

export interface CardData {
  candidateCards: Record<string, CandidateCard>;
  featureCards: Record<string, FeatureCard>;
  swiperCandidates: SwiperCandidate[];
}