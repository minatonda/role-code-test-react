import { ApiResponse } from "./types";

export function tFetch<T>(input: RequestInfo | URL, init?: RequestInit | undefined): Promise<T> {
    return fetch(input, init).then(response => response.json()) as any as Promise<T>;
}