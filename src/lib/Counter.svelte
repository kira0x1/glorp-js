<script lang="ts">
  let count: number = $derived(0);
  const increment = () => {
    count += 1;
  };
</script>

<button onclick={increment}>
  count is {count}
</button>
