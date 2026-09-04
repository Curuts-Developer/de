/** Home, friends, and neighbors: learn the word, then fill it into a sentence. */

function pack(id, title, subtitle, items, extra = {}) {
  return {
    id,
    title,
    subtitle,
    teach: extra.teach || 'cards',
    intro: Boolean(extra.intro),
    mix: Boolean(extra.mix),
    chars: items.map(([char, romaji, meaning, sentence, sentenceEn]) => ({
      char,
      romaji,
      meaning,
      hint: '',
      sentence,
      sentenceEn,
    })),
  };
}

export const HOME_SCRIPT = {
  home: {
    id: 'home',
    label: 'Home',
    kicker: 'House · friends · neighbors',
    blurb: 'One topic: home life, friends, and the people next door. Fill the word into a sentence.',
    kind: 'cloze',
    group: 'special',
    stages: [
      pack(
        'home-0',
        'Stage 0 · First home words',
        'House, room, family, friend, neighbor. See the sentence, then fill the blank with A–F.',
        [
          ['Haus', 'hows', 'house / home', 'Das ist mein ___.', 'This is my house.'],
          ['Zimmer', 'tsim-mer', 'room', 'Mein ___ ist im ersten Stock.', 'My room is on the first floor.'],
          ['Familie', 'fah-mee-lee-uh', 'family', 'Ich wohne mit meiner ___.', 'I live with my family.'],
          ['Freund', 'froynt', 'friend', 'Ein ___ kommt zu Besuch.', 'A friend is coming over.'],
          ['Nachbar', 'nakh-bar', 'neighbor', 'Ich grüße meinen ___.', 'I greet my neighbor.'],
          ['Nachbarschaft', 'nakh-bar-shahft', 'neighborhood', 'Die ___ ist ruhig.', 'The neighborhood is quiet.'],
        ],
        { intro: true }
      ),
      pack('home-1', 'Stage 1 · The house', 'Entrance, kitchen, bath, keys, furniture.', [
        ['Eingang', 'ine-gahng', 'entrance', 'Die Schuhe stehen am ___.', 'The shoes are at the entrance.'],
        ['Küche', 'kü-khuh', 'kitchen', 'Mama ist in der ___.', 'Mom is in the kitchen.'],
        ['Bad', 'baht', 'bathroom', 'Abends gehe ich ins ___.', 'I go to the bathroom in the evening.'],
        ['Fenster', 'fens-ter', 'window', 'Bitte öffnen Sie das ___.', 'Please open the window.'],
        ['Tür', 'tür', 'door', 'Bitte schließen Sie die ___.', 'Please close the door.'],
        ['Schlüssel', 'shlüss-el', 'key', 'Vergessen Sie den ___ nicht.', 'Please don’t forget the key.'],
        ['Möbel', 'mö-bel', 'furniture', 'Ich habe neue ___ gekauft.', 'I bought new furniture.'],
        ['erste Stock', 'air-stuh shtok', 'first floor (upstairs)', 'Das Schlafzimmer ist im ___.', 'The bedroom is on the first floor.'],
      ]),
      pack('home-2', 'Stage 2 · Home life', 'Clean, cook, laundry, live, go home.', [
        ['Putzen', 'poots-en', 'cleaning', 'Heute mache ich das ___.', 'I will do the cleaning today.'],
        ['Wäsche', 'vesh-uh', 'laundry', 'Die ___ ist fertig.', 'The laundry is finished.'],
        ['Kochen', 'kokh-en', 'cooking', 'Ich mag das ___.', 'I like cooking.'],
        ['Einkaufen', 'ine-kow-fen', 'shopping', 'Ich gehe ___ im Supermarkt.', 'I shop at the supermarket.'],
        ['Müll', 'müll', 'trash', 'Bitte bringen Sie den ___ raus.', 'Please take out the trash.'],
        ['wohnen', 'voh-nen', 'to live (somewhere)', 'Ich ___ gern hier.', 'I like living here.'],
        ['nach Hause', 'nahkh how-zuh', 'home (direction)', 'Geh bitte früh ___.', 'Please go home early.'],
        ['schlafen', 'shlah-fen', 'to sleep', 'Es ist wichtig, früh zu ___.', 'It is important to sleep early.'],
      ]),
      pack('home-3', 'Stage 3 · Friends', 'Hang out, meet, invite, hobbies.', [
        ['treffen', 'tref-fen', 'to meet / hang out', 'Wir ___ uns am Abend.', 'We meet in the evening.'],
        ['einladen', 'ine-lah-den', 'to invite', 'Ich möchte dich ___.', 'I would like to invite you.'],
        ['zusammen', 'tsoo-zahm-en', 'together', 'Lass uns ___ nach Hause gehen.', 'Let’s go home together.'],
        ['Hobby', 'hob-by', 'hobby', 'Was ist dein ___?', 'What is your hobby?'],
        ['reden', 'ray-den', 'to talk', 'Manchmal ___ wir bis in die Nacht.', 'We sometimes talk until night.'],
        ['Verabredung', 'fer-ahp-ray-doong', 'appointment / date', 'Ich halte die ___.', 'I keep the appointment.'],
        ['lustig', 'loos-tikh', 'fun / funny', 'Mit Freunden ist es ___.', 'It is fun with friends.'],
        ['besuchen', 'be-zookh-en', 'to visit', 'Komm mich bald ___.', 'Come visit me soon.'],
      ]),
      pack('home-4', 'Stage 4 · Neighbors', 'Greet, borrow, quiet, noisy, moving.', [
        ['grüßen', 'grü-sen', 'to greet', 'Morgens ___ wir uns.', 'We greet each other in the morning.'],
        ['borgen', 'bor-gen', 'to borrow', 'Darf ich Salz ___?', 'May I borrow salt?'],
        ['leihen', 'ly-en', 'to lend', 'Ich kann dir den Schirm ___.', 'I can lend you the umbrella.'],
        ['laut', 'lowt', 'noisy / loud', 'Die obere Wohnung ist ___.', 'The upstairs flat is noisy.'],
        ['leise', 'ly-zuh', 'quiet', 'Bitte seid nachts ___.', 'Please keep it quiet at night.'],
        ['helfen', 'hel-fen', 'to help', 'Es ist wichtig, Freunden zu ___.', 'It is important to help friends.'],
        ['Umzug', 'oom-tsook', 'move (house)', 'Nächsten Monat ist der ___.', 'The move is next month.'],
        ['Haustier', 'hows-teer', 'pet', 'Wir haben ein ___.', 'We have a pet.'],
      ]),
      pack(
        'home-mix',
        'Stage 5 · Home mixed review',
        'House, friends, and neighbors, shuffled. Fill the blank.',
        [],
        { teach: 'grid', mix: true }
      ),
    ],
  },
};
