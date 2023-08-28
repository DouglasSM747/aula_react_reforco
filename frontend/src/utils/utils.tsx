export interface DataTableProps<T> {
  data: T[];
  labels: string[];
  accessors: Array<keyof T>;
}