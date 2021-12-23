<script>
  import SummonerInfo from "../components/SummonerInfo.svelte";
  import GameItemList from "../components/GameItemList.svelte";
  import Header from "../components/Header.svelte";
  import SummonerNotFound from "../components/SummonerNotFound.svelte";

  export let params = {};
  console.log(params.username);
</script>

<main>
  <Header />
  <SummonerNotFound />
  <SummonerInfo />
  <GameItemList />
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
