/** Alex Jeal Celebrant — copy from client brief (British English, no em dashes). */

/** Gallery strip labels (`siteImages.js` maps ids to editorial photography per tile). */
export const ALEX_GALLERY = [
  { id: "weddings", caption: "Wedding ceremonies" },
  { id: "vows", caption: "Vow renewals and anniversaries" },
  { id: "funerals", caption: "Funerals and celebrations of life" },
  { id: "naming", caption: "Naming and family welcomes" },
  { id: "dj", caption: "DJ hire and dancefloors" },
  { id: "venues", caption: "Venues across the South East" },
  { id: "work", caption: "Alex at work", imgClassName: "object-top" },
  { id: "moments", caption: "Moments with couples and families" },
  { id: "evenings", caption: "Evenings and receptions" },
];

export const SITE = {
  businessName: "Alex Jeal Celebrant",
  tagline: "Ceremonies with personality, warmth, and a fresh approach.",
  domain: "alexjealcelebrant.com",
  email: "alexjealcelebrant@gmail.com",
  phoneDisplay: "07572 036962",
  phoneHref: "tel:+447572036962",
  location: "South East England",
  areas: "Kent, Sussex, Surrey, and beyond",
  instagramHandle: "@alexjealcelebrant",
  instagramUrl: "https://www.instagram.com/alexjealcelebrant/",
};

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "How it works", to: "/process" },
  { label: "Fees", to: "/fees" },
  { label: "FAQ", to: "/faq" },
  { label: "Links", to: "/links" },
  { label: "Terms", to: "/terms" },
  { label: "Contact", to: "/contact" },
];

const baseDesc =
  "Independent celebrant and wedding DJ for weddings, vow renewals, funerals, naming ceremonies, and DJ hire across Kent, Sussex, and Surrey.";

/** Browser tab title + meta description per path (SPA). */
export const ROUTE_META = {
  "/": { title: "Alex Jeal Celebrant | South East celebrant and DJ", description: baseDesc },
  "/about": { title: "About Alex | Alex Jeal Celebrant", description: `About Alex Jeal. ${baseDesc}` },
  "/services": { title: "Services | Alex Jeal Celebrant", description: `Ceremonies and DJ services. ${baseDesc}` },
  "/process": { title: "How it works | Alex Jeal Celebrant", description: `Planning process and what is included. ${baseDesc}` },
  "/fees": { title: "Fees | Alex Jeal Celebrant", description: `Transparent ceremony and DJ fees. ${baseDesc}` },
  "/faq": { title: "FAQ | Alex Jeal Celebrant", description: `Common questions about celebrant-led ceremonies. ${baseDesc}` },
  "/links": { title: "Links | Alex Jeal Celebrant", description: `Instagram and professional links. ${baseDesc}` },
  "/terms": { title: "Terms | Alex Jeal Celebrant", description: `Celebrant terms and conditions. ${baseDesc}` },
  "/contact": { title: "Contact | Alex Jeal Celebrant", description: `Get in touch with Alex Jeal. ${baseDesc}` },
};

export const ABOUT = {
  intro: [
    "Hi, I'm Alex Jeal, an independent celebrant and wedding DJ based in the South East. I specialise in personalised wedding ceremonies, vow renewals, funerals and baby naming ceremonies, all delivered with a fresh approach that puts people, personality, and real connections at the heart of every service.",
    "I regularly work with various venues from countryside barns and private homes to outdoor spaces and both licensed and non-licensed locations. No matter the setting, my focus is always on creating a ceremony that feels genuine, relaxed, traditional or contemporary but most importantly, truly personal.",
    "Much of my career has been spent working with people, planning events and delivering bespoke experiences. That background shapes the way I work as a professional celebrant, calm under pressure, well organised and approachable.",
  ],
  whyTitle: "Why Choose me as your Celebrant?",
  why: [
    "As an independent celebrant, I'm not restricted by traditional formats, scripts, or expectations. Every ceremony I create is written from scratch and tailored to you.",
    "I'm with you every step of the way, from our first conversation to the day of the ceremony itself. I'm always just a phone call or message away if you need guidance, reassurance, or any last minute changes.",
    "I trained with the Academy of Professional Celebrants, gaining the skills and confidence to deliver professional, heartfelt ceremonies across the South East.",
    "Please note, my role is to focus on your story and the heart of your ceremony. As a symbolic celebrant, I do not handle the legal paperwork; most couples choose to visit the registry office a few days before or after the ceremony to sign the official marriage license.",
  ],
};

