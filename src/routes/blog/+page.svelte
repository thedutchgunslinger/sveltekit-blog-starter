<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import { siteDescription } from '$lib/config'

	export let data

	// in data we have posts, posts is an array sort it by date
	let newData = data.posts.sort((a, b) => {

		return new Date(b.date) - new Date(a.date)
	})
	// console.log(newData)
</script>


<svelte:head>
	<title>All Tutorials</title>
	<meta data-key="description" name="description" content={siteDescription}>
</svelte:head>

<h1>All Tutorials</h1>

<PostsList posts={newData} />

<Pagination currentPage={1} totalPosts={data.total} />