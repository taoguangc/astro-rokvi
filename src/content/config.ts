import { z, defineCollection } from 'astro:content'

const postsCollection = defineCollection({
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
			main: z.object({
				id: z.number(),
				content: z.string(),
				imgCard: image(),
				imgMain: image(),
				imgAlt: z.string()
			}),
			tabs: z.array(
				z.object({
					id: z.string(),
					dataTab: z.string(),
					title: z.string()
				})
			),
			longDescription: z.object({
				title: z.string(),
				subTitle: z.string(),
				btnTitle: z.string(),
				btnURL: z.string()
			}),
			descriptionList: z.array(
				z.object({
					title: z.string(),
					subTitle: z.string()
				})
			),
			specificationsLeft: z.array(
				z.object({
					title: z.string(),
					subTitle: z.string()
				})
			),
			specificationsRight: z
				.array(
					z.object({
						title: z.string(),
						subTitle: z.string()
					})
				)
				.optional(),
			tableData: z
				.array(
					z.object({
						feature: z.array(z.string()),
						description: z.array(z.array(z.string()))
					})
				)
				.optional(),
			blueprints: z.object({
				first: image().optional(),
				second: image().optional()
			})
		})
})

export const collections = {
	posts: postsCollection,
	works: worksCollection
}
