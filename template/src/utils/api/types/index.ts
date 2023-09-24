export type HeaderType = {
  'Content-Type'?: string;
  Authenticate?: string;
  Authorization?: string;
  [key: string]: unknown | undefined;
};
