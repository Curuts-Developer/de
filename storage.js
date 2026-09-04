const KEY = 'de-progress-v1';

const SCRIPT_IDS = [
  'alphabet',
  'umlauts',
  'articles',
  'a1',
  'a2',
  'b1',
  'b2',
  'c1',
  'c2',
  'office',
  'home',
];

function emptyScript() {
  return { passedStageIds: [], taughtStageIds: [], mastery: {}, answered: 0, correct: 0 };
}

function emptyProfile() {
  const scripts = {};
  for (const id of SCRIPT_IDS) scripts[id] = emptyScript();
  return {
    version: 1,
    updatedAt: new Date().toISOString(),
    lastPath: '#/',
    scripts,
    stats: { totalAnswered: 0, totalCorrect: 0 },
  };
}

export function loadProfile() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return emptyProfile();
    const data = JSON.parse(raw);
    if (!data || data.version !== 1 || !data.scripts) return emptyProfile();
    const ids = new Set([...SCRIPT_IDS, ...Object.keys(data.scripts)]);
    for (const id of ids) {
      data.scripts[id] = { ...emptyScript(), ...data.scripts[id] };
    }
    data.stats = { totalAnswered: 0, totalCorrect: 0, ...data.stats };
    data.lastPath = data.lastPath || '#/';
    return data;
  } catch {
    return emptyProfile();
  }
}

export function saveProfile(profile) {
  profile.updatedAt = new Date().toISOString();
  try {
    localStorage.setItem(KEY, JSON.stringify(profile));
    return true;
  } catch {
    return false;
  }
}

export function resetProfile() {
  localStorage.removeItem(KEY);
  return emptyProfile();
}

export function resetScriptProgress(profile, scriptId) {
  profile.scripts[scriptId] = emptyScript();
  const last = (profile.lastPath || '').replace(/^#/, '');
  const owner = last.split('/').filter(Boolean)[0];
  if (owner === scriptId) profile.lastPath = '#/';
  return profile;
}

export function storageAvailable() {
  try {
    const probe = '__de_probe__';
    localStorage.setItem(probe, '1');
    localStorage.removeItem(probe);
    return true;
  } catch {
    return false;
  }
}
