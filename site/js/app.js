/* ===== i18n core: identical in every GrandArchives site. Contains NO visible text. =====
 * Paste at the very top of site/js/app.js (inside the same classic <script defer> file).
 *
 * Contract
 *  - Each page declares its language in <html lang="...">; that value is the folder name under site/i18n/.
 *  - UI strings:  site/i18n/<lang>/ui.json   (flat object: "section.key": "text", may contain trusted inline HTML)
 *  - Content:     site/i18n/<lang>/data.js   (ES module, `export default {...}`)
 *  - Languages:   site/i18n/languages.json   ([{ "code": "pt-BR", "name": "Português", "path": "" }, { "code": "en", "name": "English", "path": "en/" }])
 *                 `path` is relative to the site root; "" is the Portuguese root page.
 *  - Markup:      data-i18n="key"              -> element.innerHTML = t(key)
 *                 data-i18n-attr="attr:key;attr2:key2"  -> element.setAttribute(attr, t(key))
 *  - Placeholders: "{name}" in a string is replaced from the vars object passed to t().
 *  - Plurals:     tn("key", n) uses "key.one" / "key.other" (Intl.PluralRules for the page language).
 */
const I18N = (() => {
  const ROOT = new URL('../', document.currentScript.src); // site root (this file lives in site/js/)
  const LANG = document.documentElement.lang;
  let ui = {};

  const t = (key, vars) => {
    const s = ui[key];
    if (s == null) { console.error('[i18n] missing key:', key); return key; }
    return vars ? s.replace(/\{(\w+)\}/g, (_, k) => (vars[k] ?? '')) : s;
  };
  const tn = (key, n, vars) => t(`${key}.${new Intl.PluralRules(LANG).select(n)}`, { n, ...vars });

  const apply = (scope = document) => {
    scope.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = t(el.dataset.i18n); });
    scope.querySelectorAll('[data-i18n-attr]').forEach(el => {
      el.dataset.i18nAttr.split(';').forEach(pair => {
        const [attr, key] = pair.split(':').map(x => x.trim());
        if (attr && key) el.setAttribute(attr, t(key));
      });
    });
  };

  // Renders a <select> of all languages into `container` (also with a single language);
  // keeps the current hash/search so the equivalent view opens in the other language.
  const languageSwitcher = (languages, container) => {
    if (!container) return;
    const sel = document.createElement('select');
    sel.className = 'langsel';
    sel.setAttribute('aria-label', t('lang.label'));
    languages.forEach(l => {
      const o = document.createElement('option');
      o.value = l.code; o.textContent = l.name; o.selected = l.code === LANG;
      sel.appendChild(o);
    });
    sel.addEventListener('change', () => {
      const target = languages.find(l => l.code === sel.value);
      if (target) location.href = new URL(target.path, ROOT).href + location.search + location.hash;
    });
    container.appendChild(sel);
  };

  // Loads ui.json, data.js and languages.json for the page language. Returns { data, languages }.
  const load = async () => {
    const base = new URL(`i18n/${LANG}/`, ROOT);
    const [uiRes, mod, langRes] = await Promise.all([
      fetch(new URL('ui.json', base)),
      import(new URL('data.js', base).href),
      fetch(new URL('i18n/languages.json', ROOT)),
    ]);
    ui = await uiRes.json();
    return { data: mod.default, languages: await langRes.json() };
  };

  return { ROOT, LANG, t, tn, apply, languageSwitcher, load, asset: p => new URL(`assets/${p}`, ROOT).href };
})();
/* ===== end i18n core ===== */

/* ===== Middle-earth guide: logic only. Every visible string comes from i18n/<lang>/ui.json and data.js. ===== */
const t = I18N.t;

