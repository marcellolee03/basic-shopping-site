export const PATHS = {
    HOME: "/",
    KEYCAPS: "/keycaps"
} as const

export type PathKeys = keyof typeof PATHS