export async function fetcher<Type>(url: string, ...options: any): Promise<Type> {
  const res = await fetch(url, options)
  const jsonData = await res.json();
  console.log('execs', jsonData);

  return (jsonData as Type);
}
