import { fetchCountries } from '@/lib/api';

export default async function Home() {
  const data = await fetchCountries();

  return (
    <main>
      <h1>Countries</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
