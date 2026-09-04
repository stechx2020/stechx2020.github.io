/**
 * Application Logic — Sebastián Castañeda PhD Portfolio
 * 5-Language (i18n) Engine (es, en, de, ja, ko)
 */

let currentLang = localStorage.getItem('lang') || 'es';

// Global Fail-Safe Contact Modal Functions
window.openContactModal = function(e) {
  if (e && e.preventDefault) e.preventDefault();
  const modalBackdrop = document.getElementById('contact-modal');
  if (modalBackdrop) {
    modalBackdrop.classList.add('open');
    modalBackdrop.style.display = 'flex';
    setTimeout(() => {
      modalBackdrop.style.opacity = '1';
    }, 10);
  }
};

window.closeContactModal = function(e) {
  if (e && e.preventDefault) e.preventDefault();
  const modalBackdrop = document.getElementById('contact-modal');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('open');
    modalBackdrop.style.opacity = '0';
    setTimeout(() => {
      modalBackdrop.style.display = 'none';
    }, 250);
  }
};

// Global Language Switcher Logic
window.switchLanguage = function(langCode) {
  if (!window.cvData.i18n[langCode]) return;
  currentLang = langCode;
  localStorage.setItem('lang', langCode);
  renderAllApp();
  const menu = document.getElementById('lang-dropdown-menu');
  if (menu) {
    menu.classList.remove('show');
    menu.style.display = 'none';
  }
};

window.toggleLangMenu = function(e) {
  if (e) {
    e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
  }
  const menu = document.getElementById('lang-dropdown-menu');
  if (menu) {
    const isShown = menu.classList.contains('show') || menu.style.display === 'flex' || menu.style.display === 'block';
    if (isShown) {
      menu.classList.remove('show');
      menu.style.display = 'none';
    } else {
      menu.classList.add('show');
      menu.style.display = 'flex';
    }
  }
};

