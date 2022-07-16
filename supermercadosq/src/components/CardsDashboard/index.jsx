import { CardDashboard, CardTitle } from "./styles";

export function CardsDashboard({ height, width, children, title, minWidth }) {
  return (
    <CardDashboard height={height} width={width} minWidth={minWidth}>
      <CardTitle> {title} </CardTitle>
      {children}
    </CardDashboard>
  );
}