// Map presentation (not content): pin position [x, y, label side] per profile id (side: r, l, t, b).
const PINS = { condado: [268, 255, "b"], bri: [338, 250, "t"], portos: [178, 254, "t"], valfenda: [512, 232, "l"], topo: [405, 252, "b"], fornost: [345, 185, "r"], angmar: [440, 80, "l"], eregion: [472, 345, "l"], moria: [527, 330, "t"], lorien: [580, 347, "r"], lis: [598, 292, "r"], fangorn: [552, 415, "r"], isengard: [508, 440, "l"], helm: [492, 482, "l"], edoras: [540, 497, "r"], minastirith: [628, 541, "l"], osgiliath: [656, 526, "t"], dolamroth: [440, 592, "b"], pelargir: [612, 598, "l"], umbar: [432, 716, "r"], mordor: [800, 490, "r"], perdicao: [748, 512, "b"], morgul: [690, 548, "b"], portao: [690, 462, "t"], dolguldur: [662, 388, "r"], trevamata: [722, 165, "l"], erebor: [760, 150, "t"], valle: [770, 190, "r"], ferro: [868, 150, "b"] };
const TYPES = ["povo", "lingua", "figura", "lugar"];          // profile types = explorer tabs
const CATS = ["homens", "elfos", "anaos", "hobbits", "sombra", "outros"]; // colour categories = map legend

// Map geometry. Labels live in data.js (map.regions / map.features), keyed by the ids used here.
const GEO = {
 coast:[[150,-20],[140,60],[110,120],[95,190],[118,238],[172,252],[120,270],[105,320],[130,380],[190,430],[215,480],[192,540],[215,585],[270,572],[330,588],[400,610],[440,596],[452,606],[500,616],[556,630],[540,672],[480,700],[430,714],[440,790],[1040,790],[1040,-20]],
 mts:[[[175,110],[165,180],[170,232]],[[165,275],[160,340]],[[420,88],[470,75],[520,95],[535,160],[525,230],[530,300],[520,370],[512,425]],[[548,95],[640,90],[730,96]],[[840,150],[900,150]],[[420,527],[470,512],[540,517],[600,537],[624,552]],[[690,470],[760,456],[885,470]],[[688,482],[696,540],[700,602]],[[702,606],[780,622],[870,612]]],
 forests:[[[650,140],[720,125],[770,172],[765,260],[740,340],[700,400],[650,405],[630,340],[640,240]],[[533,396],[566,400],[571,432],[540,441]],[[564,335],[596,334],[599,359],[567,361]],[[296,266],[322,262],[324,280],[300,284]]],
 rivers:[[[585,105],[595,200],[600,300],[605,380],[615,450],[650,505],[645,560],[600,605],[558,628]],[[290,170],[300,250],[270,330],[190,430]],[[522,228],[450,290],[380,360],[300,430],[215,476]],[[505,446],[440,470],[300,500],[204,506]],[[764,186],[800,240],[878,292]]],
 lakes:[[[880,270],[925,280],[935,320],[900,335],[872,305]],[[780,570],[825,572],[830,592],[790,596]]],
 regions:[["eriador",330,335],["rhovanion",850,225],["rohan",590,476],["gondor",520,576],["mordor",880,548],["harad",640,705],["rhun",905,372],["lindon",132,205],["forodwaith",300,48],["enedwaith",330,462]],
 feats:[["misty",0,0,"rotate(86 548 190) translate(548 190)"],["white",395,548],["blue",0,0,"rotate(-88 146 318) translate(146 318)"],["belegaer",0,0,"rotate(-90 52 300) translate(52 300)"],["anduin",0,0,"rotate(82 612 235) translate(612 235)"],["rhunSea",905,352]]
};

