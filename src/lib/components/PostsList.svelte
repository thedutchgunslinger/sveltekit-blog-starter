<script>
	export let posts = []

	function playVideo(){
		this.play();
	}

	function pauseVideo(){
		this.pause();
	}


</script>


<ul class="posts-list">
	{#each posts as post}
		<li class>
			<article>
				<div class="img">

					<a href="/blog/{post.slug}" class="videoOverlay">
						<!-- <img
						src={post.coverImage}
						alt=""
						width={post.coverWidth}
						height={post.coverHeight}
						style="ratio: {post.coverWidth} / {post.coverHeight}"
						/> -->
						<span class="videoOverlay">

							<video muted loop style="aspect-ratio: {post.coverWidth} / {post.coverHeight}" on:mouseenter={playVideo} on:mouseleave={pauseVideo}>
								<source src={post.coverImage} type="video/mp4">
								</video>
							</span>

						<!-- <h2>
							{post.title}
						</h2> -->
					</a>
				</div>
				<div class="text">
					<div>

						<a href="/blog/{post.slug}">
							<h2>
								{post.title}
							</h2>
						</a>
						<hr>
						<p>{post.excerpt}</p>
					</div>	
					<div>

						<a href="/blog/{post.slug}" class="btn">See More</a>
						<div class="cat">
							{#each post.categories as category}
							<a class="catBadge" href="/blog/category/{category}">{category}</a>
							{/each	}
						</div>
					</div>
				</div>
			</article>

		</li>
	{/each}
</ul>