/* =============================================
   D-DAY COUNTER
   ============================================= */
(function () {
  const target = new Date('2026-03-05T00:00:00');
  const el = document.getElementById('ddayNumber');
  if (!el) return;

  function update() {
    const now = new Date();
    const diff = Math.ceil((target - now) / (1000 * 60 * 60 * 24));
    if (diff > 0) {
      el.textContent = 'D-' + diff;
    } else if (diff === 0) {
      el.textContent = 'D-Day';
    } else {
      el.textContent = 'D+' + Math.abs(diff);
    }
  }

  update();
})();

/* =============================================
   MODAL OPEN / CLOSE
   ============================================= */
function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function closeModalOutside(event, id) {
  if (event.target === event.currentTarget) {
    closeModal(id);
  }
}

/* ESC key closes any open modal */
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.active').forEach(function (m) {
      m.classList.remove('active');
    });
    document.body.style.overflow = '';
  }
});

/* =============================================
   조 편성 데이터
   ============================================= */
var GROUP_DATA = [
  {
    name: '1조', color: '#16a34a',
    members: [
      { name: '황태규', dept: '전력정책부문', rank: '상무' },
      { name: '오명규', dept: 'Biomass 계전팀', rank: '팀장' },
      { name: '박창준', dept: '인사팀', rank: '매니저' },
      { name: '이경완', dept: '안전팀', rank: '매니저' },
      { name: '유돈근', dept: '발전기획팀', rank: '매니저' },
      { name: '곽동욱', dept: 'Biomass 발전부문 O/H', rank: '매니저' },
      { name: '임현규', dept: 'LNG전기팀', rank: '매니저' },
      { name: '권영지', dept: '준법지원팀', rank: '팀장' }
    ]
  },
  {
    name: '2조', color: '#2563eb',
    members: [
      { name: '김석환', dept: 'GS EPS', rank: '사장' },
      { name: '한정우', dept: 'IT보안팀', rank: '팀장' },
      { name: '최유진', dept: '전력정책팀', rank: '매니저' },
      { name: '최수현', dept: '열병합건설팀', rank: '매니저' },
      { name: '김휴민', dept: '지역협력팀', rank: '매니저' },
      { name: '안태현', dept: 'Biomass 계전팀', rank: '매니저' },
      { name: '박시현', dept: 'LNG제어팀', rank: '매니저' },
      { name: '백재은', dept: '사업지원팀', rank: '매니저' }
    ]
  },
  {
    name: '3조', color: '#9333ea',
    members: [
      { name: '김응환', dept: 'CSO', rank: '전무' },
      { name: '허재영', dept: '재무팀', rank: '팀장' },
      { name: '임지혁', dept: 'LNG팀', rank: '매니저' },
      { name: '김현욱', dept: '발전기획팀', rank: '매니저' },
      { name: '김태윤', dept: 'DAX팀', rank: '매니저' },
      { name: '이혁우', dept: 'LNG제어팀', rank: '매니저' },
      { name: '박인후', dept: 'LNG기계팀', rank: '매니저' },
      { name: '박수빈', dept: '준법지원팀', rank: '매니저' }
    ]
  },
  {
    name: '4조', color: '#ea580c',
    members: [
      { name: '하동원', dept: '연료기획부문', rank: '상무' },
      { name: '심규봉', dept: 'LNG전기팀', rank: '팀장' },
      { name: '문건일', dept: '재무팀', rank: '매니저' },
      { name: '최기백', dept: '열병합건설팀', rank: '매니저' },
      { name: '원준일', dept: 'DAX팀', rank: '매니저' },
      { name: '김일환', dept: 'LNG 발전2팀', rank: '매니저' },
      { name: '배지훈', dept: 'LNG전기팀', rank: '매니저' },
      { name: '임지훈', dept: '환경팀', rank: '매니저' }
    ]
  },
  {
    name: '5조', color: '#0891b2',
    members: [
      { name: '박재홍', dept: '경영지원부문', rank: '상무' },
      { name: '박종훈', dept: 'LNG제어팀', rank: '팀장' },
      { name: '조한솔', dept: '전력정책팀', rank: '매니저' },
      { name: '이병남', dept: '구매팀', rank: '매니저' },
      { name: '도용두', dept: '재무팀', rank: '매니저' },
      { name: '남경훈', dept: 'LNG 발전2팀', rank: '매니저' },
      { name: '남영규', dept: 'LNG전기팀', rank: '매니저' },
      { name: '류경환', dept: '사업지원팀', rank: '매니저' }
    ]
  },
  {
    name: '6조', color: '#d97706',
    members: [
      { name: '조석기', dept: 'LNG발전부문', rank: '상무' },
      { name: '장광수', dept: '인사팀', rank: '팀장' },
      { name: '윤수현', dept: '재무팀', rank: '매니저' },
      { name: '이영일', dept: '인사팀OH', rank: '매니저' },
      { name: '유용상', dept: 'Biomass 기계팀', rank: '매니저' },
      { name: '류다빈', dept: 'DAX팀', rank: '매니저' },
      { name: '조치연', dept: '사업지원팀', rank: '매니저' },
      { name: '김종우', dept: '환경팀', rank: '매니저' }
    ]
  },
  {
    name: '7조', color: '#be185d',
    members: [
      { name: '정상규', dept: 'Biomass발전부문', rank: '상무' },
      { name: '이종철', dept: '시장운영팀', rank: '팀장' },
      { name: '박요민', dept: '구매팀', rank: '매니저' },
      { name: '조윤경', dept: '인사팀', rank: '매니저' },
      { name: '김호진', dept: '안전팀', rank: '매니저' },
      { name: '신경일', dept: 'DAX팀', rank: '매니저' },
      { name: '백재현', dept: '환경팀', rank: '매니저' },
      { name: '황정필', dept: '연료설비팀', rank: '매니저' }
    ]
  },
  {
    name: '8조', color: '#0f766e',
    members: [
      { name: '김호석', dept: 'DX추진실', rank: '실장' },
      { name: '안상효', dept: '기후환경팀', rank: '팀장' },
      { name: '김성문', dept: 'Biomass 기계팀', rank: '팀장' },
      { name: '이철웅', dept: '재무팀', rank: '매니저' },
      { name: '장동현', dept: '안전팀', rank: '매니저' },
      { name: '박대인', dept: 'DAX팀', rank: '매니저' },
      { name: '강필성', dept: 'Biomass 계전팀', rank: '매니저' },
      { name: '김행찬', dept: 'LNG제어팀', rank: '매니저' },
      { name: '김시곤', dept: '연료설비팀', rank: '매니저' }
    ]
  },
  {
    name: '9조', color: '#7c3aed',
    members: [
      { name: '김명석', dept: '발전사업본부', rank: '상무보' },
      { name: '홍현식', dept: 'LNG팀', rank: '팀장' },
      { name: '한규연', dept: '구매팀', rank: '매니저' },
      { name: '정환담', dept: '안전팀', rank: '매니저' },
      { name: '박종민', dept: 'LNG기계팀', rank: '매니저' },
      { name: '김용훈', dept: '열병합건설팀', rank: '매니저' },
      { name: '변강보', dept: 'Biomass 계전팀', rank: '매니저' },
      { name: '양은상', dept: '준법지원팀', rank: '매니저' },
      { name: '홍성호', dept: '환경팀', rank: '매니저' }
    ]
  },
  {
    name: '10조', color: '#1d4ed8',
    members: [
      { name: '이정남', dept: '대외협력담당', rank: '상무보' },
      { name: '현은수', dept: 'LNG발전1팀', rank: '팀장' },
      { name: '강승련', dept: 'LNG팀', rank: '매니저' },
      { name: '이채현', dept: '재무팀', rank: '매니저' },
      { name: '임정웅', dept: 'Biomass 기계팀', rank: '매니저' },
      { name: '김현익', dept: 'LNG제어팀', rank: '매니저' },
      { name: '박준규', dept: 'LNG전기팀', rank: '매니저' },
      { name: '장주성', dept: '연료설비팀', rank: '매니저' },
      { name: '한상범', dept: '환경팀', rank: '매니저' }
    ]
  },
  {
    name: '11조', color: '#b45309',
    members: [
      { name: '홍세화', dept: '안전환경실', rank: '실장' },
      { name: '윤종식', dept: '발전기획팀', rank: '팀장' },
      { name: '김탁용', dept: 'DAX팀', rank: '팀장' },
      { name: '정상윤', dept: '구매팀', rank: '매니저' },
      { name: '조현호', dept: '재무팀', rank: '매니저' },
      { name: '이철수', dept: '인사팀OH', rank: '매니저' },
      { name: '박종찬', dept: 'Biomass 계전팀', rank: '매니저' },
      { name: '임병준', dept: 'LNG제어팀', rank: '매니저' },
      { name: '윤성환', dept: 'DAX팀', rank: '매니저' }
    ]
  },
  {
    name: '12조', color: '#0369a1',
    members: [
      { name: '윤호현', dept: '전력정책팀', rank: '실장' },
      { name: '김경훈', dept: '안전팀', rank: '팀장' },
      { name: '고영선', dept: 'LNG팀', rank: '매니저' },
      { name: '김지혜', dept: '재무팀', rank: '매니저' },
      { name: '신현일', dept: 'LNG전기팀', rank: '매니저' },
      { name: '김남희', dept: 'Biomass 계전팀', rank: '매니저' },
      { name: '정희승', dept: 'LNG기계팀', rank: '매니저' },
      { name: '이철희', dept: 'DAX팀', rank: '매니저' },
      { name: '김민찬', dept: '환경팀', rank: '매니저' }
    ]
  },
  {
    name: '13조', color: '#6d28d9',
    members: [
      { name: '강수진', dept: 'Biomass발전자문', rank: '전문위원' },
      { name: '박민규', dept: '구매팀', rank: '팀장' },
      { name: '박은주', dept: '인사팀OH', rank: '매니저' },
      { name: '권진아', dept: 'IT보안팀', rank: '매니저' },
      { name: '홍성민', dept: '안전팀', rank: '매니저' },
      { name: '강형구', dept: 'Biomass 계전팀', rank: '매니저' },
      { name: '최우람', dept: 'Biomass 기계팀', rank: '매니저' },
      { name: '이경임', dept: 'LNG기계팀', rank: '매니저' },
      { name: '강성민', dept: 'LNG제어팀', rank: '매니저' }
    ]
  },
  {
    name: '14조', color: '#c2410c',
    members: [
      { name: '홍광재', dept: 'Biomass 발전팀', rank: '팀장' },
      { name: '양승문', dept: '구매팀', rank: '매니저' },
      { name: '김화영', dept: '구매팀', rank: '매니저' },
      { name: '유민정', dept: '인사팀OH', rank: '매니저' },
      { name: '박기행', dept: '사업지원팀', rank: '매니저' },
      { name: '장천호', dept: 'LNG발전1팀', rank: '매니저' },
      { name: '이소현', dept: '사업지원팀', rank: '매니저' },
      { name: '이해승', dept: 'IT보안팀', rank: '매니저' },
      { name: '송용우', dept: '연료설비팀', rank: '매니저' }
    ]
  },
  {
    name: '15조', color: '#047857',
    members: [
      { name: '윤재성', dept: '열병합건설팀', rank: '팀장' },
      { name: '유아영', dept: '시장운영팀', rank: '매니저' },
      { name: '이영일', dept: '구매팀', rank: '매니저' },
      { name: '김홍섭', dept: '구매팀', rank: '매니저' },
      { name: '채은득', dept: '발전기획팀', rank: '매니저' },
      { name: '윤장근', dept: 'LNG기계팀', rank: '매니저' },
      { name: '김도윤', dept: 'Biomass 기계팀', rank: '매니저' },
      { name: '장주원', dept: 'LNG제어팀', rank: '매니저' },
      { name: '손종환', dept: 'Biomass 계전팀', rank: '매니저' }
    ]
  },
  {
    name: '16조', color: '#b91c1c',
    members: [
      { name: '양준영', dept: 'LNG 발전2팀', rank: '팀장' },
      { name: '윤상원', dept: '환경팀', rank: '팀장' },
      { name: '임혜리', dept: 'LNG팀', rank: '매니저' },
      { name: '조성훈', dept: '인사팀', rank: '매니저' },
      { name: '박지선', dept: 'Biomass 발전팀', rank: '매니저' },
      { name: '김재원', dept: 'Biomass 계전팀', rank: '매니저' },
      { name: '황규태', dept: 'LNG발전1팀', rank: '매니저' },
      { name: '이정주', dept: 'LNG기계팀', rank: '매니저' },
      { name: '이진용', dept: 'Biomass 기계팀', rank: '매니저' }
    ]
  },
  {
    name: '17조', color: '#4338ca',
    members: [
      { name: '이재석', dept: 'LNG기계팀', rank: '팀장' },
      { name: '김지용', dept: '기후환경팀', rank: '매니저' },
      { name: '이승훈', dept: '구매팀', rank: '매니저' },
      { name: '정진훈', dept: '인사팀', rank: '매니저' },
      { name: '문용일', dept: 'Biomass 계전팀', rank: '매니저' },
      { name: '이창희', dept: 'LNG 발전2팀', rank: '매니저' },
      { name: '원용석', dept: 'LNG 발전2팀', rank: '매니저' },
      { name: '권지영', dept: 'LNG전기팀', rank: '매니저' },
      { name: '권기용', dept: 'Biomass 기계팀', rank: '매니저' }
    ]
  },
  {
    name: '18조', color: '#0e7490',
    members: [
      { name: '백두현', dept: '사업지원팀', rank: '팀장' },
      { name: '이한주', dept: '전력정책팀', rank: '매니저' },
      { name: '남윤우', dept: '시장운영팀', rank: '매니저' },
      { name: '정도환', dept: '기후환경팀', rank: '매니저' },
      { name: '이은규', dept: 'LNG팀', rank: '매니저' },
      { name: '김길찬', dept: 'IT보안팀', rank: '매니저' },
      { name: '김민규', dept: '발전기획팀', rank: '매니저' },
      { name: '문성현', dept: 'Biomass 계전팀', rank: '매니저' },
      { name: '이진범', dept: 'Biomass 기계팀', rank: '매니저' }
    ]
  },
  {
    name: '19조', color: '#92400e',
    members: [
      { name: '안정호', dept: '연료설비팀', rank: '팀장' },
      { name: '백중현', dept: '전력정책팀', rank: '매니저' },
      { name: '이태주', dept: '시장운영팀', rank: '매니저' },
      { name: '서동환', dept: 'LNG기계팀', rank: '매니저' },
      { name: '정다운', dept: 'DAX팀', rank: '매니저' },
      { name: '최충현', dept: '발전기획팀', rank: '매니저' },
      { name: '전재형', dept: 'LNG발전1팀', rank: '매니저' },
      { name: '남석현', dept: '사업지원팀', rank: '매니저' },
      { name: '양재훈', dept: 'LNG제어팀', rank: '매니저' }
    ]
  },
  {
    name: '운영진', color: '#374151', isOps: true,
    members: [
      { name: '문인성', dept: '기획팀', rank: '팀장' },
      { name: '도정현', dept: '기획팀', rank: '매니저' },
      { name: '최선용', dept: '기획팀', rank: '매니저' },
      { name: '최윤영', dept: '기획팀', rank: '매니저' },
      { name: '지수연', dept: '인사팀', rank: '매니저' }
    ]
  }
];

