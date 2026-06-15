// flagcdn.com の国コード対応表
const FLAG_CODE = {
  'Argentina':'ar','Australia':'au','Belgium':'be','Brazil':'br',
  'Cameroon':'cm','Canada':'ca','Chile':'cl','Colombia':'co',
  'Costa Rica':'cr','Croatia':'hr','Denmark':'dk','Ecuador':'ec',
  'Egypt':'eg','England':'gb-eng','France':'fr','Germany':'de',
  'Ghana':'gh','Iran':'ir','Japan':'jp','Mexico':'mx',
  'Morocco':'ma','Netherlands':'nl','Nigeria':'ng','Panama':'pa',
  'Peru':'pe','Poland':'pl','Portugal':'pt','Qatar':'qa',
  'Saudi Arabia':'sa','Senegal':'sn','Serbia':'rs','Slovenia':'si',
  'South Korea':'kr','Spain':'es','Switzerland':'ch','Tunisia':'tn',
  'United States':'us','Uruguay':'uy','Wales':'gb-wls','New Zealand':'nz',
  'Indonesia':'id','Honduras':'hn','Guatemala':'gt','Venezuela':'ve',
  'Bolivia':'bo','Paraguay':'py','Algeria':'dz','South Africa':'za',
  'Mali':'ml','DR Congo':'cd','Angola':'ao','Côte d\'Ivoire':'ci','Ivory Coast':'ci',
  'Ukraine':'ua','Turkey':'tr','Greece':'gr','Czech Republic':'cz','Czechia':'cz',
  'Slovakia':'sk','Austria':'at','Hungary':'hu','Scotland':'gb-sct',
  'Iraq':'iq','Uzbekistan':'uz','Thailand':'th','China PR':'cn',
  'Cuba':'cu','Jamaica':'jm','Trinidad and Tobago':'tt',
  'Kenya':'ke','Tanzania':'tz','Zambia':'zm','Zimbabwe':'zw',
  'Libya':'ly','Sudan':'sd','Ethiopia':'et',
  'El Salvador':'sv','Nicaragua':'ni',
  'United Arab Emirates':'ae','Bahrain':'bh','Kuwait':'kw','Oman':'om',
  'New Caledonia':'nc','Fiji':'fj','Vanuatu':'vu',
  'Bosnia and Herzegovina':'ba','Bosnia-Herzegovina':'ba',
  'Haiti':'ht','Benin':'bj','Comoros':'km','Tanzania':'tz',
  'Namibia':'na','Rwanda':'rw','Equatorial Guinea':'gq',
  'Cape Verde':'cv','Mauritania':'mr','Guinea':'gn',
  'Kyrgyzstan':'kg','Tajikistan':'tj','Lebanon':'lb','Syria':'sy',
  'Palestine':'ps','Jordan':'jo','Yemen':'ye',
  'Myanmar':'mm','Vietnam':'vn','Laos':'la','Cambodia':'kh',
  'Philippines':'ph','Malaysia':'my','Singapore':'sg',
  'Puerto Rico':'pr','Suriname':'sr','Guyana':'gy',
  'Curaçao':'cw','Sweden':'se','Cape Verde Islands':'cv','Cape Verde':'cv',
  'Norway':'no','Congo DR':'cd','Democratic Republic of Congo':'cd',
  'Congo':'cg','Guinea-Bissau':'gw','Sierra Leone':'sl','Togo':'tg','Burkina Faso':'bf',
  'Kosovo':'xk','North Macedonia':'mk','Albania':'al',
  'Montenegro':'me','Bosnia':'ba','Georgia':'ge','Armenia':'am',
  'Azerbaijan':'az','Moldova':'md','Belarus':'by','Lithuania':'lt',
  'Latvia':'lv','Estonia':'ee',
};

