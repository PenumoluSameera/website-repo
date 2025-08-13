/* ====== Data ======
   Each state has: name, zone, image, culture, and specialities (Food, Festivals, Places)
   Images reference Wikimedia Commons (swap to your own if preferred)
*/
const statesData = [
  /* ---- NORTH ---- */
  {
    name: "Punjab",
    zone: "north",
    image: "punjab1.png",
    culture: "Energetic folk traditions (Bhangra, Giddha), agrarian roots, and Sikh heritage centered around the Harmandir Sahib.",
    specialities: [
      "Food: Sarson da Saag, Makki di Roti, Lassi, Butter Chicken",
      "Festivals: Baisakhi, Lohri, Gurpurab",
      "Famous Places: Golden Temple, Wagah Border, Jallianwala Bagh"
    ]
  },
  {
    name: "Rajasthan",
    zone: "west",
    image: "Rajasthan.png",
    culture: "Royal forts and palaces, desert life, colorful textiles, and folk arts like Ghoomar and Kalbelia.",
    specialities: [
      "Food: Dal Baati Churma, Gatte ki Sabzi, Ghevar",
      "Festivals: Pushkar Camel Fair, Teej, Desert Festival",
      "Famous Places: Jaipur, Jaisalmer Fort, Udaipur City Palace"
    ]
  },
  {
    name: "Uttar Pradesh",
    zone: "north",
    image: "uttarpradesh.png",
    culture: "Cradle of Indo-Gangetic civilization, syncretic Ganga-Jamuni tehzeeb, classical music and Urdu-Hindi literature.",
    specialities: [
      "Food: Tunday Kababi, Petha, Bedmi Puri",
      "Festivals: Kumbh Mela, Diwali at Ayodhya, Holi in Barsana",
      "Famous Places: Taj Mahal (Agra), Varanasi Ghats, Ayodhya"
    ]
  },
  {
    name: "Himachal Pradesh",
    zone: "north",
    image: "himachal.png",
    culture: "Mountain communities with wooden temples, folk dances (Nati), and apple orchards.",
    specialities: [
      "Food: Siddu, Madra",
      "Festivals: Kullu Dussehra, Minjar",
      "Famous Places: Manali, Shimla, Spiti Valley"
    ]
  },
  {
    name: "Uttarakhand",
    zone: "north",
    image: "uttarkand.png",
    culture: "Devbhumi (Land of the Gods) with Char Dham pilgrimage, Garhwali & Kumaoni traditions.",
    specialities: [
      "Food: Kafuli, Phaanu, Bal Mithai",
      "Festivals: Kumbh (Haridwar), Ghee Sankranti",
      "Famous Places: Kedarnath, Badrinath, Valley of Flowers"
    ]
  },
  {
    name: "Haryana",
    zone: "north",
    image: "haryana.png",
    culture: "Pastoral-Haryanvi traditions, Phulkari embroidery, and rustic folk songs/dance.",
    specialities: [
      "Food: Bajra Roti, Kachri ki Sabzi, Lassi",
      "Festivals: Surajkund Mela, Teej",
      "Famous Places: Kurukshetra, Sultanpur Bird Sanctuary"
    ]
  },

  /* ---- WEST ---- */
  {
    name: "Gujarat",
    zone: "west",
    image: "gujarat.png",
    culture: "Mercantile heritage, vibrant Navratri Garba, crafts, and coastal temples.",
    specialities: [
      "Food: Dhokla, Thepla, Fafda-Jalebi, Undhiyu",
      "Festivals: Navratri Garba, Uttarayan (Kite Festival)",
      "Famous Places: Somnath, Gir National Park, Rann of Kutch"
    ]
  },
  {
    name: "Maharashtra",
    zone: "west",
    image: "maharshtra.png",
    culture: "Maratha legacy, coastal Konkan flavors, Warkari bhakti, and cosmopolitan Mumbai arts.",
    specialities: [
      "Food: Vada Pav, Misal Pav, Puran Poli, Modak",
      "Festivals: Ganesh Chaturthi, Ellora-Ajanta festivals",
      "Famous Places: Gateway of India, Ajanta & Ellora, Shaniwar Wada"
    ]
  },
  {
    name: "Goa",
    zone: "west",
    image: "goa.png",
    culture: "Indo-Portuguese fusion—music, architecture, and sea-centric cuisine.",
    specialities: [
      "Food: Fish Curry-Rice, Vindaloo, Bebinca",
      "Festivals: Carnival, Shigmo, Christmas",
      "Famous Places: Basilica of Bom Jesus, Calangute, Fort Aguada"
    ]
  },
  {
    name: "Rajasthan (Thar Desert)",
    zone: "west",
    image: "Rajasthan.png",
    culture: "Golden desert citadels, camel caravans, and folk epics sung by bards.",
    specialities: [
      "Food: Ker Sangri, Laal Maas",
      "Festivals: Desert Festival (Jaisalmer)",
      "Famous Places: Jaisalmer Fort, Sam Sand Dunes"
    ]
  },

  /* ---- SOUTH ---- */
  {
    name: "Kerala",
    zone: "south",
    image: "kerala.png",
    culture: "Backwaters, Ayurveda, Kathakali & Mohiniyattam, and matrilineal traditions in parts.",
    specialities: [
      "Food: Kerala Sadya, Appam & Stew, Puttu",
      "Festivals: Onam, Thrissur Pooram",
      "Famous Places: Alleppey Backwaters, Munnar, Kovalam"
    ]
  },
  {
    name: "Tamil Nadu",
    zone: "south",
    image: "tamilnadu.png",
    culture: "Classical Dravidian temples, Bharatanatyam, Carnatic music, and Sangam literature.",
    specialities: [
      "Food: Dosa, Idli, Pongal, Filter Coffee",
      "Festivals: Pongal, Margazhi Music Season",
      "Famous Places: Brihadeeswarar, Meenakshi Amman, Marina Beach"
    ]
  },
  {
    name: "Karnataka",
    zone: "south",
    image: "karnataka.png",
    culture: "Vijayanagara heritage, classical music (Carnatic) and Yakshagana theatre.",
    specialities: [
      "Food: Bisi Bele Bath, Mysore Pak, Ragi Mudde",
      "Festivals: Mysuru Dasara, Kambala",
      "Famous Places: Hampi, Mysore Palace, Belur-Halebidu"
    ]
  },
  {
    name: "Andhra Pradesh",
    zone: "south",
    image: "andhrapradesh.png",
    culture: "Telugu literature, Kuchipudi dance, and grand temple traditions.",
    specialities: [
      "Food: Gongura, Pesarattu, Pootharekulu",
      "Festivals: Ugadi, Sankranti",
      "Famous Places: Tirupati, Amaravati, Araku Valley"
    ]
  },
  {
    name: "Telangana",
    zone: "south",
    image: "telagana.png",
    culture: "Deccani tehzeeb, Qutb Shahi legacy, and rich craft traditions (Bidri, pearls).",
    specialities: [
      "Food: Hyderabadi Biryani, Haleem, Double ka Meetha",
      "Festivals: Bathukamma, Bonalu",
      "Famous Places: Charminar, Golconda Fort, Ramappa Temple"
    ]
  },

  /* ---- EAST ---- */
  {
    name: "West Bengal",
    zone: "east",
    image: "westbengal.jpg",
    culture: "Bengal renaissance, classical arts, cinema & literature; grand community pujas.",
    specialities: [
      "Food: Fish Curry, Mishti Doi, Rosogolla, Sandesh",
      "Festivals: Durga Puja, Poila Boishakh",
      "Famous Places: Kolkata, Sundarbans, Shantiniketan"
    ]
  },
  {
    name: "Odisha",
    zone: "east",
    image: "odisha.jpg",
    culture: "Jagannath tradition, Odissi dance, and Kalinga architecture.",
    specialities: [
      "Food: Pakhala Bhata, Chenna Poda",
      "Festivals: Rath Yatra (Puri)",
      "Famous Places: Konark Sun Temple, Puri, Chilika Lake"
    ]
  },
  {
    name: "Bihar",
    zone: "east",
    image: "bihar.jpg",
    culture: "Ancient Magadha heritage, Buddhism & Jainism centers, and Maithili folklore.",
    specialities: [
      "Food: Litti Chokha, Thekua, Khaja",
      "Festivals: Chhath Puja, Sonepur Mela",
      "Famous Places: Bodh Gaya, Nalanda, Vaishali"
    ]
  },
  

  /* ---- CENTRAL ---- */
  {
    name: "Madhya Pradesh",
    zone: "central",
    image: "madhaypradesh.png",
    culture: "Heart of India—temples and rock art; Hindustani music gharanas and craft clusters.",
    specialities: [
      "Food: Poha-Jalebi, Bhutte ka Kees",
      "Festivals: Khajuraho Dance Festival, Tansen Samaroh",
      "Famous Places: Khajuraho, Sanchi, Kanha & Bandhavgarh"
    ]
  },
  {
    name: "Chhattisgarh",
    zone: "central",
    image: "chhatigra.png",
    culture: "Adivasi rhythms (Panthi, Raut Nacha), bell-metal crafts, forests and waterfalls.",
    specialities: [
      "Food: Chila, Faraa, Bafauri",
      "Festivals: Bastar Dussehra, Madai",
      "Famous Places: Chitrakote Falls, Kanger Valley"
    ]
  },

  /* ---- NORTH EAST ---- */
  {
    name: "Assam",
    zone: "northeast",
    image: "assam.png",
    culture: "Tea gardens, Sattriya dance, weaving (Muga silk) and river-centric life.",
    specialities: [
      "Food: Khar, Masor Tenga, Pitha",
      "Festivals: Bihu, Ambubachi Mela",
      "Famous Places: Kaziranga, Majuli, Kamakhya"
    ]
  },
  {
    name: "Meghalaya",
    zone: "northeast",
    image: "meghalaya.png",
    culture: "Khasi, Garo, Jaintia traditions; matrilineal social systems; rain-rich landscapes.",
    specialities: [
      "Food: Jadoh, Tungrymbai",
      "Festivals: Wangala (100 Drums), Shad Suk Mynsiem",
      "Famous Places: Living Root Bridges, Cherrapunji, Mawlynnong"
    ]
  },
  {
    name: "Arunachal Pradesh",
    zone: "northeast",
    image: "arunachalpradehs.png",
    culture: "Monpa and other tribes, Buddhist monasteries, and vibrant handlooms.",
    specialities: [
      "Food: Thukpa, Zan",
      "Festivals: Losar, Torgya, Ziro Festival of Music",
      "Famous Places: Tawang Monastery, Ziro Valley, Bomdila"
    ]
  },
  {
    name: "Nagaland",
    zone: "northeast",
    image: "nagaland.jpg",
    culture: "Naga tribes’ warrior lore, beadwork, log drums, and vibrant festivals.",
    specialities: [
      "Food: Smoked Pork, Axone dishes, Bamboo Shoots",
      "Festivals: Hornbill Festival",
      "Famous Places: Kohima, Dzukou Valley, Kisama Heritage Village"
    ]
  },
  {
    name: "Manipur",
    zone: "northeast",
    image: "manipur.png",
    culture: "Ras Lila dance, polo (Sagol Kangjei) origins, and handloom traditions.",
    specialities: [
      "Food: Eromba, Chamthong",
      "Festivals: Sangai Festival, Lai Haraoba",
      "Famous Places: Loktak Lake, Kangla Fort, Ima Keithel"
    ]
  },
  {
    name: "Mizoram",
    zone: "northeast",
    image: "mizoram.jpg",
    culture: "Mizo community life with choir music, bamboo dances (Cheraw), and tidy hill towns.",
    specialities: [
      "Food: Bai, Sawhchiar",
      "Festivals: Chapchar Kut, Mim Kut",
      "Famous Places: Aizawl, Reiek, Phawngpui (Blue Mountain)"
    ]
  },
  {
    name: "Tripura",
    zone: "northeast",
    image: "tripura.png",
    culture: "Royal palaces, Kokborok heritage, bamboo crafts, and temple traditions.",
    specialities: [
      "Food: Mui Borok, Berma dishes",
      "Festivals: Kharchi Puja, Durga Puja",
      "Famous Places: Ujjayanta Palace, Neermahal, Unakoti"
    ]
  },
  {
    name: "Sikkim",
    zone: "northeast",
    image: "sikkim.png",
    culture: "Buddhist monasteries, Lepcha-Bhutia-Nepali traditions, and alpine ecology.",
    specialities: [
      "Food: Momos, Thukpa, Gundruk",
      "Festivals: Losar, Saga Dawa",
      "Famous Places: Rumtek, Tsomgo Lake, Nathula"
    ]
  }
];

