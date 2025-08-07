import type { paymentMethod } from "../types/paymentMethod";
import type { status } from "../types/status";
import type { tag } from "../types/tag";

export interface mobileCxt
{
    isMobile: boolean;
    checkIsMobile: () => void;
}

export interface Children
{
    children: React.ReactNode;
}

export interface User
{
    _id: string;
    username: string;
    email: string;
    image: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    __v: number
    recentSearchedCities: Array<string>;

}

export interface Hotel
{
    _id: string;
    name: string;
    address: string;
    contact: string;
    owner: User;
    city: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface HotelRoom {
    _id: string;
    hotel: Hotel;
    roomType: string;
    pricePerNight: number;
    amenities: Array<string>;
    images: Array<string>;
    tag: tag;
    isAvailable: boolean;
    rating: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface HotelRoomProp {
    hotel: HotelRoom;
}

export interface UserBooking {
    _id: string;
    user: User;
    room: HotelRoom;
    hotel: Hotel;
    checkInDate: string;
    checkOutDate: string;
    totalPrice: number;
    guests: number;
    status: status;
    paymentMethod: paymentMethod;
    isPaid: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
}