// 日本語チーム名
const JA_NAME = {
  'Argentina':'アルゼンチン','Australia':'オーストラリア','Belgium':'ベルギー','Brazil':'ブラジル',
  'Cameroon':'カメルーン','Canada':'カナダ','Chile':'チリ','Colombia':'コロンビア',
  'Costa Rica':'コスタリカ','Croatia':'クロアチア','Denmark':'デンマーク','Ecuador':'エクアドル',
  'Egypt':'エジプト','England':'イングランド','France':'フランス','Germany':'ドイツ',
  'Ghana':'ガーナ','Iran':'イラン','Japan':'日本','Mexico':'メキシコ',
  'Morocco':'モロッコ','Netherlands':'オランダ','Nigeria':'ナイジェリア','Panama':'パナマ',
  'Peru':'ペルー','Poland':'ポーランド','Portugal':'ポルトガル','Qatar':'カタール',
  'Saudi Arabia':'サウジアラビア','Senegal':'セネガル','Serbia':'セルビア','Slovenia':'スロベニア',
  'South Korea':'韓国','Spain':'スペイン','Switzerland':'スイス','Tunisia':'チュニジア',
  'United States':'アメリカ','Uruguay':'ウルグアイ','Wales':'ウェールズ','New Zealand':'ニュージーランド',
  'Indonesia':'インドネシア','Honduras':'ホンジュラス','Guatemala':'グアテマラ','Venezuela':'ベネズエラ',
  'Bolivia':'ボリビア','Paraguay':'パラグアイ','Algeria':'アルジェリア','South Africa':'南アフリカ',
  'Mali':'マリ','DR Congo':'コンゴ民主','Angola':'アンゴラ','Ivory Coast':'コートジボワール',
  "Côte d'Ivoire":'コートジボワール',
  'Ukraine':'ウクライナ','Turkey':'トルコ','Greece':'ギリシャ',
  'Czech Republic':'チェコ','Czechia':'チェコ','Slovakia':'スロバキア',
  'Austria':'オーストリア','Hungary':'ハンガリー','Scotland':'スコットランド',
  'Iraq':'イラク','Uzbekistan':'ウズベキスタン','Thailand':'タイ','China PR':'中国',
  'Cuba':'キューバ','Jamaica':'ジャマイカ','Trinidad and Tobago':'T&T',
  'Bosnia and Herzegovina':'ボスニア','Bosnia-Herzegovina':'ボスニア',
  'Haiti':'ハイチ','Benin':'ベナン','Comoros':'コモロ','Namibia':'ナミビア',
  'Rwanda':'ルワンダ','Equatorial Guinea':'赤道ギニア','Cape Verde':'カーボベルデ',
  'Mauritania':'モーリタニア','Guinea':'ギニア',
  'Kyrgyzstan':'キルギス','Tajikistan':'タジキスタン','Lebanon':'レバノン',
  'Syria':'シリア','Palestine':'パレスチナ','Jordan':'ヨルダン',
  'Vietnam':'ベトナム','Philippines':'フィリピン','Malaysia':'マレーシア',
  'Puerto Rico':'プエルトリコ','Suriname':'スリナム','Guyana':'ガイアナ',
  'Curaçao':'キュラソー','Sweden':'スウェーデン','Cape Verde Islands':'カーボベルデ',
  'Norway':'ノルウェー','Congo DR':'コンゴ民主','Democratic Republic of Congo':'コンゴ民主',
  'Congo':'コンゴ共和国','Guinea-Bissau':'ギニアビサウ','Sierra Leone':'シエラレオネ',
  'Togo':'トーゴ','Burkina Faso':'ブルキナファソ',
  'Kosovo':'コソボ','North Macedonia':'北マケドニア','Albania':'アルバニア',
  'Montenegro':'モンテネグロ','Georgia':'ジョージア','Armenia':'アルメニア',
  'Azerbaijan':'アゼルバイジャン','Moldova':'モルドバ','Belarus':'ベラルーシ',
  'Lithuania':'リトアニア','Latvia':'ラトビア','Estonia':'エストニア',
};

