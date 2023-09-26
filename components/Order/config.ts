import { Bags, Order } from "@/image/image";
import { BlockItem } from "./interface";

export const block: BlockItem[] = [
    {
        orders: "All Orders",
        pending: "Pending",
        completed: "Completed",
        image: Order,
    },
    {
        orders: "Canceled",
        pending: "Returned",
        completed: "Damaged",
        image: Order,
    },
    {
        orders: "Abandoned Cart",
        pending: "Customers",
        image: Bags,
    },
];