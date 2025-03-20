"use client"

import { ENDPOINT } from "@/constants";
import Article from '@/components/article'

export default async function SSR({ params }) {
    console.log(params);
    const article = await fetch(`${ENDPOINT}/${params.id}`, {
        next: { revalidate: 60 }
    }).then(res => res.json());

    return (
        <>
            <div>SSR Page</div>
            <Article data={article} />
        </>
    )
}