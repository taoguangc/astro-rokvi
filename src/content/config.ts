import { z, defineCollection } from 'astro:content'

const postsCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.date(),
			image: image(),
			author: z.string(),
			tags: z.array(z.string())
		})
})

const worksCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.date(),
			type: z.string(),
			task: z.string(),
			strategy: z.string().optional(),
			tools: z.string().optional(),
			client: z.string().optional(),
			image: image()
		})
})

export const collections = {
	posts: postsCollection,
	works: worksCollection
}
