<script>
  import GameItem from "./GameItem.svelte";

  let games = [
    { id: 1, result: "win" },
    { id: 2, result: "lose" },
    { id: 3, result: "win" },
    { id: 4, result: "win" },
    { id: 5, result: "win" },
    { id: 6, result: "lose" },
    { id: 7, result: "lose" },
    { id: 8, result: "lose" },
    { id: 9, result: "win" },
    { id: 10, result: "win" },
  ];
</script>

<ul>
  {#each games as game}
    <li><GameItem result={game.result} /></li>
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
