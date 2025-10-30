export const PATHS = {
    LANDINGPAGE: "/",
    BROWSEPRODUCTS: "/products"
} as const

export type PathKeys = keyof typeof PATHS