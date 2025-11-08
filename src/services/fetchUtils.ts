// Utility functions for fetch API
export function makeOptions(method: string, body?: object): RequestInit {
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // Include cookies for refresh token
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  return options;
}

export async function handleHttpErrors(res: Response) {
  if (!res.ok) {
    const errorResponse = await res.json().catch(() => ({ message: "Unknown error" }));
    throw new Error(errorResponse.message || `Error: ${res.status} ${res.statusText}`);
  }
  return res.json();
}
