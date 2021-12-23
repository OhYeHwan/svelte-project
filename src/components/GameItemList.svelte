<script>
  import GameItem from "./GameItem.svelte";
  export let match_list;
</script>

<ul>
  {#each match_list as match}
    <li><GameItem {match} /></li>
  {/each}
</ul>

<style>
  ul {
    padding: 0;
  }

  li {
    list-style: none;
    margin-bottom: 16px;
  }
</style>