export const SERVICES = [
  {
    slug: "weddings",
    title: "Weddings",
    summary:
      "Ceremonies designed entirely around you and your story, from barns and gardens to beaches and woodland.",
    body: [
      "I create wedding ceremonies designed entirely around you and your story. Whether you're planning something traditional or modern, formal or laidback or something full of symbolic rituals and cultural traditions, I'll work closely with you to bring your ideas to life.",
      "I am not tied to any set scripts or religious requirements, therefore your wedding ceremony can take place anywhere from barns and gardens to private estates, beaches, and woodland settings.",
    ],
  },
  {
    slug: "vow-renewals",
    title: "Vow Renewals",
    summary: "Milestone anniversaries, new chapters, or simply reaffirming your commitment to each other.",
    body: [
      "I also offer vow renewal ceremonies for couples celebrating milestone anniversaries, new chapters, or simply reaffirming their commitment to each other. I create deeply personal ceremonies that honour your shared journey and look ahead to the future.",
    ],
  },
  {
    slug: "funerals",
    title: "Funerals & Celebrations of Life",
    summary: "Personalised ceremonies with compassion, care, and respect for the person being remembered.",
    body: [
      "I deliver personalised funeral ceremonies and celebrations of life with compassion, care, and respect. I ensure each ceremony reflects the individual being remembered; their character, values, stories, and the legacy they leave behind.",
      "I work closely with the family and funeral directors to create ceremonies that feel comforting, sincere, and truly representative of a life lived.",
    ],
  },
  {
    slug: "naming",
    title: "Baby Naming Ceremonies",
    summary: "Joyful, inclusive welcomes for new babies, adoptions, or blended families.",
    body: [
      "I create joyful, inclusive naming ceremonies to celebrate your child and your family. Whether you're welcoming a new baby, celebrating an adoption, or marking a blended family, I will design a ceremony filled with love and special moments.",
    ],
  },
  {
    slug: "dj",
    title: "DJ Hire",
    summary: "Music for weddings and special events, planned collaboratively around your tastes.",
    body: [
      "With experience in DJing and music production, I offer DJ services for weddings and special events. Music selections are planned collaboratively, taking into account your tastes and overall atmosphere you'd like to create.",
      "I provide an enjoyable and memorable musical experience. All performances are subject to venue requirements, technical conditions, and prior agreement of playlists, timings and equipment needs.",
    ],
  },
];

export const PROCESS_STEPS = [
  "We start with an initial consultation in person or online, so I can hear what matters most to you.",
  "You have unlimited communication by phone, email or message while we shape the ceremony together.",
  "I write a fully bespoke ceremony, with guidance on wording, music, readings, rituals, and structure.",
  "Where needed, I liaise with your venue or other suppliers so delivery on the day feels seamless.",
  "You receive a polished script with time to reflect, then I deliver your ceremony with calm confidence on the day.",
];

/** Placeholder labels beside each process step (swap for real photos later). */
export const PROCESS_STEP_PLACEHOLDER_LABELS = [
  "Consultation and listening",
  "Keeping in touch",
  "Writing your ceremony",
  "Venues and suppliers",
  "Delivery on the day",
];

export const INCLUDED = [
  "An initial consultation (in person or online)",
  "Unlimited communication via phone, email or message",
  "A fully bespoke ceremony written just for you",
  "Guidance with wording, music, readings, rituals, and structure",
  "Professional delivery of your ceremony on the day",
  "Liaison with venues or other suppliers if required",
];

export const FEES = {
  /** Opening copy from the client brief (two sentences). */
  intro: [
    "My fees reflect the time, care, creativity and support that goes into delivering meaningful and professional ceremonies.",
  ],
  includedHeading: "What's Included",
  travelHeading: "Travel & Locations",
  travel:
    "Please note, travel across Kent, Sussex and Surrey is included within my standard fees. If your ceremony takes place further afield, this will be discussed at the enquiry stage.",
  tables: [
    {
      title: "Wedding Fees",
      rows: [
        ["Ceremony & DJ Hire", "£1,000"],
        ["Ceremony only", "£650"],
        ["DJ Hire only", "£500"],
      ],
      note: "(DJ equipment included, bespoke equipment and cost to be discussed on request).",
    },
    {
      title: "Vow Renewal Fees",
      rows: [
        ["Ceremony & DJ Hire", "£800"],
        ["Ceremony", "£450"],
        ["DJ Hire only", "£500"],
      ],
      note: "(DJ equipment included, bespoke equipment and cost to be discussed on request).",
    },
    {
      title: "Funeral & Celebration of Life Fees",
      rows: [
        ["Funeral Ceremony", "£250"],
        ["Memorial Ceremony", "£250"],
        ["Scattering of Ashes", "£60"],
        ["Interring (burial) of Ashes", "£60"],
      ],
    },
    {
      title: "Naming Ceremony Fees",
      rows: [["Ceremony", "£250"]],
    },
  ],
};