/* 조 편성 렌더링 */
(function initGroups() {
  var tabNav = document.getElementById('groupTabNav');
  var content = document.getElementById('groupContent');
  if (!tabNav || !content) return;

  /* 탭 버튼 생성 */
  GROUP_DATA.forEach(function (g, i) {
    var btn = document.createElement('button');
    btn.className = 'group-tab-btn' + (i === 0 ? ' active' : '');
    btn.textContent = g.name;
    btn.style.setProperty('--g-color', g.color);
    btn.setAttribute('data-idx', i);
    btn.onclick = function () { showGroup(i); };
    tabNav.appendChild(btn);
  });

  /* 전체 조 카드 생성 */
  GROUP_DATA.forEach(function (g, i) {
    var div = document.createElement('div');
    div.className = 'group-panel' + (i === 0 ? ' active' : '');
    div.id = 'groupPanel' + i;
    div.innerHTML = buildGroupPanel(g);
    content.appendChild(div);
  });
})();

function buildGroupPanel(g) {
  var rows = g.members.map(function (m, idx) {
    var rankClass = m.rank === '사장' || m.rank === '전무' || m.rank === '상무' || m.rank === '상무보' ? 'rank-exec'
      : m.rank === '실장' || m.rank === '팀장' || m.rank === '전문위원' ? 'rank-leader' : 'rank-manager';
    return '<tr><td class="gm-no">' + (idx + 1) + '</td>'
      + '<td class="gm-name">' + m.name + '</td>'
      + '<td class="gm-dept">' + m.dept + '</td>'
      + '<td class="gm-rank"><span class="rank-badge ' + rankClass + '">' + m.rank + '</span></td></tr>';
  }).join('');

  return '<div class="group-panel-header" style="border-left:4px solid ' + g.color + '">'
    + '<span class="group-panel-name" style="color:' + g.color + '">' + g.name + '</span>'
    + '<span class="group-panel-count">' + g.members.length + '명</span>'
    + '</div>'
    + '<div class="group-table-wrap"><table class="group-table">'
    + '<thead><tr><th>No.</th><th>성명</th><th>부서명</th><th>직책</th></tr></thead>'
    + '<tbody>' + rows + '</tbody>'
    + '</table></div>';
}

