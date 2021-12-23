<script>
  export let user_name = "소환사 명";
  export let user_info;

  let src = "/img";
</script>

<div class="container">
  <div class="container__stat">
    <img
      class="container__stat__icon"
      src={`${src}/${user_info.tier}.png`}
      alt="tier"
    />
    <div class="container__stat__info">
      <div class="container__info__name">{user_name}</div>
      <div class="container__info__ranking">
        <!-- svelte-ignore a11y-missing-attribute -->
        래더 랭킹 <a>{user_info.ranking}</a>위
      </div>
      <div class="RankType">솔로랭크</div>
      <div class="TierRank">{user_info.tier} {user_info.tier_num}</div>
      <div class="TierInfo">
        <span class="LeaguePoints">{user_info.point} LP </span>/
        <span class="WinLose">{user_info.win}승 {user_info.lose}패</span>
      </div>
      <div class="WinRatio">
        {`승률 : ${Math.round(
          (user_info.win / (user_info.win + user_info.lose)) * 100
        )}%`}
      </div>
    </div>
  </div>
</div>

<style>
  .container {
    margin-top: 10px;
    display: flex;
    align-items: center;
    width: 680px;
    height: 180px;
    border-bottom: rgb(215, 215, 215) 1px solid;
  }

  .container__stat {
    display: flex;
  }

  .container__stat__info {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
  }

  .container__stat__icon {
    margin: 20px 20px 20px 20px;
    width: 120px;
    height: 120px;
  }

  .RankType {
    font-size: 11px;
    color: #879292;
  }

  .TierRank {
    font-size: 15px;
    font-weight: bold;
    color: #1f8ecd;
  }

  .TierInfo {
    font-size: 12px;
  }

  .LeaguePoints {
    color: #555e5e;
    font-weight: bold;
  }

  .WinLose {
    color: #879292;
  }

  .WinRatio {
    font-size: 12px;
    color: #879292;
  }

  .container__info__name {
    color: #242929;
    font-size: 20px;
    font-weight: bold;
  }

  .container__info__ranking {
    font-size: 13px;
    color: #879292;
    margin-bottom: 8px;
  }
</style>
