<script>
  import { link } from "svelte-spa-router";
  import Searchbar from "./Searchbar.svelte";
</script>

<header>
  <div class="wrapper">
    <div class="logo">
      <a href="/" use:link> Svelte.GG </a>
    </div>
    <div class="search">
      <Searchbar size="small" />
    </div>
  </div>
</header>

<style>
  header {
    width: 100%;
    background-color: rgb(94, 130, 225);
  }

  .wrapper {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    margin-left: 50px;
  }

  .search {
    margin-right: 50px;
  }

  a {
    text-decoration-line: none;
    color: #fff;
    font-size: 25px;
  }
</style>
