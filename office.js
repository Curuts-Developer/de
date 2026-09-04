/** Workplace German: learn the word, then fill it into a sentence. */

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

export const OFFICE_SCRIPT = {
  office: {
    id: 'office',
    label: 'Office',
    kicker: 'Workplace German',
    blurb: 'Meetings, email, and desk work. Learn each word, then fill it into a real office sentence.',
    kind: 'cloze',
    group: 'special',
    stages: [
      pack(
        'off-0',
        'Stage 0 · First office words',
        'Six desk words. See the sentence with the word in it, then pick A–F to fill the blank.',
        [
          ['Firma', 'fir-ma', 'company', 'Ich arbeite bei einer ___.', 'I work at a company.'],
          ['Arbeit', 'ar-bite', 'work / job', 'Heute habe ich viel ___.', 'I have a lot of work today.'],
          ['Besprechung', 'be-shprekh-oong', 'meeting', 'Die ___ beginnt um drei.', 'The meeting starts at three.'],
          ['E-Mail', 'ee-mail', 'email', 'Bitte senden Sie die ___.', 'Please send the email.'],
          ['Chef', 'shef', 'boss', 'Ich melde mich beim ___.', 'I will report to my boss.'],
          ['Überstunden', 'ü-ber-shtoon-den', 'overtime', 'Heute mache ich ___.', 'Today I am working overtime.'],
        ],
        { intro: true }
      ),
      pack('off-1', 'Stage 1 · Meetings', 'Room, materials, presenting, joining.', [
        ['Konferenzraum', 'kon-fe-rents-rowm', 'meeting room', 'Bitte reservieren Sie den ___.', 'Please book the meeting room.'],
        ['Unterlagen', 'oon-ter-lah-gen', 'materials / documents', 'Ich verteile die ___.', 'I will hand out the materials.'],
        ['Präsentation', 'pre-zen-tah-tsyohn', 'presentation', 'Morgen gibt es eine ___.', 'There is a presentation tomorrow.'],
        ['Teilnahme', 'tile-nah-muh', 'participation', 'Ich bestätige meine ___.', 'I confirm my participation.'],
        ['Termin', 'ter-meen', 'appointment / date', 'Bitte prüfen Sie den ___.', 'Please check the appointment.'],
        ['Zeit', 'tsite', 'time', 'Wir haben keine ___.', 'We have no time.'],
        ['Tagesordnung', 'tah-ges-ord-noong', 'agenda', 'Das steht auf der ___.', 'That is on the agenda.'],
        ['entscheiden', 'ent-shy-den', 'to decide', 'Wir müssen jetzt ___.', 'We have to decide now.'],
      ]),
      pack('off-2', 'Stage 2 · Email', 'Send, reply, attach, subject line.', [
        ['senden', 'zen-den', 'to send', 'Bitte ___ Sie diese E-Mail.', 'Please send this email.'],
        ['antworten', 'ant-vor-ten', 'to reply', 'Ich werde sofort ___.', 'I will reply right away.'],
        ['Anhang', 'an-hahng', 'attachment', 'Der ___ fehlt noch.', 'The attachment is still missing.'],
        ['Betreff', 'be-tref', 'subject (email)', 'Bitte schreiben Sie den ___.', 'Please write the subject.'],
        ['Bestätigung', 'be-shtait-ee-goong', 'confirmation', 'Ich warte auf Ihre ___.', 'I am waiting for your confirmation.'],
        ['löschen', 'lösh-en', 'to delete', 'Darf ich das ___?', 'May I delete this?'],
        ['eingegangen', 'ine-ge-gang-en', 'received', 'Die Mail ist ___.', 'The email has been received.'],
        ['Text', 'text', 'body (of email)', 'Bitte lesen Sie den ___.', 'Please read the body.'],
      ]),
      pack('off-3', 'Stage 3 · People at work', 'Boss, colleague, customer, sales.', [
        ['Abteilungsleiter', 'ap-tye-loongs-ly-ter', 'department manager', 'Fragen Sie den ___.', 'Please ask the department manager.'],
        ['Kollege', 'ko-lay-guh', 'colleague', 'Ich spreche mit einem ___.', 'I will talk it over with a colleague.'],
        ['Mitarbeiter', 'mit-ar-by-ter', 'employee / coworker', 'Der ___ ist neu.', 'The employee is new.'],
        ['Kunde', 'koon-duh', 'customer', 'Ein ___ ist da.', 'A customer has arrived.'],
        ['Ansprechpartner', 'an-shprekh-part-ner', 'contact person', 'Ich bin Ihr ___.', 'I am your contact person.'],
        ['Vertrieb', 'fer-treep', 'sales', 'Ich arbeite im ___.', 'I work in sales.'],
        ['Personalabteilung', 'per-zo-nahl-ap-tye-loong', 'HR', 'Bitte rufen Sie die ___ an.', 'Please call HR.'],
        ['Praktikant', 'prak-tee-kant', 'intern', 'Der ___ lernt schnell.', 'The intern learns quickly.'],
      ]),
      pack('off-4', 'Stage 4 · Tasks & deadlines', 'Submit, approve, progress, due date.', [
        ['Frist', 'frist', 'deadline', 'Die ___ ist Freitag.', 'The deadline is Friday.'],
        ['Bericht', 'be-rikht', 'report', 'Bitte schreiben Sie den ___.', 'Please write the report.'],
        ['abgeben', 'ap-gay-ben', 'to submit', 'Ich werde es morgen ___.', 'I will submit it tomorrow.'],
        ['Fortschritt', 'fort-shrit', 'progress', 'Bitte nennen Sie den ___.', 'Please tell me the progress.'],
        ['Bitte', 'bit-tuh', 'request', 'Ich habe eine ___.', 'I have a request.'],
        ['Freigabe', 'fry-gah-buh', 'approval', 'Wir brauchen Ihre ___.', 'We need your approval.'],
        ['erstellen', 'er-shtel-len', 'to create / prepare', 'Ich werde die Datei ___.', 'I will prepare the file.'],
        ['Liefertermin', 'lee-fer-ter-meen', 'delivery date', 'Halten wir den ___?', 'Will we make the delivery date?'],
      ]),
      pack('off-5', 'Stage 5 · Office manners', 'Contact, consult, consider, be late.', [
        ['melden', 'mel-den', 'to get in touch', 'Ich werde mich später ___.', 'I will get in touch later.'],
        ['Rücksprache', 'rük-shprah-khuh', 'consultation', 'Darf ich kurz ___ halten?', 'May I consult you briefly?'],
        ['prüfen', 'prü-fen', 'to consider / check', 'Ich werde das ___.', 'I will check that.'],
        ['abstimmen', 'ap-shtim-men', 'to coordinate', 'Bitte ___ Sie den Termin.', 'Please coordinate the appointment.'],
        ['berichten', 'be-rikh-ten', 'to report', 'Ich werde das Ergebnis ___.', 'I will report the result.'],
        ['Erlaubnis', 'er-lowp-niss', 'permission', 'Ich habe die ___ bekommen.', 'I got permission.'],
        ['Verspätung', 'fer-shpai-toong', 'lateness', 'Entschuldigung für die ___.', 'Sorry for the delay.'],
        ['Pause', 'pow-zuh', 'break', 'Es ist Zeit für eine ___.', 'It is time for a break.'],
      ]),
      pack(
        'off-mix',
        'Stage 6 · Office mixed review',
        'All office sentences, shuffled. Fill the blank.',
        [],
        { teach: 'grid', mix: true }
      ),
    ],
  },
};
