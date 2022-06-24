import { LoadingScreen, LoadingShadow, LoadingWrapper, SpanText } from './styles';

export function Loading() {
  return (
    <>
     <LoadingWrapper>
      <LoadingScreen size='100px' background='#3ebcd3' />
        <LoadingScreen size='100px' background='#DAC50A'  />
        <LoadingScreen size='100px' background='#F66A69'  />
        <LoadingShadow />
        <LoadingShadow />
        <LoadingShadow />
        <SpanText>Carregando...</SpanText>
     </LoadingWrapper>
    </>
  );
}