function showGroup(idx) {
  document.querySelectorAll('.group-tab-btn').forEach(function (b) { b.classList.remove('active'); });
  document.querySelectorAll('.group-panel').forEach(function (p) { p.classList.remove('active'); });
  var btn = document.querySelector('.group-tab-btn[data-idx="' + idx + '"]');
  var panel = document.getElementById('groupPanel' + idx);
  if (btn) btn.classList.add('active');
  if (panel) panel.classList.add('active');
}

function filterGroups(query) {
  var q = query.trim();
  var clearBtn = document.getElementById('groupSearchClear');
  var resultEl = document.getElementById('groupSearchResult');
  var tabNav = document.getElementById('groupTabNav');
  var content = document.getElementById('groupContent');

  if (clearBtn) clearBtn.style.display = q ? 'flex' : 'none';

  if (!q) {
    resultEl.style.display = 'none';
    tabNav.style.display = '';
    content.style.display = '';
    return;
  }

  tabNav.style.display = 'none';
  content.style.display = 'none';
  resultEl.style.display = 'block';

  var matches = [];
  GROUP_DATA.forEach(function (g) {
    g.members.forEach(function (m) {
      if (m.name.replace(/\s/g, '').indexOf(q.replace(/\s/g, '')) !== -1) {
        matches.push({ group: g, member: m });
      }
    });
  });

  if (matches.length === 0) {
    resultEl.innerHTML = '<div class="group-no-result"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><p>"' + q + '" 검색 결과가 없습니다</p></div>';
    return;
  }

  resultEl.innerHTML = matches.map(function (r) {
    var g = r.group;
    var m = r.member;
    var rankClass = m.rank === '사장' || m.rank === '전무' || m.rank === '상무' || m.rank === '상무보' ? 'rank-exec'
      : m.rank === '실장' || m.rank === '팀장' || m.rank === '전문위원' ? 'rank-leader' : 'rank-manager';
    return '<div class="group-search-hit" style="border-left:4px solid ' + g.color + '">'
      + '<span class="hit-group" style="color:' + g.color + '">' + g.name + '</span>'
      + '<span class="hit-name">' + m.name + '</span>'
      + '<span class="hit-dept">' + m.dept + '</span>'
      + '<span class="rank-badge ' + rankClass + '">' + m.rank + '</span>'
      + '</div>';
  }).join('');
}

