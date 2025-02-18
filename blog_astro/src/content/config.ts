import { defineCollection, reference, z } from "astro:content";


const blogCollection = defineCollection({
    type: "content",
    schema: ({image}) => z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(), 
        image: image(),

        // Relacion
        // author:z.string(), 
        author: reference('author'),

        //Relacion
        tags: z.array(z.string()),

        // Boolean 
        isDraft: z.boolean().default(false),
    }),

});

const authorCollection = defineCollection(
    {
        type: "data",
        schema: ({image}) => z.object({
            name: z.string(),
            avatar: image(),
        }),
    }
);
        

export const collections = {
    blog: blogCollection,
    author: authorCollection,
};