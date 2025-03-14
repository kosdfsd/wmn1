export type ExtractionType = 'servers' | 'ips' | 'emails' | 'domains';
export type ExtractionMode = 'source' | 'text' | 'clean';

export interface ResultsState {
  servers: string[];
  ips: string[];
  emails: string[];
  domains: string[];
}

export interface AttributeData {
  tag: string;
  attributes: Record<string, string>;
}

// Conversions

export interface ConversionsResponse {
  row_count: number;
  data: ConversionData[];
  success: boolean;
  message: string | null;
}

export interface ConversionData {
  conversion_id: number;
  conversion_date: string;
  offer_id: number;
  offer_name: string;
  deploy_id: string;
  mailer_id: string;
  entity_id: string;
  subid_3?: string;
  subid_1?: string;
  price: number;
  sponsor_name : string
}


export interface ConversionsState {
  conversionsData: ConversionData[];
  totalRows: number;
  isLoading: boolean;
  error: string | null;
  startDate: string;
  endDate: string;
  currentPage: number;
  rowsPerPage: number;
  sortField: string;
  sortDirection: 'asc' | 'desc';
}