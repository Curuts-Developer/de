import { SCRIPTS, getScript, allCharsInScript } from '../data.js';
import {
  loadProfile,
  saveProfile,
  resetProfile,
  resetScriptProgress,
  storageAvailable,
} from '../storage.js';

const EXPECTED = [
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

let failed = 0;

function assert(cond, message) {
  if (!cond) {
    failed += 1;
    console.error(`FAIL  ${message}`);
  }
}

for (const id of EXPECTED) {
  assert(Boolean(getScript(id)), `missing script ${id}`);
}

const found = Object.keys(SCRIPTS);
assert(found.length === EXPECTED.length, `expected ${EXPECTED.length} scripts, got ${found.length}: ${found.join(',')}`);

for (const script of Object.values(SCRIPTS)) {
  assert(Boolean(script.id && script.label && script.group), `${script.id} missing metadata`);
  assert(script.stages.length >= 3, `${script.id} needs several stages`);
  const first = script.stages[0];
  assert(first.intro === true, `${script.id} stage 0 must be intro`);
  const last = script.stages[script.stages.length - 1];
  assert(last.mix === true && last.id.endsWith('-mix'), `${script.id} must end with a mix stage`);

  const ids = new Set();
  const chars = new Set();
  for (const stage of script.stages) {
    assert(!ids.has(stage.id), `duplicate stage id ${script.id}/${stage.id}`);
    ids.add(stage.id);
    if (stage.mix) {
      assert(stage.chars.length === 0, `${script.id}/${stage.id} mix should have empty chars`);
      continue;
    }
    assert(stage.chars.length >= 4, `${script.id}/${stage.id} needs at least 4 items`);
    for (const item of stage.chars) {
      assert(Boolean(item.char), `empty char in ${script.id}/${stage.id}`);
      assert(Boolean(item.romaji), `empty sound in ${script.id}/${stage.id} (${item.char})`);
      assert(!chars.has(item.char), `duplicate item "${item.char}" in ${script.id}`);
      chars.add(item.char);
      if (script.kind === 'cloze') {
        assert(
          typeof item.sentence === 'string' && item.sentence.includes('___'),
          `${script.id}/${stage.id} "${item.char}" needs a ___ blank`
        );
        assert(Boolean(item.sentenceEn), `${script.id}/${stage.id} "${item.char}" needs sentenceEn`);
      }
      if (script.kind === 'vocab' || script.kind === 'articles') {
        assert(Boolean(item.meaning), `${script.id}/${stage.id} "${item.char}" needs meaning`);
      }
    }
  }

  const all = allCharsInScript(script.id);
  assert(all.length >= 6, `${script.id} needs 6+ items so A–F quizzes have distractors (${all.length})`);
  assert(uniqueCount(all) === all.length, `${script.id} allCharsInScript has duplicates`);
}

function uniqueCount(list) {
  return new Set(list.map((c) => c.char)).size;
}

const writing = Object.values(SCRIPTS).filter((s) => s.group === 'writing');
const words = Object.values(SCRIPTS).filter((s) => s.group === 'words');
const special = Object.values(SCRIPTS).filter((s) => s.group === 'special');
assert(writing.length === 3, 'three writing tracks');
assert(words.map((s) => s.id).join(',') === 'a1,a2,b1,b2,c1,c2', 'CEFR A1–C2 word tracks');
assert(special.map((s) => s.id).join(',') === 'office,home', 'office and home specials');

const store = new Map();
globalThis.localStorage = {
  getItem(key) {
    return store.has(key) ? store.get(key) : null;
  },
  setItem(key, value) {
    store.set(key, String(value));
  },
  removeItem(key) {
    store.delete(key);
  },
};

assert(storageAvailable() === true, 'storageAvailable with mock');
const empty = loadProfile();
assert(empty.version === 1, 'empty profile version');
assert(empty.scripts.a1.passedStageIds.length === 0, 'empty a1 progress');
empty.scripts.alphabet.taughtStageIds.push('abc-0');
empty.lastPath = '#/alphabet/abc-0/learn';
assert(saveProfile(empty) === true, 'saveProfile');
const reloaded = loadProfile();
assert(reloaded.scripts.alphabet.taughtStageIds.includes('abc-0'), 'reload taught stages');
assert(reloaded.lastPath === '#/alphabet/abc-0/learn', 'reload lastPath');
resetScriptProgress(reloaded, 'alphabet');
assert(reloaded.scripts.alphabet.taughtStageIds.length === 0, 'reset one script');
assert(reloaded.lastPath === '#/', 'reset lastPath when it belonged to that script');
const wiped = resetProfile();
assert(wiped.scripts.c2.answered === 0, 'resetProfile clears c2');
assert(!store.has('de-progress-v1'), 'resetProfile removes storage key');

if (failed) {
  console.error(`\n${failed} checks failed`);
  process.exit(1);
}
console.log(`ok  ${EXPECTED.length} scripts, ${Object.values(SCRIPTS).reduce((n, s) => n + s.stages.length, 0)} stages`);
