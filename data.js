/** Staged letter data for the German alphabet, umlauts, and articles. */

import { VOCAB_SCRIPTS } from './vocab.js';
import { OFFICE_SCRIPT } from './office.js';
import { HOME_SCRIPT } from './home.js';

const VOWEL_HINTS = {
  a: 'Like “ah” in father',
  e: 'Like “e” in get — a short German e',
  i: 'Like “ee” in see',
  o: 'Like “o” in or, but rounder',
  u: 'Like “oo” in food',
};

function row(id, title, subtitle, pairs, extra = {}) {
  return {
    id,
    title,
    subtitle,
    teach: extra.teach || 'cards',
    intro: Boolean(extra.intro),
    mix: Boolean(extra.mix),
    chars: pairs.map(([char, romaji, hint, meaning]) => ({
      char,
      romaji,
      hint: hint || '',
      meaning: meaning || '',
    })),
  };
}

export const SCRIPTS = {
  alphabet: {
    id: 'alphabet',
    label: 'Alphabet',
    kicker: 'Stage 0 first',
    group: 'writing',
    kind: 'letters',
    blurb: 'The German ABC. Start at Stage 0 if you have never learned these as German sounds.',
    stages: [
      row(
        'abc-0',
        'Stage 0 · First sounds',
        'You do not need any German yet. Each letter is one sound. Learn a e i o u, then pick them from the boxes.',
        [
          ['a', 'ah', VOWEL_HINTS.a],
          ['e', 'eh', VOWEL_HINTS.e],
          ['i', 'ee', VOWEL_HINTS.i],
          ['o', 'oh', VOWEL_HINTS.o],
          ['u', 'oo', VOWEL_HINTS.u],
        ],
        { intro: true }
      ),
      row('abc-1', 'Stage 1 · Soft consonants', 'b d g l m n — clear voiced sounds.', [
        ['b', 'beh', 'Like b in bed'],
        ['d', 'deh', 'Like d in dog'],
        ['g', 'geh', 'Hard g, as in go — not English “j”'],
        ['l', 'ell', 'A clear front L'],
        ['m', 'emm', 'Like m in me'],
        ['n', 'enn', 'Like n in no'],
      ]),
      row('abc-2', 'Stage 2 · Stop consonants', 'p t k — the voiceless partners.', [
        ['p', 'peh', 'Like p in pen'],
        ['t', 'teh', 'Like t in ten'],
        ['k', 'kah', 'Like k in key'],
        ['f', 'eff', 'Like f in fun'],
        ['s', 'ess', 'Often like z at the start of a word: Sonne'],
        ['h', 'hah', 'Like h in hat, silent after a vowel'],
      ]),
      row('abc-3', 'Stage 3 · The rest', 'r w j z — the letters English speakers mishear.', [
        ['r', 'err', 'A throat tap or uvular r, not an English r'],
        ['w', 'veh', 'Sounds like English v — Wein is “vine”'],
        ['v', 'fau', 'Often like f — Vater is “fah-ter”'],
        ['j', 'yot', 'Like y in yes — ja is “yah”'],
        ['z', 'tset', 'Always “ts”, as in Zeit'],
        ['c', 'tseh', 'Rare alone; usually in ch or ck'],
      ]),
      row('abc-4', 'Stage 4 · Rare letters', 'q x y — mostly in loanwords.', [
        ['q', 'koo', 'Almost always qu, like in Qualität'],
        ['x', 'iks', 'Like ks in box'],
        ['y', 'ypsilon', 'Like ü in many words: Typ'],
        ['ß', 'eszett', 'A sharp s after a long vowel — Straße'],
      ]),
      row(
        'abc-5',
        'Stage 5 · Capital vowels',
        'German nouns start with a capital. Learn A E I O U.',
        [
          ['A', 'ah', 'Capital A'],
          ['E', 'eh', 'Capital E'],
          ['I', 'ee', 'Capital I'],
          ['O', 'oh', 'Capital O'],
          ['U', 'oo', 'Capital U'],
        ]
      ),
      row(
        'abc-6',
        'Stage 6 · Capital consonants',
        'B D G L M N P T K — the everyday capitals.',
        [
          ['B', 'beh'],
          ['D', 'deh'],
          ['G', 'geh'],
          ['L', 'ell'],
          ['M', 'emm'],
          ['N', 'enn'],
          ['P', 'peh'],
          ['T', 'teh'],
          ['K', 'kah'],
        ],
        { teach: 'grid' }
      ),
      row(
        'abc-mix',
        'Stage 7 · Mixed review',
        'All alphabet letters you have unlocked, shuffled.',
        [],
        { teach: 'grid', mix: true }
      ),
    ],
  },
  umlauts: {
    id: 'umlauts',
    label: 'Umlauts',
    kicker: 'Ä Ö Ü ß',
    group: 'writing',
    kind: 'letters',
    blurb: 'The letters English does not have, plus German letter teams like ch, sch, ei, and eu.',
    stages: [
      row(
        'um-0',
        'Stage 0 · First umlauts',
        'Four marks that make German look like German. Learn ä ö ü ß, then pick them from A–F.',
        [
          ['ä', 'ah-umlaut', 'Like e in bed — spelled a with two dots'],
          ['ö', 'oh-umlaut', 'Say “eh” with rounded lips — French eu'],
          ['ü', 'oo-umlaut', 'Say “ee” with rounded lips — French u'],
          ['ß', 'eszett', 'Sharp s. Never starts a word. Straße, not Strasse, in Germany'],
        ],
        { intro: true }
      ),
      row('um-1', 'Stage 1 · Capital umlauts', 'Ä Ö Ü and capital ẞ.', [
        ['Ä', 'ah-umlaut', 'Capital Ä — Ärzte'],
        ['Ö', 'oh-umlaut', 'Capital Ö — Österreich'],
        ['Ü', 'oo-umlaut', 'Capital Ü — Über'],
        ['ẞ', 'eszett', 'Capital eszett — rare, used when the whole word is caps'],
      ]),
      row('um-2', 'Stage 2 · Hiss teams', 'ch sch tsch ck — one sound from two letters.', [
        ['ch', 'kh', 'Ich-Laut after i/e; ach-Laut after a/o/u'],
        ['sch', 'sh', 'Like sh in ship — Schule'],
        ['tsch', 'ch', 'Like ch in chat — Deutsch'],
        ['ck', 'k', 'A doubled k after a short vowel — Ecke'],
        ['pf', 'pf', 'Both sounds, together — Pferd, Apfel'],
        ['tz', 'ts', 'Like z, after a short vowel — Platz'],
      ]),
      row('um-3', 'Stage 3 · Vowel teams', 'ei ie eu äu au — two letters, one sound.', [
        ['ei', 'eye', 'Always like English eye — ein, mein, Zeit'],
        ['ie', 'ee', 'A long ee — Liebe, sie'],
        ['eu', 'oy', 'Like oy in boy — Deutsch, Freund'],
        ['äu', 'oy', 'Same sound as eu — Häuser'],
        ['au', 'ow', 'Like ow in now — Haus, blau'],
        ['ai', 'eye', 'Same as ei, rarer — Kaiser, Mai'],
      ]),
      row('um-4', 'Stage 4 · Start clusters', 'st sp ng qu — German word beginnings.', [
        ['st', 'sht', 'At the start: sht, as in Stein'],
        ['sp', 'shp', 'At the start: shp, as in spielen'],
        ['ng', 'ng', 'Like ng in sing — never a hard g'],
        ['qu', 'kv', 'Sounds like kv — Qualität, Quelle'],
        ['th', 't', 'Just t in German — Theater, Thema'],
        ['ph', 'f', 'Like f — Philosophie'],
      ]),
      row(
        'um-mix',
        'Stage 5 · Mixed review',
        'All umlauts and letter teams you have unlocked.',
        [],
        { teach: 'grid', mix: true }
      ),
    ],
  },
  articles: {
    id: 'articles',
    label: 'Articles',
    kicker: 'der die das',
    group: 'writing',
    kind: 'articles',
    blurb: 'German nouns carry gender. Learn der, die, das and the case forms as meaning marks.',
    stages: [
      row(
        'art-0',
        'Stage 0 · First articles',
        'Articles carry gender. Learn six everyday forms, then pick them from A–F.',
        [
          ['der', 'dehr', '', 'the (masculine nominative)'],
          ['die', 'dee', '', 'the (feminine / plural)'],
          ['das', 'dahs', '', 'the (neuter nominative)'],
          ['ein', 'ine', '', 'a / an (masculine or neuter)'],
          ['eine', 'ine-uh', '', 'a / an (feminine)'],
          ['einen', 'ine-en', '', 'a (masculine accusative)'],
        ],
        { intro: true }
      ),
      row('art-1', 'Stage 1 · The other cases', 'den dem des — object and possession.', [
        ['den', 'den', '', 'the (masculine accusative / plural dative)'],
        ['dem', 'dem', '', 'the (masculine / neuter dative)'],
        ['des', 'des', '', 'the (masculine / neuter genitive)'],
        ['einem', 'ine-em', '', 'a (masculine / neuter dative)'],
        ['einer', 'ine-er', '', 'a (feminine dative / genitive)'],
        ['eines', 'ine-es', '', 'a (masculine / neuter genitive)'],
      ]),
      row('art-2', 'Stage 2 · Negation', 'kein-words: not a / no.', [
        ['kein', 'kine', '', 'no / not a (masculine or neuter)'],
        ['keine', 'kine-uh', '', 'no / not a (feminine / plural)'],
        ['keinen', 'kine-en', '', 'no (masculine accusative)'],
        ['keinem', 'kine-em', '', 'no (masculine / neuter dative)'],
        ['keiner', 'kine-er', '', 'no (feminine dative / genitive)'],
        ['keines', 'kine-es', '', 'no (masculine / neuter genitive)'],
      ]),
      row('art-3', 'Stage 3 · Possessives', 'mein dein sein — my, your, his.', [
        ['mein', 'mine', '', 'my (masculine / neuter)'],
        ['meine', 'mine-uh', '', 'my (feminine / plural)'],
        ['dein', 'dine', '', 'your informal (masculine / neuter)'],
        ['deine', 'dine-uh', '', 'your informal (feminine / plural)'],
        ['sein', 'zine', '', 'his / its'],
        ['ihr', 'eer', '', 'her / their / your formal'],
        ['unser', 'oon-zer', '', 'our'],
        ['euer', 'oy-er', '', 'your (plural informal)'],
      ]),
      row('art-4', 'Stage 4 · Pointing words', 'dieser welcher jeder — this, which, each.', [
        ['dieser', 'dee-zer', '', 'this (masculine)'],
        ['diese', 'dee-zuh', '', 'this (feminine / plural)'],
        ['dieses', 'dee-zes', '', 'this (neuter)'],
        ['welcher', 'vel-kher', '', 'which (masculine)'],
        ['welche', 'vel-khuh', '', 'which (feminine / plural)'],
        ['welches', 'vel-khes', '', 'which (neuter)'],
        ['jeder', 'yay-der', '', 'each / every (masculine)'],
        ['alle', 'ah-luh', '', 'all (plural)'],
      ]),
      row(
        'art-mix',
        'Stage 5 · Mixed review',
        'All articles you have unlocked, shuffled.',
        [],
        { teach: 'grid', mix: true }
      ),
    ],
  },
  ...VOCAB_SCRIPTS,
  ...OFFICE_SCRIPT,
  ...HOME_SCRIPT,
};

export function getScript(scriptId) {
  return SCRIPTS[scriptId] || null;
}

export function getStage(scriptId, stageId) {
  const script = getScript(scriptId);
  if (!script) return null;
  return script.stages.find((s) => s.id === stageId) || null;
}

export function allCharsInScript(scriptId, upToStageIndex = Infinity) {
  const script = getScript(scriptId);
  if (!script) return [];
  const out = [];
  script.stages.forEach((stage, index) => {
    if (index > upToStageIndex) return;
    if (stage.id.endsWith('-mix')) return;
    out.push(...stage.chars);
  });
  return out;
}

function markMixStages() {
  for (const script of Object.values(SCRIPTS)) {
    for (const stage of script.stages) {
      if (stage.id.endsWith('-mix')) {
        stage.mix = true;
      }
    }
  }
}
markMixStages();
