<script>
  export let result;
</script>

{#if result === "win"}
  <div class="win">win</div>
{:else}
  <div class="lose">lose</div>
{/if}

<style>
  .win {
    width: 690px;
    height: 98px;
    background-color: rgb(172, 206, 233);
  }

  .lose {
    width: 690px;
    height: 98px;
    background-color: rgb(219, 184, 180);
  }
</style>
