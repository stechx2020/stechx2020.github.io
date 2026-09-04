/**
 * Application Logic — Sebastián Castañeda PhD Portfolio
 * Renders data dynamically from window.cvData
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.cvData;
  if (!data) {
    console.error("cvData not loaded properly.");
    return;
  }

  // 1. Theme Management (Dark / Light)
  initTheme();

  // 2. Render Hero & Profile Card (Photo, Age, Links)
  renderHero(data.personal);

  // 3. Render Education & Research Groups
  renderEducation(data.education, data.researchGroups);

  // 4. Render Research Interests
  renderResearchInterests(data.researchInterests);

  // 5. Render Target Research Environments (PhD Strategy)
  renderTargetEnvironments(data.targetEnvironments);

  // 6. Render Research & Technical Expertise (Toolkit Matrix)
  renderResearchToolkit(data.researchToolkit);

  // 7. Render Scientific Research Projects & Applied Engineering Projects
  renderResearchProjects(data.researchProjects);
  renderEngineeringProjects(data.engineeringProjects);

  // 8. Render Publications
  renderPublications(data.publications);

  // 9. Render Languages
  renderLanguages(data.languages);

  // 10. Render Skills
  renderSkills(data.skills);

  // 11. Render Awards & Leadership
  renderAwardsAndLeadership(data.awards, data.leadership);

  // 12. Setup Contact Modal Popup
  initContactModal(data.personal);

  // 13. Setup Smooth Scroll & Active Nav Highlighting
  initNavScroll();
});

/* --- Theme Toggle --- */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme') || 'dark';
  
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (icon) {
    icon.textContent = theme === 'dark' ? 'Theme: Dark' : 'Theme: Light';
  }
}

/* --- Calculate Age dynamically --- */
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
function renderHero(personal) {
  const nameEl = document.getElementById('hero-name');
  const titleEl = document.getElementById('hero-title');
  const taglineEl = document.getElementById('hero-tagline');
  const badgeEl = document.getElementById('hero-badge-text');
  const bioEl = document.getElementById('about-bio');
  const avatarWrapper = document.getElementById('profile-avatar-wrapper');
  const ageBadge = document.getElementById('profile-age-badge');
  const linkedinBtn = document.getElementById('hero-linkedin-link');

  if (nameEl) nameEl.textContent = personal.name;
  if (titleEl) titleEl.textContent = personal.subtitle || personal.title;
  if (taglineEl) taglineEl.textContent = personal.tagline;
  if (badgeEl) badgeEl.textContent = personal.statusBadge;
  if (bioEl) bioEl.textContent = personal.bio;

  if (linkedinBtn && personal.linkedin) {
    linkedinBtn.href = personal.linkedin;
  }

  // Profile Image Render
  if (avatarWrapper) {
    if (personal.profileImg) {
      avatarWrapper.innerHTML = `<img src="${personal.profileImg}" alt="${personal.name}" class="avatar-img">`;
    } else {
      avatarWrapper.innerHTML = `<div class="avatar-inner">SC</div>`;
    }
  }

  // Calculate & Display Age (No Emojis)
  if (ageBadge && personal.birthDate) {
    const age = calculateAge(personal.birthDate);
    ageBadge.textContent = `${age} años (1 de Abril de 2003)`;
  }
}

