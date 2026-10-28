/**
 * WRITING SAMPLES — THE CONTENT DATA STRUCTURE
 * ------------------------------------------------------------------
 * This file drives the "Selected Work" index and the article reading
 * pages (/work/<slug>). Add, edit or remove entries here; no component
 * needs to change.
 *
 * TWO KINDS OF ENTRY
 *
 * 1. status: "placeholder"
 *    A suggested direction that has NOT been written yet. It is shown
 *    on the site with an honest "Suggested · Not yet written" label and
 *    has no link. Replace it by changing status to "published" and
 *    adding the fields below.
 *
 * 2. status: "published"
 *    A real piece of writing. It shows an excerpt and a working
 *    "Read Sample" link to /work/<slug>. Required fields:
 *      slug      – lowercase-with-dashes, unique. Becomes the URL.
 *      title     – the headline.
 *      category  – one of the ids in `categories` below.
 *      summary   – one or two sentences for the index.
 *      intro     – the standfirst shown at the top of the article.
 *      body      – the article, as a list of blocks (see Block).
 *    Optional:
 *      excerpt   – a short pull from the piece for the index.
 *      context   – e.g. "Self-initiated, 2026". Say only what is true.
 *      draft     – true for illustrative text that the portfolio owner did
 *                  not write herself. It is labelled "Sample draft" on the
 *                  site. Delete the flag (and replace the text) once her own
 *                  piece is ready.
 *
 * BLOCK TYPES for `body`: "p", "h2", "quote", and "card" (a framed panel
 * used for emails, notices and side-by-side versions of a text).
 *
 * Reading time is calculated automatically from the word count.
 *
 * EXAMPLE (copy, un-comment and fill in)
 *
 * {
 *   status: "published",
 *   slug: "my-first-essay",
 *   title: "The title of the piece",
 *   category: "editorial",
 *   summary: "One or two sentences about the piece.",
 *   excerpt: "A short line pulled from the article.",
 *   intro: "A standfirst that sets up the article.",
 *   context: "Self-initiated",
 *   body: [
 *     { type: "p", text: "First paragraph." },
 *     { type: "h2", text: "A subheading" },
 *     { type: "p", text: "Second paragraph." },
 *     { type: "quote", text: "A pulled quotation." },
 *   ],
 * },
 */

export type CategoryId = "editorial" | "content" | "research" | "communications";

export interface Category {
  id: CategoryId;
  number: string;
  title: string;
  description: string;
}

/** The four portfolio areas. These are areas of interest, not completed projects. */
export const categories: Category[] = [
  {
    id: "editorial",
    number: "01",
    title: "Editorial Writing",
    description:
      "Essays, close readings and reviews, where argument, voice and structure carry the piece.",
  },
  {
    id: "content",
    number: "02",
    title: "Content & Copywriting",
    description:
      "Clear, audience-aware writing for the web: articles, short-form copy and brand stories.",
  },
  {
    id: "research",
    number: "03",
    title: "Research & Analysis",
    description:
      "Explainers and briefs built on gathered sources, drawing on literature, history and political science.",
  },
  {
    id: "communications",
    number: "04",
    title: "Professional Communications",
    description:
      "Press notes, statements and organisational messaging written for a specific audience and purpose.",
  },
];

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | {
      type: "card";
      /** Small heading above the panel, e.g. "Version 1 · Formal". */
      label: string;
      /** Optional serif heading inside the panel, e.g. an email subject line. */
      heading?: string;
      paragraphs: string[];
      /** Optional closing lines, e.g. a signature. */
      signoff?: string[];
      /** Optional line under the panel, e.g. who the version is for. */
      note?: string;
    };

function blockText(block: Block): string {
  if (block.type !== "card") return block.text;
  return [block.label, block.heading, ...block.paragraphs, ...(block.signoff ?? []), block.note]
    .filter(Boolean)
    .join(" ");
}

interface SampleBase {
  slug: string;
  title: string;
  category: CategoryId;
  summary: string;
}

export interface PlaceholderSample extends SampleBase {
  status: "placeholder";
}

export interface PublishedSample extends SampleBase {
  status: "published";
  excerpt?: string;
  intro: string;
  context?: string;
  /** True for illustrative text not written by the portfolio owner. Shows a "Sample draft" label. */
  draft?: boolean;
  body: Block[];
}

