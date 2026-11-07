// Centralized clinic content — single source of truth.
// All factual information comes from the client-supplied content form.
// No invented medical facts, testimonials, awards or statistics.

export const clinic = {
  name: "Vishwaharsh Ayurved",
  nameDevanagari: "विश्वहर्ष आयुर्वेद",
  tagline: "Healing body, mind and soul",
  taglineDevanagari: "शरीर, मन आणि आत्म्याचे समग्र आरोग्य",
  establishedYear: "2025",
  phone: "8169227140",
  phoneDisplay: "+91 81692 27140",
  whatsapp: "8169227140",
  email: "harshadamalgepatil@gmail.com",
  address: {
    line1: "Shop no. 4, Shiwale Estate",
    line2: "Shivaji Park, Walhekarwadi Road",
    line3: "Chinchwad, Maharashtra 411033",
    full: "Shop no. 4, Shiwale Estate, Shivaji Park, Walhekarwadi Road, Chinchwad — 411033",
    locality: "Chinchwad, Pimpri-Chinchwad",
    region: "Maharashtra",
    pincode: "411033",
  },
  timings: [
    { day: "Mon — Sat", hours: "10:00 AM – 1:00 PM" },
    { day: "Mon — Sat", hours: "5:00 PM – 9:00 PM" },
    { day: "Sunday", hours: "5:00 PM – 9:00 PM" },
  ],
  languages: ["Marathi", "Hindi", "English"],
  social: {
    instagram: ["@harshadamalgepatil", "@mindeaseayurved"],
    facebook: "Harshada Malge",
  },
  // Exact pin supplied by the clinic (Google Maps place "Vishwaharsh Ayurved")
  mapUrl: "https://maps.app.goo.gl/CYkYa5wbhvq6TuhM6",
  geo: { lat: 18.6413827, lng: 73.7632568 },
  consultationFeeDisplay: "On consultation",
  followUpNote:
    "We do not charge consultation fees for follow-up patients — they only pay for the medicines.",
  advanceNotice: "1 day",
  postSubmitMessage:
    "Thank you. We will call you within 1 working day to confirm your appointment.",
  whatsappPrefill:
    "Hello, I would like to book an appointment at Vishwaharsh Ayurved",
};

export const doctor = {
  name: "Dr. Harshada Malge",
  nameWithTitle: "Dr. Harshada Malge, MD (Ayu), Counsellor",
  qualifications: [
    { abbr: "BAMS", full: "Bachelor of Ayurvedic Medicine and Surgery" },
    { abbr: "MD", full: "Doctor of Medicine (Ayurveda)" },
    { abbr: "PGDCP", full: "Post Graduate Diploma in Counselling Psychology" },
  ],
  registration: "I-74724-A",
  showRegistration: true,
  experienceYears: "10",
  education: [
    { institute: "RPAM, Purna", year: "2012 pass out" },
    { institute: "Tilak Ayurved Mahavidyalay, Pune", year: "2016 pass out" },
  ],
  specialisations: [
    "Psychological diseases",
    "Diabetes management",
    "Beejsanskar and Garbhsanskar",
  ],
  previousExperience: "PCMC, Moshi",
  additionalCourses: ["PGDCP", "Certificate course in Garbhsanskar"],
  philosophy:
    "Ayurveda is not merely a system of medicine; it is a philosophy of life. Its approach is holistic, viewing health as a dynamic balance between the body, mind, senses, and consciousness.",
  messageToPatients: `Dear Patients,

Ayurveda is not just about treating a disease—it is about understanding you, your body, your mind, your lifestyle and the root cause of your health concerns.

I believe every person is unique, and so should be their treatment. My aim is not just to relieve your symptoms, but to help you build better health, naturally and sustainably.

Trust your body. Respect nature. Choose Ayurveda.`,
};