/* --- Render Education --- */
function renderEducation(educationList, groupsList) {
  const eduContainer = document.getElementById('education-container');
  if (!eduContainer) return;

  let html = '';
  
  educationList.forEach(edu => {
    html += `
      <div class="card" style="margin-bottom: 1.25rem;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.5rem;">
          <h3 style="font-size: 1.25rem; color: var(--text-primary);">${edu.degree}</h3>
          <span style="font-size: 0.82rem; padding: 0.25rem 0.75rem; background: var(--accent-cyan-glow); color: var(--accent-cyan-light); border-radius: var(--radius-full); font-weight: 600;">${edu.period}</span>
        </div>
        <p style="font-weight: 600; color: var(--accent-indigo-light); margin-bottom: 0.5rem;">${edu.institution} (${edu.location})</p>
        <ul style="list-style: disc; margin-left: 1.25rem; color: var(--text-secondary); font-size: 0.92rem;">
          ${edu.details.map(d => `<li>${d}</li>`).join('')}
        </ul>
      </div>
    `;
  });

  if (groupsList && groupsList.length > 0) {
    groupsList.forEach(grp => {
      html += `
        <div class="card" style="border-left: 3px solid var(--accent-indigo);">
          <h4 style="font-size: 1.1rem; color: var(--accent-cyan-light); margin-bottom: 0.4rem;">${grp.name} — ${grp.role}</h4>
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
  if (!container) return;

  let html = '<div class="grid-2">';
  interests.forEach(item => {
    const isPrimary = item.category.includes('Primary');
    html += `
      <div class="card">
        <h3 style="font-size: 1.15rem; margin-bottom: 0.75rem; color: ${isPrimary ? 'var(--accent-cyan-light)' : 'var(--accent-indigo-light)'};">
          ${item.category}
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
  if (!container) return;

  let html = '<div class="grid-3" style="margin-bottom: 2rem;">';

  targetData.countries.forEach(dest => {
    html += `
      <div class="card country-phd-card">
        <div class="target-country-header">
          <span>${dest.country}</span>
          <span class="target-status-tag">${dest.status}</span>
        </div>
        <ul class="univ-list">
          ${dest.universities.map(u => `<li class="univ-item">${u}</li>`).join('')}
        </ul>
      </div>
    `;
  });
  html += '</div>';

  // Target Labs & Alignment
  html += '<h3 style="font-size: 1.2rem; color: var(--accent-cyan-light); margin-bottom: 1rem;">Targeted Research Laboratories & Faculty Alignment</h3>';
  html += '<div class="grid-3">';
  targetData.targetLabs.forEach(lab => {
    html += `
      <div class="target-lab-card">
        <div class="target-lab-title">${lab.lab}</div>
        <div class="target-lab-inst">${lab.institution} (${lab.country})</div>
        <div class="lab-detail-row"><span class="lab-detail-label">Research Topic:</span> ${lab.researchTopic}</div>
        <div class="lab-detail-row"><span class="lab-detail-label">Scientific Alignment:</span> ${lab.alignment}</div>
        <div class="lab-detail-row" style="margin-top: 0.5rem;"><span class="target-status-tag" style="background: rgba(6, 182, 212, 0.1); color: var(--accent-cyan-light); border-color: var(--accent-cyan-glow);">${lab.status}</span></div>
      </div>
    `;
  });
  html += '</div>';

  container.innerHTML = html;
}

/* --- Render Research & Technical Expertise (Toolkit Matrix) --- */
function renderResearchToolkit(toolkit) {
  const container = document.getElementById('research-toolkit-container');
  if (!container) return;

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
  if (!container) return;

  let html = '';
  researchList.forEach(proj => {
    html += `
      <div class="card research-card">
        <div class="research-card-header">
          <div>
            <span class="type-pill">${proj.type}</span>
            <h3 class="research-title" style="margin-top: 0.4rem;">${proj.title}</h3>
            <p class="research-subtitle">${proj.subtitle}</p>
          </div>
        </div>

        <div class="research-breakdown-grid">
          <div class="breakdown-item">
            <span class="breakdown-label">Problem</span>
            <span class="breakdown-val">${proj.problem}</span>
          </div>
          <div class="breakdown-item">
            <span class="breakdown-label">Methodology</span>
            <span class="breakdown-val">${proj.methodology}</span>
          </div>
          <div class="breakdown-item">
            <span class="breakdown-label">Mathematical Model</span>
            <span class="breakdown-val">${proj.model}</span>
          </div>
          <div class="breakdown-item">
            <span class="breakdown-label">Simulation Environment</span>
            <span class="breakdown-val">${proj.simulation}</span>
          </div>
          <div class="breakdown-item">
            <span class="breakdown-label">Quantitative Results</span>
            <span class="breakdown-val">${proj.results}</span>
          </div>
          <div class="breakdown-item">
            <span class="breakdown-label">Conclusions</span>
            <span class="breakdown-val">${proj.conclusions}</span>
          </div>
        </div>

        <div class="evidence-container">
          <span class="evidence-label">Verifiable Evidence:</span>
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
  if (!container) return;

  let html = '<div class="grid-2">';
  engineeringList.forEach(proj => {
    html += `
      <div class="card" style="border-left: 3px solid var(--accent-indigo);">
        <div style="margin-bottom: 0.75rem;">
          <span class="type-pill engineering">${proj.type}</span>
          <h3 class="research-title" style="margin-top: 0.4rem;">${proj.title}</h3>
          <div style="font-size: 0.85rem; color: var(--accent-indigo-light); font-weight: 600;">${proj.role}</div>
        </div>
        <p style="font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 0.75rem;">${proj.description}</p>
        <ul class="project-highlights" style="margin-bottom: 1rem;">
          ${proj.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>

        <div class="evidence-container">
          <span class="evidence-label">Engineering Artifacts:</span>
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
  alert(`Evidence artifact requested: "${label}". Attach your document/code file to the repository folder and it will link directly!`);
}

/* --- Render Publications --- */
function renderPublications(pubData) {
  const container = document.getElementById('publications-container');
  if (!container) return;

  const s = pubData.summary;
  let html = `
    <div class="pub-summary-row">
      <div class="pub-stat-badge"><span class="pub-stat-num">${s.papersInPreparation}</span><span class="pub-stat-label">Papers in Prep</span></div>
      <div class="pub-stat-badge"><span class="pub-stat-num">${s.presentations}</span><span class="pub-stat-label">Ponencias / Talks</span></div>
      <div class="pub-stat-badge"><span class="pub-stat-num">${s.congresses}</span><span class="pub-stat-label">Congresos</span></div>
      <div class="pub-stat-badge"><span class="pub-stat-num">${s.theses}</span><span class="pub-stat-label">Trabajo de Grado</span></div>
    </div>
  `;

  pubData.items.forEach(pub => {
    html += `
      <div class="card pub-item-card">
        <span class="pub-type-tag">${pub.type} (${pub.year})</span>
        <h3 class="pub-title">${pub.title}</h3>
        <p class="pub-authors"><strong>Authors:</strong> ${pub.authors}</p>
        <p class="pub-venue">Target Venue: ${pub.venue}</p>
        <p class="pub-abstract">${pub.abstract}</p>
      </div>
    `;
  });

  container.innerHTML = html;
}

/* --- Render Languages --- */
function renderLanguages(langList) {
  const container = document.getElementById('languages-container');
  if (!container) return;

  let html = '<div class="grid-4">';
  langList.forEach(l => {
    html += `
      <div class="card lang-card">
        <div>
          <div class="lang-name">${l.name}</div>
          <div class="lang-level">${l.level}</div>
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
  if (!container) return;

  const categories = [
    { title: 'Programming Languages', list: skillsData.programming },
    { title: 'Embedded Systems & Hardware', list: skillsData.embeddedHardware },
    { title: 'CAD & Advanced Fabrication', list: skillsData.cadFabrication },
    { title: 'Electronics & PCB Design', list: skillsData.electronicsEDA }
  ];

  let html = '<div class="grid-2">';
  categories.forEach(cat => {
    html += `
      <div class="card">
        <h4 class="skills-category-title">${cat.title}</h4>
        <div class="skills-badge-list">
          ${cat.list.map(s => `<span class="skill-badge">${s}</span>`).join('')}
        </div>
      </div>
    `;
  });
  html += '</div>';
  container.innerHTML = html;
}

/* --- Render Awards & Leadership --- */
function renderAwardsAndLeadership(awardsList, leadershipList) {
  const awardsContainer = document.getElementById('awards-container');
  const leadershipContainer = document.getElementById('leadership-container');

  if (awardsContainer) {
    let html = '<div class="grid-2">';
    awardsList.forEach((a, idx) => {
      html += `
        <div class="card award-card">
          <div class="award-badge-num">#${idx + 1}</div>
          <div>
            <h3 style="font-size: 1.15rem; margin-bottom: 0.25rem;">${a.title} (${a.year})</h3>
            <p style="font-size: 0.88rem; color: var(--accent-cyan-light); font-weight: 600; margin-bottom: 0.4rem;">${a.organization}</p>
            <p style="font-size: 0.88rem; color: var(--text-secondary);">${a.description}</p>
          </div>
        </div>
      `;
    });
    html += '</div>';
    awardsContainer.innerHTML = html;
  }

  if (leadershipContainer) {
    let html = '<div class="grid-3">';
    leadershipList.forEach(l => {
      html += `
        <div class="card">
          <h3 style="font-size: 1.1rem; color: var(--accent-indigo-light); margin-bottom: 0.3rem;">${l.role}</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">${l.organization}</p>
          <p style="font-size: 0.88rem; color: var(--text-secondary);">${l.details}</p>
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
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modalBackdrop.classList.add('open');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modalBackdrop.classList.remove('open');
    });
  }

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      modalBackdrop.classList.remove('open');
    }
  });

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(personal.email).then(() => {
        const origText = copyEmailBtn.textContent;
        copyEmailBtn.textContent = "Copied!";
        copyEmailBtn.style.background = "var(--accent-emerald)";
        copyEmailBtn.style.color = "#ffffff";
        setTimeout(() => {
          copyEmailBtn.textContent = origText;
          copyEmailBtn.style.background = "";
          copyEmailBtn.style.color = "";
        }, 2000);
      });
    });
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
