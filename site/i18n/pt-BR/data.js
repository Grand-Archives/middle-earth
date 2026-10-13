/* Content for the pt-BR page (ES module: `export default { ... }`).
 *
 * A complete translation is a copy of this file with every text value translated; keys, ids, numbers, colors and URLs stay the same.
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
      misty: "Montanhas Nevoentas",
      white: "Montanhas Brancas",
      blue: "Montanhas Azuis",
      belegaer: "Belegaer, o Grande Mar",
      anduin: "Anduin",
      rhunSea: "Mar de Rhûn"
    }
  },
  profiles: {
    condado: {
      type: "lugar",
      group: "Eriador",
      color: "hobbits",
      name: "O Condado",
      summary: "A terra dos Hobbits, no noroeste",
      paras: [
        "Região fértil e tranquila de Eriador, entre o rio Brandevin e as Colinas Distantes. Foi cedida aos [[hobbits|Hobbits]] em 1601 da Terceira Era pelo rei de Arthedain, e os irmãos Marcho e Blanco atravessaram o Brandevin com um grande grupo vindo de [[bri|Bri]]. Esse ano é o ano 1 do Registro do Condado, o calendário dos Hobbits.",
        "Divide-se em quatro Quartas, tem um Thain e um Prefeito, quase nenhum governo e nenhum exército. Durante séculos foi protegido sem saber pelos Caminheiros, os [[homens|Dúnedain]] do Norte. Vila-dos-Hobbits e Bolsão, a toca de [[bilbo|Bilbo]] e [[frodo|Frodo]], ficam na Quarta Oeste.",
        "Na Guerra do Anel o Condado foi ocupado por homens a serviço de [[saruman|Saruman]]. Os Hobbits o libertaram na Batalha de Beirágua, em novembro de 3019, a última batalha da guerra."
      ],
      facts: [
        { label: "Fundação", value: "1601 da Terceira Era" },
        { label: "Povo", value: "Hobbits" },
        { label: "Em Westron", value: "Sûza" }
      ]
    },
    bri: {
      type: "lugar",
      group: "Eriador",
      color: "homens",
      name: "Bri",
      summary: "A encruzilhada de Eriador",
      paras: [
        "Vila antiga no cruzamento da Grande Estrada Leste com o Caminho Verde. É o único lugar da Terra-média onde [[homens|Homens]] e [[hobbits|Hobbits]] vivem lado a lado. Os Hobbits passaram por ali antes de fundar o [[condado|Condado]].",
        "Na estalagem do Pônei Empinado, [[gandalf|Gandalf]] encontrou [[thorin|Thorin]] e combinou a viagem a [[erebor|Erebor]]. Foi lá também que [[frodo|Frodo]] conheceu Passolargo, o nome que a gente de Bri dava a [[aragorn|Aragorn]]."
      ]
    },
    portos: {
      type: "lugar",
      group: "Eriador",
      color: "elfos",
      name: "Portos Cinzentos",
      summary: "Mithlond, de onde partem os navios élficos",
      paras: [
        "Porto dos [[elfos|Elfos]] no Golfo de Lûn, fundado no ano 1 da Segunda Era em Lindon, o pedaço de [[beleriand|Beleriand]] que sobrou acima do mar. Seu senhor é Círdan, o Armador, o mais velho dos Elfos na Terra-média.",
        "É dali que saem os navios para [[valinor|Valinor]] pela Rota Reta. Em 29 de setembro de 3021, [[frodo|Frodo]], [[bilbo|Bilbo]], [[gandalf|Gandalf]], [[elrond|Elrond]] e [[galadriel|Galadriel]] embarcaram ali, e esse dia fecha a Terceira Era."
      ]
    },
    valfenda: {
      type: "lugar",
      group: "Eriador",
      color: "elfos",
      name: "Valfenda",
      summary: "Imladris, a Última Casa Hospitaleira",
      paras: [
        "Vale escondido aos pés das Montanhas Nevoentas. [[elrond|Elrond]] o fundou em 1697 da Segunda Era como refúgio, depois que [[sauron|Sauron]] destruiu [[eregion|Eregion]]. Protegido por Vilya, um dos Três Anéis, resistiu a todas as guerras.",
        "Foi casa de sabedoria e de memória: ali se guardaram os fragmentos da espada Narsil e ali foram criados os herdeiros de Isildur, entre eles [[aragorn|Aragorn]]. Em 25 de outubro de 3018 o Conselho de Elrond decidiu destruir o Um Anel e formou a Sociedade do Anel."
      ],
      facts: [
        { label: "Fundação", value: "1697 da Segunda Era" },
        { label: "Em Sindarin", value: "Imladris, 'vale fundo da fenda'" }
      ]
    },
    topo: {
      type: "lugar",
      group: "Eriador",
      color: "homens",
      name: "Topo-do-Vento",
      summary: "Amon Sûl, a torre de vigia de Arnor",
      paras: [
        "Colina na ponta sul das Colinas do Vento. No alto ficava a torre de Amon Sûl, que guardava a principal das Pedras-videntes (palantíri) do Norte. A torre foi destruída em 1409 da Terceira Era pelas forças de [[angmar|Angmar]].",
        "Em 6 de outubro de 3018, nas ruínas, o [[bruxo|Rei-bruxo]] feriu [[frodo|Frodo]] com uma lâmina de Morgul."
      ]
    },
    fornost: {
      type: "lugar",
      group: "Eriador",
      color: "homens",
      name: "Fornost e Annúminas",
      summary: "As capitais do reino do Norte",
      pinLabel: "Fornost",
      paras: [
        "Arnor, o reino do Norte dos [[homens|Dúnedain]], foi fundado por [[elendil|Elendil]] em 3320 da Segunda Era, com capital em Annúminas, à beira do lago Nenuial. Em 861 da Terceira Era o reino se dividiu em três: Arthedain, Cardolan e Rhudaur.",
        "Fornost virou a capital de Arthedain, o último dos três a cair. O [[bruxo|Rei-bruxo]] de [[angmar|Angmar]] a tomou em 1974. No ano seguinte um exército de Gondor e dos Elfos destruiu Angmar na Batalha de Fornost, mas o reino do Norte já não existia. Seus herdeiros seguiram como chefes dos Caminheiros até [[aragorn|Aragorn]]."
      ]
    },
    angmar: {
      type: "lugar",
      group: "Eriador",
      color: "sombra",
      name: "Angmar",
      summary: "O reino do Rei-bruxo, com sede em Carn Dûm",
      paras: [
        "Reino fundado por volta de 1300 da Terceira Era no extremo norte das Montanhas Nevoentas. Seu senhor era o chefe dos [[nazgul|Nazgûl]], conhecido desde então como [[bruxo|Rei-bruxo de Angmar]]. O objetivo era um só: destruir os reinos dos Dúnedain do Norte.",
        "Levou quase sete séculos, mas conseguiu. Angmar foi aniquilado em 1975, logo depois de tomar [[fornost|Fornost]]."
      ]
    },
    eregion: {
      type: "lugar",
      group: "Eriador",
      color: "elfos",
      name: "Eregion",
      summary: "Azevim, onde os Anéis foram forjados",
      paras: [
        "Reino dos [[elfos|Noldor]] fundado em 750 da Segunda Era ao pé das Montanhas Nevoentas, junto ao portão oeste de [[moria|Khazad-dûm]]. Foi o maior caso de amizade entre Elfos e [[anaos|Anãos]].",
        "Seus ferreiros, liderados por [[celebrimbor|Celebrimbor]], receberam [[sauron|Sauron]] disfarçado de Annatar e com ele forjaram os Anéis de Poder. Quando descobriram a traição, Sauron invadiu e arrasou o reino em 1697. Na Terceira Era só restavam azevinhos e pedras."
      ]
    },
    moria: {
      type: "lugar",
      group: "Montanhas Nevoentas",
      color: "anaos",
      name: "Moria",
      summary: "Khazad-dûm, a maior mansão dos Anãos",
      paras: [
        "Cidade subterrânea escavada sob as Montanhas Nevoentas por [[durin|Durin]], o Imortal, nos Dias Antigos. Foi a morada do Povo de Durin por milhares de anos e a única fonte de mithril, a prata-verdadeira.",
        "Em 1980 da Terceira Era os [[anaos|Anãos]] cavaram fundo demais e despertaram um [[balrogs|Balrog]], a Ruína de Durin. No ano seguinte abandonaram a cidade, que passou a se chamar Moria, o Abismo Negro. Balin tentou retomá-la em 2989 e morreu ali cinco anos depois.",
        "A Sociedade do Anel atravessou Moria em janeiro de 3019. Na Ponte de Khazad-dûm, [[gandalf|Gandalf]] enfrentou o Balrog e caiu com ele."
      ],
      facts: [
        { label: "Em Khuzdul", value: "Khazad-dûm, 'Mansão dos Anãos'" },
        { label: "Em Sindarin", value: "Moria, 'Abismo Negro'" }
      ]
    },
    lorien: {
      type: "lugar",
      group: "Vale do Anduin",
      color: "elfos",
      name: "Lothlórien",
      summary: "A Floresta Dourada",
      paras: [
        "Reino élfico entre as Montanhas Nevoentas e o Anduin, coberto de mallorns, árvores de casca prateada e folhas douradas. Na Terceira Era foi governado por [[galadriel|Galadriel]] e Celeborn, de Caras Galadhon, a cidade nas árvores.",
        "Nenya, o anel de Galadriel, mantinha ali o tempo quase parado e impedia a entrada do inimigo. A Sociedade descansou em Lórien depois de [[moria|Moria]]. Em março de 3019 o reino repeliu três ataques de [[dolguldur|Dol Guldur]]. Com a partida de Galadriel, a floresta foi sendo abandonada."
      ]
    },
    lis: {
      type: "lugar",
      group: "Vale do Anduin",
      color: "outros",
      name: "Campos de Lis",
      summary: "Onde o Um Anel se perdeu e foi achado",
      paras: [
        "Charcos onde o rio de Lis encontra o Anduin. No ano 2 da Terceira Era, [[elendil|Isildur]] foi emboscado ali por [[orques|Orques]]. Tentou fugir a nado usando o Um Anel, mas o Anel escorregou do dedo e ele foi morto a flechadas.",
        "O Anel ficou no fundo do rio por quase 2.500 anos. Por volta de 2463 foi encontrado por Déagol, um hobbit do povo Grado, e tomado por seu amigo Sméagol, que virou [[gollum|Gollum]]."
      ]
    },
    fangorn: {
      type: "lugar",
      group: "Vale do Anduin",
      color: "outros",
      name: "Fangorn",
      summary: "A floresta dos Ents",
      paras: [
        "O que sobrou da floresta imensa que cobria Eriador nos Dias Antigos, encostada na ponta sul das Montanhas Nevoentas. É a casa dos [[ents|Ents]] e de [[barbarvore|Barbárvore]], cujo nome em Sindarin é o mesmo da floresta.",
        "Merry e Pippin chegaram ali em 29 de fevereiro de 3019. A notícia que traziam levou os Ents a marchar contra [[isengard|Isengard]]."
      ]
    },
    isengard: {
      type: "lugar",
      group: "Rohan e arredores",
      color: "sombra",
      name: "Isengard",
      summary: "O anel de pedra e a torre de Orthanc",
      paras: [
        "Fortaleza construída pelos Númenóreanos de Gondor na ponta sul das Montanhas Nevoentas: um círculo de pedra com a torre de Orthanc no meio, indestrutível, onde ficava uma das Pedras-videntes.",
        "Em 2759 da Terceira Era o Regente de Gondor entregou as chaves a [[saruman|Saruman]]. Ele a transformou em arsenal, criou ali seus Uruk-hai e passou a disputar o Anel por conta própria. Os [[ents|Ents]] destruíram Isengard em 3 de março de 3019 e inundaram o vale."
      ]
    },
    helm: {
      type: "lugar",
      group: "Rohan e arredores",
      color: "homens",
      name: "Abismo de Helm",
      summary: "O refúgio de Rohan, com o Forte-da-Trombeta",
      paras: [
        "Garganta nas Montanhas Brancas fechada por uma muralha e pelo Forte-da-Trombeta. Leva o nome do rei Helm Mão-de-Martelo, que resistiu ali ao cerco dos Terrapardenses no Inverno Longo de 2758 e 2759.",
        "Na noite de 3 para 4 de março de 3019, o rei [[theoden|Théoden]] e [[aragorn|Aragorn]] seguraram a fortaleza contra o exército de [[saruman|Saruman]], até a chegada de [[gandalf|Gandalf]] com reforços ao amanhecer."
      ]
    },
    edoras: {
      type: "lugar",
      group: "Rohan e arredores",
      color: "homens",
      name: "Edoras",
      summary: "A capital de Rohan e o salão de Meduseld",
      paras: [
        "Rohan, a Marca-dos-Cavaleiros, nasceu em 2510 da Terceira Era. Os cavaleiros de Eorl vieram do norte e salvaram Gondor na Batalha do Campo de Celebrant, e o Regente Cirion lhes deu em troca a província de Calenardhon. O Juramento de Eorl uniu os dois reinos dali em diante.",
        "Edoras fica numa colina ao pé das Montanhas Brancas, e no topo dela está Meduseld, o Paço Dourado, salão dos reis. Os [[homens|Rohirrim]] são um povo de cavaleiros, e seus cavalos descendem dos mearas, a raça de Scadufax."
      ],
      facts: [
        { label: "Fundação de Rohan", value: "2510 da Terceira Era" },
        { label: "Povo", value: "Rohirrim (Eorlingas)" }
      ]
    },
    minastirith: {
      type: "lugar",
      group: "Gondor",
      color: "homens",
      name: "Minas Tirith",
      summary: "A Cidade Branca, capital de Gondor",
      paras: [
        "Gondor, o reino do Sul dos [[homens|Dúnedain]], foi fundado em 3320 da Segunda Era por Isildur e Anárion, filhos de [[elendil|Elendil]]. Minas Tirith nasceu como Minas Anor, a Torre do Sol, fortaleza de Anárion. Tem sete níveis de muralhas talhados na encosta do Mindolluin, com a Cidadela e a Árvore Branca no topo.",
        "Depois da queda de [[osgiliath|Osgiliath]] virou a capital e ganhou o nome de Torre de Guarda. Em 2050 o último rei, Eärnur, desapareceu em [[morgul|Minas Morgul]], e os Regentes governaram por quase mil anos em nome de um rei ausente.",
        "Em 15 de março de 3019 a cidade foi cercada pelo exército de [[mordor|Mordor]]. A Batalha dos Campos de Pelennor, diante dos portões, foi a maior da Guerra do Anel. [[aragorn|Aragorn]] foi coroado ali em 1º de maio."
      ],
      facts: [
        { label: "Nome antigo", value: "Minas Anor, 'Torre do Sol'" },
        { label: "Regentes", value: "de 2050 a 3019 da Terceira Era" }
      ]
    },
    osgiliath: {
      type: "lugar",
      group: "Gondor",
      color: "homens",
      name: "Osgiliath",
      summary: "A primeira capital de Gondor, sobre o Anduin",
      paras: [
        "A Cidadela das Estrelas foi erguida nas duas margens do Anduin, com uma grande ponte no meio. Ficava entre as torres dos dois irmãos: [[minastirith|Minas Anor]] a oeste e [[morgul|Minas Ithil]] a leste.",
        "Foi queimada na Contenda-das-Famílias (1432 a 1447), esvaziada pela Grande Peste de 1636 e arruinada de vez em 2475. Na Guerra do Anel era só uma linha de defesa em ruínas."
      ]
    },
    dolamroth: {
      type: "lugar",
      group: "Gondor",
      color: "homens",
      name: "Dol Amroth",
      summary: "A cidade dos príncipes à beira-mar",
      paras: [
        "Castelo e porto num promontório da Baía de Belfalas. Seus príncipes eram de sangue númenóreano com um traço élfico, segundo a tradição. O príncipe Imrahil levou os cavaleiros do cisne à defesa de [[minastirith|Minas Tirith]] em 3019."
      ]
    },
    pelargir: {
      type: "lugar",
      group: "Gondor",
      color: "homens",
      name: "Pelargir",
      summary: "O grande porto do Anduin",
      paras: [
        "Porto fundado em 2350 da Segunda Era pelos Fiéis de [[numenor|Númenor]], bem antes de existir Gondor. Em março de 3019, [[aragorn|Aragorn]] chegou ali com o Exército dos Mortos, tomou a frota dos Corsários de [[umbar|Umbar]] e subiu o rio até a batalha de Pelennor."
      ]
    },
    umbar: {
      type: "lugar",
      group: "Sul e Leste",
      color: "sombra",
      name: "Umbar",
      summary: "O porto dos Númenóreanos Negros e dos Corsários",
      paras: [
        "Porto natural no litoral de Harad. Foi a grande base de [[numenor|Númenor]] na Terra-média, e foi ali que Ar-Pharazôn desembarcou para humilhar [[sauron|Sauron]]. Depois da Queda ficou com os Númenóreanos Negros, os Homens do Rei que serviam a Sauron.",
        "Gondor a conquistou e a perdeu mais de uma vez. Os derrotados da Contenda-das-Famílias se refugiaram ali e deram origem aos Corsários de Umbar, inimigos de Gondor por mais de mil anos."
      ]
    },
    mordor: {
      type: "lugar",
      group: "Mordor",
      color: "sombra",
      name: "Mordor e Barad-dûr",
      summary: "A Terra Negra e a Torre Sombria",
      pinLabel: "Barad-dûr",
      paras: [
        "Terra cercada de montanhas em três lados: as Ered Lithui ao norte e as Ephel Dúath a oeste e ao sul. [[sauron|Sauron]] a escolheu como reino por volta do ano 1000 da Segunda Era e começou a erguer Barad-dûr, terminada quando forjou o Um Anel, cerca de 1600.",
        "A torre foi derrubada pela Última Aliança em 3441, mas as fundações, feitas com o poder do Anel, não podiam ser destruídas enquanto ele existisse. Sauron voltou a Mordor em 2942 da Terceira Era e a reconstruiu a partir de 2951. Caiu de vez em 25 de março de 3019.",
        "O planalto de Gorgoroth, ao norte, é cinza e fumaça. O sul, em volta do mar de Núrnen, era lavrado por escravos para alimentar os exércitos."
      ],
      facts: [{ label: "Em Sindarin", value: "Mordor, 'Terra Negra'" }, { label: "Barad-dûr", value: "'Torre Sombria'" }]
    },
    perdicao: {
      type: "lugar",
      group: "Mordor",
      color: "sombra",
      name: "Monte da Perdição",
      summary: "Orodruin, onde o Anel foi feito e desfeito",
      paras: [
        "Vulcão no meio de Gorgoroth, chamado de Montanha da Perdição nas edições antigas. Dentro dele ficam as Sammath Naur, as Câmaras de Fogo, e a Fenda da Perdição. [[sauron|Sauron]] forjou ali o Um Anel, e só aquele fogo podia destruí-lo.",
        "Em 25 de março de 3019, [[frodo|Frodo]] chegou à beira da Fenda e não conseguiu jogar o Anel. [[gollum|Gollum]] o arrancou dele com uma mordida e caiu no fogo com o Anel."
      ]
    },
    morgul: {
      type: "lugar",
      group: "Mordor",
      color: "sombra",
      name: "Minas Morgul",
      summary: "A Torre de Feitiçaria, antiga Minas Ithil",
      paras: [
        "Era Minas Ithil, a Torre da Lua, a cidade de Isildur nas encostas das Ephel Dúath. Os [[nazgul|Nazgûl]] a tomaram em 2002 da Terceira Era, depois de dois anos de cerco, e ficaram com a Pedra-vidente que havia nela.",
        "Virou a base do [[bruxo|Rei-bruxo]] e a porta de [[mordor|Mordor]] para a guerra contra Gondor. Acima dela fica o passo de Cirith Ungol, com o túnel de Laracna, por onde [[frodo|Frodo]] e [[sam|Sam]] entraram em Mordor."
      ]
    },
    portao: {
      type: "lugar",
      group: "Mordor",
      color: "sombra",
      name: "Portão Negro",
      summary: "O Morannon, a entrada norte de Mordor",
      paras: [
        "Muralha com portões de ferro que fecha o desfiladeiro entre as duas cadeias de montanhas de [[mordor|Mordor]]. Diante dele fica Dagorlad, a planície da grande batalha da Última Aliança em 3434 da Segunda Era, e ao lado os Pântanos Mortos.",
        "Em 25 de março de 3019 o exército do Oeste, com [[aragorn|Aragorn]] e [[gandalf|Gandalf]], atacou o Portão sem chance de vencer. A ideia era manter o Olho de [[sauron|Sauron]] longe do [[perdicao|Monte da Perdição]]."
      ]
    },
    dolguldur: {
      type: "lugar",
      group: "Rhovanion",
      color: "sombra",
      name: "Dol Guldur",
      summary: "O Morro da Feitiçaria, no sul de Trevamata",
      paras: [
        "Fortaleza numa colina no sul de [[trevamata|Trevamata]]. Por volta de 1050 da Terceira Era uma sombra se instalou ali, e os Sábios a chamaram de Necromante. Era [[sauron|Sauron]], recuperando forma.",
        "[[gandalf|Gandalf]] entrou na fortaleza em 2850 e confirmou quem era o senhor dela. O Conselho Branco só o expulsou em 2941, o ano da viagem de [[bilbo|Bilbo]], e Sauron já tinha planejado a retirada. Depois da guerra, [[galadriel|Galadriel]] derrubou as muralhas."
      ]
    },
    trevamata: {
      type: "lugar",
      group: "Rhovanion",
      color: "elfos",
      name: "Trevamata",
      summary: "A grande floresta e o Reino da Floresta",
      paras: [
        "A maior floresta da Terra-média no fim da Terceira Era, a leste do Anduin. Chamava-se Verdemata, a Grande. Quando a sombra de [[dolguldur|Dol Guldur]] se espalhou, vieram as aranhas e a escuridão, e o nome mudou para Trevamata (Floresta das Trevas nas edições antigas).",
        "No norte fica o Reino da Floresta dos [[elfos|Elfos silvestres]], governado por Thranduil, pai de [[legolas|Legolas]], com salões escavados na rocha. [[thorin|Thorin]] e seus companheiros ficaram presos ali em 2941."
      ]
    },
    erebor: {
      type: "lugar",
      group: "Rhovanion",
      color: "anaos",
      name: "Erebor",
      summary: "A Montanha Solitária, o Reino sob a Montanha",
      paras: [
        "Montanha isolada a leste de [[trevamata|Trevamata]]. Thráin I fundou ali o Reino sob a Montanha em 1999 da Terceira Era, depois da fuga de [[moria|Moria]], e encontrou a Pedra Arken. O reino ficou rico e famoso.",
        "A riqueza atraiu [[smaug|Smaug]], que tomou a montanha em 2770. [[thorin|Thorin]] a recuperou em 2941 com doze companheiros, [[bilbo|Bilbo]] e a ajuda de [[gandalf|Gandalf]]. Na Guerra do Anel, Erebor e [[valle|Valle]] seguraram o ataque de Sauron no norte."
      ],
      facts: [{ label: "Fundação", value: "1999 da Terceira Era" }, { label: "Povo", value: "Anãos do Povo de Durin" }]
    },
    valle: {
      type: "lugar",
      group: "Rhovanion",
      color: "homens",
      name: "Valle e Cidade-do-Lago",
      summary: "Os Homens ao pé da Montanha",
      pinLabel: "Valle",
      paras: [
        "Valle era a cidade dos [[homens|Homens do Norte]] ao pé de [[erebor|Erebor]], destruída por [[smaug|Smaug]] em 2770. Os sobreviventes foram viver em Esgaroth, a Cidade-do-Lago, erguida sobre estacas no Lago Longo.",
        "Em 2941 Smaug queimou Esgaroth e foi morto por Bard, o Arqueiro, herdeiro dos senhores de Valle. Bard reconstruiu Valle e se tornou rei."
      ]
    },
    ferro: {
      type: "lugar",
      group: "Rhovanion",
      color: "anaos",
      name: "Colinas de Ferro",
      summary: "O reino de Dáin",
      paras: [
        "Colônia dos [[anaos|Anãos]] do Povo de Durin a leste de [[erebor|Erebor]]. Dali veio Dáin Pé-de-Ferro com seu exército para a Batalha dos Cinco Exércitos, em 2941. Com a morte de [[thorin|Thorin]], Dáin se tornou Rei sob a Montanha."
      ]
    },
    valinor: {
      type: "lugar",
      group: "Eras antigas",
      color: "outros",
      name: "Valinor e Aman",
      summary: "O Reino Abençoado, a oeste do Grande Mar",
      paras: [
        "Aman é o continente a oeste do mar Belegaer. Depois que [[melkor|Melkor]] destruiu as duas Lâmpadas que iluminavam o mundo, os [[ainur|Valar]] se retiraram para lá e fundaram Valinor. Yavanna fez crescer as Duas Árvores, Telperion (prateada) e Laurelin (dourada), cuja luz marca os Anos das Árvores.",
        "Os [[elfos|Elfos]] que aceitaram o convite dos Valar viveram ali, em Tirion e em Alqualondë. As Árvores foram mortas por Melkor e pela aranha Ungoliant. Da última flor e do último fruto os Valar fizeram a Lua e o Sol.",
        "Depois da Queda de [[numenor|Númenor]] o mundo foi feito redondo e Aman foi tirada dos círculos do mundo. Só os navios élficos ainda a alcançam, pela Rota Reta."
      ]
    },
    beleriand: {
      type: "lugar",
      group: "Eras antigas",
      color: "elfos",
      name: "Beleriand",
      summary: "O palco da Primeira Era, hoje sob o mar",
      paras: [
        "Grande região a oeste das Montanhas Azuis, cortada pelo rio Sirion. Quase tudo que O Silmarillion conta se passa ali: os reinos dos [[elfos|Sindar]] e dos Noldor exilados, as três casas dos [[homens|Edain]] e as cinco grandes batalhas contra [[melkor|Morgoth]].",
        "Ficavam em Beleriand [[doriath|Doriath]], [[gondolin|Gondolin]], [[nargothrond|Nargothrond]], os portos da Falas e as cidades-anãs de Nogrod e Belegost. Ao norte, além das planícies, ficava [[angband|Angband]].",
        "A Guerra da Ira, que derrubou Morgoth, despedaçou a região. Quase tudo afundou. Só restou Lindon, a faixa a oeste das Montanhas Azuis onde ficam os [[portos|Portos Cinzentos]]."
      ]
    },
    angband: {
      type: "lugar",
      group: "Eras antigas",
      color: "sombra",
      name: "Angband",
      summary: "Os Infernos de Ferro, a fortaleza de Morgoth",
      paras: [
        "Fortaleza no extremo norte, sob os três picos vulcânicos das Thangorodrim. Foi construída como posto avançado de Utumno, a primeira fortaleza de [[melkor|Melkor]], e virou sua sede quando ele voltou à Terra-média com as Silmarils.",
        "Dali saíram [[orques|Orques]], [[balrogs|Balrogs]] e [[dragoes|dragões]] durante toda a Primeira Era. Os Noldor a cercaram por quase quatrocentos anos, até a Batalha da Chama Repentina romper o cerco em 455. Foi destruída na Guerra da Ira."
      ]
    },
    gondolin: {
      type: "lugar",
      group: "Eras antigas",
      color: "elfos",
      name: "Gondolin",
      summary: "A Cidade Oculta de Turgon",
      paras: [
        "Cidade dos [[elfos|Noldor]] construída em segredo num vale cercado de montanhas, por conselho do Vala Ulmo. Ficou pronta por volta de 116 da Primeira Era e passou quase quatrocentos anos sem ser encontrada.",
        "Foi a última a cair. Maeglin, sobrinho do rei Turgon, revelou o caminho a [[melkor|Morgoth]], e a cidade foi tomada em 510 por dragões e Balrogs. Entre os que escaparam estavam Tuor, Idril e o filho deles, [[earendil|Eärendil]]."
      ]
    },
    doriath: {
      type: "lugar",
      group: "Eras antigas",
      color: "elfos",
      name: "Doriath",
      summary: "O Reino Cercado de Thingol e Melian",
      paras: [
        "Reino dos [[elfos|Sindar]] nas florestas de Neldoreth e Region, com capital em Menegroth, as Mil Cavernas. O rei era Elu Thingol, e a rainha, Melian, uma Maia. O Cinturão de Melian, um encantamento, impedia a entrada de qualquer um sem licença do rei.",
        "Foi ali que nasceu [[luthien|Lúthien]] e que cresceu [[turin|Túrin]]. A Silmaril recuperada por Beren e Lúthien causou a ruína do reino: Thingol foi morto pelos Anãos de Nogrod, e em 506 os filhos de [[feanor|Fëanor]] atacaram o que restava."
      ]
    },
    nargothrond: {
      type: "lugar",
      group: "Eras antigas",
      color: "elfos",
      name: "Nargothrond",
      summary: "A fortaleza subterrânea de Finrod",
      paras: [
        "Cidade escavada nas margens do rio Narog por Finrod Felagund, irmão de [[galadriel|Galadriel]], com a ajuda dos Anãos. Sobreviveu por séculos graças ao segredo.",
        "[[turin|Túrin]] convenceu o reino a lutar em campo aberto e a construir uma ponte diante dos portões. Em 495 o dragão Glaurung atravessou a ponte e saqueou a cidade."
      ]
    },
    numenor: {
      type: "lugar",
      group: "Eras antigas",
      color: "homens",
      name: "Númenor",
      summary: "A ilha dos Reis dos Homens, no meio do mar",
      paras: [
        "Ilha em forma de estrela de cinco pontas que os [[ainur|Valar]] ergueram do mar como recompensa aos [[homens|Edain]], os Homens que lutaram contra Morgoth. Eles chegaram em 32 da Segunda Era. O primeiro rei foi Elros, irmão gêmeo de [[elrond|Elrond]], que escolheu ser mortal.",
        "Os Númenóreanos ganharam vida longa, saber e os melhores navios do mundo. Só havia uma proibição, a Interdição dos Valar: nunca navegar para o oeste até perder a ilha de vista. Com os séculos o poder cresceu, o medo da morte também, e os reis passaram a invejar os Elfos.",
        "O último rei, [[arpharazon|Ar-Pharazôn]], trouxe [[sauron|Sauron]] como prisioneiro e acabou convencido por ele a invadir [[valinor|Valinor]]. Em 3319 a ilha foi engolida pelo mar. [[elendil|Elendil]] e os Fiéis escaparam em nove navios e fundaram Arnor e Gondor."
      ],
      facts: [
        { label: "Duração", value: "de 32 a 3319 da Segunda Era" },
        { label: "Em Adûnaico", value: "Anadûnê" },
        { label: "A história da Queda", value: "Akallabêth" }
      ]
    },
    ainur: {
      type: "povo",
      group: "Os Poderes",
      color: "outros",
      name: "Ainur: Valar e Maiar",
      summary: "Os espíritos que existiam antes do mundo",
      paras: [
        "No princípio havia Eru, o Único, chamado Ilúvatar. Ele criou os Ainur, e eles cantaram diante dele a Grande Música, que continha o desenho do mundo. [[melkor|Melkor]], o mais poderoso, inseriu temas próprios e criou a discórdia. Eru deu existência à Música: é Eä, o universo, e nele Arda, a Terra.",
        "Os Ainur que desceram ao mundo para moldá-lo são os Valar, os Poderes, e os de grau menor que os acompanham são os Maiar. Não são deuses criadores. São administradores do mundo de Eru, e os Homens às vezes os chamaram de deuses.",
        "São Maiar, entre outros: [[sauron|Sauron]], os [[balrogs|Balrogs]], Melian de [[doriath|Doriath]] e os cinco [[istari|Magos]]."
      ],
      branchesTitle: "Os principais Valar",
      branches: [
        { name: "Manwë", text: "Senhor dos ventos e Rei dos Valar. As grandes Águias são suas mensageiras." },
        { name: "Varda (Elbereth)", text: "Senhora das estrelas, a mais amada pelos Elfos." },
        { name: "Ulmo", text: "Senhor das águas. Nunca abandonou Elfos e Homens na Terra-média." },
        { name: "Aulë", text: "O ferreiro. Fez os Anãos e ensinou os Noldor." },
        { name: "Yavanna", text: "Senhora de tudo o que cresce. Fez as Duas Árvores e pediu os Ents." },
        { name: "Mandos (Námo)", text: "Guardião das Casas dos Mortos e juiz dos Valar." },
        { name: "Oromë", text: "O caçador. Encontrou os Elfos recém-despertos." },
        {
          name: "Tulkas, Nienna, Irmo, Estë, Vairë, Vána, Nessa",
          text: "Os outros sete Valar. Com Melkor fora da conta, são catorze."
        }
      ]
    },
    elfos: {
      type: "povo",
      group: "Os Filhos de Ilúvatar",
      color: "elfos",
      name: "Elfos",
      summary: "Os Primogênitos, os Quendi",
      paras: [
        "Os primeiros Filhos de Ilúvatar despertaram sob as estrelas em Cuiviénen, no leste distante, antes de existirem Sol e Lua. São imortais enquanto o mundo durar: não adoecem nem envelhecem, mas podem ser mortos ou morrer de tristeza, e então vão para as Casas de Mandos, em [[valinor|Valinor]].",
        "O Vala Oromë os encontrou e os [[ainur|Valar]] os convidaram a viver em Aman. A resposta a esse convite dividiu o povo, e quase toda a história élfica vem dessa divisão. Os que viram a luz das Duas Árvores são os Calaquendi, Elfos da Luz. Os demais são os Moriquendi, Elfos da Escuridão.",
        "Na Terceira Era os Elfos estão em declínio. Restam poucos reinos, mantidos em parte pelos Três Anéis: [[valfenda|Valfenda]], [[lorien|Lothlórien]], os [[portos|Portos Cinzentos]] e o reino de [[trevamata|Trevamata]]. Com o fim do Um Anel os Três perdem a força, e os Elfos partem para o oeste."
      ],
      treeTitle: "A divisão dos Elfos",
      tree: "<ul><li><b>Quendi</b> <span>todos os Elfos</span><ul>\n<li><b>Avari</b> <span>os Relutantes: recusaram a viagem e ficaram no leste</span></li>\n<li><b>Eldar</b> <span>o Povo das Estrelas: aceitaram a viagem</span><ul>\n<li><b>Vanyar</b> <span>os Belos, do rei Ingwë. Foram todos para Aman e nunca voltaram</span></li>\n<li><b>Noldor</b> <span>os Sábios, do rei Finwë. Ferreiros e eruditos. Muitos voltaram à Terra-média atrás das Silmarils</span></li>\n<li><b>Teleri</b> <span>os Últimos, de Elwë e Olwë. O clã maior, que se dividiu no caminho</span><ul>\n<li><b>Falmari</b> <span>chegaram a Aman e vivem em Alqualondë</span></li>\n<li><b>Sindar</b> <span>os Elfos-cinzentos: ficaram em Beleriand com Elwë, o rei Thingol</span></li>\n<li><b>Nandor</b> <span>desistiram diante das Montanhas Nevoentas. Deles vêm os Elfos silvestres de Lórien e Trevamata</span></li>\n</ul></li></ul></li></ul></li></ul>"
    },
    homens: {
      type: "povo",
      group: "Os Filhos de Ilúvatar",
      color: "homens",
      name: "Homens",
      summary: "Os Sucessores, os Atani",
      paras: [
        "Os segundos Filhos de Ilúvatar despertaram em Hildórien, no leste, com o primeiro nascer do Sol. O que os distingue é a Dádiva de Ilúvatar: a morte. Vivem pouco e depois deixam o mundo, para um destino que nem os [[ainur|Valar]] conhecem. [[melkor|Morgoth]] e [[sauron|Sauron]] ensinaram os Homens a temer essa dádiva, e desse medo nasceram a queda de [[numenor|Númenor]] e os [[nazgul|Nazgûl]].",
        "Os que chegaram a [[beleriand|Beleriand]] e se aliaram aos Elfos foram chamados de Edain. Seus descendentes, os Dúnedain, fundaram os reinos de Arnor e Gondor. No fim da Terceira Era começa o Domínio dos Homens: os outros povos se retiram ou diminuem.",
        "Elfos e Homens se uniram poucas vezes. Dessas uniões, a de [[luthien|Beren e Lúthien]] e a de Tuor e Idril, descendem [[elrond|Elrond]], os reis de Númenor e [[aragorn|Aragorn]]."
      ],
      branches: [
        {
          name: "Edain",
          text: "As três casas dos Amigos-dos-Elfos na Primeira Era: a de Bëor, a de Haleth e a de Hador."
        },
        {
          name: "Númenóreanos e Dúnedain",
          text: "Os Edain que receberam Númenor. Os sobreviventes da Queda são os Dúnedain, os Homens do Oeste, de Arnor e de Gondor. Os do Norte viraram os Caminheiros."
        },
        {
          name: "Númenóreanos Negros",
          text: "Os Homens do Rei que ficaram na Terra-média a serviço de Sauron, sobretudo em Umbar."
        },
        {
          name: "Homens do Norte",
          text: "Parentes distantes dos Edain em Rhovanion. Deles vêm os Rohirrim, os Homens de Valle e os Beornings."
        },
        { name: "Rohirrim", text: "Os Senhores de Cavalos de Rohan, aliados de Gondor desde 2510." },
        {
          name: "Terrapardenses",
          text: "Homens das colinas a oeste de Rohan, expulsos de suas terras e inimigos dos Rohirrim."
        },
        {
          name: "Lestenses e Haradrim",
          text: "Os povos de Rhûn, a leste, e de Harad, ao sul. Muitos serviram a Sauron, por medo ou por antigas mágoas contra Gondor."
        },
        {
          name: "Drúedain",
          text: "Os Homens Selvagens das matas, os Woses. Guiaram os Rohirrim até Minas Tirith em 3019."
        }
      ]
    },
    anaos: {
      type: "povo",
      group: "Os Povos Livres",
      color: "anaos",
      name: "Anãos",
      summary: "Os Khazâd, o povo de Aulë",
      paras: [
        "Não são Filhos de Ilúvatar por origem. Foram feitos pelo Vala Aulë, impaciente pela chegada dos Filhos, e Eru os adotou e lhes deu vida própria, com a condição de dormirem até depois do despertar dos Elfos. Por isso são duros, teimosos, resistentes ao fogo e à dominação. Os Anéis de Poder nunca conseguiram submetê-los, só aumentaram a cobiça por ouro.",
        "Descendem de Sete Pais. O mais velho é [[durin|Durin]], pai dos Barbas-longas, o povo de [[moria|Khazad-dûm]], de [[erebor|Erebor]] e das [[ferro|Colinas de Ferro]]. Na Primeira Era houve duas grandes cidades nas Montanhas Azuis, Nogrod e Belegost.",
        "São mineiros, pedreiros e ferreiros sem igual. Guardam em segredo a própria língua, o [[khuzdul|Khuzdul]], e os próprios nomes verdadeiros. A tradução antiga usava a forma Anões."
      ],
      facts: [
        { label: "Nome próprio", value: "Khazâd" },
        { label: "Em Sindarin", value: "Naugrim ou Hadhodrim" },
        { label: "Vida", value: "cerca de 250 anos" }
      ]
    },
    hobbits: {
      type: "povo",
      group: "Os Povos Livres",
      color: "hobbits",
      name: "Hobbits",
      summary: "Os Pequenos, o povo do Condado",
      paras: [
        "Um ramo dos [[homens|Homens]], de origem esquecida. Têm cerca de metade da altura de um Homem, pés peludos de sola dura e gosto por comida, jardins e sossego. Aparecem nos registros por volta de 1050 da Terceira Era, quando deixaram o vale do Anduin por causa da sombra em [[trevamata|Trevamata]] e atravessaram as montanhas.",
        "Viveram em [[bri|Bri]] e, a partir de 1601, no [[condado|Condado]]. Ninguém contava com eles, nem os Sábios nem [[sauron|Sauron]]. Resistem ao Anel melhor do que qualquer outro povo, e foram quatro deles que decidiram a Guerra do Anel: [[bilbo|Bilbo]], [[frodo|Frodo]], [[sam|Sam]] e, do pior jeito, [[gollum|Gollum]]."
      ],
      facts: [{ label: "Em Westron", value: "kuduk" }, { label: "Em Sindarin", value: "periannath, 'pequenos'" }],
      branches: [
        { name: "Pés-Peludos", text: "Os mais numerosos e os menores. Preferem colinas e tocas." },
        { name: "Grados", text: "Mais largos e fortes. Gostam de rios e barcos. Sméagol era desse ramo." },
        {
          name: "Cascalvas",
          text: "Os mais altos e claros, amigos de Elfos e de aventuras. Tûks e Brandebuques têm muito desse sangue."
        }
      ]
    },
    ents: {
      type: "povo",
      group: "Os Povos Livres",
      color: "outros",
      name: "Ents",
      summary: "Os Pastores das Árvores",
      paras: [
        "Gigantes com aparência de árvore, criados a pedido de Yavanna para proteger as florestas de machados. Estão entre os seres vivos mais antigos da Terra-média. Aprenderam a falar com os Elfos e criaram sua própria língua, o [[entes|Entês]].",
        "As Entesposas preferiam jardins e pomares e se afastaram para o leste do Anduin. Suas terras foram queimadas na guerra da Última Aliança, e elas nunca mais foram vistas. Sem elas não nascem novos Ents.",
        "No fim da Terceira Era restam poucos, quase todos em [[fangorn|Fangorn]]. Liderados por [[barbarvore|Barbárvore]], destruíram [[isengard|Isengard]] em março de 3019."
      ]
    },
    istari: {
      type: "povo",
      group: "Os Povos Livres",
      color: "outros",
      name: "Istari, os Magos",
      summary: "Cinco Maiar enviados contra Sauron",
      paras: [
        "Por volta do ano 1000 da Terceira Era, cinco velhos desembarcaram nos [[portos|Portos Cinzentos]]. Eram [[ainur|Maiar]] enviados pelos Valar para ajudar os povos livres contra [[sauron|Sauron]]. Vieram em corpos de Homens idosos, sujeitos a cansaço, medo e erro, e proibidos de dominar pela força ou de enfrentar Sauron poder contra poder. A tarefa era aconselhar e encorajar.",
        "Só um deles a cumpriu até o fim."
      ],
      branches: [
        { name: "Saruman, o Branco", text: "Curumo em Valinor. Chefe da ordem e do Conselho Branco. Traiu a missão." },
        { name: "Gandalf, o Cinzento", text: "Olórin em Valinor. O único que permaneceu fiel." },
        { name: "Radagast, o Castanho", text: "Aiwendil. Dedicou-se a aves e bichos e esqueceu a missão." },
        { name: "Os dois Magos Azuis", text: "Alatar e Pallando. Foram para o leste e não voltaram às histórias." }
      ]
    },
    aguias: {
      type: "povo",
      group: "Os Povos Livres",
      color: "outros",
      name: "Águias",
      summary: "As mensageiras de Manwë",
      paras: [
        "Aves gigantes e falantes, enviadas por Manwë para vigiar a Terra-média. Na Primeira Era o senhor delas era Thorondor, que resgatou o corpo de Fingolfin e lutou na Guerra da Ira. Na Terceira Era é Gwaihir, o Senhor dos Ventos.",
        "Aparecem nos momentos decisivos e por vontade própria: salvaram a companhia de [[thorin|Thorin]], lutaram na Batalha dos Cinco Exércitos, tiraram [[gandalf|Gandalf]] de Orthanc e resgataram [[frodo|Frodo]] e [[sam|Sam]] das encostas do [[perdicao|Monte da Perdição]]."
      ]
    },
    orques: {
      type: "povo",
      group: "Servos da Sombra",
      color: "sombra",
      name: "Orques",
      summary: "Os soldados de Morgoth e de Sauron",
      paras: [
        "Criaturas criadas por [[melkor|Melkor]] nos Dias Antigos, em zombaria aos Filhos de Ilúvatar. O Silmarillion diz que vieram de Elfos capturados e corrompidos. Tolkien nunca ficou satisfeito com essa resposta e testou outras em textos tardios, porque o Mal, no mundo dele, não pode criar vida, só estragar.",
        "Odeiam o sol, vivem em tribos que brigam entre si e falam versões degradadas de outras línguas. Gobelim é outra palavra para o mesmo povo, mais usada em O Hobbit. Os Uruk-hai, maiores e resistentes à luz, surgiram de [[mordor|Mordor]] por volta de 2475 da Terceira Era, e [[saruman|Saruman]] criou os seus em [[isengard|Isengard]]."
      ]
    },
    trolls: {
      type: "povo",
      group: "Servos da Sombra",
      color: "sombra",
      name: "Trolls",
      summary: "Feitos em zombaria aos Ents",
      paras: [
        "Gigantes de força enorme e pouca inteligência, criados por [[melkor|Melkor]] na escuridão. Os Trolls comuns viram pedra com a luz do sol, como os três que [[bilbo|Bilbo]] encontrou. No fim da Terceira Era [[sauron|Sauron]] criou os Olog-hai, mais espertos e capazes de suportar o dia enquanto a vontade dele os sustentasse."
      ]
    },
    dragoes: {
      type: "povo",
      group: "Servos da Sombra",
      color: "sombra",
      name: "Dragões",
      summary: "As grandes serpentes de Morgoth",
      paras: [
        "Criados por [[melkor|Morgoth]] em [[angband|Angband]]. São inteligentes, falam, hipnotizam com o olhar e têm paixão por tesouros."
      ],
      branches: [
        {
          name: "Glaurung",
          text: "O Pai dos Dragões, sem asas. Saqueou Nargothrond e foi morto por Túrin em 499 da Primeira Era."
        },
        { name: "Ancalagon, o Negro", text: "O maior dos dragões alados. Eärendil o derrubou na Guerra da Ira." },
        { name: "Scatha", text: "Dragão das Montanhas Cinzentas, morto por um antepassado dos Rohirrim." },
        { name: "Smaug", text: "O último dos grandes. Tomou Erebor em 2770 e morreu em 2941." }
      ]
    },
    balrogs: {
      type: "povo",
      group: "Servos da Sombra",
      color: "sombra",
      name: "Balrogs",
      summary: "Os demônios de fogo, os Valaraukar",
      paras: [
        "[[ainur|Maiar]] que [[melkor|Melkor]] corrompeu no princípio: espíritos de fogo envoltos em sombra, armados de chicotes de chamas. O senhor deles era Gothmog, que matou [[feanor|Fëanor]] e morreu na queda de [[gondolin|Gondolin]].",
        "Quase todos foram destruídos na Guerra da Ira. Um se escondeu sob as Montanhas Nevoentas e dormiu por mais de cinco mil anos, até os [[anaos|Anãos]] o despertarem em [[moria|Moria]] em 1980 da Terceira Era. [[gandalf|Gandalf]] o matou em janeiro de 3019."
      ]
    },
    nazgul: {
      type: "povo",
      group: "Servos da Sombra",
      color: "sombra",
      name: "Nazgûl",
      summary: "Os Espectros-do-Anel, os Nove",
      paras: [
        "Nove reis e senhores dos [[homens|Homens]] que aceitaram Anéis de Poder de [[sauron|Sauron]]. Ganharam poder e uma vida que não acabava, até se apagarem e virarem sombras presas à vontade dele. Aparecem pela primeira vez por volta de 2251 da Segunda Era.",
        "O chefe é o [[bruxo|Rei-bruxo de Angmar]]. O segundo é Khamûl, o Lestense, que comandou [[dolguldur|Dol Guldur]]. Sua arma principal é o medo. Em 3018 saíram como Cavaleiros Negros à procura do [[condado|Condado]] e, depois, montaram bestas aladas. Foram desfeitos com a destruição do Anel."
      ],
      facts: [
        { label: "Em Fala Negra", value: "nazg, 'anel', e gûl, 'espectro'" },
        { label: "Em Quenya", value: "Úlairi" }
      ]
    },
    panorama: {
      type: "lingua",
      group: "Visão geral",
      color: "outros",
      name: "Como as línguas se relacionam",
      summary: "As línguas vieram antes das histórias",
      paras: [
        "Tolkien era filólogo, professor de anglo-saxão em Oxford. Ele dizia que as histórias foram feitas para dar um mundo às línguas, e não o contrário. Por isso os nomes da Terra-média têm sentido e parentesco: quem conhece algumas raízes consegue ler o mapa.",
        "As línguas élficas formam uma família de verdade, com um ancestral comum e mudanças de som regulares. O [[quenya|Quenya]] e o [[sindarin|Sindarin]] são primos, mais ou menos como o latim e o galês seriam se tivessem o mesmo avô.",
        "Um detalhe importante: os livros se apresentam como tradução. A língua que os personagens falam é o [[westron|Westron]], e Tolkien a representou pelo inglês. As línguas aparentadas ao Westron ganharam línguas aparentadas ao inglês: o [[rohirrico|Rohírrico]] virou inglês antigo, e a língua de Valle virou nórdico antigo. É por isso que os Anãos de O Hobbit têm nomes nórdicos."
      ],
      treeTitle: "A família élfica",
      tree: "<ul><li><b>Quendiano Primitivo</b> <span>a fala dos Elfos em Cuiviénen</span><ul>\n<li><b>Avarin</b> <span>muitos dialetos dos Elfos que ficaram no leste</span></li>\n<li><b>Eldarin Comum</b> <span>a fala dos Elfos durante a Grande Jornada</span><ul>\n<li><b>Quenya</b> <span>dos Vanyar e Noldor, em Valinor</span></li>\n<li><b>Telerin Comum</b><ul>\n<li><b>Telerin</b> <span>dos Falmari, em Aman</span></li>\n<li><b>Sindarin</b> <span>dos Elfos-cinzentos de Beleriand</span></li>\n<li><b>Nandorin</b> <span>dos Elfos silvestres</span></li>\n</ul></li></ul></li></ul></li></ul>"
    },
    quenya: {
      type: "lingua",
      group: "Línguas élficas",
      color: "elfos",
      name: "Quenya",
      summary: "O alto-élfico, o latim dos Elfos",
      paras: [
        "Língua dos Vanyar e dos Noldor, desenvolvida em [[valinor|Valinor]]. Os Noldor exilados a levaram para a Terra-média, mas o rei Thingol, ao saber do massacre de Alqualondë, proibiu seu uso em [[beleriand|Beleriand]]. A partir daí o Quenya deixou de ser fala do dia a dia e virou língua de cerimônia, canto e erudição.",
        "Os reis de [[numenor|Númenor]], de Arnor e de Gondor usam nomes em Quenya: Elendil, Isildur, Anárion. O nome de trono de [[aragorn|Aragorn]] é Elessar Telcontar. O lamento que [[galadriel|Galadriel]] canta na despedida de Lórien é o texto em Quenya mais longo de O Senhor dos Anéis.",
        "No mundo real, Tolkien a construiu a partir do som do finlandês, com gramática e ortografia próximas das do latim e do grego."
      ],
      examples: [
        { word: "elen", meaning: "estrela" },
        { word: "Eldar", meaning: "povo das estrelas" },
        { word: "anar, isil", meaning: "sol, lua" },
        { word: "namárië", meaning: "adeus" },
        { word: "Eä", meaning: "o mundo que é, o universo" }
      ]
    },
    sindarin: {
      type: "lingua",
      group: "Línguas élficas",
      color: "elfos",
      name: "Sindarin",
      summary: "O élfico-cinzento, a fala viva dos Elfos",
      paras: [
        "Língua dos Sindar de [[beleriand|Beleriand]], que mudou muito durante os milênios em que eles viveram separados dos parentes de Aman. Os Noldor exilados a adotaram, e ela virou a língua comum de todos os Elfos do oeste da Terra-média. É o élfico que se ouve em [[valfenda|Valfenda]] e [[lorien|Lothlórien]].",
        "Quase todos os nomes do mapa são Sindarin: Mordor, Gondor, Minas Tirith, Moria, Mithrandir. Os Dúnedain a aprendiam como língua culta e davam nomes em Sindarin aos filhos, como Aragorn, Boromir e Denethor.",
        "No mundo real, a inspiração é o galês, inclusive nas mutações de consoante no começo das palavras."
      ],
      examples: [
        { word: "mellon", meaning: "amigo (a senha do portão de Moria)" },
        { word: "mor + dôr", meaning: "negro + terra: Mordor" },
        { word: "minas", meaning: "torre" },
        { word: "ithil, anor", meaning: "lua, sol: Ithilien, Minas Anor" },
        { word: "edhel", meaning: "elfo" },
        { word: "mithril", meaning: "brilho cinzento" }
      ]
    },
    tengwar: {
      type: "lingua",
      group: "Escritas",
      color: "elfos",
      name: "Tengwar",
      summary: "As letras de Fëanor",
      paras: [
        "O alfabeto élfico mais usado. [[feanor|Fëanor]] o criou em [[valinor|Valinor]], aperfeiçoando as letras mais antigas de Rúmil, as sarati. É feito para pena ou pincel: cada letra tem uma haste e um ou dois arcos, e a forma indica como o som é produzido. Letras com forma parecida têm sons parecidos.",
        "As vogais costumam ser sinais sobre as consoantes, os tehtar. Há vários modos de uso, conforme a língua. A inscrição do Um Anel está em Tengwar, e a língua dela é a [[falanegra|Fala Negra]]."
      ]
    },
    cirth: {
      type: "lingua",
      group: "Escritas",
      color: "anaos",
      name: "Cirth",
      summary: "As runas",
      paras: [
        "Alfabeto de traços retos, bom para entalhar em pedra, madeira e metal. Foi criado pelos Sindar de [[beleriand|Beleriand]] e organizado por Daeron, o menestrel de [[doriath|Doriath]].",
        "Os Elfos preferiram as [[tengwar|Tengwar]], mas os [[anaos|Anãos]] adotaram as Cirth e as adaptaram ao Khuzdul. Essa versão é o Angerthas Moria, usado no túmulo de Balin. As runas do mapa de Thrór em O Hobbit são outra coisa: são runas anglo-saxãs reais, dentro da ideia de tradução."
      ]
    },
    khuzdul: {
      type: "lingua",
      group: "Outras línguas",
      color: "anaos",
      name: "Khuzdul",
      summary: "A língua secreta dos Anãos",
      paras: [
        "Segundo a tradição, foi dada aos [[anaos|Anãos]] pelo próprio Aulë, e por isso quase não mudou em milhares de anos. Eles não a ensinam a estranhos e usam entre os outros povos nomes tirados da língua dos vizinhos. Os nomes verdadeiros ficam em segredo e não vão nem para as lápides.",
        "Conhecem-se poucas palavras, quase todas nomes de lugar e o grito de guerra. Os Anãos têm também uma língua de gestos, o iglishmêk.",
        "No mundo real, Tolkien a montou sobre o modelo das línguas semíticas, com raízes de três consoantes."
      ],
      examples: [
        { word: "Khazâd", meaning: "os Anãos" },
        { word: "Khazad-dûm", meaning: "Mansão dos Anãos" },
        { word: "Kheled-zâram", meaning: "Lago-espelho" },
        { word: "Baruk Khazâd!", meaning: "Machados dos Anãos! (grito de guerra)" }
      ]
    },
    adunaico: {
      type: "lingua",
      group: "Outras línguas",
      color: "homens",
      name: "Adûnaico",
      summary: "A língua de Númenor",
      paras: [
        "Língua dos [[homens|Edain]] da Casa de Hador, levada para [[numenor|Númenor]]. No começo convivia com o élfico. Quando os reis romperam com os Elfos, passaram a usar nomes de trono em Adûnaico, e falar élfico virou sinal de oposição.",
        "Dela descende o [[westron|Westron]]."
      ],
      examples: [
        { word: "Anadûnê", meaning: "Terra do Oeste, Númenor" },
        { word: "Ar-Pharazôn", meaning: "Rei Dourado" },
        { word: "Akallabêth", meaning: "a Decaída" }
      ]
    },
    westron: {
      type: "lingua",
      group: "Outras línguas",
      color: "homens",
      name: "Westron",
      summary: "A Fala Comum",
      paras: [
        "Surgiu nos portos e fortalezas dos Númenóreanos na Terra-média, da mistura do [[adunaico|Adûnaico]] com as línguas locais. Na Terceira Era é a língua franca de todo o oeste: Hobbits, Homens, Anãos e até Orques a usam para se entender.",
        "Nos livros ela aparece como inglês, e por isso quase não vemos Westron de verdade. Os Apêndices dão algumas amostras, entre elas os nomes reais dos hobbits."
      ],
      examples: [
        { word: "Sôval Phârë", meaning: "Fala Comum" },
        { word: "kuduk", meaning: "hobbit" },
        { word: "Maura Labingi", meaning: "Frodo Bolseiro" },
        { word: "Banazîr Galbasi", meaning: "Samwise Gamgi" },
        { word: "Karningul", meaning: "Valfenda" }
      ]
    },
    rohirrico: {
      type: "lingua",
      group: "Outras línguas",
      color: "homens",
      name: "Rohírrico",
      summary: "A língua dos Rohirrim",
      paras: [
        "Língua dos [[homens|Homens do Norte]], parente distante do [[westron|Westron]]. Como é uma forma mais antiga da mesma família, Tolkien a representou pelo inglês antigo. Théoden, Éomer, Éowyn, Meduseld e Edoras são palavras do inglês antigo.",
        "Os [[hobbits|Hobbits]] viveram perto desse povo no vale do Anduin, e algumas palavras do [[condado|Condado]] vêm daí. A própria palavra hobbit seria a forma gasta de uma palavra desse tipo."
      ],
      examples: [
        { word: "kûd-dûkan", meaning: "morador de toca, origem de kuduk" },
        { word: "holbytla", meaning: "a mesma palavra, vertida para o inglês antigo" },
        { word: "mearas", meaning: "cavalos (a raça de Scadufax)" }
      ]
    },
    falanegra: {
      type: "lingua",
      group: "Outras línguas",
      color: "sombra",
      name: "Fala Negra",
      summary: "A língua que Sauron inventou",
      paras: [
        "[[sauron|Sauron]] a criou na Segunda Era para ser a língua única de todos os seus servos. Não funcionou: depois da primeira queda dele, só os [[nazgul|Nazgûl]] a mantiveram na forma pura. Os [[orques|Orques]] ficaram com pedaços dela misturados aos seus dialetos.",
        "O texto mais conhecido é a inscrição do Um Anel, gravada em letras [[tengwar|Tengwar]]. Quando [[gandalf|Gandalf]] a leu em voz alta no Conselho de Elrond, os Elfos taparam os ouvidos."
      ],
      examples: [
        { word: "nazg", meaning: "anel" },
        { word: "ghâsh", meaning: "fogo" },
        { word: "burzum", meaning: "escuridão" },
        { word: "uruk", meaning: "orque grande" },
        { word: "snaga", meaning: "escravo" }
      ]
    },
    entes: {
      type: "lingua",
      group: "Outras línguas",
      color: "outros",
      name: "Entês",
      summary: "A língua lenta dos Ents",
      paras: [
        "Língua criada pelos [[ents|Ents]], sonora, cheia de repetições e de tons, impossível de aprender para outros povos. Um nome em Entês conta a história inteira da coisa nomeada, e por isso cresce com o tempo.",
        "[[barbarvore|Barbárvore]] explica que só vale a pena dizer em Entês o que merece muito tempo para ser dito. Com estranhos os Ents usam Quenya ou Westron, montados à moda deles."
      ]
    },
    valarin: {
      type: "lingua",
      group: "Outras línguas",
      color: "outros",
      name: "Valarin",
      summary: "A fala dos Valar",
      paras: [
        "A língua que os [[ainur|Valar]] usavam entre si em [[valinor|Valinor]]. Aos ouvidos dos Elfos soava áspera e estranha, e poucos tentaram aprendê-la. Algumas palavras passaram ao [[quenya|Quenya]], bem modificadas."
      ]
    },
    melkor: {
      type: "figura",
      group: "Dias Antigos",
      color: "sombra",
      name: "Melkor, Morgoth",
      summary: "O primeiro Senhor Sombrio",
      paras: [
        "O mais poderoso dos [[ainur|Ainur]]. Quis criar coisas próprias, o que só Eru pode fazer, e, sem conseguir, passou a estragar o que os outros faziam. Derrubou as Lâmpadas, corrompeu Maiar, criou [[orques|Orques]], [[trolls|Trolls]] e [[dragoes|dragões]].",
        "Ficou preso por três eras em [[valinor|Valinor]], fingiu arrependimento e foi solto. Semeou a discórdia entre os Noldor, matou as Duas Árvores com a ajuda de Ungoliant, assassinou o rei Finwë e roubou as Silmarils. [[feanor|Fëanor]] lhe deu então o nome de Morgoth, o Sombrio Inimigo do Mundo.",
        "Reinou em [[angband|Angband]] por toda a Primeira Era, com as Silmarils numa coroa de ferro. Foi derrotado na Guerra da Ira e lançado para fora do mundo, pela Porta da Noite. Seu tenente, [[sauron|Sauron]], ficou."
      ]
    },
    feanor: {
      type: "figura",
      group: "Dias Antigos",
      color: "elfos",
      name: "Fëanor",
      summary: "O maior artífice dos Elfos e o autor do Juramento",
      paras: [
        "Filho mais velho de Finwë, rei dos Noldor. Criou as letras [[tengwar|Tengwar]], as Pedras-videntes e, por volta de 1450 dos Anos das Árvores, as três Silmarils, joias que guardavam a luz das Duas Árvores.",
        "Quando [[melkor|Morgoth]] matou seu pai e roubou as joias, Fëanor e os sete filhos juraram persegui-las contra quem fosse, Vala, Elfo ou Homem. O Juramento levou os Noldor de volta à Terra-média e causou três massacres de Elfos por Elfos. O primeiro foi em Alqualondë, onde tomaram à força os navios dos Teleri.",
        "Fëanor morreu logo depois de chegar a [[beleriand|Beleriand]], cercado por [[balrogs|Balrogs]]. Os filhos, Maedhros e Maglor à frente, levaram o Juramento até o fim da Era."
      ]
    },
    luthien: {
      type: "figura",
      group: "Dias Antigos",
      color: "elfos",
      name: "Beren e Lúthien",
      summary: "O Homem mortal e a princesa élfica",
      paras: [
        "Lúthien Tinúviel era filha do rei Thingol e de Melian, a Maia, de [[doriath|Doriath]]. Beren era um [[homens|Homem]] da Casa de Bëor, fugitivo depois da ruína de sua terra. Thingol, para se livrar dele, exigiu uma Silmaril da coroa de [[melkor|Morgoth]] como preço da mão da filha.",
        "Os dois foram juntos a [[angband|Angband]]. Lúthien adormeceu Morgoth com seu canto e Beren arrancou uma joia da coroa. Na saída, o lobo Carcharoth devorou a mão de Beren com a Silmaril dentro. Beren morreu na caçada ao lobo, e Lúthien morreu de dor.",
        "Diante de Mandos, ela cantou, e ele se comoveu pela única vez. Os dois voltaram à vida, e Lúthien escolheu ser mortal. É a história central do legendário para o próprio Tolkien: os nomes Beren e Lúthien estão no túmulo dele e da esposa, Edith. [[elrond|Elrond]], [[aragorn|Aragorn]] e Arwen descendem do casal."
      ]
    },
    turin: {
      type: "figura",
      group: "Dias Antigos",
      color: "homens",
      name: "Túrin Turambar",
      summary: "O herói amaldiçoado",
      paras: [
        "Filho de Húrin, o maior guerreiro dos [[homens|Edain]]. Depois da Batalha das Lágrimas Inumeráveis, [[melkor|Morgoth]] capturou Húrin e amaldiçoou sua família, obrigando-o a assistir ao que viria.",
        "Túrin cresceu em [[doriath|Doriath]], fugiu, viveu entre foras-da-lei, matou por engano o melhor amigo, levou [[nargothrond|Nargothrond]] à ruína e, enganado pelo dragão Glaurung, casou-se sem saber com a própria irmã, Niënor. Matou o dragão em 499 e se matou ao descobrir a verdade.",
        "É a história mais sombria de Tolkien, contada em Os Filhos de Húrin."
      ]
    },
    earendil: {
      type: "figura",
      group: "Dias Antigos",
      color: "homens",
      name: "Eärendil",
      summary: "O Marinheiro, a estrela da tarde",
      paras: [
        "Filho de Tuor, um Homem, e de Idril, princesa de [[gondolin|Gondolin]]. Escapou criança da queda da cidade. Casou-se com Elwing, neta de [[luthien|Beren e Lúthien]], que guardava a Silmaril.",
        "Quando os filhos de [[feanor|Fëanor]] atacaram os Portos do Sirion pela joia, Elwing se lançou ao mar com ela e alcançou o navio do marido. Com a Silmaril na proa, Eärendil conseguiu o que ninguém conseguira: chegar a [[valinor|Valinor]], em 542, e pedir ajuda aos Valar em nome de Elfos e Homens.",
        "Os Valar atenderam e fizeram a Guerra da Ira. Eärendil não pôde voltar. Navega o céu com a Silmaril na fronte, e é a estrela que chamamos de Vênus. É pai de [[elrond|Elrond]] e de Elros."
      ]
    },
    durin: {
      type: "figura",
      group: "Dias Antigos",
      color: "anaos",
      name: "Durin, o Imortal",
      summary: "O mais velho dos Sete Pais dos Anãos",
      paras: [
        "Despertou sozinho no monte Gundabad, andou para o sul e viu uma coroa de estrelas refletida no lago Kheled-zâram. Ali fundou [[moria|Khazad-dûm]]. Viveu tanto que ganhou o nome de Imortal.",
        "Os [[anaos|Anãos]] acreditam que ele volta a nascer entre seus descendentes. Até a Terceira Era houve seis reis chamados Durin. O sexto foi morto pelo [[balrogs|Balrog]] em 1980 da Terceira Era. [[thorin|Thorin]], Dáin e [[legolas|Gimli]] são do Povo de Durin."
      ]
    },
    sauron: {
      type: "figura",
      group: "Segunda Era",
      color: "sombra",
      name: "Sauron",
      summary: "O Senhor dos Anéis",
      paras: [
        "Um [[ainur|Maia]] de Aulë, o ferreiro, com paixão por ordem e planejamento. [[melkor|Melkor]] o seduziu cedo, e ele foi seu principal tenente na Primeira Era. Depois da Guerra da Ira chegou a pedir perdão, mas não quis voltar a Valinor para ser julgado.",
        "Na Segunda Era apresentou-se aos Elfos como Annatar, Senhor das Dádivas. Em [[eregion|Eregion]] ensinou os ferreiros a fazer os Anéis de Poder e, em segredo, forjou no [[perdicao|Monte da Perdição]] o Um Anel, que governa os outros. Pôs nele a maior parte do próprio poder: enquanto o Anel existir, ele não pode ser destruído.",
        "Foi levado preso a [[numenor|Númenor]], corrompeu o rei e provocou a Queda, na qual perdeu a forma bela para sempre. A Última Aliança o derrotou em 3441, e Isildur cortou o Anel de sua mão.",
        "Na Terceira Era voltou devagar: Necromante em [[dolguldur|Dol Guldur]], depois senhor de [[mordor|Mordor]] outra vez. Durante a Guerra do Anel é uma vontade e um Olho, e nunca aparece em pessoa. Acabou em 25 de março de 3019."
      ],
      facts: [
        { label: "Outros nomes", value: "Annatar, o Necromante, Gorthaur" },
        { label: "Os Anéis", value: "Três dos Elfos, Sete dos Anãos, Nove dos Homens e o Um" }
      ]
    },
    celebrimbor: {
      type: "figura",
      group: "Segunda Era",
      color: "elfos",
      name: "Celebrimbor",
      summary: "O ferreiro dos Anéis de Poder",
      paras: [
        "Neto de [[feanor|Fëanor]] e senhor de [[eregion|Eregion]]. Com o saber de Annatar, seus ferreiros fizeram os Anéis de Poder. Os Três dos Elfos, Narya, Nenya e Vilya, ele forjou sozinho, sem que [[sauron|Sauron]] os tocasse.",
        "Quando Sauron pôs o Um Anel no dedo, os Elfos perceberam e tiraram os seus. Celebrimbor mandou os Três para longe. Sauron invadiu Eregion em 1697, capturou o ferreiro e o matou sob tortura sem descobrir onde estavam os Três."
      ]
    },
    galadriel: {
      type: "figura",
      group: "Segunda Era",
      color: "elfos",
      name: "Galadriel",
      summary: "A Senhora de Lórien",
      paras: [
        "Princesa dos Noldor, nascida em [[valinor|Valinor]] sob a luz das Duas Árvores, sobrinha de [[feanor|Fëanor]] e irmã de Finrod. Veio para a Terra-média com os exilados porque queria um reino próprio. É a única líder daquela rebelião ainda viva na Terceira Era.",
        "Casou-se com Celeborn. Recebeu Nenya, um dos Três Anéis, e com ele protegeu [[lorien|Lothlórien]]. É mãe de Celebrían e avó de Arwen.",
        "Quando [[frodo|Frodo]] lhe ofereceu o Um Anel, ela recusou. Passou no teste e pôde voltar ao oeste, de onde estava banida desde a rebelião. Partiu dos [[portos|Portos Cinzentos]] em 3021."
      ]
    },
    elrond: {
      type: "figura",
      group: "Segunda Era",
      color: "elfos",
      name: "Elrond",
      summary: "O Meio-elfo, senhor de Valfenda",
      paras: [
        "Filho de [[earendil|Eärendil]] e Elwing, com sangue de Elfos, Homens e de uma Maia. No fim da Primeira Era os Meio-elfos tiveram de escolher um destino. Elrond escolheu o dos Elfos. Seu irmão gêmeo, Elros, escolheu o dos Homens e foi o primeiro rei de [[numenor|Númenor]].",
        "Foi arauto de Gil-galad, fundou [[valfenda|Valfenda]] em 1697 da Segunda Era e lutou na Última Aliança. Herdou de Gil-galad o anel Vilya. Casou-se com Celebrían, filha de [[galadriel|Galadriel]], e é pai de Arwen e dos gêmeos Elladan e Elrohir.",
        "Criou em casa todos os herdeiros de Isildur. [[aragorn|Aragorn]] é descendente distante de seu irmão, e a escolha de Arwen por uma vida mortal repete a de Elros."
      ]
    },
    elendil: {
      type: "figura",
      group: "Segunda Era",
      color: "homens",
      name: "Elendil e Isildur",
      summary: "Os fundadores de Arnor e Gondor",
      paras: [
        "Elendil era o chefe dos Fiéis de [[numenor|Númenor]], os que continuaram amigos dos Elfos. Escapou da Queda com os filhos Isildur e Anárion, em nove navios, levando as sete Pedras-videntes e uma muda da Árvore Branca. Fundou Arnor, e os filhos fundaram Gondor.",
        "Com Gil-galad, último Alto Rei dos Noldor, formou a Última Aliança de Elfos e Homens. Os dois morreram em luta com [[sauron|Sauron]] na encosta do [[perdicao|Monte da Perdição]], em 3441. A espada de Elendil, Narsil, quebrou-se sob ele.",
        "Isildur usou o fragmento da espada para cortar o Um Anel da mão de Sauron. [[elrond|Elrond]] e Círdan o aconselharam a destruí-lo ali mesmo, e ele ficou com o Anel. Dois anos depois morreu nos [[lis|Campos de Lis]]."
      ]
    },
    arpharazon: {
      type: "figura",
      group: "Segunda Era",
      color: "homens",
      name: "Ar-Pharazôn",
      summary: "O último rei de Númenor",
      paras: [
        "Tomou o cetro em 3255 da Segunda Era, casando-se à força com a herdeira legítima, sua prima Míriel. Foi o rei mais poderoso que os [[homens|Homens]] já tiveram. Em 3262 desembarcou em [[umbar|Umbar]] com um exército tão grande que as tropas de [[sauron|Sauron]] desertaram.",
        "Sauron se rendeu, foi levado a [[numenor|Númenor]] e em poucos anos passou de refém a conselheiro. Convenceu o rei, já velho e com medo da morte, de que a vida eterna podia ser tomada pela força. Em 3319 a Grande Armada desembarcou em [[valinor|Valinor]]. Os Valar entregaram o governo do mundo a Eru, e a ilha foi destruída."
      ]
    },
    gandalf: {
      type: "figura",
      group: "Terceira Era",
      color: "outros",
      name: "Gandalf",
      summary: "O Peregrino Cinzento, Mithrandir",
      paras: [
        "O [[ainur|Maia]] Olórin, um dos cinco [[istari|Istari]]. Ao chegar, por volta do ano 1000 da Terceira Era, recebeu de Círdan o anel Narya, o Anel de Fogo. Nunca teve casa: andou por dois mil anos entre Elfos, Homens e, o que ninguém mais fazia, Hobbits.",
        "Descobriu que o Necromante era [[sauron|Sauron]], pôs [[thorin|Thorin]] e [[bilbo|Bilbo]] no caminho de [[erebor|Erebor]] para tirar [[smaug|Smaug]] do tabuleiro e, anos depois, entendeu o que era o anel de Bilbo. Guiou a Sociedade do Anel até [[moria|Moria]], onde morreu derrotando o [[balrogs|Balrog]].",
        "Foi mandado de volta como Gandalf, o Branco, ocupando o lugar que [[saruman|Saruman]] abandonou. Organizou a defesa de Rohan e de Gondor e planejou a marcha ao [[portao|Portão Negro]]. Missão cumprida, partiu dos [[portos|Portos Cinzentos]] em 3021."
      ],
      facts: [{ label: "Nomes", value: "Olórin (Valinor), Mithrandir (Elfos), Tharkûn (Anãos), Incánus (Sul)" }]
    },
    saruman: {
      type: "figura",
      group: "Terceira Era",
      color: "sombra",
      name: "Saruman",
      summary: "O Mago Branco que quis o Anel",
      paras: [
        "Curumo, um [[ainur|Maia]] de Aulë como [[sauron|Sauron]], e o chefe dos [[istari|Istari]]. Estudou tanto as artes do Inimigo que passou a admirá-las. Presidiu o Conselho Branco e atrasou o ataque a [[dolguldur|Dol Guldur]] porque queria que o Anel reaparecesse.",
        "Instalado em [[isengard|Isengard]], usou a Pedra-vidente de Orthanc e foi apanhado por Sauron. Passou a jogar dos dois lados: aliado de Mordor e concorrente pelo Anel. Atacou Rohan, perdeu no [[helm|Abismo de Helm]] e viu os [[ents|Ents]] destruírem Isengard.",
        "Sem cajado e sem poder, foi se vingar no [[condado|Condado]]. Morreu na porta de Bolsão, esfaqueado por Língua-de-Cobra, seu próprio servo."
      ]
    },
    aragorn: {
      type: "figura",
      group: "Terceira Era",
      color: "homens",
      name: "Aragorn",
      summary: "Passolargo, o rei Elessar",
      paras: [
        "Herdeiro de [[elendil|Isildur]] em linha direta, nascido em 2931 da Terceira Era. O pai morreu quando ele tinha dois anos, e [[elrond|Elrond]] o criou em [[valfenda|Valfenda]] com o nome de Estel, Esperança, escondendo a linhagem. Aos vinte anos soube quem era e conheceu Arwen, filha de Elrond.",
        "Passou décadas como chefe dos Caminheiros do Norte e serviu disfarçado em Rohan e em Gondor. Na Guerra do Anel guiou os hobbits desde [[bri|Bri]], integrou a Sociedade, lutou no [[helm|Abismo de Helm]], atravessou as Sendas dos Mortos e chegou a [[minastirith|Minas Tirith]] com a frota tomada em [[pelargir|Pelargir]].",
        "Foi coroado em 1º de maio de 3019 como Elessar, rei do Reino Reunido de Arnor e Gondor, e casou-se com Arwen, que escolheu a vida mortal. Reinou por 120 anos."
      ],
      facts: [
        { label: "Vida", value: "de 2931 da Terceira Era a 120 da Quarta Era" },
        { label: "Espada", value: "Andúril, reforjada dos fragmentos de Narsil" }
      ]
    },
    frodo: {
      type: "figura",
      group: "Terceira Era",
      color: "hobbits",
      name: "Frodo Bolseiro",
      summary: "O Portador do Anel",
      paras: [
        "Órfão adotado por [[bilbo|Bilbo]], de quem herdou Bolsão e o Anel em 3001. Em setembro de 3018 saiu do [[condado|Condado]] com [[sam|Sam]], Merry e Pippin. No Conselho de Elrond ofereceu-se para levar o Anel a [[mordor|Mordor]].",
        "Depois da separação da Sociedade seguiu só com Sam, guiado por [[gollum|Gollum]]. Foi ferido três vezes no caminho: pela lâmina do [[bruxo|Rei-bruxo]], pelo ferrão de Laracna e pelo próprio Anel. Na Fenda da Perdição, no fim das forças, reclamou o Anel para si. A piedade que tivera por Gollum foi o que salvou a missão.",
        "Voltou para casa sem conseguir descansar. Em 3021 embarcou nos [[portos|Portos Cinzentos]] para buscar cura no oeste."
      ]
    },
    sam: {
      type: "figura",
      group: "Terceira Era",
      color: "hobbits",
      name: "Samwise Gamgi",
      summary: "O jardineiro que carregou o Portador",
      paras: [
        "Jardineiro de Bolsão e companheiro de [[frodo|Frodo]] do começo ao fim. Enfrentou Laracna, usou o Anel por um dia para salvá-lo dos [[orques|Orques]] e o devolveu sem hesitar. Nas encostas do [[perdicao|Monte da Perdição]] carregou Frodo nas costas.",
        "Tolkien o chamou de o herói principal da história. De volta ao [[condado|Condado]], replantou as árvores com a terra que [[galadriel|Galadriel]] lhe deu, casou-se com Rosinha Villa e foi Prefeito sete vezes. Segundo a tradição, também atravessou o mar, já velho, como o último dos Portadores."
      ]
    },
    bilbo: {
      type: "figura",
      group: "Terceira Era",
      color: "hobbits",
      name: "Bilbo Bolseiro",
      summary: "O hobbit que achou o Anel",
      paras: [
        "Hobbit respeitável de Vila-dos-Hobbits que [[gandalf|Gandalf]] empurrou para uma aventura em 2941: a viagem de [[thorin|Thorin]] a [[erebor|Erebor]]. Nos túneis das Montanhas Nevoentas encontrou um anel e o ganhou de [[gollum|Gollum]] num jogo de adivinhas.",
        "Poupou a vida de Gollum quando podia matá-lo. Essa piedade, diz Gandalf, governa o destino de muitos. Guardou o Anel por sessenta anos, sem saber o que era, e foi o primeiro portador a abrir mão dele por vontade própria.",
        "Viveu o resto dos dias em [[valfenda|Valfenda]], escrevendo suas memórias e traduzindo histórias élficas. Dentro da ficção, O Hobbit e O Silmarillion são obra dele."
      ]
    },
    gollum: {
      type: "figura",
      group: "Terceira Era",
      color: "hobbits",
      name: "Gollum",
      summary: "Sméagol, que guardou o Anel por quinhentos anos",
      paras: [
        "Um [[hobbits|hobbit]] do povo Grado, do vale do Anduin. Por volta de 2463 da Terceira Era seu amigo Déagol achou o Anel nos [[lis|Campos de Lis]], e Sméagol o matou para ficar com ele. Expulso de casa, escondeu-se sob as Montanhas Nevoentas, onde o Anel lhe esticou a vida e o consumiu.",
        "Perdeu o Anel para [[bilbo|Bilbo]] em 2941 e saiu atrás dele. Foi preso e torturado em [[mordor|Mordor]], onde disse as palavras Condado e Bolseiro. Depois guiou [[frodo|Frodo]] e [[sam|Sam]] até a porta de Mordor, dividido entre o que restava de Sméagol e a fome pelo Anel.",
        "No fim foi ele quem destruiu o Anel, sem querer, ao cair com ele na Fenda da Perdição."
      ]
    },
    legolas: {
      type: "figura",
      group: "Terceira Era",
      color: "elfos",
      name: "Legolas e Gimli",
      summary: "O Elfo e o Anão da Sociedade",
      paras: [
        "Legolas é filho de Thranduil, rei dos Elfos de [[trevamata|Trevamata]]. Gimli é filho de Glóin, um dos companheiros de [[thorin|Thorin]], e vem de [[erebor|Erebor]]. Entraram na Sociedade do Anel como representantes de dois povos que mal se toleravam desde a ruína de [[doriath|Doriath]].",
        "A amizade dos dois começou em [[lorien|Lothlórien]], onde Gimli se encantou por [[galadriel|Galadriel]]. Lutaram juntos do [[helm|Abismo de Helm]] ao [[portao|Portão Negro]]. Depois da morte de [[aragorn|Aragorn]], Legolas construiu um navio e partiu para o oeste, e a tradição diz que Gimli foi com ele: o único Anão a fazer essa viagem."
      ]
    },
    theoden: {
      type: "figura",
      group: "Terceira Era",
      color: "homens",
      name: "Théoden, Éomer e Éowyn",
      summary: "A casa de Eorl na Guerra do Anel",
      paras: [
        "Théoden era o rei de Rohan, envelhecido antes do tempo pelos conselhos de Língua-de-Cobra, agente de [[saruman|Saruman]]. [[gandalf|Gandalf]] o libertou. Ele venceu no [[helm|Abismo de Helm]], cavalgou em socorro de [[minastirith|Minas Tirith]] e morreu nos Campos de Pelennor, em 15 de março de 3019.",
        "Na mesma batalha sua sobrinha Éowyn, que tinha ido à guerra disfarçada, enfrentou o [[bruxo|Rei-bruxo]] e o matou, com a ajuda do hobbit Merry. Seu sobrinho Éomer herdou o trono. Éowyn casou-se com Faramir de Gondor."
      ]
    },
    denethor: {
      type: "figura",
      group: "Terceira Era",
      color: "homens",
      name: "Denethor, Boromir e Faramir",
      summary: "O último Regente e seus filhos",
      paras: [
        "Denethor II foi o último Regente governante de Gondor, homem de grande força de vontade. Usou a Pedra-vidente de [[minastirith|Minas Tirith]] para vigiar [[mordor|Mordor]], e [[sauron|Sauron]] lhe mostrou só o que levava ao desespero. Queimou-se vivo durante o cerco.",
        "Boromir, o filho mais velho, foi à Sociedade do Anel, tentou tomar o Anel de [[frodo|Frodo]] e morreu no dia seguinte, defendendo Merry e Pippin. Faramir, o mais novo, teve o Anel ao alcance em Ithilien e deixou Frodo seguir. Foi Regente do rei [[aragorn|Elessar]] e príncipe de Ithilien."
      ]
    },
    thorin: {
      type: "figura",
      group: "Terceira Era",
      color: "anaos",
      name: "Thorin Escudo-de-Carvalho",
      summary: "O rei no exílio que retomou Erebor",
      paras: [
        "Neto de Thrór, rei de [[erebor|Erebor]] quando [[smaug|Smaug]] chegou. Ganhou o apelido na batalha de Azanulbizar, diante de [[moria|Moria]], em 2799, quando usou um galho de carvalho como escudo. Viveu décadas no exílio nas Montanhas Azuis.",
        "Em 2941 partiu com doze companheiros e [[bilbo|Bilbo]] para recuperar a montanha. Conseguiu, mas o tesouro o dominou, e ele recusou qualquer partilha com Elfos e Homens. Reconciliou-se com Bilbo antes de morrer na Batalha dos Cinco Exércitos."
      ]
    },
    smaug: {
      type: "figura",
      group: "Terceira Era",
      color: "sombra",
      name: "Smaug",
      summary: "O último grande dragão",
      paras: [
        "Desceu do norte em 2770 da Terceira Era, destruiu [[valle|Valle]], expulsou os [[anaos|Anãos]] de [[erebor|Erebor]] e dormiu sobre o tesouro por 171 anos. [[gandalf|Gandalf]] temia que [[sauron|Sauron]] o usasse numa guerra no norte, e esse foi o motivo real da viagem de [[thorin|Thorin]].",
        "[[bilbo|Bilbo]] descobriu a falha na couraça do peito dele. Um tordo levou a notícia a Bard, que o matou com a Flecha Negra sobre a Cidade-do-Lago."
      ]
    },
    bruxo: {
      type: "figura",
      group: "Terceira Era",
      color: "sombra",
      name: "O Rei-bruxo de Angmar",
      summary: "O Senhor dos Nazgûl",
      paras: [
        "O mais poderoso dos nove [[nazgul|Nazgûl]], um rei dos Homens cujo nome se perdeu. Fundou [[angmar|Angmar]] e destruiu o reino do Norte. Depois tomou Minas Ithil e fez dela [[morgul|Minas Morgul]].",
        "Quando fugiu da Batalha de Fornost, o elfo Glorfindel previu que ele não cairia pela mão de um homem. Na batalha de Pelennor foi morto por uma mulher, Éowyn, e por um hobbit, Merry, cuja lâmina tinha sido forjada em Arnor justamente contra Angmar."
      ]
    },
    barbarvore: {
      type: "figura",
      group: "Terceira Era",
      color: "outros",
      name: "Barbárvore",
      summary: "Fangorn, o mais velho dos Ents",
      paras: [
        "O [[ents|Ent]] mais antigo ainda vivo, guardião da floresta de [[fangorn|Fangorn]]. Lembra-se das matas de [[beleriand|Beleriand]] e das Entesposas. Não é de se apressar e não está do lado de ninguém, porque ninguém está do lado das árvores.",
        "Mudou de ideia quando Merry e Pippin lhe contaram o que [[saruman|Saruman]] fazia com a floresta. Convocou o Entencontro e levou os Ents contra [[isengard|Isengard]]."
      ]
    },
    bombadil: {
      type: "figura",
      group: "Terceira Era",
      color: "outros",
      name: "Tom Bombadil",
      summary: "O Mais Velho, senhor da Floresta Velha",
      paras: [
        "Vive com Fruta d'Ouro, a filha do rio, na Floresta Velha, junto ao [[condado|Condado]]. Diz que já estava ali antes da primeira chuva e do primeiro Elfo. O Anel não tem poder nenhum sobre ele: Tom o põe no dedo e não desaparece.",
        "O que ele é não se explica em lugar nenhum, e Tolkien quis assim. Dizia que todo mundo precisa de alguns enigmas. No Conselho de Elrond decidem não lhe confiar o Anel porque ele não entenderia a importância e acabaria por perdê-lo."
      ]
    }
  },
  eras: [
    {
      id: "arv",
      name: "Antes do Sol",
      range: "sem contagem",
      weight: 0,
      color: "outros",
      heading: "A criação e os Anos das Árvores",
      intro: "Antes de existirem Sol e Lua, o tempo era medido pela luz das Lâmpadas e depois pela das Duas Árvores de Valinor. Os anos desse período são muito mais longos que os do Sol, e as datas vêm de anais que Tolkien reescreveu várias vezes. Valem como ordem dos fatos.",
      events: [
        {
          year: "No princípio",
          title: "A Música dos Ainur",
          text: "Eru Ilúvatar cria os [[ainur|Ainur]], e a Música deles desenha o mundo. [[melkor|Melkor]] introduz a discórdia. Os Valar descem a Arda para moldá-la.",
          major: true
        },
        {
          year: "Dias das Lâmpadas",
          title: "A Primavera de Arda",
          text: "Os Valar iluminam o mundo com duas grandes Lâmpadas. Melkor as derruba, e os Valar se retiram para [[valinor|Valinor]], onde Yavanna faz crescer as Duas Árvores."
        },
        {
          year: "1050",
          title: "Os Elfos despertam",
          text: "Os [[elfos|Elfos]] acordam em Cuiviénen sob as estrelas que Varda acendeu. Os Valar fazem guerra a Melkor para protegê-los e o prendem por três eras.",
          major: true
        },
        {
          year: "1105",
          title: "Começa a Grande Jornada",
          text: "Os Eldar partem para o oeste. Os Avari ficam. No caminho os Teleri se dividem: surgem os Nandor e, em [[beleriand|Beleriand]], os Sindar."
        },
        {
          year: "1450",
          title: "Fëanor faz as Silmarils",
          text: "As três joias guardam a luz das Duas Árvores. Melkor, solto, passa a cobiçá-las e a espalhar mentiras entre os Noldor."
        },
        {
          year: "1495",
          title: "O Escurecimento de Valinor",
          text: "Melkor e Ungoliant matam as Árvores. Ele assassina o rei Finwë e foge com as Silmarils. [[feanor|Fëanor]] e os filhos fazem o Juramento, e os Noldor massacram os Teleri em Alqualondë para tomar seus navios.",
          major: true
        },
        {
          year: "1497",
          title: "Os Noldor chegam a Beleriand",
          text: "Fëanor queima os navios e deixa para trás a hoste de Fingolfin, que atravessa a pé o gelo do norte. Fëanor morre em luta com os [[balrogs|Balrogs]]."
        },
        {
          year: "1500",
          title: "A Lua e o Sol",
          text: "Da última flor de Telperion e do último fruto de Laurelin os Valar fazem a Lua e o Sol. Começam os anos que conhecemos.",
          major: true
        }
      ]
    },
    {
      id: "pe",
      name: "Primeira Era",
      range: "cerca de 590 anos do Sol",
      weight: 590,
      color: "elfos",
      heading: "A guerra das Joias em Beleriand",
      intro: "A Era das grandes histórias de O Silmarillion. Os Noldor exilados, os Sindar e os primeiros Homens enfrentam [[melkor|Morgoth]] em [[beleriand|Beleriand]], numa guerra que sabem não poder vencer sozinhos. Quase todos os reinos caem por dentro, por orgulho, segredo ou pelo Juramento de Fëanor.",
      events: [
        {
          year: "1",
          title: "O primeiro nascer do Sol",
          text: "Os [[homens|Homens]] despertam em Hildórien, no leste. A hoste de Fingolfin entra em Beleriand ao som de trombetas.",
          major: true
        },
        {
          year: "60",
          title: "Dagor Aglareb, a Batalha Gloriosa",
          text: "Os Noldor vencem e começam o Cerco de [[angband|Angband]], que dura quase quatrocentos anos. É o tempo de paz em que os reinos são construídos."
        },
        {
          year: "116",
          title: "Gondolin fica pronta",
          text: "Turgon leva seu povo em segredo para a [[gondolin|Cidade Oculta]]. Finrod já governa [[nargothrond|Nargothrond]]."
        },
        {
          year: "310",
          title: "Elfos e Homens se encontram",
          text: "Finrod Felagund descobre o povo de Bëor acampado em Beleriand. As três casas dos Edain se tornam aliadas dos Elfos."
        },
        {
          year: "455",
          title: "Dagor Bragollach, a Batalha da Chama Repentina",
          text: "Rios de fogo e o dragão Glaurung rompem o cerco. No ano seguinte o rei Fingolfin cavalga sozinho até Angband, desafia Morgoth para um duelo, o fere sete vezes e morre.",
          major: true
        },
        {
          year: "466",
          title: "Beren e Lúthien tomam uma Silmaril",
          text: "A única vitória de verdade contra Morgoth em toda a Era, obtida por [[luthien|uma Elfa e um Homem]], sem exército.",
          major: true
        },
        {
          year: "472",
          title: "Nirnaeth Arnoediad, as Lágrimas Inumeráveis",
          text: "A grande aliança de Elfos, Homens e Anãos é destruída pela traição de Homens do leste. Fingon morre. Húrin é capturado e amaldiçoado.",
          major: true
        },
        {
          year: "495",
          title: "Cai Nargothrond",
          text: "Glaurung saqueia a cidade. [[turin|Túrin]] mata o dragão em 499 e morre em seguida."
        },
        {
          year: "502 a 506",
          title: "A ruína de Doriath",
          text: "Thingol é morto pelos Anãos de Nogrod numa disputa pela Silmaril. Em 506 os filhos de Fëanor atacam [[doriath|Doriath]]: é o segundo massacre de Elfos por Elfos."
        },
        {
          year: "510",
          title: "A Queda de Gondolin",
          text: "Traída por Maeglin, a última cidade dos Noldor é destruída. Tuor, Idril e o pequeno [[earendil|Eärendil]] escapam por um túnel.",
          major: true
        },
        {
          year: "538",
          title: "O ataque aos Portos do Sirion",
          text: "O terceiro massacre. Elwing se joga ao mar com a Silmaril. Seus filhos, [[elrond|Elrond]] e Elros, são capturados e criados por Maglor."
        },
        {
          year: "542",
          title: "Eärendil chega a Valinor",
          text: "Com a Silmaril, o Marinheiro atravessa os mares encantados e pede aos Valar perdão e socorro.",
          major: true
        },
        {
          year: "545 a 587",
          title: "A Guerra da Ira",
          text: "A hoste de Valinor destrói Angband. Ancalagon e os dragões alados são derrubados. Morgoth é preso e lançado para fora do mundo. Beleriand afunda no mar. As duas Silmarils restantes se perdem, uma na terra e outra no mar.",
          major: true
        }
      ]
    },
    {
      id: "se",
      name: "Segunda Era",
      range: "3.441 anos",
      weight: 3441,
      color: "homens",
      heading: "Númenor e os Anéis de Poder",
      intro: "A Era mais longa e a menos contada. Tem dois fios que se cruzam no final: a ascensão e a queda de [[numenor|Númenor]], e a forja dos Anéis de Poder por [[sauron|Sauron]]. Termina com a primeira derrota dele.",
      events: [
        {
          year: "1",
          title: "Lindon e os Portos Cinzentos",
          text: "Os Elfos que ficam na Terra-média se reúnem em Lindon sob Gil-galad, último Alto Rei dos Noldor. Círdan funda os [[portos|Portos Cinzentos]]."
        },
        {
          year: "32",
          title: "Os Edain chegam a Númenor",
          text: "Elros Tar-Minyatur é o primeiro rei. Reina 410 anos e morre em 442.",
          major: true
        },
        {
          year: "750",
          title: "Fundação de Eregion",
          text: "Os ferreiros Noldor se instalam junto a [[moria|Khazad-dûm]]."
        },
        {
          year: "c. 1000",
          title: "Sauron se instala em Mordor",
          text: "Alarmado com o poder de Númenor, escolhe [[mordor|Mordor]] como fortaleza e começa Barad-dûr."
        },
        {
          year: "1200",
          title: "Annatar",
          text: "Sauron se apresenta aos Elfos como emissário dos Valar. Gil-galad e Elrond o recusam. Os ferreiros de [[eregion|Eregion]] o recebem."
        },
        {
          year: "c. 1500 a 1590",
          title: "Os Anéis de Poder",
          text: "Os ferreiros forjam os Anéis sob orientação de Sauron. [[celebrimbor|Celebrimbor]] termina os Três sozinho.",
          major: true
        },
        {
          year: "c. 1600",
          title: "O Um Anel",
          text: "Sauron forja o Anel governante no [[perdicao|Monte da Perdição]] e termina Barad-dûr. Os Elfos percebem a armadilha e escondem os Três.",
          major: true
        },
        {
          year: "1693 a 1701",
          title: "A Guerra dos Elfos e Sauron",
          text: "Eregion é arrasada em 1697. [[elrond|Elrond]] funda [[valfenda|Valfenda]], e os portões de Moria se fecham. Em 1700 chega a frota de Númenor, e Sauron é expulso de Eriador.",
          major: true
        },
        {
          year: "c. 2251",
          title: "Aparecem os Nazgûl",
          text: "Os nove Homens que receberam Anéis já são [[nazgul|espectros]]. Em Númenor os reis começam a falar contra a Interdição dos Valar."
        },
        {
          year: "3255",
          title: "Ar-Pharazôn toma o cetro",
          text: "Os Fiéis, amigos dos Elfos, viram minoria perseguida."
        },
        {
          year: "3262",
          title: "Sauron é levado a Númenor",
          text: "Rende-se a [[arpharazon|Ar-Pharazôn]] sem combate. Em poucos anos é o principal conselheiro do rei e institui o culto a Morgoth.",
          major: true
        },
        {
          year: "3319",
          title: "A Queda de Númenor",
          text: "A Grande Armada desembarca em Aman. Eru muda a forma do mundo: a ilha afunda, a frota é engolida, a Terra se torna redonda e [[valinor|Valinor]] sai do alcance dos mortais.",
          major: true
        },
        {
          year: "3320",
          title: "Arnor e Gondor",
          text: "[[elendil|Elendil]] e os filhos fundam os Reinos no Exílio. Sauron, sem corpo, volta a Mordor.",
          major: true
        },
        {
          year: "3429 a 3434",
          title: "A Última Aliança",
          text: "Sauron toma Minas Ithil. Elendil e Gil-galad reúnem Elfos e Homens, vencem em Dagorlad, diante do [[portao|Portão Negro]], e cercam Barad-dûr por sete anos."
        },
        {
          year: "3441",
          title: "A queda de Sauron",
          text: "Gil-galad e Elendil morrem derrubando Sauron. Isildur corta o Anel da mão dele e se recusa a destruí-lo.",
          major: true
        }
      ]
    },
    {
      id: "te",
      name: "Terceira Era",
      range: "3.021 anos",
      weight: 3021,
      color: "hobbits",
      heading: "O declínio, o Anel perdido e a Guerra do Anel",
      intro: "Três mil anos de desgaste. Os Elfos se retiram, os reinos dos Dúnedain encolhem, e [[sauron|Sauron]] volta aos poucos. O Anel passa quase toda a Era perdido. O Hobbit e O Senhor dos Anéis ocupam só os últimos oitenta anos.",
      events: [
        {
          year: "2",
          title: "O desastre dos Campos de Lis",
          text: "[[elendil|Isildur]] é morto por Orques, e o Anel some no [[lis|Anduin]].",
          major: true
        },
        { year: "861", title: "Arnor se divide", text: "O reino do Norte vira três: Arthedain, Cardolan e Rhudaur." },
        {
          year: "c. 1000",
          title: "Chegam os Istari",
          text: "Cinco [[istari|Magos]] desembarcam nos Portos Cinzentos."
        },
        {
          year: "c. 1050",
          title: "A sombra em Verdemata",
          text: "Um poder se instala em [[dolguldur|Dol Guldur]], e a floresta passa a se chamar [[trevamata|Trevamata]]. Os [[hobbits|Hobbits]] aparecem pela primeira vez nos registros, cruzando as montanhas para Eriador."
        },
        {
          year: "c. 1300",
          title: "O reino de Angmar",
          text: "O chefe dos Nazgûl funda [[angmar|Angmar]] para destruir os reinos do Norte. Em 1409 cai a torre de [[topo|Amon Sûl]]."
        },
        {
          year: "1432 a 1447",
          title: "A Contenda-das-Famílias",
          text: "Guerra civil em Gondor. [[osgiliath|Osgiliath]] queima, e os derrotados fogem para [[umbar|Umbar]]."
        },
        {
          year: "1601",
          title: "Fundação do Condado",
          text: "Marcho e Blanco atravessam o Brandevin. Ano 1 do Registro do [[condado|Condado]].",
          major: true
        },
        {
          year: "1636",
          title: "A Grande Peste",
          text: "Vinda do leste, despovoa Gondor e Rhovanion. A vigilância sobre Mordor é abandonada."
        },
        {
          year: "1974 a 1975",
          title: "O fim do reino do Norte",
          text: "Angmar toma [[fornost|Fornost]]. No ano seguinte é destruído, e o [[bruxo|Rei-bruxo]] foge para o sul.",
          major: true
        },
        {
          year: "1980",
          title: "A Ruína de Durin",
          text: "Os Anãos despertam o [[balrogs|Balrog]] em [[moria|Khazad-dûm]] e abandonam a cidade. Em 1999 Thráin I funda [[erebor|Erebor]].",
          major: true
        },
        { year: "2002", title: "Cai Minas Ithil", text: "Os Nazgûl a transformam em [[morgul|Minas Morgul]]." },
        {
          year: "2050",
          title: "Os Regentes",
          text: "O rei Eärnur aceita o desafio do Rei-bruxo, entra em Minas Morgul e não volta. Os Regentes passam a governar Gondor."
        },
        {
          year: "2063 a 2460",
          title: "A Paz Vigilante",
          text: "[[gandalf|Gandalf]] vai a Dol Guldur, e Sauron se retira para o leste. Quando volta, mais forte, a paz acaba."
        },
        {
          year: "2463",
          title: "O Conselho Branco e o Anel achado",
          text: "Os Sábios formam o Conselho, com [[saruman|Saruman]] na chefia. Na mesma época Déagol acha o Anel, e Sméagol o mata. Nasce [[gollum|Gollum]].",
          major: true
        },
        {
          year: "2510",
          title: "Eorl e a fundação de Rohan",
          text: "Os cavaleiros do norte salvam Gondor no Campo de Celebrant e recebem a terra que será [[edoras|Rohan]].",
          major: true
        },
        {
          year: "2758 a 2759",
          title: "O Inverno Longo",
          text: "Rohan é invadida, e o rei Helm resiste no [[helm|Abismo]]. Saruman se instala em [[isengard|Isengard]]."
        },
        {
          year: "2770",
          title: "Smaug toma Erebor",
          text: "O dragão destrói [[valle|Valle]] e expulsa os Anãos. De 2793 a 2799 vem a guerra dos Anãos contra os Orques, encerrada na batalha de Azanulbizar."
        },
        {
          year: "2850",
          title: "Gandalf entra em Dol Guldur",
          text: "Confirma que o Necromante é Sauron e recebe de Thráin, moribundo, o mapa e a chave de Erebor."
        },
        {
          year: "2931",
          title: "Nasce Aragorn",
          text: "O herdeiro de Isildur é criado em [[valfenda|Valfenda]] com o nome de Estel."
        },
        {
          year: "2941",
          title: "A viagem de Bilbo",
          text: "É a história de O Hobbit. [[bilbo|Bilbo]] acha o Anel, [[smaug|Smaug]] morre, [[thorin|Thorin]] cai na Batalha dos Cinco Exércitos. No mesmo ano o Conselho Branco expulsa Sauron de Dol Guldur.",
          major: true
        },
        {
          year: "2951",
          title: "Sauron se declara",
          text: "De volta a [[mordor|Mordor]], reconstrói Barad-dûr e manda três Nazgûl reocupar Dol Guldur."
        },
        {
          year: "3001",
          title: "A festa de despedida",
          text: "Bilbo faz 111 anos, some no meio do discurso e deixa o Anel para [[frodo|Frodo]]. Gandalf passa dezessete anos investigando."
        },
        {
          year: "3018 a 3019",
          title: "A Guerra do Anel",
          text: "É a história de O Senhor dos Anéis. As datas principais:",
          major: true,
          keyDates: [
            { date: "23 set. 3018", text: "Frodo sai de Bolsão. Os Cavaleiros Negros chegam ao Condado." },
            { date: "6 out.", text: "Frodo é ferido no Topo-do-Vento." },
            { date: "25 out.", text: "O Conselho de Elrond." },
            { date: "25 dez.", text: "A Sociedade do Anel deixa Valfenda." },
            { date: "15 jan. 3019", text: "Gandalf cai na Ponte de Khazad-dûm." },
            { date: "26 fev.", text: "A Sociedade se separa. Morre Boromir." },
            { date: "3 e 4 mar.", text: "Batalha do Forte-da-Trombeta. Os Ents destroem Isengard." },
            { date: "15 mar.", text: "Batalha dos Campos de Pelennor. Morrem Théoden e o Rei-bruxo." },
            { date: "25 mar.", text: "O Anel é destruído. Barad-dûr cai." },
            { date: "1º mai.", text: "Coroação do rei Elessar." },
            { date: "3 nov.", text: "Batalha de Beirágua. Morre Saruman." }
          ]
        },
        {
          year: "29 set. 3021",
          title: "Os Portadores do Anel partem",
          text: "[[frodo|Frodo]], [[bilbo|Bilbo]], [[gandalf|Gandalf]], [[elrond|Elrond]] e [[galadriel|Galadriel]] embarcam nos [[portos|Portos Cinzentos]]. Os Três Anéis deixam a Terra-média. Fim da Terceira Era.",
          major: true
        }
      ]
    },
    {
      id: "qe",
      name: "Quarta Era",
      range: "em aberto",
      weight: 0,
      color: "homens",
      heading: "O Domínio dos Homens",
      intro: "Com a partida dos Portadores começa a Era dos [[homens|Homens]]. Os Elfos que restam vão partindo, os Anãos e os Hobbits se recolhem, e o mundo fica cada vez mais parecido com o nosso. Tolkien começou uma continuação, A Nova Sombra, e a abandonou depois de poucas páginas.",
      events: [
        {
          year: "6",
          title: "O Condado protegido",
          text: "O rei Elessar proíbe a entrada de Homens no [[condado|Condado]] e o torna terra livre sob a proteção do cetro do Norte. [[sam|Sam]] é eleito Prefeito pela primeira de sete vezes."
        },
        {
          year: "61",
          title: "Sam atravessa o mar",
          text: "Depois da morte de Rosinha, Sam entrega o Livro Vermelho à filha Elanor e vai aos Portos Cinzentos."
        },
        {
          year: "63",
          title: "Merry e Pippin",
          text: "Os dois deixam o Condado, velhos, e vão morrer em Gondor. São sepultados junto dos reis."
        },
        {
          year: "120",
          title: "Morre o rei Elessar",
          text: "[[aragorn|Aragorn]] entrega a vida por vontade própria, como os reis de Númenor nos bons tempos, depois de 120 anos de reinado. Arwen morre no ano seguinte em Lórien vazia. [[legolas|Legolas]] constrói um navio e parte com Gimli.",
          major: true
        }
      ]
    }
  ],
  books: [
    {
      year: "1937",
      title: "O Hobbit",
      originalTitle: "The Hobbit",
      covers: "Terceira Era, ano 2941",
      text: "A viagem de Bilbo com Thorin e os Anãos até Erebor. Escrito para crianças e ligado ao resto do legendário só depois. É onde o Anel aparece pela primeira vez."
    },
    {
      year: "1954 a 1955",
      title: "O Senhor dos Anéis",
      originalTitle: "The Lord of the Rings",
      covers: "Terceira Era, 3001 a 3021",
      text: "A Guerra do Anel, em três volumes: A Sociedade do Anel, As Duas Torres e O Retorno do Rei. Os Apêndices do terceiro volume trazem a cronologia, as árvores genealógicas, os calendários e as notas sobre línguas e escritas."
    },
    {
      year: "1962",
      title: "As Aventuras de Tom Bombadil",
      originalTitle: "The Adventures of Tom Bombadil",
      covers: "Poemas do Condado",
      text: "Dezesseis poemas apresentados como versos do Livro Vermelho, a coleção de escritos dos hobbits."
    },
    {
      year: "1977",
      title: "O Silmarillion",
      originalTitle: "The Silmarillion",
      covers: "Da criação ao fim da Terceira Era",
      text: "Organizado por Christopher Tolkien depois da morte do pai. Reúne a Música dos Ainur, a lista dos Valar, a história das Silmarils na Primeira Era, a Queda de Númenor e um resumo dos Anéis de Poder."
    },
    {
      year: "1980",
      title: "Contos Inacabados",
      originalTitle: "Unfinished Tales",
      covers: "As três Eras",
      text: "Narrativas que Tolkien não terminou, com notas do filho: Tuor em Gondolin, a história de Númenor, Galadriel e Celeborn, os Istari, as Pedras-videntes e os bastidores da viagem a Erebor."
    },
    {
      year: "1983 a 1996",
      title: "A História da Terra-média",
      originalTitle: "The History of Middle-earth",
      covers: "Os manuscritos",
      text: "Doze volumes em que Christopher Tolkien publica os rascunhos do pai, das primeiras versões de 1917 aos textos finais. Mostra como as histórias mudaram. É leitura de estudo."
    },
    {
      year: "2007",
      title: "Os Filhos de Húrin",
      originalTitle: "The Children of Húrin",
      covers: "Primeira Era",
      text: "A história de Túrin e Niënor contada como romance contínuo."
    },
    {
      year: "2017",
      title: "Beren e Lúthien",
      originalTitle: "Beren and Lúthien",
      covers: "Primeira Era",
      text: "As versões sucessivas da história, em prosa e em verso, lado a lado."
    },
    {
      year: "2018",
      title: "A Queda de Gondolin",
      originalTitle: "The Fall of Gondolin",
      covers: "Primeira Era",
      text: "As versões da história de Tuor e da Cidade Oculta. Foi o último livro editado por Christopher Tolkien."
    },
    {
      year: "2021",
      title: "A Natureza da Terra-média",
      originalTitle: "The Nature of Middle-earth",
      covers: "Ensaios tardios",
      text: "Textos dos últimos anos de Tolkien sobre o tempo, o envelhecimento dos Elfos, corpo e espírito e a geografia. Organizado por Carl Hostetter."
    },
    {
      year: "2022",
      title: "A Queda de Númenor",
      originalTitle: "The Fall of Númenor",
      covers: "Segunda Era",
      text: "Tudo o que Tolkien escreveu sobre a Segunda Era, reunido em ordem cronológica por Brian Sibley."
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
      label: "Wikipédia: O Senhor dos Anéis (edições brasileiras e nomes traduzidos)",
      url: "https://pt.wikipedia.org/wiki/O_Senhor_dos_An%C3%A9is"
    }
  ]
};