export type WritingSample = PlaceholderSample | PublishedSample;

export const samples: WritingSample[] = [
  {
    status: "published",
    draft: true,
    slug: "tagore-close-reading",
    title: "A prayer that takes its time",
    category: "editorial",
    summary: "A close reading of Tagore’s “Where the Mind Is Without Fear”, and what its grammar is really asking for.",
    excerpt: "The enemy there isn’t a foreign power. It is habit.",
    intro: "Most poems about freedom begin with a flag or a fight. This one begins with a mind. A close reading of Tagore’s “Where the Mind Is Without Fear”.",
    context: "Sample draft · close reading",
    body: [
      {
        type: "p",
        text: "Most poems about freedom begin with a flag or a fight. Tagore’s begins with a mind, and the poem waits until its last line to say what it wants.",
      },
      {
        type: "p",
        text: "Read it again and notice the grammar. Almost every line starts with “Where”. There is no main verb for most of the poem, only a list of conditions: the head held high, knowledge free, the world not broken into fragments by narrow walls. It is like someone describing a house in great detail before telling you that this is where they want to live. The sentence only turns at the end, with the request itself: “let my country awake.” Everything before it has been the answer to a question we never heard. Awake to what?",
      },
      {
        type: "p",
        text: "What interests me is the list. Tagore could have asked for rulers to leave, for taxes to fall, for land. He asks for fearlessness, honest speech, and reason that has not lost its way “into the dreary desert sand of dead habit.” That last phrase is the one I keep going back to. The enemy there isn’t a foreign power. It is habit, the things we go on doing because we have always done them. The poem was written under colonial rule, and its sharpest image is aimed at ourselves.",
      },
      {
        type: "p",
        text: "The middle lines work the same way. “Narrow domestic walls” could mean caste, or religion, or the household, and the poem doesn’t choose. I think that is deliberate. By not naming the wall, it lets every reader find their own.",
      },
      {
        type: "p",
        text: "It is also a prayer, addressed to a “Father”, and that changes how the demands sound. A speech would say we must. A prayer says let it be so. There is humility in that. The poet knows these things can’t be ordered, only hoped for and worked towards. The striving is ours (“tireless striving stretches its arms towards perfection”), but the leading forward is “by thee”.",
      },
      {
        type: "p",
        text: "So, as I read it, the poem’s argument is that a free country is first a condition of its people and only then a place. Fear gone, knowledge open, speech honest. Without those, independence would be little more than a change of address.",
      },
      {
        type: "p",
        text: "More than a hundred years after it appeared in English, it still reads like a checklist, and not an easy one to finish.",
      },
    ],
  },
  {
    status: "published",
    draft: true,
    slug: "second-shelf-brand-story",
    title: "Second Shelf: a brand story",
    category: "content",
    summary: "The story of an invented secondhand bookshop in Prayagraj, told in a warm, plain voice.",
    excerpt: "Second Shelf began with a cupboard that wouldn’t close.",
    intro: "A short brand story for a made-up bookshop near Katra. The shop and the people in it are fictional.",
    context: "Sample draft · fictional brand",
    body: [
      { type: "p", text: "Second Shelf began with a cupboard that wouldn’t close." },
      {
        type: "p",
        text: "Ritu Dwivedi had just finished her MA in English and had no idea what to do with four years of books. Selling them to the raddiwala felt wrong. Keeping them meant sleeping beside them. So she carried two bags to a tiny room near Katra that her uncle used for storing ceiling fans, painted SECOND SHELF on a plank, and sat down on a plastic stool to see what would happen.",
      },
      {
        type: "p",
        text: "Mostly, students came. They wanted a cheap copy of Mrs Dalloway, or last year’s notes on the Constitution, and they stayed longer than they meant to because there was chai on a stove at the back. Ritu began pencilling the price on the first page of every book. Then, without really deciding to, she began adding a line. “Read this one on a train.” “Skip chapter three, it’s fine.”",
      },
      {
        type: "p",
        text: "Eight years on, the room has got a little bigger and the fans are long gone. Most books still cost less than a plate of samosas. Many carry two or three pencilled notes from people who never met each other.",
      },
      {
        type: "p",
        text: "If you walk past, you’ll probably see her stool by the door. Ask what she’s reading. She’ll tell you, and then hand you something else.",
      },
    ],
  },
  {
    status: "published",
    draft: true,
    slug: "tone-of-voice-library-notice",
    title: "One notice, three voices",
    category: "content",
    summary: "A single library announcement rewritten in a formal, a friendly and a playful tone, each for a different reader.",
    excerpt: "Don’t panic. The books are fine.",
    intro: "“The library will be closed on Sunday.” Same news, three readers, three ways of saying it. The library is fictional.",
    context: "Sample draft · tone-of-voice exercise",
    body: [
      {
        type: "card",
        label: "Version 1 · Formal",
        heading: "Notice",
        paragraphs: [
          "All students, faculty members and registered readers are informed that the library will remain closed on Sunday for its annual stock verification and for the repair of the main reading hall.",
          "On that day, no books will be issued or returned, and the reading rooms and the digital resources section will not be available. Members whose books fall due on Sunday will not be charged a late fee and may return them on Monday, when the library reopens at its usual time of 9:00 a.m. The online catalogue will remain accessible throughout the closure.",
          "Members who require a particular title over the weekend are requested to collect it before closing time on Saturday. Any queries may be directed to the circulation desk by email.",
          "The library regrets any inconvenience caused and thanks all members for their cooperation.",
        ],
        signoff: ["By order of the Librarian"],
        note: "For the official notice board and formal email, read by students, faculty and parents who expect an institution to sound official.",
      },
      {
        type: "card",
        label: "Version 2 · Friendly",
        heading: "Heads up: the library is closed this Sunday",
        paragraphs: [
          "Hi everyone,",
          "A quick note so nobody makes the trip for nothing. On Sunday, the library will be closed while we count every book on the shelves and get the reading hall repaired. Yes, the fan that has been squeaking since July is finally getting fixed.",
          "If you have a book due that day, don’t worry about it. There’s no late fee. Bring it back on Monday, when we open again at 9.",
          "If you need something for the weekend, borrow it before we close on Saturday. The online catalogue will still be up, so you can check what’s available from home. And if you’re not sure what to read, ask at the desk. We always have a few ideas.",
        ],
        signoff: ["See you Monday,", "The Library Team"],
        note: "For a college email or class WhatsApp group, read by regular members who know the staff.",
      },
      {
        type: "card",
        label: "Version 3 · Playful",
        heading: "The library is taking Sunday off",
        paragraphs: [
          "Don’t panic. The books are fine. On Sunday they get a day to themselves, which means every single one will be counted, dusted and gently told off for hiding on the wrong shelf. The reading hall is also getting its yearly repair, so even the squeaky fan finally gets some attention.",
          "For one day only: no borrowing, no returning, no reading rooms. Anything due on Sunday is forgiven, so you can leave your guilt and your late fee at home.",
          "Your plan for the weekend:\nSaturday: grab what you need before we close.\nSunday: go outside. Or finally watch that series everyone keeps talking about.\nMonday, 9 a.m.: we’re back, and the books are very well rested.",
          "The catalogue stays online if you need to check something at midnight, as you do.",
        ],
        signoff: ["Quietly yours,", "The Library Team"],
        note: "For an Instagram post or a poster at the entrance, aimed at students who scroll past most notices.",
      },
    ],
  },
  {
    status: "published",
    draft: true,
    slug: "amul-hoardings-campaign-review",
    title: "Campaign review: Amul’s topical hoardings",
    category: "research",
    summary: "Who the long-running Amul ads speak to, what makes them work, and the one thing worth changing.",
    excerpt: "A pun lands in three seconds, and no one has to decide to pay attention.",
    intro: "A short review of one of India’s best-known advertising campaigns: the audience, the strengths, and one change.",
    context: "Sample draft · campaign review",
    body: [
      {
        type: "p",
        text: "You have probably seen an Amul hoarding without meaning to. A girl in a polka-dot frock, a line of text, a pun on whatever was in the news that week. That is the whole ad, and it has been running in roughly this form since the 1960s.",
      },
      { type: "h2", text: "Who it speaks to" },
      {
        type: "p",
        text: "It isn’t aimed at a niche. The audience is anyone who reads a newspaper or sits in traffic: families, office-goers, the person who buys butter without thinking about brands at all. The ad doesn’t try to sell to them in the moment. It tries to be the thing they smile at on the way to work, so that the name is already familiar when they reach the shop.",
      },
      { type: "h2", text: "What works" },
      {
        type: "p",
        text: "Three things. The first is speed. The ads respond to events while people are still talking about them, which makes a butter brand feel like part of the day’s conversation. The second is how little there is to read. A pun lands in three seconds, and no one has to decide to pay attention. The third is consistency. The girl has barely changed in decades, so you recognise the ad before you read a word of it.",
      },
      {
        type: "p",
        text: "The tone matters too. It teases a cricket result or a budget announcement without sounding angry, and that is harder than it looks.",
      },
      { type: "h2", text: "What I would change" },
      {
        type: "p",
        text: "The one thing is small. In many of the ads, the butter has almost vanished. You remember the joke, then have to think for a second about what it was selling. The tagline at the bottom does the work, but I’d like the product to show up inside the joke more often. An ad that is remembered without its brand is only half working.",
      },
      {
        type: "p",
        text: "Amul probably doesn’t need the help, since the girl herself has become the brand. A newer brand copying this style would have a real problem, though.",
      },
    ],
  },
  {
    status: "published",
    draft: true,
    slug: "media-pitch-second-shelf",
    title: "A media pitch for a story worth telling",
    category: "communications",
    summary: "A short pitch email to a journalist about an invented bookshop, with a subject line meant to get opened.",
    excerpt: "Prayagraj bookshop where strangers leave each other notes in pencil.",
    intro: "A pitch to a local journalist about Second Shelf, the invented bookshop from the brand story. The shop, and the pitch, are for practice.",
    context: "Sample draft · practice pitch",
    body: [
      {
        type: "card",
        label: "Email",
        heading: "Subject: Prayagraj bookshop where strangers leave each other notes in pencil",
        paragraphs: [
          "Dear [Name],",
          "A secondhand bookshop near Katra has an unusual habit. Every book has its price pencilled on the first page, and over the years readers have started adding notes for whoever buys it next. “Read this one on a train.” “Skip chapter three.” Some books now carry three or four notes from people who never met.",
          "The shop is Second Shelf, started eight years ago by Ritu Dwivedi, an MA English graduate who couldn’t part with her textbooks. Most books still cost less than a plate of samosas, which matters in a city full of students.",
          "I think it could make a short feature on how a small shop built a community without an app or an advertisement. Ritu is happy to talk, and the notes themselves photograph well.",
          "Could we set up a 15-minute call, or a visit, this week? I can send photos and a few quotes beforehand.",
        ],
        signoff: ["Thank you for your time,", "Shipra Tiwari", "+91 8318455633"],
        note: "Pitched to a local newspaper or city magazine. The hook is in the subject line; the details follow in plain order.",
      },
    ],
  },
  {
    status: "published",
    draft: true,
    slug: "right-to-information-explainer",
    title: "Why can you ask the government a question?",
    category: "research",
    summary: "A plain-language explainer on India’s Right to Information Act: where it came from, how to use it, and where it falls short.",
    excerpt: "An ordinary person asking an ordinary question was not possible before 2005.",
    intro: "A plain-language explainer on India’s Right to Information Act, with sources listed at the end.",
    context: "Sample draft · explainer",
    body: [
      {
        type: "p",
        text: "Government offices run on files: who got a ration card, how much a road cost, why a pension stopped. For a long time, the people those files were about had no legal way to look at them.",
      },
      {
        type: "p",
        text: "That changed in 2005. The Right to Information Act came fully into force in October that year, and it says, simply, that any citizen can ask a public authority for information and expect an answer.",
      },
      { type: "h2", text: "Where it came from" },
      {
        type: "p",
        text: "The law didn’t start in Parliament. In the 1990s, a group in rural Rajasthan, the Mazdoor Kisan Shakti Sangathan, began asking local officials for the records behind village works: muster rolls, bills, payments. Villagers found that the records showed payments to people who said they had never been paid. The group read the records aloud at public hearings so everyone could check them against what they knew. The demand for a national law grew out of that. Several states passed their own versions before the central Act.",
      },
      { type: "h2", text: "How to use it" },
      {
        type: "p",
        text: "You write to the public authority you want information from and say what you want to know. Central government departments charge a ₹10 fee, though states set their own. The office is supposed to reply within 30 days, or within 48 hours if the information concerns someone’s life or liberty. If you get no reply, or an answer you think is wrong, you can appeal first to a senior officer in the same department, and then to the Information Commission. An officer who delays without good reason can be fined ₹250 a day, up to ₹25,000.",
      },
      { type: "h2", text: "What you can’t ask for" },
      {
        type: "p",
        text: "Not everything is open. Section 8 of the Act protects certain categories, such as information that could threaten national security, or that would invade someone’s privacy with no public interest in sharing it. Some intelligence and security organisations are largely outside the Act.",
      },
      { type: "h2", text: "Where it falls short" },
      {
        type: "p",
        text: "The law is only as strong as the offices that apply it. Information Commissions in several places have long backlogs, so a second appeal can take a long time. Critics also argued that a 2019 amendment, which left the Centre to decide commissioners’ terms and pay, weakened the commissions’ independence. People who use the Act to expose wrongdoing have sometimes faced threats as well.",
      },
      {
        type: "p",
        text: "Still, an ordinary person asking an ordinary question was not possible before 2005. Whether they get a useful answer depends on how long they are willing to keep asking.",
      },
      { type: "h2", text: "Sources" },
      {
        type: "p",
        text: "The Right to Information Act, 2005 (text at indiacode.nic.in).\nRTI Online portal, Government of India (rtionline.gov.in).\nCentral Information Commission (cic.gov.in).",
      },
    ],
  },
  {
    status: "published",
    draft: true,
    slug: "press-note-sangam-pages",
    title: "A press note for an imagined literary festival",
    category: "communications",
    summary: "A practice press release for a fictional student-run literature festival, written to show structure, tone and audience awareness.",
    excerpt: "A new student-run literature festival opens in Prayagraj on 20 February.",
    intro: "A practice press release for Sangam Pages, a fictional literature festival. The festival, the venue, the dates and the people named are all invented.",
    context: "Sample draft · practice press release",
    body: [
      {
        type: "card",
        label: "For immediate release",
        heading: "A new student-run literature festival opens in Prayagraj on 20 February",
        paragraphs: [
          "Three days of readings, translation workshops and open mic nights, free to attend",
          "Prayagraj, 12 January 2027: Sangam Pages, a new literature festival organised by students and young writers from the city, will run from 20 to 22 February at the Banyan Courtyard in Civil Lines. Entry is free.",
          "The programme includes readings in Hindi, Urdu and English, a workshop on translating poetry between the three, a panel on writing for newspapers and the web, and an open mic evening for first-time performers. A secondhand book market will run alongside the sessions.",
          "“Prayagraj has been a city of writers for a long time, but most of the conversation happens in classrooms and tea shops,” said Anjali Verma, festival director. “We wanted to bring it into one place, and make sure a first-year student can sit in the same room as a published author.”",
          "Festival details\nWhat: Sangam Pages literature festival\nWhen: 20 to 22 February 2027, 10 a.m. to 7 p.m.\nWhere: The Banyan Courtyard, Civil Lines, Prayagraj\nEntry: Free. Workshop seats are limited, so advance registration is needed.",
          "Registration for workshops opens on 1 February at sangampages.example.",
          "About Sangam Pages\nSangam Pages is a volunteer-run festival created by students and early-career writers in Prayagraj. It aims to give new voices and established writers a shared space, in the city’s own languages.",
          "Media contact\n[Name], Media Coordinator\nmedia@sangampages.example | [phone number]",
        ],
        signoff: ["###"],
        note: "For journalists and editors, who need the news in the first paragraph and the practical details in one place.",
      },
    ],
  },
];

export const publishedSamples = samples.filter(
  (s): s is PublishedSample => s.status === "published",
);

export function findPublished(slug: string): PublishedSample | undefined {
  return publishedSamples.find((s) => s.slug === slug);
}

export function categoryOf(id: CategoryId): Category {
  return categories.find((c) => c.id === id) ?? categories[0];
}

/** Reading time in whole minutes, based on 200 words per minute. */
export function readingMinutes(sample: PublishedSample): number {
  const words = [sample.intro, ...sample.body.map(blockText)]
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
