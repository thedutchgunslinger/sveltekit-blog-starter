---
title: 'test post'
date: '2023-06-01'
updated: '2023-06-01'
categories:
  - 'test'
coverImage: '/videos/bunny.mp4'
coverWidth: 16
coverHeight: 9
excerpt: Make your own custom mouse following cursor using HTML, CSS and JS.
---

<script>
	import CdnOrNpm from '$lib/components/CdnOrNpm.svelte';
</script>

<CdnOrNpm>
<span slot="cdn">

## cdn


```js
const test = 'lets use a cdn';
```

cdnnnn
</span>
<span slot="npm">

## npm


```js
const test = 'lets use npm';
```

npmmm
</span>
</CdnOrNpm>
