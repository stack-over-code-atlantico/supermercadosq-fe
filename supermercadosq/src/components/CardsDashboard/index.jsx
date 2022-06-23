import {CardDashboard, CardTitle} from './styles';

export function CardsDashboard({height, width, children, title}) {

  return (
    <CardDashboard height={height} width={width}>
      <CardTitle> {title} </CardTitle>
      {children}
    </CardDashboard>
  );
}
