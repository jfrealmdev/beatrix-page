import{bd as h,t as o,Y as x,S as g,U as m,bS as k,a1 as w}from"./index-C5Zkdn_X.js";import{getAllCompositions as $,getBestGrade as B}from"./composition-DeErsOye.js";import{g as S,n as C}from"./scales-DV4Q5YZm.js";import{i as E}from"./session-keys-C1tcufGj.js";import"./grid-onboarding-G-N05OwT.js";function t(e,s,r="tap",n=0){return{beat:e,noteIdx:s,type:r,holdBeats:n}}const T=[{id:"estrellita",titleKey:"beatdrop.demo.estrellita",title:"Estrellita ¿Dónde Estás?",key:"C",mode:"major",bpm:110,tags:["infantil","clásica"],lyrics:[{text:"♪ Estrellita, ¿dónde estás?",startBeat:2},{text:"♪ Me pregunto qué serás",startBeat:10},{text:"♪ En el cielo y en el mar",startBeat:18},{text:"♪ Un diamante de verdad",startBeat:26},{text:"♪ Estrellita, ¿dónde estás?",startBeat:34},{text:"♪ Me pregunto qué serás",startBeat:42}],lyricsEn:[{text:"♪ Twinkle, twinkle, little star",startBeat:2},{text:"♪ How I wonder what you are",startBeat:10},{text:"♪ Up above the world so high",startBeat:18},{text:"♪ Like a diamond in the sky",startBeat:26},{text:"♪ Twinkle, twinkle, little star",startBeat:34},{text:"♪ How I wonder what you are",startBeat:42}],pattern:[t(2,0),t(3,0),t(4,4),t(5,4),t(6,5),t(7,5),t(8,4,"hold",1),t(10,3),t(11,3),t(12,2),t(13,2),t(14,1),t(15,1),t(16,0,"hold",1),t(18,4),t(19,4),t(20,3),t(21,3),t(22,2),t(23,2),t(24,1,"hold",1),t(26,4),t(27,4),t(28,3),t(29,3),t(30,2),t(31,2),t(32,1,"hold",1),t(34,0),t(35,0),t(36,4),t(37,4),t(38,5),t(39,5),t(40,4,"hold",1),t(42,3),t(43,3),t(44,2),t(45,2),t(46,1),t(47,1),t(48,0,"hold",1)]},{id:"martinillo",titleKey:"beatdrop.demo.martinillo",title:"Martinillo (Frère Jacques)",key:"C",mode:"major",bpm:138,tags:["infantil","canon","francesa"],lyrics:[{text:"♪ Martinillo, Martinillo",startBeat:2},{text:"♪ ¿Dónde estás? ¿Dónde estás?",startBeat:10},{text:"♪ Toca la campana, toca la campana",startBeat:18},{text:"♪ Din don dan, din don dan",startBeat:26}],lyricsEn:[{text:"♪ Are you sleeping, are you sleeping?",startBeat:2},{text:"♪ Brother John, Brother John",startBeat:10},{text:"♪ Morning bells are ringing, morning bells are ringing",startBeat:18},{text:"♪ Ding dang dong, ding dang dong",startBeat:26}],pattern:[t(2,0),t(3,1),t(4,2),t(5,0),t(6,0),t(7,1),t(8,2),t(9,0),t(10,2),t(11,3),t(12,4,"hold",2),t(14,2),t(15,3),t(16,4,"hold",2),t(18,4),t(18.5,5),t(19,4),t(19.5,3),t(20,2),t(21,0),t(22,4),t(22.5,5),t(23,4),t(23.5,3),t(24,2),t(25,0),t(26,0),t(27,4),t(28,0,"hold",2),t(30,0),t(31,4),t(32,0,"hold",2)]}];function j(e){const s=S(e.key,e.mode);if(!s)throw new Error(`Scale not found: ${e.key} ${e.mode}`);const r=60/e.bpm,n=e.pattern.map(a=>{const p=s.notes[a.noteIdx],l={time:a.beat*r,lane:C(a.noteIdx),noteIdx:a.noteIdx,freq:p.freq,name:p.fullName,type:a.type};return a.type==="hold"&&(l.duration=a.holdBeats*r),l});n.sort((a,p)=>a.time-p.time||a.lane-p.lane);const i=h()==="en"&&e.lyricsEn?e.lyricsEn:e.lyrics,c=i?i.map(a=>({text:a.text,startTime:a.startBeat*r})):null;return{id:e.id,version:"1.0",title:e.title,titleKey:e.titleKey,author:"Beatrix",key:e.key,mode:e.mode,bpm:e.bpm,notes:n,lyrics:c,metadata:{createdAt:"2026-01-01T00:00:00Z",updatedAt:"2026-01-01T00:00:00Z",tags:e.tags,isDemo:!0}}}function D(){return T.map(j)}let f=[];function N(e){f.forEach(n=>n()),f=[];const s=D(),r=$();e.innerHTML=`
    <main class="relative h-dvh overflow-y-auto safe-area-top" style="background: var(--bg, #0e0e12);">
      <!-- Background -->
      <div class="fixed inset-0 pointer-events-none -z-10">
        <div class="absolute inset-0 neon-grid"></div>
        <div class="absolute top-[10%] -right-20 w-[300px] h-[300px] rounded-full blur-[120px]" style="background: rgba(244, 63, 94, 0.07)"></div>
        <div class="absolute bottom-[15%] -left-20 w-[280px] h-[280px] rounded-full blur-[120px]" style="background: rgba(167, 139, 250, 0.06)"></div>
      </div>

      <div class="relative z-10 pt-20 pb-8 px-6 safe-area-top">
        <!-- Header -->
        <button id="hub-back" class="back-btn mb-4">
          <span class="material-symbols-rounded text-xl">arrow_back</span>
        </button>

        <!-- Title -->
        <div class="mb-10">
          <h1 class="font-headline text-3xl font-bold tracking-tight text-on-surface uppercase mb-2" data-i18n="mode.beatdrop">${o("mode.beatdrop")}</h1>
          <div class="h-[3px] w-12 rounded-full shadow-[0_0_12px_rgba(244,63,94,0.6)]" style="background: #f43f5e"></div>
        </div>

        <!-- Create New Song Card -->
        <button id="hub-create" class="w-full glass-card rounded-2xl p-5 mb-8 relative overflow-hidden active:scale-[0.97] transition-all group">
          <div class="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" style="background: #f43f5e"></div>
          <div class="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl flex items-center justify-center opacity-20 group-active:opacity-30 transition-opacity" style="background: rgba(244, 63, 94, 0.2)">
            <span class="material-symbols-rounded text-3xl" style="color: #f43f5e">add</span>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background: rgba(244, 63, 94, 0.12)">
              <span class="material-symbols-rounded text-2xl" style="color: #f43f5e">piano</span>
            </div>
            <div class="text-left">
              <span class="font-headline text-lg font-bold text-on-surface block" data-i18n="beatdrop.createNew">${o("beatdrop.createNew")}</span>
              <span class="font-body text-sm text-on-surface-variant" data-i18n="beatdrop.createDesc">${o("beatdrop.createDesc")}</span>
            </div>
          </div>
        </button>

        <!-- Featured Songs -->
        <div class="mb-8">
          <div class="flex items-center gap-2 mb-4">
            <span class="material-symbols-rounded text-base" style="color: #f43f5e">star</span>
            <h2 class="font-label text-xs font-bold tracking-widest uppercase text-on-surface-variant" data-i18n="beatdrop.featured">${o("beatdrop.featured")}</h2>
          </div>
          <div class="grid grid-cols-1 gap-4">
            ${s.map((n,d)=>v(n,!0,d)).join("")}
          </div>
        </div>

        <!-- User Songs -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <span class="material-symbols-rounded text-base" style="color: #a78bfa">library_music</span>
            <h2 class="font-label text-xs font-bold tracking-widest uppercase text-on-surface-variant" data-i18n="beatdrop.yourSongs">${o("beatdrop.yourSongs")}</h2>
          </div>
          ${r.length===0?`<div class="glass-card rounded-2xl p-8 text-center">
                <span class="material-symbols-rounded text-3xl mb-3 block" style="color: rgba(172, 170, 176, 0.4)">music_off</span>
                <p class="font-body text-sm text-on-surface-variant" data-i18n="beatdrop.noCompositions">${o("beatdrop.noCompositions")}</p>
              </div>`:`<div class="grid grid-cols-1 gap-4">
                ${r.map((n,d)=>v(n,!1,d)).join("")}
              </div>`}
        </div>
      </div>
    </main>
  `,I(e,s,r)}function P(){f.forEach(e=>e()),f=[]}function v(e,s,r){var l,u,b;const n=((l=e.notes)==null?void 0:l.length)||0,d=s?null:B(e.id),i=s?"#f43f5e":"#a78bfa",c=((u=e.notes)==null?void 0:u.length)>0?Math.ceil(e.notes[e.notes.length-1].time):0;c>0&&`${Math.floor(c/60)}${String(c%60).padStart(2,"0")}`;const a=((b=e.notes)==null?void 0:b.filter(y=>y.type==="hold").length)||0,p={S:"#ffd700",A:"#3adffa",B:"#a88cfb",C:"#acaab0"};return`
    <div class="glass-card rounded-2xl p-4 relative overflow-hidden active:scale-[0.98] hover:bg-white/[0.04] transition-all cursor-pointer song-card"
         data-id="${e.id}" data-demo="${s}"
         style="animation: screenFadeIn 300ms cubic-bezier(0, 0, 0, 1) ${r*60}ms both;">
      <div class="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" style="background: ${i}"></div>

      <div class="flex items-center gap-3">
        <!-- Icon -->
        <div class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style="background: ${i}15">
          <span class="material-symbols-rounded text-xl" style="color: ${i}">${s?"music_note":"edit_note"}</span>
        </div>

        <!-- Info -->
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 mb-0.5">
            <span class="font-headline text-sm font-bold text-on-surface truncate">${e.title}</span>
            ${s?`<span class="font-label text-[8px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded-full flex-shrink-0" style="background: ${i}15; color: ${i}">${o("beatdrop.demo")}</span>`:""}
            ${d?`<span class="font-headline text-sm font-bold flex-shrink-0" style="color: ${p[d]||"#acaab0"}">${d}</span>`:""}
          </div>
          <div class="flex items-center gap-3">
            <span class="font-label text-[10px] font-bold tracking-wider text-on-surface-variant">${e.key} ${e.mode==="major"?o("beatdrop.major"):o("beatdrop.minor")}</span>
            <span class="font-label text-[10px] font-bold tracking-wider text-on-surface-variant">${e.bpm} ${o("beatdrop.bpmLabel")}</span>
            <span class="font-label text-[10px] font-bold tracking-wider text-on-surface-variant">${o("beatdrop.notesCount",{count:n})}</span>
            ${a>0?`<span class="font-label text-[10px] font-bold tracking-wider" style="color: ${i}">${o("beatdrop.holdsCount",{count:a})}</span>`:""}
          </div>
        </div>

        <!-- Play arrow -->
        <span class="material-symbols-rounded text-xl flex-shrink-0" style="color: rgba(172, 170, 176, 0.4)">chevron_right</span>
      </div>
    </div>
  `}function I(e,s,r){var d,i;(d=e.querySelector("#hub-back"))==null||d.addEventListener("click",()=>{x(),g(m.modes)});const n=k(e,()=>{x(),g(m.modes)});f.push(n),(i=e.querySelector("#hub-create"))==null||i.addEventListener("click",()=>{x(),g(m.beatdropCreate)}),e.querySelectorAll(".song-card").forEach(c=>{c.addEventListener("click",()=>{var u;x();const a=c.dataset.id,l=c.dataset.demo==="true"?s.find(b=>b.id===a):r.find(b=>b.id===a);l&&w({title:l.title,noteCount:((u=l.notes)==null?void 0:u.length)||0,key:`${l.key} ${l.mode==="major"?o("beatdrop.major"):o("beatdrop.minor")}`,bpm:l.bpm,onSelect:b=>{E(JSON.stringify(l)),g(m.beatdropPlay(b))}})})})}export{N as mount,P as unmount};