// 正規化済みルックアップテーブル（特殊文字・大小文字の違いを吸収）
function _buildNorm(map) {
  const n = {};
  Object.entries(map).forEach(([k, v]) => {
    n[k.toLowerCase().normalize('NFC')] = v;
    n[k.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')] = v;
  });
  return n;
}
const _FLAG_NORM = _buildNorm(FLAG_CODE);
const _JA_NORM   = _buildNorm(JA_NAME);

function getFlag(name) {
  const code = FLAG_CODE[name]
    || _FLAG_NORM[name.toLowerCase().normalize('NFC')]
    || _FLAG_NORM[name.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')];
  if (!code) return `<span style="font-size:1.1rem">🏳</span>`;
  return `<img src="https://flagcdn.com/32x24/${code}.png" width="32" height="24" style="border-radius:2px;object-fit:cover;vertical-align:middle" alt="${name}">`;
}

function getJaName(name) {
  return JA_NAME[name]
    || _JA_NORM[name.toLowerCase().normalize('NFC')]
    || _JA_NORM[name.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')]
    || name;
}

let allMatches = [];
let currentFilter = 'all';

let matchDetails = null;
let standingsCache = null;

async function getStandingsMap() {
  if (standingsCache) return standingsCache;
  try {
    const res = await fetch('data/standings.json?t=' + Date.now());
    if (!res.ok) return {};
    const data = await res.json();
    const map = {};
    (data.standings || []).forEach(group => {
      (group.table || []).forEach(row => {
        map[row.team.name] = { ...row, groupName: group.group };
      });
    });
    standingsCache = map;
  } catch(e) { standingsCache = {}; }
  return standingsCache;
}

async function apiFetch(path) {
  const fileMap = {
    '/competitions/WC/matches': 'data/matches.json',
    '/competitions/WC/standings': 'data/standings.json',
  };
  const key = Object.keys(fileMap).find(k => path.startsWith(k));
  if (key) {
    const res = await fetch(fileMap[key] + '?t=' + Date.now());
    if (res.ok) return res.json();
  }
  throw new Error('データファイルが見つかりません');
}

async function loadMatchDetails() {
  if (matchDetails) return matchDetails;
  try {
    const res = await fetch('data/match_details.json?t=' + Date.now());
    if (res.ok) matchDetails = await res.json();
  } catch(e) {}
  return matchDetails || {};
}

async function fetchMatches() {
  try {
    const data = await apiFetch(`/competitions/${CONFIG.COMPETITION}/matches?limit=100`);
    allMatches = data.matches || [];
    renderMatches(currentFilter);
    document.getElementById('matchLastUpdated').textContent =
      '最終更新: ' + new Date().toLocaleString('ja-JP');
  } catch (e) {
    document.getElementById('matchesContainer').innerHTML =
      `<div class="error-box">データ取得エラー: ${e.message}<br>しばらくしてから再読み込みしてください。</div>`;
  }
}

async function fetchStandings() {
  try {
    const data = await apiFetch(`/competitions/${CONFIG.COMPETITION}/standings`);
    renderStandings(data.standings || []);
    document.getElementById('standingsLastUpdated').textContent =
      '最終更新: ' + new Date().toLocaleString('ja-JP');
  } catch (e) {
    document.getElementById('standingsContainer').innerHTML =
      `<div class="error-box">データ取得エラー: ${e.message}</div>`;
  }
}

function filterMatches(filter, btn) {
  currentFilter = filter;
  document.querySelectorAll('#matchFilterTabs .tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderMatches(filter);
}

function filterByTeam(name) {
  // 順位表→試合タブに切り替えてその国の試合を表示
  showTab('matches');
  document.querySelectorAll('#matchFilterTabs .tab-btn').forEach(b => b.classList.remove('active'));
  currentFilter = 'country:' + name;
  document.getElementById('countrySearch').value = getJaName(name);
  renderMatches('country:' + name);
  // ページ上部にスクロール
  document.getElementById('tab-matches').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function toJSTDate(utcStr) {
  return new Date(utcStr).toLocaleDateString('sv-SE', { timeZone: 'Asia/Tokyo' }); // "YYYY-MM-DD"
}

function renderMatches(filter) {
  const today = toJSTDate(new Date().toISOString());
  let filtered = allMatches;

  if (filter === 'LIVE') {
    filtered = allMatches.filter(m => m.status === 'IN_PLAY' || m.status === 'PAUSED');
  } else if (filter === 'today') {
    filtered = allMatches.filter(m => toJSTDate(m.utcDate) === today);
  } else if (filter === 'japan') {
    filtered = allMatches.filter(m =>
      m.homeTeam.name === 'Japan' || m.awayTeam.name === 'Japan'
    );
  } else if (filter.startsWith('country:')) {
    const q = filter.slice(8).toLowerCase();
    filtered = allMatches.filter(m => {
      const h = m.homeTeam.name || '';
      const a = m.awayTeam.name || '';
      return h.toLowerCase().includes(q) || a.toLowerCase().includes(q) ||
             getJaName(h).includes(q) || getJaName(a).includes(q);
    });
  }

  if (filtered.length === 0) {
    document.getElementById('matchesContainer').innerHTML =
      `<div class="loading" style="padding:30px">該当する試合がありません</div>`;
    return;
  }

  // Group by date
  const byDate = {};
  filtered.forEach(m => {
    const d = toJSTDate(m.utcDate);
    if (!byDate[d]) byDate[d] = [];
    byDate[d].push(m);
  });

  const todayUTC = new Date().toISOString().slice(0, 10);
  let html = '';
  Object.keys(byDate).sort().forEach(date => {
    const label = formatDateLabel(date);
    const isToday = date === todayUTC;
    html += `<div class="section-title" ${isToday ? 'id="today-section"' : ''}>📅 ${label}${isToday ? ' <span style="background:var(--primary);color:#fff;font-size:0.65rem;padding:2px 7px;border-radius:4px;margin-left:6px;font-weight:700">TODAY</span>' : ''}</div>`;
    byDate[date].forEach(m => { html += matchCardHTML(m); });
  });

  document.getElementById('matchesContainer').innerHTML = html;

  // 全試合表示の時だけ今日にスクロール（ナビ+タブバー分オフセット）
  if (filter === 'all') {
    requestAnimationFrame(() => {
      const el = document.getElementById('today-section');
      if (el) {
        const offset = el.getBoundingClientRect().top + window.scrollY - 110;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    });
  }
}

// 試合詳細データ保持用
const matchDataMap = {};

function matchCardHTML(m) {
  const home = m.homeTeam.name || m.homeTeam.shortName || '?';
  const away = m.awayTeam.name || m.awayTeam.shortName || '?';
  const hScore = m.score?.fullTime?.home ?? '-';
  const aScore = m.score?.fullTime?.away ?? '-';
  const isLive = m.status === 'IN_PLAY' || m.status === 'PAUSED';
  const isFinished = m.status === 'FINISHED';

  let statusLabel = '';
  let statusClass = '';
  if (isLive) { statusLabel = '● LIVE'; statusClass = 'status-live'; }
  else if (isFinished) { statusLabel = '終了'; statusClass = 'status-finished'; }
  else { statusLabel = formatTime(m.utcDate); statusClass = 'status-scheduled'; }

  const score = isFinished || isLive ? `${hScore} - ${aScore}` : 'vs';
  const stage = m.stage ? stageLabel(m.stage) : '';
  const group = m.group ? ` | ${m.group.replace('GROUP_', 'グループ ')}` : '';

  const hasDetails = isFinished || isLive;
  matchDataMap[m.id] = m;

  return `
    <div class="match-card ${isLive ? 'live' : ''} ${hasDetails ? 'expandable' : ''}" ${hasDetails ? `onclick="toggleMatchDetail(${m.id})"` : ''} id="card-${m.id}">
      <div class="team home">
        <span class="team-name">${getJaName(home)}</span>
        <span class="team-flag">${getFlag(home)}</span>
      </div>
      <div class="match-center">
        <div class="match-score">${score}</div>
        <span class="match-status ${statusClass}">${statusLabel}</span>
        <div class="match-info">${stage}${group}</div>
        ${hasDetails ? '<div class="detail-hint">▼ 詳細</div>' : ''}
      </div>
      <div class="team away">
        <span class="team-flag">${getFlag(away)}</span>
        <span class="team-name">${getJaName(away)}</span>
      </div>
    </div>
    <div class="match-detail" id="detail-${m.id}" style="display:none"></div>`;
}

async function toggleMatchDetail(id) {
  const detail = document.getElementById(`detail-${id}`);
  const card = document.getElementById(`card-${id}`);
  const hint = card.querySelector('.detail-hint');
  if (detail.style.display === 'none') {
    detail.innerHTML = '<div style="padding:10px 20px;color:var(--muted);font-size:0.78rem">読込中...</div>';
    detail.style.display = 'block';
    if (hint) hint.textContent = '▲ 閉じる';
    card.classList.add('expanded');
    const [details, standings] = await Promise.all([loadMatchDetails(), getStandingsMap()]);
    detail.innerHTML = buildDetailHTML(matchDataMap[id], details[String(id)] || {}, standings);
  } else {
    detail.style.display = 'none';
    if (hint) hint.textContent = '▼ 詳細';
    card.classList.remove('expanded');
  }
}

function buildDetailHTML(m, detail, standings) {
  const home = m.homeTeam.name;
  const away = m.awayTeam.name;
  const goals = detail.goals || [];
  const bookings = detail.bookings || [];

  // ── チーム情報（順位・成績）──
  function teamStatsHTML(name, align) {
    const s = standings[name];
    if (!s) return '';
    const gd = s.goalDifference > 0 ? `+${s.goalDifference}` : String(s.goalDifference);
    const right = align === 'right';
    return `<div class="detail-team-stats ${right ? 'detail-team-stats-right' : ''}">
      <div class="detail-team-rank">${s.groupName?.replace('GROUP_','グループ') || ''} ${s.position}位</div>
      <div class="detail-team-record">${s.points}pt &nbsp;${s.won}勝${s.draw}分${s.lost}敗&nbsp; 得失${gd}</div>
    </div>`;
  }

  const statsHTML = `
    <div class="detail-team-row">
      ${teamStatsHTML(home, 'left')}
      <div class="detail-team-center"><span class="detail-label-inline">現在の成績</span></div>
      ${teamStatsHTML(away, 'right')}
    </div>`;

  // ── スコア内訳 ──
  const htHome = m.score?.halfTime?.home;
  const htAway = m.score?.halfTime?.away;
  const ftHome = m.score?.fullTime?.home;
  const ftAway = m.score?.fullTime?.away;
  const dur = m.score?.duration;
  const durLabel = dur === 'EXTRA_TIME' ? '延長戦' : dur === 'PENALTY_SHOOTOUT' ? 'PK戦' : null;
  const scoreHTML = `
    <div class="detail-score-row">
      <div class="detail-score-item">
        <span class="detail-label-inline">前半</span>
        <span class="detail-score-val">${htHome ?? '-'} - ${htAway ?? '-'}</span>
      </div>
      <div class="detail-score-item">
        <span class="detail-label-inline">後半</span>
        <span class="detail-score-val">${(htHome != null && ftHome != null) ? (ftHome-htHome)+' - '+(ftAway-htAway) : '- - -'}</span>
      </div>
      ${durLabel ? `<div class="detail-score-item"><span class="detail-label-inline">決着</span><span class="detail-score-val">${durLabel}</span></div>` : ''}
    </div>`;

  // ── ゴール記録 ──
  let goalsHTML = '';
  if (goals.length > 0) {
    const homeGoals = goals.filter(g => {
      const t = g.team?.name || g.team || '';
      return t.toLowerCase().includes(home.toLowerCase().split(' ')[0]);
    });
    const awayGoals = goals.filter(g => {
      const t = g.team?.name || g.team || '';
      return t.toLowerCase().includes(away.toLowerCase().split(' ')[0]);
    });
    const goalRow = (g, reverse) => {
      const min = g.minute || '';
      const name = g.scorer?.name || g.scorer || g.text?.split('\n')[0] || '?';
      const icon = g.type === 'OWN' ? '🔴' : g.type === 'PENALTY' ? '🎯' : '⚽';
      return `<div class="goal-row ${reverse ? 'goal-row-away' : ''}">${icon} <b>${name}</b> <span class="goal-min">${min}</span></div>`;
    };
    goalsHTML = `
      <div class="detail-goals-block">
        <div class="detail-goals-col">${homeGoals.map(g => goalRow(g,false)).join('') || '<span class="no-event">-</span>'}</div>
        <div class="detail-goals-center"><span class="detail-label-inline">⚽ ゴール</span></div>
        <div class="detail-goals-col detail-goals-right">${awayGoals.map(g => goalRow(g,true)).join('') || '<span class="no-event">-</span>'}</div>
      </div>`;
  }

  // ── カード ──
  let cardsHTML = '';
  if (bookings.length > 0) {
    const homeCards = bookings.filter(b => (b.team?.name||b.team||'').toLowerCase().includes(home.toLowerCase().split(' ')[0]));
    const awayCards = bookings.filter(b => (b.team?.name||b.team||'').toLowerCase().includes(away.toLowerCase().split(' ')[0]));
    const cardRow = (b, rev) => {
      const icon = b.card === 'RED_CARD' || b.card === 'YELLOW_RED_CARD' ? '🟥' : '🟨';
      const name = b.player?.name || b.player || b.text || '?';
      const min = b.minute || '';
      return `<div class="goal-row ${rev ? 'goal-row-away' : ''}">${icon} ${name} <span class="goal-min">${min}</span></div>`;
    };
    if (homeCards.length || awayCards.length) {
      cardsHTML = `
        <div class="detail-goals-block">
          <div class="detail-goals-col">${homeCards.map(b=>cardRow(b,false)).join('')}</div>
          <div class="detail-goals-center"><span class="detail-label-inline">🟨 カード</span></div>
          <div class="detail-goals-col detail-goals-right">${awayCards.map(b=>cardRow(b,true)).join('')}</div>
        </div>`;
    }
  }

  // ── 主審 ──
  const refs = (m.referees || []).filter(r => r.type === 'REFEREE');
  const refHTML = refs.length > 0
    ? `<div class="detail-ref">🏁 主審: ${refs[0].name}（${refs[0].nationality}）</div>` : '';

  return `<div class="match-detail-inner">
    ${statsHTML}
    <div class="detail-divider"></div>
    ${scoreHTML}
    ${goals.length > 0 ? `<div class="detail-divider"></div>${goalsHTML}` : ''}
    ${bookings.length > 0 ? cardsHTML : ''}
    ${refHTML}
  </div>`;
}


function renderStandings(standings) {
  if (standings.length === 0) {
    document.getElementById('standingsContainer').innerHTML =
      '<div class="loading">順位表データなし（グループステージ開始前）</div>';
    return;
  }

  let html = '<div class="group-grid">';
  standings.forEach(group => {
    const name = group.group ? group.group.replace('GROUP_', 'グループ ') : group.stage;
    html += `<div class="group-card">
      <div class="group-header">${name}</div>
      <div class="table-wrap" style="padding: 0 10px">
      <table style="table-layout:fixed;width:100%">
        <colgroup>
          <col style="width:18px">
          <col style="width:auto">
          <col style="width:20px">
          <col style="width:20px">
          <col style="width:20px">
          <col style="width:20px">
          <col style="width:36px">
          <col style="width:32px">
        </colgroup>
        <tr>
          <td class="sh">#</td>
          <td class="sh">チーム</td>
          <td class="sh" style="text-align:center">試</td>
          <td class="sh" style="text-align:center">勝</td>
          <td class="sh" style="text-align:center">分</td>
          <td class="sh" style="text-align:center">負</td>
          <td class="sh col-gd" style="text-align:center">得失点</td>
          <td class="sh" style="text-align:center">勝点</td>
        </tr>`;
    group.table.forEach(row => {
      const name = row.team.name;
      const gd = row.goalDifference > 0 ? `+${row.goalDifference}` : String(row.goalDifference);
      const gdColor = row.goalDifference > 0 ? '#16a34a' : row.goalDifference < 0 ? 'var(--live)' : 'var(--muted)';
      const gdStr = `<span style="color:${gdColor};font-weight:700">${gd}</span>`;
      html += `<tr>
        <td class="rank">${row.position}</td>
        <td><div class="g-team g-team-link" onclick="filterByTeam('${name.replace(/'/g,"\\'")}')">
          ${getFlag(name)}<span>${getJaName(name)}</span>
        </div></td>
        <td class="sc">${row.playedGames}</td>
        <td class="sc">${row.won}</td>
        <td class="sc">${row.draw}</td>
        <td class="sc">${row.lost}</td>
        <td class="sc col-gd">${gdStr}</td>
        <td class="g-pts" style="text-align:center">${row.points}</td>
      </tr>`;
    });
    html += '</table></div></div>';
  });
  html += '</div>';
  document.getElementById('standingsContainer').innerHTML = html;
}

function showTab(tab) {
  document.getElementById('tab-matches').style.display = tab === 'matches' ? '' : 'none';
  document.getElementById('tab-standings').style.display = tab === 'standings' ? '' : 'none';
  document.querySelectorAll('#mainTabs .tab-btn').forEach((b, i) => {
    b.classList.toggle('active', (i === 0 && tab === 'matches') || (i === 1 && tab === 'standings'));
  });
  if (tab === 'standings') fetchStandings();
}

function formatDateLabel(dateStr) {
  const d = new Date(dateStr);
  const days = ['日', '月', '火', '水', '木', '金', '土'];
  return `${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日（${days[d.getDay()]}）`;
}

function formatTime(utcStr) {
  const d = new Date(utcStr);
  const todayJST = new Date().toLocaleDateString('ja-JP', { timeZone: 'Asia/Tokyo' });
  const matchDayJST = d.toLocaleDateString('ja-JP', { timeZone: 'Asia/Tokyo' });
  const timeStr = d.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Tokyo' });
  if (matchDayJST !== todayJST) {
    const m = d.toLocaleDateString('ja-JP', { month: 'numeric', day: 'numeric', timeZone: 'Asia/Tokyo' });
    return `${m} ${timeStr} JST`;
  }
  return timeStr + ' JST';
}

function stageLabel(stage) {
  const map = {
    'GROUP_STAGE': 'グループステージ',
    'LAST_16': 'ラウンド16',
    'QUARTER_FINALS': '準々決勝',
    'SEMI_FINALS': '準決勝',
    'THIRD_PLACE': '3位決定戦',
    'FINAL': '決勝',
  };
  return map[stage] || stage;
}

// ── 国検索 ──
function getTeamsInMatches() {
  const teams = new Set();
  allMatches.forEach(m => {
    if (m.homeTeam.name) teams.add(m.homeTeam.name);
    if (m.awayTeam.name) teams.add(m.awayTeam.name);
  });
  return Array.from(teams).sort((a, b) => getJaName(a).localeCompare(getJaName(b), 'ja'));
}

function onSearchInput(val) {
  document.querySelectorAll('#matchFilterTabs .tab-btn').forEach(b => b.classList.remove('active'));
  if (!val.trim()) { filterMatches('all'); showSuggestions(); return; }
  const teams = getTeamsInMatches().filter(t =>
    getJaName(t).includes(val) || t.toLowerCase().includes(val.toLowerCase())
  );
  renderSuggestions(teams);
  document.getElementById('countrySuggestions').style.display = 'block';
  // 入力中もリアルタイムで絞り込み
  currentFilter = 'country:' + val;
  renderMatches('country:' + val);
}

function showSuggestions() {
  const val = document.getElementById('countrySearch').value;
  const teams = val ? getTeamsInMatches().filter(t =>
    getJaName(t).includes(val) || t.toLowerCase().includes(val.toLowerCase())
  ) : getTeamsInMatches();
  renderSuggestions(teams);
  document.getElementById('countrySuggestions').style.display = 'block';
}

function hideSuggestions() {
  document.getElementById('countrySuggestions').style.display = 'none';
}

function renderSuggestions(teams) {
  const el = document.getElementById('countrySuggestions');
  if (teams.length === 0) { el.innerHTML = '<div style="padding:10px 14px;color:#999;font-size:0.83rem">見つかりません</div>'; return; }
  el.innerHTML = teams.map(t => `
    <div onclick="selectCountry('${t}')" style="padding:8px 14px;cursor:pointer;font-size:0.85rem;display:flex;align-items:center;gap:8px;transition:background .1s"
      onmouseover="this.style.background='#f0f4ff'" onmouseout="this.style.background=''">
      ${getFlag(t)} ${getJaName(t)}
    </div>`).join('');
}

function selectCountry(name) {
  document.getElementById('countrySearch').value = getJaName(name);
  document.getElementById('countrySuggestions').style.display = 'none';
  currentFilter = 'country:' + name;
  renderMatches('country:' + name);
}

// 初回取得 + 1分ごとに自動更新
fetchMatches();
setInterval(fetchMatches, 60000);