document.addEventListener('click', (e) => {
  const wrapper = document.querySelector('.lang-selector-wrapper');
  const menu = document.getElementById('lang-dropdown-menu');
  if (wrapper && !wrapper.contains(e.target) && menu) {
    menu.classList.remove('show');
    menu.style.display = 'none';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  renderAllApp();
});

function renderAllApp() {
  const data = window.cvData;
  if (!data) return;

  // 1. Render High-End Language Switcher
  renderLangSelector(data.languagesList);

  // 2. Setup Contact Modal Popup
  initContactModal(data.personal);

  // 3. Theme Management
  initTheme();

  // 4. Render UI Navigation & Static Labels
  const i18nObj = data.i18n[currentLang] || data.i18n['en'] || data.i18n['es'];
  renderUILabels(i18nObj);

  // 5. Render Hero & Profile Card
  renderHero(data.personal, i18nObj.hero);

  // 6. Render Education & Research Groups
  renderEducation(data.education, data.researchGroups);

  // 7. Render Research Interests
  renderResearchInterests(data.researchInterests);

  // 8. Render Target Research Environments
  renderTargetEnvironments(data.targetEnvironments);

  // 9. Render Research & Technical Expertise
  renderResearchToolkit(data.researchToolkit);

  // 10. Render Scientific Research & Applied Engineering Projects
  renderResearchProjects(data.researchProjects);
  renderEngineeringProjects(data.engineeringProjects);

  // 11. Render Publications
  renderPublications(data.publications);

  // 12. Render Languages
  renderLanguages(data.languages);

  // 13. Render Skills (Defensive)
  if (data.skills) {
    renderSkills(data.skills);
  }

  // 14. Render Awards & Leadership
  renderAwardsAndLeadership(data.awards, data.leadership);

  // 15. Setup Smooth Scroll
  initNavScroll();
}

/* --- Helper for Multilingual Text Extraction --- */
function getText(field) {
  if (!field) return '';
  if (typeof field === 'string') return field;
  return field[currentLang] || field['en'] || field['es'] || '';
}

/* --- Language Selector --- */
function renderLangSelector(languagesList) {
  const btn = document.getElementById('current-lang-btn');
  const menu = document.getElementById('lang-dropdown-menu');
  if (!btn || !menu || !languagesList) return;

  const currentObj = languagesList.find(l => l.code === currentLang) || languagesList[0];
  btn.innerHTML = `
    <span>${currentObj.flag}</span>
    <span>${currentObj.name}</span>
    <span style="font-size: 0.7rem; color: var(--text-muted);">▾</span>
  `;

  let menuHtml = '';
  languagesList.forEach(l => {
    menuHtml += `
      <li>
        <button class="lang-item-btn ${l.code === currentLang ? 'active' : ''}" onclick="switchLanguage('${l.code}')">
          <span>${l.flag}</span>
          <span>${l.name}</span>
        </button>
      </li>
    `;
  });
  menu.innerHTML = menuHtml;
}

/* --- Render UI Static Labels --- */
function renderUILabels(i18nObj) {
  if (!i18nObj) return;

  // Nav links
  const navMap = {
    'nav-about': i18nObj.nav.about,
    'nav-edu': i18nObj.nav.education,
    'nav-research': i18nObj.nav.researchProjects,
    'nav-eng': i18nObj.nav.engineeringProjects,
    'nav-expertise': i18nObj.nav.expertise,
    'nav-pub': i18nObj.nav.publications,
    'nav-lang': i18nObj.nav.languages,
    'nav-phd': i18nObj.nav.targetLabs,
    'nav-contact-btn': i18nObj.nav.contactBtn,
    'nav-pdf-btn': i18nObj.nav.pdfBtn
  };

  Object.keys(navMap).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = navMap[id];
  });

  // Section Headers
  const sectionMap = {
    'about-tag': i18nObj.sections.aboutTag,
    'about-title': i18nObj.sections.aboutTitle,
    'edu-tag': i18nObj.sections.eduTag,
    'edu-title': i18nObj.sections.eduTitle,
    'interests-tag': i18nObj.sections.interestsTag,
    'interests-title': i18nObj.sections.interestsTitle,
    'research-tag': i18nObj.sections.researchTag,
    'research-title': i18nObj.sections.researchTitle,
    'eng-tag': i18nObj.sections.engTag,
    'eng-title': i18nObj.sections.engTitle,
    'expertise-tag': i18nObj.sections.expertiseTag,
    'expertise-title': i18nObj.sections.expertiseTitle,
    'phd-tag': i18nObj.sections.phdTag,
    'phd-title': i18nObj.sections.phdTitle,
    'pub-tag': i18nObj.sections.pubTag,
    'pub-title': i18nObj.sections.pubTitle,
    'lang-tag': i18nObj.sections.langTag,
    'lang-title': i18nObj.sections.langTitle,
    'skills-tag': i18nObj.sections.skillsTag,
    'skills-title': i18nObj.sections.skillsTitle,
    'awards-tag': i18nObj.sections.awardsTag,
    'awards-title': i18nObj.sections.awardsTitle
  };

  Object.keys(sectionMap).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = sectionMap[id];
  });

  // Modal Strings
  const m = i18nObj.modal;
  if (m) {
    const mTitle = document.getElementById('modal-title');
    const mSub = document.getElementById('modal-subtitle');
    const mEmailLbl = document.getElementById('modal-email-lbl');
    const mCopyBtn = document.getElementById('copy-email-btn');
    const mPhoneLbl = document.getElementById('modal-phone-lbl');
    const mLocLbl = document.getElementById('modal-loc-lbl');
    const mLocVal = document.getElementById('modal-loc-val');
    const mNotice = document.getElementById('modal-notice');

    if (mTitle) mTitle.textContent = m.title;
    if (mSub) mSub.textContent = m.subtitle;
    if (mEmailLbl) mEmailLbl.textContent = m.emailLabel;
    if (mCopyBtn) mCopyBtn.textContent = m.copyBtn;
    if (mPhoneLbl) mPhoneLbl.textContent = m.phoneLabel;
    if (mLocLbl) mLocLbl.textContent = m.locationLabel;
    if (mLocVal) mLocVal.textContent = m.locationVal;
    if (mNotice) mNotice.textContent = m.notice;
  }
}

/* --- Theme Toggle --- */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme') || 'dark';
  
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (toggleBtn) {
    toggleBtn.onclick = () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    };
  }
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (icon) {
    icon.textContent = theme === 'dark' ? 'Theme: Dark' : 'Theme: Light';
  }
}

