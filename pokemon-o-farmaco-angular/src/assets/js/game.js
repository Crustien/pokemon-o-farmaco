
    // Dataset PokÃ©mon (Gen 1-9)
    const POKEMON = [
      // Gen 1
      {n:—Marowak—, gen:1}, {n:—Vaporeon—, gen:1}, {n:—Vulpix—, gen:1}, {n:—Flareon—, gen:1},
      // Gen 2
      {n:—Sentret—, gen:2}, {n:—Ursaring—, gen:2}, {n:—Umbreon—, gen:2},
      // Gen 3
      {n:—Illumise—, gen:3}, {n:—Manectric—, gen:3}, {n:—Vibrava—, gen:3}, {n:—Milotic—, gen:3}, {n:—Altaria—, gen:3}, {n:—Numel—, gen:3}, {n:—Rayquaza—, gen:3}, {n:—Absol—, gen:3}, {n:—Nincada—, gen:3}, {n:—Metang—, gen:3}, {n:—Azurill—, gen:3}, {n:—Groudon—, gen:3},
      // Gen 4
      {n:—Gliscor—, gen:4}, {n:—Roserade—, gen:4}, {n:—Glaceon—, gen:4}, {n:—Heatran—, gen:4},
      // Gen 5
      {n:—Hydreigon—, gen:5}, {n:—Reuniclus—, gen:5}, {n:—Cofagrigus—, gen:5}, {n:—Conkeldurr—, gen:5}, {n:—Chandelure—, gen:5}, {n:—Excadrill—, gen:5}, {n:—Zoroark—, gen:5}, {n:—Virizion—, gen:5}, {n:—Terrakion—, gen:5}, {n:—Cobalion—, gen:5}, {n:—Keldeo—, gen:5}, {n:—Meloetta—, gen:5}, {n:—Genesect—, gen:5},
      // Gen 6
      {n:—Greninja—, gen:6}, {n:—Aegislash—, gen:6}, {n:—Noivern—, gen:6}, {n:—Goodra—, gen:6}, {n:—Sylveon—, gen:6}, {n:—Klefki—, gen:6}, {n:—Trevenant—, gen:6}, {n:—Xerneas—, gen:6}, {n:—Yveltal—, gen:6}, {n:—Zygarde—, gen:6}, {n:—Carbink—, gen:6}, {n:—Diancie—, gen:6}, {n:—Hoopa—, gen:6}, {n:—Volcanion—, gen:6}, {n:—Aurorus—, gen:6},
      // Gen 7 (rimossi i Tapu con spazio)
      {n:—Toxapex—, gen:7}, {n:—Salazzle—, gen:7}, {n:—Mimikyu—, gen:7}, {n:—Bewear—, gen:7}, {n:—Golisopod—, gen:7}, {n:—Kommo-o—, gen:7}, {n:—Nihilego—, gen:7}, {n:—Buzzwole—, gen:7}, {n:—Pheromosa—, gen:7}, {n:—Xurkitree—, gen:7}, {n:—Kartana—, gen:7}, {n:—Celesteela—, gen:7}, {n:—Stakataka—, gen:7}, {n:—Blacephalon—, gen:7}, {n:—Poipole—, gen:7}, {n:—Naganadel—, gen:7}, {n:—Zeraora—, gen:7}, {n:—Vikavolt—, gen:7},
      // Gen 8
      {n:—Zacian—, gen:8}, {n:—Zamazenta—, gen:8}, {n:—Eternatus—, gen:8}, {n:—Toxtricity—, gen:8}, {n:—Rillaboom—, gen:8}, {n:—Cinderace—, gen:8}, {n:—Inteleon—, gen:8}, {n:—Corviknight—, gen:8}, {n:—Dragapult—, gen:8}, {n:—Duraludon—, gen:8}, {n:—Coalossal—, gen:8}, {n:—Falinks—, gen:8}, {n:—Copperajah—, gen:8}, {n:—Indeedee—, gen:8}, {n:—Hatterene—, gen:8}, {n:—Polteageist—, gen:8}, {n:—Cursola—, gen:8}, {n:—Perrserker—, gen:8}, {n:—Alcremie—, gen:8}, {n:—Urshifu—, gen:8}, {n:—Regieleki—, gen:8}, {n:—Regidrago—, gen:8}, {n:—Calyrex—, gen:8}, {n:—Spectrier—, gen:8}, {n:—Glastrier—, gen:8},
      // Gen 9 (rimossi nomi con spazio)
      {n:—Koraidon—, gen:9}, {n:—Miraidon—, gen:9}, {n:—Clodsire—, gen:9}, {n:—Gholdengo—, gen:9}, {n:—Ting-Lu—, gen:9}, {n:—Chien-Pao—, gen:9}, {n:—Chi-Yu—, gen:9}, {n:—Wo-Chien—, gen:9}, {n:—Kingambit—, gen:9}, {n:—Tinkaton—, gen:9}, {n:—Baxcalibur—, gen:9}, {n:—Palafin—, gen:9}, {n:—Orthworm—, gen:9}, {n:—Lokix—, gen:9}, {n:—Bombirdier—, gen:9}, {n:—Tatsugiri—, gen:9}, {n:—Veluza—, gen:9}, {n:—Revavroom—, gen:9}, {n:—Dachsbun—, gen:9}, {n:—Grafaiai—, gen:9}, {n:—Ceruledge—, gen:9}, {n:—Armarouge—, gen:9}, {n:—Glimmora—, gen:9}, {n:—Ogerpon—, gen:9}, {n:—Okidogi—, gen:9}, {n:—Munkidori—, gen:9}, {n:—Fezandipiti—, gen:9}, {n:—Terapagos—, gen:9}, {n:—Pecharunt—, gen:9}
    ];

    // Farmaci (nomi commerciali, deduplicati)
    const DRUGS = [
      {n:—Ozempic—}, {n:—Wegovy—}, {n:—Rybelsus—}, {n:—Mounjaro—}, {n:—Zepbound—}, {n:—Trulicity—}, {n:—Januvia—}, {n:—Jardiance—}, {n:—Farxiga—},
      {n:—Humira—}, {n:—Enbrel—}, {n:—Remicade—}, {n:—Stelara—}, {n:—Cosentyx—}, {n:—Skyrizi—}, {n:—Taltz—}, {n:—Dupixent—}, {n:—Xolair—},
      {n:—Keytruda—}, {n:—Opdivo—}, {n:—Tagrisso—}, {n:—Ibrance—}, {n:—Kisqali—}, {n:—Imbruvica—}, {n:—Darzalex—}, {n:—Xtandi—},
      {n:—Xarelto—}, {n:—Eliquis—}, {n:—Entresto—}, {n:—Xifaxan—}, {n:—Biktarvy—}, {n:—Descovy—}, {n:—Truvada—}, {n:—Genvoya—},
      {n:—Veklury—}, {n:—Paxlovid—}, {n:—Tamiflu—}, {n:—Lagevrio—},
      {n:—Aimovig—}, {n:—Ajovy—}, {n:—Emgality—}, {n:—Nurtec—}, {n:—Ubrelvy—}, {n:—Qulipta—},
      {n:—Trintellix—}, {n:—Cymbalta—}, {n:—Lyrica—}, {n:—Viibryd—}, {n:—Pristiq—},
      {n:—Olumiant—}, {n:—Otezla—}, {n:—Rinvoq—}, {n:—Xeljanz—},
      {n:—Arexvy—}, {n:—Abrysvo—},
      {n:—Opsumit—}, {n:—Uptravi—}, {n:—Adempas—}, {n:—Aranesp—}, {n:—Rozerem—}, {n:—Voltaren—}, {n:—Actos—}, {n:—Ticlid—}, {n:—Qvar—}, {n:—Crestor—}, {n:—Decadron—}, {n:—Tygacil—}, {n:—Geodon—}, {n:—Clasteon—}, {n:—Finasteride—}, {n:—Minoxidil—}, {n:—Cialis—}, {n:—Tadalafil—}, {n:—Deursil—}, {n:—Bisoprololo—},
      // Aggiunte dalla foto
      {n:—Luxiq—}, {n:—Banzel—}, {n:—Xigris—}, {n:—Carnitor—}, {n:—Aceon—}, {n:—Jalyn—}, {n:—Navane—}, {n:—Fuzeon—}, {n:—Rescriptor—}
    ];

    const els = {
      name: document.getElementById('name'),
      hint: document.getElementById('hint'),
      result: document.getElementById('result'),
      score: document.getElementById('score'),
      correct: document.getElementById('correct'),
      wrong: document.getElementById('wrong'),
      acc: document.getElementById('acc'),
      streak: document.getElementById('streak'),
      best: document.getElementById('best'),
      round: document.getElementById('roundNum'),
      timerPill: document.getElementById('timerPill'),
      timerBar: document.getElementById('timerBar'),
    };

    const drugBtn = document.getElementById('drugBtn');
    const pokeBtn = document.getElementById('pokeBtn');

    const MAX_WRONG = 3;
    const TIME_LIMIT_MS = 5000;
    let gameOver = false;
    let replayBtn = null;
    let inputLocked = false;
    let tStart = 0;
    let tInterval = null;
    let tTimeout = null;

    let deck = [];
    let idx = -1;
    const state = { correct: 0, wrong: 0, streak: 0, best: 0, round: 0, score: 0 };

    // Persistence removed: stats are session-only

    // Supabase client (leaderboard)
    const SUPABASE_URL = 'https://xljkbcmswvonowiethst.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsamtiY21zd3Zvbm93aWV0aHN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0MjY5MDcsImV4cCI6MjA3MzAwMjkwN30.bFtmJ7PDQstKciYVba4eCyqDnxicJyrX-e-vYO9QKAQ';
    const supabase = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;
    function esc(s){ return String(s).replace(/[&<>—']/g, c=>({—&—:—&amp;—,—<—:—&lt;—,—>—:—&gt;—,—\——:—&quot;—,—'—:—&#39;—}[c])); }
    async function loadLeaderboard(){
      const box = document.getElementById('leaderboard');
      if(!box || !supabase){ return; }
      box.classList.add('muted'); box.textContent = 'Caricamentoâ€¦';
      try{
        const { data, error } = await supabase
          .from('scores')
          .select('*')
          .order('score', { ascending:false })
          .order('created_at', { ascending:true })
          .limit(10);
        if(error) throw error;
        if(!data || data.length===0){ box.textContent = 'Nessun punteggio ancora. Gioca una partita!'; return; }
        box.classList.remove('muted');
        box.innerHTML = data.map((e,i)=>
          `<div style=—display:flex; gap:8px; justify-content:space-between; padding:6px 0; border-bottom:1px solid var(--line)—>
            <div style=—min-width:28px—>#${i+1}</div>
            <div style=—flex:1 1 auto; overflow-wrap:anywhere—>${esc(e.name)}</div>
            <div style=—min-width:120px; text-align:right—>âœ… ${e.correct} / âŒ ${e.wrong}</div>
            <div style=—min-width:120px; text-align:right—>${e.acc}% Â· max ${e.best}</div>
          </div>`
        ).join('');
        // Ridefinisci markup includendo la colonna Punti
        box.innerHTML = data.map((e,i)=>
          `<div style=—display:flex; gap:8px; justify-content:space-between; padding:6px 0; border-bottom:1px solid var(--line)—>
            <div style=—min-width:28px—>#${i+1}</div>
            <div style=—flex:1 1 auto; overflow-wrap:anywhere—>${esc(e.name)}</div>
            <div style=—min-width:90px; text-align:right—>â­ ${e.score||0}</div>
            <div style=—min-width:120px; text-align:right—>âœ… ${e.correct} / âŒ ${e.wrong}</div>
            <div style=—min-width:120px; text-align:right—>${e.acc}% Â· max ${e.best}</div>
          </div>`
        ).join('');
        // Layout a due righe per coerenza su mobile
        box.innerHTML = data.map((e,i)=>
          `<div class=—lb-row—>
            <div class=—lb-top—><div class=—lb-rank—>#${i+1}</div><div class=—lb-name—>${esc(e.name)}</div></div>
            <div class=—lb-bottom—><div class=—lb-score—>&#11088; ${e.score||0}</div><div class=—lb-rw—>&#9989; ${e.correct} / &#10060; ${e.wrong}</div><div class=—lb-acc—>${e.acc}% &middot; max ${e.best}</div></div>
          </div>`
        ).join('');
      }catch(err){ box.textContent = 'Errore nel caricamento classifica'; }
    }
    function showSubmit(){
      if(!supabase) return;
      let box = document.getElementById('lbSubmit');
      if(box) return;
      box = document.createElement('div');
      box.id = 'lbSubmit';
      box.style.marginTop = '12px';
      box.style.textAlign = 'center';
      const label = document.createElement('div');
      label.className = 'hint';
      label.setAttribute('aria-live','polite');
      label.textContent = 'Inserisci il tuo nome per la classifica:';
      const nameIn = document.createElement('input');
      nameIn.type = 'text'; nameIn.maxLength = 20; nameIn.placeholder = 'Nome';
      nameIn.value = '';
      nameIn.className = 'btn'; nameIn.style.minWidth = '180px'; nameIn.style.margin = '6px';
      const sendBtn = document.createElement('button');
      sendBtn.className = 'btn'; sendBtn.textContent = 'Invia alla classifica';
      sendBtn.addEventListener('click', async ()=>{
        const name = (nameIn.value||'').trim();
        if(!name){ alert('Inserisci un nome'); nameIn.focus(); return; }
        const total = state.correct + state.wrong;
        const accNow = total ? Math.round((state.correct/total)*100) : 0;
        sendBtn.disabled = true;
        try{
          const { error } = await supabase.from('scores').insert({
            name, correct: state.correct, wrong: state.wrong, best: state.best, acc: accNow, rounds: state.round, score: state.score
          });
          if(error) throw error;
          label.textContent = 'Punteggio inviato! Torna al menu per rigiocare.';
          nameIn.disabled = true;
          sendBtn.disabled = true;
          sendBtn.textContent = 'Inviato';
          await loadLeaderboard();
        }catch(err){
          sendBtn.disabled = false;
          alert('Errore invio punteggio');
        }
      });
      box.appendChild(label); box.appendChild(nameIn); box.appendChild(sendBtn);
      const parent = els.result.parentElement;
      if(parent){ parent.insertBefore(box, els.result.nextSibling); }
    }

    function buildDeck(){
      const items = [
        ...POKEMON.map(p=>({ name:p.n, type:'pokemon', info:`PokÃ©mon (Gen ${p.gen})` })),
        ...DRUGS.map(d=>({ name:d.n, type:'drug', info:`Farmaco` }))
      ];
      // Shuffle (Fisherâ€“Yates)
      for(let i=items.length-1; i>0; i--){
        const j = Math.floor(Math.random()* (i+1));
        [items[i], items[j]] = [items[j], items[i]];
      }
      deck = items; idx = -1;
    }

    function next(){
      if(deck.length===0 || idx>=deck.length-1) buildDeck();
      idx++;
      state.round++;
      updateStatsUI();
      const cur = deck[idx];
      els.name.textContent = cur.name;
      els.hint.textContent = 'Farmaco o PokÃ©mon?';
      els.result.textContent = '';
      if(!gameOver){
        inputLocked = false;
        drugBtn.disabled = false; pokeBtn.disabled = false;
        startTimer();
      }
    }

    function updateStatsUI(){
      els.round.textContent = state.round;
      els.score.textContent = state.score;
      els.correct.textContent = state.correct;
      els.wrong.textContent = state.wrong;
      const total = state.correct + state.wrong;
      const acc = total? Math.round((state.correct/total)*100): 0;
      els.acc.textContent = acc+—%—;
      els.streak.textContent = state.streak;
      els.best.textContent = state.best;
    }

    function flash(btn, ok){
      btn.classList.remove('good','bad');
      void btn.offsetWidth; // reflow
      btn.classList.add(ok? 'good':'bad');
      setTimeout(()=>btn.classList.remove('good','bad'), 300);
    }

    function clearTimer(){
      if(tInterval){ clearInterval(tInterval); tInterval = null; }
      if(tTimeout){ clearTimeout(tTimeout); tTimeout = null; }
    }

    function updateTimerUI(ms){
      if(!els.timerBar || !els.timerPill) return;
      const pct = Math.max(0, Math.min(1, ms / TIME_LIMIT_MS));
      els.timerBar.style.width = (pct*100).toFixed(1)+'%';
      const hue = Math.round(120 * pct); // 120=verde, 0=rosso
      els.timerBar.style.background = `hsl(${hue} 85% 55%)`;
      els.timerPill.setAttribute('aria-valuenow', String(Math.round(pct*100)));
    }

    function startTimer(){
      clearTimer();
      tStart = Date.now();
      updateTimerUI(TIME_LIMIT_MS);
      tInterval = setInterval(()=>{
        const left = Math.max(0, TIME_LIMIT_MS - (Date.now() - tStart));
        updateTimerUI(left);
        if(left <= 0){ clearTimer(); timeUp(); }
      }, 100);
      tTimeout = setTimeout(()=>{ clearTimer(); timeUp(); }, TIME_LIMIT_MS + 20);
    }

    function timeUp(){
      if (gameOver || inputLocked) return;
      inputLocked = true;
      drugBtn.disabled = true; pokeBtn.disabled = true;
      const cur = deck[idx];
      state.wrong++;
      state.streak = 0;
      els.result.innerHTML = `â±ï¸ Tempo scaduto! <b>${cur.name}</b> Ã¨ ${cur.type==='drug' ? 'un <b>farmaco</b>' : 'un <b>PokÃ©mon</b>'}. <span class=—muted—>${cur.info||''}</span>`;
      updateStatsUI();
      if (state.wrong >= MAX_WRONG) {
        setTimeout(endGame, 400);
      } else {
        setTimeout(next, 1400);
      }
    }

    function answer(choice){
      if (gameOver || inputLocked) return;
      const cur = deck[idx];
      const ok = cur.type === choice;

      // blocca input durante il feedback per evitare doppio click
      inputLocked = true;
      drugBtn.disabled = true; pokeBtn.disabled = true;
      clearTimer();

      if (ok) {
        state.correct++;
        state.streak++;
        state.best = Math.max(state.best, state.streak);
        els.result.innerHTML = `âœ… Esatto! <b>${cur.name}</b> Ã¨ ${cur.type==='drug' ? 'un <b>farmaco</b>' : 'un <b>PokÃ©mon</b>'}. <span class=—muted—>${cur.info||''}</span>`;
        // Punteggio: base 100, moltiplicatore per streak (max 3x)
        { const base = 100; const mult = 1 + 0.2 * Math.min(Math.max(state.streak-1, 0), 10); const gained = Math.round(base * mult); state.score += gained; els.result.innerHTML += ` <span>+${gained} punti (x${mult.toFixed(1)})</span>`; }
        flash(choice==='drug' ? drugBtn : pokeBtn, true);
        updateStatsUI();
        setTimeout(next, 1400);
      } else {
        state.wrong++;
        state.streak = 0;
        els.result.innerHTML = `âŒ No! <b>${cur.name}</b> Ã¨ ${cur.type==='drug' ? 'un <b>farmaco</b>' : 'un <b>PokÃ©mon</b>'}. <span class=—muted—>${cur.info||''}</span>`;
        flash(choice==='drug' ? drugBtn : pokeBtn, false);
        updateStatsUI();
        if (state.wrong >= MAX_WRONG) {
          setTimeout(endGame, 400);
        } else {
          setTimeout(next, 1400);
        }
      }
    }

    function endGame(){
      gameOver = true;
      inputLocked = true;
      clearTimer();
      const total = state.correct + state.wrong;
      const acc = total ? Math.round((state.correct/total)*100) : 0;
      els.name.textContent = 'Fine!';
      els.hint.textContent = `Hai esaurito i ${MAX_WRONG} tentativi`;
      els.result.innerHTML = `ğŸ§  Partita terminata.<br>Corrette: <b>${state.correct}</b> â€¢ Sbagliate: <b>${state.wrong}</b> â€¢ Accuratezza: <b>${acc}%</b> â€¢ Streak max: <b>${state.best}</b>`;
      els.result.innerHTML += ` &middot; Punti: <b>${state.score}</b>`;
      drugBtn.disabled = true; pokeBtn.disabled = true;
      drugBtn.classList.add('hidden');
      pokeBtn.classList.add('hidden');
      showSubmit();
      if(!replayBtn){
        replayBtn = document.createElement('button');
        replayBtn.id = 'replayBtn';
        replayBtn.className = 'btn';
        replayBtn.type = 'button';
        replayBtn.textContent = 'Rigioca';
        replayBtn.addEventListener('click', replay);
      }
      const choicesEl = document.querySelector('.choices');
      if(choicesEl && !choicesEl.contains(replayBtn)) choicesEl.appendChild(replayBtn);
      // Nascondi lo stats box (ridondante nella schermata finale)
      const statsEl = document.querySelector('.stats');
      if (statsEl) statsEl.classList.add('hidden');
    }

    function replay(){
      // resetta la run ma mantiene il best
      const bestKeep = state.best;
      Object.assign(state, { correct: 0, wrong: 0, streak: 0, best: bestKeep, round: 0, score: 0 });
      gameOver = false;
      inputLocked = false;
      clearTimer();
      const choicesEl = document.querySelector('.choices');
      if(replayBtn && choicesEl && choicesEl.contains(replayBtn)) choicesEl.removeChild(replayBtn);
      // Rimuovi eventuale box submit
      (function(){ const s = document.getElementById('lbSubmit'); if(s && s.parentElement) s.parentElement.removeChild(s); })();
      drugBtn.disabled = false; pokeBtn.disabled = false;
      drugBtn.classList.remove('hidden');
      pokeBtn.classList.remove('hidden');
      // Mostra di nuovo lo stats box alla nuova partita
      (function(){ const statsEl = document.querySelector('.stats'); if (statsEl) statsEl.classList.remove('hidden'); })();
      els.result.textContent = '';
      els.hint.textContent = 'Scegli: farmaco o PokÃ©mon?';
      buildDeck();
      idx = -1;
      updateStatsUI();
      next();
    }

    // Event wiring (click)
    drugBtn.addEventListener('click', ()=>answer('drug'));
    pokeBtn.addEventListener('click', ()=>answer('pokemon'));

    // Start screen logic
    const gameGrid = document.querySelector('.grid.game');
    const startScreenEl = document.getElementById('startScreen');
    const startBtn = document.getElementById('startBtn');
    function startGame(){
      if(startScreenEl) startScreenEl.classList.add('hidden');
      if(gameGrid) gameGrid.classList.remove('hidden');
      buildDeck();
      updateStatsUI();
      next();
    }
    if(startBtn) startBtn.addEventListener('click', startGame);
    (function(){ const r = document.getElementById('lbRefreshBtn'); if(r) r.addEventListener('click', loadLeaderboard); loadLeaderboard(); })();

    // Aggiorna i valori nelle regole (tentativi e tempo) in base alle costanti
    (function(){
      const a = document.getElementById('rulesAttempts'); if(a) a.textContent = String(MAX_WRONG);
      const t = document.getElementById('rulesTimer'); if(t) t.textContent = String(Math.round(TIME_LIMIT_MS/1000));
    })();

    // Tema chiaro/scuro: toggle senza persistenza
    (function(){
      const btn = document.getElementById('themeBtn');
      if(!btn) return;
      // Default: scuro
      document.body.classList.add('theme-dark');
      function setLabel(){ btn.textContent = document.body.classList.contains('theme-light') ? 'Scuro' : 'Chiaro'; }
      btn.addEventListener('click', ()=>{
        document.body.classList.toggle('theme-light');
        document.body.classList.toggle('theme-dark');
        setLabel();
      });
      setLabel();
    })();

    // Adatta —Benvenuto!— per stare al 90% su una sola riga
    (function(){
      const el = document.getElementById('startTitle');
      if(!el) return;
      const MIN_PX = 20; // limite inferiore di sicurezza
      function fit(){
        // ripristina font-size da CSS per ricalcolo
        el.style.fontSize = '';
        // forza misurazione
        const base = parseFloat(getComputedStyle(el).fontSize) || 24;
        let size = base;
        el.style.fontSize = size + 'px';
        let i = 0;
        // riduci finchÃ© non rientra nella larghezza disponibile
        while(el.scrollWidth > el.clientWidth && size > MIN_PX && i < 24){
          size -= 1; i++;
          el.style.fontSize = size + 'px';
        }
      }
      window.addEventListener('resize', fit);
      if(document.readyState === 'complete') fit(); else window.addEventListener('load', fit);
      // ritardo minimo per sicurezza post layout
      setTimeout(fit, 0);
    })();

    // Full reset button: reloads
    (function(){
      const resetBtn = document.getElementById('resetAllBtn');
      if(!resetBtn) return;
      resetBtn.addEventListener('click', ()=>{
        if(!confirm('Vuoi tornare al menu?')) return;
        // storage removed: nothing to clear
        Object.assign(state, { correct: 0, wrong: 0, streak: 0, best: 0, round: 0, score: 0 });
        location.reload();
      });
    })();

    // Responsive: detect coarse pointer and toggle class
    (function(){
      const mq = window.matchMedia('(pointer: coarse)');
      const apply = ()=> document.body.classList.toggle('coarse', mq.matches);
      apply();
      if(mq.addEventListener) mq.addEventListener('change', apply); else mq.addListener(apply);
    })();
    // Boot: mostra solo la schermata iniziale; il gioco parte con Start
  


