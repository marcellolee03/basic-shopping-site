import { createContext, useContext, useState } from 'react';
import { type ReactNode } from 'react';

type ShoppingCartProviderProps = {
    children: ReactNode
}

type ShoppingCartContextType = {
    cartQuantity: number
    addToShoppingCart: (id: number) => void
}

type CartItem = {
    id: number
    quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export function useShoppingCartContext() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps){
    const [ cartProducts, setCartProducts ] = useState<CartItem[]>([]);

    const cartQuantity = cartProducts.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    )

    function addToShoppingCart(id:number) {
        setCartProducts(currItems => {
            let itemFound = false;

            const newItems = currItems.map(item => {
                    if (item.id === id) {
                        itemFound = true;
                        return { ...item, quantity: item.quantity + 1};
                    } else {
                        return item
                    }
                }
            )
            

            console.log(currItems)
            if (itemFound) {
                return newItems;
            } else {
                return [...currItems, {id, quantity: 1}];
            }
        });
    }

    return (
        <ShoppingCartContext.Provider
            value={{
                cartQuantity,
                addToShoppingCart
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}