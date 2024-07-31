
// типизация всего BlogPost-а
export type BlogPostType = { 
	id: number
	title:  string
	description:  string
	titleImage: string
	postDate : string
	timeToRead : number
}

export type BlogPostListType = Array<BlogPostType>
