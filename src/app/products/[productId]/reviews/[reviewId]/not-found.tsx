"use client"
import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();
    const productId = pathname.split('/')[2];
    const reviewId = pathname.split('/')[4];
    return (
        <div>
            <h1>404 - Not Found for review {reviewId} for product {productId}</h1>
        </div>
    );
}