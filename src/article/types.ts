export interface Article {
  title: string;
  link: string;
  source: string;
  description: string;
  thumbnail: string;
  date_parsed: string;
}
export interface ArticleModel extends Article {
  createdAt: Date;
}

export interface EnvironmentVariables {
  ZENSERP_API_KEY: string;
}
