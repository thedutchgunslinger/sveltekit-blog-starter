
<script>
    let cdnContent;
    let npmContent;

    // cdnContent.style.display = 'block';
    // npmContent.style.display = 'none';
    function showTry() {
        cdnContent.style.display = 'block';
        npmContent.style.display = 'none';
    }

    function showAnswer() {
      cdnContent.style.display = 'none';
      npmContent.style.display = 'block';
    }

</script>

<div class="cdnOrNpm">
    <h3>Try it yourself</h3>
    <span bind:this={cdnContent}>
        <slot name="try"/>
    </span>
    <span bind:this={npmContent} style="display: none">
        <slot name="answer"/>
    </span>
    <span class="cdnOrNpmBtns">
        <button on:click={showTry}>Try yourself</button>
        <button on:click={showAnswer}>Show me the answer</button>
    </span>
</div>

