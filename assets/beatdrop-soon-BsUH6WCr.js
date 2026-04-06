import{K as e,aJ as a,aw as s,aE as o}from"./index-fQXcWDrM.js";import"./grid-onboarding-G-N05OwT.js";function d(t){t.innerHTML=`
    <main class="relative h-dvh overflow-hidden flex flex-col safe-area-top">
      <!-- Background -->
      <div class="fixed inset-0 pointer-events-none -z-10">
        <div class="absolute inset-0 neon-grid"></div>
        <div class="absolute top-[20%] -right-20 w-[280px] h-[280px] rounded-full blur-[120px]" style="background: rgba(244, 63, 94, 0.06)"></div>
        <div class="absolute bottom-[20%] -left-20 w-[240px] h-[240px] rounded-full blur-[120px]" style="background: rgba(167, 139, 250, 0.06)"></div>
      </div>

      <!-- Back button -->
      <div class="px-6 pt-20 safe-area-top">
        <button id="btn-back" class="back-btn">
          <span class="material-symbols-rounded text-xl">arrow_back</span>
        </button>
      </div>

      <!-- Content -->
      <div class="flex-1 flex flex-col items-center justify-center px-8 relative z-10">
        <div class="w-20 h-20 rounded-2xl flex items-center justify-center mb-6" style="background: rgba(244, 63, 94, 0.12)">
          <span class="material-symbols-rounded text-4xl" style="color: #f43f5e">music_note</span>
        </div>

        <h1 class="font-headline text-3xl font-bold text-on-surface uppercase tracking-tight mb-2" data-i18n="mode.beatdrop">${e("mode.beatdrop")}</h1>
        <div class="w-12 h-[3px] rounded-full mx-auto mb-6 shadow-[0_0_12px_rgba(244,63,94,0.6)]" style="background: #f43f5e"></div>

        <div class="glass-card px-8 py-6 rounded-2xl text-center max-w-sm w-full mb-8">
          <span class="material-symbols-rounded text-5xl mb-3 block" style="color: rgba(244, 63, 94, 0.6)">construction</span>
          <p class="font-headline text-xl font-bold text-on-surface mb-2" data-i18n="beatdrop.comingSoon">${e("beatdrop.comingSoon")}</p>
          <p class="font-label text-sm text-on-surface-variant/60 leading-relaxed" data-i18n="beatdrop.description">${e("beatdrop.description")}</p>
        </div>

        <button id="btn-modes" class="lobby-chip cursor-pointer">
          <span class="material-symbols-rounded text-xl" style="color: #f43f5e">sports_esports</span>
          <span class="font-label text-[13px] font-bold text-on-surface tracking-wider uppercase" data-i18n="beatdrop.backModes">${e("beatdrop.backModes")}</span>
        </button>
      </div>
    </main>
  `,t.querySelector("#btn-back").addEventListener("click",()=>{a(),s(o.modes,{replace:!0})}),t.querySelector("#btn-modes").addEventListener("click",()=>{a(),s(o.modes,{replace:!0})})}function r(){}export{d as mount,r as unmount};
