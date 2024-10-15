export async function get(url: string) {
  const response = await fetch(url);
  const data = response.json();
  if (!data) {
    throw new Error("not data");
  }
  return data;
}
