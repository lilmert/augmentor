export async function getAllChampions() {
  const res = await fetch(
    "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-summary.json"
  );
  const data = await res.json();
  const champions = Promise.all(
    data.map(async (champion) => {
      return {
        ...champion,
        picture: await getChampionPortrait(champion.id),
      };
    })
  );

  return data;
}

export async function getChampionPortrait(championId) {
  const res = await fetch(
    `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${championId}.png`
  );
  const pic = await res.blob();
  return pic;
}
