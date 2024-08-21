import type { Post } from '~/types'

let _posts: Array<Post>

export const fetchPosts = async (): Promise<Array<Post>> => {
	if (!_posts) {
		_posts = await load()
	}

	return _posts
}

export const findLatestPosts = async ({ count }: { count?: number }): Promise<Array<Post>> => {
	const _count = count || 4
	const posts = await fetchPosts()

	return posts ? posts.slice(0, _count) : []
}