const SKELETON = `
<div class="wrap">
  <div class="langbar" id="langbar"></div>
  <nav class="nav" data-i18n-attr="aria-label:nav.label">
    <a href="#mapa" data-i18n="nav.map"></a><a href="#eras" data-i18n="nav.eras"></a><a href="#explorar" data-i18n="nav.explore"></a><a href="#livros" data-i18n="nav.books"></a><a href="#creditos" data-i18n="nav.credits"></a>
  </nav>
  <div class="top">
    <span class="eyebrow" data-i18n="hero.eyebrow"></span>
    <h1 data-i18n="hero.title"></h1>
    <p class="lede" data-i18n="hero.lede"></p>
    <span class="meta" id="meta"></span>
  </div>

  <div class="sech" id="mapa"><h2 class="sec" data-i18n="map.title"></h2><p data-i18n="map.intro"></p></div>
  <div class="mapgrid">
    <section class="mapbox" data-i18n-attr="aria-label:map.sectionLabel">
      <div class="scroll"><svg id="map" viewBox="0 0 1000 760" role="group" data-i18n-attr="aria-label:map.svgLabel"></svg></div>
      <div class="lgd" id="lgd"></div>
      <div class="lost"><h4 data-i18n="map.lost"></h4><div class="chips" id="lost"></div></div>
    </section>
    <aside class="mappanel" id="mappanel" aria-live="polite"></aside>
  </div>

  <div class="sech" id="eras"><h2 class="sec" data-i18n="eras.title"></h2><p data-i18n="eras.intro"></p></div>
  <div class="ruler" id="ruler" role="tablist" data-i18n-attr="aria-label:eras.rulerLabel"></div>
  <p class="rnote" id="rnote"></p>
  <section class="era" id="era" aria-live="polite"></section>

  <div class="sech" id="explorar"><h2 class="sec" data-i18n="explore.title"></h2><p data-i18n="explore.intro"></p></div>
  <div class="grid">
    <aside class="pick" data-i18n-attr="aria-label:explore.pickLabel">
      <div class="tabs" role="tablist" id="tabs"></div>
      <input id="q" type="search" data-i18n-attr="placeholder:explore.searchPlaceholder;aria-label:explore.searchLabel">
      <div class="list" id="list"></div>
    </aside>
    <section class="detail" id="detail" aria-live="polite"></section>
  </div>

  <div class="sech" id="livros"><h2 class="sec" data-i18n="books.title"></h2><p data-i18n="books.intro"></p></div>
  <div class="books" id="books"></div>
  <div class="order" id="order"></div>

  <dialog id="reader" data-i18n-attr="aria-label:reader.label">
    <div class="rbar"><button class="btn" id="rclose" data-i18n="reader.close"></button></div>
    <div id="rbody"></div>
  </dialog>

  <section class="credits" id="creditos" data-i18n-attr="aria-label:credits.label">
    <div><h4 data-i18n="credits.sourcesTitle"></h4><p data-i18n="credits.sourcesText"></p></div>
    <div><h4 data-i18n="credits.namesTitle"></h4><p data-i18n="credits.namesText"></p></div>
    <div><h4 data-i18n="credits.mapTitle"></h4><p data-i18n="credits.mapText"></p></div>
    <details><summary data-i18n="credits.consulted"></summary><ul id="srclist"></ul></details>
  </section>
  <footer class="foot">
    <p data-i18n="footer.copyright"></p>
    <p data-i18n="footer.notice"></p>
  </footer>
</div>`;

const $ = s => document.querySelector(s);
const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
// accent- and case-folding for search; strips combining marks, so it is not tied to any one language
const norm = s => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase(I18N.LANG);

