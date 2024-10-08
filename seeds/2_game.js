/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  const games = [
    {
      released: "2021-05-06T17:00:00.000Z",
      name: "Resident Evil Village",
      price: 62.25,
      image: "https://i.imgur.com/3tKsy8s.png",
      size: "15.2GB",
      file: "ReVillage.exe",
      intro:
        "Experience survival horror like never before in the eighth major installment in the storied Resident Evil franchise - Resident Evil Village.\nSet a few years after the horrifying events in the critically acclaimed Resident Evil 7 biohazard, the all-new storyline begins with Ethan Winters and his wife Mia living peacefully in a new location, free from their past nightmares. Just as they are building their new life together, tragedy befalls them once again.\nFirst-Person Action – Players will assume the role of Ethan Winters and experience every up-close battle and terrifying pursuit through a first-person perspective.\nFamiliar Faces and New Foes – Chris Redfield has typically been a hero in the Resident Evil series, but his appearance in Resident Evil Village seemingly shrouds him in sinister motives. A host of new adversaries inhabiting the village will relentlessly hunt Ethan and hinder his every move as he attempts to make sense of the new nightmare he finds himself in.",
      tags: "Single Player, Survival, Horror, FPS, 3D, Shooter",
      developers: "CAPCOM Co., Ltd",
      publishers: "CAPCOM Co., Ltd",
    },
    {
      released: "2012-08-21T17:00:00.000Z",
      name: "Counter-Strike: Global Offensive",
      price: 15.42,
      image: "https://i.imgur.com/Js4ee4X.jpg",
      size: "2.7GB",
      file: "CSGO.exe",
      intro:
        "Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago.\nCS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.).\nCounter-Strike took the gaming industry by surprise when the unlikely MOD became the most played online PC action game in the world almost immediately after its release in August 1999, said Doug Lombardi at Valve. For the past 12 years, it has continued to be one of the most-played games in the world, headline competitive gaming tournaments and selling over 25 million units worldwide across the franchise. CS: GO promises to expand on CS' award-winning gameplay and deliver it to gamers on the PC as well as the next gen consoles and the Mac",
      tags: "FPS, Competitive, Shooter, Multiplayer, 3D",
      developers: "Valve, Hidden Path Entertainment",
      publishers: "Valve",
    },
    {
      released: "2011-04-18T17:00:00.000Z",
      name: "Portal 2",
      price: 9.99,
      image: "https://i.imgur.com/oBfMphQ.jpg",
      size: "1.5GB",
      file: "Portal2.exe",
      intro:
        "Portal 2 draws from the award-winning formula of innovative gameplay, story, and music that earned the original Portal over 70 industry accolades and created a cult following.\nThe single-player portion of Portal 2 introduces a cast of dynamic new characters, a host of fresh puzzle elements, and a much larger set of devious test chambers. Players will explore never-before-seen areas of the Aperture Science Labs and be reunited with GLaDOS, the occasionally murderous computer companion who guided them through the original game.\nThe game’s two-player cooperative mode features its own entirely separate campaign with a unique story, test chambers, and two new player characters. This new mode forces players to reconsider everything they thought they knew about portals. Success will require them to not just act cooperatively, but to think cooperatively.",
      tags: "Multiplayer, Puzzle, Co-op, FPS, 3D",
      developers: "Valve",
      publishers: "Valve",
    },
    {
      released: "2016-06-13T17:00:00.000Z",
      name: "Dead by Daylight 2",
      price: 11.05,
      image: "https://i.imgur.com/h0FayqO.jpg",
      size: "4GB",
      file: "DBDL2.exe",
      intro:
        "Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught, tortured and killed.",
      tags: "Horror, Multiplayer, 3D, Survival",
      developers: "Behaviour Interactive Inc",
      publishers: "Behaviour Interactive Inc",
    },
    {
      released: "2016-06-13T17:00:00.000Z",
      name: "Phasmophobia",
      price: 8.05,
      image: "https://i.imgur.com/KGAi9S9.jpg",
      size: "1.2GB",
      file: "Phasmophobia.exe",
      intro:
        "Phasmophobia is a 4 player online co-op psychological horror where you and your team members of paranormal investigators will enter haunted locations filled with paranormal activity and gather as much evidence of the paranormal as you can. You will use your ghost hunting equipment to search for and record evidence of whatever ghost is haunting the location to sell onto a ghost removal team.\nYou can choose to support your team by monitoring the location with CCTV cameras and motion sensors from the safety of the truck or head inside and get your hands dirty with the ghostly activity that will get increasingly hostile as time goes on.",
      tags: "Horror, Multiplayer, 3D, Puzzle, FPS",
      developers: "Kinetic Games",
      publishers: "Kinetic Games",
    },
    {
      released: "2004-12-23T17:00:00.000Z",
      name: "CSD2",
      price: 0.99,
      image: "https://i.imgur.com/JPWxIr1.jpg",
      size: "250MB",
      file: "CS2D.exe",
      intro:
        "Two teams fight each other in action packed matches. With a variety of missions like bomb planting, hostage rescue, V.I.P. assassination, capture the flag, construction, zombies, deathmatch and team deathmatch. You have access to a huge arsenal of weapons - also including crazy stuff like portal guns, lasers, RPGs and much more. Play online, in LAN or against bots. Use the built-in map editor to create your own maps within seconds or write Lua scripts to modify and extend the game!",
      tags: "Multiplayer, 2D, Shooter",
      developers: "Unreal Software",
      publishers: "Unreal Software",
    },
    {
      released: "2020-03-22T17:00:00.000Z",
      name: "Half-Life: Alyx",
      price: 24.99,
      image: "https://i.imgur.com/NpCIrAw.jpg",
      size: "3.5GB",
      file: "HalfLife_Alyx.exe",
      intro:
        "Half-Life: Alyx is Valve’s VR return to the Half-Life series. It’s the story of an impossible fight against a vicious alien race known as the Combine, set between the events of Half-Life and Half-Life 2.\nPlaying as Alyx Vance, you are humanity’s only chance for survival. The Combine’s control of the planet since the Black Mesa incident has only strengthened as they corral the remaining population in cities. Among them are some of Earth’s greatest scientists: you and your father, Dr. Eli Vance.\nAs founders of a fledgling resistance, you’ve continued your clandestine scientific activity—performing critical research, and building invaluable tools for the few humans brave enough to defy the Combine.\nEvery day, you learn more about your enemy, and every day you work toward finding a weakness.",
      tags: "Horror, VR, Single Player",
      developers: "Valve",
      publishers: "Valve",
    },
    {
      released: "2020-07-28T17:00:00.000Z",
      name: "Grounded",
      price: 15,
      image: "https://i.imgur.com/m41fljs.jpg",
      size: "7.2GB",
      file: "Grounded.exe",
      intro:
        "The world is a vast, beautiful and dangerous place – especially when you have been shrunk to the size of an ant. Explore, build and survive together in this first person, multiplayer, survival-adventure. Can you thrive alongside the hordes of giant insects, fighting to survive the perils of the backyard?",
      tags: "Survival, Multiplayer, Co-op, Open World, Crafting",
      developers: "Obsidian Entertainment",
      publishers: "Xbox Game Studios",
    },
    {
      released: "2022-02-24T17:00:00.000Z",
      name: "ELDEN RING",
      price: 38.01,
      image: "https://i.imgur.com/5NkqCe2.jpg",
      size: "24.8GB",
      file: "EldenRing.exe",
      intro:
        "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
      tags: "Open World, Single Player, RPG",
      developers: "FromSoftware Inc",
      publishers: "FromSoftware Inc, BANDAI NAMCO",
    },
    {
      released: "2022-02-03T17:00:00.000Z",
      name: "Dying Light 2 Stay Human",
      price: 43.76,
      image: "https://i.imgur.com/45IxJSW.jpg",
      size: "16.2GB",
      file: "DyingLight2.exe",
      intro:
        "Over twenty years ago in Harran, we fought the virus—and lost. Now, we’re losing again. The City, one of the last large human settlements, is torn by conflict. Civilization has fallen back into the Dark Ages. And yet, we still have hope.\nYou are a wanderer with the power to change the fate of The City. But your exceptional abilities come at a price. Haunted by memories you cannot decipher, you set out to learn the truth… and find yourself in a combat zone. Hone your skills, as to defeat your enemies and make allies, you’ll need both fists and wits. Unravel the dark secrets behind the wielders of power, choose sides and decide your destiny. But wherever your actions take you, there's one thing you can never forget—stay human.",
      tags: "Open World, Survival, Zombie, Co-op",
      developers: "Techland",
      publishers: "Techland",
    },
    {
      released: "2017-12-20T17:00:00.000Z",
      name: "PUBG: BATTLEGROUNDS",
      price: 9.72,
      image: "https://i.imgur.com/SsNyNKg.jpg",
      size: "3.4GB",
      file: "Pubg.exe",
      intro:
        "Land on strategic locations, loot weapons and supplies, and survive to become the last team standing across various, diverse Battlegrounds.",
      tags: "Multiplayer, Survival, Shooter",
      developers: "KRAFTON, Inc",
      publishers: "KRAFTON, Inc",
    },
    {
      released: "2020-11-04T17:00:00.000Z",
      name: "Apex Legends",
      price: 9.35,
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg?t=1664321959",
      intro:
        "Conquer with character in Apex Legends, a free-to-play* Hero shooter where legendary characters with powerful abilities team up to battle for fame & fortune on the fringes of the Frontier. \n Master an ever-growing roster of diverse Legends, deep-tactical squad play, and bold, new innovations that go beyond the Battle Royale experience — all within a rugged world where anything goes. Welcome to the next evolution of Hero Shooter.",
      tags: "Multiplayer, 3D, Competitive, Shooter",
      developers: "Respawn Entertainment",
      publishers: "Electronic Arts",
      size: "3.4GB",
      file: "AL.exe",
    },
    {
      released: "2021-08-11T17:00:00.000Z",
      name: "NARAKA: BLADEPOINT",
      price: 30.0,
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1203220/header.jpg?t=1660835947",
      intro:
        "The developers describe the content like this: \n This Game may contain content not appropriate for all ages, or may not be appropriate for viewing at work: Frequent Violence or Gore, General Mature Content",
      tags: "Multiplayer, Survival, Pvp",
      developers: "24 Entertainment",
      publishers: "Netease games",
      size: "3.8GB",
      file: "NARAKA.exe",
    },
    {
      released: "2020-12-09T17:00:00.000Z",
      name: "Cyberpunk 2077",
      price: 13.72,
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg?t=1663663573",
      intro:
        "Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival.",
      tags: "3D, Survival, Open World, RPG",
      developers: "CD PROJEKT RED",
      publishers: "CD PROJEKT RED",
      size: "6.4GB",
      file: "Cyper.exe",
    },
    {
      released: "2022-09-29T17:00:00.000Z",
      name: "BONELAB",
      price: 16.3,
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1592190/header.jpg?t=1664473845",
      intro:
        "The developers describe the content like this: \n Player uses physical combat, including firearms, melee weapons, and bare hands, to fight enemies ranging from robots to humans.",
      tags: "Sandbox, VR, Indie, Physics",
      developers: "Stress Level Zero",
      publishers: "Stress Level Zero",
      size: "1.2GB",
      file: "BONELAB.exe",
    },
    {
      released: "2017-10-29T17:00:00.000Z",
      name: "Middle-earth™: Shadow of War™",
      price: 3.01,
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/356190/header.jpg?t=1575317164",
      intro:
        "Go behind enemy lines to forge your army, conquer Fortresses and dominate Mordor from within. Experience how the award winning Nemesis System creates unique personal stories with every enemy and follower, and confront the full power of the Dark Lord Sauron and his Ringwraiths in this epic new story of Middle-earth. \n In Middle-earth™: Shadow of War™, nothing will be forgotten.",
      tags: "Open World, RPG, Action",
      developers: "Monolith Productions",
      publishers: "WB Games",
      size: "2.1GB",
      file: "MEShadowOfWar.exe",
    },
    {
      released: "2019-04-22T17:00:00.000Z",
      name: "Mortal Kombat 11",
      price: 31.1,
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/976310/header.jpg?t=1654216426",
      intro:
        "MK is back and better than ever in the next evolution of the iconic franchise. \n The all new Custom Character Variations give you unprecedented control of your fighters to make them your own. The new graphics engine showcases every skull-shattering, eye-popping moment, bringing you so close to the fight you can feel it. Featuring a roster of new and returning Klassic Fighters, Mortal Kombat's best-in-class cinematic story mode continues the epic saga over 25 years in the making.",
      tags: "Horror, Blood, Multiplayer",
      developers: "NetherRealm",
      publishers: "WB Games",
      size: "6.0GB",
      file: "MortalKB11.exe",
    },
    {
      released: "2022-09-25T17:00:00.000Z",
      name: "Terra Invicta",
      price: 22.02,
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1176470/header.jpg?t=1664429533",
      intro:
        "An extraterrestrial probe is detected approaching Earth. Unknown to humanity, an alien force has arrived in the far reaches of the icy Kuiper Belt and has begun mining a dwarf planet to prepare for an invasion.",
      tags: "Sandbox, Strategy, War",
      developers: "Pavonis Interactive",
      publishers: "Hooded Horse",
      size: "9.4GB",
      file: "TerraInvic.exe",
    },
    {
      released: "2022-09-26T17:00:00.000Z",
      name: "Dome Keeper",
      price: 38.01,
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1637320/header.jpg?t=1664541745",
      intro:
        "Defend your dome from wave after wave of monsters in this innovative roguelike survival miner, Dome Keeper. Use the time between each attack to dig beneath the surface in search of valuable resources and artifacts – use them carefully to choose powerful upgrades and bonuses. Set on beautifully crafted pixel art alien planets, Dome Keeper offers a captivating atmosphere, music tracks fusing melodic and synthetic creations together with a sense of wonder meeting the jet age that makes you want to come back for more.",
      tags: "Survival, Sci-fi, Base Building",
      developers: "Bippinbits",
      publishers: "Raw Fury",
      size: "3.9GB",
      file: "DomeKeeper.exe",
    },
    {
      released: "2013-03-25T17:00:00.000Z",
      name: "Warframe",
      price: 11.1,
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/230410/header.jpg?t=1663778697",
      intro:
        "Confront warring factions throughout a sprawling interplanetary system as you follow the guidance of the mysterious Lotus and level up your Warframe, build an Arsenal of destructive firepower, and realize your true potential across massive open Worlds in this thrilling, genre-defining third-person combat experience.",
      tags: "RPG, Multiplayer, Shooter",
      developers: "KRAFTON, Inc",
      publishers: "KRAFTON, Inc",
      size: "5.7GB",
      file: "Warframe.exe",
    },
    {
      released: "2020-01-16T17:00:00.000Z",
      name: "DRAGON BALL Z: KAKAROT",
      price: 33.3,
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/851850/header.jpg?t=1658451413",
      intro:
        "Relive the story of Goku and other Z Fighters in DRAGON BALL Z: KAKAROT! Beyond the epic battles, experience life in the DRAGON BALL Z world as you fight, fish, eat, and train with Goku, Gohan, Vegeta and others.",
      tags: "Anime, RPG, Action, Open World, Multiplayer",
      developers: "CyberConnect2 Co. Ltd.",
      publishers: "BANDAI NAMCO Entertainment",
      size: "7.5GB",
      file: "DragonBall.exe",
    },
    {
      released: "2022-09-26T17:00:00.000Z",
      name: "Kena: Bridge of Spirits",
      price: 12.8,
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1954200/header.jpg?t=1664298117",
      intro:
        "A story-driven, action adventure combining exploration with fast-paced combat. Untangle the past as Kena, a young Spirit Guide in search of the sacred Mountain Shrine. Help free the spirits trapped in a forgotten village with the help of the Rot, her adorable (yet powerful) spirit companions.",
      tags: "Adventure, Action, Soul-like",
      developers: "Ember Lab",
      publishers: "Ember Lab",
      size: "3.7GB",
      file: "Kena.exe",
    },
    {
      released: "2022-08-11T17:00:00.000Z",
      name: "Marvel’s Spider-Man Remastered",
      price: 100.0,
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1817070/header.jpg?t=1660316394",
      intro:
        "In Marvel’s Spider-Man Remastered, the worlds of Peter Parker and Spider-Man collide in an original action-packed story. Play as an experienced Peter Parker, fighting big crime and iconic villains in Marvel’s New York. Web-swing through vibrant neighborhoods and defeat villains with epic takedowns.",
      tags: "Single Player, Open World, Action",
      developers: "Insomniac Games, Nixxes Software",
      publishers: "PlayStation PC LLC",
      size: "6.6GB",
      file: "Spiderman.exe",
    },
    {
      released: "2013-03-25T17:00:00.000Z",
      name: "Back 4 Blood",
      price: 32.3,
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/924970/header.jpg?t=1661878309",
      intro:
        "Back 4 Blood is a thrilling cooperative first-person shooter from the creators of the critically acclaimed Left 4 Dead franchise. Experience the intense 4 player co-op narrative campaign, competitive multiplayer as human or Ridden, and frenetic gameplay that keeps you in the action.",
      tags: "Horror, Survival, Action, Shooter",
      developers: "Turtle Rock Studios",
      publishers: "WB Games",
      size: "2.4GB",
      file: "B4B.exe",
    },
    {
      released: "2022-06-23T17:00:00.000Z",
      name: "Tiny Tina's Wonderlands",
      price: 12.3,
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1286680/header.jpg?t=1660273090",
      intro:
        "Embark on an epic adventure full of whimsy, wonder, and high-powered weaponry! Roll your own multiclass hero then shoot, loot, slash, and cast on a quest to stop the Dragon Lord.",
      tags: "FPS, Multiplayer, Shooter",
      developers: "Gearbox Software",
      publishers: "2K",
      size: "6.4GB",
      file: "Tiny.exe",
    },
    {
      released: "2022-07-18T17:00:00.000Z",
      name: "Stray",
      price: 20.3,
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/1332010/header.jpg?t=1660855681",
      intro:
        "Lost, alone and separated from family, a stray cat must untangle an ancient mystery to escape a long-forgotten cybercity and find their way home.",
      tags: "3D, Adventure, Atmospheric",
      developers: "BlueTwelve Studio",
      publishers: "Annapurna Interactive",
      size: "12.4GB",
      file: "Stray.exe",
    },
    {
      released: "2016-07-21T17:00:00.000Z",
      name: "Human: Fall Flat",
      price: 12.3,
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/477160/header_alt_assets_23.jpg?t=1668096498",
      intro:
        "Human: Fall Flat is a hilarious, light-hearted platformer set in floating dreamscapes that can be played solo or with up to 8 players online. Free new levels keep its vibrant community rewarded.",
      tags: "Puzzle, Co-op, Adventure, Physics",
      developers: "No Brakes Games",
      publishers: "Curve Games",
      size: "4.1GB",
      file: "Human.exe",
    },
    {
      released: "2020-08-10T17:00:00.000Z",
      name: "Risk of Rain 2",
      price: 32.2,
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/632360/header.jpg?t=1660063598",
      intro:
        "Escape a chaotic alien planet by fighting through hordes of frenzied monsters – with your friends, or on your own. Combine loot in surprising ways and master each character until you become the havoc you feared upon your first crash landing.",
      tags: "Multiplayer",
      developers: "Hopoo Games",
      publishers: "Gearbox Publishing",
      size: "40GB",
      file: "Risk2.exe",
    },
    {
      released: "2019-01-22T17:00:00.000Z",
      name: "Slay the Spire",
      price: 15,
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/646570/header.jpg?t=1666988685",
      intro:
        "We fused card games and roguelikes together to make the best single Player deckbuilder we could. Craft a unique deck, encounter bizarre creatures, discover relics of immense power, and Slay the Spire!",
      tags: "Multiplayer, Survival, Shooter",
      developers: "Mega Crit Games",
      publishers: "Mega Crit Games",
      size: "9.1GB",
      file: "Slay.exe",
    },
    {
      released: "2018-12-05T17:00:00.000Z",
      name: "Kenshi",
      price: 3,
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/233860/header.jpg?t=1668010883",
      intro:
        "A free-roaming squad based RPG. Focusing on open-ended sandbox gameplay features rather than a linear story. Be a trader, a thief, a rebel, a warlord, an adventurer, a farmer, a slave, or just food for the cannibals. Train your men up from puny victims to master warriors.",
      tags: "RPG, Survival, Open World, Sandbox, Strategy",
      developers: "Lo-Fi Games",
      publishers: "Lo-Fi Games",
      size: "5.2GB",
      file: "Kenshi.exe",
    },
    {
      released: "2022-09-18T17:00:00.000Z",
      name: "Return to Monkey Island",
      price: 17,
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/2060130/header.jpg?t=1667933041",
      intro:
        "Return to Monkey Island is an unexpected, thrilling return of series creator Ron Gilbert that continues the story of the legendary adventure games.",
      tags: "2D, Adventure",
      developers: "Terrible Toybox",
      publishers: "Devolver Digital",
      size: "7.7GB",
      file: "ReturnToMonkeyISLAND.exe",
    },
    {
      released: "2022-11-03T17:00:00.000Z",
      name: "Doors: Paradox",
      price: 15.6,
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/1622770/header.jpg?t=1667978522",
      intro:
        "A relaxing puzzle escape game! Make your way through a variety of hand-crafted 3D dioramas, look for useful objects, find hidden clues and solve fun puzzles! Unravel this mysterious adventure about chaos, order and the surreal.",
      tags: "Adventure, Puzzle",
      developers: "Big Loop Studios",
      publishers: "Snapbreak",
      size: "6.6GB",
      file: "Paradox.exe",
    },
    {
      released: "2022-11-03T17:00:00.000Z",
      name: "AI: Art Impostor",
      price: 10.3,
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/2154230/header.jpg?t=1667502373",
      intro:
        "AI: Art Impostor is the brand new party AI drawing game. You are an artist who commands AI to draw new artwork.",
      tags: "Multiplayer, Survival, Shooter",
      developers: "Pocketpair",
      publishers: "Pocketpair",
      size: "200MB",
      file: "Impostor.exe",
    },
    {
      released: "2022-11-10T17:00:00.000Z",
      name: "Mining Copper",
      price: 19,
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/2197500/header.jpg?t=1668169220",
      intro:
        "Collect copper ore and pass through various smelting equipment to produce copper plates.",
      tags: "3D, Survival, Open World",
      developers: "KRAFTON, Inc",
      publishers: "KRAFTON, Inc",
      size: "2.4GB",
      file: "Mining.exe",
    },
    {
      released: "2022-11-03T17:00:00.000Z",
      name: "Space Tail: Every Journey Leads Home",
      price: 12.6,
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/1975660/header.jpg?t=1667498362",
      intro:
        "Space Tail is a 2.5D adventure platformer, which immerses the player in a deep, emotional plot, and lets him explore new planets and interact with alien civilizations.",
      tags: "Puzzle, 2D",
      developers: "Enjou studio",
      publishers: "Longterm Games S.A.",
      size: "1.1GB",
      file: "SpaceTail.exe",
    },
    {
      released: "2022-11-09T17:00:00.000Z",
      name: "impossiBot",
      price: 11,
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/2006700/header.jpg?t=1668076962",
      intro:
        "Challenge your finger dexterity like never before by helping the cute Bot navigate through an obstacle course full of enemies and reach his final destination in this action-packed puzzle game.",
      tags: "Arcade",
      developers: "Byte Kinematics",
      publishers: "Byte Kinematics",
      size: "5.4GB",
      file: "impossiBot.exe",
    },
    {
      released: "2022-10-31T17:00:00.000Z",
      name: "Plot of the Druid",
      price: 12.3,
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/1108170/header.jpg?t=1668173663",
      intro:
        "Make earthquakes. Turn night into day. Transform into a small furry creature. No one can party like a druid. An adventure game with sarcastic British humor and classic, hand-drawn art.",
      tags: "Indie, Adventure, 2D",
      developers: "Yakir Israel, Adventure4Life Studios",
      publishers: "Yakir Israel, Adventure4Life Studios",
      size: "4.4GB",
      file: "PlotofTD.exe",
    },
    {
      released: "2022-11-10T17:00:00.000Z",
      name: "Sokobear: Cave",
      price: 9.3,
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/1907820/header.jpg?t=1668169330",
      intro:
        "Bear has a shiny new job! There are lots of caves inside this mine full of glowing rocks, and he must collect the precious stones. Help Bear in these sokoban-like puzzles. Plan your moves, break the crystals blocking your way! Gathering gems can get quite tricky.",
      tags: "Puzzle",
      developers: "Bad Kid Games",
      publishers: "Bad Kid Games",
      size: "8.4GB",
      file: "Sokobear.exe",
    },
    {
      released: "2022-10-21T17:00:00.000Z",
      name: "Gotham Knights",
      price: 12.3,
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/1496790/header.jpg?t=1666371936",
      intro:
        "Batman is dead. It is now up to the Batman Family - Batgirl, Nightwing, Red Hood, and Robin - to protect Gotham City.",
      tags: "Open World, Adventure, 3D",
      developers: "WB Games",
      publishers: "WB Games",
      size: "5.5GB",
      file: "Gotham.exe",
    },
    {
      released: "2019-11-07T17:00:00.000Z",
      name: "Need for Speed™ Heat",
      price: 7.3,
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/1222680/header.jpg?t=1667318479",
      intro:
        "Hustle by day and risk it all at night in Need for Speed™ Heat Deluxe Edition, a white-knuckle street racer, where the lines of the law fade as the sun starts to set.",
      tags: "Action, Single Player, Multiplayer",
      developers: "Criterion Games",
      publishers: "Electronic Arts",
      size: "16.4GB",
      file: "NFSHeat.exe",
    },
    {
      released: "2018-08-20T17:00:00.000Z",
      name: "Burnout™ Paradise Remastered",
      price: 6,
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/1238080/header.jpg?t=1625518920",
      intro:
        "Burnout Paradise Remastered provides the ultimate driving playground for you and your friends to play online. This remaster includes all add-ons from the Year of Paradise, including the Big Surf Island update, meticulously recreated and ready to wreck in 4K.",
      tags: "Multiplayer, Survival, Shooter",
      developers: "Stellar Entertainment, Criterion Games",
      publishers: "Electronic Arts",
      size: "11.4GB",
      file: "Burnout™.exe",
    },
    {
      released: "2022-11-30T17:00:00.000Z",
      name: "Warhammer 40,000: Darktide",
      price: 13,
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/1361210/header.jpg?t=1668773089",
      intro:
        "Take back the city of Tertium from hordes of bloodthirsty foes in this intense and brutal action shooter. Warhammer 40,000: Darktide is the new co-op focused experience from the award-winning team behind the Vermintide series. As Tertium falls, Rejects Will Rise.",
      tags: "FPS, Survival, Multiplayer",
      developers: "Fatshark",
      publishers: "Fatshark",
      size: "3.4GB",
      file: "Warhammer.exe",
    },
    {
      released: "2020-05-12T17:00:00.000Z",
      name: "Deep Rock Galactic",
      price: 11.2,
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/548430/header_alt_assets_18.jpg?t=1668696892",
      intro:
        "Deep Rock Galactic is a 1-4 player co-op FPS featuring badass space Dwarves, 100% destructible environments, procedurally-generated caves, and endless hordes of alien monsters.",
      tags: "FPS, Co-op, Shooter",
      developers: "Ghost Ship Games",
      publishers: "Coffee Stain Publishing",
      size: "13.4GB",
      file: "DeepRock.exe",
    },
    {
      released: "2022-10-02T17:00:00.000Z",
      name: "Marauders",
      price: 6,
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/1789480/header.jpg?t=1664975721",
      intro:
        "Marauders is a tactical first-person multiplayer looter shooter set in a sci-fi universe. As a space pirate, work solo, or in a squad with up to 3 other players to navigate a hostile battleground, hunt for loot, craft new weapons and gear, and salvage what you’ll need to survive.",
      tags: "Multiplayer, Survival, Shooter",
      developers: "Small Impact Games",
      publishers: "Team17",
      size: "1.9GB",
      file: "Marauders.exe",
    },
    {
      released: "2022-11-05T17:00:00.000Z",
      name: "Bravery and Greed",
      price: 20,
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/943370/header.jpg?t=1668692897",
      intro:
        "Bravery and Greed is a beat 'em up, roguelite, dungeon brawler for up to four players. Choose from four classic fantasy classes, engage in a deep robust combat system, and play a variety of co-operative and competitive game modes with friends via local, online or both. Get rich, or die trying!",
      tags: "Multiplayer, Action",
      developers: "Rekka Games",
      publishers: "Team17",
      size: "2.2GB",
      file: "Bravery.exe",
    },
  ];

  const existTag = [];
  for (let index = 0; index < games.length; index++) {
    const { developers, publishers, tags } = games[index];
    const game = await knex("game").insert(
      {
        released: games[index].released,
        name: games[index].name,
        price: games[index].price,
        image: games[index].image,
        size: games[index].size,
        file: games[index].file,
        intro: games[index].intro,
      },
      "*"
    );

    let tagArr = tags.split(",");
    tagArr = tagArr.map((tag) => tag.trim());
    for (let index = 0; index < tagArr.length; index++) {
      const tag = tagArr[index];
      let newTag = null;
      const matchedTag = existTag.find((t) => t.name === tag);
      if (!matchedTag) {
        newTag = await knex("tag").insert({ name: tag }, "*");
        existTag.push(newTag[0]);
      }
      await knex("game_tag").insert({
        gameId: game[0].id,
        tagId: matchedTag ? matchedTag.id : newTag[0].id,
      });
    }

    await knex("developer").insert({
      name: developers,
      gameId: game[0].id,
    });

    await knex("publisher").insert({
      name: publishers,
      gameId: game[0].id,
    });
  }
};
