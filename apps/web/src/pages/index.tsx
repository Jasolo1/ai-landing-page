import Head from "next/head";
import { Button, Card } from "ui";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Web - Turborepo Example</title>
      </Head>

      <main className="mx-auto w-auto px-4 pb-8 pt-16 sm:pt-24 lg:px-8">
        <h1 className="p-5 text-2xl">
          Генератор лендингов на основе AI
        </h1>
      </main>
    </div>
  );
}
