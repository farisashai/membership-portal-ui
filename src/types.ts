/**
 * @file Type declarations for membership portal ui
 */

// generic fetch function
export type HttpRequestMethod = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';
export type MimeType = 'json' | 'image';
export type FetchServiceOptions = {
  requiresAuthorization: boolean;
  payload?: any;
  onFailCallback?: () => void;
};

export interface User {
  uuid?: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
  graduationYear: number;
  major: string;
  bio: string;
  points: number;
}

export interface UserResponse {
  error?: string;
  user: User;
}

export interface MerchCollection {
  uuid: string;
  title: string;
  description: string;
  items: MerchItem[];
}

export interface MerchItem {
  uuid: string;
  itemName: string;
  collection: MerchCollection;
  picture: string;
  price: number;
  description: string;
  discountPercentage: number;
  monthlyLimit: number;
  lifetimeLimit: number;
}

export interface OrderItem {
  uuid: string;
  extras?: string[];
  item: MerchItem;
  salePriceAtPurchase: number;
  discountPercentageAtPurchase: number;
  fulfilled: boolean;
  quantity?: number;
  fulfilledAt?: Date;
  notes?: string;
  scratchNote?: string;
}

export interface Order {
  uuid: string;
  user: string;
  userInfo?: User;
  totalCost: number;
  orderedAt: Date;
  items: OrderItem[];
}

export interface PatchOrderItemPayload {
  uuid: string;
  fulfilled?: boolean;
  notes?: string;
}
