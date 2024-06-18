export interface Rym {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: {
    name?: string;
    url?: string;
  };
  location?: {
    name?: string;
    url?: string;
  };
  image?: string;
  episode?: string[];
  url?: string;
  created?: string;
}

export interface RymRes {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: any;
  };
  results: Rym[];
}

export interface RymState {
  rym: Rym[];
  currentPage: number;
  error: any;
}
