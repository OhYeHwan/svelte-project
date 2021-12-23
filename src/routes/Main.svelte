<script>
  import Logo from "../components/Logo.svelte";
  import Searchbar from "../components/Searchbar.svelte";
</script>

<main>
  <Logo name={"Svelte.GG"} />
  <Searchbar />
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(94, 130, 225);
  }
</style>
