// Content for the dedicated treatment and area pages.
// All clinical details come from the client's own content (see clinic.ts). Wording is deliberately cautious:
// no cure claims, no invented statistics, no fabricated reviews. Distances/travel times are approximate.

export type Faq = { q: string; a: string };
export type Step = { t: string; d: string };

export type Service = {
  slug: string;
  name: string;
  navLabel: string;
  category: string;
  metaTitle: string; // site title template appends " | Vishwaharsh Ayurved"
  metaDescription: string;
  h1: string;
  lead: string;
  image: string;
  imageAlt: string;
  conditions: string[];
  whoFor: string;
  approach: Step[];
  expect: string[];
  faqs: Faq[];
  related: string[];
  keywords: string[];
  waText: string;
};

export const services: Service[] = [
  {
    slug: "diabetes-treatment",
    name: "Ayurvedic Diabetes Management",
    navLabel: "Diabetes care",
    category: "Lifestyle & Metabolic",
    metaTitle: "Ayurvedic Diabetes Care, Chinchwad",
    metaDescription: "Personalised Ayurvedic diabetes care in Chinchwad, Pune with Dr. Harshada Malge (MD Ayurveda): diet, herbs and review, alongside your physician's care.",
    h1: "Ayurvedic Diabetes Management in Chinchwad, Pune",
    lead: "At Vishwaharsh Ayurved, Dr. Harshada Malge (MD Ayurveda) supports adults with type 2 diabetes, pre-diabetes and metabolic imbalance through a personalised plan of diet, daily routine, Ayurvedic herbs and regular review. It is always offered alongside, never instead of, your physician's treatment.",
    image: "/images/treat-diabetes.jpg",
    imageAlt: "Blood glucose meter, healthy meal and a diabetes management checklist",
    conditions: ["Type 2 diabetes", "Pre-diabetes", "Metabolic imbalance"],
    whoFor: "Adults with diagnosed or borderline metabolic concerns who want a lifestyle-led, personalised approach. Ayurvedic care here is taken alongside your physician's guidance and is not a replacement for prescribed medication.",
    approach: [
      { t: "Detailed assessment", d: "We study your Prakriti (constitution), Agni (digestion and metabolism), current medicines and recent reports." },
      { t: "Ahar and Vihar", d: "A personalised plan for diet, meal timing, movement and sleep that fits your daily life." },
      { t: "Herbal support", d: "Ayurvedic herbs are chosen for you after consultation, never as a standard packet for everyone." },
      { t: "Periodic review", d: "Your plan is reviewed and adjusted regularly as your readings and routine change." },
    ],
    expect: ["First consultation: 45 to 60 minutes", "Follow-ups: 20 to 30 minutes, usually every 3 to 4 weeks", "Bring your recent blood sugar reports and medicine list", "Do not stop prescribed allopathic medication without your physician's advice"],
    faqs: [
      { q: "Can Ayurveda replace my diabetes medicines?", a: "No. Please never stop or change prescribed medication without your physician's advice. Ayurvedic care at Vishwaharsh Ayurved is used alongside your existing treatment, focusing on diet, lifestyle and herbs." },
      { q: "What happens in the first consultation?", a: "Dr. Malge spends 45 to 60 minutes understanding your history, Prakriti, digestion, current medicines and reports, then plans diet, routine and herbs for you." },
      { q: "How often are follow-ups?", a: "Usually every 3 to 4 weeks, depending on your progress. Follow-up patients pay only for medicines, not a consultation fee." },
      { q: "Can I consult online for diabetes?", a: "Yes. Video consultations, WhatsApp follow-ups and medicine courier are available across India and abroad." },
    ],
    related: ["panchakarma", "online-consultation", "mental-health"],
    keywords: ["Ayurvedic diabetes treatment Pune", "diabetes Ayurveda Chinchwad", "pre-diabetes Ayurvedic diet", "Ayurvedic doctor for diabetes Pimpri-Chinchwad"],
    waText: "Hello, I would like to book a consultation for diabetes management at Vishwaharsh Ayurved",
  },
  {
    slug: "mental-health",
    name: "Ayurvedic Mental Health Care",
    navLabel: "Anxiety, depression & ADHD",
    category: "Mind & Nervous System",
    metaTitle: "Ayurvedic Anxiety Care, Chinchwad Pune",
    metaDescription: "Ayurvedic support for anxiety, depression, stress, ADHD and autism with counselling by Dr. Harshada Malge (MD Ayurveda, PGDCP) in Chinchwad, Pune.",
    h1: "Ayurvedic Treatment for Anxiety, Depression & Stress in Chinchwad, Pune",
    lead: "Dr. Harshada Malge holds a Post Graduate Diploma in Counselling Psychology alongside her MD (Ayurveda). At Vishwaharsh Ayurved she supports adults and children with anxiety, depression, stress, ADHD and autism through Ayurvedic care combined with counselling, aiming at the root cause and not only the symptoms.",
    image: "/clinic/shirodhara.jpg",
    imageAlt: "Shirodhara, warm medicated oil poured slowly over the forehead at the clinic",
    conditions: ["Anxiety", "Depression", "Stress", "ADHD", "Autism support"],
    whoFor: "Adults and children seeking holistic mental health support. Please avoid self-medication: consult in person or online before starting any regimen, and continue any medicines prescribed by your psychiatrist or physician unless they advise otherwise.",
    approach: [
      { t: "Detailed case-taking", d: "Nidana (case history) and assessment of Prakriti and Manas Prakriti, your body and mind constitution." },
      { t: "Root-cause analysis", d: "We look at sleep, digestion, routine, stress and life situation, not just the label of the condition." },
      { t: "Personalised plan", d: "Medhya (mind-supporting) herbs, diet and Dinacharya (daily routine) tailored to you." },
      { t: "Counselling and lifestyle", d: "Counselling is integrated with Ayurvedic care, with yoga and Pranayama guidance where suitable." },
    ],
    expect: ["First consultation: 45 to 60 minutes", "Follow-ups: 20 to 30 minutes, reviewed every 2 to 4 weeks", "Keep 10 to 15 minutes of quiet before the consultation", "Bring existing reports and any medication list"],
    faqs: [
      { q: "Is counselling included with Ayurvedic treatment?", a: "Yes. Dr. Malge holds a Post Graduate Diploma in Counselling Psychology, and counselling is integrated with the Ayurvedic plan." },
      { q: "Do you treat children with ADHD or autism?", a: "Yes, the clinic supports children and adults. A detailed consultation decides the plan, and it is always personalised to the child." },
      { q: "Should I stop my current medication?", a: "No. Do not stop or change any prescribed medicine without your doctor's advice. Ayurvedic care here is offered alongside your existing treatment." },
      { q: "Can I consult online?", a: "Yes. Online video consultation and WhatsApp follow-ups are available, with medicines couriered to your home." },
    ],
    related: ["online-consultation", "panchakarma", "garbhsanskar"],
    keywords: ["Ayurvedic treatment for anxiety Pune", "depression Ayurveda Chinchwad", "ADHD Ayurvedic treatment Pune", "Ayurvedic counselling Pimpri-Chinchwad"],
    waText: "Hello, I would like to book a consultation for mental health care at Vishwaharsh Ayurved",
  },
  {
    slug: "garbhsanskar",
    name: "Garbhsanskar: Prenatal Wellness",
    navLabel: "Garbhsanskar",
    category: "Women's Health",
    metaTitle: "Garbhsanskar in Chinchwad, Pune",
    metaDescription: "Ayurvedic Garbhsanskar prenatal care in Chinchwad, Pune: month-wise guidance on diet, routine, music and counselling with Dr. Harshada Malge.",
    h1: "Garbhsanskar: Ayurvedic Prenatal Care in Chinchwad, Pune",
    lead: "Garbhsanskar is the Ayurvedic approach to nurturing the physical, mental and emotional wellbeing of mother and baby during pregnancy. Dr. Harshada Malge, who has completed a certificate course in Garbhsanskar, offers month-wise guidance in a calm, supportive setting at Vishwaharsh Ayurved.",
    image: "/images/treat-garbhsanskar.jpg",
    imageAlt: "Expecting mother resting at home beside a Garbhsanskar prenatal wellness board",
    conditions: ["Prenatal care", "Pregnancy wellness"],
    whoFor: "Expecting mothers with a healthy pregnancy. Please share your obstetrician's reports before starting, and continue regular obstetric care throughout.",
    approach: [
      { t: "Initial consultation", d: "We understand your health, routine and pregnancy stage, and review your obstetrician's reports." },
      { t: "Trimester-wise plan", d: "Month-wise guidance for each trimester covering diet, daily routine, music, mantra and a positive lifestyle." },
      { t: "Emotional wellbeing", d: "Counselling to support the mother's emotional wellbeing and the bond with the baby." },
      { t: "Preparing for delivery", d: "Guidance to prepare body and mind for a healthy delivery, always coordinated with your obstetrician." },
    ],
    expect: ["First consultation: 45 to 60 minutes", "Monthly sessions through pregnancy", "Come well rested and bring your latest sonography and blood reports", "Always coordinate with your obstetrician"],
    faqs: [
      { q: "What is Garbhsanskar?", a: "Garbhsanskar is an Ayurvedic approach to prenatal care that uses diet, routine, music, mantra, counselling and a positive environment to support the development and wellbeing of the baby and the mother." },
      { q: "Does it replace my obstetrician's care?", a: "No. Garbhsanskar is complementary. Please continue regular check-ups and follow your obstetrician's advice." },
      { q: "How often are the sessions?", a: "Typically monthly through pregnancy, with timing guided at your consultation." },
      { q: "Is online Garbhsanskar guidance available?", a: "Yes. Online video consultation and WhatsApp follow-ups are available for mothers who cannot travel." },
    ],
    related: ["beejsanskar", "mental-health", "online-consultation"],
    keywords: ["Garbhsanskar Pune", "Garbhsanskar Chinchwad", "Ayurvedic prenatal care Pimpri-Chinchwad", "pregnancy Ayurveda Pune"],
    waText: "Hello, I would like to book a Garbhsanskar consultation at Vishwaharsh Ayurved",
  },
  {
    slug: "beejsanskar",
    name: "Beejsanskar: Preconception Care",
    navLabel: "Beejsanskar",
    category: "Women's Health",
    metaTitle: "Beejsanskar Care in Chinchwad, Pune",
    metaDescription: "Beejsanskar preconception care for couples in Chinchwad, Pune: detox, diet and counselling with Dr. Harshada Malge (MD Ayurveda).",
    h1: "Beejsanskar: Ayurvedic Preconception Care in Chinchwad, Pune",
    lead: "Beejsanskar is the Ayurvedic practice of purifying and strengthening the 'seed' (shukra and aartav) of both partners before conception. At Vishwaharsh Ayurved, Dr. Harshada Malge guides couples planning a pregnancy through detox, nourishment, lifestyle and emotional preparation.",
    image: "/images/treat-beejsanskar.jpg",
    imageAlt: "Brass bowl of herbal oil, rose petals and a preconception care card",
    conditions: ["Pre-conception care", "Fertility support (Ayurvedic)"],
    whoFor: "Couples planning a pregnancy. Both partners are encouraged to take part, and to bring any existing reports.",
    approach: [
      { t: "Consultation for both partners", d: "Case-taking and assessment of health, lifestyle and any existing reports." },
      { t: "Detox and nourishment", d: "A personalised plan to cleanse and nourish the body before conception." },
      { t: "Diet and lifestyle", d: "Guidance on food, routine and habits that support healthy reproductive tissue." },
      { t: "Emotional preparation", d: "Counselling and follow-up through conception, so you feel supported at each stage." },
    ],
    expect: ["First consultation: 45 to 60 minutes", "Reviewed every 4 to 6 weeks", "Both partners should attend together where possible", "Bring any existing reports"],
    faqs: [
      { q: "What is Beejsanskar?", a: "Beejsanskar is the Ayurvedic concept of preparing both partners physically and mentally before conception, so the body, mind and environment are ready for a healthy pregnancy." },
      { q: "Do both partners need to attend?", a: "Both partners are encouraged to participate, and attending together where possible gives the best guidance." },
      { q: "How long does preparation take?", a: "It varies from couple to couple. The plan is reviewed every 4 to 6 weeks and adjusted for you." },
      { q: "Is Beejsanskar a fertility treatment?", a: "It is Ayurvedic preconception care and fertility support, not a substitute for medical evaluation. If you have been trying for a long time, please also consult a gynaecologist." },
    ],
    related: ["garbhsanskar", "panchakarma", "mental-health"],
    keywords: ["Beejsanskar Pune", "Beejsanskar Chinchwad", "preconception Ayurveda Pune", "Ayurvedic fertility support Pimpri-Chinchwad"],
    waText: "Hello, I would like to book a Beejsanskar consultation at Vishwaharsh Ayurved",
  },
  {
    slug: "panchakarma",
    name: "Panchakarma Therapy",
    navLabel: "Panchakarma",
    category: "Detox & Rejuvenation",
    metaTitle: "Panchakarma in Chinchwad, Pune",
    metaDescription: "Panchakarma detox and rejuvenation in Chinchwad, Pune: in-house therapy theatre, Swedana and supervised classical protocols with Dr. Harshada Malge.",
    h1: "Panchakarma Treatment in Chinchwad, Pune",
    lead: "Panchakarma is the five-fold Ayurvedic purification therapy that aims to detoxify, rebalance and rejuvenate the body. Vishwaharsh Ayurved has an in-house Panchakarma theatre, Swedana (steam) and dispensary, and every programme is planned after a detailed consultation with Dr. Harshada Malge.",
    image: "/clinic/basti-closeup.jpg",
    imageAlt: "Kati basti: warm medicated oil held in a dough ring on the back",
    conditions: ["Chronic illness", "Detoxification", "Rejuvenation"],
    whoFor: "Recommended after a detailed consultation. Not suitable during acute illness, pregnancy or severe debility without supervision.",
    approach: [
      { t: "Purvakarma (preparation)", d: "Pre-procedure steps and a preparatory diet shared in advance." },
      { t: "Pradhana karma (main therapy)", d: "The chosen procedure among Vamana, Virechana, Basti, Nasya and Raktamokshana, under supervision in the clinic theatre." },
      { t: "Paschatkarma (after-care)", d: "Rest, a restricted diet and lifestyle guidance to consolidate the benefit." },
      { t: "Follow-up", d: "Review after the programme so the plan continues to suit you." },
    ],
    expect: ["Typically 7 to 21 days, fully personalised", "Pre-procedure diet shared in advance", "Rest and a restricted diet after the procedure are essential", "Charges are shared at consultation"],
    faqs: [
      { q: "What are the five Panchakarma therapies?", a: "Vamana, Virechana, Basti, Nasya and Raktamokshana. Which ones are used, if any, is decided after consultation." },
      { q: "Is Panchakarma suitable for everyone?", a: "No. It is not suitable during acute illness, pregnancy or severe debility without supervision, so a consultation always comes first." },
      { q: "How long does a programme take?", a: "Typically 7 to 21 days, depending on the procedure and the individual." },
      { q: "Do you have a Panchakarma theatre?", a: "Yes. The clinic has a dedicated Panchakarma theatre, Swedana (steam) facility and in-house dispensary." },
    ],
    related: ["leech-therapy", "diabetes-treatment", "beejsanskar"],
    keywords: ["Panchakarma Pune", "Panchakarma Chinchwad", "Ayurvedic detox Pimpri-Chinchwad", "Basti Nasya Virechana Pune"],
    waText: "Hello, I would like to enquire about Panchakarma at Vishwaharsh Ayurved",
  },
  {
    slug: "leech-therapy",
    name: "Leech Therapy (Jalaukavacharana)",
    navLabel: "Leech therapy",
    category: "Detox & Rejuvenation",
    metaTitle: "Leech Therapy in Chinchwad, Pune",
    metaDescription: "Leech therapy (Jalaukavacharana), a classical Ayurvedic Raktamokshana procedure, done after consultation with Dr. Harshada Malge in Chinchwad, Pune.",
    h1: "Leech Therapy (Jalaukavacharana) in Chinchwad, Pune",
    lead: "Jalaukavacharana, or leech therapy, is a classical Ayurvedic procedure and a form of Raktamokshana, one of the five Panchakarma therapies. At Vishwaharsh Ayurved it is performed only after a consultation in which Dr. Harshada Malge checks whether it is suitable for you.",
    image: "/clinic/leech-leg.jpg",
    imageAlt: "Medicinal leech therapy on the leg at the clinic",
    conditions: ["Skin concerns", "Localised discomfort", "Chronic conditions (after assessment)"],
    whoFor: "Suitability is always decided in consultation. It may not be suitable if you have a bleeding disorder, take blood-thinning medicines or are pregnant, so please tell the doctor about your full medical history.",
    approach: [
      { t: "Consultation and suitability check", d: "Case-taking, examination and review of medicines and reports to decide whether the procedure is right for you." },
      { t: "Preparation", d: "You are told how to prepare, and the area to be treated is assessed." },
      { t: "Supervised procedure", d: "The procedure is carried out in the clinic by trained staff under Dr. Malge's supervision." },
      { t: "After-care", d: "Dressing, wound care and a follow-up visit, with guidance on what to watch for." },
    ],
    expect: ["A consultation always comes first", "The number of sessions varies and is decided by the doctor", "Share your full medical history and medicine list", "Charges are shared at consultation"],
    faqs: [
      { q: "What is leech therapy?", a: "Leech therapy, or Jalaukavacharana, is a traditional Ayurvedic procedure that falls under Raktamokshana, one of the five Panchakarma therapies." },
      { q: "Is leech therapy safe for everyone?", a: "No. Safety depends on proper assessment. It may not suit people with bleeding disorders, those on blood-thinning medicines or during pregnancy, so the doctor decides after consultation." },
      { q: "How many sessions will I need?", a: "It varies by condition and by person, and Dr. Malge will explain the plan at your consultation." },
      { q: "Is it part of Panchakarma?", a: "Yes. Raktamokshana is one of the five Panchakarma procedures, and leech therapy is one way it is carried out." },
    ],
    related: ["panchakarma", "diabetes-treatment", "online-consultation"],
    keywords: ["leech therapy Pune", "Jalaukavacharana Chinchwad", "Raktamokshana Pimpri-Chinchwad", "Ayurvedic leech treatment Pune"],
    waText: "Hello, I would like to enquire about leech therapy at Vishwaharsh Ayurved",
  },
  {
    slug: "online-consultation",
    name: "Online / Video Consultation",
    navLabel: "Online consultation",
    category: "Convenience",
    metaTitle: "Online Ayurvedic Consultation India",
    metaDescription: "Online Ayurvedic video consultation with Dr. Harshada Malge (MD Ayurveda): WhatsApp follow-ups and medicine courier across India and abroad.",
    h1: "Online Ayurvedic Consultation with Dr. Harshada Malge",
    lead: "Cannot visit Chinchwad? Consult Dr. Harshada Malge by video from wherever you are in India or abroad. You get the same detailed case-taking, a digital treatment plan, WhatsApp follow-ups and medicines couriered to your doorstep.",
    image: "/images/treat-online.jpg",
    imageAlt: "Patient on a video consultation with an Ayurvedic doctor",
    conditions: ["All treatment areas listed on this site"],
    whoFor: "Patients unable to visit the clinic, in Pune, elsewhere in India or abroad. Procedures such as Panchakarma need an in-clinic visit.",
    approach: [
      { t: "Book a slot", d: "Message us on WhatsApp or use the booking form. Please book at least one day in advance." },
      { t: "Video consultation", d: "A detailed case-taking session of 45 to 60 minutes with Dr. Malge." },
      { t: "Digital treatment plan", d: "Diet, routine and herbs explained clearly, with a digital prescription." },
      { t: "Medicines and follow-up", d: "Medicines are couriered to you, and follow-ups continue over WhatsApp or video." },
    ],
    expect: ["Consultation: 45 to 60 minutes", "Follow-ups typically every 2 to 4 weeks", "Keep reports and your medication list ready", "A quiet, well-lit space helps the consultation"],
    faqs: [
      { q: "Which languages do you consult in?", a: "Marathi, Hindi and English." },
      { q: "Can I get medicines if I live outside Pune?", a: "Yes. Medicines are sent by courier across India and abroad." },
      { q: "Do I pay a consultation fee for follow-ups?", a: "Follow-up patients do not pay a consultation fee, only for the medicines." },
      { q: "How do I book?", a: "Message us on WhatsApp or fill the booking form. We call within 1 working day to confirm." },
    ],
    related: ["diabetes-treatment", "mental-health", "garbhsanskar"],
    keywords: ["online Ayurvedic consultation India", "video consultation Ayurveda doctor", "online Ayurveda Pune", "Ayurvedic medicine courier India"],
    waText: "Hello, I would like to book an online consultation at Vishwaharsh Ayurved",
  },
];

