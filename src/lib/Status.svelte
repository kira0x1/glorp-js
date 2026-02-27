<script lang="ts">
  let { text = "", img = null } = $props();
</script>

<div class="status">
  {#if img}
    <div id="status-img">
      <img src={img} alt="img" />
    </div>
  {/if}
  <span id="status-text">{text}</span>
</div>

<style>
  .status {
    display: flex;
    border: 6px inset #838383;

    /* (header width / status count ) - gap / 2 */
    width: calc(50% - 5px);

    height: 58px;
    flex-direction: row;
    background-color: rgb(110, 110, 110);
    color: #ccc;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 6px;
    padding-top: 6px;
  }

  #status-text {
    color: #ccc;
    flex-grow: 1;
    font-size: 1.3rem;
    padding: 2px;
  }

  img {
    height: 100%;
    display: block;
    box-sizing: border-box;
  }
</style>
