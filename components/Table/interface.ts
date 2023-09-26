export interface Row {
  id?: any;
  name: string;
  date?: string;
  type?: string;
  track?: string;
  sum?: string;
  action?: string;
  status?: string;
  address?: {
    city?: string;
  };
  phone?: string;
  email?: string;
  city?: string;
  country?: string;
  zip?: string;
  company?: string;
  price?: string;
}

export interface Column {
  text: string;
  key: string;
}

export interface Copy {
  value: string;
  copied: boolean;
}
