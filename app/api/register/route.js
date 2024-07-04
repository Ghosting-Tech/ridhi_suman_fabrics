export async function POST() {
  const data = await res.json();

  return Response.json({ data });
}