/* ====== DOM Refs ====== */
const container = document.getElementById("states-container");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalCulture = document.getElementById("modalCulture");
const modalSpecialities = document.getElementById("modalSpecialities");
const modalPills = document.getElementById("modalPills");
const closeModal = document.getElementById("closeModal");
const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filter");

/* ====== Render Helpers ====== */
function createCard(state){
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <img src="${state.image}" alt="${state.name} culture"/>
    <h3>${state.name}</h3>
    <p>${state.culture.slice(0, 110)}...</p>
  `;
  card.addEventListener("click", () => openModal(state));
  return card;
}

function openModal(state){
  modalTitle.textContent = state.name;
  modalImage.src = state.image;
  modalImage.alt = `${state.name} cultural image`;
  modalCulture.textContent = state.culture;

  // Pills: zone + quick tags from first words of specialities
  modalPills.innerHTML = "";
  const zoneMap = {north:"North", south:"South", east:"East", west:"West", northeast:"North East", central:"Central"};
  addPill(zoneMap[state.zone] || "India");
  addPill(state.specialities[0]?.split(":")[0] || "Food");
  addPill(state.specialities[1]?.split(":")[0] || "Festivals");
  addPill(state.specialities[2]?.split(":")[0] || "Places");

  // List specialities
  modalSpecialities.innerHTML = "";
  state.specialities.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    modalSpecialities.appendChild(li);
  });

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function addPill(text){
  const span = document.createElement("span");
  span.className = "pill";
  span.textContent = text;
  modalPills.appendChild(span);
}

function closeModalNow(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

/* ====== Search / Filter / Render ====== */
function renderList(list){
  container.innerHTML = "";
  list.forEach(st => container.appendChild(createCard(st)));
}

function applyFilters(){
  const q = (searchInput.value || "").trim().toLowerCase();
  const zone = filterSelect.value;
  const filtered = statesData.filter(st => {
    const matchesZone = zone === "all" ? true : st.zone === zone;
    const matchesQuery =
      st.name.toLowerCase().includes(q) ||
      st.culture.toLowerCase().includes(q) ||
      st.specialities.some(s => s.toLowerCase().includes(q));
    return matchesZone && matchesQuery;
  });
  renderList(filtered);
}

/* ====== Events ====== */
closeModal.addEventListener("click", closeModalNow);
modal.addEventListener("click", (e) => { if(e.target === modal) closeModalNow(); });
document.addEventListener("keydown", (e) => { if(e.key === "Escape") closeModalNow(); });

searchInput.addEventListener("input", applyFilters);
filterSelect.addEventListener("change", applyFilters);

/* ====== Init ====== */
renderList(statesData);


