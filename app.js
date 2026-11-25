
    (() => {
      "use strict";
      const icons = {
        logo: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 12a9 9 0 0 1 18 0v2h-3v-2a6 6 0 0 0-12 0v2H3z"/><path d="M3 12h3v8H6a3 3 0 0 1-3-3zm15 0h3v5a3 3 0 0 1-3 3h-1v-8z"/></svg>',
        search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="10.8" cy="10.8" r="7"/><path d="m16 16 5 5"/></svg>',
        home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/></svg>',
        library: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 5v14M9 5v14M14 5v14M19 5v14"/></svg>',
        artists: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M3 21v-2a6 6 0 0 1 12 0v2M19 8v8m-4-4h8"/></svg>',
        album: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/></svg>',
        heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8z"/></svg>',
        plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
        sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>',
        moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 13A8.5 8.5 0 0 1 11 3.2 8.5 8.5 0 1 0 20.8 13z"/></svg>',
        play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.8c0-.8.9-1.3 1.6-.9l10.1 6.2a1 1 0 0 1 0 1.7L9.6 19a1.1 1.1 0 0 1-1.6-.9z"/></svg>',
        pause: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z"/></svg>',
        next: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 5.8c0-.8.9-1.3 1.6-.9l9.8 6.1a1.1 1.1 0 0 1 0 1.8l-9.8 6.1a1.1 1.1 0 0 1-1.6-.9zM18 5h2v14h-2z"/></svg>',
        previous: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 5.8c0-.8-.9-1.3-1.6-.9l-9.8 6.1a1.1 1.1 0 0 0 0 1.8l9.8 6.1a1.1 1.1 0 0 0 1.6-.9zM4 5h2v14H4z"/></svg>',
        shuffle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m18 14 4 4-4 4M2 3h2.5a6 6 0 0 1 4.8 2.4l5.4 7.2a6 6 0 0 0 4.8 2.4H22M18 2l4 4-4 4M2 21h2.5a6 6 0 0 0 4.8-2.4l1-1.4"/></svg>',
        repeat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m17 2 4 4-4 4M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4m14-1v2a3 3 0 0 1-3 3H3"/></svg>',
        volume: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4zM15.5 8.5a5 5 0 0 1 0 7m3-10a9 9 0 0 1 0 13"/></svg>',
        clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
        trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4h8v2m3 0-1 14H6L5 6m4 4v6m6-6v6"/></svg>',
        equalizer: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M5 4v5m0 4v7M12 4v2m0 4v10M19 4v8m0 4v4"/><path d="M3 9h4m3-3h4m3 6h4m-14 1h4"/></svg>',
        folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
        music: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
        clear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="m18 6-12 12M6 6l12 12"/></svg>'
      };
      const $ = (selector) => document.querySelector(selector);
      const audio = $("#audio");
      const tracks = [];
      let currentIndex = -1;
      let page = "home";
      let searchTerm = "";
      let shuffle = false;
      let repeat = false;
      let toastTimer;
      let currentDetail = null;
      function loadRecentTrackKeys() {
        try {
          const saved = JSON.parse(localStorage.getItem("rubro-recent-tracks") || "[]");
          return Array.isArray(saved) ? saved.filter((key) => typeof key === "string").slice(0, 50) : [];
        } catch {
          return [];
        }
      }
      let recentTrackKeys = loadRecentTrackKeys();
      const eqFrequencies = ["31", "62", "125", "250", "500", "1k", "2k", "4k", "8k", "16k"];
      const eqStorageKey = "rubro-equalizer";
      const clampDb = (value) => Number.isFinite(Number(value)) ? Math.max(-12, Math.min(12, Number(value))) : 0;
      function loadEqualizerSettings() {
        const defaults = { enabled: true, preamp: 0, bass: 0, treble: 0, bands: Array(10).fill(0) };
        try {
          const saved = JSON.parse(localStorage.getItem(eqStorageKey) || "null");
          if (!saved || typeof saved !== "object") return defaults;
          return {
            enabled: saved.enabled !== false,
            preamp: clampDb(saved.preamp),
            bass: clampDb(saved.bass),
            treble: clampDb(saved.treble),
            bands: eqFrequencies.map((_, index) => clampDb(Array.isArray(saved.bands) ? saved.bands[index] : 0))
          };
        } catch {
          return defaults;
        }
      }
      const eqSettings = loadEqualizerSettings();
      let audioContext = null;
      let audioGraph = null;
      let knobDrag = null;
      let eqSupportNoticeShown = false;
      const favorites = new Set(JSON.parse(localStorage.getItem("rubro-favorites") || "[]"));
      const placeholder = makePlaceholder();
      const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
      const setIcon = (element, name) => { if (element) element.innerHTML = icons[name] || ""; };
      $("#brand-mark").innerHTML = icons.logo;
      $("#search-icon").innerHTML = icons.search;
      $("#search-clear").innerHTML = icons.clear;
      $("#equalizer-open").innerHTML = icons.equalizer;
      $("#theme-toggle").innerHTML = icons.sun;
      $("#side-import").innerHTML = icons.plus;
      $("#clear-recent").innerHTML = icons.trash;
      $("#shuffle-button").innerHTML = icons.shuffle;
      $("#previous-button").innerHTML = icons.previous;
      $("#next-button").innerHTML = icons.next;
      $("#repeat-button").innerHTML = icons.repeat;
      $("#volume-icon").innerHTML = icons.volume;
      $("#now-favorite").innerHTML = icons.heart;
      $$(".nav-button [data-icon]").forEach((el) => { el.innerHTML = icons[el.dataset.icon]; });
      $("#eq-close").innerHTML = icons.clear;
      const eqBandDefinitions = [{ param: "preamp", label: "Pré", aria: "Pré-amplificador" }]
        .concat(eqFrequencies.map((frequency, index) => ({ param: "band-" + index, label: frequency, aria: "Frequência " + frequency + " Hz" })));
      $("#eq-bands").innerHTML = eqBandDefinitions.map((band) =>
        '<label class="eq-band"><output class="eq-band-value" data-eq-output="' + band.param + '">0 dB</output>' +
        '<input type="range" min="-12" max="12" step="0.5" value="0" data-eq-slider="' + band.param + '" aria-label="' + band.aria + '">' +
        '<span class="eq-band-frequency">' + band.label + '</span></label>'
      ).join("");
      function $$(selector) { return Array.from(document.querySelectorAll(selector)); }

      function makePlaceholder() {
        const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"><defs><linearGradient id="g" x2="1" y2="1"><stop stop-color="#b32e2b"/><stop offset="1" stop-color="#351416"/></linearGradient></defs><rect width="300" height="300" rx="18" fill="url(#g)"/><circle cx="150" cy="150" r="84" fill="none" stroke="#fff" stroke-opacity=".23" stroke-width="2"/><circle cx="150" cy="150" r="54" fill="none" stroke="#fff" stroke-opacity=".27" stroke-width="2"/><circle cx="150" cy="150" r="11" fill="#fff" fill-opacity=".85"/><path d="M132 118v64l55-32z" fill="#fff" fill-opacity=".78"/></svg>';
        return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
      }
      function formatTime(seconds) {
        if (!Number.isFinite(seconds)) return "0:00";
        const mins = Math.floor(seconds / 60);
        return mins + ":" + String(Math.floor(seconds % 60)).padStart(2, "0");
      }
      function notify(message) {
        const toast = $("#toast");
        toast.textContent = message;
        toast.classList.add("show");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
      }
      function formatDb(value) { return (value > 0 ? "+" : "") + Number(value).toFixed(1) + " dB"; }
      function saveEqualizerSettings() {
        try {
          localStorage.setItem(eqStorageKey, JSON.stringify(eqSettings));
        } catch {
          notify("Não foi possível salvar as configurações do equalizador.");
        }
      }
      function applyEqualizerSettings() {
        if (!audioGraph) return;
        const enabled = eqSettings.enabled;
        audioGraph.bass.gain.value = enabled ? eqSettings.bass : 0;
        audioGraph.bands.forEach((filter, index) => { filter.gain.value = enabled ? eqSettings.bands[index] : 0; });
        audioGraph.treble.gain.value = enabled ? eqSettings.treble : 0;
        audioGraph.preamp.gain.value = enabled ? Math.pow(10, eqSettings.preamp / 20) : 1;
      }
      function prepareAudioGraph() {
        const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextConstructor) return Promise.resolve(false);
        if (!audioContext) {
          audioContext = new AudioContextConstructor();
          const source = audioContext.createMediaElementSource(audio);
          const bass = audioContext.createBiquadFilter();
          bass.type = "lowshelf";
          bass.frequency.value = 110;
          const bands = eqFrequencies.map((frequency) => {
            const filter = audioContext.createBiquadFilter();
            filter.type = "peaking";
            filter.frequency.value = Number(frequency.replace("k", "000"));
            filter.Q.value = 1.15;
            return filter;
          });
          const treble = audioContext.createBiquadFilter();
          treble.type = "highshelf";
          treble.frequency.value = 8500;
          const preamp = audioContext.createGain();
          let previous = source;
          [bass, ...bands, treble, preamp].forEach((filter) => {
            previous.connect(filter);
            previous = filter;
          });
          preamp.connect(audioContext.destination);
          audioGraph = { bass, bands, treble, preamp };
          applyEqualizerSettings();
        }
        return audioContext.state === "suspended" ? audioContext.resume() : Promise.resolve(true);
      }
      function setEqualizerValue(param, value, persist) {
        const nextValue = Math.round(clampDb(value) * 2) / 2;
        if (param === "preamp" || param === "bass" || param === "treble") eqSettings[param] = nextValue;
        else if (/^band-\d+$/.test(param)) eqSettings.bands[Number(param.slice(5))] = nextValue;
        const slider = document.querySelector('[data-eq-slider="' + param + '"]');
        const output = document.querySelector('[data-eq-output="' + param + '"]');
        if (slider) slider.value = String(nextValue);
        if (output) output.textContent = formatDb(nextValue);
        if (param === "bass" || param === "treble") {
          const knob = $("#eq-knob-" + param);
          knob.style.setProperty("--angle", (((nextValue + 12) / 24) * 270 - 135) + "deg");
          knob.setAttribute("aria-valuenow", String(nextValue));
          $("#eq-value-" + param).textContent = formatDb(nextValue);
        }
        applyEqualizerSettings();
        if (persist) saveEqualizerSettings();
      }
      function updateEqualizerControls() {
        $("#eq-power").setAttribute("aria-pressed", String(eqSettings.enabled));
        $("#eq-power-label").textContent = eqSettings.enabled ? "Ligado" : "Desligado";
        setEqualizerValue("preamp", eqSettings.preamp, false);
        eqFrequencies.forEach((_, index) => setEqualizerValue("band-" + index, eqSettings.bands[index], false));
        setEqualizerValue("bass", eqSettings.bass, false);
        setEqualizerValue("treble", eqSettings.treble, false);
        applyEqualizerSettings();
      }
      function setEqualizerEnabled(enabled) {
        eqSettings.enabled = enabled;
        updateEqualizerControls();
        saveEqualizerSettings();
      }
      function setEqualizerPopover(open) {
        $("#eq-popover").hidden = !open;
        $("#equalizer-open").setAttribute("aria-expanded", String(open));
        $("#equalizer-open").classList.toggle("active", open);
        if (open) $("#eq-power").focus();
        else $("#equalizer-open").focus();
      }
      function bindEqualizerKnob(param) {
        const knob = $("#eq-knob-" + param);
        knob.addEventListener("pointerdown", (event) => {
          if (event.pointerType === "mouse" && event.button !== 0) return;
          event.preventDefault();
          knob.setPointerCapture(event.pointerId);
          knobDrag = { knob, pointerId: event.pointerId, startY: event.clientY, startValue: eqSettings[param] };
        });
        knob.addEventListener("pointermove", (event) => {
          if (knobDrag && knobDrag.knob === knob && knobDrag.pointerId === event.pointerId) {
            setEqualizerValue(param, knobDrag.startValue + (knobDrag.startY - event.clientY) * 0.25, false);
          }
        });
        knob.addEventListener("pointerup", (event) => {
          if (knobDrag && knobDrag.knob === knob && knobDrag.pointerId === event.pointerId) {
            knobDrag = null;
            saveEqualizerSettings();
          }
        });
        knob.addEventListener("pointercancel", () => { knobDrag = null; });
        knob.addEventListener("keydown", (event) => {
          let delta = 0;
          if (event.key === "ArrowUp" || event.key === "ArrowRight") delta = 0.5;
          else if (event.key === "ArrowDown" || event.key === "ArrowLeft") delta = -0.5;
          else if (event.key === "PageUp") delta = 2;
          else if (event.key === "PageDown") delta = -2;
          else if (event.key === "Home") { event.preventDefault(); setEqualizerValue(param, 0, true); return; }
          else return;
          event.preventDefault();
          setEqualizerValue(param, eqSettings[param] + delta, true);
        });
      }
      function coverFor(track) { return track && track.cover ? track.cover : placeholder; }
      function favoriteKey(track) { return track.path + "|" + track.file.size + "|" + track.file.lastModified; }
      function isFavorite(track) { return favorites.has(favoriteKey(track)); }
      function saveFavorites() { localStorage.setItem("rubro-favorites", JSON.stringify(Array.from(favorites))); }
      function recordRecentlyPlayed(track) {
        if (!track) return;
        const key = favoriteKey(track);
        recentTrackKeys = [key, ...recentTrackKeys.filter((recentKey) => recentKey !== key)].slice(0, 50);
        try {
          localStorage.setItem("rubro-recent-tracks", JSON.stringify(recentTrackKeys));
        } catch {
          notify("Não foi possível salvar o histórico de reprodução.");
        }
        renderSidebar();
      }
      function clearRecentlyPlayed() {
        recentTrackKeys = [];
        try {
          localStorage.setItem("rubro-recent-tracks", "[]");
        } catch {
          notify("Não foi possível limpar o histórico de reprodução.");
        }
        renderSidebar();
      }
      function albumKey(track) { return (track.artist + "\u0000" + track.album).toLocaleLowerCase(); }
      function normalizeSearch(value) { return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase(); }
      function albumsFrom(list) {
        const albums = new Map();
        list.forEach((track) => {
          const key = albumKey(track);
          if (!albums.has(key)) albums.set(key, { name: track.album, artist: track.artist, year: track.year, cover: coverFor(track), tracks: [] });
          const album = albums.get(key);
          album.tracks.push(track);
          if (track.cover && !album.coverTrack) { album.cover = track.cover; album.coverTrack = true; }
          if (track.year && (!album.year || track.year < album.year)) album.year = track.year;
        });
        albums.forEach((album) => album.tracks.sort((a, b) => (a.trackNo || 9999) - (b.trackNo || 9999) || a.title.localeCompare(b.title)));
        return Array.from(albums.values()).sort((a, b) => (Number(b.year) || 0) - (Number(a.year) || 0) || a.name.localeCompare(b.name));
      }
      function artistsFrom(list) {
        const artists = new Map();
        list.forEach((track) => {
          if (!artists.has(track.artist.toLocaleLowerCase())) artists.set(track.artist.toLocaleLowerCase(), { name: track.artist, cover: coverFor(track), tracks: [] });
          const artist = artists.get(track.artist.toLocaleLowerCase());
          artist.tracks.push(track);
          if (track.cover && !artist.coverTrack) { artist.cover = track.cover; artist.coverTrack = true; }
        });
        return Array.from(artists.values()).sort((a, b) => a.name.localeCompare(b.name));
      }
      function getFilteredTracks() {
        const query = normalizeSearch(searchTerm.trim());
        let list = tracks;
        if (page === "favorites") list = list.filter(isFavorite);
        if (currentDetail && currentDetail.type === "album") list = currentDetail.item.tracks;
        if (currentDetail && currentDetail.type === "artist") list = currentDetail.item.tracks;
        if (query) list = list.filter((t) => normalizeSearch([t.title, t.artist, t.album, t.year].join(" ")).includes(query));
        return list;
      }
      function cardMarkup(item, type) {
        const title = type === "artist" ? item.name : item.name;
        const subtitle = type === "artist" ? item.tracks.length + " " + (item.tracks.length === 1 ? "música" : "músicas") : [item.artist, item.year].filter(Boolean).join(" · ");
        const key = type === "artist" ? item.name : JSON.stringify([item.artist, item.name]);
        return '<button class="card" data-open="' + type + '" data-key="' + esc(key) + '" aria-label="Abrir ' + esc(title) + '">' +
          '<img class="art ' + (type === "artist" ? "round" : "") + '" src="' + esc(item.cover || placeholder) + '" alt="">' +
          '<span class="card-title">' + esc(title) + '</span><span class="card-sub">' + esc(subtitle || "Álbum") + '</span>' +
          '<span class="play-float" data-play-type="' + type + '" data-play-key="' + esc(key) + '">' + icons.play + '</span></button>';
      }
      function trackRows(list) {
        if (!list.length) return '<p class="empty-side">Nenhuma música encontrada.</p>';
        const rows = list.map((track) => {
          const idx = tracks.indexOf(track);
          const active = idx === currentIndex;
          return '<tr class="' + (active ? "playing" : "") + '" data-track="' + idx + '"><td class="track-number">' + (track.trackNo || "♪") + '</td><td class="track-title-cell"><img class="art" src="' + esc(coverFor(track)) + '" alt=""><span class="track-name"><b>' + esc(track.title) + '</b><small>' + esc(track.artist + " · " + track.album) + '</small></span></td><td>' + esc(track.year || "—") + '</td><td class="track-duration">' + formatTime(track.duration) + '</td></tr>';
        }).join("");
        return '<table class="track-list"><thead><tr><th class="track-number">#</th><th>Título</th><th>Ano</th><th class="track-duration">' + icons.clock + '</th></tr></thead><tbody>' + rows + '</tbody></table>';
      }
      function emptyMarkup() {
        return '<section class="empty-state"><span class="empty-icon">' + icons.folder + '</span><h2>Sua música, do seu jeito.</h2><p>Importe a pasta Música do Windows para montar sua biblioteca. O Rubro lê as tags dos MP3s — artista, álbum, faixa, ano e capa — e toca tudo offline. Seus arquivos nunca saem do computador.</p><button class="primary-button action-red" data-action="import">' + icons.plus + ' Escolher pasta Música</button></section>';
      }
      function renderHome() {
        if (!tracks.length) return emptyMarkup();
        const filtered = getFilteredTracks();
        const albums = albumsFrom(filtered);
        const artists = artistsFrom(filtered);
        const recents = [...tracks].sort((a, b) => b.file.lastModified - a.file.lastModified).slice(0, 6);
        const quick = albums.slice(0, 6).map((album) => '<button class="quick-card" data-open="album" data-key="' + esc(JSON.stringify([album.artist, album.name])) + '"><img class="art" src="' + esc(album.cover) + '" alt=""><b>' + esc(album.name) + '</b></button>').join("");
        return '<section class="hero"><div><p class="eyebrow">Seu espaço. Sua música.</p><h1>Bom ouvir você.</h1><p>Uma biblioteca feita dos seus arquivos, sempre disponível — mesmo sem internet.</p></div><div class="hero-action"><button class="primary-button" data-action="import">' + icons.plus + ' Adicionar músicas</button></div></section>' +
          '<section class="section"><div class="section-head"><h2>Atalhos</h2><small>' + tracks.length + (tracks.length === 1 ? " música" : " músicas") + ' na biblioteca</small></div><div class="quick-grid">' + quick + '</div></section>' +
          '<section class="section"><div class="section-head"><h2>Álbuns da sua coleção</h2><small>' + albums.length + (albums.length === 1 ? " álbum" : " álbuns") + '</small></div><div class="cards">' + albums.slice(0, 6).map((item) => cardMarkup(item, "album")).join("") + '</div></section>' +
          (artists.length ? '<section class="section"><div class="section-head"><h2>Artistas</h2><small>' + artists.length + (artists.length === 1 ? " artista" : " artistas") + '</small></div><div class="cards">' + artists.slice(0, 6).map((item) => cardMarkup(item, "artist")).join("") + '</div></section>' : "") +
          '<section class="section"><div class="section-head"><h2>Adicionadas recentemente</h2><small>Reproduza uma faixa para começar</small></div>' + trackRows(recents) + '</section>';
      }
      function renderSearchResults() {
        const query = normalizeSearch(searchTerm.trim());
        if (!tracks.length) return emptyMarkup();
        const songResults = tracks.filter((track) => normalizeSearch([track.title, track.artist, track.album, track.year].join(" ")).includes(query));
        const artistResults = artistsFrom(tracks).filter((artist) => normalizeSearch(artist.name).includes(query));
        const albumResults = albumsFrom(tracks).filter((album) => normalizeSearch([album.name, album.artist, album.year].join(" ")).includes(query));
        const total = songResults.length + artistResults.length + albumResults.length;
        if (!total) {
          return '<h1 class="page-title">Busca</h1><p class="page-description">Nenhum resultado para “' + esc(searchTerm.trim()) + '”.</p><div class="empty-state"><span class="empty-icon">' + icons.search + '</span><h2>Não encontramos essa busca</h2><p>Tente outro nome de música, artista ou álbum.</p><button class="primary-button action-red" data-action="clear-search">Limpar busca</button></div>';
        }
        return '<h1 class="page-title">Resultados da busca</h1><p class="page-description">' + total + (total === 1 ? ' resultado para “' : ' resultados para “') + esc(searchTerm.trim()) + '”</p>' +
          (artistResults.length ? '<section class="section"><div class="section-head"><h2>Artistas</h2><small>' + artistResults.length + (artistResults.length === 1 ? ' artista' : ' artistas') + '</small></div><div class="cards">' + artistResults.map((item) => cardMarkup(item, "artist")).join("") + '</div></section>' : '') +
          (albumResults.length ? '<section class="section"><div class="section-head"><h2>Álbuns</h2><small>' + albumResults.length + (albumResults.length === 1 ? ' álbum' : ' álbuns') + '</small></div><div class="cards">' + albumResults.map((item) => cardMarkup(item, "album")).join("") + '</div></section>' : '') +
          (songResults.length ? '<section class="section"><div class="section-head"><h2>Músicas</h2><small>' + songResults.length + (songResults.length === 1 ? ' faixa' : ' faixas') + '</small></div>' + trackRows(songResults) + '</section>' : '');
      }
      function renderPage() {
        if (searchTerm.trim()) {
          currentDetail = null;
          $("#page-content").innerHTML = renderSearchResults();
          return;
        }
        if (currentDetail) {
          renderDetail();
          return;
        }
        const content = $("#page-content");
        const filtered = getFilteredTracks();
        let html = "";
        if (page === "home") html = renderHome();
        else if (!tracks.length) html = emptyMarkup();
        else if (page === "library") {
          html = '<h1 class="page-title">Sua música</h1><p class="page-description">Todos os MP3s que você escolheu importar.</p><div class="filters"><button class="filter-chip active">Todas as músicas</button><button class="filter-chip" data-page="albums">Álbuns</button><button class="filter-chip" data-page="artists">Artistas</button></div>' + trackRows(filtered);
        } else if (page === "favorites") {
          html = '<h1 class="page-title">Favoritas</h1><p class="page-description">As músicas que você guardou com carinho.</p>' + (filtered.length ? trackRows(filtered) : '<div class="empty-state"><span class="empty-icon">' + icons.heart + '</span><h2>Nenhuma favorita por enquanto</h2><p>Toque no coração ao lado de uma música para encontrá-la aqui.</p></div>');
        } else if (page === "artists") {
          const artists = artistsFrom(filtered);
          html = '<h1 class="page-title">Artistas</h1><p class="page-description">' + artists.length + (artists.length === 1 ? " artista na sua coleção" : " artistas na sua coleção") + '</p><div class="cards">' + artists.map((item) => cardMarkup(item, "artist")).join("") + '</div>';
          if (!artists.length) html = emptyMarkup();
        } else {
          const albums = albumsFrom(filtered);
          html = '<h1 class="page-title">Álbuns</h1><p class="page-description">' + albums.length + (albums.length === 1 ? " álbum na sua coleção" : " álbuns na sua coleção") + '</p><div class="cards">' + albums.map((item) => cardMarkup(item, "album")).join("") + '</div>';
          if (!albums.length) html = emptyMarkup();
        }
        content.innerHTML = html;
      }
      function renderDetail() {
        const { type, item } = currentDetail;
        const totalSeconds = item.tracks.reduce((sum, t) => sum + (t.duration || 0), 0);
        const detailTitle = type === "artist" ? item.name : item.name;
        const meta = type === "artist"
          ? item.tracks.length + (item.tracks.length === 1 ? " música" : " músicas") + " · " + albumsFrom(item.tracks).length + (albumsFrom(item.tracks).length === 1 ? " álbum" : " álbuns")
          : [item.artist, item.year, item.tracks.length + (item.tracks.length === 1 ? " música" : " músicas"), formatTime(totalSeconds)].filter(Boolean).join(" · ");
        $("#page-content").innerHTML =
          '<section class="detail-hero"><img class="art ' + (type === "artist" ? "round" : "") + '" src="' + esc(item.cover || placeholder) + '" alt=""><div class="detail-meta"><p class="eyebrow">' + (type === "artist" ? "Artista" : "Álbum") + '</p><h1>' + esc(detailTitle) + '</h1><p>' + esc(meta) + '</p></div></section>' +
          '<div class="detail-controls"><button class="circle-play" data-play-list="detail" aria-label="Reproduzir">' + icons.play + '</button>' +
          (type === "album" ? '<button class="subtle-button" data-favorite-album="true">' + icons.heart + ' Favoritar álbum</button>' : "") +
          '<button class="subtle-button" data-action="back">← Voltar</button></div>' +
          '<section class="section"><div class="section-head"><h2>' + (type === "artist" ? "Músicas" : "Faixas") + '</h2><small>' + item.tracks.length + ' faixas</small></div>' + trackRows(item.tracks) + '</section>' +
          (type === "artist" ? '<section class="section"><div class="section-head"><h2>Discografia</h2><small>Álbuns encontrados nos seus MP3s</small></div><div class="cards">' + albumsFrom(item.tracks).map((album) => cardMarkup(album, "album")).join("") + '</div></section>' : "");
      }
      function renderSidebar() {
        const tracksByKey = new Map(tracks.map((track) => [favoriteKey(track), track]));
        const list = recentTrackKeys.map((key) => tracksByKey.get(key)).filter(Boolean);
        $("#clear-recent").disabled = list.length === 0;
        $("#side-library").innerHTML = list.length ? list.map((track) => '<button class="side-item" data-track="' + tracks.indexOf(track) + '"><img class="art" src="' + esc(coverFor(track)) + '" alt=""><span class="side-item-copy"><b>' + esc(track.title) + '</b><small>' + esc(track.artist) + '</small></span></button>').join("") : '<p class="empty-side">As músicas que você tocar aparecerão aqui.</p>';
      }
      function updateNav() {
        $$(".nav-button").forEach((button) => button.classList.toggle("active", !currentDetail && button.dataset.page === page));
      }
      function updatePlayer() {
        const track = tracks[currentIndex];
        if (!track) {
          $("#now-art").src = placeholder;
          $("#now-title").textContent = "Escolha uma música";
          $("#now-artist").textContent = tracks.length ? "Selecione uma faixa da sua biblioteca" : "Sua biblioteca está esperando";
          $("#now-favorite").classList.remove("liked");
          $("#play-button").innerHTML = icons.play;
          $("#play-button").setAttribute("aria-label", "Reproduzir");
          return;
        }
        $("#now-art").src = coverFor(track);
        $("#now-title").textContent = track.title;
        $("#now-artist").textContent = track.artist + " · " + track.album;
        $("#now-favorite").classList.toggle("liked", isFavorite(track));
        $("#now-favorite").title = isFavorite(track) ? "Remover das favoritas" : "Adicionar às favoritas";
        $("#play-button").innerHTML = audio.paused ? icons.play : icons.pause;
        $("#play-button").setAttribute("aria-label", audio.paused ? "Reproduzir" : "Pausar");
        $("#elapsed").textContent = formatTime(audio.currentTime);
        $("#duration").textContent = formatTime(Number.isFinite(audio.duration) ? audio.duration : track.duration);
        $("#seek").value = audio.duration ? Math.round(audio.currentTime / audio.duration * 1000) : 0;
      }
      function setPage(nextPage) {
        clearSearch();
        currentDetail = null;
        page = nextPage;
        updateNav();
        renderPage();
        $("#main").scrollTop = 0;
      }
      function clearSearch() {
        searchTerm = "";
        $("#search-input").value = "";
        $("#search-clear").classList.remove("visible");
      }
      function openDetail(type, key) {
        const collection = type === "artist" ? artistsFrom(tracks) : albumsFrom(tracks);
        let albumRef;
        if (type === "album") {
          try { albumRef = JSON.parse(key); } catch { return; }
        }
        const item = type === "artist" ? collection.find((x) => x.name === key) : collection.find((x) => x.artist === albumRef[0] && x.name === albumRef[1]);
        if (!item) return;
        currentDetail = { type, item };
        updateNav();
        renderDetail();
        $("#main").scrollTop = 0;
      }
      function playTrack(index) {
        if (index < 0 || index >= tracks.length) return;
        currentIndex = index;
        audio.src = tracks[index].url;
        let graphReady;
        try {
          graphReady = prepareAudioGraph();
        } catch {
          notify("Não foi possível iniciar o equalizador; tentando reproduzir sem os filtros.");
          graphReady = Promise.resolve(false);
        }
        Promise.resolve(graphReady)
          .catch(() => {
            notify("Não foi possível ativar o processamento de áudio; tentando reproduzir sem os filtros.");
            return false;
          })
          .then((supported) => {
            if (supported === false && !eqSupportNoticeShown) {
              eqSupportNoticeShown = true;
              notify("Este navegador não oferece suporte ao equalizador; a música será reproduzida sem filtros.");
            }
            return audio.play();
          })
          .then(() => { updatePlayer(); renderPage(); })
          .catch(() => {
            updatePlayer();
            notify("Não foi possível reproduzir este arquivo MP3.");
          });
        updatePlayer();
        renderPage();
      }
      function playNext(direction) {
        if (!tracks.length) return;
        if (repeat && direction > 0) {
          audio.currentTime = 0;
          audio.play();
          return;
        }
        let next;
        if (shuffle && direction > 0 && tracks.length > 1) {
          do { next = Math.floor(Math.random() * tracks.length); } while (next === currentIndex);
        } else next = (currentIndex + direction + tracks.length) % tracks.length;
        playTrack(next);
      }
      function toggleFavorite(track) {
        if (!track) return;
        const key = favoriteKey(track);
        if (favorites.has(key)) favorites.delete(key);
        else favorites.add(key);
        saveFavorites();
        updatePlayer();
        renderPage();
      }
      function decodeText(data, encoding) {
        if (!data.length) return "";
        try {
          if (encoding === 1) return new TextDecoder("utf-16").decode(data).replace(/\0+$/g, "").trim();
          if (encoding === 2) return new TextDecoder("utf-16be").decode(data).replace(/\0+$/g, "").trim();
          if (encoding === 3) return new TextDecoder("utf-8").decode(data).replace(/\0+$/g, "").trim();
          return new TextDecoder("windows-1252").decode(data).replace(/\0+$/g, "").trim();
        } catch { return ""; }
      }
      function syncSafe(bytes, offset) {
        return (bytes[offset] & 127) * 2097152 + (bytes[offset + 1] & 127) * 16384 + (bytes[offset + 2] & 127) * 128 + (bytes[offset + 3] & 127);
      }
      async function readTags(file) {
        const head = new Uint8Array(await file.slice(0, 1024 * 1024).arrayBuffer());
        const tags = {};
        let cover = null;
        if (head.length >= 10 && head[0] === 73 && head[1] === 68 && head[2] === 51) {
          const major = head[3];
          const end = Math.min(head.length, 10 + syncSafe(head, 6));
          let offset = 10;
          while (offset + 10 <= end) {
            const id = String.fromCharCode(head[offset], head[offset + 1], head[offset + 2], head[offset + 3]);
            if (!/^[A-Z0-9]{4}$/.test(id)) break;
            const size = major === 4 ? syncSafe(head, offset + 4) : (head[offset + 4] * 16777216 + head[offset + 5] * 65536 + head[offset + 6] * 256 + head[offset + 7]);
            if (!size || offset + 10 + size > end) break;
            const frame = head.subarray(offset + 10, offset + 10 + size);
            const frames = { TIT2: "title", TPE1: "artist", TALB: "album", TDRC: "year", TYER: "year", TRCK: "trackNo" };
            if (frames[id] && frame.length > 1 && !tags[frames[id]]) {
              tags[frames[id]] = decodeText(frame.subarray(1), frame[0]).split("/")[0].trim();
            } else if (id === "APIC" && frame.length > 8 && !cover) {
              const enc = frame[0];
              let pos = 1;
              while (pos < frame.length && frame[pos] !== 0) pos++;
              const mime = new TextDecoder("ascii").decode(frame.subarray(1, pos)) || "image/jpeg";
              pos += 2;
              if (enc === 0 || enc === 3) {
                while (pos < frame.length && frame[pos] !== 0) pos++;
                pos++;
              } else {
                while (pos + 1 < frame.length && (frame[pos] !== 0 || frame[pos + 1] !== 0)) pos += 2;
                pos += 2;
              }
              if (pos < frame.length) cover = URL.createObjectURL(new Blob([frame.subarray(pos)], { type: mime }));
            }
            offset += 10 + size;
          }
        }
        if (!tags.title || !tags.artist || !tags.album || !tags.year) {
          const tail = new Uint8Array(await file.slice(Math.max(0, file.size - 128)).arrayBuffer());
          if (tail.length === 128 && String.fromCharCode(...tail.subarray(0, 3)) === "TAG") {
            const v1 = (start, end) => new TextDecoder("windows-1252").decode(tail.subarray(start, end)).replace(/\0/g, "").trim();
            if (!tags.title) tags.title = v1(3, 33);
            if (!tags.artist) tags.artist = v1(33, 63);
            if (!tags.album) tags.album = v1(63, 93);
            if (!tags.year) tags.year = v1(93, 97);
          }
        }
        const fallback = file.name.replace(/\.mp3$/i, "").replace(/^\d{1,3}[\s._-]+/, "");
        const parts = file.webkitRelativePath.split("/").filter(Boolean);
        const parent = parts.length > 1 ? parts[parts.length - 2] : "";
        return {
          file, path: file.webkitRelativePath || file.name,
          title: tags.title || fallback || file.name,
          artist: tags.artist || "Artista desconhecido",
          album: tags.album || parent || "Álbum desconhecido",
          year: (tags.year || "").match(/\d{4}/)?.[0] || "",
          trackNo: Number.parseInt(tags.trackNo, 10) || 0,
          cover, duration: 0, url: URL.createObjectURL(file)
        };
      }
      async function scanFiles(files) {
        const mp3s = Array.from(files).filter((file) => file.name.toLowerCase().endsWith(".mp3"));
        if (!mp3s.length) {
          notify("Não encontrei arquivos MP3 na pasta selecionada.");
          return;
        }
        const button = $("#side-import");
        button.disabled = true;
        notify("Lendo tags de " + mp3s.length + (mp3s.length === 1 ? " arquivo…" : " arquivos…"));
        const parsed = [];
        for (let i = 0; i < mp3s.length; i += 4) {
          const batch = await Promise.all(mp3s.slice(i, i + 4).map(readTags));
          parsed.push(...batch);
        }
        const known = new Set(tracks.map((track) => track.path + "|" + track.file.size + "|" + track.file.lastModified));
        parsed.forEach((track) => {
          const key = track.path + "|" + track.file.size + "|" + track.file.lastModified;
          if (known.has(key)) {
            URL.revokeObjectURL(track.url);
            if (track.cover) URL.revokeObjectURL(track.cover);
          } else tracks.push(track);
        });
        tracks.sort((a, b) => a.artist.localeCompare(b.artist) || a.album.localeCompare(b.album) || (a.trackNo || 9999) - (b.trackNo || 9999) || a.title.localeCompare(b.title));
        button.disabled = false;
        renderSidebar();
        renderPage();
        updatePlayer();
        notify(tracks.length + (tracks.length === 1 ? " música pronta para ouvir." : " músicas prontas para ouvir."));
      }
      $("#folder-input").addEventListener("change", (event) => {
        scanFiles(event.target.files);
        event.target.value = "";
      });
      $("#side-import").addEventListener("click", () => $("#folder-input").click());
      $("#page-content").addEventListener("click", (event) => {
        const action = event.target.closest("[data-action]");
        if (action) {
          if (action.dataset.action === "import") $("#folder-input").click();
          else if (action.dataset.action === "back") { currentDetail = null; updateNav(); renderPage(); }
          else if (action.dataset.action === "clear-search") { clearSearch(); updateNav(); renderPage(); $("#search-input").focus(); }
          return;
        }
        const navLink = event.target.closest("[data-page]");
        if (navLink) { setPage(navLink.dataset.page); return; }
        const playControl = event.target.closest("[data-play-type]");
        if (playControl) {
          event.stopPropagation();
          const type = playControl.dataset.playType;
          const key = playControl.dataset.playKey;
          const collection = type === "artist" ? artistsFrom(tracks) : albumsFrom(tracks);
          let albumRef;
          if (type === "album") {
            try { albumRef = JSON.parse(key); } catch { return; }
          }
          const item = type === "artist" ? collection.find((x) => x.name === key) : collection.find((x) => x.artist === albumRef[0] && x.name === albumRef[1]);
          if (item && item.tracks.length) playTrack(tracks.indexOf(item.tracks[0]));
          return;
        }
        const playList = event.target.closest("[data-play-list]");
        if (playList && currentDetail) { playTrack(tracks.indexOf(currentDetail.item.tracks[0])); return; }
        const albumFavorite = event.target.closest("[data-favorite-album]");
        if (albumFavorite && currentDetail) {
          currentDetail.item.tracks.forEach((track) => favorites.add(favoriteKey(track)));
          saveFavorites(); renderPage(); notify("Álbum adicionado às favoritas."); return;
        }
        const card = event.target.closest("[data-open]");
        if (card) { openDetail(card.dataset.open, card.dataset.key); return; }
        const row = event.target.closest("tr[data-track]");
        if (row) playTrack(Number(row.dataset.track));
      });
      $("#side-library").addEventListener("click", (event) => {
        const item = event.target.closest("[data-track]");
        if (item) playTrack(Number(item.dataset.track));
      });
      $("#nav").addEventListener("click", (event) => {
        const button = event.target.closest("[data-page]");
        if (button) setPage(button.dataset.page);
      });
      $("#search-input").addEventListener("input", (event) => {
        searchTerm = event.target.value;
        $("#search-clear").classList.toggle("visible", !!searchTerm.trim());
        if (searchTerm.trim()) {
          page = "library";
          currentDetail = null;
        }
        updateNav();
        renderPage();
      });
      $("#search-clear").addEventListener("click", () => {
        clearSearch();
        updateNav();
        renderPage();
        $("#search-input").focus();
      });
      $("#equalizer-open").addEventListener("click", () => setEqualizerPopover($("#eq-popover").hidden));
      $("#eq-close").addEventListener("click", () => setEqualizerPopover(false));
      $("#eq-power").addEventListener("click", () => setEqualizerEnabled(!eqSettings.enabled));
      $("#eq-reset").addEventListener("click", () => {
        eqSettings.preamp = 0;
        eqSettings.bass = 0;
        eqSettings.treble = 0;
        eqSettings.bands.fill(0);
        updateEqualizerControls();
        saveEqualizerSettings();
      });
      $("#eq-bands").addEventListener("input", (event) => {
        const slider = event.target.closest("[data-eq-slider]");
        if (slider) setEqualizerValue(slider.dataset.eqSlider, Number(slider.value), false);
      });
      $("#eq-bands").addEventListener("change", (event) => {
        if (event.target.closest("[data-eq-slider]")) saveEqualizerSettings();
      });
      bindEqualizerKnob("bass");
      bindEqualizerKnob("treble");
      updateEqualizerControls();
      document.addEventListener("pointerdown", (event) => {
        if (!$("#eq-popover").hidden && !$("#eq-popover").contains(event.target) && !$("#equalizer-open").contains(event.target)) {
          setEqualizerPopover(false);
        }
      });
      $("#theme-toggle").addEventListener("click", () => {
        const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
        document.documentElement.dataset.theme = nextTheme;
        localStorage.setItem("rubro-theme", nextTheme);
        $("#theme-toggle").innerHTML = nextTheme === "light" ? icons.moon : icons.sun;
        $("#theme-toggle").title = nextTheme === "light" ? "Mudar para tema escuro" : "Mudar para tema claro";
      });
      const initialTheme = localStorage.getItem("rubro-theme") || "dark";
      document.documentElement.dataset.theme = initialTheme;
      $("#theme-toggle").innerHTML = initialTheme === "light" ? icons.moon : icons.sun;
      $("#theme-toggle").title = initialTheme === "light" ? "Mudar para tema escuro" : "Mudar para tema claro";
      $("#clear-recent").addEventListener("click", clearRecentlyPlayed);
      $("#now-favorite").addEventListener("click", () => toggleFavorite(tracks[currentIndex]));
      $("#play-button").addEventListener("click", () => {
        if (currentIndex < 0) {
          if (tracks.length) playTrack(0);
          else notify("Importe sua pasta Música para começar.");
        } else if (audio.paused) audio.play().then(updatePlayer).catch(() => notify("Não foi possível reproduzir esta faixa."));
        else audio.pause();
      });
      $("#previous-button").addEventListener("click", () => {
        if (audio.currentTime > 3) { audio.currentTime = 0; return; }
        playNext(-1);
      });
      $("#next-button").addEventListener("click", () => playNext(1));
      $("#shuffle-button").addEventListener("click", () => {
        shuffle = !shuffle;
        $("#shuffle-button").classList.toggle("active", shuffle);
        notify(shuffle ? "Reprodução aleatória ativada." : "Reprodução aleatória desativada.");
      });
      $("#repeat-button").addEventListener("click", () => {
        repeat = !repeat;
        $("#repeat-button").classList.toggle("active", repeat);
        notify(repeat ? "Repetição ativada." : "Repetição desativada.");
      });
      $("#seek").addEventListener("input", (event) => {
        if (audio.duration) audio.currentTime = Number(event.target.value) / 1000 * audio.duration;
      });
      $("#volume").addEventListener("input", (event) => { audio.volume = Number(event.target.value); });
      audio.volume = 0.8;
      audio.addEventListener("timeupdate", updatePlayer);
      audio.addEventListener("durationchange", updatePlayer);
      audio.addEventListener("play", () => {
        updatePlayer();
        recordRecentlyPlayed(tracks[currentIndex]);
      });
      audio.addEventListener("pause", updatePlayer);
      audio.addEventListener("ended", () => playNext(1));
      audio.addEventListener("loadedmetadata", () => {
        if (currentIndex >= 0 && Number.isFinite(audio.duration)) tracks[currentIndex].duration = audio.duration;
        updatePlayer();
        renderPage();
      });
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !$("#eq-popover").hidden) { setEqualizerPopover(false); return; }
        if (event.target.matches("input, button, [role='slider']")) return;
        if (event.code === "Space") { event.preventDefault(); $("#play-button").click(); }
        if (event.code === "ArrowRight" && audio.duration) audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
        if (event.code === "ArrowLeft" && audio.duration) audio.currentTime = Math.max(0, audio.currentTime - 5);
      });
      renderPage();
      updatePlayer();
    })();
  