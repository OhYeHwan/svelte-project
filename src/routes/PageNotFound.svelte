<script>
  import Header from "../components/Header.svelte";
  export let params = {};
  console.log(params);
</script>

<main>
  <Header />
  <div>404</div>
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
