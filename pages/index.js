import { getAllChampions } from "../lib/champions";
import Image from "next/image";
import { Fragment } from "react/cjs/react.production.min";

const PORTRAIT_URL =
  "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons";

export default function Home({ champs }) {
  return (
    <div>
      <ul>
        {champs.map((champ) => (
          <li key={champ.id}>
            {champ.name}: {champ.roles}
            <Image
              src={PORTRAIT_URL + `/${champ.id}.png`}
              alt={"Champ portrait"}
              width={40}
              height={40}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const champs = await getAllChampions();
  return {
    props: {
      champs,
    },
  };
}
