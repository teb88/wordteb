import MainView from '@components/MainView';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>WordTeb (Wordle en Español) - Adivina la palabra</title>
        <meta
          name="description"
          content="Clon del Wordle adaptado al español. Deberás adivinar cada día una nueva palabra descubriendo las letras que corresponden a base de prueba y error"
        />
      </Head>
      <div className="h-full bg-light dark:bg-dark">
        <MainView />
      </div>
    </>
  );
}
