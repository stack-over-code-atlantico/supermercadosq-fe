import {CardDashboard, CardTitle} from './styles';

export function CardsDashboard({height, width, children}) {

  return (
    <CardDashboard height={height} width={width}>
      <CardTitle> Denuncias </CardTitle>
      {children}
    </CardDashboard>
  );
}