function clearGroupSearch() {
  var input = document.getElementById('groupSearchInput');
  if (input) { input.value = ''; input.focus(); }
  filterGroups('');
}

/* =============================================
   QR CODE GENERATION & URL COPY
   ============================================= */
(function () {
  const url = window.location.href;

  /* show URL text */
  const urlEl = document.getElementById('qrUrlText');
  if (urlEl) urlEl.textContent = url;

  /* generate QR code */
  const qrEl = document.getElementById('qrcode');
  if (qrEl && typeof QRCode !== 'undefined') {
    new QRCode(qrEl, {
      text: url,
      width: 160,
      height: 160,
      colorDark: '#1a3a2a',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.M
    });
  }
})();

function copyUrl() {
  const url = window.location.href;
  const btn = document.getElementById('copyBtnText');

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(function () {
      showCopied(btn);
    }).catch(function () {
      fallbackCopy(url, btn);
    });
  } else {
    fallbackCopy(url, btn);
  }
}

function fallbackCopy(text, btn) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); } catch (e) {}
  document.body.removeChild(ta);
  showCopied(btn);
}

function showCopied(btn) {
  if (!btn) return;
  btn.textContent = '복사 완료!';
  setTimeout(function () { btn.textContent = '링크 복사'; }, 2000);
}

/* =============================================
   BUS PASSENGER TAB SWITCH
   ============================================= */
function switchTab(tabId) {
  /* deactivate all tabs in the same group */
  const allContents = document.querySelectorAll('.tab-content');
  const allBtns = document.querySelectorAll('.tab-btn');

  allContents.forEach(function (c) { c.classList.remove('active'); });
  allBtns.forEach(function (b) { b.classList.remove('active'); });

  /* activate selected */
  const target = document.getElementById(tabId);
  if (target) target.classList.add('active');

  /* activate matching button */
  allBtns.forEach(function (b) {
    if (b.getAttribute('onclick') && b.getAttribute('onclick').includes(tabId)) {
      b.classList.add('active');
    }
  });
}
