/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('game').insert([
    {
      released: "2021-05-06T17:00:00.000Z",
      name: "Resident Evil Village",
      price: 62.25,
      image: "https://i.imgur.com/3tKsy8s.png",
      intro: "Experience survival horror like never before in the eighth major installment in the storied Resident Evil franchise - Resident Evil Village.\nSet a few years after the horrifying events in the critically acclaimed Resident Evil 7 biohazard, the all-new storyline begins with Ethan Winters and his wife Mia living peacefully in a new location, free from their past nightmares. Just as they are building their new life together, tragedy befalls them once again.\nFirst-Person Action – Players will assume the role of Ethan Winters and experience every up-close battle and terrifying pursuit through a first-person perspective.\nFamiliar Faces and New Foes – Chris Redfield has typically been a hero in the Resident Evil series, but his appearance in Resident Evil Village seemingly shrouds him in sinister motives. A host of new adversaries inhabiting the village will relentlessly hunt Ethan and hinder his every move as he attempts to make sense of the new nightmare he finds himself in.",
    },
    {
      released: "2012-08-21T17:00:00.000Z",
      name: "Counter-Strike: Global Offensive",
      price: 15.42,
      image: "https://i.imgur.com/Js4ee4X.jpg",
      intro: "Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago.\nCS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.).\nCounter-Strike took the gaming industry by surprise when the unlikely MOD became the most played online PC action game in the world almost immediately after its release in August 1999, said Doug Lombardi at Valve. For the past 12 years, it has continued to be one of the most-played games in the world, headline competitive gaming tournaments and selling over 25 million units worldwide across the franchise. CS: GO promises to expand on CS' award-winning gameplay and deliver it to gamers on the PC as well as the next gen consoles and the Mac",
    },
    {
      released: "2011-04-18T17:00:00.000Z",
      name: "Portal 2",
      price: 9.99,
      image: "https://i.imgur.com/oBfMphQ.jpg",
      intro: "Portal 2 draws from the award-winning formula of innovative gameplay, story, and music that earned the original Portal over 70 industry accolades and created a cult following.\nThe single-player portion of Portal 2 introduces a cast of dynamic new characters, a host of fresh puzzle elements, and a much larger set of devious test chambers. Players will explore never-before-seen areas of the Aperture Science Labs and be reunited with GLaDOS, the occasionally murderous computer companion who guided them through the original game.\nThe game’s two-player cooperative mode features its own entirely separate campaign with a unique story, test chambers, and two new player characters. This new mode forces players to reconsider everything they thought they knew about portals. Success will require them to not just act cooperatively, but to think cooperatively.",
    },
    {
      released: "2016-06-13T17:00:00.000Z",
      name: "Dead by Daylight 2",
      price: 11.05,
      image: "https://i.imgur.com/h0FayqO.jpg",
      // deleted: new Date(),
      intro: "Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught, tortured and killed.",
    },
    {
      released: "2016-06-13T17:00:00.000Z",
      name: "Phasmophobia",
      price: 8.05,
      image: "https://i.imgur.com/KGAi9S9.jpg",
      intro: "Phasmophobia is a 4 player online co-op psychological horror where you and your team members of paranormal investigators will enter haunted locations filled with paranormal activity and gather as much evidence of the paranormal as you can. You will use your ghost hunting equipment to search for and record evidence of whatever ghost is haunting the location to sell onto a ghost removal team.\nYou can choose to support your team by monitoring the location with CCTV cameras and motion sensors from the safety of the truck or head inside and get your hands dirty with the ghostly activity that will get increasingly hostile as time goes on.",
    },
    {
      released: "2004-12-23T17:00:00.000Z",
      name: "CSD2",
      price: 0.99,
      image: "https://i.imgur.com/JPWxIr1.jpg",
      intro: "Two teams fight each other in action packed matches. With a variety of missions like bomb planting, hostage rescue, V.I.P. assassination, capture the flag, construction, zombies, deathmatch and team deathmatch. You have access to a huge arsenal of weapons - also including crazy stuff like portal guns, lasers, RPGs and much more. Play online, in LAN or against bots. Use the built-in map editor to create your own maps within seconds or write Lua scripts to modify and extend the game!",
    },
    {
      released: "2020-03-22T17:00:00.000Z",
      name: "Half-Life: Alyx",
      price: 24.99,
      image: "https://i.imgur.com/NpCIrAw.jpg",
      intro: "Half-Life: Alyx is Valve’s VR return to the Half-Life series. It’s the story of an impossible fight against a vicious alien race known as the Combine, set between the events of Half-Life and Half-Life 2.\nPlaying as Alyx Vance, you are humanity’s only chance for survival. The Combine’s control of the planet since the Black Mesa incident has only strengthened as they corral the remaining population in cities. Among them are some of Earth’s greatest scientists: you and your father, Dr. Eli Vance.\nAs founders of a fledgling resistance, you’ve continued your clandestine scientific activity—performing critical research, and building invaluable tools for the few humans brave enough to defy the Combine.\nEvery day, you learn more about your enemy, and every day you work toward finding a weakness.",
    },
    {
      released: "2020-07-28T17:00:00.000Z",
      name: "Grounded",
      price: 15,
      image: "https://i.imgur.com/m41fljs.jpg",
      intro: "The world is a vast, beautiful and dangerous place – especially when you have been shrunk to the size of an ant. Explore, build and survive together in this first person, multiplayer, survival-adventure. Can you thrive alongside the hordes of giant insects, fighting to survive the perils of the backyard?",
    },
    {
      released: "2022-02-24T17:00:00.000Z",
      name: "ELDEN RING",
      price: 38.01,
      image: "https://i.imgur.com/5NkqCe2.jpg",
      intro: "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
    },
    {
      released: "2022-02-03T17:00:00.000Z",
      name: "Dying Light 2 Stay Human",
      price: 43.76,
      image: "https://i.imgur.com/45IxJSW.jpg",
      intro: "Over twenty years ago in Harran, we fought the virus—and lost. Now, we’re losing again. The City, one of the last large human settlements, is torn by conflict. Civilization has fallen back into the Dark Ages. And yet, we still have hope.\nYou are a wanderer with the power to change the fate of The City. But your exceptional abilities come at a price. Haunted by memories you cannot decipher, you set out to learn the truth… and find yourself in a combat zone. Hone your skills, as to defeat your enemies and make allies, you’ll need both fists and wits. Unravel the dark secrets behind the wielders of power, choose sides and decide your destiny. But wherever your actions take you, there's one thing you can never forget—stay human.",
    },
    {
      released: "2017-12-20T17:00:00.000Z",
      name: "PUBG: BATTLEGROUNDS",
      price: 9.72,
      image: "https://i.imgur.com/SsNyNKg.jpg",
      intro: "Land on strategic locations, loot weapons and supplies, and survive to become the last team standing across various, diverse Battlegrounds.",
    },
  ]);
};
