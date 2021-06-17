import { Bid } from "./Bid";

export interface Order {
    id: string;
    make: string;
    model: string;
    year: number;
    version: string;
    km: number;
    remainingTime: number;
    imageUrl: string;
    bids: Bid[];
}