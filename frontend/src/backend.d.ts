import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface RestaurantInfo {
    hours: string;
    address: string;
    phone: string;
}
export interface MenuItem {
    name: string;
    description: string;
    category: string;
    price: number;
}
export interface backendInterface {
    addMenuItem(name: string, description: string, price: number, category: string): Promise<void>;
    getMenuItems(): Promise<Array<MenuItem>>;
    getRestaurantInfo(): Promise<RestaurantInfo | null>;
    getSpecialties(): Promise<Array<string>>;
    setRestaurantInfo(address: string, phone: string, hours: string): Promise<void>;
    setSpecialties(specialtyList: Array<string>): Promise<void>;
}
