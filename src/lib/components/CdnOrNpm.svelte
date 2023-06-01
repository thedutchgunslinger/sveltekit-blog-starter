
<script>
    let cdnContent;
    let npmContent;

    // cdnContent.style.display = 'block';
    // npmContent.style.display = 'none';
    function showCdn() {
        cdnContent.style.display = 'block';
        npmContent.style.display = 'none';
    }

    function showNpm() {
      cdnContent.style.display = 'none';
      npmContent.style.display = 'block';
    }

</script>

<div class="cdnOrNpm">
    <p class="cdnOrNpmText">I wanna use it with:</p>
    <span class="cdnOrNpmBtns">
        <button on:click={showCdn}>CDN</button>
        <button on:click={showNpm}>NPM</button>
    </span>

    <span bind:this={cdnContent}>
        <slot name="cdn"/>
    </span>
    <span bind:this={npmContent} style="display: none">
        <slot name="npm"/>
    </span>
</div>

