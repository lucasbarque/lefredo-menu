export interface PageHomeParams {
  params: Promise<{
    restaurant: string;
  }>;
  searchParams: Promise<{
    section?: string;
  }>;
}
