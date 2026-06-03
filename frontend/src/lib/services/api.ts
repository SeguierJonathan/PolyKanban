export enum HttpMethode {
    GET = "GET",
    POST = "POST",
    PATCH = "PATCH",
    PUT = "PUT",
    DELETE = "DELETE"
}

export default async function api<T>(
    endpoint: string,
    method: HttpMethode = HttpMethode.GET,
    body?: unknown
): Promise<T> {

    const API_URL = "http://localhost:3001";

    const token = localStorage.getItem("token");

    const headers: Record<string, string> = {
        "Content-Type": "application/json"
    };

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    const options: RequestInit = {
        method,
        headers
    };

    if (method !== HttpMethode.GET) {
        options.body = body ? JSON.stringify(body) : undefined;
    }

    const response = await fetch(`${API_URL}${endpoint}`, options);

    if (!response.ok) {
        throw new Error(`Failed to fetch ${endpoint}: ${response.statusText}`);
    }

    return response.json() as Promise<T>;
}