export const story = {
  whyStarted: `I started my clinic with a simple belief — health deserves to be understood, not just treated.

I wanted to create a space where patients are listened to, their individual needs are understood, and Ayurveda is used thoughtfully to address the root cause of illness.

For me, Ayurveda is not just my profession; it is a way of helping people heal naturally, live better and stay healthy.`,
  whatMakesDifferent: `We believe that every patient is unique and deserves individual attention.

We don't believe in one-size-fits-all treatment. We take time to understand your Prakriti, lifestyle, diet, symptoms and the root cause of your condition before planning treatment.

Our focus is not just on managing symptoms, but on restoring balance, improving overall well-being and helping you build healthier habits for life.

For us, Ayurveda is not a quick fix—it is a personalized journey towards better health.`,
};

export const facilities = [
  "Consultation room",
  "Panchakarma theatre",
  "Steam / Swedana",
  "In-house dispensary",
  "Waiting area",
  "Parking",
];

export const servicesOffered = [
  "Home visits",
  "Online / video consultation",
  "WhatsApp follow-ups",
  "Medicine courier / delivery",
];

// Treatments are derived strictly from the doctor's stated specialisations
// and the Google search terms patients use to find her.
// Descriptions are general, faithful to Ayurvedic principles and avoid
// specific claims that the client did not verify.
export const treatments = [
  {
    id: "psychological",
    name: "Psychological & Mental Health Care",
    short:
      "Ayurvedic support for anxiety, depression, stress, ADHD, autism and related conditions — addressing the root cause, not just symptoms.",
    category: "Mind & Nervous System",
    image: "/clinic/shirodhara.jpg",
    icon: "Brain",
    highlights: [
      "Personalised assessment of Prakriti & Manas Prakriti",
      "Medhya herbs, diet & daily routine (Dinacharya)",
      "Counselling integrated with Ayurvedic care",
      "Yoga, Pranayama and lifestyle guidance",
    ],
    conditions: ["Anxiety", "Depression", "Stress", "ADHD", "Autism support"],
    suitable: "Suitable for adults and children seeking holistic mental health support. Avoid self-medication; please consult in person or online before starting any regimen.",
    process:
      "Detailed case-taking (Nidana) → Prakriti assessment → root-cause analysis → personalised plan of herbs, diet, routine, counselling and follow-ups.",
    duration: "Initial consultation 45–60 minutes. Follow-ups 20–30 minutes.",
    sessions: "Reviewed every 2–4 weeks; total duration depends on the condition.",
    benefits:
      "Patients typically notice improved calm, better sleep, more stable mood and a clearer understanding of their health.",
    beforeAfter:
      "Maintain a 10–15 minute silence before the consultation. Bring any existing reports or medication lists. Follow-up routine will be shared after the consultation.",
    charges: "On consultation",
    showPrice: false,
    featured: true,
  },
  {
    id: "diabetes",
    name: "Diabetes Management",
    short:
      "Comprehensive Ayurvedic management of diabetes through diet, herbs, Panchakarma and sustainable lifestyle changes.",
    category: "Lifestyle & Metabolic",
    image: "/images/treat-diabetes.jpg",
    icon: "Activity",
    highlights: [
      "Detailed metabolic & Prakriti assessment",
      "Personalised Ahar (diet) & Vihar (lifestyle)",
      "Ayurvedic herbal support",
      "Periodic monitoring & review",
    ],
    conditions: ["Type 2 Diabetes", "Pre-diabetes", "Metabolic imbalance"],
    suitable: "Suitable for adults with diagnosed or borderline metabolic concerns. Always taken alongside your physician's guidance — not as a replacement for prescribed medication.",
    process:
      "Assessment of Prakriti, Agni and current medication → personalised diet, herbs, exercise plan → periodic review and adjustment.",
    duration: "Initial consultation 45–60 minutes. Follow-ups 20–30 minutes.",
    sessions: "Reviewed every 3–4 weeks.",
    benefits:
      "Patients typically report steadier energy levels, better digestion and improved overall well-being when following the plan consistently.",
    beforeAfter:
      "Carry your recent blood-sugar reports. Do not stop prescribed allopathic medication without your physician's advice.",
    charges: "On consultation",
    showPrice: false,
    featured: true,
  },
  {
    id: "garbhsanskar",
    name: "Garbhsanskar — Prenatal Wellness",
    short:
      "Ayurvedic care to nurture the physical, mental and spiritual development of the baby during pregnancy.",
    category: "Women's Health",
    image: "/images/treat-garbhsanskar.jpg",
    icon: "Heart",
    highlights: [
      "Month-wise Ayurvedic guidance for each trimester",
      "Diet, music, mantra & positive lifestyle",
      "Counselling for the mother's emotional well-being",
      "Preparation for healthy delivery",
    ],
    conditions: ["Prenatal care", "Pregnancy wellness"],
    suitable: "Suitable for expecting mothers in a healthy pregnancy. Please share your obstetrician's reports before starting.",
    process:
      "Initial consultation → trimester-wise plan of diet, routine, music and counselling → regular follow-ups.",
    duration: "Initial consultation 45–60 minutes.",
    sessions: "Monthly sessions through pregnancy.",
    benefits:
      "Supports a calm pregnancy, helps the mother bond with the baby and encourages positive development.",
    beforeAfter:
      "Come well-rested. Bring your latest sonography and blood reports. Always coordinate with your obstetrician.",
    charges: "On consultation",
    showPrice: false,
    featured: true,
  },
  {
    id: "beejsanskar",
    name: "Beejsanskar — Preconception Care",
    short:
      "Ayurvedic purification and strengthening of the seed (shukra & aartav) before conception, for a healthy beginning.",
    category: "Women's Health",
    image: "/images/treat-beejsanskar.jpg",
    icon: "Sparkles",
    highlights: [
      "Pre-conception detox for both partners",
      "Diet & lifestyle for healthy reproductive tissue",
      "Personalised Ayurvedic guidance",
      "Counselling & emotional preparation",
    ],
    conditions: ["Pre-conception care", "Fertility support (Ayurvedic)"],
    suitable: "Couples planning a pregnancy. Both partners are encouraged to participate.",
    process:
      "Consultation → assessment → detox & nourishment plan → follow-up through conception.",
    duration: "Initial consultation 45–60 minutes.",
    sessions: "Reviewed every 4–6 weeks.",
    benefits:
      "Helps prepare the body, mind and environment for a healthy conception and pregnancy.",
    beforeAfter:
      "Both partners should attend together where possible. Bring any existing reports.",
    charges: "On consultation",
    showPrice: false,
    featured: false,
  },
  {
    id: "panchakarma",
    name: "Panchakarma Therapy",
    short:
      "The five-fold Ayurvedic purification therapy to detoxify, rebalance and rejuvenate the body.",
    category: "Detox & Rejuvenation",
    image: "/clinic/basti-closeup.jpg",
    icon: "Droplets",
    highlights: [
      "Vamana, Virechana, Basti, Nasya, Raktamokshana",
      "Personalised after deep consultation",
      "In-house Panchakarma theatre & Swedana",
      "Strict classical protocol under supervision",
    ],
    conditions: ["Chronic illness", "Detoxification", "Rejuvenation"],
    suitable: "Recommended after detailed consultation. Not suitable during acute illness, pregnancy or severe debility without supervision.",
    process:
      "Pre-procedure (Purvakarma) → main procedure (Pradhana) → post-procedure (Paschatkarma) with diet and lifestyle guidance.",
    duration: "Varies by procedure and individual.",
    sessions: "Typically 7–21 days, fully personalised.",
    benefits:
      "Deep detoxification, improved digestion, clarity of mind and a sense of lightness and renewal.",
    beforeAfter:
      "Pre-procedure diet will be shared in advance. Post-procedure rest and a restricted diet are essential.",
    charges: "On consultation",
    showPrice: false,
    featured: true,
  },
  {
    id: "online-consultation",
    name: "Online / Video Consultation",
    short:
      "Personalised Ayurvedic consultation from the comfort of your home, anywhere in India or abroad.",
    category: "Convenience",
    image: "/images/treat-online.jpg",
    icon: "Video",
    highlights: [
      "Video consultation with Dr. Harshada Malge",
      "Detailed case-taking over a secure call",
      "Digital prescription & medicine courier",
      "WhatsApp follow-ups",
    ],
    conditions: ["All listed conditions"],
    suitable: "Patients unable to visit the clinic, anywhere in India or abroad.",
    process:
      "Book a slot → receive video link → consultation → digital treatment plan → medicine delivery to your doorstep.",
    duration: "45–60 minutes.",
    sessions: "As required, typically every 2–4 weeks.",
    benefits:
      "Convenient access to authentic Ayurvedic care with doorstep medicine delivery.",
    beforeAfter:
      "Keep your reports and current medication list ready. A quiet, well-lit space helps the consultation.",
    charges: "On consultation",
    showPrice: false,
    featured: false,
  },
];

