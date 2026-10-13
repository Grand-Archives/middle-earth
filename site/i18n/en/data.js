/* Content for the English (en) page (ES module: `export default { ... }`).
 *
 * This file mirrors i18n/pt-BR/data.js: same keys, ids, numbers, colour ids, type codes and URLs; only the text values are translated.
 *
 *  start     ids shown when the page opens: era, tab, map place, and the profile selected in each tab.
 *  map       labels drawn on the map (regions and geographic features); keys match the geometry in js/app.js.
 *  profiles  one entry per profile, keyed by id. Order is the order of the lists and of the map pins.
 *            type    povo | lingua | figura | lugar  (the four tabs; ids used by the code)
 *            color   homens | elfos | anaos | hobbits | sombra | outros  (colour category; ids used by the CSS)
 *            group   heading under which the profile is listed in its tab
 *            pinLabel (optional) shorter label for the map pin
 *            paras   paragraphs; [[id|label]] becomes a link to another profile (label is the translated text)
 *            facts, tree (trusted HTML), branches, examples: optional extra sections
 *            treeTitle / branchesTitle: headings of those sections (branchesTitle optional)
 *  eras      the timeline; weight is the width of the era on the ruler (years); events may be major and carry keyDates.
 *  books     the bookshelf; sources: pages consulted (credits).
 * Text values may contain trusted inline HTML.
 */
