import { GridContainer, GridItem } from "./GridView.style";

interface GridViewProps<T> {
  data: T[];
  render: (item: T) => React.ReactNode;
}

export default function GridView<T>({ data, render }: GridViewProps<T>) {
  return (
    <GridContainer>
      {data.map((item, index) => (
        <GridItem key={index}>{render(item)}</GridItem>
      ))}
    </GridContainer>
  );
}
