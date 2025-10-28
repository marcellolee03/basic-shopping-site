type BaseProduct = {
  id: number
  name: string
  image: string
  price: number
  discountedPrice?: number
}

export type Gasket = BaseProduct & {
  category: "gasket"
  layout: "60%" | "75%" | "100%"
  buildMaterial: string
}

export type Switch = BaseProduct & {
  category: "switch"
  type: "clicky" | "linear" |"tactile"
  pinType: "3 pin" | "5 pin"
  preLubed: boolean
}

export type Keycap = BaseProduct & {
  category: "keycap"
  language: string
  material: string
}

export type Product = Switch | Gasket | Keycap


// More general product interface.
export type GeneralProduct = {
  id: number,
  name: string,
  category: string,
  image: string,
  price: number,
  discountedPrice?: number,
  
  // gasket
  gasketLayout?: "60%" | "75%" | "100%"
  gasketBuildMaterial?: string,

  // switch
  switchType?: "clicky" | "linear" |"tactile",
  switchPinType?: "3 pin" | "5 pin",
  switchIsPreLubed?: boolean

  // keycap
  keycapLanguage?: string,
  keycapBuildMaterial?: string,
}
