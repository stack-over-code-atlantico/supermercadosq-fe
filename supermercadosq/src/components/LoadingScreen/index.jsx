import { LoadingScreen, LoadingShadow, LoadingWrapper, Div } from './styles';

export function Loading() {
  return (
    <Div>
     <LoadingWrapper>
      <LoadingScreen size='100px' background='#3ebcd3' />
        <LoadingScreen size='100px' background='#DAC50A'  />
        <LoadingScreen size='100px' background='#F66A69'  />
        <LoadingShadow />
        <LoadingShadow />
        <LoadingShadow />
     </LoadingWrapper>
    </Div>
  );
}