function calculateAge(birthDateString) {
  const today = new Date();
  const birthDate = new Date(birthDateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

/* --- Render Hero --- */
function renderHero(personal, heroI18n) {
  if (!personal) return;
  const nameEl = document.getElementById('hero-name');
  const titleEl = document.getElementById('hero-title');
  const taglineEl = document.getElementById('hero-tagline');
  const badgeEl = document.getElementById('hero-badge-text');
  const bioEl = document.getElementById('about-bio');
  const avatarWrapper = document.getElementById('profile-avatar-wrapper');
  const ageBadge = document.getElementById('profile-age-badge');
  const heroContactBtn = document.getElementById('hero-contact-btn');
  const heroTargetBtn = document.getElementById('hero-target-btn');

  if (nameEl) nameEl.textContent = personal.name;
  if (titleEl) titleEl.textContent = heroI18n ? heroI18n.subtitle : personal.subtitle;
  if (taglineEl) taglineEl.textContent = heroI18n ? heroI18n.tagline : personal.tagline;
  if (badgeEl) badgeEl.textContent = heroI18n ? heroI18n.statusBadge : personal.statusBadge;
  if (bioEl) bioEl.textContent = getText(personal.bio);

  if (heroContactBtn && heroI18n) heroContactBtn.textContent = heroI18n.contactAction;
  if (heroTargetBtn && heroI18n) heroTargetBtn.textContent = heroI18n.targetAction;

  if (avatarWrapper) {
    if (personal.profileImg) {
      avatarWrapper.innerHTML = `<img src="${personal.profileImg}" alt="${personal.name}" class="avatar-img">`;
    } else {
      avatarWrapper.innerHTML = `<div class="avatar-inner">SC</div>`;
    }
  }

  if (ageBadge && personal.birthDate) {
    const age = calculateAge(personal.birthDate);
    const ageLabels = {
      es: `${age} años (1 de Abril de 2003)`,
      en: `${age} years old (April 1, 2003)`,
      de: `${age} Jahre alt (1. April 2003)`,
      ja: `23歳（2003年4月1日生）`,
      ko: `23세 (2003년 4월 1일생)`
    };
    ageBadge.textContent = ageLabels[currentLang] || ageLabels['en'];
  }
}

/* --- Render Education --- */
function renderEducation(educationList, groupsList) {
  const eduContainer = document.getElementById('education-container');
  if (!eduContainer || !educationList) return;

  let html = '';
  
  educationList.forEach(edu => {
    html += `
      <div class="card" style="margin-bottom: 1.25rem;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.5rem;">
          <h3 style="font-size: 1.25rem; color: var(--text-primary);">${getText(edu.degree)}</h3>
          <span style="font-size: 0.82rem; padding: 0.25rem 0.75rem; background: var(--accent-cyan-glow); color: var(--accent-cyan-light); border-radius: var(--radius-full); font-weight: 600;">${edu.period}</span>
        </div>
        <p style="font-weight: 600; color: var(--accent-indigo-light); margin-bottom: 0.5rem;">${edu.institution} (${edu.location})</p>
        <ul style="list-style: disc; margin-left: 1.25rem; color: var(--text-secondary); font-size: 0.92rem;">
          ${(edu.details[currentLang] || edu.details['en'] || edu.details['es']).map(d => `<li>${d}</li>`).join('')}
        </ul>
      </div>
    `;
  });

  if (groupsList && groupsList.length > 0) {
    groupsList.forEach(grp => {
      html += `
        <div class="card" style="border-left: 3px solid var(--accent-indigo);">
          <h4 style="font-size: 1.1rem; color: var(--accent-cyan-light); margin-bottom: 0.4rem;">${grp.name} — ${getText(grp.role)}</h4>
          <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 0.5rem;">
            <strong>Supervisors:</strong> ${grp.supervisors.join(', ')}
          </p>
          <p style="font-size: 0.88rem; color: var(--text-muted);">
            <strong>Research Focus:</strong> ${grp.lines.join(' • ')}
          </p>
        </div>
      `;
    });
  }

  eduContainer.innerHTML = html;
}

/* --- Render Research Interests --- */
function renderResearchInterests(interests) {
  const container = document.getElementById('interests-container');
  if (!container || !interests) return;

  let html = '<div class="grid-2">';
  interests.forEach(item => {
    const catName = getText(item.category);
    const isPrimary = catName.toLowerCase().includes('primary') || catName.toLowerCase().includes('principal') || catName.toLowerCase().includes('主要');
    html += `
      <div class="card">
        <h3 style="font-size: 1.15rem; margin-bottom: 0.75rem; color: ${isPrimary ? 'var(--accent-cyan-light)' : 'var(--accent-indigo-light)'};">
          ${catName}
        </h3>
        <div class="interest-tag-cloud">
          ${item.topics.map(topic => `
            <span class="interest-chip ${isPrimary ? 'primary' : ''}">${topic}</span>
          `).join('')}
        </div>
      </div>
    `;
  });
  html += '</div>';
  container.innerHTML = html;
}

/* --- Render Target Research Environments --- */
function renderTargetEnvironments(targetData) {
  const container = document.getElementById('phd-targets-container');
  if (!container || !targetData) return;

  let html = '<div class="grid-3" style="margin-bottom: 2rem;">';

  if (targetData.countries) {
    targetData.countries.forEach(dest => {
      html += `
        <div class="card country-phd-card">
          <div class="target-country-header">
            <span>${dest.country}</span>
            <span class="target-status-tag">${getText(dest.status)}</span>
          </div>
          <ul class="univ-list">
            ${dest.universities.map(u => `<li class="univ-item">${u}</li>`).join('')}
          </ul>
        </div>
      `;
    });
  }
  html += '</div>';

  if (targetData.targetLabs) {
    const titleMap = {
      es: 'Laboratorios de Investigación y Alineación Académica',
      en: 'Targeted Research Laboratories & Faculty Alignment',
      de: 'Ziel-Forschungslabore & Wissenschaftliche Ausrichtung',
      ja: '目標研究室および学術的適合性',
      ko: '목표 연구실 및 학술적 적합성'
    };
    html += `<h3 style="font-size: 1.2rem; color: var(--accent-cyan-light); margin-bottom: 1rem;">${titleMap[currentLang] || titleMap['en']}</h3>`;
    html += '<div class="grid-3">';
    targetData.targetLabs.forEach(lab => {
      html += `
        <div class="target-lab-card">
          <div class="target-lab-title">${lab.lab}</div>
          <div class="target-lab-inst">${lab.institution} (${lab.country})</div>
          <div class="lab-detail-row"><span class="lab-detail-label">Research Topic:</span> ${lab.researchTopic}</div>
          <div class="lab-detail-row"><span class="lab-detail-label">Scientific Alignment:</span> ${getText(lab.alignment)}</div>
          <div class="lab-detail-row" style="margin-top: 0.5rem;"><span class="target-status-tag" style="background: rgba(6, 182, 212, 0.1); color: var(--accent-cyan-light); border-color: var(--accent-cyan-glow);">${getText(lab.status)}</span></div>
        </div>
      `;
    });
    html += '</div>';
  }

  container.innerHTML = html;
}

/* --- Render Research & Technical Expertise --- */
function renderResearchToolkit(toolkit) {
  const container = document.getElementById('research-toolkit-container');
  if (!container || !toolkit) return;

  const categories = [
    { key: 'robotics', title: 'Robotics' },
    { key: 'control', title: 'Control Theory' },
    { key: 'perception', title: 'Perception & Vision' },
    { key: 'computationalTools', title: 'Computational Tools' },
    { key: 'hardware', title: 'Embedded Hardware' },
    { key: 'manufacturing', title: 'Manufacturing & CAD' }
  ];

  let html = '<div class="toolkit-grid">';
  categories.forEach(cat => {
    const items = toolkit[cat.key] || [];
    html += `
      <div class="card">
        <h4 class="toolkit-card-title">${cat.title}</h4>
        <ul class="toolkit-list">
          ${items.map(item => `<li class="toolkit-item">${item}</li>`).join('')}
        </ul>
      </div>
    `;
  });
  html += '</div>';
  container.innerHTML = html;
}

/* --- Render Scientific Research Projects --- */
function renderResearchProjects(researchList) {
  const container = document.getElementById('research-projects-container');
  if (!container || !researchList) return;

  const i18nObj = window.cvData.i18n[currentLang] || window.cvData.i18n['en'];
  const labels = i18nObj.breakdown;

  let html = '';
  researchList.forEach(proj => {
    html += `
      <div class="card research-card">
        <div class="research-card-header">
          <div>
            <span class="type-pill">${proj.type}</span>
            <h3 class="research-title" style="margin-top: 0.4rem;">${proj.title}</h3>
            <p class="research-subtitle">${getText(proj.subtitle)}</p>
          </div>
        </div>

        <div class="research-breakdown-grid">
          <div class="breakdown-item">
            <span class="breakdown-label">${labels.problem}</span>
            <span class="breakdown-val">${getText(proj.problem)}</span>
          </div>
          <div class="breakdown-item">
            <span class="breakdown-label">${labels.methodology}</span>
            <span class="breakdown-val">${getText(proj.methodology)}</span>
          </div>
          <div class="breakdown-item">
            <span class="breakdown-label">${labels.model}</span>
            <span class="breakdown-val">${getText(proj.model)}</span>
          </div>
          <div class="breakdown-item">
            <span class="breakdown-label">${labels.simulation}</span>
            <span class="breakdown-val">${getText(proj.simulation)}</span>
          </div>
          <div class="breakdown-item">
            <span class="breakdown-label">${labels.results}</span>
            <span class="breakdown-val">${getText(proj.results)}</span>
          </div>
          <div class="breakdown-item">
            <span class="breakdown-label">${labels.conclusions}</span>
            <span class="breakdown-val">${getText(proj.conclusions)}</span>
          </div>
        </div>

        <div class="evidence-container">
          <span class="evidence-label">${labels.evidenceLabel}</span>
          ${proj.evidence.map(ev => `
            <button class="btn-evidence" onclick="handleEvidenceClick('${ev.label}', '${ev.type}')">
              [${getEvidencePrefix(ev.type)} ${ev.label}]
            </button>
          `).join('')}
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

/* --- Render Engineering Projects --- */
function renderEngineeringProjects(engineeringList) {
  const container = document.getElementById('engineering-projects-container');
  if (!container || !engineeringList) return;

  const i18nObj = window.cvData.i18n[currentLang] || window.cvData.i18n['en'];
  const labels = i18nObj.breakdown;

  let html = '<div class="grid-2">';
  engineeringList.forEach(proj => {
    html += `
      <div class="card" style="border-left: 3px solid var(--accent-indigo);">
        <div style="margin-bottom: 0.75rem;">
          <span class="type-pill engineering">${proj.type}</span>
          <h3 class="research-title" style="margin-top: 0.4rem;">${proj.title}</h3>
          <div style="font-size: 0.85rem; color: var(--accent-indigo-light); font-weight: 600;">${getText(proj.role)}</div>
        </div>
        <p style="font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 0.75rem;">${getText(proj.description)}</p>
        <ul class="project-highlights" style="margin-bottom: 1rem;">
          ${(proj.highlights[currentLang] || proj.highlights['en'] || proj.highlights['es']).map(h => `<li>${h}</li>`).join('')}
        </ul>

        <div class="evidence-container">
          <span class="evidence-label">${labels.engEvidenceLabel}</span>
          ${proj.evidence.map(ev => `
            <button class="btn-evidence" onclick="handleEvidenceClick('${ev.label}', '${ev.type}')">
              [${getEvidencePrefix(ev.type)} ${ev.label}]
            </button>
          `).join('')}
        </div>
      </div>
    `;
  });
  html += '</div>';
  container.innerHTML = html;
}

function getEvidencePrefix(type) {
  switch (type) {
    case 'pdf': return 'DOC';
    case 'code': return 'CODE';
    case 'video': return 'DEMO';
    case 'cad': return 'CAD';
    case 'photo': return 'IMG';
    case 'award': return 'CERT';
    default: return 'DATA';
  }
}

function handleEvidenceClick(label, type) {
  alert(`Evidence artifact requested: "${label}". Drop your file into the repository folder to link directly!`);
}

/* --- Render Publications --- */
function renderPublications(pubData) {
  const container = document.getElementById('publications-container');
  if (!container || !pubData) return;

  const s = pubData.summary;
  let html = '';
  if (s) {
    html += `
      <div class="pub-summary-row">
        <div class="pub-stat-badge"><span class="pub-stat-num">${s.papersInPreparation}</span><span class="pub-stat-label">Papers in Prep</span></div>
        <div class="pub-stat-badge"><span class="pub-stat-num">${s.presentations}</span><span class="pub-stat-label">Ponencias / Talks</span></div>
        <div class="pub-stat-badge"><span class="pub-stat-num">${s.congresses}</span><span class="pub-stat-label">Congresos</span></div>
        <div class="pub-stat-badge"><span class="pub-stat-num">${s.theses}</span><span class="pub-stat-label">Trabajo de Grado</span></div>
      </div>
    `;
  }

  if (pubData.items) {
    pubData.items.forEach(pub => {
      html += `
        <div class="card pub-item-card">
          <span class="pub-type-tag">${pub.type} (${pub.year})</span>
          <h3 class="pub-title">${pub.title}</h3>
          <p class="pub-authors"><strong>Authors:</strong> ${pub.authors}</p>
          <p class="pub-venue">Target Venue: ${pub.venue}</p>
          <p class="pub-abstract">${getText(pub.abstract)}</p>
        </div>
      `;
    });
  }

  container.innerHTML = html;
}

/* --- Render Languages --- */
function renderLanguages(langList) {
  const container = document.getElementById('languages-container');
  if (!container || !langList) return;

  let html = '<div class="grid-4">';
  langList.forEach(l => {
    html += `
      <div class="card lang-card">
        <div>
          <div class="lang-name">${getText(l.name)}</div>
          <div class="lang-level">${getText(l.level)}</div>
        </div>
      </div>
    `;
  });
  html += '</div>';
  container.innerHTML = html;
}

/* --- Render Skills --- */
function renderSkills(skillsData) {
  const container = document.getElementById('skills-container');
  if (!container || !skillsData) return;

  const categories = [
    { title: 'Programming Languages', list: skillsData.programming },
    { title: 'Embedded Systems & Hardware', list: skillsData.embeddedHardware },
    { title: 'CAD & Advanced Fabrication', list: skillsData.cadFabrication },
    { title: 'Electronics & PCB Design', list: skillsData.electronicsEDA }
  ];

  let html = '<div class="grid-2">';
  categories.forEach(cat => {
    if (cat.list) {
      html += `
        <div class="card">
          <h4 class="skills-category-title">${cat.title}</h4>
          <div class="skills-badge-list">
            ${cat.list.map(s => `<span class="skill-badge">${s}</span>`).join('')}
          </div>
        </div>
      `;
    }
  });
  html += '</div>';
  container.innerHTML = html;
}

/* --- Render Awards & Leadership --- */
function renderAwardsAndLeadership(awardsList, leadershipList) {
  const awardsContainer = document.getElementById('awards-container');
  const leadershipContainer = document.getElementById('leadership-container');

  if (awardsContainer && awardsList) {
    let html = '<div class="grid-2">';
    awardsList.forEach((a, idx) => {
      html += `
        <div class="card award-card">
          <div class="award-badge-num">#${idx + 1}</div>
          <div>
            <h3 style="font-size: 1.15rem; margin-bottom: 0.25rem;">${a.title} (${a.year})</h3>
            <p style="font-size: 0.88rem; color: var(--accent-cyan-light); font-weight: 600; margin-bottom: 0.4rem;">${a.organization}</p>
            <p style="font-size: 0.88rem; color: var(--text-secondary);">${getText(a.description)}</p>
          </div>
        </div>
      `;
    });
    html += '</div>';
    awardsContainer.innerHTML = html;
  }

  if (leadershipContainer && leadershipList) {
    let html = '<div class="grid-3">';
    leadershipList.forEach(l => {
      html += `
        <div class="card">
          <h3 style="font-size: 1.1rem; color: var(--accent-indigo-light); margin-bottom: 0.3rem;">${getText(l.role)}</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">${l.organization}</p>
          <p style="font-size: 0.88rem; color: var(--text-secondary);">${getText(l.details)}</p>
        </div>
      `;
    });
    html += '</div>';
    leadershipContainer.innerHTML = html;
  }
}

/* --- Contact Modal Popup Logic --- */
function initContactModal(personal) {
  const modalBackdrop = document.getElementById('contact-modal');
  const openBtns = document.querySelectorAll('.open-contact-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const copyEmailBtn = document.getElementById('copy-email-btn');

  if (!modalBackdrop) return;

  openBtns.forEach(btn => {
    btn.onclick = window.openContactModal;
  });

  if (closeBtn) {
    closeBtn.onclick = window.closeContactModal;
  }

  modalBackdrop.onclick = (e) => {
    if (e.target === modalBackdrop) {
      window.closeContactModal(e);
    }
  };

  if (copyEmailBtn && personal) {
    copyEmailBtn.onclick = () => {
      navigator.clipboard.writeText(personal.email).then(() => {
        const origText = copyEmailBtn.textContent;
        copyEmailBtn.textContent = currentLang === 'es' ? "¡Copiado!" : "Copied!";
        copyEmailBtn.style.background = "var(--accent-emerald)";
        copyEmailBtn.style.color = "#ffffff";
        setTimeout(() => {
          copyEmailBtn.textContent = origText;
          copyEmailBtn.style.background = "";
          copyEmailBtn.style.color = "";
        }, 2000);
      });
    };
  }
}

/* --- Nav Scroll & Active Link --- */
function initNavScroll() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}
