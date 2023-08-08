import logo from './logo.svg';
import './App.css';
import Accordion from './Accordion';

const topics = [
  {
    id: 0,
    title: 'Monkey D. Luffy',
    summary:
      'Monkey D. Luffy is the captain of the Straw Hat Pirates, and dreamt of being a pirate since childhood from the influence of his idol and mentor Red-Haired Shanks. At the age of 17, Luffy sets sail from the East Blue Sea to the Grand Line in search of the legendary treasure, One Piece, to succeed Gol D. Roger as "King of the Pirates".',
  },
  {
    id: 1,
    title: 'Roronoa Zoro',
    summary:
      "Roronoa Zoro, also known as 'Pirate Hunter' Zoro is a fictional character created by Japanese manga artist Eiichiro Oda who appears in the manga series and media franchise One Piece. He first appeared in the third chapter of the One Piece manga, published in the manga magazine Weekly Shōnen Jump in 1997. Zoro is the first crewmate to join the Straw Hat Pirates, a crew of pirates captained by Monkey D. Luffy, after he is rescued by Luffy from execution. Zoro is a highly skilled swordsman and serves as one of the crew's main combatants, though he possesses an extremely poor sense of direction which recurs as a running gag throughout the series.",
  },
  {
    id: 2,
    title: 'Vinsmoke Sanji',
    summary:
      'A native to the North Blue, Sanji grew up as part of the Vinsmoke family under his father Vinsmoke Judge, king of the Germa Kingdom, and mother Vinsmoke Sora. Living under a grueling father who only saw Sanji as a soldier, he escapes to Baratie where he learns to cook under “Red Leg” Zeff and learns his fighting style, which is characterized by the use of legs in combat. Sanji is the fifth member and the fourth to join Monkey D. Luffy’s pirate crew as cook after the battle against Don Krieg.',
  },
];

function App() {
  return (
    <div className="App">
      <Accordion topics={topics} />
    </div>
  );
}

export default App;
