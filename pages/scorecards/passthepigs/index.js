import DefaultLayout from "../../../layouts/Default";
import PageTitle from "../../../components/PageTitle";
import PageContent from "../../../components/PageContent";
import styles from "./style.module.scss";
import { useState } from "react";

export default function PassThePigs() {
  const [players, setPlayers] = useState([
    { id: 0, name: "Player 1" },
    { id: 1, name: "Player 2" },
  ]);
  const [rounds, setRounds] = useState([]);

  const addRound = () => {
    const round = { scores: {} };
    players.forEach((player) => {
      round.scores[player.id] = 1;
    });
    setRounds([...rounds, round]);
  };

  console.log(rounds);
  return (
    <DefaultLayout>
      <PageTitle>
        <h1>Pass the Pigs</h1>
      </PageTitle>
      <PageContent>
        <table className={styles.table}>
          <thead>
            <tr>
              {players.map((player, idx) => (
                <th key={`player_${idx}`}>{player.name}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rounds.map((round, idx) => (
              <tr key={`round_${idx}`}>
                {players.map((player) => (
                  <td key={`player_${idx}_${player.id}`}>
                    {round.scores[player.id]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <a onClick={addRound}>Add round</a>
      </PageContent>
    </DefaultLayout>
  );
}
