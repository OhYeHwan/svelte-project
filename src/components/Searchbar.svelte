<script>
  import { push } from "svelte-spa-router";
  import { users } from "../store";

  let user_name;
  export let size = "normal";

  const searchUser = () => {
    const user = $users.filter((user) => user.user_name === user_name);
    push(`/summoner/${user}`);
  };
</script>

<form class={size}>
  <input
    bind:value={user_name}
    on:keydown={(e) => {
      e.key === "Enter" && console.log(user_name);
    }}
    placeholder="소환사명, 소환사명, ..."
  />
  <button class={`button__${size}`} on:click={() => searchUser()}> .GG </button>
</form>

<style>
  form {
    display: flex;
    align-items: center;
    background-color: #fff;
  }

  .normal {
    height: 50px;
  }

  .small {
    width: 350px;
    height: 30px;
  }

  input {
    width: 624px;
    padding-left: 10px;
    margin: 0;
    border: none;
    outline: none;
    color: rgb(140, 140, 140);
  }

  button {
    margin: 0 10px 0 10px;
    border: none;
    color: #fff;
    background-color: rgb(75, 166, 248);
  }

  .button__normal {
    width: 50px;
    height: 30px;
  }

  .button__small {
    width: 40px;
    height: 20px;
    font-size: 10px;
  }
</style>
