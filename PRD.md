# Product Requirements Document

**German Character Quiz — Alphabet, umlauts, CEFR A1–C2**

| Field | Value |
| --- | --- |
| Product | Staged quiz for German letters, umlauts, articles, and CEFR A1–C2 words |
| Audience | Learners with zero German, then progressing through Council of Europe CEFR levels |
| Hosting | GitHub Pages at https://curuts-developer.github.io/de/ |
| Persistence | `localStorage` on this browser; reset anytime |
| Primary interaction | Learn cards, then tap A–F for the matching letter or word |
| Standard | CEFR (Common European Framework of Reference for Languages), A1–C2 |

---

## 1. Problem

A complete beginner cannot start with a quiz. They have never treated **ä**, **ö**, **ü**, or **ß** as their own letters, and they do not yet know that German nouns carry **der / die / das**. The first experience must **teach** the sound-to-letter mapping (a = **ah**, then later ä ö ü ß) and only then ask them to tap the correct box.

Vocabulary after that must follow the **international CEFR scale**, not a home-grown level names list: A1 and A2 (basic user), B1 and B2 (independent user), C1 and C2 (proficient user).

---

## 2. Goals

1. **Stage 0** is a zero-knowledge lesson: show each letter or word, its sound, and a spoken-English hint before any test.
2. After Stage 0, continue through the **German alphabet**, **umlauts and special letters**, **articles**, then **CEFR A1 → C2 words**.
3. Practice is **six tap targets labeled A–F** (one correct answer).
4. Progress is saved in this browser and can be **reset** with one confirmed action.
5. Ship as a static site on GitHub Pages at **https://curuts-developer.github.io/de/**.

### Non-goals (v1)

- Accounts, cloud sync, handwriting, audio, or a backend.
- Full Goethe / telc / ÖSD exam papers (this is a staged drill, not a mock exam).

---

## 3. Stage 0 (required)

Stage 0 exists on **every track**. It is unlocked on first visit.

### Alphabet Stage 0 — First sounds (vowels)

Teach, one card at a time:

| Letter | Sound | Hint |
| --- | --- | --- |
| a | ah | Like “ah” in *father* |
| e | eh | Like “e” in *get*, or a closed “eh” |
| i | ee | Like “ee” in *see* |
| o | oh | Like “o” in *or*, but rounder |
| u | oo | Like “oo” in *food* |

Copy on the first card: these marks are **German sounds**, not English letter names. The learner must step through **every** card, then tap **Practice**.

Consonants and capital letters come in later stages — not Stage 0 — so beginners start with the five vowels only.

### Umlauts Stage 0

The four letters English does not have: **ä ö ü ß**.

### Articles Stage 0

Six first grammar marks with meaning + sound (der, die, das, ein, eine, einen). Same teach-then-quiz pattern.

### Teach rules

- First visit to a stage **always** opens Learn, not Quiz.
- Stage 0 Learn cannot be skipped until every card is viewed.
- Later stages: a grid or card recap, then Practice.
- After a stage is passed, the learner may jump to Practice.

---

## 4. Later stages

### Alphabet (after Stage 0)

Consonant groups, then capital letters, then mixed review. Same idea as a school ABC chart, in small batches.

### Umlauts and special letters

Capital Ä Ö Ü ẞ, then German letter teams (ch, sch, ei, ie, eu, äu, au, st, sp, ng).

### Articles

Nominative der/die/das, then accusative/dative/genitive forms, ein-words, possessives, and demonstratives.

### CEFR words (A1–C2)

Themed batches aligned to the Council of Europe CEFR:

| Level | User | Scope in this app |
| --- | --- | --- |
| **A1** | Basic | Greetings, people, time, core verbs, food, places |
| **A2** | Basic | Travel, health, plans, feelings, daily errands |
| **B1** | Independent | Work, opinions, reasons, media, environment |
| **B2** | Independent | Argument, workplace, abstract nouns, precise verbs |
| **C1** | Proficient | Register, nuance, academic and professional lexis |
| **C2** | Proficient | Fine distinctions, collocations, high-register verbs |

Office and Home are extra cloze tracks (fill the word into a German sentence). Still A–F, no typing.

---

## 5. Quiz (A–F)

- Prompt: sound (letters) or English meaning (words / articles).
- Six large tiles, labels A–F, one correct German form.
- Distractors from the same track; prefer the current stage, then earlier stages, then later items if the stage has fewer than six.
- Correct: highlight and auto-advance. Wrong: show the right tile; learner taps Next.
- Mastery +1 / −1 per item. Stage passes when every item in the stage has mastery ≥ 2.
- Mixed review stages pass at 10 / 12 correct in that session.
- Passing unlocks the next stage.

---

## 6. Profile

Key: `de-progress-v1` in `localStorage` (survives refresh and tab close; still no server). This is the learner profile for this browser.

Stored per track: taught stages, passed stages, per-item mastery, answer counts. A global `lastPath` resumes the last unfinished stage.

Reset on the home screen clears that key after confirmation. Each track also has its own reset on the stage list. A **Continue** button resumes the last unfinished stage. A **letter chart** shows mastery per glyph or word.

There is no account. Closing the tab does not erase progress. Clearing site data does.

---

## 7. Tech

Vanilla HTML, CSS, and ES modules. Item lists in `data.js`, `vocab.js`, `office.js`, `home.js`. Relative URLs. No build step.

Public site: **https://curuts-developer.github.io/de/** (project Pages on `Curuts-Developer/de`). GitHub Actions deploys `main` to Pages. A `/de/` base tag is applied only on that host so CSS and JS resolve under the repo path.
