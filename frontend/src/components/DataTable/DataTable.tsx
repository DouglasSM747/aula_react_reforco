/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from "./DataTable.style.";

interface DataTableProps<T> {
  data: T[];
  labels: string[];
  accessors: string[];
  renderActions?: (item: T) => React.ReactNode; // Objeto do tipo node
}

export default function DataTable<T>({
  data,
  labels,
  accessors,
  renderActions,
}: DataTableProps<T>) {
  return (
    <Table>
      <thead>
        <tr>
          {labels.map((label) => (
            <th key={label}>{label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => (
          <tr key={rowIndex}>
            {accessors.map((accessor, index) => (
              <td key={index}>
                {accessor === "actions" // Verifica se é a coluna de ações
                  ? renderActions
                    ? renderActions(item)
                    : null // Renderiza as ações se renderActions estiver definido
                  : (item as any)[accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
