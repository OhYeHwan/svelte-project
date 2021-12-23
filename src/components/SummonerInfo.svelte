<script>
  export let name = "소환사 명";
</script>

<div class="container">
  <div class="container__icon">Icon</div>
  <div class="container__info">
    {name}
  </div>
</div>

<style>
  .container {
    margin-top: 10px;
    display: flex;
    align-items: center;
    width: 680px;
    height: 180px;
    border: rgb(215, 215, 215) 1px solid;
  }

  .container__icon {
    margin: 0 20px 0 20px;
    width: 120px;
    height: 120px;
    background-color: black;
  }

  .container__info {
    display: flex;
    align-items: center;
    font-size: 30px;
  }
</style>
