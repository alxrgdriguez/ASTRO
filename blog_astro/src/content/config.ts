import { defineCollection, z } from "astro:content";


const blogCollection = defineCollection({
    type: "content",
    schema: ({image}) => z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(), 
        image: image(),

        // Relacion
        author:z.string(), 

        //Relacion
        tags: z.array(z.string()),
    }),

});

export const collections = {
    blog: blogCollection,
};