import { LoadingScreen } from './styles';

export function Loading() {
  return (
    <>
      <LoadingScreen size='50px' background='#3ebcd3' left='400px' top='50px' />
      <LoadingScreen size='200px' background='#DAC50A' left='300px' top='300px' />
      <LoadingScreen size='130px' background='#F66A69' left='250px' top='500px' />
      <LoadingScreen size='160px' background='#C87C53' left='100px' top='250px' />
    </>
  );
}
