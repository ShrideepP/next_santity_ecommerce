import imageUrlBuilder from '@sanity/image-url';
import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: "xewqcq0a",
    dataset: "production",
    apiVersion: "2023-04-14",
    useCdn: true,
    token: process.env.NEXT_SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);