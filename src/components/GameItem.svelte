<script>
  export let match;
  console.log(match);
</script>

{#if match.result === "win"}
  <div class="win">
    <div class="GameStats">
      <div class="GameType">일반</div>
      <div class="TimeStamp">2달전</div>
      <div class="Bar" />
      <div class="GameResult">승리</div>
      <div class="GameLength">17분 52초</div>
    </div>
    <div class="wrapper">
      <div class="GameSettingInfo">
        <div>
          <img src={`img/${match.champion}.png`} alt={match.champion} />
        </div>
        <div>
          <div>
            <img
              class="spell"
              src={`img/${match.spell1}.png`}
              alt={match.spell1}
            />
          </div>
          <div>
            <img
              class="spell"
              src={`img/${match.spell2}.png`}
              alt={match.spell2}
            />
          </div>
        </div>
        <div>
          <div>
            <img
              class="rune"
              src={`img/${match.rune1}.png`}
              alt={match.rune1}
            />
          </div>
          <div>
            <img
              class="rune"
              src={`img/${match.rune2}.png`}
              alt={match.rune2}
            />
          </div>
        </div>
      </div>
      <div class="champ_name">{match.champion}</div>
    </div>
    <div class="KDA_container">
      <div class="KDA">
        {match.kill} / <span class="KDA_death">{match.death}</span> / {match.assist}
      </div>
      <div class="KDARatio">
        {((match.kill + match.assist) / match.death).toFixed(2)} 평점
      </div>
    </div>
    <div class="Stats">
      <div class="Level">레벨 {match.level}</div>
      <div class="CS">{match.cs} CS</div>
    </div>
    <div class="ItemListWrapper">
      <div class="ItemList">
        <div class="Item" />
        <div class="Item" />
        <div class="Item" />
        <div class="Item" />
        <div class="Item" />
        <div class="Item" />
        <div class="Item" />
      </div>
    </div>
  </div>
{:else}
  <div class="lose" />
{/if}

<style>
  .win {
    display: flex;
    justify-content: space-between;
    width: 690px;
    height: 98px;
    background-color: rgb(172, 206, 233);
  }

  .lose {
    width: 690px;
    height: 98px;
    background-color: rgb(219, 184, 180);
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .GameStats {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: #555;
  }

  .GameType {
    font-weight: bold;
  }

  .GameResult {
    color: #1a78ae;
  }

  .Bar {
    display: block;
    width: 27px;
    height: 2px;
    background-color: #99b9cf;
    margin: 5px auto;
  }

  .GameSettingInfo {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .spell,
  .rune {
    width: 22px;
    height: 22px;
    border-radius: 5px;
    margin: 1px;
  }

  .champ_name {
    margin-top: 2px;
    font-size: 13px;
    color: #555;
    font-weight: bold;
  }

  .KDA_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #879292;
  }

  .KDA {
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 4px;
  }

  .KDARatio {
    color: #353a3a;
    font-weight: bold;
    font-size: 12px;
  }

  .KDA_death {
    color: #c6443e;
  }

  .Stats {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    color: #555e5e;
  }

  .ItemListWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ItemList {
    display: grid;
    grid-template-rows: 25px 25px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .Item {
    width: 22px;
    height: 22px;
    border-radius: 3px;
    margin-top: 2px;
    margin-right: 2px;
    background-color: #a7a7a7;
  }
</style>