export default {
  start: {
    era: "te",
    tab: "povo",
    place: "minastirith",
    profiles: { povo: "elfos", lingua: "panorama", figura: "sauron", lugar: "numenor" }
  },
  map: {
    regions: {
      eriador: "ERIADOR",
      rhovanion: "RHOVANION",
      rohan: "ROHAN",
      gondor: "GONDOR",
      mordor: "MORDOR",
      harad: "HARAD",
      rhun: "RHÛN",
      lindon: "LINDON",
      forodwaith: "FORODWAITH",
      enedwaith: "ENEDWAITH"
    },
    features: {
      misty: "Misty Mountains",
      white: "White Mountains",
      blue: "Blue Mountains",
      belegaer: "Belegaer, the Great Sea",
      anduin: "Anduin",
      rhunSea: "Sea of Rhûn"
    }
  },
  profiles: {
    condado: {
      type: "lugar",
      group: "Eriador",
      color: "hobbits",
      name: "The Shire",
      summary: "The land of the Hobbits, in the northwest",
      paras: [
        "A fertile and peaceful region of Eriador, between the Brandywine River and the Far Downs. It was granted to the [[hobbits|Hobbits]] in 1601 of the Third Age by the King of Arthedain, and the brothers Marcho and Blanco crossed the Brandywine with a great company that came from [[bri|Bree]]. That year is Year 1 of the Shire Reckoning, the Hobbits' calendar.",
        "It is divided into four Farthings, has a Thain and a Mayor, almost no government and no army. For centuries it was protected without knowing it by the Rangers, the [[homens|Dúnedain]] of the North. Hobbiton and Bag End, the hole of [[bilbo|Bilbo]] and [[frodo|Frodo]], lie in the Westfarthing.",
        "In the War of the Ring the Shire was occupied by men in the service of [[saruman|Saruman]]. The Hobbits freed it in the Battle of Bywater, in November 3019, the last battle of the war."
      ],
      facts: [
        { label: "Founded", value: "1601 of the Third Age" },
        { label: "People", value: "Hobbits" },
        { label: "In Westron", value: "Sûza" }
      ]
    },
    bri: {
      type: "lugar",
      group: "Eriador",
      color: "homens",
      name: "Bree",
      summary: "The crossroads of Eriador",
      paras: [
        "An ancient village at the crossing of the Great East Road and the Greenway. It is the only place in Middle-earth where [[homens|Men]] and [[hobbits|Hobbits]] live side by side. The Hobbits passed through it before founding the [[condado|Shire]].",
        "At the inn of the Prancing Pony, [[gandalf|Gandalf]] met [[thorin|Thorin]] and arranged the journey to [[erebor|Erebor]]. It was there too that [[frodo|Frodo]] met Strider, the name the people of Bree gave to [[aragorn|Aragorn]]."
      ]
    },
    portos: {
      type: "lugar",
      group: "Eriador",
      color: "elfos",
      name: "Grey Havens",
      summary: "Mithlond, from where the Elven-ships sail",
      paras: [
        "A harbour of the [[elfos|Elves]] on the Gulf of Lhûn, founded in Year 1 of the Second Age in Lindon, the piece of [[beleriand|Beleriand]] that remained above the sea. Its lord is Círdan the Shipwright, the oldest of the Elves in Middle-earth.",
        "It is from there that the ships sail to [[valinor|Valinor]] by the Straight Road. On 29 September 3021, [[frodo|Frodo]], [[bilbo|Bilbo]], [[gandalf|Gandalf]], [[elrond|Elrond]] and [[galadriel|Galadriel]] embarked there, and that day closes the Third Age."
      ]
    },
    valfenda: {
      type: "lugar",
      group: "Eriador",
      color: "elfos",
      name: "Rivendell",
      summary: "Imladris, the Last Homely House",
      paras: [
        "A hidden valley at the foot of the Misty Mountains. [[elrond|Elrond]] founded it in 1697 of the Second Age as a refuge, after [[sauron|Sauron]] destroyed [[eregion|Eregion]]. Guarded by Vilya, one of the Three Rings, it withstood every war.",
        "It was a house of wisdom and memory: the shards of the sword Narsil were kept there, and the heirs of Isildur were raised there, among them [[aragorn|Aragorn]]. On 25 October 3018 the Council of Elrond decided to destroy the One Ring and formed the Fellowship of the Ring."
      ],
      facts: [
        { label: "Founded", value: "1697 of the Second Age" },
        { label: "In Sindarin", value: "Imladris, 'deep dale of the cleft'" }
      ]
    },
    topo: {
      type: "lugar",
      group: "Eriador",
      color: "homens",
      name: "Weathertop",
      summary: "Amon Sûl, the watch-tower of Arnor",
      paras: [
        "A hill at the southern end of the Weather Hills. On its summit stood the tower of Amon Sûl, which kept the chief of the Seeing-stones (palantíri) of the North. The tower was destroyed in 1409 of the Third Age by the forces of [[angmar|Angmar]].",
        "On 6 October 3018, in its ruins, the [[bruxo|Witch-king]] wounded [[frodo|Frodo]] with a Morgul-blade."
      ]
    },
    fornost: {
      type: "lugar",
      group: "Eriador",
      color: "homens",
      name: "Fornost and Annúminas",
      summary: "The capitals of the northern kingdom",
      pinLabel: "Fornost",
      paras: [
        "Arnor, the Northern Kingdom of the [[homens|Dúnedain]], was founded by [[elendil|Elendil]] in 3320 of the Second Age, with its capital at Annúminas, on the shore of Lake Nenuial. In 861 of the Third Age the kingdom split into three: Arthedain, Cardolan and Rhudaur.",
        "Fornost became the capital of Arthedain, the last of the three to fall. The [[bruxo|Witch-king]] of [[angmar|Angmar]] took it in 1974. The following year an army of Gondor and the Elves destroyed Angmar in the Battle of Fornost, but the northern kingdom no longer existed. Its heirs went on as Chieftains of the Rangers until [[aragorn|Aragorn]]."
      ]
    },
    angmar: {
      type: "lugar",
      group: "Eriador",
      color: "sombra",
      name: "Angmar",
      summary: "The realm of the Witch-king, seated at Carn Dûm",
      paras: [
        "A realm founded around 1300 of the Third Age in the far north of the Misty Mountains. Its lord was the chief of the [[nazgul|Nazgûl]], known from then on as the [[bruxo|Witch-king of Angmar]]. He had a single aim: to destroy the kingdoms of the Dúnedain of the North.",
        "It took almost seven centuries, but he succeeded. Angmar was annihilated in 1975, soon after taking [[fornost|Fornost]]."
      ]
    },
    eregion: {
      type: "lugar",
      group: "Eriador",
      color: "elfos",
      name: "Eregion",
      summary: "Hollin, where the Rings were forged",
      paras: [
        "A realm of the [[elfos|Noldor]] founded in 750 of the Second Age at the foot of the Misty Mountains, beside the west gate of [[moria|Khazad-dûm]]. It was the greatest friendship ever between Elves and [[anaos|Dwarves]].",
        "Its smiths, led by [[celebrimbor|Celebrimbor]], received [[sauron|Sauron]] in the guise of Annatar and with him forged the Rings of Power. When they discovered the betrayal, Sauron invaded and laid the realm waste in 1697. In the Third Age only hollies and stones remained."
      ]
    },
    moria: {
      type: "lugar",
      group: "Misty Mountains",
      color: "anaos",
      name: "Moria",
      summary: "Khazad-dûm, the greatest mansion of the Dwarves",
      paras: [
        "An underground city delved beneath the Misty Mountains by [[durin|Durin]] the Deathless in the Elder Days. It was the home of Durin's Folk for thousands of years and the only source of mithril, the true-silver.",
        "In 1980 of the Third Age the [[anaos|Dwarves]] delved too deep and woke a [[balrogs|Balrog]], Durin's Bane. The following year they abandoned the city, which came to be called Moria, the Black Chasm. Balin tried to retake it in 2989 and died there five years later.",
        "The Fellowship of the Ring crossed Moria in January 3019. On the Bridge of Khazad-dûm, [[gandalf|Gandalf]] faced the Balrog and fell with it."
      ],
      facts: [
        { label: "In Khuzdul", value: "Khazad-dûm, 'Mansion of the Dwarves'" },
        { label: "In Sindarin", value: "Moria, 'Black Chasm'" }
      ]
    },
    lorien: {
      type: "lugar",
      group: "Anduin Vale",
      color: "elfos",
      name: "Lothlórien",
      summary: "The Golden Wood",
      paras: [
        "An Elven realm between the Misty Mountains and the Anduin, covered with mallorns, trees with silver bark and golden leaves. In the Third Age it was ruled by [[galadriel|Galadriel]] and Celeborn, from Caras Galadhon, the city in the trees.",
        "Nenya, Galadriel's ring, kept time there almost still and barred the Enemy's entry. The Fellowship rested in Lórien after [[moria|Moria]]. In March 3019 the realm repelled three assaults from [[dolguldur|Dol Guldur]]. After Galadriel's departure, the forest was gradually abandoned."
      ]
    },
    lis: {
      type: "lugar",
      group: "Anduin Vale",
      color: "outros",
      name: "Gladden Fields",
      summary: "Where the One Ring was lost and found",
      paras: [
        "Marshes where the River Gladden meets the Anduin. In Year 2 of the Third Age, [[elendil|Isildur]] was ambushed there by [[orques|Orcs]]. He tried to escape by swimming, wearing the One Ring, but the Ring slipped from his finger and he was shot down with arrows.",
        "The Ring lay at the bottom of the river for almost 2,500 years. Around 2463 it was found by Déagol, a hobbit of the Stoor kin, and taken by his friend Sméagol, who became [[gollum|Gollum]]."
      ]
    },
    fangorn: {
      type: "lugar",
      group: "Anduin Vale",
      color: "outros",
      name: "Fangorn",
      summary: "The forest of the Ents",
      paras: [
        "What remains of the immense forest that covered Eriador in the Elder Days, nestled against the southern end of the Misty Mountains. It is the home of the [[ents|Ents]] and of [[barbarvore|Treebeard]], whose name in Sindarin is the same as the forest's.",
        "Merry and Pippin arrived there on 29 February 3019. The news they brought led the Ents to march against [[isengard|Isengard]]."
      ]
    },
    isengard: {
      type: "lugar",
      group: "Rohan and Surroundings",
      color: "sombra",
      name: "Isengard",
      summary: "The ring of stone and the tower of Orthanc",
      paras: [
        "A fortress built by the Númenóreans of Gondor at the southern end of the Misty Mountains: a ring of stone with the tower of Orthanc in the middle, indestructible, where one of the Seeing-stones was kept.",
        "In 2759 of the Third Age the Steward of Gondor gave the keys to [[saruman|Saruman]]. He turned it into an arsenal, bred his Uruk-hai there and began to pursue the Ring on his own account. The [[ents|Ents]] destroyed Isengard on 3 March 3019 and flooded the vale."
      ]
    },
    helm: {
      type: "lugar",
      group: "Rohan and Surroundings",
      color: "homens",
      name: "Helm's Deep",
      summary: "The refuge of Rohan, with the Hornburg",
      paras: [
        "A gorge in the White Mountains closed off by a wall and by the Hornburg. It is named after King Helm Hammerhand, who withstood the siege of the Dunlendings there in the Long Winter of 2758 and 2759.",
        "On the night of 3 to 4 March 3019, King [[theoden|Théoden]] and [[aragorn|Aragorn]] held the fortress against the army of [[saruman|Saruman]], until [[gandalf|Gandalf]] arrived with reinforcements at dawn."
      ]
    },
    edoras: {
      type: "lugar",
      group: "Rohan and Surroundings",
      color: "homens",
      name: "Edoras",
      summary: "The capital of Rohan and the hall of Meduseld",
      paras: [
        "Rohan, the Riddermark, was born in 2510 of the Third Age. The riders of Eorl came from the north and saved Gondor in the Battle of the Field of Celebrant, and the Steward Cirion gave them the province of Calenardhon in return. The Oath of Eorl bound the two kingdoms together from then on.",
        "Edoras stands on a hill at the foot of the White Mountains, and at its top is Meduseld, the Golden Hall, the hall of the kings. The [[homens|Rohirrim]] are a people of horsemen, and their horses descend from the mearas, the breed of Shadowfax."
      ],
      facts: [
        { label: "Founding of Rohan", value: "2510 of the Third Age" },
        { label: "People", value: "Rohirrim (Eorlingas)" }
      ]
    },
    minastirith: {
      type: "lugar",
      group: "Gondor",
      color: "homens",
      name: "Minas Tirith",
      summary: "The White City, capital of Gondor",
      paras: [
        "Gondor, the Southern Kingdom of the [[homens|Dúnedain]], was founded in 3320 of the Second Age by Isildur and Anárion, sons of [[elendil|Elendil]]. Minas Tirith began as Minas Anor, the Tower of the Sun, the fortress of Anárion. It has seven levels of walls hewn into the flank of Mindolluin, with the Citadel and the White Tree at the summit.",
        "After the fall of [[osgiliath|Osgiliath]] it became the capital and took the name Tower of Guard. In 2050 the last king, Eärnur, vanished in [[morgul|Minas Morgul]], and the Stewards ruled for almost a thousand years in the name of an absent king.",
        "On 15 March 3019 the city was besieged by the army of [[mordor|Mordor]]. The Battle of the Pelennor Fields, before its gates, was the greatest of the War of the Ring. [[aragorn|Aragorn]] was crowned there on 1 May."
      ],
      facts: [
        { label: "Old name", value: "Minas Anor, 'Tower of the Sun'" },
        { label: "Stewards", value: "from 2050 to 3019 of the Third Age" }
      ]
    },
    osgiliath: {
      type: "lugar",
      group: "Gondor",
      color: "homens",
      name: "Osgiliath",
      summary: "The first capital of Gondor, on the Anduin",
      paras: [
        "The Citadel of the Stars was raised on both banks of the Anduin, with a great bridge in the middle. It lay between the towers of the two brothers: [[minastirith|Minas Anor]] to the west and [[morgul|Minas Ithil]] to the east.",
        "It was burned in the Kin-strife (1432 to 1447), emptied by the Great Plague of 1636 and ruined for good in 2475. In the War of the Ring it was only a line of defence in ruins."
      ]
    },
    dolamroth: {
      type: "lugar",
      group: "Gondor",
      color: "homens",
      name: "Dol Amroth",
      summary: "The city of the princes by the sea",
      paras: [
        "A castle and harbour on a promontory of the Bay of Belfalas. Its princes were of Númenórean blood with a touch of Elvish, according to tradition. Prince Imrahil led the Swan Knights to the defence of [[minastirith|Minas Tirith]] in 3019."
      ]
    },
    pelargir: {
      type: "lugar",
      group: "Gondor",
      color: "homens",
      name: "Pelargir",
      summary: "The great port of the Anduin",
      paras: [
        "A port founded in 2350 of the Second Age by the Faithful of [[numenor|Númenor]], long before there was a Gondor. In March 3019, [[aragorn|Aragorn]] arrived there with the Army of the Dead, seized the fleet of the Corsairs of [[umbar|Umbar]] and sailed up the river to the Battle of the Pelennor Fields."
      ]
    },
    umbar: {
      type: "lugar",
      group: "South and East",
      color: "sombra",
      name: "Umbar",
      summary: "The port of the Black Númenóreans and the Corsairs",
      paras: [
        "A natural harbour on the coast of Harad. It was the great base of [[numenor|Númenor]] in Middle-earth, and it was there that Ar-Pharazôn landed to humble [[sauron|Sauron]]. After the Downfall it fell to the Black Númenóreans, the King's Men who served Sauron.",
        "Gondor conquered it and lost it more than once. The defeated of the Kin-strife took refuge there and gave rise to the Corsairs of Umbar, enemies of Gondor for more than a thousand years."
      ]
    },
    mordor: {
      type: "lugar",
      group: "Mordor",
      color: "sombra",
      name: "Mordor and Barad-dûr",
      summary: "The Black Land and the Dark Tower",
      pinLabel: "Barad-dûr",
      paras: [
        "A land enclosed by mountains on three sides: the Ered Lithui to the north and the Ephel Dúath to the west and south. [[sauron|Sauron]] chose it as his realm around the year 1000 of the Second Age and began to raise Barad-dûr, finished when he forged the One Ring, about 1600.",
        "The tower was cast down by the Last Alliance in 3441, but its foundations, made with the power of the Ring, could not be destroyed while the Ring existed. Sauron returned to Mordor in 2942 of the Third Age and rebuilt it from 2951. It fell for good on 25 March 3019.",
        "The plateau of Gorgoroth, in the north, is ash and smoke. The south, around the Sea of Núrnen, was tilled by slaves to feed the armies."
      ],
      facts: [{ label: "In Sindarin", value: "Mordor, 'Black Land'" }, { label: "Barad-dûr", value: "'Dark Tower'" }]
    },
    perdicao: {
      type: "lugar",
      group: "Mordor",
      color: "sombra",
      name: "Mount Doom",
      summary: "Orodruin, where the Ring was made and unmade",
      paras: [
        "A volcano in the middle of Gorgoroth, also called Orodruin, the Fire-mountain. Inside it lie the Sammath Naur, the Chambers of Fire, and the Crack of Doom. [[sauron|Sauron]] forged the One Ring there, and only that fire could destroy it.",
        "On 25 March 3019, [[frodo|Frodo]] reached the edge of the Crack and could not throw the Ring in. [[gollum|Gollum]] bit it from him and fell into the fire with the Ring."
      ]
    },
    morgul: {
      type: "lugar",
      group: "Mordor",
      color: "sombra",
      name: "Minas Morgul",
      summary: "The Tower of Sorcery, formerly Minas Ithil",
      paras: [
        "It was Minas Ithil, the Tower of the Moon, the city of Isildur on the slopes of the Ephel Dúath. The [[nazgul|Nazgûl]] took it in 2002 of the Third Age, after a two-year siege, and kept the Seeing-stone that was in it.",
        "It became the base of the [[bruxo|Witch-king]] and the gate of [[mordor|Mordor]] for the war against Gondor. Above it lies the pass of Cirith Ungol, with Shelob's Lair, by which [[frodo|Frodo]] and [[sam|Sam]] entered Mordor."
      ]
    },
    portao: {
      type: "lugar",
      group: "Mordor",
      color: "sombra",
      name: "Black Gate",
      summary: "The Morannon, the northern entrance to Mordor",
      paras: [
        "A wall with iron gates that closes the pass between the two mountain chains of [[mordor|Mordor]]. Before it lies Dagorlad, the plain of the great battle of the Last Alliance in 3434 of the Second Age, and beside it the Dead Marshes.",
        "On 25 March 3019 the army of the West, with [[aragorn|Aragorn]] and [[gandalf|Gandalf]], attacked the Gate with no chance of victory. The idea was to keep the Eye of [[sauron|Sauron]] away from [[perdicao|Mount Doom]]."
      ]
    },
    dolguldur: {
      type: "lugar",
      group: "Rhovanion",
      color: "sombra",
      name: "Dol Guldur",
      summary: "The Hill of Sorcery, in southern Mirkwood",
      paras: [
        "A fortress on a hill in the south of [[trevamata|Mirkwood]]. Around 1050 of the Third Age a shadow settled there, and the Wise called it the Necromancer. It was [[sauron|Sauron]], regaining his form.",
        "[[gandalf|Gandalf]] entered the fortress in 2850 and confirmed who its lord was. The White Council only drove him out in 2941, the year of [[bilbo|Bilbo]]'s journey, and Sauron had already planned the retreat. After the war, [[galadriel|Galadriel]] threw down its walls."
      ]
    },
    trevamata: {
      type: "lugar",
      group: "Rhovanion",
      color: "elfos",
      name: "Mirkwood",
      summary: "The great forest and the Woodland Realm",
      paras: [
        "The greatest forest of Middle-earth at the end of the Third Age, east of the Anduin. It was called Greenwood the Great. When the shadow of [[dolguldur|Dol Guldur]] spread, the spiders and the darkness came, and the name changed to Mirkwood.",
        "In the north lies the Woodland Realm of the [[elfos|Wood-elves]], ruled by Thranduil, father of [[legolas|Legolas]], with halls delved into the rock. [[thorin|Thorin]] and his companions were held prisoner there in 2941."
      ]
    },
    erebor: {
      type: "lugar",
      group: "Rhovanion",
      color: "anaos",
      name: "Erebor",
      summary: "The Lonely Mountain, the Kingdom under the Mountain",
      paras: [
        "A lone mountain east of [[trevamata|Mirkwood]]. Thráin I founded the Kingdom under the Mountain there in 1999 of the Third Age, after the flight from [[moria|Moria]], and found the Arkenstone. The kingdom became rich and famous.",
        "The wealth drew [[smaug|Smaug]], who took the mountain in 2770. [[thorin|Thorin]] won it back in 2941 with twelve companions, [[bilbo|Bilbo]] and the help of [[gandalf|Gandalf]]. In the War of the Ring, Erebor and [[valle|Dale]] withstood Sauron's attack in the north."
      ],
      facts: [{ label: "Founded", value: "1999 of the Third Age" }, { label: "People", value: "Dwarves of Durin's Folk" }]
    },
    valle: {
      type: "lugar",
      group: "Rhovanion",
      color: "homens",
      name: "Dale and Lake-town",
      summary: "The Men at the foot of the Mountain",
      pinLabel: "Dale",
      paras: [
        "Dale was the city of the [[homens|Men of the North]] at the foot of [[erebor|Erebor]], destroyed by [[smaug|Smaug]] in 2770. The survivors went to live in Esgaroth, Lake-town, built on stilts on the Long Lake.",
        "In 2941 Smaug burned Esgaroth and was slain by Bard the Bowman, heir of the lords of Dale. Bard rebuilt Dale and became king."
      ]
    },
    ferro: {
      type: "lugar",
      group: "Rhovanion",
      color: "anaos",
      name: "Iron Hills",
      summary: "The realm of Dáin",
      paras: [
        "A colony of the [[anaos|Dwarves]] of Durin's Folk east of [[erebor|Erebor]]. From there Dáin Ironfoot came with his army to the Battle of Five Armies, in 2941. With the death of [[thorin|Thorin]], Dáin became King under the Mountain."
      ]
    },
    valinor: {
      type: "lugar",
      group: "Elder Days",
      color: "outros",
      name: "Valinor and Aman",
      summary: "The Blessed Realm, west of the Great Sea",
      paras: [
        "Aman is the continent west of the sea of Belegaer. After [[melkor|Melkor]] destroyed the two Lamps that lit the world, the [[ainur|Valar]] withdrew there and founded Valinor. Yavanna made the Two Trees grow, Telperion (silver) and Laurelin (golden), whose light marks the Years of the Trees.",
        "The [[elfos|Elves]] who accepted the Valar's summons lived there, in Tirion and in Alqualondë. The Trees were slain by Melkor and the spider Ungoliant. From the last flower and the last fruit the Valar made the Moon and the Sun.",
        "After the Downfall of [[numenor|Númenor]] the world was made round and Aman was taken out of the circles of the world. Only Elven-ships can still reach it, by the Straight Road."
      ]
    },
    beleriand: {
      type: "lugar",
      group: "Elder Days",
      color: "elfos",
      name: "Beleriand",
      summary: "The stage of the First Age, now beneath the sea",
      paras: [
        "A great region west of the Blue Mountains, cut by the River Sirion. Almost everything The Silmarillion tells takes place there: the realms of the [[elfos|Sindar]] and of the exiled Noldor, the three houses of the [[homens|Edain]] and the five great battles against [[melkor|Morgoth]].",
        "In Beleriand lay [[doriath|Doriath]], [[gondolin|Gondolin]], [[nargothrond|Nargothrond]], the Havens of the Falas and the Dwarf-cities of Nogrod and Belegost. In the north, beyond the plains, lay [[angband|Angband]].",
        "The War of Wrath, which overthrew Morgoth, shattered the region. Almost all of it sank. Only Lindon remained, the strip west of the Blue Mountains where the [[portos|Grey Havens]] stand."
      ]
    },
    angband: {
      type: "lugar",
      group: "Elder Days",
      color: "sombra",
      name: "Angband",
      summary: "The Hells of Iron, the fortress of Morgoth",
      paras: [
        "A fortress in the far north, beneath the three volcanic peaks of the Thangorodrim. It was built as an outpost of Utumno, the first stronghold of [[melkor|Melkor]], and became his seat when he returned to Middle-earth with the Silmarils.",
        "From it came [[orques|Orcs]], [[balrogs|Balrogs]] and [[dragoes|dragons]] throughout the First Age. The Noldor besieged it for almost four hundred years, until the Battle of Sudden Flame broke the siege in 455. It was destroyed in the War of Wrath."
      ]
    },
    gondolin: {
      type: "lugar",
      group: "Elder Days",
      color: "elfos",
      name: "Gondolin",
      summary: "The Hidden City of Turgon",
      paras: [
        "A city of the [[elfos|Noldor]] built in secret in a valley ringed by mountains, on the counsel of the Vala Ulmo. It was finished around 116 of the First Age and went almost four hundred years without being found.",
        "It was the last to fall. Maeglin, nephew of King Turgon, revealed the way to [[melkor|Morgoth]], and the city was taken in 510 by dragons and Balrogs. Among those who escaped were Tuor, Idril and their son, [[earendil|Eärendil]]."
      ]
    },
    doriath: {
      type: "lugar",
      group: "Elder Days",
      color: "elfos",
      name: "Doriath",
      summary: "The Guarded Kingdom of Thingol and Melian",
      paras: [
        "A realm of the [[elfos|Sindar]] in the forests of Neldoreth and Region, with its capital at Menegroth, the Thousand Caves. The king was Elu Thingol, and the queen, Melian, a Maia. The Girdle of Melian, an enchantment, barred the entry of anyone without the king's leave.",
        "It was there that [[luthien|Lúthien]] was born and that [[turin|Túrin]] was raised. The Silmaril recovered by Beren and Lúthien brought the kingdom to ruin: Thingol was slain by the Dwarves of Nogrod, and in 506 the sons of [[feanor|Fëanor]] attacked what remained."
      ]
    },
    nargothrond: {
      type: "lugar",
      group: "Elder Days",
      color: "elfos",
      name: "Nargothrond",
      summary: "The underground fortress of Finrod",
      paras: [
        "A city delved into the banks of the River Narog by Finrod Felagund, brother of [[galadriel|Galadriel]], with the help of the Dwarves. It survived for centuries thanks to secrecy.",
        "[[turin|Túrin]] persuaded the realm to fight in the open and to build a bridge before the gates. In 495 the dragon Glaurung crossed the bridge and sacked the city."
      ]
    },
    numenor: {
      type: "lugar",
      group: "Elder Days",
      color: "homens",
      name: "Númenor",
      summary: "The island of the Kings of Men, in the midst of the sea",
      paras: [
        "An island in the shape of a five-pointed star that the [[ainur|Valar]] raised from the sea as a reward to the [[homens|Edain]], the Men who fought against Morgoth. They arrived in Year 32 of the Second Age. The first king was Elros, twin brother of [[elrond|Elrond]], who chose to be mortal.",
        "The Númenóreans gained long life, lore and the best ships in the world. There was only one prohibition, the Ban of the Valar: never to sail west until the island was out of sight. Over the centuries their power grew, and their fear of death with it, and the kings came to envy the Elves.",
        "The last king, [[arpharazon|Ar-Pharazôn]], brought [[sauron|Sauron]] as a prisoner and in the end was persuaded by him to invade [[valinor|Valinor]]. In 3319 the island was swallowed by the sea. [[elendil|Elendil]] and the Faithful escaped in nine ships and founded Arnor and Gondor."
      ],
      facts: [
        { label: "Lasted", value: "from 32 to 3319 of the Second Age" },
        { label: "In Adûnaic", value: "Anadûnê" },
        { label: "The story of the Downfall", value: "Akallabêth" }
      ]
    },
    ainur: {
      type: "povo",
      group: "The Powers",
      color: "outros",
      name: "Ainur: Valar and Maiar",
      summary: "The spirits that existed before the world",
      paras: [
        "In the beginning there was Eru, the One, called Ilúvatar. He made the Ainur, and they sang before him the Great Music, which held the design of the world. [[melkor|Melkor]], the mightiest, wove in themes of his own and brought discord. Eru gave being to the Music: it is Eä, the universe, and within it Arda, the Earth.",
        "The Ainur who descended into the world to shape it are the Valar, the Powers, and the lesser ones who accompany them are the Maiar. They are not creator gods. They are stewards of Eru's world, and Men have sometimes called them gods.",
        "Maiar include, among others: [[sauron|Sauron]], the [[balrogs|Balrogs]], Melian of [[doriath|Doriath]] and the five [[istari|Wizards]]."
      ],
      branchesTitle: "The chief Valar",
      branches: [
        { name: "Manwë", text: "Lord of the winds and King of the Valar. The great Eagles are his messengers." },
        { name: "Varda (Elbereth)", text: "Lady of the stars, the most beloved of the Elves." },
        { name: "Ulmo", text: "Lord of the waters. He never abandoned Elves and Men in Middle-earth." },
        { name: "Aulë", text: "The smith. He made the Dwarves and taught the Noldor." },
        { name: "Yavanna", text: "Lady of all that grows. She made the Two Trees and begged for the Ents." },
        { name: "Mandos (Námo)", text: "Keeper of the Houses of the Dead and doomsman of the Valar." },
        { name: "Oromë", text: "The hunter. He found the newly awakened Elves." },
        {
          name: "Tulkas, Nienna, Irmo, Estë, Vairë, Vána, Nessa",
          text: "The other seven Valar. Not counting Melkor, there are fourteen."
        }
      ]
    },
    elfos: {
      type: "povo",
      group: "The Children of Ilúvatar",
      color: "elfos",
      name: "Elves",
      summary: "The Firstborn, the Quendi",
      paras: [
        "The first Children of Ilúvatar awoke under the stars at Cuiviénen, in the far east, before there were a Sun and a Moon. They are immortal for as long as the world lasts: they neither sicken nor age, but they can be slain or die of grief, and then they go to the Halls of Mandos, in [[valinor|Valinor]].",
        "The Vala Oromë found them, and the [[ainur|Valar]] invited them to live in Aman. The answer to that invitation divided the people, and almost all of Elvish history springs from that division. Those who saw the light of the Two Trees are the Calaquendi, Elves of the Light. The rest are the Moriquendi, Elves of the Darkness.",
        "In the Third Age the Elves are in decline. Few realms remain, sustained in part by the Three Rings: [[valfenda|Rivendell]], [[lorien|Lothlórien]], the [[portos|Grey Havens]] and the realm of [[trevamata|Mirkwood]]. With the end of the One Ring the Three lose their power, and the Elves sail into the West."
      ],
      treeTitle: "The divisions of the Elves",
      tree: "<ul><li><b>Quendi</b> <span>all Elves</span><ul>\n<li><b>Avari</b> <span>the Unwilling: they refused the journey and stayed in the east</span></li>\n<li><b>Eldar</b> <span>the People of the Stars: they accepted the journey</span><ul>\n<li><b>Vanyar</b> <span>the Fair, of King Ingwë. All went to Aman and never returned</span></li>\n<li><b>Noldor</b> <span>the Wise, of King Finwë. Smiths and scholars. Many returned to Middle-earth in pursuit of the Silmarils</span></li>\n<li><b>Teleri</b> <span>the Last, of Elwë and Olwë. The largest clan, which split along the way</span><ul>\n<li><b>Falmari</b> <span>reached Aman and live at Alqualondë</span></li>\n<li><b>Sindar</b> <span>the Grey-elves: they stayed in Beleriand with Elwë, King Thingol</span></li>\n<li><b>Nandor</b> <span>gave up before the Misty Mountains. From them come the Wood-elves of Lórien and Mirkwood</span></li>\n</ul></li></ul></li></ul></li></ul>"
    },
    homens: {
      type: "povo",
      group: "The Children of Ilúvatar",
      color: "homens",
      name: "Men",
      summary: "The Followers, the Atani",
      paras: [
        "The second Children of Ilúvatar awoke in Hildórien, in the east, with the first rising of the Sun. What sets them apart is the Gift of Ilúvatar: death. They live briefly and then leave the world, for a fate that not even the [[ainur|Valar]] know. [[melkor|Morgoth]] and [[sauron|Sauron]] taught Men to fear that gift, and from that fear were born the fall of [[numenor|Númenor]] and the [[nazgul|Nazgûl]].",
        "Those who came to [[beleriand|Beleriand]] and allied themselves with the Elves were called the Edain. Their descendants, the Dúnedain, founded the kingdoms of Arnor and Gondor. At the end of the Third Age the Dominion of Men begins: the other peoples withdraw or dwindle.",
        "Elves and Men were united only a few times. From those unions, that of [[luthien|Beren and Lúthien]] and that of Tuor and Idril, descend [[elrond|Elrond]], the kings of Númenor and [[aragorn|Aragorn]]."
      ],
      branches: [
        {
          name: "Edain",
          text: "The three houses of the Elf-friends in the First Age: those of Bëor, Haleth and Hador."
        },
        {
          name: "Númenóreans and Dúnedain",
          text: "The Edain who received Númenor. The survivors of the Downfall are the Dúnedain, the Men of the West, of Arnor and of Gondor. Those of the North became the Rangers."
        },
        {
          name: "Black Númenóreans",
          text: "The King's Men who stayed in Middle-earth in the service of Sauron, above all in Umbar."
        },
        {
          name: "Northmen",
          text: "Distant kin of the Edain in Rhovanion. From them come the Rohirrim, the Men of Dale and the Beornings."
        },
        { name: "Rohirrim", text: "The Horse-lords of Rohan, allies of Gondor since 2510." },
        {
          name: "Dunlendings",
          text: "Hill-men west of Rohan, driven from their lands and enemies of the Rohirrim."
        },
        {
          name: "Easterlings and Haradrim",
          text: "The peoples of Rhûn, in the east, and of Harad, in the south. Many served Sauron, out of fear or old grudges against Gondor."
        },
        {
          name: "Drúedain",
          text: "The Wild Men of the woods, the Woses. They guided the Rohirrim to Minas Tirith in 3019."
        }
      ]
    },
    anaos: {
      type: "povo",
      group: "The Free Peoples",
      color: "anaos",
      name: "Dwarves",
      summary: "The Khazâd, the people of Aulë",
      paras: [
        "They are not Children of Ilúvatar by origin. They were made by the Vala Aulë, impatient for the coming of the Children, and Eru adopted them and gave them a life of their own, on condition that they sleep until after the awakening of the Elves. That is why they are hard, stubborn, resistant to fire and to domination. The Rings of Power never managed to subdue them, they only increased their greed for gold.",
        "They descend from Seven Fathers. The eldest is [[durin|Durin]], father of the Longbeards, the people of [[moria|Khazad-dûm]], of [[erebor|Erebor]] and of the [[ferro|Iron Hills]]. In the First Age there were two great cities in the Blue Mountains, Nogrod and Belegost.",
        "They are miners, masons and smiths without equal. They keep their own language, [[khuzdul|Khuzdul]], and their own true names secret. Tolkien deliberately wrote \"Dwarves\" rather than the standard plural \"dwarfs\"."
      ],
      facts: [
        { label: "Own name", value: "Khazâd" },
        { label: "In Sindarin", value: "Naugrim or Hadhodrim" },
        { label: "Lifespan", value: "about 250 years" }
      ]
    },
    hobbits: {
      type: "povo",
      group: "The Free Peoples",
      color: "hobbits",
      name: "Hobbits",
      summary: "The Little People, the folk of the Shire",
      paras: [
        "A branch of [[homens|Men]], of forgotten origin. They stand about half the height of a Man, with hairy feet that have tough soles, and a taste for food, gardens and quiet. They appear in the records around 1050 of the Third Age, when they left the Anduin vale because of the shadow in [[trevamata|Mirkwood]] and crossed the mountains.",
        "They lived in [[bri|Bree]] and, from 1601, in the [[condado|Shire]]. Nobody counted on them, neither the Wise nor [[sauron|Sauron]]. They resist the Ring better than any other people, and it was four of them who decided the War of the Ring: [[bilbo|Bilbo]], [[frodo|Frodo]], [[sam|Sam]] and, in the worst way, [[gollum|Gollum]]."
      ],
      facts: [{ label: "In Westron", value: "kuduk" }, { label: "In Sindarin", value: "periannath, 'halflings'" }],
      branches: [
        { name: "Harfoots", text: "The most numerous and the smallest. They prefer hills and burrows." },
        { name: "Stoors", text: "Broader and stronger. They like rivers and boats. Sméagol was of this branch." },
        {
          name: "Fallohides",
          text: "The tallest and fairest, friends of Elves and of adventures. The Tooks and the Brandybucks have much of this blood."
        }
      ]
    },
    ents: {
      type: "povo",
      group: "The Free Peoples",
      color: "outros",
      name: "Ents",
      summary: "The Shepherds of the Trees",
      paras: [
        "Giants in the shape of trees, made at the request of Yavanna to protect the forests from axes. They are among the oldest living beings in Middle-earth. They learned to speak from the Elves and made their own language, [[entes|Entish]].",
        "The Entwives preferred gardens and orchards and withdrew east of the Anduin. Their lands were burned in the war of the Last Alliance, and they were never seen again. Without them no new Ents are born.",
        "At the end of the Third Age few remain, almost all in [[fangorn|Fangorn]]. Led by [[barbarvore|Treebeard]], they destroyed [[isengard|Isengard]] in March 3019."
      ]
    },
    istari: {
      type: "povo",
      group: "The Free Peoples",
      color: "outros",
      name: "Istari, the Wizards",
      summary: "Five Maiar sent against Sauron",
      paras: [
        "Around the year 1000 of the Third Age, five old men landed at the [[portos|Grey Havens]]. They were [[ainur|Maiar]] sent by the Valar to help the free peoples against [[sauron|Sauron]]. They came in the bodies of aged Men, subject to weariness, fear and error, and forbidden to dominate by force or to face Sauron power against power. Their task was to counsel and encourage.",
        "Only one of them fulfilled it to the end."
      ],
      branches: [
        { name: "Saruman the White", text: "Curumo in Valinor. Head of the order and of the White Council. He betrayed the mission." },
        { name: "Gandalf the Grey", text: "Olórin in Valinor. The only one who remained faithful." },
        { name: "Radagast the Brown", text: "Aiwendil. He devoted himself to birds and beasts and forgot the mission." },
        { name: "The two Blue Wizards", text: "Alatar and Pallando. They went east and did not return to the tales." }
      ]
    },
    aguias: {
      type: "povo",
      group: "The Free Peoples",
      color: "outros",
      name: "Eagles",
      summary: "The messengers of Manwë",
      paras: [
        "Giant, speaking birds, sent by Manwë to watch over Middle-earth. In the First Age their lord was Thorondor, who rescued the body of Fingolfin and fought in the War of Wrath. In the Third Age it is Gwaihir, the Windlord.",
        "They appear at decisive moments and of their own will: they saved the company of [[thorin|Thorin]], fought in the Battle of Five Armies, bore [[gandalf|Gandalf]] away from Orthanc and rescued [[frodo|Frodo]] and [[sam|Sam]] from the slopes of [[perdicao|Mount Doom]]."
      ]
    },
    orques: {
      type: "povo",
      group: "Servants of the Shadow",
      color: "sombra",
      name: "Orcs",
      summary: "The soldiers of Morgoth and Sauron",
      paras: [
        "Creatures bred by [[melkor|Melkor]] in the Elder Days, in mockery of the Children of Ilúvatar. The Silmarillion says they came from captured and corrupted Elves. Tolkien was never satisfied with that answer and tried others in late texts, because Evil, in his world, cannot create life, only spoil it.",
        "They hate the sun, live in tribes that quarrel among themselves and speak debased versions of other languages. Goblin is another word for the same people, used more in The Hobbit. The Uruk-hai, larger and resistant to light, appeared out of [[mordor|Mordor]] around 2475 of the Third Age, and [[saruman|Saruman]] bred his own in [[isengard|Isengard]]."
      ]
    },
    trolls: {
      type: "povo",
      group: "Servants of the Shadow",
      color: "sombra",
      name: "Trolls",
      summary: "Made in mockery of the Ents",
      paras: [
        "Giants of enormous strength and little intelligence, bred by [[melkor|Melkor]] in the darkness. Ordinary Trolls turn to stone in the light of the sun, like the three that [[bilbo|Bilbo]] met. At the end of the Third Age [[sauron|Sauron]] made the Olog-hai, cleverer and able to endure the day as long as his will sustained them."
      ]
    },
    dragoes: {
      type: "povo",
      group: "Servants of the Shadow",
      color: "sombra",
      name: "Dragons",
      summary: "The great serpents of Morgoth",
      paras: [
        "Bred by [[melkor|Morgoth]] in [[angband|Angband]]. They are intelligent, they speak, they mesmerize with their gaze and they have a passion for treasure."
      ],
      branches: [
        {
          name: "Glaurung",
          text: "The Father of Dragons, wingless. He sacked Nargothrond and was slain by Túrin in 499 of the First Age."
        },
        { name: "Ancalagon the Black", text: "The greatest of the winged dragons. Eärendil cast him down in the War of Wrath." },
        { name: "Scatha", text: "A dragon of the Grey Mountains, slain by an ancestor of the Rohirrim." },
        { name: "Smaug", text: "The last of the great ones. He took Erebor in 2770 and died in 2941." }
      ]
    },
    balrogs: {
      type: "povo",
      group: "Servants of the Shadow",
      color: "sombra",
      name: "Balrogs",
      summary: "The demons of fire, the Valaraukar",
      paras: [
        "[[ainur|Maiar]] whom [[melkor|Melkor]] corrupted in the beginning: spirits of fire wrapped in shadow, armed with whips of flame. Their lord was Gothmog, who slew [[feanor|Fëanor]] and died in the fall of [[gondolin|Gondolin]].",
        "Almost all were destroyed in the War of Wrath. One hid beneath the Misty Mountains and slept for more than five thousand years, until the [[anaos|Dwarves]] woke it in [[moria|Moria]] in 1980 of the Third Age. [[gandalf|Gandalf]] slew it in January 3019."
      ]
    },
    nazgul: {
      type: "povo",
      group: "Servants of the Shadow",
      color: "sombra",
      name: "Nazgûl",
      summary: "The Ringwraiths, the Nine",
      paras: [
        "Nine kings and lords of [[homens|Men]] who accepted Rings of Power from [[sauron|Sauron]]. They gained power and a life that did not end, until they faded and became shadows bound to his will. They first appear around 2251 of the Second Age.",
        "The chief is the [[bruxo|Witch-king of Angmar]]. The second is Khamûl, the Easterling, who commanded [[dolguldur|Dol Guldur]]. Their chief weapon is fear. In 3018 they set out as Black Riders in search of the [[condado|Shire]] and, later, rode winged beasts. They were undone with the destruction of the Ring."
      ],
      facts: [
        { label: "In the Black Speech", value: "nazg, 'ring', and gûl, 'wraith'" },
        { label: "In Quenya", value: "Úlairi" }
      ]
    },
    panorama: {
      type: "lingua",
      group: "Overview",
      color: "outros",
      name: "How the languages are related",
      summary: "The languages came before the stories",
      paras: [
        "Tolkien was a philologist, a professor of Anglo-Saxon at Oxford. He said the stories were made to give a world to the languages, and not the other way round. That is why the names of Middle-earth have meaning and kinship: anyone who knows a few roots can read the map.",
        "The Elvish languages form a true family, with a common ancestor and regular sound changes. [[quenya|Quenya]] and [[sindarin|Sindarin]] are cousins, much as Latin and Welsh would be if they shared a grandfather.",
        "One important detail: the books present themselves as a translation. The language the characters speak is [[westron|Westron]], and Tolkien rendered it as English. The languages related to Westron were given languages related to English: [[rohirrico|Rohirric]] became Old English, and the language of Dale became Old Norse. That is why the Dwarves of The Hobbit have Norse names."
      ],
      treeTitle: "The Elvish family",
      tree: "<ul><li><b>Primitive Quendian</b> <span>the speech of the Elves at Cuiviénen</span><ul>\n<li><b>Avarin</b> <span>many dialects of the Elves who stayed in the east</span></li>\n<li><b>Common Eldarin</b> <span>the speech of the Elves during the Great Journey</span><ul>\n<li><b>Quenya</b> <span>of the Vanyar and Noldor, in Valinor</span></li>\n<li><b>Common Telerin</b><ul>\n<li><b>Telerin</b> <span>of the Falmari, in Aman</span></li>\n<li><b>Sindarin</b> <span>of the Grey-elves of Beleriand</span></li>\n<li><b>Nandorin</b> <span>of the Wood-elves</span></li>\n</ul></li></ul></li></ul></li></ul>"
    },
    quenya: {
      type: "lingua",
      group: "Elvish Languages",
      color: "elfos",
      name: "Quenya",
      summary: "High-elven, the Latin of the Elves",
      paras: [
        "The language of the Vanyar and the Noldor, developed in [[valinor|Valinor]]. The exiled Noldor carried it to Middle-earth, but King Thingol, on learning of the Kinslaying at Alqualondë, forbade its use in [[beleriand|Beleriand]]. From then on Quenya ceased to be an everyday speech and became a language of ceremony, song and scholarship.",
        "The kings of [[numenor|Númenor]], of Arnor and of Gondor use names in Quenya: Elendil, Isildur, Anárion. The throne-name of [[aragorn|Aragorn]] is Elessar Telcontar. The lament that [[galadriel|Galadriel]] sings at the leave-taking of Lórien is the longest Quenya text in The Lord of the Rings.",
        "In the real world, Tolkien built it on the sound of Finnish, with a grammar and spelling close to those of Latin and Greek."
      ],
      examples: [
        { word: "elen", meaning: "star" },
        { word: "Eldar", meaning: "people of the stars" },
        { word: "anar, isil", meaning: "sun, moon" },
        { word: "namárië", meaning: "farewell" },
        { word: "Eä", meaning: "the world that is, the universe" }
      ]
    },
    sindarin: {
      type: "lingua",
      group: "Elvish Languages",
      color: "elfos",
      name: "Sindarin",
      summary: "Grey-elven, the living speech of the Elves",
      paras: [
        "The language of the Sindar of [[beleriand|Beleriand]], which changed greatly over the millennia they lived apart from their kin in Aman. The exiled Noldor adopted it, and it became the common tongue of all the Elves of western Middle-earth. It is the Elvish heard in [[valfenda|Rivendell]] and [[lorien|Lothlórien]].",
        "Almost all the names on the map are Sindarin: Mordor, Gondor, Minas Tirith, Moria, Mithrandir. The Dúnedain learned it as a language of culture and gave their children Sindarin names, such as Aragorn, Boromir and Denethor.",
        "In the real world, the inspiration is Welsh, including the consonant mutations at the beginning of words."
      ],
      examples: [
        { word: "mellon", meaning: "friend (the password of the gate of Moria)" },
        { word: "mor + dôr", meaning: "black + land: Mordor" },
        { word: "minas", meaning: "tower" },
        { word: "ithil, anor", meaning: "moon, sun: Ithilien, Minas Anor" },
        { word: "edhel", meaning: "elf" },
        { word: "mithril", meaning: "grey sheen" }
      ]
    },
    tengwar: {
      type: "lingua",
      group: "Scripts",
      color: "elfos",
      name: "Tengwar",
      summary: "The letters of Fëanor",
      paras: [
        "The most widely used Elvish alphabet. [[feanor|Fëanor]] devised it in [[valinor|Valinor]], improving on the older letters of Rúmil, the sarati. It is made for pen or brush: each letter has a stem and one or two bows, and its shape shows how the sound is produced. Letters of similar shape have similar sounds.",
        "Vowels are usually signs placed over the consonants, the tehtar. There are several modes of use, depending on the language. The inscription on the One Ring is in Tengwar, and its language is the [[falanegra|Black Speech]]."
      ]
    },
    cirth: {
      type: "lingua",
      group: "Scripts",
      color: "anaos",
      name: "Cirth",
      summary: "The runes",
      paras: [
        "An alphabet of straight strokes, good for carving in stone, wood and metal. It was devised by the Sindar of [[beleriand|Beleriand]] and organized by Daeron, the minstrel of [[doriath|Doriath]].",
        "The Elves preferred the [[tengwar|Tengwar]], but the [[anaos|Dwarves]] adopted the Cirth and adapted them to Khuzdul. This version is the Angerthas Moria, used on Balin's tomb. The runes on Thrór's map in The Hobbit are something else: they are real Anglo-Saxon runes, in keeping with the conceit of translation."
      ]
    },
    khuzdul: {
      type: "lingua",
      group: "Other Languages",
      color: "anaos",
      name: "Khuzdul",
      summary: "The secret language of the Dwarves",
      paras: [
        "According to tradition, it was given to the [[anaos|Dwarves]] by Aulë himself, and so it has hardly changed in thousands of years. They do not teach it to strangers and, among other peoples, use names taken from the language of their neighbours. Their true names are kept secret and do not even go on their tombstones.",
        "Few words are known, almost all of them place-names and the battle-cry. The Dwarves also have a sign language, the iglishmêk.",
        "In the real world, Tolkien modelled it on the Semitic languages, with roots of three consonants."
      ],
      examples: [
        { word: "Khazâd", meaning: "the Dwarves" },
        { word: "Khazad-dûm", meaning: "Mansion of the Dwarves" },
        { word: "Kheled-zâram", meaning: "Mirrormere" },
        { word: "Baruk Khazâd!", meaning: "Axes of the Dwarves! (battle-cry)" }
      ]
    },
    adunaico: {
      type: "lingua",
      group: "Other Languages",
      color: "homens",
      name: "Adûnaic",
      summary: "The language of Númenor",
      paras: [
        "The language of the [[homens|Edain]] of the House of Hador, carried to [[numenor|Númenor]]. At first it lived alongside Elvish. When the kings broke with the Elves, they began to use throne-names in Adûnaic, and speaking Elvish became a sign of opposition.",
        "[[westron|Westron]] descends from it."
      ],
      examples: [
        { word: "Anadûnê", meaning: "Land of the West, Númenor" },
        { word: "Ar-Pharazôn", meaning: "Golden King" },
        { word: "Akallabêth", meaning: "the Downfallen" }
      ]
    },
    westron: {
      type: "lingua",
      group: "Other Languages",
      color: "homens",
      name: "Westron",
      summary: "The Common Speech",
      paras: [
        "It arose in the harbours and strongholds of the Númenóreans in Middle-earth, from the blending of [[adunaico|Adûnaic]] with local languages. In the Third Age it is the lingua franca of the whole West: Hobbits, Men, Dwarves and even Orcs use it to understand one another.",
        "In the books it appears as English, and so we hardly ever see real Westron. The Appendices give a few samples, among them the real names of the hobbits."
      ],
      examples: [
        { word: "Sôval Phârë", meaning: "Common Speech" },
        { word: "kuduk", meaning: "hobbit" },
        { word: "Maura Labingi", meaning: "Frodo Baggins" },
        { word: "Banazîr Galbasi", meaning: "Samwise Gamgee" },
        { word: "Karningul", meaning: "Rivendell" }
      ]
    },
    rohirrico: {
      type: "lingua",
      group: "Other Languages",
      color: "homens",
      name: "Rohirric",
      summary: "The language of the Rohirrim",
      paras: [
        "The language of the [[homens|Men of the North]], a distant relative of [[westron|Westron]]. Since it is an older form of the same family, Tolkien rendered it as Old English. Théoden, Éomer, Éowyn, Meduseld and Edoras are Old English words.",
        "The [[hobbits|Hobbits]] lived near this people in the Anduin vale, and some words of the [[condado|Shire]] come from there. The word hobbit itself is thought to be the worn-down form of a word of this kind."
      ],
      examples: [
        { word: "kûd-dûkan", meaning: "hole-dweller, origin of kuduk" },
        { word: "holbytla", meaning: "the same word, rendered into Old English" },
        { word: "mearas", meaning: "horses (the breed of Shadowfax)" }
      ]
    },
    falanegra: {
      type: "lingua",
      group: "Other Languages",
      color: "sombra",
      name: "Black Speech",
      summary: "The language that Sauron devised",
      paras: [
        "[[sauron|Sauron]] made it in the Second Age to be the single language of all his servants. It did not work: after his first fall, only the [[nazgul|Nazgûl]] kept it in its pure form. The [[orques|Orcs]] kept pieces of it mixed into their dialects.",
        "The best-known text is the inscription on the One Ring, engraved in [[tengwar|Tengwar]] letters. When [[gandalf|Gandalf]] read it aloud at the Council of Elrond, the Elves covered their ears."
      ],
      examples: [
        { word: "nazg", meaning: "ring" },
        { word: "ghâsh", meaning: "fire" },
        { word: "burzum", meaning: "darkness" },
        { word: "uruk", meaning: "great orc" },
        { word: "snaga", meaning: "slave" }
      ]
    },
    entes: {
      type: "lingua",
      group: "Other Languages",
      color: "outros",
      name: "Entish",
      summary: "The slow language of the Ents",
      paras: [
        "A language made by the [[ents|Ents]], sonorous, full of repetitions and tones, impossible for other peoples to learn. A name in Entish tells the whole story of the thing named, and so it grows with time.",
        "[[barbarvore|Treebeard]] explains that it is only worth saying in Entish what deserves a very long time to be said. With strangers the Ents use Quenya or Westron, shaped in their own fashion."
      ]
    },
    valarin: {
      type: "lingua",
      group: "Other Languages",
      color: "outros",
      name: "Valarin",
      summary: "The speech of the Valar",
      paras: [
        "The language the [[ainur|Valar]] used among themselves in [[valinor|Valinor]]. To the ears of the Elves it sounded harsh and strange, and few tried to learn it. A few words passed into [[quenya|Quenya]], much altered."
      ]
    },
    melkor: {
      type: "figura",
      group: "Elder Days",
      color: "sombra",
      name: "Melkor, Morgoth",
      summary: "The first Dark Lord",
      paras: [
        "The mightiest of the [[ainur|Ainur]]. He wished to create things of his own, which only Eru can do, and, failing, turned to spoiling what others made. He overthrew the Lamps, corrupted Maiar, bred [[orques|Orcs]], [[trolls|Trolls]] and [[dragoes|dragons]].",
        "He was held captive for three ages in [[valinor|Valinor]], feigned repentance and was set free. He sowed discord among the Noldor, slew the Two Trees with the help of Ungoliant, murdered King Finwë and stole the Silmarils. [[feanor|Fëanor]] then gave him the name Morgoth, the Black Foe of the World.",
        "He reigned in [[angband|Angband]] throughout the First Age, with the Silmarils in an iron crown. He was defeated in the War of Wrath and thrust out of the world, through the Door of Night. His lieutenant, [[sauron|Sauron]], remained."
      ]
    },
    feanor: {
      type: "figura",
      group: "Elder Days",
      color: "elfos",
      name: "Fëanor",
      summary: "The greatest craftsman of the Elves and author of the Oath",
      paras: [
        "Eldest son of Finwë, king of the Noldor. He devised the [[tengwar|Tengwar]] letters, the Seeing-stones and, around 1450 of the Years of the Trees, the three Silmarils, jewels that held the light of the Two Trees.",
        "When [[melkor|Morgoth]] slew his father and stole the jewels, Fëanor and his seven sons swore to pursue them against anyone, Vala, Elf or Man. The Oath led the Noldor back to Middle-earth and caused three Kinslayings, Elves slaying Elves. The first was at Alqualondë, where they seized the ships of the Teleri by force.",
        "Fëanor died soon after reaching [[beleriand|Beleriand]], surrounded by [[balrogs|Balrogs]]. His sons, with Maedhros and Maglor at their head, carried the Oath to the end of the Age."
      ]
    },
    luthien: {
      type: "figura",
      group: "Elder Days",
      color: "elfos",
      name: "Beren and Lúthien",
      summary: "The mortal Man and the Elf princess",
      paras: [
        "Lúthien Tinúviel was the daughter of King Thingol and of Melian the Maia, of [[doriath|Doriath]]. Beren was a [[homens|Man]] of the House of Bëor, a fugitive after the ruin of his land. Thingol, to be rid of him, demanded a Silmaril from the crown of [[melkor|Morgoth]] as the price of his daughter's hand.",
        "The two went together to [[angband|Angband]]. Lúthien put Morgoth to sleep with her singing and Beren wrenched a jewel from the crown. On the way out, the wolf Carcharoth devoured Beren's hand with the Silmaril inside. Beren died in the hunt for the wolf, and Lúthien died of grief.",
        "Before Mandos, she sang, and he was moved to pity, the only time. The two returned to life, and Lúthien chose to be mortal. It is the central tale of the legendarium for Tolkien himself: the names Beren and Lúthien are on the grave of Tolkien and his wife, Edith. [[elrond|Elrond]], [[aragorn|Aragorn]] and Arwen descend from the couple."
      ]
    },
    turin: {
      type: "figura",
      group: "Elder Days",
      color: "homens",
      name: "Túrin Turambar",
      summary: "The cursed hero",
      paras: [
        "Son of Húrin, the greatest warrior of the [[homens|Edain]]. After the Battle of Unnumbered Tears, [[melkor|Morgoth]] captured Húrin and cursed his family, forcing him to watch what was to come.",
        "Túrin grew up in [[doriath|Doriath]], fled, lived among outlaws, killed his best friend by mistake, brought [[nargothrond|Nargothrond]] to ruin and, deceived by the dragon Glaurung, unknowingly married his own sister, Niënor. He slew the dragon in 499 and killed himself on learning the truth.",
        "It is the darkest of Tolkien's stories, told in The Children of Húrin."
      ]
    },
    earendil: {
      type: "figura",
      group: "Elder Days",
      color: "homens",
      name: "Eärendil",
      summary: "The Mariner, the evening star",
      paras: [
        "Son of Tuor, a Man, and of Idril, princess of [[gondolin|Gondolin]]. He escaped as a child from the fall of the city. He married Elwing, granddaughter of [[luthien|Beren and Lúthien]], who kept the Silmaril.",
        "When the sons of [[feanor|Fëanor]] attacked the Havens of Sirion for the jewel, Elwing cast herself into the sea with it and reached her husband's ship. With the Silmaril on his prow, Eärendil achieved what no one had achieved: to reach [[valinor|Valinor]], in 542, and to ask the Valar for help in the name of Elves and Men.",
        "The Valar answered and waged the War of Wrath. Eärendil could not return. He sails the sky with the Silmaril on his brow, and is the star we call Venus. He is the father of [[elrond|Elrond]] and Elros."
      ]
    },
    durin: {
      type: "figura",
      group: "Elder Days",
      color: "anaos",
      name: "Durin the Deathless",
      summary: "The eldest of the Seven Fathers of the Dwarves",
      paras: [
        "He awoke alone on Mount Gundabad, walked south and saw a crown of stars reflected in the lake Kheled-zâram. There he founded [[moria|Khazad-dûm]]. He lived so long that he earned the name Deathless.",
        "The [[anaos|Dwarves]] believe he is born again among his descendants. Down to the Third Age there were six kings named Durin. The sixth was slain by the [[balrogs|Balrog]] in 1980 of the Third Age. [[thorin|Thorin]], Dáin and [[legolas|Gimli]] belong to Durin's Folk."
      ]
    },
    sauron: {
      type: "figura",
      group: "Second Age",
      color: "sombra",
      name: "Sauron",
      summary: "The Lord of the Rings",
      paras: [
        "A [[ainur|Maia]] of Aulë, the smith, with a passion for order and planning. [[melkor|Melkor]] seduced him early, and he was his chief lieutenant in the First Age. After the War of Wrath he even sought pardon, but would not return to Valinor to be judged.",
        "In the Second Age he presented himself to the Elves as Annatar, Lord of Gifts. In [[eregion|Eregion]] he taught the smiths to make the Rings of Power and, in secret, forged in [[perdicao|Mount Doom]] the One Ring, which rules the others. He put into it the greater part of his own power: as long as the Ring exists, he cannot be destroyed.",
        "He was taken prisoner to [[numenor|Númenor]], corrupted the king and brought about the Downfall, in which he lost his fair shape for ever. The Last Alliance defeated him in 3441, and Isildur cut the Ring from his hand.",
        "In the Third Age he returned slowly: the Necromancer in [[dolguldur|Dol Guldur]], then lord of [[mordor|Mordor]] once more. During the War of the Ring he is a will and an Eye, and never appears in person. He came to his end on 25 March 3019."
      ],
      facts: [
        { label: "Other names", value: "Annatar, the Necromancer, Gorthaur" },
        { label: "The Rings", value: "Three for the Elves, Seven for the Dwarves, Nine for Men, and the One" }
      ]
    },
    celebrimbor: {
      type: "figura",
      group: "Second Age",
      color: "elfos",
      name: "Celebrimbor",
      summary: "The smith of the Rings of Power",
      paras: [
        "Grandson of [[feanor|Fëanor]] and lord of [[eregion|Eregion]]. With the lore of Annatar, his smiths made the Rings of Power. The Three of the Elves, Narya, Nenya and Vilya, he forged alone, without [[sauron|Sauron]] ever touching them.",
        "When Sauron put the One Ring on his finger, the Elves perceived it and took off theirs. Celebrimbor sent the Three far away. Sauron invaded Eregion in 1697, captured the smith and killed him under torture without learning where the Three were."
      ]
    },
    galadriel: {
      type: "figura",
      group: "Second Age",
      color: "elfos",
      name: "Galadriel",
      summary: "The Lady of Lórien",
      paras: [
        "A princess of the Noldor, born in [[valinor|Valinor]] under the light of the Two Trees, niece of [[feanor|Fëanor]] and sister of Finrod. She came to Middle-earth with the exiles because she wanted a realm of her own. She is the only leader of that rebellion still alive in the Third Age.",
        "She married Celeborn. She received Nenya, one of the Three Rings, and with it protected [[lorien|Lothlórien]]. She is the mother of Celebrían and the grandmother of Arwen.",
        "When [[frodo|Frodo]] offered her the One Ring, she refused. She passed the test and was able to return to the West, from which she had been banned since the rebellion. She departed from the [[portos|Grey Havens]] in 3021."
      ]
    },
    elrond: {
      type: "figura",
      group: "Second Age",
      color: "elfos",
      name: "Elrond",
      summary: "The Half-elven, lord of Rivendell",
      paras: [
        "Son of [[earendil|Eärendil]] and Elwing, with the blood of Elves, Men and a Maia. At the end of the First Age the Half-elven had to choose a fate. Elrond chose that of the Elves. His twin brother, Elros, chose that of Men and was the first king of [[numenor|Númenor]].",
        "He was the herald of Gil-galad, founded [[valfenda|Rivendell]] in 1697 of the Second Age and fought in the Last Alliance. He inherited the ring Vilya from Gil-galad. He married Celebrían, daughter of [[galadriel|Galadriel]], and is the father of Arwen and of the twins Elladan and Elrohir.",
        "He raised in his house all the heirs of Isildur. [[aragorn|Aragorn]] is a distant descendant of his brother, and Arwen's choice of a mortal life repeats that of Elros."
      ]
    },
    elendil: {
      type: "figura",
      group: "Second Age",
      color: "homens",
      name: "Elendil and Isildur",
      summary: "The founders of Arnor and Gondor",
      paras: [
        "Elendil was the chief of the Faithful of [[numenor|Númenor]], those who remained friends of the Elves. He escaped the Downfall with his sons Isildur and Anárion, in nine ships, bearing the seven Seeing-stones and a seedling of the White Tree. He founded Arnor, and his sons founded Gondor.",
        "With Gil-galad, last High King of the Noldor, he formed the Last Alliance of Elves and Men. Both died fighting [[sauron|Sauron]] on the slope of [[perdicao|Mount Doom]], in 3441. Elendil's sword, Narsil, broke beneath him.",
        "Isildur used the shard of the sword to cut the One Ring from Sauron's hand. [[elrond|Elrond]] and Círdan advised him to destroy it right there, and he kept the Ring. Two years later he died at the [[lis|Gladden Fields]]."
      ]
    },
    arpharazon: {
      type: "figura",
      group: "Second Age",
      color: "homens",
      name: "Ar-Pharazôn",
      summary: "The last king of Númenor",
      paras: [
        "He took the sceptre in 3255 of the Second Age, forcibly marrying the rightful heiress, his cousin Míriel. He was the most powerful king that [[homens|Men]] ever had. In 3262 he landed at [[umbar|Umbar]] with an army so great that the troops of [[sauron|Sauron]] deserted.",
        "Sauron surrendered, was taken to [[numenor|Númenor]] and in a few years went from hostage to counsellor. He persuaded the king, already old and afraid of death, that eternal life could be taken by force. In 3319 the Great Armament landed in [[valinor|Valinor]]. The Valar laid down the governance of the world to Eru, and the island was destroyed."
      ]
    },
    gandalf: {
      type: "figura",
      group: "Third Age",
      color: "outros",
      name: "Gandalf",
      summary: "The Grey Pilgrim, Mithrandir",
      paras: [
        "The [[ainur|Maia]] Olórin, one of the five [[istari|Istari]]. On arriving, around the year 1000 of the Third Age, he received from Círdan the ring Narya, the Ring of Fire. He never had a home: for two thousand years he wandered among Elves, Men and, as no one else did, Hobbits.",
        "He discovered that the Necromancer was [[sauron|Sauron]], set [[thorin|Thorin]] and [[bilbo|Bilbo]] on the road to [[erebor|Erebor]] to take [[smaug|Smaug]] off the board and, years later, understood what Bilbo's ring was. He guided the Fellowship of the Ring as far as [[moria|Moria]], where he died defeating the [[balrogs|Balrog]].",
        "He was sent back as Gandalf the White, taking the place that [[saruman|Saruman]] abandoned. He organized the defence of Rohan and of Gondor and planned the march on the [[portao|Black Gate]]. His mission done, he departed from the [[portos|Grey Havens]] in 3021."
      ],
      facts: [{ label: "Names", value: "Olórin (Valinor), Mithrandir (Elves), Tharkûn (Dwarves), Incánus (the South)" }]
    },
    saruman: {
      type: "figura",
      group: "Third Age",
      color: "sombra",
      name: "Saruman",
      summary: "The White Wizard who wanted the Ring",
      paras: [
        "Curumo, a [[ainur|Maia]] of Aulë like [[sauron|Sauron]], and the head of the [[istari|Istari]]. He studied the arts of the Enemy so much that he came to admire them. He presided over the White Council and delayed the attack on [[dolguldur|Dol Guldur]] because he wanted the Ring to reappear.",
        "Installed in [[isengard|Isengard]], he used the Seeing-stone of Orthanc and was ensnared by Sauron. He began to play both sides: ally of Mordor and rival for the Ring. He attacked Rohan, lost at [[helm|Helm's Deep]] and saw the [[ents|Ents]] destroy Isengard.",
        "Without staff and without power, he went to take his revenge on the [[condado|Shire]]. He died at the door of Bag End, stabbed by Wormtongue, his own servant."
      ]
    },
    aragorn: {
      type: "figura",
      group: "Third Age",
      color: "homens",
      name: "Aragorn",
      summary: "Strider, King Elessar",
      paras: [
        "Heir of [[elendil|Isildur]] in direct line, born in 2931 of the Third Age. His father died when he was two, and [[elrond|Elrond]] raised him in [[valfenda|Rivendell]] under the name Estel, Hope, hiding his lineage. At twenty he learned who he was and met Arwen, Elrond's daughter.",
        "He spent decades as chieftain of the Rangers of the North and served in disguise in Rohan and in Gondor. In the War of the Ring he guided the hobbits from [[bri|Bree]], joined the Fellowship, fought at [[helm|Helm's Deep]], passed through the Paths of the Dead and reached [[minastirith|Minas Tirith]] with the fleet taken at [[pelargir|Pelargir]].",
        "He was crowned on 1 May 3019 as Elessar, king of the Reunited Kingdom of Arnor and Gondor, and married Arwen, who chose a mortal life. He reigned for 120 years."
      ],
      facts: [
        { label: "Life", value: "from 2931 of the Third Age to 120 of the Fourth Age" },
        { label: "Sword", value: "Andúril, reforged from the shards of Narsil" }
      ]
    },
    frodo: {
      type: "figura",
      group: "Third Age",
      color: "hobbits",
      name: "Frodo Baggins",
      summary: "The Ring-bearer",
      paras: [
        "An orphan adopted by [[bilbo|Bilbo]], from whom he inherited Bag End and the Ring in 3001. In September 3018 he left the [[condado|Shire]] with [[sam|Sam]], Merry and Pippin. At the Council of Elrond he volunteered to take the Ring to [[mordor|Mordor]].",
        "After the breaking of the Fellowship he went on alone with Sam, guided by [[gollum|Gollum]]. He was wounded three times along the way: by the blade of the [[bruxo|Witch-king]], by the sting of Shelob and by the Ring itself. At the Crack of Doom, at the end of his strength, he claimed the Ring for himself. The pity he had shown Gollum was what saved the mission.",
        "He returned home unable to find rest. In 3021 he embarked at the [[portos|Grey Havens]] to seek healing in the West."
      ]
    },
    sam: {
      type: "figura",
      group: "Third Age",
      color: "hobbits",
      name: "Samwise Gamgee",
      summary: "The gardener who carried the Ring-bearer",
      paras: [
        "The gardener of Bag End and companion of [[frodo|Frodo]] from beginning to end. He faced Shelob, wore the Ring for a day to save Frodo from the [[orques|Orcs]] and gave it back without hesitation. On the slopes of [[perdicao|Mount Doom]] he carried Frodo on his back.",
        "Tolkien called him the chief hero of the story. Back in the [[condado|Shire]], he replanted the trees with the earth that [[galadriel|Galadriel]] gave him, married Rosie Cotton and was Mayor seven times. According to tradition, he too crossed the sea, in old age, as the last of the Ring-bearers."
      ]
    },
    bilbo: {
      type: "figura",
      group: "Third Age",
      color: "hobbits",
      name: "Bilbo Baggins",
      summary: "The hobbit who found the Ring",
      paras: [
        "A respectable Hobbit of Hobbiton whom [[gandalf|Gandalf]] pushed into an adventure in 2941: the journey of [[thorin|Thorin]] to [[erebor|Erebor]]. In the tunnels of the Misty Mountains he found a ring and won it from [[gollum|Gollum]] in a game of riddles.",
        "He spared Gollum's life when he could have killed him. That pity, says Gandalf, rules the fate of many. He kept the Ring for sixty years, without knowing what it was, and was the first bearer to give it up of his own will.",
        "He lived the rest of his days in [[valfenda|Rivendell]], writing his memoirs and translating Elvish tales. Within the fiction, The Hobbit and The Silmarillion are his work."
      ]
    },
    gollum: {
      type: "figura",
      group: "Third Age",
      color: "hobbits",
      name: "Gollum",
      summary: "Sméagol, who kept the Ring for five hundred years",
      paras: [
        "A [[hobbits|hobbit]] of the Stoor kin, from the Anduin vale. Around 2463 of the Third Age his friend Déagol found the Ring at the [[lis|Gladden Fields]], and Sméagol killed him to keep it. Driven from home, he hid beneath the Misty Mountains, where the Ring stretched his life and consumed him.",
        "He lost the Ring to [[bilbo|Bilbo]] in 2941 and set out after it. He was captured and tortured in [[mordor|Mordor]], where he spoke the words Shire and Baggins. Later he guided [[frodo|Frodo]] and [[sam|Sam]] to the door of Mordor, torn between what remained of Sméagol and the hunger for the Ring.",
        "In the end it was he who destroyed the Ring, without meaning to, falling with it into the Crack of Doom."
      ]
    },
    legolas: {
      type: "figura",
      group: "Third Age",
      color: "elfos",
      name: "Legolas and Gimli",
      summary: "The Elf and the Dwarf of the Fellowship",
      paras: [
        "Legolas is the son of Thranduil, king of the Elves of [[trevamata|Mirkwood]]. Gimli is the son of Glóin, one of the companions of [[thorin|Thorin]], and comes from [[erebor|Erebor]]. They joined the Fellowship of the Ring as representatives of two peoples who had scarcely tolerated each other since the ruin of [[doriath|Doriath]].",
        "Their friendship began in [[lorien|Lothlórien]], where Gimli was enchanted by [[galadriel|Galadriel]]. They fought together from [[helm|Helm's Deep]] to the [[portao|Black Gate]]. After the death of [[aragorn|Aragorn]], Legolas built a ship and sailed into the West, and tradition says Gimli went with him: the only Dwarf to make that voyage."
      ]
    },
    theoden: {
      type: "figura",
      group: "Third Age",
      color: "homens",
      name: "Théoden, Éomer and Éowyn",
      summary: "The house of Eorl in the War of the Ring",
      paras: [
        "Théoden was the king of Rohan, aged before his time by the counsels of Wormtongue, an agent of [[saruman|Saruman]]. [[gandalf|Gandalf]] freed him. He won at [[helm|Helm's Deep]], rode to the relief of [[minastirith|Minas Tirith]] and died on the Pelennor Fields, on 15 March 3019.",
        "In the same battle his niece Éowyn, who had gone to war in disguise, faced the [[bruxo|Witch-king]] and slew him, with the help of the hobbit Merry. His nephew Éomer inherited the throne. Éowyn married Faramir of Gondor."
      ]
    },
    denethor: {
      type: "figura",
      group: "Third Age",
      color: "homens",
      name: "Denethor, Boromir and Faramir",
      summary: "The last Steward and his sons",
      paras: [
        "Denethor II was the last ruling Steward of Gondor, a man of great strength of will. He used the Seeing-stone of [[minastirith|Minas Tirith]] to watch [[mordor|Mordor]], and [[sauron|Sauron]] showed him only what led to despair. He burned himself alive during the siege.",
        "Boromir, the elder son, went with the Fellowship of the Ring, tried to take the Ring from [[frodo|Frodo]] and died the following day, defending Merry and Pippin. Faramir, the younger, had the Ring within reach in Ithilien and let Frodo go on. He was Steward to King [[aragorn|Elessar]] and Prince of Ithilien."
      ]
    },
    thorin: {
      type: "figura",
      group: "Third Age",
      color: "anaos",
      name: "Thorin Oakenshield",
      summary: "The king in exile who retook Erebor",
      paras: [
        "Grandson of Thrór, king of [[erebor|Erebor]] when [[smaug|Smaug]] came. He earned his nickname in the battle of Azanulbizar, before [[moria|Moria]], in 2799, when he used an oak branch as a shield. He lived for decades in exile in the Blue Mountains.",
        "In 2941 he set out with twelve companions and [[bilbo|Bilbo]] to recover the mountain. He succeeded, but the treasure mastered him, and he refused any sharing with Elves and Men. He was reconciled with Bilbo before dying in the Battle of Five Armies."
      ]
    },
    smaug: {
      type: "figura",
      group: "Third Age",
      color: "sombra",
      name: "Smaug",
      summary: "The last great dragon",
      paras: [
        "He came down from the north in 2770 of the Third Age, destroyed [[valle|Dale]], drove the [[anaos|Dwarves]] out of [[erebor|Erebor]] and slept upon the treasure for 171 years. [[gandalf|Gandalf]] feared that [[sauron|Sauron]] would use him in a war in the north, and that was the real reason for the journey of [[thorin|Thorin]].",
        "[[bilbo|Bilbo]] discovered the gap in the armour of his breast. A thrush carried the news to Bard, who slew him with the Black Arrow above Lake-town."
      ]
    },
    bruxo: {
      type: "figura",
      group: "Third Age",
      color: "sombra",
      name: "The Witch-king of Angmar",
      summary: "The Lord of the Nazgûl",
      paras: [
        "The mightiest of the nine [[nazgul|Nazgûl]], a king of Men whose name is lost. He founded [[angmar|Angmar]] and destroyed the northern kingdom. Later he took Minas Ithil and made it [[morgul|Minas Morgul]].",
        "When he fled the Battle of Fornost, the Elf Glorfindel foretold that he would not fall by the hand of a man. In the battle of the Pelennor he was slain by a woman, Éowyn, and a hobbit, Merry, whose blade had been forged in Arnor precisely against Angmar."
      ]
    },
    barbarvore: {
      type: "figura",
      group: "Third Age",
      color: "outros",
      name: "Treebeard",
      summary: "Fangorn, the eldest of the Ents",
      paras: [
        "The oldest [[ents|Ent]] still living, guardian of the forest of [[fangorn|Fangorn]]. He remembers the woods of [[beleriand|Beleriand]] and the Entwives. He is not one to hurry and he is on nobody's side, because nobody is on the side of the trees.",
        "He changed his mind when Merry and Pippin told him what [[saruman|Saruman]] was doing to the forest. He called the Entmoot and led the Ents against [[isengard|Isengard]]."
      ]
    },
    bombadil: {
      type: "figura",
      group: "Third Age",
      color: "outros",
      name: "Tom Bombadil",
      summary: "The Eldest, master of the Old Forest",
      paras: [
        "He lives with Goldberry, the River-daughter, in the Old Forest, beside the [[condado|Shire]]. He says he was there before the first rain and the first Elf. The Ring has no power at all over him: Tom puts it on his finger and does not vanish.",
        "What he is is explained nowhere, and Tolkien wished it so. He said that everyone needs a few enigmas. At the Council of Elrond they decide not to entrust him with the Ring because he would not grasp its importance and would end up losing it."
      ]
    }
  },
  eras: [
    {
      id: "arv",
      name: "Before the Sun",
      range: "uncounted",
      weight: 0,
      color: "outros",
      heading: "The Creation and the Years of the Trees",
      intro: "Before there were a Sun and a Moon, time was measured by the light of the Lamps and later by that of the Two Trees of Valinor. The years of this period are much longer than the Sun's, and the dates come from annals that Tolkien rewrote several times. They are good as an order of events.",
      events: [
        {
          year: "In the beginning",
          title: "The Music of the Ainur",
          text: "Eru Ilúvatar makes the [[ainur|Ainur]], and their Music shapes the world. [[melkor|Melkor]] introduces discord. The Valar descend to Arda to fashion it.",
          major: true
        },
        {
          year: "Days of the Lamps",
          title: "The Spring of Arda",
          text: "The Valar light the world with two great Lamps. Melkor overthrows them, and the Valar withdraw to [[valinor|Valinor]], where Yavanna makes the Two Trees grow."
        },
        {
          year: "1050",
          title: "The Elves awaken",
          text: "The [[elfos|Elves]] awake at Cuiviénen under the stars that Varda kindled. The Valar make war on Melkor to protect them and imprison him for three ages.",
          major: true
        },
        {
          year: "1105",
          title: "The Great Journey begins",
          text: "The Eldar set out to the west. The Avari stay behind. On the way the Teleri divide: the Nandor appear and, in [[beleriand|Beleriand]], the Sindar."
        },
        {
          year: "1450",
          title: "Fëanor makes the Silmarils",
          text: "The three jewels hold the light of the Two Trees. Melkor, set free, begins to covet them and to spread lies among the Noldor."
        },
        {
          year: "1495",
          title: "The Darkening of Valinor",
          text: "Melkor and Ungoliant slay the Trees. He murders King Finwë and flees with the Silmarils. [[feanor|Fëanor]] and his sons swear the Oath, and the Noldor slaughter the Teleri at Alqualondë to seize their ships.",
          major: true
        },
        {
          year: "1497",
          title: "The Noldor reach Beleriand",
          text: "Fëanor burns the ships and leaves behind the host of Fingolfin, who cross the ice of the north on foot. Fëanor dies in combat with the [[balrogs|Balrogs]]."
        },
        {
          year: "1500",
          title: "The Moon and the Sun",
          text: "From the last flower of Telperion and the last fruit of Laurelin the Valar make the Moon and the Sun. The years we know begin.",
          major: true
        }
      ]
    },
    {
      id: "pe",
      name: "First Age",
      range: "about 590 Sun years",
      weight: 590,
      color: "elfos",
      heading: "The War of the Jewels in Beleriand",
      intro: "The Age of the great tales of The Silmarillion. The exiled Noldor, the Sindar and the first Men face [[melkor|Morgoth]] in [[beleriand|Beleriand]], in a war they know they cannot win alone. Almost all the realms fall from within, through pride, secrecy or the Oath of Fëanor.",
      events: [
        {
          year: "1",
          title: "The first sunrise",
          text: "[[homens|Men]] awaken in Hildórien, in the east. The host of Fingolfin enters Beleriand to the sound of trumpets.",
          major: true
        },
        {
          year: "60",
          title: "Dagor Aglareb, the Glorious Battle",
          text: "The Noldor win and begin the Siege of [[angband|Angband]], which lasts almost four hundred years. It is the time of peace in which the realms are built."
        },
        {
          year: "116",
          title: "Gondolin is finished",
          text: "Turgon leads his people in secret to the [[gondolin|Hidden City]]. Finrod already rules [[nargothrond|Nargothrond]]."
        },
        {
          year: "310",
          title: "Elves and Men meet",
          text: "Finrod Felagund discovers the people of Bëor encamped in Beleriand. The three houses of the Edain become allies of the Elves."
        },
        {
          year: "455",
          title: "Dagor Bragollach, the Battle of Sudden Flame",
          text: "Rivers of fire and the dragon Glaurung break the siege. The following year King Fingolfin rides alone to Angband, challenges Morgoth to a duel, wounds him seven times and dies.",
          major: true
        },
        {
          year: "466",
          title: "Beren and Lúthien take a Silmaril",
          text: "The only true victory against Morgoth in the whole Age, won by [[luthien|an Elf and a Man]], without an army.",
          major: true
        },
        {
          year: "472",
          title: "Nirnaeth Arnoediad, the Unnumbered Tears",
          text: "The great alliance of Elves, Men and Dwarves is destroyed by the treachery of Men of the east. Fingon dies. Húrin is captured and cursed.",
          major: true
        },
        {
          year: "495",
          title: "Nargothrond falls",
          text: "Glaurung sacks the city. [[turin|Túrin]] slays the dragon in 499 and dies soon after."
        },
        {
          year: "502 to 506",
          title: "The ruin of Doriath",
          text: "Thingol is slain by the Dwarves of Nogrod in a dispute over the Silmaril. In 506 the sons of Fëanor attack [[doriath|Doriath]]: it is the second Kinslaying."
        },
        {
          year: "510",
          title: "The Fall of Gondolin",
          text: "Betrayed by Maeglin, the last city of the Noldor is destroyed. Tuor, Idril and little [[earendil|Eärendil]] escape through a tunnel.",
          major: true
        },
        {
          year: "538",
          title: "The attack on the Havens of Sirion",
          text: "The third Kinslaying. Elwing throws herself into the sea with the Silmaril. Her sons, [[elrond|Elrond]] and Elros, are captured and raised by Maglor."
        },
        {
          year: "542",
          title: "Eärendil reaches Valinor",
          text: "With the Silmaril, the Mariner crosses the enchanted seas and begs the Valar for pardon and succour.",
          major: true
        },
        {
          year: "545 to 587",
          title: "The War of Wrath",
          text: "The host of Valinor destroys Angband. Ancalagon and the winged dragons are cast down. Morgoth is bound and thrust out of the world. Beleriand sinks beneath the sea. The two remaining Silmarils are lost, one in the earth and the other in the sea.",
          major: true
        }
      ]
    },
    {
      id: "se",
      name: "Second Age",
      range: "3,441 years",
      weight: 3441,
      color: "homens",
      heading: "Númenor and the Rings of Power",
      intro: "The longest Age and the least told. It has two threads that cross at the end: the rise and fall of [[numenor|Númenor]], and the forging of the Rings of Power by [[sauron|Sauron]]. It ends with his first defeat.",
      events: [
        {
          year: "1",
          title: "Lindon and the Grey Havens",
          text: "The Elves who remain in Middle-earth gather in Lindon under Gil-galad, last High King of the Noldor. Círdan founds the [[portos|Grey Havens]]."
        },
        {
          year: "32",
          title: "The Edain arrive in Númenor",
          text: "Elros Tar-Minyatur is the first king. He reigns 410 years and dies in 442.",
          major: true
        },
        {
          year: "750",
          title: "Founding of Eregion",
          text: "The Noldor smiths settle beside [[moria|Khazad-dûm]]."
        },
        {
          year: "c. 1000",
          title: "Sauron settles in Mordor",
          text: "Alarmed by the power of Númenor, he chooses [[mordor|Mordor]] as his stronghold and begins Barad-dûr."
        },
        {
          year: "1200",
          title: "Annatar",
          text: "Sauron presents himself to the Elves as an emissary of the Valar. Gil-galad and Elrond refuse him. The smiths of [[eregion|Eregion]] receive him."
        },
        {
          year: "c. 1500 to 1590",
          title: "The Rings of Power",
          text: "The smiths forge the Rings under Sauron's guidance. [[celebrimbor|Celebrimbor]] finishes the Three alone.",
          major: true
        },
        {
          year: "c. 1600",
          title: "The One Ring",
          text: "Sauron forges the ruling Ring in [[perdicao|Mount Doom]] and finishes Barad-dûr. The Elves perceive the trap and hide the Three.",
          major: true
        },
        {
          year: "1693 to 1701",
          title: "The War of the Elves and Sauron",
          text: "Eregion is laid waste in 1697. [[elrond|Elrond]] founds [[valfenda|Rivendell]], and the gates of Moria are shut. In 1700 the fleet of Númenor arrives, and Sauron is driven out of Eriador.",
          major: true
        },
        {
          year: "c. 2251",
          title: "The Nazgûl appear",
          text: "The nine Men who received Rings are already [[nazgul|wraiths]]. In Númenor the kings begin to speak against the Ban of the Valar."
        },
        {
          year: "3255",
          title: "Ar-Pharazôn takes the sceptre",
          text: "The Faithful, friends of the Elves, become a persecuted minority."
        },
        {
          year: "3262",
          title: "Sauron is taken to Númenor",
          text: "He surrenders to [[arpharazon|Ar-Pharazôn]] without a fight. Within a few years he is the king's chief counsellor and institutes the worship of Morgoth.",
          major: true
        },
        {
          year: "3319",
          title: "The Downfall of Númenor",
          text: "The Great Armament lands in Aman. Eru changes the shape of the world: the island sinks, the fleet is swallowed, the Earth becomes round and [[valinor|Valinor]] passes beyond the reach of mortals.",
          major: true
        },
        {
          year: "3320",
          title: "Arnor and Gondor",
          text: "[[elendil|Elendil]] and his sons found the Realms in Exile. Sauron, bodiless, returns to Mordor.",
          major: true
        },
        {
          year: "3429 to 3434",
          title: "The Last Alliance",
          text: "Sauron takes Minas Ithil. Elendil and Gil-galad gather Elves and Men, win at Dagorlad, before the [[portao|Black Gate]], and besiege Barad-dûr for seven years."
        },
        {
          year: "3441",
          title: "The fall of Sauron",
          text: "Gil-galad and Elendil die in overthrowing Sauron. Isildur cuts the Ring from his hand and refuses to destroy it.",
          major: true
        }
      ]
    },
    {
      id: "te",
      name: "Third Age",
      range: "3,021 years",
      weight: 3021,
      color: "hobbits",
      heading: "The Decline, the Lost Ring and the War of the Ring",
      intro: "Three thousand years of attrition. The Elves withdraw, the realms of the Dúnedain shrink, and [[sauron|Sauron]] gradually returns. The Ring spends almost the whole Age lost. The Hobbit and The Lord of the Rings occupy only the last eighty years.",
      events: [
        {
          year: "2",
          title: "The disaster of the Gladden Fields",
          text: "[[elendil|Isildur]] is slain by Orcs, and the Ring vanishes into the [[lis|Anduin]].",
          major: true
        },
        { year: "861", title: "Arnor divides", text: "The northern kingdom becomes three: Arthedain, Cardolan and Rhudaur." },
        {
          year: "c. 1000",
          title: "The Istari arrive",
          text: "Five [[istari|Wizards]] land at the Grey Havens."
        },
        {
          year: "c. 1050",
          title: "The shadow in Greenwood",
          text: "A power settles in [[dolguldur|Dol Guldur]], and the forest comes to be called [[trevamata|Mirkwood]]. The [[hobbits|Hobbits]] appear for the first time in the records, crossing the mountains into Eriador."
        },
        {
          year: "c. 1300",
          title: "The realm of Angmar",
          text: "The chief of the Nazgûl founds [[angmar|Angmar]] to destroy the kingdoms of the North. In 1409 the tower of [[topo|Amon Sûl]] falls."
        },
        {
          year: "1432 to 1447",
          title: "The Kin-strife",
          text: "Civil war in Gondor. [[osgiliath|Osgiliath]] burns, and the defeated flee to [[umbar|Umbar]]."
        },
        {
          year: "1601",
          title: "Founding of the Shire",
          text: "Marcho and Blanco cross the Brandywine. Year 1 of the [[condado|Shire]] Reckoning.",
          major: true
        },
        {
          year: "1636",
          title: "The Great Plague",
          text: "Coming from the east, it depopulates Gondor and Rhovanion. The watch on Mordor is abandoned."
        },
        {
          year: "1974 to 1975",
          title: "The end of the northern kingdom",
          text: "Angmar takes [[fornost|Fornost]]. The next year it is destroyed, and the [[bruxo|Witch-king]] flees south.",
          major: true
        },
        {
          year: "1980",
          title: "Durin's Bane",
          text: "The Dwarves awaken the [[balrogs|Balrog]] in [[moria|Khazad-dûm]] and abandon the city. In 1999 Thráin I founds [[erebor|Erebor]].",
          major: true
        },
        { year: "2002", title: "Minas Ithil falls", text: "The Nazgûl turn it into [[morgul|Minas Morgul]]." },
        {
          year: "2050",
          title: "The Stewards",
          text: "King Eärnur accepts the challenge of the Witch-king, enters Minas Morgul and does not return. The Stewards begin to govern Gondor."
        },
        {
          year: "2063 to 2460",
          title: "The Watchful Peace",
          text: "[[gandalf|Gandalf]] goes to Dol Guldur, and Sauron withdraws to the east. When he returns, stronger, the peace ends."
        },
        {
          year: "2463",
          title: "The White Council and the Ring found",
          text: "The Wise form the Council, with [[saruman|Saruman]] at its head. At about the same time Déagol finds the Ring, and Sméagol kills him. [[gollum|Gollum]] is born.",
          major: true
        },
        {
          year: "2510",
          title: "Eorl and the founding of Rohan",
          text: "The riders of the north save Gondor on the Field of Celebrant and receive the land that will be [[edoras|Rohan]].",
          major: true
        },
        {
          year: "2758 to 2759",
          title: "The Long Winter",
          text: "Rohan is invaded, and King Helm holds out in [[helm|Helm's Deep]]. Saruman settles in [[isengard|Isengard]]."
        },
        {
          year: "2770",
          title: "Smaug takes Erebor",
          text: "The dragon destroys [[valle|Dale]] and drives out the Dwarves. From 2793 to 2799 comes the war of the Dwarves against the Orcs, ended in the battle of Azanulbizar."
        },
        {
          year: "2850",
          title: "Gandalf enters Dol Guldur",
          text: "He confirms that the Necromancer is Sauron and receives from the dying Thráin the map and the key of Erebor."
        },
        {
          year: "2931",
          title: "Aragorn is born",
          text: "The heir of Isildur is raised in [[valfenda|Rivendell]] under the name Estel."
        },
        {
          year: "2941",
          title: "Bilbo's journey",
          text: "It is the story of The Hobbit. [[bilbo|Bilbo]] finds the Ring, [[smaug|Smaug]] dies, [[thorin|Thorin]] falls in the Battle of Five Armies. In the same year the White Council drives Sauron out of Dol Guldur.",
          major: true
        },
        {
          year: "2951",
          title: "Sauron declares himself",
          text: "Back in [[mordor|Mordor]], he rebuilds Barad-dûr and sends three Nazgûl to reoccupy Dol Guldur."
        },
        {
          year: "3001",
          title: "The Long-expected Party",
          text: "Bilbo turns 111, vanishes in the middle of his speech and leaves the Ring to [[frodo|Frodo]]. Gandalf spends seventeen years investigating."
        },
        {
          year: "3018 to 3019",
          title: "The War of the Ring",
          text: "It is the story of The Lord of the Rings. The main dates:",
          major: true,
          keyDates: [
            { date: "23 Sep. 3018", text: "Frodo leaves Bag End. The Black Riders arrive in the Shire." },
            { date: "6 Oct.", text: "Frodo is wounded at Weathertop." },
            { date: "25 Oct.", text: "The Council of Elrond." },
            { date: "25 Dec.", text: "The Fellowship of the Ring leaves Rivendell." },
            { date: "15 Jan. 3019", text: "Gandalf falls on the Bridge of Khazad-dûm." },
            { date: "26 Feb.", text: "The Fellowship breaks. Boromir dies." },
            { date: "3 and 4 Mar.", text: "Battle of the Hornburg. The Ents destroy Isengard." },
            { date: "15 Mar.", text: "Battle of the Pelennor Fields. Théoden and the Witch-king die." },
            { date: "25 Mar.", text: "The Ring is destroyed. Barad-dûr falls." },
            { date: "1 May", text: "Coronation of King Elessar." },
            { date: "3 Nov.", text: "Battle of Bywater. Saruman dies." }
          ]
        },
        {
          year: "29 Sep. 3021",
          title: "The Ring-bearers depart",
          text: "[[frodo|Frodo]], [[bilbo|Bilbo]], [[gandalf|Gandalf]], [[elrond|Elrond]] and [[galadriel|Galadriel]] embark at the [[portos|Grey Havens]]. The Three Rings leave Middle-earth. End of the Third Age.",
          major: true
        }
      ]
    },
    {
      id: "qe",
      name: "Fourth Age",
      range: "open-ended",
      weight: 0,
      color: "homens",
      heading: "The Dominion of Men",
      intro: "With the departure of the Ring-bearers the Age of [[homens|Men]] begins. The Elves who remain go on departing, the Dwarves and Hobbits withdraw, and the world grows ever more like our own. Tolkien began a sequel, The New Shadow, and abandoned it after a few pages.",
      events: [
        {
          year: "6",
          title: "The Shire protected",
          text: "King Elessar forbids Men to enter the [[condado|Shire]] and makes it a free land under the protection of the sceptre of the North. [[sam|Sam]] is elected Mayor for the first of seven times."
        },
        {
          year: "61",
          title: "Sam crosses the sea",
          text: "After the death of Rosie, Sam gives the Red Book to his daughter Elanor and goes to the Grey Havens."
        },
        {
          year: "63",
          title: "Merry and Pippin",
          text: "The two leave the Shire, old, and go to die in Gondor. They are buried beside the kings."
        },
        {
          year: "120",
          title: "King Elessar dies",
          text: "[[aragorn|Aragorn]] lays down his life of his own will, as the kings of Númenor did in the good days, after 120 years of reign. Arwen dies the next year in an empty Lórien. [[legolas|Legolas]] builds a ship and sails with Gimli.",
          major: true
        }
      ]
    }
  ],
  books: [
    {
      year: "1937",
      title: "The Hobbit",
      originalTitle: "The Hobbit",
      covers: "Third Age, year 2941",
      text: "Bilbo's journey with Thorin and the Dwarves to Erebor. Written for children and linked to the rest of the legendarium only later. It is where the Ring first appears."
    },
    {
      year: "1954 to 1955",
      title: "The Lord of the Rings",
      originalTitle: "The Lord of the Rings",
      covers: "Third Age, 3001 to 3021",
      text: "The War of the Ring, in three volumes: The Fellowship of the Ring, The Two Towers and The Return of the King. The Appendices in the third volume carry the chronology, the family trees, the calendars and the notes on languages and writing."
    },
    {
      year: "1962",
      title: "The Adventures of Tom Bombadil",
      originalTitle: "The Adventures of Tom Bombadil",
      covers: "Poems of the Shire",
      text: "Sixteen poems presented as verses from the Red Book, the collection of the hobbits' writings."
    },
    {
      year: "1977",
      title: "The Silmarillion",
      originalTitle: "The Silmarillion",
      covers: "From the creation to the end of the Third Age",
      text: "Edited by Christopher Tolkien after his father's death. It brings together the Music of the Ainur, the list of the Valar, the history of the Silmarils in the First Age, the Downfall of Númenor and a summary of the Rings of Power."
    },
    {
      year: "1980",
      title: "Unfinished Tales",
      originalTitle: "Unfinished Tales",
      covers: "All three Ages",
      text: "Narratives that Tolkien did not finish, with notes by his son: Tuor in Gondolin, the history of Númenor, Galadriel and Celeborn, the Istari, the Seeing-stones and the behind-the-scenes of the journey to Erebor."
    },
    {
      year: "1983 to 1996",
      title: "The History of Middle-earth",
      originalTitle: "The History of Middle-earth",
      covers: "The manuscripts",
      text: "Twelve volumes in which Christopher Tolkien publishes his father's drafts, from the first versions of 1917 to the final texts. It shows how the stories changed. It is reading for study."
    },
    {
      year: "2007",
      title: "The Children of Húrin",
      originalTitle: "The Children of Húrin",
      covers: "First Age",
      text: "The story of Túrin and Niënor told as a continuous novel."
    },
    {
      year: "2017",
      title: "Beren and Lúthien",
      originalTitle: "Beren and Lúthien",
      covers: "First Age",
      text: "The successive versions of the story, in prose and in verse, side by side."
    },
    {
      year: "2018",
      title: "The Fall of Gondolin",
      originalTitle: "The Fall of Gondolin",
      covers: "First Age",
      text: "The versions of the story of Tuor and the Hidden City. It was the last book edited by Christopher Tolkien."
    },
    {
      year: "2021",
      title: "The Nature of Middle-earth",
      originalTitle: "The Nature of Middle-earth",
      covers: "Late essays",
      text: "Texts from Tolkien's last years on time, the ageing of the Elves, body and spirit, and geography. Edited by Carl Hostetter."
    },
    {
      year: "2022",
      title: "The Fall of Númenor",
      originalTitle: "The Fall of Númenor",
      covers: "Second Age",
      text: "Everything Tolkien wrote about the Second Age, gathered in chronological order by Brian Sibley."
    }
  ],
  sources: [
    { label: "Tolkien Gateway: Timeline", url: "https://tolkiengateway.net/wiki/Timeline" },
    { label: "Tolkien Gateway: Timeline/First Age", url: "https://tolkiengateway.net/wiki/Timeline/First_Age" },
    { label: "Tolkien Gateway: Timeline/Second Age", url: "https://tolkiengateway.net/wiki/Timeline/Second_Age" },
    { label: "Tolkien Gateway: Timeline/Third Age", url: "https://tolkiengateway.net/wiki/Timeline/Third_Age" },
    {
      label: "Wikipedia: Languages constructed by Tolkien",
      url: "https://en.wikipedia.org/wiki/Languages_constructed_by_Tolkien"
    },
    {
      label: "Portuguese Wikipedia: O Senhor dos Anéis (Brazilian editions and translated names)",
      url: "https://pt.wikipedia.org/wiki/O_Senhor_dos_An%C3%A9is"
    }
  ]
};