export const FAQ_GROUPS = [
  {
    title: "Ceremonies and legalities",
    items: [
      [
        "Can a celebrant legally marry us?",
        "The legal paperwork is normally completed separately at a registry office. I focus on your symbolic ceremony, written around your story, values, and choices.",
      ],
      [
        "Where can we hold our wedding or naming ceremony?",
        "Subject to permission and practicalities, ceremonies can take place in barns, gardens, private homes, woodland, beaches, and many other meaningful locations.",
      ],
      [
        "Do you only offer non-religious ceremonies?",
        "I work in a flexible, inclusive way. We can weave in readings, rituals, and cultural touches that feel right for you, without being tied to a single template.",
      ],
    ],
  },
  {
    title: "Planning and support",
    items: [
      [
        "How much can we change the script?",
        "Your ceremony is built for you. We refine wording together so it sounds like your voice, your humour, and your promises.",
      ],
      [
        "What if we want music and a DJ on the same day?",
        "Many couples book ceremony and DJ hire together. Packages are listed on the Fees page, and we confirm playlists, timings, and equipment in advance.",
      ],
      [
        "Which areas do you cover?",
        "Kent, Sussex, and Surrey are included in my standard travel. Further afield is agreed during your enquiry.",
      ],
    ],
  },
  {
    title: "Funerals and families",
    items: [
      [
        "Can family members take part in a funeral ceremony?",
        "Yes. We can structure contributions, readings, and music so everyone who wishes to speak feels supported.",
      ],
      [
        "Do you work with funeral directors?",
        "Yes. I collaborate closely with families and funeral directors so the tone, timing, and content feel coherent and comforting.",
      ],
    ],
  },
];

export const LINKS = [
  {
    label: "Instagram",
    description: "Follow for updates, behind the scenes moments, and inspiration.",
    href: SITE.instagramUrl,
  },
  {
    label: "Academy of Professional Celebrants",
    description: "Where I trained and continue to connect with a community of professional celebrants.",
    href: "https://www.funeralcelebrantacademy.co.uk",
  },
];

export const TERMS_SECTIONS = [
  {
    title: "Disclaimer",
    paragraphs: [
      "All celebrant services provided are non-religious, non-legal, and symbolic in nature and do not constitute a legally binding ceremony. Wedding ceremonies conducted by an independent celebrant do not replace the requirement for a legally recognised marriage.",
      "All ceremonies, rituals, readings, music selections, and performances are agreed in advance and delivered based on the information provided by the client. Services remain subject to venue regulations, safety considerations, licensing requirements, sound restrictions, and curfews imposed by third parties.",
      "While every reasonable effort is made to deliver services as planned, this cannot always be guaranteed due to circumstances beyond reasonable control, including but not limited to, power failure, technical or equipment issues, venue restrictions, adverse conditions, or unforeseen emergency situations.",
      "No liability is accepted for interruptions, limitations or changes resulting from the behaviour of guests, venue staff decisions, or third party actions.",
      "Final details and preferences must be confirmed in advance to ensure suitability, compliance, and smooth delivery of services.",
    ],
  },
  {
    title: "1. Booking & Confirmation",
    bullets: [
      "The Agreement: A booking is considered confirmed only upon receipt of a non-refundable deposit of 30% of the overall fee and a signed copy of these Terms.",
      "Final Payment: The remaining balance is due no later than 7 days prior to the ceremony date. Failure to pay by this date may result in the cancellation of services.",
    ],
  },
  {
    title: "2. The Services",
    bullets: [
      "Consultation: The Celebrant will provide one initial meeting and two script revisions.",
      "The Script: A final draft of the ceremony script must be approved by the Client at least 3 days before the event.",
      "Legal Requirements: (For Weddings) The Client acknowledges that the Celebrant is performing a symbolic ceremony. It is the Client's sole responsibility to ensure all legal paperwork is filed with the relevant authorities.",
    ],
  },
  {
    title: "3. Cancellations & Rescheduling",
    bullets: [
      "Client Cancellation: If the Client cancels, the Booking Fee remains non-refundable. Cancellations made within 5 days of the event will require 100% payment of the total fee.",
      "Rescheduling: If the date is changed, the Celebrant will make every effort to accommodate the new date. A \"Date Change Fee\" of 10% of the overall service charge may apply.",
      "Celebrant Non-Attendance: In the unlikely event the Celebrant cannot attend due to illness or emergency, they will notify the Client immediately and act in good faith to find a qualified replacement or provide a full refund of all fees paid.",
    ],
  },
  {
    title: "4. Travel & Logistics",
    bullets: [
      "Travel Costs: Travel within Kent, Sussex and Surrey is included. Travel exceeding this will be charged at 30p per mile.",
      "Accommodation: If the ceremony requires an overnight stay, the Client agrees to cover reasonable accommodation costs, pre-agreed in writing.",
      "Arrival: The Celebrant will arrive at the venue at least 30 minutes to an hour before the scheduled start time depending on the type of service booked.",
    ],
  },
  {
    title: "5. Outdoor Ceremonies & Equipment",
    bullets: [
      "Inclement Weather: The Client is responsible for providing a \"Plan B\" (indoor/covered area). The Celebrant reserves the right to move equipment or the ceremony if weather poses a risk to safety or electronics.",
    ],
  },
  {
    title: "6. Intellectual Property & Photography",
    bullets: [
      "Script Ownership: The Celebrant retains copyright of the ceremony script. The Client is granted a license to use the script for their ceremony and personal keepsakes only.",
      "Marketing: The Celebrant may take photos or use professional photos from the event for social media/portfolio use, unless the Client specifically opts out in writing.",
    ],
  },
  {
    title: "7. Liability",
    bullets: [
      "The Celebrant's total liability for any claim shall be limited to the total fee paid by the Client. The Celebrant is not liable for delays caused by the venue, other vendors, or the late arrival of the Client or guests.",
    ],
  },
];