export const patientJourney = [
  {
    step: "01",
    title: "Book a Consultation",
    description:
      "Reach out via the form, phone or WhatsApp. Share your concern in your own words — we'll find the right time for you.",
  },
  {
    step: "02",
    title: "Meet the Doctor",
    description:
      "In-person or online, Dr. Harshada Malge listens deeply to your history, lifestyle and concerns.",
  },
  {
    step: "03",
    title: "Root-Cause Evaluation",
    description:
      "Detailed assessment of Prakriti, Agni, symptoms and imbalances to understand the source of the concern.",
  },
  {
    step: "04",
    title: "Personalised Treatment Plan",
    description:
      "A plan unique to you — herbs, diet, daily routine, Panchakarma and counselling, only where needed.",
  },
  {
    step: "05",
    title: "Follow-up & Care",
    description:
      "Regular follow-ups (in-person, online or via WhatsApp) and doorstep medicine delivery across India.",
  },
];

// E-commerce products — real products from Dr. Harshada Malge's clinic.
// Product names, types and key ingredients are transcribed from the actual
// product labels photographed by the clinic. Pricing remains "on consultation"
// as supplied by the client; buyers enquire via WhatsApp to confirm
// availability, dosage and suitability.
export const products = [
  {
    id: "swarnprashan",
    name: "Swarnprashan",
    tagline: "Ayurvedic immunity for children",
    category: "Wellness & Immunity",
    form: "Drops",
    image: "/images/product-swarnprashan.jpg",
    description:
      "Swarnprashan — a classical Ayurvedic preparation traditionally used to support immunity, growth and cognitive development in children. Formulated with Swarna (gold) and Ayurvedic herbs, prepared and dispensed under the doctor's supervision at Vishwaharsh Ayurved.",
    keyIngredients: ["Swarna Bhasma", "Brahmi", "Medhya herbs"],
    benefits: [
      "Supports natural immunity in children",
      "Traditionally used for cognitive development",
      "Part of Pushya Nakshatra Swarnprashan regimen",
    ],
    dosage: "As advised by Dr. Harshada Malge — traditionally administered on Pushya Nakshatra days.",
    packaging: "Dropper bottle — on consultation",
    priceNote: "On consultation",
    priceFrom: 0,
    featured: true,
    prescriptionNote: "For children. Use strictly under the doctor's guidance — dosage is age-specific.",
  },
  {
    id: "kumkumadi-tailam",
    name: "Kumkumadi Tailam",
    tagline: "Ayurvedic facial oil for radiant skin",
    category: "Skin & Beauty",
    form: "Tailam (Oil)",
    image: "/images/product-kumkumadi.jpg",
    description:
      "A classical Kumkumadi Tailam — a prized Ayurvedic facial oil traditionally used to brighten the complexion, even skin tone and impart a luminous glow. Dispensed in a dropper bottle for precise application.",
    keyIngredients: ["Saffron (Kumkuma)", "Sandalwood", "Herbal base oils"],
    benefits: [
      "Supports skin brightening",
      "Helps improve complexion",
      "Nourishes and rejuvenates facial skin",
    ],
    dosage: "2–3 drops on cleansed face at night. As advised after consultation.",
    packaging: "Dropper bottle — on consultation",
    priceNote: "On consultation",
    priceFrom: 0,
    featured: true,
    prescriptionNote: "For external use. Patch test before first use; consult for suitability.",
  },
  {
    id: "abhyangini-ubtan",
    name: "Abhyangini",
    tagline: "Unlock Nature's Secret to Ageless Beauty",
    category: "Skin & Beauty",
    form: "Ubtan (Herbal Powder)",
    image: "/images/product-abhyangini.jpg",
    description:
      "An Ayurvedic ubtan — a finely milled herbal body & face powder traditionally used as a gentle cleanser and nourisher for the skin. Part of the classical Ayurvedini range.",
    keyIngredients: ["Herbal Mallow", "Sariva", "Chandan"],
    benefits: [
      "Gentle herbal cleansing",
      "Nourishes and softens skin",
      "Supports ageless beauty",
    ],
    dosage: "Mix with milk or water; apply and rinse off. As advised after consultation.",
    packaging: "On consultation",
    priceNote: "On consultation",
    priceFrom: 0,
    featured: true,
    prescriptionNote: "For external use. Recommended after a brief consultation to suit your skin type.",
  },
  {
    id: "mukhkanti-lepa",
    name: "Mukhkanti Lepa",
    tagline: "Unlock Nature's Secret to Ageless Beauty",
    category: "Skin & Beauty",
    form: "Lepa (Herbal Powder)",
    image: "/images/product-mukhkanti.jpg",
    description:
      "A classical Ayurvedic facial lepa (herbal powder paste) traditionally used to enhance complexion, impart a natural glow and support clear, ageless skin. Prepared in-house with authentic herbs.",
    keyIngredients: ["Manjishtha", "Sariva", "Chandan"],
    benefits: [
      "Supports a natural, radiant glow",
      "Helps even out skin tone",
      "Traditionally used for ageless beauty",
    ],
    dosage: "Mix with rose water or milk; apply as a face mask. As advised after consultation.",
    packaging: "On consultation",
    priceNote: "On consultation",
    priceFrom: 0,
    featured: true,
    prescriptionNote: "For external use. Recommended after a brief consultation to suit your skin type.",
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "doctor", label: "Doctor" },
  { id: "gallery", label: "Gallery" },
  { id: "products", label: "Shop" },
  { id: "journey", label: "Patient Journey" },
  { id: "contact", label: "Contact" },
];