/* ---------- map drawing helpers (pure geometry) ---------- */
function smooth(p,close){
  const n=p.length,g=i=>close?p[(i+n)%n]:p[Math.max(0,Math.min(n-1,i))];
  let d=`M${p[0][0]},${p[0][1]}`;const m=close?n:n-1;
  for(let i=0;i<m;i++){const a=g(i-1),b=g(i),c=g(i+1),e=g(i+2);
    d+=`C${(b[0]+(c[0]-a[0])/6).toFixed(1)},${(b[1]+(c[1]-a[1])/6).toFixed(1)} ${(c[0]-(e[0]-b[0])/6).toFixed(1)},${(c[1]-(e[1]-b[1])/6).toFixed(1)} ${c[0]},${c[1]}`}
  return d+(close?"Z":"");
}
function rng(seed){return()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
// hand-drawn stroke: extra points with a small random offset between the control points
function rough(p,close,amp,R){const o=[],n=p.length,m=close?n:n-1;
  for(let i=0;i<m;i++){const a=p[i],b=p[(i+1)%n];o.push(a);for(const t of[.33,.66])o.push([+(a[0]+(b[0]-a[0])*t+(R()-.5)*amp).toFixed(1),+(a[1]+(b[1]-a[1])*t+(R()-.5)*amp).toFixed(1)])}
  if(!close)o.push(p[n-1]);return o}
function inside(x,y,p){let c=false;for(let i=0,j=p.length-1;i<p.length;j=i++){const a=p[i],b=p[j];if((a[1]>y)!==(b[1]>y)&&x<(b[0]-a[0])*(y-a[1])/(b[1]-a[1])+a[0])c=!c}return c}
function peak(x,y,s){const f=n=>n.toFixed(1);
  return `<path class="peak" d="M${f(x-s)},${f(y+s*.6)}L${f(x-s*.1)},${f(y-s)}L${f(x+s)},${f(y+s*.6)}"/><path class="shade" d="M${f(x+s*.08)},${f(y-s*.6)}l${f(s*.28)},${f(s*.95)}M${f(x+s*.3)},${f(y-s*.3)}l${f(s*.25)},${f(s*.7)}M${f(x+s*.55)},${f(y)}l${f(s*.15)},${f(s*.45)}"/>`}

(async () => {
  const { data, languages } = await I18N.load();
  const E = data.profiles, ERAS = data.eras, BOOKS = data.books, SRC = data.sources;

  $("#app").innerHTML = SKELETON;
  I18N.apply();
  I18N.languageSwitcher(languages, $("#langbar"));

  // [[id|label]] in texts becomes a link to another profile
  const link=s=>s.replace(/\[\[(\w+)\|([^\]]+)\]\]/g,(m,id,l)=>E[id]?`<button class="lk" data-go="${id}">${l}</button>`:l);
  const refs=s=>[...s.matchAll(/\[\[(\w+)\|/g)].map(m=>m[1]).filter(id=>E[id]);

  // links between profiles and appearances on the timeline
  const conn={},evIn={};
  for(const id in E){conn[id]=new Set();evIn[id]=[]}
  for(const id in E)for(const r of refs(E[id].paras.join(" "))){if(r!==id){conn[id].add(r);conn[r].add(id)}}
  ERAS.forEach(era=>era.events.forEach((ev,i)=>{for(const r of new Set(refs(ev.text)))evIn[r].push([era.id,i])}));

  function entry(id){
    const e=E[id];let h=`<article class="ent k-${e.color}"><div><div class="kick"><span class="dot"></span>${t("entry.kicker",{type:t("type."+e.type),group:e.group})}</div><h3>${e.name}</h3><p class="sub">${e.summary}</p></div>`;
    h+=`<div class="prose">${e.paras.map(p=>`<p>${link(p)}</p>`).join("")}</div>`;
    if(e.tree)h+=`<div><h4>${e.treeTitle}</h4><div class="tree">${e.tree}</div></div>`;
    if(e.branches)h+=`<div><h4>${e.branchesTitle||t("entry.branches")}</h4><ul class="branches">${e.branches.map(b=>`<li><b>${b.name}.</b> ${b.text}</li>`).join("")}</ul></div>`;
    if(e.examples)h+=`<div><h4>${t("entry.words")}</h4><div class="scroll"><table class="words">${e.examples.map(x=>`<tr><td>${x.word}</td><td>${x.meaning}</td></tr>`).join("")}</table></div></div>`;
    if(e.facts)h+=`<dl class="facts">${e.facts.map(f=>`<dt>${f.label}</dt><dd>${f.value}</dd>`).join("")}</dl>`;
    const c=[...conn[id]].sort((a,b)=>E[a].name.localeCompare(E[b].name,I18N.LANG));
    if(c.length)h+=`<div><h4>${t("entry.links")}</h4><div class="chips">${c.map(x=>`<button class="chip k-${E[x].color}" data-go="${x}"><span class="dot"></span>${E[x].name}</button>`).join("")}</div></div>`;
    if(evIn[id].length)h+=`<div><h4>${t("entry.timeline")}</h4><ul class="back">${evIn[id].map(([er,i])=>{const era=ERAS.find(x=>x.id===er),ev=era.events[i];return `<li><span class="yr">${t("entry.eventRef",{era:era.name,year:ev.year})}</span><button class="lk" data-ev="${er}:${i}">${ev.title}</button></li>`}).join("")}</ul></div>`;
    return h+`</article>`;
  }

  /* ---------- map ---------- */
  function drawMap(){
    const R=rng(1937),coast=smooth(rough(GEO.coast,true,7,R),true);
    let s=`<defs>
<filter id="stain" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".011 .017" numOctaves="4" seed="7"/><feColorMatrix values="0 0 0 0 .42 0 0 0 0 .3 0 0 0 0 .14 0 0 0 .7 -.26"/></filter>
<filter id="grain" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="3"/><feColorMatrix values="0 0 0 0 .25 0 0 0 0 .18 0 0 0 0 .1 0 0 0 .22 -.06"/></filter>
<radialGradient id="vig" cx="50%" cy="50%" r="72%"><stop offset=".62" stop-color="#5a3c14" stop-opacity="0"/><stop offset="1" stop-color="#5a3c14" stop-opacity=".42"/></radialGradient>
<pattern id="hatch" width="5" height="4.5" patternUnits="userSpaceOnUse"><path d="M0,2.2H5" stroke="#3a2a18" stroke-width=".55"/></pattern>
<mask id="seam"><rect width="1000" height="760" fill="#fff"/><path d="${coast}" fill="#000"/></mask>
<clipPath id="clip"><rect width="1000" height="760"/></clipPath></defs><g clip-path="url(#clip)">`;
    s+=`<rect class="paper" width="1000" height="760"/><rect class="wash" width="1000" height="760"/>`;
    s+=`<g mask="url(#seam)"><path d="${coast}" fill="none" stroke="url(#hatch)" stroke-width="54" opacity=".4"/><path d="${coast}" fill="none" stroke="url(#hatch)" stroke-width="24" opacity=".9"/></g>`;
    s+=`<path class="landp" d="${coast}"/>`;
    s+=GEO.rivers.map(r=>`<path class="rv" d="${smooth(rough(r,false,5,R))}"/>`).join("");
    s+=GEO.lakes.map(l=>{const d=smooth(rough(l,true,3,R),true);return `<path class="lake" d="${d}"/><path d="${d}" fill="url(#hatch)" opacity=".7"/>`}).join("");
    // forests: small trees scattered inside each patch, back to front
    const trees=[];
    for(const f of GEO.forests){const xs=f.map(p=>p[0]),ys=f.map(p=>p[1]);
      for(let y=Math.min(...ys)-6;y<Math.max(...ys)+6;y+=8.5)for(let x=Math.min(...xs)-6+(Math.round(y/8.5)%2)*5;x<Math.max(...xs)+6;x+=10.5){
        const px=x+(R()-.5)*5,py=y+(R()-.5)*4;if(inside(px,py,f))trees.push([px,py,3.6+R()*1.6])}}
    trees.sort((a,b)=>a[1]-b[1]);
    s+=trees.map(([x,y,r])=>`<path class="tree" d="M${x.toFixed(1)},${(y+r+2.5).toFixed(1)}v${(-2.5).toFixed(1)}m${(-r).toFixed(1)},0q${(-r*.2).toFixed(1)},${(-r*1.9).toFixed(1)} ${r.toFixed(1)},${(-r*1.9).toFixed(1)}q${(r*1.2).toFixed(1)},0 ${r.toFixed(1)},${(r*1.9).toFixed(1)}z"/>`).join("");
    // mountains: peaks drawn along each range
    const pk=[];
    for(const m of GEO.mts){let len=0;for(let i=1;i<m.length;i++)len+=Math.hypot(m[i][0]-m[i-1][0],m[i][1]-m[i-1][1]);
      const big=len>200;let i=0,acc=0,k=0;
      for(let d=0;d<=len;d+=big?11:13,k++){while(i<m.length-2&&d>acc+Math.hypot(m[i+1][0]-m[i][0],m[i+1][1]-m[i][1])){acc+=Math.hypot(m[i+1][0]-m[i][0],m[i+1][1]-m[i][1]);i++}
        const a=m[i],b=m[i+1],L=Math.hypot(b[0]-a[0],b[1]-a[1]),t=(d-acc)/L,nx=-(b[1]-a[1])/L,ny=(b[0]-a[0])/L,off=(k%2?1:-1)*(big?7:4)+(R()-.5)*5;
        pk.push([a[0]+(b[0]-a[0])*t+nx*off,a[1]+(b[1]-a[1])*t+ny*off,(big?9:7.5)+R()*4])}}
    pk.push([760,134,17],[748,496,15]);
    pk.sort((a,b)=>a[1]-b[1]);
    s+=pk.map(p=>peak(...p)).join("");
    s+=`<path class="ink" stroke-width=".9" d="M748,480q-7,-8 1,-15q8,-7 -1,-15M754,478q7,-6 2,-13"/>`; // smoke over Mount Doom
    s+=GEO.regions.map(r=>`<text class="rg" x="${r[1]}" y="${r[2]}">${data.map.regions[r[0]]}</text>`).join("");
    s+=GEO.feats.map(f=>{const c=f[0]==="belegaer"?"seat":"ft",label=data.map.features[f[0]];return f[3]?`<text class="${c}" transform="${f[3]}">${label}</text>`:`<text class="${c}" x="${f[1]}" y="${f[2]}">${label}</text>`}).join("");
    // compass rose
    let rose="";for(let i=0;i<8;i++){const a=i*Math.PI/4,L=i%2?20:40,w=i%2?5:7,c=Math.cos(a),n=Math.sin(a);
      for(const sd of[1,-1])rose+=`<path class="${sd>0?"d":"l"}" d="M0,0L${(n*L).toFixed(1)},${(-c*L).toFixed(1)}L${(Math.sin(a+sd*Math.PI/4)*w).toFixed(1)},${(-Math.cos(a+sd*Math.PI/4)*w).toFixed(1)}Z"/>`}
    s+=`<g class="rose" transform="translate(92 548)"><circle r="27" class="ink" stroke-width=".8"/>${rose}<text y="-46">${t("map.north")}</text></g>`;
    s+=`<g class="cart" transform="translate(40 652)"><rect width="300" height="76" stroke-width="1.6"/><rect x="5" y="5" width="290" height="66" stroke-width=".7"/><text x="150" y="33" font-size="23" letter-spacing="2">${t("map.cartTitle")}</text><text x="150" y="57" font-size="15" font-style="italic">${t("map.cartSubtitle")}</text></g>`;
    for(const id in E){const e=E[id];if(!PINS[id])continue;const[x,y,sd]=PINS[id];
      const tp=sd==="r"?[x+10,y+5,"start"]:sd==="l"?[x-10,y+5,"end"]:sd==="t"?[x,y-11,"middle"]:[x,y+22,"middle"];
      s+=`<g class="pin k-${e.color}" data-pin="${id}" tabindex="0" role="button" aria-label="${e.name}"><circle cx="${x}" cy="${y}" r="5.5"/><circle class="eye" cx="${x}" cy="${y}" r="1.7"/><text x="${tp[0]}" y="${tp[1]}" text-anchor="${tp[2]}">${e.pinLabel||e.name}</text></g>`}
    s+=`<rect filter="url(#stain)" width="1000" height="760" pointer-events="none"/><rect filter="url(#grain)" width="1000" height="760" pointer-events="none"/><rect fill="url(#vig)" width="1000" height="760" pointer-events="none"/>`;
    s+=`<rect class="frame" x="6" y="6" width="988" height="748" stroke-width="2.2"/><rect class="frame" x="12" y="12" width="976" height="736" stroke-width=".8"/></g>`;
    $("#map").innerHTML=s;
    $("#lgd").innerHTML=CATS.map(c=>`<span class="k-${c}"><span class="dot"></span>${t("cat."+c)}</span>`).join("");
    $("#lost").innerHTML=Object.keys(E).filter(id=>E[id].type==="lugar"&&!PINS[id]).map(id=>`<button class="chip k-${E[id].color}" data-pin="${id}"><span class="dot"></span>${E[id].name}</button>`).join("");
  }
  function selPlace(id){
    document.querySelectorAll("#map .pin").forEach(p=>p.classList.toggle("on",p.dataset.pin===id));
    const mp=$("#mappanel");mp.className="mappanel k-"+E[id].color;mp.innerHTML=entry(id);mp.scrollTop=0;
  }

  /* ---------- ages ---------- */
  let curEra=data.start.era;
  function drawRuler(){
    $("#ruler").innerHTML=ERAS.map(e=>`<button role="tab" class="k-${e.color}" style="--g:${e.weight}" data-era="${e.id}" aria-selected="${e.id===curEra}"><b>${e.name}</b><span>${e.range}</span></button>`).join("");
  }
  function drawEra(hl){
    const e=ERAS.find(x=>x.id===curEra);drawRuler();
    $("#era").className="era k-"+e.color;
    $("#era").innerHTML=`<div><div class="kick"><span class="dot"></span>${e.name}</div><h3>${e.heading}</h3></div><div class="prose"><p>${link(e.intro)}</p></div><ol class="line">${e.events.map((v,i)=>`<li class="st${v.major?" big":""}${hl===i?" hl":""}" id="ev-${e.id}-${i}"><span class="yr">${v.year}</span><div class="b"><span class="ti">${v.title}</span><p>${link(v.text)}</p>${v.keyDates?`<dl class="war">${v.keyDates.map(w=>`<dt>${w.date}</dt><dd>${w.text}</dd>`).join("")}</dl>`:""}</div></li>`).join("")}</ol>`;
  }

  /* ---------- explorer ---------- */
  let tab=data.start.tab;const cur={...data.start.profiles};
  function drawTabs(){$("#tabs").innerHTML=TYPES.map(k=>`<button role="tab" data-tab="${k}" aria-selected="${k===tab}">${t("tab."+k)}</button>`).join("")}
  function drawList(){
    const q=norm($("#q").value.trim());let h="",g="";
    for(const id in E){const e=E[id];if(e.type!==tab)continue;if(q&&!norm(e.name+" "+e.summary).includes(q))continue;
      if(e.group!==g){g=e.group;h+=`<h4>${g}</h4>`}
      h+=`<button class="item k-${e.color}" data-sel="${id}" aria-current="${cur[tab]===id}"><span class="dot"></span><span>${e.name}</span></button>`}
    $("#list").innerHTML=h||`<p class="empty">${t("explore.empty")}</p>`;
  }
  function drawDetail(){$("#detail").innerHTML=entry(cur[tab])}
  function show(id,scroll){tab=E[id].type;cur[tab]=id;drawTabs();drawList();drawDetail();if(scroll)$("#detail").scrollIntoView({block:"start"})}

  /* ---------- books, order, sources ---------- */
  $("#books").innerHTML=BOOKS.map(b=>`<article class="book"><span class="y">${b.year}</span><div><h3>${b.title}</h3>${b.title!==b.originalTitle?`<span class="o">${b.originalTitle}</span>`:""}</div><span class="era-tag">${b.covers}</span><p>${b.text}</p></article>`).join("");
  $("#order").innerHTML=`<h4>${t("books.startTitle")}</h4><p>${t("books.startP1")}</p><p>${t("books.startP2")}</p>`;
  $("#srclist").innerHTML=SRC.map(s=>`<li><a href="${s.url}" target="_blank" rel="noopener">${esc(s.label)}</a></li>`).join("");

  /* ---------- events ---------- */
  const reader=$("#reader");
  function openReader(id){$("#rbody").className="k-"+E[id].color;$("#rbody").innerHTML=entry(id);if(!reader.open)reader.showModal();reader.scrollTop=0}
  $("#rclose").onclick=()=>reader.close();
  reader.addEventListener("click",e=>{if(e.target===reader)reader.close()});
  document.addEventListener("click",e=>{
    const el=e.target.closest("[data-go],[data-ev],[data-pin],[data-era],[data-tab],[data-sel]");if(!el)return;
    if(el.dataset.go)openReader(el.dataset.go);
    else if(el.dataset.ev){const[er,i]=el.dataset.ev.split(":");if(reader.open)reader.close();curEra=er;drawEra(+i);document.getElementById(`ev-${er}-${i}`).scrollIntoView({block:"center"})}
    else if(el.dataset.pin)selPlace(el.dataset.pin);
    else if(el.dataset.era){curEra=el.dataset.era;drawEra()}
    else if(el.dataset.tab){tab=el.dataset.tab;$("#q").value="";drawTabs();drawList();drawDetail()}
    else if(el.dataset.sel)show(el.dataset.sel,window.matchMedia("(max-width:860px)").matches);
  });
  document.addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&e.target.matches&&e.target.matches("#map .pin")){e.preventDefault();selPlace(e.target.dataset.pin)}});
  $("#q").addEventListener("input",drawList);

  const n=type=>Object.values(E).filter(e=>e.type===type).length;
  $("#meta").textContent=t("meta.summary",{
    places:I18N.tn("meta.places",n("lugar")),
    moments:I18N.tn("meta.moments",ERAS.reduce((a,e)=>a+e.events.length,0)),
    peoples:I18N.tn("meta.peoples",n("povo")),
    languages:I18N.tn("meta.languages",n("lingua")),
    characters:I18N.tn("meta.characters",n("figura")),
  });
  drawMap();selPlace(data.start.place);drawEra();drawTabs();drawList();drawDetail();

  // The page body is built here, so the browser could not honour a #hash on load: scroll to it now.
  if(location.hash.length>1){const el=document.getElementById(decodeURIComponent(location.hash.slice(1)));if(el)el.scrollIntoView({behavior:"instant"})}
})();
