const VIEW_NAMESPACE = "charlportfolio";
const VIEW_KEY = "portfolio-views";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get("mode") === "get" ? "get" : "hit";

  try {
    const endpoint = `https://api.countapi.xyz/${mode}/${VIEW_NAMESPACE}/${VIEW_KEY}`;
    const response = await fetch(endpoint, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      return Response.json({ error: "Counter request failed" }, { status: 502 });
    }

    const data = await response.json();
    return Response.json({ value: typeof data.value === "number" ? data.value : null });
  } catch {
    return Response.json({ error: "Counter unavailable" }, { status: 503 });
  }
}