export const faqs = [
  {
    q: "Where is the clinic located?",
    a: "Shop no. 4, Shiwale Estate, Shivaji Park, Walhekarwadi Road, Chinchwad — 411033. We welcome patients from all over India and abroad.",
  },
  {
    q: "Do you offer online or video consultations?",
    a: "Yes. We offer home visits, online / video consultation, WhatsApp follow-ups and medicine courier / delivery across India and abroad.",
  },
  {
    q: "What are your consultation timings?",
    a: "Monday to Saturday: 10:00 AM – 1:00 PM and 5:00 PM – 9:00 PM. Sunday: 5:00 PM – 9:00 PM.",
  },
  {
    q: "What are the consultation charges?",
    a: "Consultation charges are 'on consultation'. We do not charge consultation fees for follow-up patients — they only pay for the medicines.",
  },
  {
    q: "How much advance notice is needed for an appointment?",
    a: "Please book at least 1 day in advance. We will call you within 1 working day to confirm your appointment.",
  },
  {
    q: "Which languages do you consult in?",
    a: "Marathi, Hindi and English.",
  },
  {
    q: "Do you offer Panchakarma at the clinic?",
    a: "Yes. We have a dedicated Panchakarma theatre and Steam / Swedana facility at the clinic, alongside an in-house dispensary.",
  },
];

export const trustStats = [
  { value: 10, suffix: "+", label: "Years of Ayurvedic Experience" },
  { value: 3, suffix: "", label: "Specialised Treatment Areas" },
  { value: 6, suffix: "", label: "On-Site Facilities" },
  { value: 4, suffix: "", label: "Ways to Consult" },
];
