export type Rating = {
    rate: number
    count: number
}

export type Product = {
  id: number
  name: string
  price: number
  discountedPrice?: number
  description: string
  category: string
  image: string
  rating: Rating
}
