export function tryGetFromSessionStorage<T>(item: string, otherwise: T): T {
    try {
        return JSON.parse(sessionStorage.getItem(item)) ?? otherwise
    } catch {
        return otherwise
    }
}

