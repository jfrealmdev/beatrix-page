import{t as g,ar as G,as as B,at as j,au as Z,av as Y,aw as W,ax as V,ay as J,az as K,aA as Q,aB as X,aC as ee,aD as te,aE as se,aF as ae,aG as ie,aH as ne,aI as re,aJ as oe,aK as le,aL as ce,aM as fe,aN as de,aO as he,aP as pe,aQ as ue,aR as me,aS as ge,aT as xe,aU as be,aV as ve,aW as Se,aX as ye,aY as Te,s as _e,a0 as Ee,ae as A,aZ as Ae,al as Re,a_ as Pe,ak as Me,a8 as $,a$ as ke,b0 as O,b1 as L,b2 as we,b3 as He,ah as $e,aj as Oe,b4 as Ce,ai as De}from"./index-C5Zkdn_X.js";import{f as Ie,g as ze,R as C}from"./async-8w9FqmPB.js";import{g as Ue}from"./beatdrop-audio-BaSbijxX.js";function D(t){const e=Ue();return`
    <div id="trigger-container-${t}" class="absolute left-0 right-0 bottom-0 z-30 flex flex-col">
      <div class="grid grid-cols-4 gap-[3px] px-[3px] flex-1" style="padding-top: 4px;">
        ${Ie(e)}
      </div>
    </div>
  `}function I(t){return`
    <div id="${t}"
         class="absolute left-1/2 pointer-events-none flex items-center gap-2 px-4 py-2 z-40"
         style="
           top: 32%;
           transform: translate(-50%, -50%) scale(0.85);
           opacity: 0;
           transition: opacity 320ms ease-out, transform 420ms cubic-bezier(0.34, 1.56, 0.64, 1);
           background: linear-gradient(180deg, rgba(15,15,18,0.78) 0%, rgba(15,15,18,0.55) 100%);
           backdrop-filter: blur(8px);
           -webkit-backdrop-filter: blur(8px);
           border: 1px solid rgba(245,158,11,0.10);
           border-radius: 999px;
           box-shadow:
             0 0 0 1px rgba(245,158,11,0.08),
             0 0 24px rgba(245,158,11,0.45),
             0 8px 28px rgba(0,0,0,0.5),
             inset 0 1px 0 rgba(255,255,255,0.08);
           will-change: opacity, transform;">
      <span data-effect-icon
            class="material-symbols-rounded"
            style="font-size: 22px; color: #f59e0b; text-shadow: 0 0 10px rgba(245,158,11,0.7);">bolt</span>
      <span data-effect-label
            class="font-headline font-black uppercase tracking-[0.14em]"
            style="font-size: 18px; color: #ffffff; text-shadow: 0 0 8px rgba(245,158,11,0.55), 0 0 16px rgba(245,158,11,0.25), 0 1px 0 rgba(0,0,0,0.5);"></span>
    </div>
  `}function Fe(){return`
    <div id="chaos-roulette"
         class="relative font-game text-[13px] font-bold uppercase tracking-[0.18em] flex items-center justify-center overflow-hidden"
         style="
           width: 138px;
           height: 30px;
           color: #f59e0b;
           background: linear-gradient(180deg, rgba(245,158,11,0.18) 0%, rgba(245,158,11,0.06) 100%);
           border: 1px solid rgba(245,158,11,0.10);
           border-radius: 8px;
           box-shadow: 0 0 0 1px rgba(245,158,11,0.04), inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -8px 12px rgba(245,158,11,0.04), 0 0 14px rgba(245,158,11,0.18);
           transition: transform 180ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 180ms ease-out, background 180ms ease-out;">
      <div aria-hidden="true"
           style="position: absolute; inset: 0; background: repeating-linear-gradient(180deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 2px, rgba(0,0,0,0.18) 2px, rgba(0,0,0,0.18) 3px); pointer-events: none; opacity: 0.5; mix-blend-mode: multiply;"></div>
      <div aria-hidden="true"
           style="position: absolute; left: 8px; right: 8px; top: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent); pointer-events: none;"></div>
      <span data-roulette-label
            class="relative z-10"
            style="text-shadow: 0 0 8px rgba(245,158,11,0.55), 0 0 16px rgba(245,158,11,0.3); will-change: transform, opacity;">${g("chaos.hud.idle")}</span>
    </div>
  `}function z(t){return`
    <div id="chaos-results-${t}"
         class="absolute inset-0 z-50 hidden flex-col items-center justify-center bg-surface/95 p-6 gap-4"
         data-modal>
      <h2 id="chaos-result-verdict-${t}"
          class="font-headline text-5xl font-black uppercase tracking-tight"
          style="color: #f59e0b; text-shadow: 0 0 18px rgba(245,158,11,0.45);"></h2>

      <div class="flex flex-col items-center gap-2">
        <div class="font-label text-[10px] tracking-widest uppercase text-on-surface-dim"
             data-i18n="chaos.results.completion">${g("chaos.results.completion")}</div>
        <div class="flex items-end gap-6">
          <div class="flex flex-col items-center">
            <div class="font-label text-[9px] tracking-widest uppercase text-on-surface-dim mb-0.5"
                 data-i18n="chaos.results.you">${g("chaos.results.you")}</div>
            <div id="chaos-result-pct-${t}"
                 class="font-game text-4xl font-bold"
                 style="color: #f59e0b; text-shadow: 0 0 14px rgba(245,158,11,0.4);">0%</div>
          </div>
          <div class="font-game text-2xl font-bold text-on-surface-dim pb-1">vs</div>
          <div class="flex flex-col items-center">
            <div class="font-label text-[9px] tracking-widest uppercase text-on-surface-dim mb-0.5"
                 data-i18n="chaos.results.rival">${g("chaos.results.rival")}</div>
            <div id="chaos-result-rival-pct-${t}"
                 class="font-game text-4xl font-bold text-on-surface-variant">0%</div>
          </div>
        </div>
      </div>

      <ul class="font-game text-xs text-on-surface-variant text-center space-y-1">
        <li><span data-i18n="chaos.results.perfects">${g("chaos.results.perfects")}</span>:
            <span id="chaos-result-perfects-${t}" class="text-on-surface">0</span></li>
        <li><span data-i18n="chaos.results.greats">${g("chaos.results.greats")}</span>:
            <span id="chaos-result-greats-${t}" class="text-on-surface">0</span></li>
        <li><span data-i18n="chaos.results.goods">${g("chaos.results.goods")}</span>:
            <span id="chaos-result-goods-${t}" class="text-on-surface">0</span></li>
        <li><span data-i18n="chaos.results.misses">${g("chaos.results.misses")}</span>:
            <span id="chaos-result-misses-${t}" class="text-on-surface">0</span></li>
      </ul>

      <div id="chaos-results-actions-${t}"
           class="flex gap-2 w-full max-w-[300px] mt-2 opacity-0 pointer-events-none"
           style="transition: opacity 280ms ease-out;">
        <button id="chaos-share-${t}"
                class="p-3 rounded-[14px] font-headline text-sm font-bold uppercase text-on-surface transition-all hover:bg-white/[0.08] active:scale-95"
                style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08)"
                title="${g("chaos.results.share")}">
          <span class="material-symbols-rounded text-lg">share</span>
        </button>
        <button id="chaos-rematch-${t}"
                class="flex-1 py-3 rounded-[14px] font-headline text-sm font-bold tracking-wider uppercase text-surface transition-all hover:scale-[1.02] active:scale-95"
                style="background: #f59e0b"
                data-i18n="chaos.results.rematch">${g("chaos.results.rematch")}</button>
        <button id="chaos-exit-${t}"
                class="flex-1 py-3 rounded-[14px] font-headline text-sm font-bold tracking-wider uppercase text-on-surface transition-all hover:bg-white/[0.08] active:scale-95"
                style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08)"
                data-i18n="chaos.results.exit">${g("chaos.results.exit")}</button>
      </div>

      <!-- Dedicated full-width slot for the post-match add-friend prompt
           (chaos-online-results.js mounts add-friend-prompt.js here). Sits
           BELOW the actions row so the card never gets squeezed into the
           SHARE/REMATCH/EXIT flex row at mobile width. -->
      <div id="chaos-results-friend-slot-${t}" class="w-full max-w-[300px]"></div>
    </div>
  `}function Qe(){return`
    <div class="fixed inset-0 bg-surface z-40">
    <div id="chaos-screen" class="relative mx-auto h-full w-full overflow-hidden max-w-[480px] flex flex-col select-none touch-none">
      <!-- Player 1 — top half, rotated 180° -->
      <div id="chaos-player-1" class="relative flex-1 overflow-hidden" style="transform: rotate(180deg);">
        <canvas id="chaos-canvas-1" class="chaos-canvas absolute inset-0 w-full h-full"></canvas>
        <div id="chaos-frost-1" class="chaos-frost-overlay" aria-hidden="true"></div>
        <div id="chaos-gift-arrow-1" class="chaos-gift-arrow" aria-hidden="true">→</div>
        ${D("p1")}
        ${I("chaos-effect-1")}
        <button id="chaos-pause-p1" class="back-btn absolute top-2 right-2 z-40" aria-label="${g("chaos.hud.pause")}">
          <span class="material-symbols-rounded text-xl">pause</span>
        </button>
        <div class="absolute bottom-2 left-2 font-game text-[11px] text-on-surface-dim z-40">
          P1 · <span id="chaos-pct-1">0%</span>
        </div>
        ${z("p1")}
      </div>

      <!-- Center HUD strip with roulette + timer.
           Grid (1fr | auto | 1fr) so the roulette badge stays geometrically
           centered regardless of timer text width changes (60 → 9, EN/ES). -->
      <div id="chaos-center" class="relative h-16 grid grid-cols-[1fr_auto_1fr] items-center px-4"
           style="background: linear-gradient(180deg, rgba(245,158,11,0.12), rgba(245,158,11,0.04)); border-top: 1px solid rgba(245,158,11,0.10); border-bottom: 1px solid rgba(245,158,11,0.10)">
        <div class="font-game text-xs text-on-surface-dim justify-self-start">
          <span data-i18n="chaos.hud.time">${g("chaos.hud.time")}</span>
          <span id="chaos-timer" class="text-on-surface ml-1">90</span>
        </div>
        <div class="justify-self-center">${Fe()}</div>
        <div class="justify-self-end"></div>
      </div>

      <!-- Player 2 — bottom half -->
      <div id="chaos-player-2" class="relative flex-1 overflow-hidden">
        <canvas id="chaos-canvas-2" class="chaos-canvas absolute inset-0 w-full h-full"></canvas>
        <div id="chaos-frost-2" class="chaos-frost-overlay" aria-hidden="true"></div>
        <div id="chaos-gift-arrow-2" class="chaos-gift-arrow" aria-hidden="true">→</div>
        ${D("p2")}
        ${I("chaos-effect-2")}
        <button id="chaos-pause-p2" class="back-btn absolute top-2 right-2 z-40" aria-label="${g("chaos.hud.pause")}">
          <span class="material-symbols-rounded text-xl">pause</span>
        </button>
        <div class="absolute bottom-2 left-2 font-game text-[11px] text-on-surface-dim z-40">
          P2 · <span id="chaos-pct-2">0%</span>
        </div>
        ${z("p2")}
      </div>

      <!-- Countdown overlay -->
      <div id="chaos-countdown" class="absolute inset-0 z-50 flex items-center justify-center bg-surface/95" data-modal>
        <span id="chaos-countdown-text" class="font-headline font-black text-primary" style="font-size: 120px">3</span>
      </div>

    </div>
    </div>
  `}const R={freeze:be,turbo:xe,giant:ge,tiny:me,mirror:ue,blind:pe,reverse:he,earthquake:de,ghost:fe,gift:ce,shuffle:le,speed_ramp:oe,double_score:re,shield:ne,magnet:ie},P={freeze:ae,turbo:se,giant:te,tiny:ee,mirror:X,blind:Q,reverse:K,earthquake:J,ghost:V,gift:W,shuffle:Y,speed_ramp:Z,double_score:j,shield:B,magnet:G};function Ne(t){const e=_e([0,1,2,3],t);return e.every((s,i)=>s===i)?[1,0,3,2]:e}function q(t){const e=t==null?void 0:t.notes;if(Array.isArray(e))for(const s of e)s&&s.alive&&typeof s.speed=="number"&&(s.speed*=-1)}const Le=["freeze","turbo","giant","tiny","double_score"],qe=[...Le,"mirror","blind","reverse","earthquake","shuffle","speed_ramp"],Xe=[...qe,"ghost","gift","shield","magnet"];function Ge(t,e,s={}){var a,o,r,l,h,c,u;if(!t||!t.effectsState)return;(a=R[e])==null||a.call(R),ze(e);const i=t.effectsState;switch(e){case"freeze":i.freeze=!0;return;case"turbo":t.setSpeedMultiplier(Te);return;case"giant":i.radiusMult=ye;return;case"tiny":i.radiusMult=Se;return;case"mirror":i.mirror=!0;return;case"blind":i.blind=!0;return;case"earthquake":i.earthquake=!0;return;case"reverse":i.reverse=!0,(r=(o=t.spawner)==null?void 0:o.setReverse)==null||r.call(o,!0),q(t);return;case"ghost":i.ghostReal=!0;return;case"gift":i.gift=!0;return;case"shuffle":{const f=s.seed??`shuffle-${t.elapsedTime??Date.now()}`,v=Ne(f);i.shuffleMap=v,(h=(l=t.spawner)==null?void 0:l.setLaneMap)==null||h.call(l,v);return}case"speed_ramp":i.speedRampActive=!0,i.speedRampStart=t.elapsedTime??0,i.speedRampDone=!1;return;case"double_score":i.doubleScore=!0,(u=(c=t.scoring)==null?void 0:c.setScoreMultiplier)==null||u.call(c,ve);return;case"shield":i.shield=!0;return;case"magnet":i.magnet=!0;return;default:return}}function E(t,e){var i,a,o,r,l,h,c;if(!t||!t.effectsState)return;(i=P[e])==null||i.call(P);const s=t.effectsState;switch(e){case"freeze":{if(s.freeze=!1,Array.isArray(t.notes)&&t.canvas){const u=t.canvas.height*(t.hitZoneRatio??.75);for(const f of t.notes){if(!f.alive||f.hit)continue;(f.spawnedAbove===!1?f.y<u:f.y>u)&&(f.alive=!1,f.hit=!0)}}return}case"turbo":t.setSpeedMultiplier(1);return;case"giant":case"tiny":s.radiusMult=1;return;case"mirror":s.mirror=!1;return;case"blind":s.blind=!1;return;case"earthquake":s.earthquake=!1;return;case"reverse":s.reverse=!1,(o=(a=t.spawner)==null?void 0:a.setReverse)==null||o.call(a,!1),q(t);return;case"ghost":s.ghostReal=!1;return;case"gift":s.gift=!1,s.giftTarget=null;return;case"shuffle":s.shuffleMap=null,(l=(r=t.spawner)==null?void 0:r.setLaneMap)==null||l.call(r,null);return;case"speed_ramp":s.speedRampActive=!1,s.speedRampStart=0,s.speedRampDone=!1,t.setSpeedMultiplier(1);return;case"double_score":s.doubleScore=!1,(c=(h=t.scoring)==null?void 0:h.setScoreMultiplier)==null||c.call(h,1);return;case"shield":s.shield=!1;return;case"magnet":s.magnet=!1;return;default:return}}function U(){return{freeze:!1,mirror:!1,radiusMult:1,blind:!1,earthquake:!1,reverse:!1,ghostReal:!1,gift:!1,giftTarget:null,shuffleMap:null,speedRampActive:!1,speedRampStart:0,speedRampDone:!1,doubleScore:!1,shield:!1,magnet:!1}}const Be=500;function b(...t){}function je(...t){}class et{constructor({canvas1:e,canvas2:s,figure:i,seed:a,schedule:o,transport:r,role:l="p1",onTick:h,onEnd:c,onSpinStart:u,soloMode:f=!1,onRivalEffect:v,safetyTimeoutMs:T=0}){var x,_;this.canvas1=e,this.canvas2=s,this.figure=i,this.seed=a,this.transport=r||null,this.role=l,this.soloMode=!!f,this.onTick=h||(()=>{}),this.onEnd=c||(()=>{}),this.onSpinStart=u||(()=>{}),this.onRivalEffect=v||(()=>{}),this.pendingApplyTimeouts=[],this.schedule=o||[],this.scheduleIdx=0,this._lastProgressReport=0,this._peerPct=0,this._peerProgressUnsub=((_=(x=this.transport)==null?void 0:x.on)==null?void 0:_.call(x,"peer_progress",d=>{this._peerPct=(d==null?void 0:d.pct)??0}))||null,this.effectsState1=U(),this.effectsState2=this.soloMode?null:U(),this.activeP1=null,this.activeP2=null,this.result1=null,this.result2=null;const m=Ee("medium",i.totalPixels||100);m.roundDuration=A,m.pixelsPerHit=Math.max(1,Math.round(m.pixelsPerHit/Ae));const S=d=>n=>{var M,k,w,H;if(this[d]=n,(this.soloMode||d==="result1"&&this.role==="p1"||d==="result2"&&this.role==="p2")&&this.transport&&(b("[chaos] result relayed to transport — role:",this.role,"pct:",(n==null?void 0:n.completion)??0,"score:",(n==null?void 0:n.score)??0),(k=(M=this.transport).sendResult)==null||k.call(M,{pct:(n==null?void 0:n.completion)??0,score:(n==null?void 0:n.score)??0,perfects:(n==null?void 0:n.perfectCount)??0,greats:(n==null?void 0:n.greatCount)??0,goods:(n==null?void 0:n.goodCount)??0,misses:(n==null?void 0:n.missCount)??0,completed:((n==null?void 0:n.completion)??0)>=100})),this._clearActiveEffectsForSlot(d==="result1"?"p1":"p2"),this.soloMode){this.ended||(this.ended=!0,b("[chaos] solo round ended — pct:",(n==null?void 0:n.completion)??0,"score:",(n==null?void 0:n.score)??0,"perfects:",(n==null?void 0:n.perfectCount)??0,"misses:",(n==null?void 0:n.missCount)??0),this.onEnd(this.result1,null));return}this.result1&&this.result2&&!this.ended&&(this.ended=!0,b("[chaos] dual round ended — p1:",((w=this.result1)==null?void 0:w.completion)??0,"p2:",((H=this.result2)==null?void 0:H.completion)??0),this.onEnd(this.result1,this.result2))},y=this.soloMode?{}:{hitZoneRatio:Me,pixelArtYRatio:Pe,noteRadiusMult:Re};this.engine1=new C(e,i,{onHudUpdate:()=>{},onHitFeedback:()=>{},onRoundEnd:S("result1")},m,"medium",{gameplay:{noteSource:"random",hasPixelArt:!0,completionMetric:"pixels",roundTiming:"fixed",onHit:"revealPixels",onMiss:"destroyPixel"},effectsState:this.effectsState1,rng:$(`${a}-p1`),...y}),this.engine2=this.soloMode?null:new C(s,i,{onHudUpdate:()=>{},onHitFeedback:()=>{},onRoundEnd:S("result2")},m,"medium",{gameplay:{noteSource:"random",hasPixelArt:!0,completionMetric:"pixels",roundTiming:"fixed",onHit:"revealPixels",onMiss:"destroyPixel"},effectsState:this.effectsState2,rng:$(`${a}-p2`),...y}),this.startTime=null,this.elapsed=0,this.running=!1,this.ended=!1,this.tickHandle=null,this.safetyTimeoutMs=T||0,this._safetyTimer=null,this._safetyTimerArmedAt=0,this._safetyTimerDurationMs=0,b("[chaos] orchestrator created — soloMode:",this.soloMode,"role:",this.role,"schedule:",this.schedule.length,"entries","seed:",this.seed)}start(){var e,s;b("[chaos] game started — duration:",A,"s","figure:",(e=this.figure)==null?void 0:e.id,"seed:",this.seed),this.engine1.start(),(s=this.engine2)==null||s.start(),this.running=!0,this.startTime=performance.now(),this._tick=this._tick.bind(this),this.tickHandle=requestAnimationFrame(this._tick),this.safetyTimeoutMs>0&&this._armSafetyTimer(this.safetyTimeoutMs)}pause(){var e;b("[chaos] game paused — elapsed:",Math.round(this.elapsed),"ms"),this.engine1.pause(),(e=this.engine2)==null||e.pause(),this.running=!1,this.tickHandle&&(cancelAnimationFrame(this.tickHandle),this.tickHandle=null),this._freezeSafetyTimer()}resume(){var e;this.running||this.ended||(this.engine1.resume(),(e=this.engine2)==null||e.resume(),this.running=!0,this.startTime=performance.now()-this.elapsed,this.tickHandle=requestAnimationFrame(this._tick),this._safetyTimerDurationMs>0&&this._armSafetyTimer(this._safetyTimerDurationMs))}stop(){var e,s;(e=this.engine1)==null||e.stop(),(s=this.engine2)==null||s.stop(),this.running=!1,this.tickHandle&&(cancelAnimationFrame(this.tickHandle),this.tickHandle=null),this._safetyTimer&&(clearTimeout(this._safetyTimer),this._safetyTimer=null),this._safetyTimerDurationMs=0}_armSafetyTimer(e){this._safetyTimer&&clearTimeout(this._safetyTimer),this._safetyTimerArmedAt=performance.now(),this._safetyTimerDurationMs=e,this._safetyTimer=setTimeout(()=>{var s,i,a,o;this._safetyTimer=null,!this.ended&&((i=(s=this.engine1)==null?void 0:s.forceEnd)==null||i.call(s),(o=(a=this.engine2)==null?void 0:a.forceEnd)==null||o.call(a))},e)}_clearActiveEffectsForSlot(e){if(e==="p1"&&this.activeP1){const s=this.activeP1.effect;this.engine1&&!this.activeP1.pending&&E(this.engine1,s),this.activeP1=null}if(e==="p2"&&this.activeP2){const s=this.activeP2.effect;this.engine2&&!this.activeP2.pending&&E(this.engine2,s),this.activeP2=null}}_freezeSafetyTimer(){if(!this._safetyTimer)return;const e=performance.now()-this._safetyTimerArmedAt,s=Math.max(0,this._safetyTimerDurationMs-e);clearTimeout(this._safetyTimer),this._safetyTimer=null,this._safetyTimerDurationMs=s}destroy(){this.stop();for(const e of this.pendingApplyTimeouts)clearTimeout(e);if(this.pendingApplyTimeouts.length=0,this.effectsState1&&(this.effectsState1.giftTarget=null),this.effectsState2&&(this.effectsState2.giftTarget=null),this._peerProgressUnsub){try{this._peerProgressUnsub()}catch{}this._peerProgressUnsub=null}this.engine1=null,this.engine2=null}handleInput(e,s){var i,a;!this.running||this.ended||(e==="p1"?(i=this.engine1)==null||i.handleInput(s):(a=this.engine2)==null||a.handleInput(s))}handleResize(){this.engine1&&this.engine1.handleResize(this.canvas1),this.engine2&&this.engine2.handleResize(this.canvas2)}_tick(e){var o,r,l,h,c,u,f,v,T,m,S,y,x,_;if(!this.running)return;for(this.elapsed=e-this.startTime;this.scheduleIdx<this.schedule.length&&this.schedule[this.scheduleIdx].time<=this.elapsed;){const d=this.schedule[this.scheduleIdx++];this._tryApply(d)}this._driveSpeedRamp(this.engine1),this.engine2&&this._driveSpeedRamp(this.engine2),this.activeP1&&e>=this.activeP1.expiresAt&&(b("[chaos] effect cleared — target: p1, effect:",this.activeP1.effect),E(this.engine1,this.activeP1.effect),this.activeP1=null),this.activeP2&&e>=this.activeP2.expiresAt&&(b("[chaos] effect cleared — target: p2, effect:",this.activeP2.effect),this.engine2&&E(this.engine2,this.activeP2.effect),this.activeP2=null);const s=((r=(o=this.engine1)==null?void 0:o.pixelRenderer)==null?void 0:r.getCompletionPercent())||0,i=((h=(l=this.engine2)==null?void 0:l.pixelRenderer)==null?void 0:h.getCompletionPercent())||0,a=Math.max(0,A-this.elapsed/1e3);if(this.transport&&e-this._lastProgressReport>Be){this._lastProgressReport=e;const d=this.soloMode?this.engine1:this.role==="p1"?this.engine1:this.engine2,n=this.soloMode||this.role==="p1"?s:i;(m=(T=this.transport).sendProgress)==null||m.call(T,n,((u=(c=d==null?void 0:d.scoring)==null?void 0:c.getFinalScore)==null?void 0:u.call(c))??0,{perfects:((f=d==null?void 0:d.scoring)==null?void 0:f.perfectCount)??0,misses:((v=d==null?void 0:d.scoring)==null?void 0:v.missCount)??0})}if(this.onTick({timeRemaining:a,pct1:s,pct2:i,activeP1:this.activeP1&&!this.activeP1.pending?this.activeP1.effect:null,activeP2:this.activeP2&&!this.activeP2.pending?this.activeP2.effect:null}),!this.ended&&(s>=100||i>=100)){(y=(S=this.engine1)==null?void 0:S.forceEnd)==null||y.call(S),(_=(x=this.engine2)==null?void 0:x.forceEnd)==null||_.call(x);return}this.tickHandle!=null&&(this.tickHandle=requestAnimationFrame(this._tick))}_driveSpeedRamp(e){const s=e==null?void 0:e.effectsState;if(!(s!=null&&s.speedRampActive)||s.speedRampDone)return;const i=(e.elapsedTime??0)-s.speedRampStart,a=Math.min(Math.max(i/we,0),1);e.setSpeedMultiplier(1+a*(ke-1)),a>=1&&(s.speedRampDone=!0)}_tryApply(e){if(b("[chaos] effect apply attempt — target:",e.target,"effect:",e.effect),this.soloMode&&e.target!==this.role){this.onSpinStart(e.target,e.effect),this.onRivalEffect(e.effect);return}const s=this.soloMode||e.target==="p1"?"activeP1":"activeP2";if(this[s]){je("[chaos] effect dropped — reason: active_effect_busy, target:",e.target,"effect:",e.effect);return}this[s]={effect:e.effect,expiresAt:1/0,pending:!0},b("[chaos] effect spin started — target:",e.target,"effect:",e.effect),this.onSpinStart(e.target,e.effect);const i=setTimeout(()=>{const a=this.pendingApplyTimeouts.indexOf(i);if(a!==-1&&this.pendingApplyTimeouts.splice(a,1),!this.engine1)return;const o=this.soloMode?this.engine1:e.target==="p1"?this.engine1:this.engine2;if(e.effect==="gift"&&!this.soloMode){const r=e.target==="p1"?this.effectsState1:this.effectsState2,l=e.target==="p1"?this.engine2:this.engine1;r.giftTarget=l.pixelRenderer}b("[chaos] effect applied — target:",e.target,"effect:",e.effect,"duration:",O,"ms"),Ge(o,e.effect,{seed:`${this.seed}-${e.time}`}),this[s]={effect:e.effect,expiresAt:performance.now()+O}},L);this.pendingApplyTimeouts.push(i)}}function tt(t,e){const s=(t==null?void 0:t.completion)??0,i=(e==null?void 0:e.completion)??0;if(s>=100&&i>=100)return"tie";if(s>=100)return"p1";if(i>=100)return"p2";if(s!==i)return s>i?"p1":"p2";const a=(t==null?void 0:t.perfectCount)??0,o=(e==null?void 0:e.perfectCount)??0;if(a!==o)return a>o?"p1":"p2";if(s===0&&i===0&&a===0&&o===0)return"tie";const r=(t==null?void 0:t.missCount)??0,l=(e==null?void 0:e.missCount)??0;return r!==l?r<l?"p1":"p2":"tie"}const p=1080,Ze=p*.25,Ye=p*.75;function st({p1:t,p2:e,winner:s}){const i=document.createElement("canvas");i.width=p,i.height=p;const a=i.getContext("2d");if(!a)return i;a.fillStyle="#0e0e12",a.fillRect(0,0,p,p),a.strokeStyle="rgba(255,255,255,0.03)",a.lineWidth=1,a.beginPath();for(let r=0;r<p;r+=40)a.moveTo(r,0),a.lineTo(r,p),a.moveTo(0,r),a.lineTo(p,r);a.stroke(),a.textAlign="center",a.font='900 52px "Orbitron", sans-serif',a.fillStyle="#f59e0b",a.fillText("CHAOS ROULETTE",p/2,100),a.strokeStyle="rgba(245,158,11,0.3)",a.lineWidth=2,a.beginPath(),a.moveTo(p/2,180),a.lineTo(p/2,p-200),a.stroke(),a.font='900 36px "Orbitron", sans-serif',a.fillStyle="#f59e0b",a.fillText("VS",p/2,p/2+12),F(a,t,Ze,s==="p1",s==="p2"),F(a,e,Ye,s==="p2",s==="p1");const o=p-120;if(s==="tie")a.font='bold 32px "Space Grotesk", sans-serif',a.fillStyle="#a88cfb",a.textAlign="center",a.fillText("IT'S A TIE",p/2,o);else{const l=(s==="p1"?t:e).name||"WINNER";a.font='bold 28px "Space Grotesk", sans-serif',a.fillStyle="#ffd700",a.textAlign="center",a.fillText(`🏆 ${l} WINS!`,p/2,o)}return a.font='bold 16px "Space Grotesk", sans-serif',a.fillStyle="#76757a",a.textAlign="left",a.fillText("BEATRIX",50,p-45),i}function F(t,e,s,i,a){const o=i?"#ffd700":a?"#76757a":"#f3eff6";t.textAlign="center";const r=e.name||"PLAYER";t.font='bold 24px "Space Grotesk", sans-serif',t.fillStyle=o,t.fillText(r.toUpperCase(),s,200),i&&(t.font="32px sans-serif",t.fillText("👑",s,180));const l=Math.round(e.completion??0);t.font='900 90px "Orbitron", sans-serif',t.fillStyle=i?"#f59e0b":a?"#76757a":"#f59e0b",i&&(t.shadowColor="#f59e0b",t.shadowBlur=40),t.fillText(`${l}%`,s,330),t.shadowBlur=0;const h=[[e.perfects??0,"PERFECT"],[e.greats??0,"GREAT"],[e.goods??0,"GOOD"],[e.misses??0,"MISS"]];let c=420;for(const[u,f]of h)t.font='bold 22px "Orbitron", sans-serif',t.fillStyle=a?"#76757a":"#f3eff6",t.fillText(String(u),s,c),t.font='600 11px "Plus Jakarta Sans", sans-serif',t.fillStyle="#555",t.fillText(f,s,c+18),c+=52}function at({hostEl:t,effectPool:e,finalEffect:s,duration:i=L,onComplete:a}){if(!t||!e||e.length===0)return queueMicrotask(()=>a==null?void 0:a()),{destroy:()=>{}};let o=!1,r=0,l=0,h=null,c=0,u=null,f=null;const v=m=>1-Math.pow(1-m,3);He(t);const T=m=>{if(o)return;h==null&&(h=m);const S=m-h;h=m,r+=S;const y=Math.min(r/i,1),x=60+v(y)*300;if(r>=l){l=r+x,c++;const _=e[c%e.length];Oe(t,N(_),c)}y<1?u=requestAnimationFrame(T):(f=Ce(t,N(s)),a==null||a())};return u=requestAnimationFrame(T),{destroy:()=>{o=!0,u&&cancelAnimationFrame(u),f&&clearTimeout(f),$e(t)}}}function N(t){return De[t]||t.toUpperCase()}export{et as C,Xe as T,Fe as a,Qe as b,D as c,tt as d,I as e,z as f,st as g,at as s};