/* ------------------------------ AREA PAGES ------------------------------ */
export type Area = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  reach: string[];
  why: string[];
  popular: string[]; // service slugs
  faqs: Faq[];
  keywords: string[];
};

export const areas: Area[] = [
  {
    slug: "chinchwad",
    name: "Chinchwad",
    metaTitle: "Ayurvedic Doctor in Chinchwad, Pune",
    metaDescription: "Dr. Harshada Malge, MD (Ayurveda), at Shiwale Estate, Walhekarwadi Road, Chinchwad 411033. Book an in-clinic or online consultation.",
    h1: "Ayurvedic Doctor in Chinchwad, Pimpri-Chinchwad",
    lead: "Vishwaharsh Ayurved is in Chinchwad itself: Shop no. 4, Shiwale Estate, Shivaji Park, Walhekarwadi Road, Chinchwad, Maharashtra 411033. Dr. Harshada Malge (BAMS, MD Ayurveda, PGDCP) sees patients in person here for mental health, diabetes, Garbhsanskar, Beejsanskar and Panchakarma.",
    reach: ["Chinchwad railway station is on the Pune-Lonavala suburban line, and local buses (PMPML) serve the area.", "The clinic has parking and a waiting area.", "Open Monday to Saturday 10 AM to 1 PM and 5 PM to 9 PM, and Sunday 5 PM to 9 PM."],
    why: ["A full clinic under one roof: consultation room, Panchakarma theatre, Steam (Swedana) and in-house dispensary.", "Consultations in Marathi, Hindi and English.", "Home visits, WhatsApp follow-ups and medicine courier are also available."],
    popular: ["mental-health", "diabetes-treatment", "panchakarma", "garbhsanskar"],
    faqs: [
      { q: "Where exactly is the clinic in Chinchwad?", a: "Shop no. 4, Shiwale Estate, Shivaji Park, Walhekarwadi Road, Chinchwad, Maharashtra 411033. Tap 'Open in Google Maps' on this site for directions." },
      { q: "What are the clinic timings?", a: "Monday to Saturday 10:00 AM to 1:00 PM and 5:00 PM to 9:00 PM; Sunday 5:00 PM to 9:00 PM. Please book at least one day ahead." },
      { q: "Is there parking?", a: "Yes, the clinic has parking and a waiting area." },
    ],
    keywords: ["Ayurvedic doctor Chinchwad", "Ayurveda clinic Chinchwad", "Ayurvedic clinic near Chinchwad station", "Chinchwad Ayurvedic treatment"],
  },
  {
    slug: "pimpri-chinchwad",
    name: "Pimpri-Chinchwad",
    metaTitle: "Ayurvedic Clinic in Pimpri-Chinchwad",
    metaDescription: "Ayurvedic clinic serving Pimpri-Chinchwad: Dr. Harshada Malge, MD (Ayurveda), previously at PCMC, Moshi. Personalised root-cause care, in clinic or online.",
    h1: "Ayurvedic Clinic Serving Pimpri-Chinchwad",
    lead: "Pimpri-Chinchwad is where Dr. Harshada Malge built her experience: before opening her own clinic in Chinchwad she worked at PCMC, Moshi, and she now treats patients from across the twin city. Her focus is on understanding each person's Prakriti, lifestyle and the root cause of the concern.",
    reach: ["The clinic is in the Chinchwad part of Pimpri-Chinchwad, on Walhekarwadi Road.", "Patients also consult online if travelling is difficult.", "Home visits are available, so ask when you book."],
    why: ["Ten years of Ayurvedic practice, with registration number I-74724-A.", "Counselling skills (PGDCP) combined with Ayurvedic care for mind and body concerns.", "A personalised plan, not a one-size-fits-all packet."],
    popular: ["mental-health", "diabetes-treatment", "garbhsanskar", "beejsanskar"],
    faqs: [
      { q: "Does the clinic serve all of Pimpri-Chinchwad?", a: "Yes. Patients come from across Pimpri-Chinchwad, and online consultation and home visits help those who cannot travel." },
      { q: "Has Dr. Malge worked in Pimpri-Chinchwad before?", a: "Yes. Her previous experience includes PCMC, Moshi." },
      { q: "How do I book an appointment?", a: "Use the booking form, call +91 81692 27140 or message on WhatsApp. We call within 1 working day to confirm." },
    ],
    keywords: ["Ayurvedic clinic Pimpri-Chinchwad", "Ayurvedic doctor Pimpri", "Ayurveda Pimpri-Chinchwad", "Dr Harshada Malge"],
  },
  {
    slug: "walhekarwadi",
    name: "Walhekarwadi",
    metaTitle: "Ayurvedic Clinic, Walhekarwadi Road",
    metaDescription: "Ayurvedic clinic on Walhekarwadi Road, Chinchwad, near Shivaji Park. Dr. Harshada Malge, MD (Ayurveda). Walk-in friendly for local residents; book ahead.",
    h1: "Ayurvedic Clinic on Walhekarwadi Road, Chinchwad",
    lead: "If you live in Walhekarwadi, your Ayurvedic doctor is on your own road. Vishwaharsh Ayurved is at Shiwale Estate, Shivaji Park, Walhekarwadi Road, so follow-ups and quick reviews are easy to fit into your day.",
    reach: ["The clinic is on Walhekarwadi Road, at Shivaji Park.", "Many local patients simply walk or take a short ride.", "Follow-up patients pay only for medicines, not a consultation fee."],
    why: ["Close to home, so regular follow-ups are easy to keep.", "Home visits and WhatsApp follow-ups for days when you cannot step out.", "Parking and a waiting area at the clinic."],
    popular: ["diabetes-treatment", "mental-health", "panchakarma", "garbhsanskar"],
    faqs: [
      { q: "Is the clinic on Walhekarwadi Road?", a: "Yes. The address is Shop no. 4, Shiwale Estate, Shivaji Park, Walhekarwadi Road, Chinchwad 411033." },
      { q: "Can I walk in without an appointment?", a: "Please book at least one day ahead so Dr. Malge can give you the time you need. We call within 1 working day to confirm." },
      { q: "Do you offer home visits for nearby patients?", a: "Yes, home visits are available. Please ask when you book." },
    ],
    keywords: ["Ayurvedic clinic Walhekarwadi", "Ayurvedic doctor Walhekarwadi Road", "Shivaji Park Chinchwad clinic", "Ayurveda near Walhekarwadi"],
  },
  {
    slug: "akurdi",
    name: "Akurdi",
    metaTitle: "Ayurvedic Doctor near Akurdi, Pune",
    metaDescription: "Ayurvedic doctor for patients from Akurdi: Vishwaharsh Ayurved in neighbouring Chinchwad, Dr. Harshada Malge MD (Ayurveda). Clinic, online and home visits.",
    h1: "Ayurvedic Doctor for Akurdi Residents",
    lead: "Akurdi sits right next to Chinchwad, and Akurdi railway station is the next stop after Chinchwad station on the Pune-Lonavala line. Residents of Akurdi consult Dr. Harshada Malge at Vishwaharsh Ayurved for mental wellbeing, diabetes care, Garbhsanskar and Panchakarma.",
    reach: ["A short ride from Akurdi, usually a matter of minutes depending on traffic.", "By train, Chinchwad is one stop from Akurdi.", "If you prefer not to travel, online consultation and WhatsApp follow-ups are available."],
    why: ["A neighbouring, easy-to-reach clinic with its own Panchakarma theatre and dispensary.", "Consultations in Marathi, Hindi and English.", "Medicines can be couriered to your home."],
    popular: ["panchakarma", "diabetes-treatment", "mental-health", "beejsanskar"],
    faqs: [
      { q: "How far is the clinic from Akurdi?", a: "Akurdi is the neighbouring area to Chinchwad, so it is a short ride. Exact time depends on traffic and your starting point." },
      { q: "Can I travel by train?", a: "Chinchwad railway station is one stop from Akurdi station on the Pune-Lonavala line." },
      { q: "Can I consult online instead?", a: "Yes. Video consultation, WhatsApp follow-ups and medicine courier are available." },
    ],
    keywords: ["Ayurvedic doctor Akurdi", "Ayurvedic clinic near Akurdi", "Ayurveda Akurdi Pune", "Panchakarma near Akurdi"],
  },
  {
    slug: "nigdi",
    name: "Nigdi",
    metaTitle: "Ayurvedic Doctor near Nigdi, Pune",
    metaDescription: "Ayurvedic care for patients from Nigdi and Pradhikaran: Dr. Harshada Malge, MD (Ayurveda), at Vishwaharsh Ayurved, Chinchwad. Clinic and online consultation.",
    h1: "Ayurvedic Doctor for Nigdi and Pradhikaran",
    lead: "Patients from Nigdi and Pradhikaran travel to Vishwaharsh Ayurved in Chinchwad for personalised, root-cause Ayurvedic care with Dr. Harshada Malge. If the journey is inconvenient, a video consultation gives you the same detailed case-taking from home.",
    reach: ["Chinchwad is within the same twin city, a drive of roughly 20 to 30 minutes from Nigdi depending on traffic.", "Book a time slot in advance so you spend less time waiting.", "Online consultation and medicine courier remove the need to travel for follow-ups."],
    why: ["One experienced Ayurvedic doctor who personally takes your case history.", "Mind, metabolism, motherhood and detox care under one roof.", "Follow-up patients pay only for medicines."],
    popular: ["mental-health", "online-consultation", "diabetes-treatment", "garbhsanskar"],
    faqs: [
      { q: "Is the clinic convenient from Nigdi?", a: "Chinchwad is in the same city, roughly 20 to 30 minutes by road depending on traffic. Many Nigdi patients combine a first visit with online follow-ups." },
      { q: "Can I book a time slot?", a: "Yes. Book at least one day ahead and we confirm by phone within 1 working day." },
      { q: "Do you send medicines to Nigdi?", a: "Yes. Medicines can be couriered to your address." },
    ],
    keywords: ["Ayurvedic doctor Nigdi", "Ayurvedic clinic Pradhikaran", "Ayurveda Nigdi Pune", "Ayurvedic treatment near Nigdi"],
  },
  {
    slug: "moshi",
    name: "Moshi",
    metaTitle: "Ayurvedic Doctor near Moshi, Pune",
    metaDescription: "Ayurvedic care for patients from Moshi: Dr. Harshada Malge, MD (Ayurveda), formerly at PCMC Moshi, now at Vishwaharsh Ayurved, Chinchwad. Book in clinic or online.",
    h1: "Ayurvedic Doctor for Moshi Residents",
    lead: "Moshi is familiar ground for Dr. Harshada Malge, whose earlier experience includes PCMC, Moshi. Today she sees patients at Vishwaharsh Ayurved in Chinchwad, and Moshi residents can also consult online with doctor-prescribed medicines delivered home.",
    reach: ["Chinchwad is a drive of roughly 25 to 35 minutes from Moshi depending on traffic.", "Choose an evening slot (5 to 9 PM) if you commute for work.", "Video consultations save the trip for routine follow-ups."],
    why: ["A doctor with hands-on experience in the Pimpri-Chinchwad area, including PCMC, Moshi.", "Personalised plans for diabetes, stress and anxiety, pregnancy preparation and detox.", "WhatsApp follow-ups between visits."],
    popular: ["online-consultation", "diabetes-treatment", "mental-health", "panchakarma"],
    faqs: [
      { q: "Has Dr. Malge worked in Moshi?", a: "Yes. Her previous experience includes PCMC, Moshi." },
      { q: "Can I consult online from Moshi?", a: "Yes. Video consultation, WhatsApp follow-ups and medicine courier are available, so you travel to the clinic only when needed." },
      { q: "Are there evening appointments?", a: "Yes. Evenings are 5 PM to 9 PM every day, and mornings 10 AM to 1 PM on Monday to Saturday." },
    ],
    keywords: ["Ayurvedic doctor Moshi", "Ayurvedic clinic near Moshi", "Ayurveda Moshi Pune", "Dr Harshada Malge Moshi"],
  },
  {
    slug: "pune",
    name: "Pune",
    metaTitle: "Ayurvedic Doctor for Pune Patients",
    metaDescription: "Pune patients consult Dr. Harshada Malge, MD (Ayurveda, Pune) in Chinchwad or online: diabetes, mental health, Garbhsanskar, Panchakarma.",
    h1: "Ayurvedic Doctor for Pune: In Chinchwad or Online",
    lead: "Dr. Harshada Malge completed her MD (Ayurveda) at Tilak Ayurved Mahavidyalay, Pune, and practises at Vishwaharsh Ayurved in Chinchwad, Pimpri-Chinchwad. Patients from across Pune visit the clinic, and many choose video consultations with medicine courier for follow-ups.",
    reach: ["From central Pune, Chinchwad is a drive of roughly 40 to 60 minutes depending on traffic, or take the suburban train to Chinchwad station.", "To save the trip, book a video consultation and receive medicines by courier.", "Plan a visit for Panchakarma or therapy procedures, which need to be done in the clinic."],
    why: ["Pune-trained doctor: MD (Ayurveda), Tilak Ayurved Mahavidyalay, Pune, 2016.", "Detailed 45 to 60 minute first consultations.", "Online care available anywhere in India or abroad."],
    popular: ["online-consultation", "diabetes-treatment", "mental-health", "garbhsanskar"],
    faqs: [
      { q: "I live in Pune. Do I need to visit Chinchwad?", a: "Not always. Many Pune patients start with a video consultation and visit only for procedures such as Panchakarma. Medicines can be couriered." },
      { q: "Where did Dr. Malge study?", a: "She completed her BAMS in 2012 at RPAM, Purna and her MD (Ayurveda) in 2016 at Tilak Ayurved Mahavidyalay, Pune." },
      { q: "What are the consultation languages?", a: "Marathi, Hindi and English." },
    ],
    keywords: ["Ayurvedic doctor Pune", "Ayurveda clinic Pune", "online Ayurveda consultation Pune", "MD Ayurveda Pune"],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
export const areaBySlug = (slug: string) => areas.find((a) => a.slug === slug);
