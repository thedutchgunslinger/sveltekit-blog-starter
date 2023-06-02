<script>
	export let data;
	const { uniqueCategories } = data;

	function handleMouseMove(e) {
		for (const card of document.getElementsByClassName('card')) {
			const rect = card.getBoundingClientRect(),
				x = e.clientX - rect.left,
				y = e.clientY - rect.top;

			card.style.setProperty('--mouse-x', `${x}px`);
			card.style.setProperty('--mouse-y', `${y}px`);
		}
	}
</script>

<svelte:head>
	<title>Blog | Categories</title>
</svelte:head>

<div class="compressed-content">
	<h1 class="h2">Tutorials</h1>
	<h2>Featured</h2>
	<!-- <ul id="featuredCat">
		<a href="/blog/category/webxr"><li><i class="fa-solid fa-vr-cardboard"></i>&nbsp; WebXR</li></a>
		<a href="/blog/category/html"><li>HTML</li></a>
		<a href="/blog/category/css"><li>CSS</li></a>
		<a href="/blog/category/js"><li>JS</li></a>
		<a href="/blog/category/react"><li>React</li></a>
		<a href="/blog/"><li>All</li></a>
	</ul> -->

	<div id="featuredCat" on:mousemove={handleMouseMove}>
		<a class="card" href="/blog/category/webxr">
			<div class="card-content">
				<i class="fa-solid fa-vr-cardboard" />

				<h3>WebXR</h3>
			</div>
		</a>
		<a class="card" href="/blog/category/games">
			<div class="card-content">
				<i class="fa-solid fa-gamepad" />

				<h3>Games</h3>
			</div>
		</a>
		<a class="card" href="/blog/category/html">
			<div class="card-content">
				<i class="fa-brands fa-html5" />

				<h3>HTML</h3>
			</div>
		</a>
		<a class="card" href="/blog/category/css">
			<div class="card-content">
				<i class="fa-brands fa-css3-alt" />

				<h3>CSS</h3>
			</div>
		</a>
		<a class="card" href="/blog/category/js">
			<div class="card-content">
				<i class="fa-brands fa-square-js" />

				<h3>JS</h3>
			</div>
		</a>
		<a class="card" href="/blog">
			<div class="card-content">
				<i class="fa-solid fa-grip" />

				<h3>All</h3>
			</div>
		</a>
	</div>
	<h2>All</h2>
	<ul id="allCat">
		{#each uniqueCategories as category}
		<a href="/blog/category/{category.title}">
			<li>
				<p>
						{category.title}&nbsp;
						({category.count})
				</p>
				</li>
			</a>
		{/each}
	</ul>
</div>
