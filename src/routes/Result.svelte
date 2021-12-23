<script>
  import SummonerInfo from "../components/SummonerInfo.svelte";
  import GameItemList from "../components/GameItemList.svelte";
  import Header from "../components/Header.svelte";
  import SummonerNotFound from "../components/SummonerNotFound.svelte";
  import { users } from "../store";
  import { beforeUpdate } from "svelte";

  export let params = {};
  let user = {};

  beforeUpdate(() => {
    user = $users.filter((user) => user.user_name === params.username);
  });
</script>

<main>
  <Header />
  {#if user.length === 0}
    <SummonerNotFound />
  {:else}
    <SummonerInfo user_name={user[0].user_name} user_info={user[0].user_info} />
    <GameItemList match_list={user[0].match_list} />
  {/if}
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    background-color: rgb(231, 231, 231);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
  }
</style>
