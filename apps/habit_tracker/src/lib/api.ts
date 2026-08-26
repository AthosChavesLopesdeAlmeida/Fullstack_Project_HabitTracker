const API_URL = process.env.NEXT_PUBLIC_API_URL;

type ApiOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: unknown;
};

type ApiResponse<T> = {
  data: T;
  status: number;
};

export async function api<T = unknown>(path: string, options: ApiOptions = {}): Promise<ApiResponse<T>> {
  const token = localStorage.getItem('token');

  const res = await fetch(`${API_URL}${path}`, {
    method: options.method ?? 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new ApiError(data.error ?? 'Erro na requisição', res.status);
  }

  return { data, status: res.status };
}

export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}