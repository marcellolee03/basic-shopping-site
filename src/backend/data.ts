import { type Product } from '../models/Product'

export const dummyProducts: Product[] = [
  // Gaskets
  {
    id: 1,
    name: "Phantom 65 - Alumínio",
    image: "bag.png",
    price: 189.90,
    discountedPrice: 169.90,
    category: "gasket",
    layout: "60%",
    buildMaterial: "Alumínio CNC"
  },
  {
    id: 2,
    name: "Aura TKL - Policarbonato",
    image: "bag.png",
    price: 145.50,
    category: "gasket",
    layout: "75%",
    buildMaterial: "Policarbonato Fumê"
  },
  
  // Switches
  {
    id: 3,
    name: "Silent Glacier (Pack com 70)",
    image: "bag.png",
    price: 55.00,
    category: "switch",
    type: "linear",
    pinType: "5 pin",
    preLubed: true
  },
  {
    id: 4,
    name: "Clicky Cobalt (Pack com 70)",
    image: "bag.png",
    price: 42.00,
    category: "switch",
    type: "clicky",
    pinType: "3 pin",
    preLubed: false
  },
  {
    id: 5,
    name: "Tactile Ember (Pack com 90)",
    image: "bag.png",
    price: 68.00,
    discountedPrice: 59.90,
    category: "switch",
    type: "tactile",
    pinType: "5 pin",
    preLubed: true
  },

  // Keycaps
  {
    id: 6,
    name: "Keycaps 'Noctua' Set",
    image: "bag.png",
    price: 89.90,
    category: "keycap",
    language: "ANSI (US)",
    material: "PBT Double-Shot"
  },
  {
    id: 7,
    name: "Keycaps 'Minimalist White' Set",
    image: "bag.png",
    price: 75.00,
    category: "keycap",
    language: "ABNT2 (BR)",
    material: "ABS Laser-etched"
  }
];