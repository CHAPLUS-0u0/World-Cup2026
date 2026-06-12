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
  'Kosovo':'コソボ','North Macedonia':'北マケドニア','Albania':'アルバニア',
  'Montenegro':'モンテネグロ','Georgia':'ジョージア','Armenia':'アルメニア',
  'Azerbaijan':'アゼルバイジャン','Moldova':'モルドバ','Belarus':'ベラルーシ',
  'Lithuania':'リトアニア','Latvia':'ラトビア','Estonia':'エストニア',
};

function getFlag(name) {
  const code = FLAG_CODE[name];
  if (!code) return `<span style="font-size:1.1rem">🏳</span>`;
  return `<img src="https://flagcdn.com/32x24/${code}.png" width="32" height="24" style="border-radius:2px;object-fit:cover;vertical-align:middle" alt="${name}">`;
}

function getJaName(name) { return JA_NAME[name] || name; }

let allMatches = [];
let currentFilter = 'all';

async function apiFetch(path) {
  // GitHub Actionsが生成したローカルJSONを読む（CORSなし）
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

function filterMatches(filter) {
  currentFilter = filter;
  document.querySelectorAll('#matchFilterTabs .tab-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  renderMatches(filter);
}

function renderMatches(filter) {
  const today = new Date().toISOString().slice(0, 10);
  let filtered = allMatches;

  if (filter === 'LIVE') {
    filtered = allMatches.filter(m => m.status === 'IN_PLAY' || m.status === 'PAUSED');
  } else if (filter === 'today') {
    filtered = allMatches.filter(m => m.utcDate.slice(0, 10) === today);
  } else if (filter === 'japan') {
    filtered = allMatches.filter(m =>
      m.homeTeam.name === 'Japan' || m.awayTeam.name === 'Japan'
    );
  }

  if (filtered.length === 0) {
    document.getElementById('matchesContainer').innerHTML =
      `<div class="loading" style="padding:30px">該当する試合がありません</div>`;
    return;
  }

  // Group by date
  const byDate = {};
  filtered.forEach(m => {
    const d = m.utcDate.slice(0, 10);
    if (!byDate[d]) byDate[d] = [];
    byDate[d].push(m);
  });

  let html = '';
  Object.keys(byDate).sort().forEach(date => {
    const label = formatDateLabel(date);
    html += `<div class="section-title">📅 ${label}</div>`;
    byDate[date].forEach(m => { html += matchCardHTML(m); });
  });

  document.getElementById('matchesContainer').innerHTML = html;
}

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

  return `
    <div class="match-card ${isLive ? 'live' : ''}">
      <div class="team home">
        <span class="team-name">${getJaName(home)}</span>
        <span class="team-flag">${getFlag(home)}</span>
      </div>
      <div class="match-center">
        <div class="match-score">${score}</div>
        <span class="match-status ${statusClass}">${statusLabel}</span>
        <div class="match-info">${stage}${group}</div>
      </div>
      <div class="team away">
        <span class="team-flag">${getFlag(away)}</span>
        <span class="team-name">${getJaName(away)}</span>
      </div>
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
      <table>
        <tr>
          <td style="color:var(--muted);font-size:0.7rem">#</td>
          <td style="color:var(--muted);font-size:0.7rem">チーム</td>
          <td style="color:var(--muted);font-size:0.7rem;text-align:center">試</td>
          <td style="color:var(--muted);font-size:0.7rem;text-align:center">得</td>
          <td style="color:var(--muted);font-size:0.7rem;text-align:center">失</td>
          <td style="color:var(--muted);font-size:0.7rem;text-align:center">勝点</td>
        </tr>`;
    group.table.forEach(row => {
      const name = row.team.name;
      html += `<tr>
        <td class="rank">${row.position}</td>
        <td><div class="g-team">${getFlag(name)}<span>${getJaName(name)}</span></div></td>
        <td style="text-align:center">${row.playedGames}</td>
        <td style="text-align:center">${row.goalsFor}</td>
        <td style="text-align:center">${row.goalsAgainst}</td>
        <td class="g-pts" style="text-align:center">${row.points}</td>
      </tr>`;
    });
    html += '</table></div>';
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
  return d.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Tokyo' }) + ' JST';
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

// 初回取得 + 1分ごとに自動更新
fetchMatches();
setInterval(fetchMatches, 60000);
