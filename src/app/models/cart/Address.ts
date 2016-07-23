export interface Address {
  ID: number;
  StateId: number;
  CountryId: number;
  Business: boolean;
  FirstName: string;
  LastName: string;
  Name: string;
  CompanyName?: string;
  Street1: string;
  Street2: string;
  City: string;
  State: string;
  Country: string;
  Phone: string;
  PostCode: string;
}
