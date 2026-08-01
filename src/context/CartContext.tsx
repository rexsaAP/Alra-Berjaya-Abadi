'use client';

import React, { createContext, useContext, useReducer, useCallback } from 'react';
import type { Product } from '@/lib/products';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | { type: 'ADD_ITEM'; product: Product }
  | { type: 'REMOVE_ITEM'; productId: string }
  | { type: 'INCREMENT'; productId: string }
  | { type: 'DECREMENT'; productId: string }
  | { type: 'CLEAR' }
  | { type: 'TOGGLE_DRAWER' }
  | { type: 'OPEN_DRAWER' }
  | { type: 'CLOSE_DRAWER' };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (i) => i.product.id === action.product.id
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.product.id === action.product.id
              ? { ...i, quantity: i.quantity + action.product.moq }
              : i
          ),
          isOpen: true,
        };
      }
      return {
        ...state,
        items: [
          ...state.items,
          { product: action.product, quantity: action.product.moq },
        ],
        isOpen: true,
      };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((i) => i.product.id !== action.productId),
      };
    case 'INCREMENT':
      return {
        ...state,
        items: state.items.map((i) =>
          i.product.id === action.productId
            ? { ...i, quantity: i.quantity + 1 }
            : i
        ),
      };
    case 'DECREMENT':
      return {
        ...state,
        items: state.items.map((i) => {
          if (i.product.id !== action.productId) return i;
          // MOQ lock: cannot go below moq
          const newQty = i.quantity - 1;
          if (newQty < i.product.moq) return i;
          return { ...i, quantity: newQty };
        }),
      };
    case 'CLEAR':
      return { ...state, items: [] };
    case 'TOGGLE_DRAWER':
      return { ...state, isOpen: !state.isOpen };
    case 'OPEN_DRAWER':
      return { ...state, isOpen: true };
    case 'CLOSE_DRAWER':
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

interface CartContextValue {
  items: CartItem[];
  isOpen: boolean;
  totalItems: number;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  increment: (productId: string) => void;
  decrement: (productId: string) => void;
  clearCart: () => void;
  toggleDrawer: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  buildWhatsAppMessage: () => string;
}

const CartContext = createContext<CartContextValue | null>(null);

const WHATSAPP_NUMBER = '6281234567890'; // Replace with actual WA business number

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isOpen: false,
  });

  const addItem = useCallback((product: Product) => {
    dispatch({ type: 'ADD_ITEM', product });
  }, []);

  const removeItem = useCallback((productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', productId });
  }, []);

  const increment = useCallback((productId: string) => {
    dispatch({ type: 'INCREMENT', productId });
  }, []);

  const decrement = useCallback((productId: string) => {
    dispatch({ type: 'DECREMENT', productId });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR' });
  }, []);

  const toggleDrawer = useCallback(() => {
    dispatch({ type: 'TOGGLE_DRAWER' });
  }, []);

  const openDrawer = useCallback(() => {
    dispatch({ type: 'OPEN_DRAWER' });
  }, []);

  const closeDrawer = useCallback(() => {
    dispatch({ type: 'CLOSE_DRAWER' });
  }, []);

  const buildWhatsAppMessage = useCallback(() => {
    if (state.items.length === 0) return '';
    const lines = state.items
      .map(
        (item, idx) =>
          `${idx + 1}. ${item.product.name} - ${item.quantity} ${item.product.unit}`
      )
      .join('\n');
    const message = `Halo CV. ALRA BERJAYA ABADI, saya ingin mengajukan inquiry/draf pesanan ekspor dengan rincian berikut:\n\n${lines}\n\nMohon informasi mengenai ketersediaan, penawaran harga (FOB/CIF), dan prosedur pengirimannya. Terima kasih.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }, [state.items]);

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        isOpen: state.isOpen,
        totalItems,
        addItem,
        removeItem,
        increment,
        decrement,
        clearCart,
        toggleDrawer,
        openDrawer,
        closeDrawer,
        buildWhatsAppMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}