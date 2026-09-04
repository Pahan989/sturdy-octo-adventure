/**
 * Coco TY — Sri Lanka Coconut Trade Mobile Web App
 * Enhanced: Auto-Update Engine, Particle Graphics, Payment Flow, Government Data Sync
 */

// =============================================================================
// 1. Complete Bilingual Dictionary
// =============================================================================
const i18n = {
  si: {
    tagline: "ශ්‍රී ලංකා පොල් වෙළඳ ද්වාරය",
    marketLive: "කොළඹ වෙන්දේසි මිල ගණන් (අද)",
    autoUpdate: "ස්වයං-යාවත්",
    cdaSource: "මූලාශ්‍රය: පොල් සංවර්ධන අධිකාරිය (CDA)",
    liveSync: "LIVE SYNC",
    tickerLabel: "මිල සටහන:",
    navPrices: "මිල ගණන්",
    navMills: "මෝල්",
    navMarket: "වෙළඳපොළ",
    pricesTitle: "දෛනික භාණ්ඩ මිල ගණන්",
    pricesDesc: "පොල් සංවර්ධන අධිකාරියේ (CDA) සහ ප්‍රධාන වෙළඳපොළ සාමාන්‍ය මිල",
    updatedNow: "යාවත්කාලීනයි",
    lastUpdated: "අවසන් යාවත්කාලීනය:",
    trendBadge: "මිල ප්‍රවණතාව",
    chartTitle: "සති 8 ක මිල විචලනය",
    legendRecorded: "සතිපතා වෙන්දේසි සාමාන්‍යය",
    legendGovRef: "රජයේ අවම මිළ",
    govStatsTitle: "රජයේ වෙළඳපොළ සාරාංශය",
    infoBannerTitle: "පොල් ත්‍රිකෝණයේ වෙළඳ තොරතුරු",
    infoBannerText: "කුරුණෑගල, පුත්තලම සහ ගම්පහ දිස්ත්‍රික්කවල තොග ගනුදෙනු සඳහා ප්‍රවාහන ගාස්තු සැලකිල්ලට ගෙන මිල සංශෝධනය විය හැක.",
    millsTitle: "මෝල් නාමාවලිය",
    millsDesc: "ශ්‍රී ලංකාවේ ලියාපදිංචි පොල්, තෙල් සහ කොහු මෝල්",
    catAll: "සියල්ල",
    catCoconutMills: "පොල් මෝල්",
    catOilMills: "තෙල් මෝල්",
    catCoirMills: "කොහු මෝල්",
    searchMillPlaceholder: "නම හෝ නගරය සොයන්න...",
    allDistricts: "සියලු දිස්ත්‍රික්ක",
    marketTitle: "ගැනුම් / සැපයුම් වෙළඳපොළ",
    marketDesc: "සෘජු වෙළඳ දැන්වීම් සහ ව්‍යාපාරික සබඳතා",
    postListing: "දැන්වීමක් පළ කරන්න",
    commCoconut: "පොල්",
    commOil: "පොල් තෙල්",
    commCoir: "කොහු",
    commHusk: "පොල් ලෙලි",
    commShell: "පොල් කටු",
    tradeAll: "සියල්ල",
    tradeBuyerShort: "ගැනුම්කරු",
    tradeSupplierShort: "සැපයුම්කරු",
    verifiedLead: "තහවුරු කළ වෙළඳ සබඳතාව",
    unlockTitle: "සම්බන්ධතා විස්තර අගුළු හරින්න",
    unlockSubtitle: "මෙම වෙළඳකරුගේ සෘජු දුරකථන අංකය ලබා ගැනීමට රු. 150 ක ගාස්තුවක් අදාළ වේ.",
    choosePayment: "ගෙවීම් ක්‍රමය තෝරන්න",
    serviceFee: "සෘජු සබඳතා ගාස්තුව",
    instantActivation: "ක්ෂණික සක්‍රිය කිරීම",
    freeInstant: "නොමිලේ",
    totalPayable: "මුළු මුදල",
    confirmUnlockBtn: "දැන් අගුළු හරින්න — රු. 250",
    cancelBtn: "පසුවට",
    securityGuarantee: "100% තහවුරු කළ දුරකථන අංක සහ ආරක්ෂිත ගෙවීම්",
    processingTitle: "ගෙවීම සකසමින්...",
    processingDesc: "ඔබගේ ගෙවීම ආරක්ෂිතව සකසනු ලැබේ. කරුණාකර රැඳී සිටින්න.",
    procStep1: "ගෙවීම් ද්වාරයට සම්බන්ධ වෙමින්...",
    procStep2: "ගනුදෙනුව සත්‍යාපනය කරමින්...",
    procStep3: "සබඳතාව අගුළු හරිමින්...",
    unlockedSuccessTitle: "සබඳතාව සාර්ථකව අගුළු හැරිණි!",
    unlockedSuccessDesc: "ඔබට දැන් මෙම වෙළඳ සහකරු සමඟ සෘජුවම සම්බන්ධ විය හැක.",
    paidAmount: "ගෙවූ මුදල",
    paymentMethod: "ක්‍රමය",
    backToMarket: "නැවත වෙළඳපොළට",
    freeListing: "නොමිලේ දැන්වීමක්",
    postListingTitle: "නව දැන්වීමක් එක් කරන්න",
    postListingSubtitle: "දිවයින පුරා සිටින පොල් මෝල් හිමියන් සහ වෙළෙන්දන් වෙත ඔබේ අවශ්‍යතාව දන්වන්න.",
    formRole: "ඔබේ භූමිකාව:",
    formCategory: "භාණ්ඩ වර්ගය:",
    formDistrict: "දිස්ත්‍රික්කය:",
    formQuantity: "ප්‍රමාණය:",
    qtyPlaceholder: "උදා: ගෙඩි 20,000 ක් සතිපතා",
    formPhone: "දුරකථන අංකය:",
    formNotes: "විස්තර / කොන්දේසි:",
    notesPlaceholder: "මිලදී ගැනීමේ හෝ සැපයීමේ කොන්දේසි...",
    submitListing: "දැන්වීම පළ කරන්න",
    callBtn: "අමතන්න",
    verifiedBadge: "✓ තහවුරු කළ",
    unverifiedBadge: "තහවුරු කර නොමැත",
    unlockBtnShort: "අගුළු හරින්න — රු. 250",
    highPrice: "උපරිම මිල",
    lowPrice: "අවම මිල",
    currAvg: "වත්මන් සාමාන්‍යය",
    toastListingSuccess: "ඔබගේ දැන්වීම සාර්ථකව පළ කරන ලදී!",
    toastUnlockSuccess: "සම්බන්ධතා විස්තර සාර්ථකව අගුළු හැරිණි!",
    toastRefreshed: "නවතම වෙන්දේසි මිල ගණන් යාවත්කාලීන විය!",
    millsCountSuffix: "මෝල්",
    marketCountSuffix: "දැන්වීම්",
    updateBannerText: "🏛️ CDA මිල ගණන් ස්වයංක්‍රීයව යාවත්කාලීන විය!",
    govTotalProduction: "මාසික නිෂ්පාදනය",
    govAvgPrice: "සාමාන්‍ය මිල",
    govExportVolume: "අපනයන පරිමාව",
    govMarketIndex: "වෙළඳපොළ දර්ශකය",
    govDemand: "දේශීය ඉල්ලුම",
    govSupply: "සැපයුම්",
    millionNuts: "මිලි. ගෙඩි",
    metricTons: "MT"
  },
  en: {
    tagline: "Sri Lanka Coconut Trade Portal",
    marketLive: "Colombo Auction Daily Rates (Live)",
    autoUpdate: "Auto-Update",
    cdaSource: "Source: Coconut Development Authority (CDA)",
    liveSync: "LIVE SYNC",
    tickerLabel: "LIVE TICKER:",
    navPrices: "Prices",
    navMills: "Mills",
    navMarket: "Market",
    pricesTitle: "Daily Commodity Prices",
    pricesDesc: "Coconut Development Authority (CDA) & Major Market Averages",
    updatedNow: "Updated Just Now",
    lastUpdated: "Last updated:",
    trendBadge: "PRICE TREND",
    chartTitle: "8-Week Price Trajectory",
    legendRecorded: "Weekly Auction Average",
    legendGovRef: "Govt Floor Price",
    govStatsTitle: "Government Market Summary",
    infoBannerTitle: "Coconut Triangle Trade Insights",
    infoBannerText: "For bulk orders in Kurunegala, Puttalam, and Gampaha districts, rates may vary based on transport logistics and nut size grading.",
    millsTitle: "Mills Directory",
    millsDesc: "Certified coconut, oil, and coir processing facilities in Sri Lanka",
    catAll: "All",
    catCoconutMills: "Coconut Mills",
    catOilMills: "Oil Mills",
    catCoirMills: "Coir Mills",
    searchMillPlaceholder: "Search mill name or town...",
    allDistricts: "All Districts",
    marketTitle: "Buyer / Supplier Marketplace",
    marketDesc: "Direct wholesale trading leads & verified contacts",
    postListing: "Post a Listing",
    commCoconut: "Coconut",
    commOil: "Coconut Oil",
    commCoir: "Coir Fiber",
    commHusk: "Coconut Husk",
    commShell: "Coconut Shell",
    tradeAll: "All",
    tradeBuyerShort: "Buyers",
    tradeSupplierShort: "Suppliers",
    verifiedLead: "Verified Trade Lead",
    unlockTitle: "Unlock Verified Contact",
    unlockSubtitle: "Get the direct phone number for this trade lead for a nominal fee of Rs. 150.",
    choosePayment: "Choose Payment Method",
    serviceFee: "Direct Lead Access Fee",
    instantActivation: "Instant Mobile Activation",
    freeInstant: "FREE",
    totalPayable: "Total Payable",
    confirmUnlockBtn: "Unlock Contact Now — Rs. 250",
    cancelBtn: "Later",
    securityGuarantee: "100% verified numbers & secure local gateway",
    processingTitle: "Processing Payment...",
    processingDesc: "Your payment is being securely processed. Please wait.",
    procStep1: "Connecting to payment gateway...",
    procStep2: "Verifying transaction...",
    procStep3: "Unlocking contact details...",
    unlockedSuccessTitle: "Contact Unlocked Successfully!",
    unlockedSuccessDesc: "You can now connect directly with this trading partner via phone or WhatsApp.",
    paidAmount: "Amount Paid",
    paymentMethod: "Method",
    backToMarket: "Back to Marketplace",
    freeListing: "Free Listing",
    postListingTitle: "Create Trade Listing",
    postListingSubtitle: "Broadcast your requirement or supply to thousands of millers and brokers across Sri Lanka.",
    formRole: "Your Role:",
    formCategory: "Commodity Category:",
    formDistrict: "District:",
    formQuantity: "Quantity / Volume:",
    qtyPlaceholder: "e.g. 20,000 nuts weekly",
    formPhone: "Contact Phone Number:",
    formNotes: "Specifications / Terms:",
    notesPlaceholder: "Payment terms, grade quality, pickup or delivery...",
    submitListing: "Publish Listing",
    callBtn: "Call Mill",
    verifiedBadge: "✓ Verified",
    unverifiedBadge: "Unverified",
    unlockBtnShort: "Unlock — Rs.150",
    highPrice: "8W High",
    lowPrice: "8W Low",
    currAvg: "Current Avg",
    toastListingSuccess: "Your trade listing has been published!",
    toastUnlockSuccess: "Contact unlocked successfully!",
    toastRefreshed: "Latest auction prices refreshed!",
    millsCountSuffix: "Mills",
    marketCountSuffix: "Listings",
    updateBannerText: "🏛️ CDA prices auto-updated with latest market data!",
    govTotalProduction: "Monthly Production",
    govAvgPrice: "Avg Auction Price",
    govExportVolume: "Export Volume",
    govMarketIndex: "Market Index",
    govDemand: "Local Demand",
    govSupply: "Supply",
    millionNuts: "Mn nuts",
    metricTons: "MT"
  }
};

// =============================================================================
// 2. Mock Commodity Data
// =============================================================================
const commoditiesData = {
  coconut: {
    id: "coconut", icon: "🥥", bgClass: "bg-coconut",
    nameSi: "අලුත් පොල්", nameEn: "Fresh Coconut",
    unitSi: "රු. / ගෙඩිය", unitEn: "LKR / nut",
    price: 115.00, changePct: 4.5, isUp: true,
    history: [96, 98, 102, 105, 108, 106, 110, 115],
    govRef: 100, weeks: ["W1","W2","W3","W4","W5","W6","W7","W8"]
  },
  oil: {
    id: "oil", icon: "🫗", bgClass: "bg-oil",
    nameSi: "පොල් තෙල්", nameEn: "Coconut Oil",
    unitSi: "රු. / ලීටරය", unitEn: "LKR / Litre",
    price: 680.00, changePct: -1.8, isUp: false,
    history: [720, 715, 710, 700, 695, 690, 692, 680],
    govRef: 650, weeks: ["W1","W2","W3","W4","W5","W6","W7","W8"]
  },
  husk: {
    id: "husk", icon: "🪵", bgClass: "bg-husk",
    nameSi: "පොල් ලෙලි", nameEn: "Coconut Husk",
    unitSi: "රු. / ලෙලි 1,000", unitEn: "LKR / 1,000 Husks",
    price: 24500.00, changePct: 2.1, isUp: true,
    history: [22000, 22500, 23000, 23200, 23800, 24000, 24200, 24500],
    govRef: 21500, weeks: ["W1","W2","W3","W4","W5","W6","W7","W8"]
  },
  coir: {
    id: "coir", icon: "🧶", bgClass: "bg-coir",
    nameSi: "කොහු කෙඳි", nameEn: "Coir Fiber",
    unitSi: "රු. / කි.ග්‍රෑ.", unitEn: "LKR / kg",
    price: 185.00, changePct: 0.8, isUp: true,
    history: [172, 175, 176, 178, 180, 182, 183, 185],
    govRef: 165, weeks: ["W1","W2","W3","W4","W5","W6","W7","W8"]
  },
  shell: {
    id: "shell", icon: "🥣", bgClass: "bg-shell",
    nameSi: "පොල් කටු", nameEn: "Coconut Shell",
    unitSi: "රු. / කි.ග්‍රෑ.", unitEn: "LKR / kg",
    price: 78.00, changePct: -3.2, isUp: false,
    history: [85, 84, 83, 82, 80, 81, 80, 78],
    govRef: 70, weeks: ["W1","W2","W3","W4","W5","W6","W7","W8"]
  }
};

// Mills
const millsData = [
  { id:"m1", nameSi:"කුලියාපිටිය එක්සත් පොල් මෝල", nameEn:"Kuliyapitiya United Coconut Mills", district:"Kurunegala", townSi:"කුලියාපිටිය", townEn:"Kuliyapitiya", category:"coconut", isVerified:true, capacitySi:"ගෙඩි 35,000/දින", capacityEn:"35,000 nuts/day", phone:"037-2281450" },
  { id:"m2", nameSi:"මාදම්පේ ස්වර්ණ තෙල් නිස්සාරණ", nameEn:"Madampe Golden Oil Extractions", district:"Puttalam", townSi:"මාදම්පේ", townEn:"Madampe", category:"oil", isVerified:true, capacitySi:"ලීටර් 12,000/දින", capacityEn:"12,000 L/day", phone:"032-2258912" },
  { id:"m3", nameSi:"වෙන්නප්පුව කොහු කර්මාන්ත", nameEn:"Wennappuwa Coir & Bristle Works", district:"Puttalam", townSi:"වෙන්නප්පුව", townEn:"Wennappuwa", category:"coir", isVerified:true, capacitySi:"ටොන් 8/දින", capacityEn:"8 MT/day", phone:"032-2254190" },
  { id:"m4", nameSi:"ගිරිඋල්ල ඇග්‍රෝ එක්ස්පෝර්ට්", nameEn:"Giriulla Agro Export Processors", district:"Kurunegala", townSi:"ගිරිඋල්ල", townEn:"Giriulla", category:"coconut", isVerified:true, capacitySi:"ගෙඩි 50,000/දින", capacityEn:"50,000 nuts/day", phone:"037-2288344" },
  { id:"m5", nameSi:"මිනුවන්ගොඩ රෝයල් තෙල් මෝල", nameEn:"Minuwangoda Royal Oil Mills", district:"Gampaha", townSi:"මිනුවන්ගොඩ", townEn:"Minuwangoda", category:"oil", isVerified:true, capacitySi:"ලීටර් 8,500/දින", capacityEn:"8,500 L/day", phone:"011-2295670" },
  { id:"m6", nameSi:"බිංගිරිය ප්‍රිමියර් කොහු මෝල", nameEn:"Bingiriya Premier Coir Mill", district:"Kurunegala", townSi:"බිංගිරිය", townEn:"Bingiriya", category:"coir", isVerified:true, capacitySi:"ලෙලි 60,000/දින", capacityEn:"60,000 husks/day", phone:"037-2292105" },
  { id:"m7", nameSi:"හලාවත සිල්වර් ලේක් පිරිපහදුව", nameEn:"Chilaw Silver Lake Refinery", district:"Puttalam", townSi:"හලාවත", townEn:"Chilaw", category:"oil", isVerified:true, capacitySi:"ලීටර් 15,000/දින", capacityEn:"15,000 L/day", phone:"032-2223450" },
  { id:"m8", nameSi:"මීරිගම ග්‍රීන් පැල්ම් මෝල", nameEn:"Mirigama Green Palm Co-Op", district:"Gampaha", townSi:"මීරිගම", townEn:"Mirigama", category:"coconut", isVerified:false, capacitySi:"ගෙඩි 18,000/දින", capacityEn:"18,000 nuts/day", phone:"033-2274112" },
  { id:"m9", nameSi:"නාරම්මල සම්පත් කොහු නිෂ්පාදන", nameEn:"Narammala Sampath Coir Products", district:"Kurunegala", townSi:"නාරම්මල", townEn:"Narammala", category:"coir", isVerified:false, capacitySi:"ටොන් 4/දින", capacityEn:"4 MT/day", phone:"037-2249019" },
  { id:"m10", nameSi:"හොරණ නිව් පැල්ම් තෙල් මෝල", nameEn:"Horana New Palm Oil Mill", district:"Kalutara", townSi:"හොරණ", townEn:"Horana", category:"oil", isVerified:false, capacitySi:"ලීටර් 6,000/දින", capacityEn:"6,000 L/day", phone:"034-2261230" },
  { id:"m11", nameSi:"අම්බලන්ගොඩ සදර්න් ෆයිබර්", nameEn:"Ambalangoda Southern Fiber Works", district:"Galle", townSi:"අම්බලන්ගොඩ", townEn:"Ambalangoda", category:"coir", isVerified:false, capacitySi:"ලෙලි 20,000/දින", capacityEn:"20,000 husks/day", phone:"091-2258410" },
  { id:"m12", nameSi:"තංගල්ල ශ්‍රී ධම්මික තෙල් මෝල", nameEn:"Tangalle Sri Dhammika Oil Mill", district:"Hambantota", townSi:"තංගල්ල", townEn:"Tangalle", category:"oil", isVerified:false, capacitySi:"ලීටර් 4,500/දින", capacityEn:"4,500 L/day", phone:"047-2240981" }
];

// Market Leads
const marketData = [
  { id:"l1", category:"coconut", role:"buyer", district:"Kurunegala", townSi:"මැල්සිරිපුර", townEn:"Melsiripura", qtySi:"ගෙඩි 50,000 (සතිපතා)", qtyEn:"50,000 nuts / weekly", date:"2026.09.04", notesSi:"Grade A විශාල ගෙඩි. බැංකු හුවමාරුව/මුදල් ගෙවීම.", notesEn:"Grade A large nuts. Cash on loading or bank transfer.", contactName:"කුමාර වික්‍රමසිංහ", phone:"077-4829102" },
  { id:"l2", category:"coconut", role:"supplier", district:"Puttalam", townSi:"මාරවිල", townEn:"Marawila", qtySi:"ගෙඩි 35,000 විකිණීමට", qtyEn:"35,000 nuts available", date:"2026.09.03", notesSi:"වතුවෙන් කෙලින්ම. ප්‍රවාහනය ලබාදිය හැක.", notesEn:"Direct from estate. Transport available.", contactName:"ජයන්ත පීරිස්", phone:"071-8204918" },
  { id:"l3", category:"oil", role:"buyer", district:"Colombo", townSi:"පෑලියගොඩ", townEn:"Peliyagoda", qtySi:"තෙල් බැරල් 25 ක් අවශ්‍යයි", qtyEn:"25 Barrels pure coconut oil", date:"2026.09.04", notesSi:"SLS සහතිකය අවශ්‍යයි. කර්මාන්තශාලා භාවිතය.", notesEn:"SLS certification required. For food processing.", contactName:"සමන් රත්නායක", phone:"076-3498112" },
  { id:"l4", category:"oil", role:"supplier", district:"Puttalam", townSi:"මාදම්පේ", townEn:"Madampe", qtySi:"කොප්පරා තෙල් ලීටර් 5,000", qtyEn:"5,000 L copra oil", date:"2026.09.02", notesSi:"100% ස්වභාවික. අවම ඇණවුම ලීටර් 1,000.", notesEn:"100% natural. Min order 1,000L. Samples available.", contactName:"සුනිල් පෙරේරා", phone:"077-9014523" },
  { id:"l5", category:"coir", role:"buyer", district:"Gampaha", townSi:"කටුනායක", townEn:"Katunayake EPZ", qtySi:"කොහු කෙඳි MT 15 ක්", qtyEn:"15 MT Coir Fiber for Export", date:"2026.09.04", notesSi:"තෙතමනය 15%ට අඩු බේල් අවශ්‍යයි.", notesEn:"Moisture below 15%. Compressed bales.", contactName:"හර්ෂ ද සිල්වා", phone:"070-2219485" },
  { id:"l6", category:"coir", role:"supplier", district:"Kurunegala", townSi:"අලව්ව", townEn:"Alawwa", qtySi:"කොහු ටොන් 10 සූදානම්", qtyEn:"10 MT Coir Fiber ready", date:"2026.09.01", notesSi:"පිරිසිදු කර බේල් කළ උසස් කොහු.", notesEn:"Cleaned & baled prime fiber from mill.", contactName:"බන්දුල හේරත්", phone:"078-5541092" },
  { id:"l7", category:"husk", role:"supplier", district:"Kurunegala", townSi:"නිකවැරටිය", townEn:"Nikaweratiya", qtySi:"වියළි ලෙලි 80,000", qtyEn:"80,000 Dry Husks", date:"2026.09.04", notesSi:"කොහු මෝල් සඳහා. පැටවීමට සූදානම්.", notesEn:"Ideal for defibering mills. Ready for loading.", contactName:"කමල් රාජපක්ෂ", phone:"075-8891234" },
  { id:"l8", category:"husk", role:"buyer", district:"Puttalam", townSi:"නාත්තන්ඩිය", townEn:"Nattandiya", qtySi:"ලෙලි 50,000 අවශ්‍යයි", qtyEn:"50,000 Fresh Husks wanted", date:"2026.09.03", notesSi:"නැවුම් කොළ ලෙලි. ප්‍රවාහනය අපි කරමු.", notesEn:"Fresh green husks preferred. Transport by us.", contactName:"ප්‍රදීප් කරුණාරත්න", phone:"077-3129845" },
  { id:"l9", category:"shell", role:"buyer", district:"Kalutara", townSi:"පානදුර", townEn:"Panadura", qtySi:"පොල් කටු ටොන් 20", qtyEn:"20 MT Coconut Shells wanted", date:"2026.09.04", notesSi:"Activated Carbon කර්මාන්තශාලාව සඳහා.", notesEn:"For activated carbon plant. Unburned only.", contactName:"චින්තක ප්‍රනාන්දු", phone:"072-4019283" },
  { id:"l10", category:"shell", role:"supplier", district:"Gampaha", townSi:"මීගමුව", townEn:"Negombo", qtySi:"පොල් කටු kg 8,000", qtyEn:"8,000 kg Coconut Shells", date:"2026.09.02", notesSi:"DC කර්මාන්තශාලාවෙන්. වහාම ලබාගත හැක.", notesEn:"Clean halves from DC plant. Immediate pickup.", contactName:"රුවන් දිසානායක", phone:"071-6672390" }
];

// Payment method display names
const paymentMethodNames = {
  ez_cash: "Dialog eZ Cash",
  mcash: "Mobitel mCash",
  visa_master: "Visa / Mastercard",
  lankapay: "LankaPay QR",
  sampath_vishwa: "Sampath Vishwa",
  frimi: "FriMi / HNB"
};

// =============================================================================
// 3. Application State
// =============================================================================
let currentLang = 'si';
let activeTab = 'tab-prices';
let selectedCommodityKey = 'coconut';
let millCategoryFilter = 'all';
let millDistrictFilter = 'all';
let millSearchQuery = '';
let marketCategoryFilter = 'coconut';
let marketRoleFilter = 'all';
const unlockedLeads = new Set(['l3']);
let currentPendingLeadId = null;
let autoUpdateTimer = null;
let countdownSeconds = 300; // 5 minute auto-update cycle

// =============================================================================
// 4. Initialization
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
  setCurrentDate();
  initParticles();
  initLanguageToggle();
  initNavigation();
  renderTickerTrack();
  renderCommodityCards();
  renderGovStats();
  initChartControls();
  renderTrendChart(selectedCommodityKey);
  initMillsDirectory();
  renderMillsList();
  initMarketplace();
  renderMarketList();
  initModals();
  initPaymentCards();
  initAutoUpdateEngine();
  applyLanguage(currentLang);
});

function setCurrentDate() {
  const now = new Date();
  const dateStr = `${now.getFullYear()}.${String(now.getMonth()+1).padStart(2,'0')}.${String(now.getDate()).padStart(2,'0')}`;
  const dateEl = document.getElementById('currentDateBadge');
  if (dateEl) dateEl.textContent = dateStr;
  const timeEl = document.getElementById('lastUpdatedTime');
  if (timeEl) timeEl.textContent = now.toLocaleTimeString('en-LK', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

// =============================================================================
// 5. Particle Background Animation
// =============================================================================
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h;
  const particles = [];
  const PARTICLE_COUNT = 40;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.4 + 0.1
    });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(197, 137, 64, ${p.alpha})`;
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > w) p.dx *= -1;
      if (p.y < 0 || p.y > h) p.dy *= -1;
    });
    // Draw subtle connecting lines between nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
        if (dist < 120) {
          ctx.strokeStyle = `rgba(197, 137, 64, ${0.05 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// =============================================================================
// 6. Language Switching
// =============================================================================
function initLanguageToggle() {
  const btn = document.getElementById('langToggleBtn');
  btn.addEventListener('click', () => {
    currentLang = currentLang === 'si' ? 'en' : 'si';
    btn.querySelector('.lang-si').classList.toggle('active', currentLang === 'si');
    btn.querySelector('.lang-en').classList.toggle('active', currentLang === 'en');
    document.documentElement.lang = currentLang === 'si' ? 'si' : 'en';
    applyLanguage(currentLang);
  });
}

function applyLanguage(lang) {
  const dict = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) el.placeholder = dict[key];
  });
  renderTickerTrack();
  renderCommodityCards();
  renderGovStats();
  updateChartCommodityOptions();
  renderTrendChart(selectedCommodityKey);
  renderMillsList();
  renderMarketList();
}

// =============================================================================
// 7. Navigation
// =============================================================================
function initNavigation() {
  document.querySelectorAll('.bottom-nav .nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-view').forEach(v => v.classList.remove('active'));
      btn.classList.add('active');
      const view = document.getElementById(target);
      if (view) { view.classList.add('active'); activeTab = target; }
    });
  });

  document.getElementById('refreshPricesBtn')?.addEventListener('click', () => {
    simulateAutoUpdate();
  });
}

// =============================================================================
// 8. Price Ticker
// =============================================================================
function renderTickerTrack() {
  const track = document.getElementById('tickerTrack');
  if (!track) return;
  const items = Object.values(commoditiesData);
  let html = '';
  for (let c = 0; c < 2; c++) {
    items.forEach(comm => {
      const name = currentLang === 'si' ? comm.nameSi : comm.nameEn.split(' ')[0];
      const cls = comm.isUp ? 'up' : 'down';
      const arrow = comm.isUp ? '▲' : '▼';
      const sign = comm.isUp ? '+' : '';
      const price = comm.price >= 1000 ? `Rs.${comm.price.toLocaleString()}` : `Rs.${comm.price.toFixed(0)}`;
      html += `<div class="ticker-item"><span>${comm.icon}</span><span class="ticker-name">${name}:</span><span class="ticker-price">${price}</span><span class="ticker-change ${cls}">${arrow} ${sign}${comm.changePct}%</span><span class="ticker-divider">•</span></div>`;
    });
  }
  track.innerHTML = html;
}

// =============================================================================
// 9. Commodity Cards with Sparklines
// =============================================================================
function renderCommodityCards() {
  const container = document.getElementById('commodityCardsContainer');
  if (!container) return;

  container.innerHTML = Object.values(commoditiesData).map(c => {
    const trendClass = c.isUp ? 'trend-up' : 'trend-down';
    const badgeClass = c.isUp ? 'up' : 'down';
    const arrow = c.isUp ? '▲' : '▼';
    const sign = c.isUp ? '+' : '';
    const name = currentLang === 'si' ? c.nameSi : c.nameEn;
    const unit = currentLang === 'si' ? c.unitSi : c.unitEn;
    const price = `රු. ${c.price.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;

    // Generate sparkline SVG path
    const sparkline = generateSparklineSVG(c.history, c.isUp);

    return `
      <div class="commodity-card ${trendClass}" onclick="selectCommodityForChart('${c.id}')">
        <div class="comm-main-info">
          <div class="comm-icon-box ${c.bgClass}">${c.icon}</div>
          <div class="comm-title-box">
            <h3>${name}</h3>
            <div class="comm-unit">${unit}</div>
          </div>
        </div>
        <div class="comm-sparkline-box">${sparkline}</div>
        <div class="comm-price-box">
          <div class="comm-price-val">${price}</div>
          <div class="comm-change-badge ${badgeClass}"><span>${arrow}</span><span>${sign}${c.changePct}%</span></div>
        </div>
      </div>
    `;
  }).join('');
}

function generateSparklineSVG(data, isUp) {
  const w = 60, h = 28, pad = 2;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const points = data.map((v, i) => {
    const x = pad + (i / (data.length - 1)) * (w - 2 * pad);
    const y = pad + (h - 2 * pad) - ((v - min) / range) * (h - 2 * pad);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  const color = isUp ? '#22C55E' : '#EF4444';
  const fillColor = isUp ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.12)';
  const areaPath = `M ${points[0].split(',')[0]},${h - pad} L ${points.join(' L ')} L ${points[points.length-1].split(',')[0]},${h - pad} Z`;
  return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none"><path d="${areaPath}" fill="${fillColor}" /><polyline points="${points.join(' ')}" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

window.selectCommodityForChart = function(commId) {
  selectedCommodityKey = commId;
  const select = document.getElementById('chartCommoditySelect');
  if (select) select.value = commId;
  renderTrendChart(commId);
  document.querySelector('.chart-card')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

// =============================================================================
// 10. Government Stats Panel
// =============================================================================
function renderGovStats() {
  const grid = document.getElementById('govStatsGrid');
  if (!grid) return;
  const d = i18n[currentLang];
  grid.innerHTML = `
    <div class="gov-stat-card"><span class="gov-stat-value">267</span><span class="gov-stat-label">${d.govTotalProduction}</span><span class="gov-stat-trend up">▲ 3.2%</span></div>
    <div class="gov-stat-card"><span class="gov-stat-value">රු.115</span><span class="gov-stat-label">${d.govAvgPrice}</span><span class="gov-stat-trend up">▲ 4.5%</span></div>
    <div class="gov-stat-card"><span class="gov-stat-value">8,420</span><span class="gov-stat-label">${d.govExportVolume} (${d.metricTons})</span><span class="gov-stat-trend down">▼ 1.1%</span></div>
    <div class="gov-stat-card"><span class="gov-stat-value">142.6</span><span class="gov-stat-label">${d.govMarketIndex}</span><span class="gov-stat-trend up">▲ 2.8%</span></div>
    <div class="gov-stat-card"><span class="gov-stat-value">91%</span><span class="gov-stat-label">${d.govDemand}</span><span class="gov-stat-trend up">▲ 1.4%</span></div>
    <div class="gov-stat-card"><span class="gov-stat-value">87%</span><span class="gov-stat-label">${d.govSupply}</span><span class="gov-stat-trend down">▼ 0.6%</span></div>
  `;
}

// =============================================================================
// 11. Trend Chart
// =============================================================================
function initChartControls() {
  updateChartCommodityOptions();
  document.getElementById('chartCommoditySelect')?.addEventListener('change', e => {
    selectedCommodityKey = e.target.value;
    renderTrendChart(selectedCommodityKey);
  });
}

function updateChartCommodityOptions() {
  const select = document.getElementById('chartCommoditySelect');
  if (!select) return;
  select.innerHTML = Object.values(commoditiesData).map(c => {
    const label = currentLang === 'si' ? c.nameSi : c.nameEn;
    return `<option value="${c.id}" ${c.id === selectedCommodityKey ? 'selected' : ''}>${c.icon} ${label}</option>`;
  }).join('');
}

function renderTrendChart(commKey) {
  const commodity = commoditiesData[commKey];
  const svg = document.getElementById('trendSvgChart');
  const summary = document.getElementById('chartSummaryStrip');
  const tooltip = document.getElementById('chartTooltip');
  if (!svg || !commodity) return;

  const data = commodity.history;
  const minVal = Math.min(...data) * 0.96;
  const maxVal = Math.max(...data) * 1.04;
  const range = maxVal - minVal;
  const W = 460, H = 210, pL = 45, pR = 20, pT = 25, pB = 35;
  const plotW = W - pL - pR, plotH = H - pT - pB;

  const points = data.map((val, i) => ({
    x: pL + (i / (data.length - 1)) * plotW,
    y: pT + plotH - ((val - minVal) / range) * plotH,
    val, week: `W${i+1}`, fullWeek: currentLang === 'si' ? `සතිය ${i+1}` : `Week ${i+1}`
  }));

  const polyStr = points.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
  const areaStr = `M ${points[0].x.toFixed(1)},${pT+plotH} ` + points.map(p => `L ${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ') + ` L ${points[points.length-1].x.toFixed(1)},${pT+plotH} Z`;
  const govY = pT + plotH - ((commodity.govRef - minVal) / range) * plotH;

  let grid = '';
  for (let i = 0; i <= 4; i++) {
    const yVal = minVal + (range / 4) * i;
    const yPos = pT + plotH - (i / 4) * plotH;
    grid += `<line x1="${pL}" y1="${yPos}" x2="${W-pR}" y2="${yPos}" stroke="#E8DFD3" stroke-width="1" stroke-dasharray="3,3"/>`;
    grid += `<text x="${pL-6}" y="${yPos+3.5}" fill="#8E7C72" font-size="9" text-anchor="end" font-family="'Plus Jakarta Sans',sans-serif">${yVal>=1000?Math.round(yVal/1000)+'k':Math.round(yVal)}</text>`;
  }

  let xLabels = points.map(p => `<text x="${p.x}" y="${H-12}" fill="#65544B" font-size="9.5" font-weight="600" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif">${p.week}</text>`).join('');

  let dots = points.map((p,i) => `<circle cx="${p.x}" cy="${p.y}" r="4.5" fill="#236B34" stroke="#FFF" stroke-width="2" class="chart-point"/><circle cx="${p.x}" cy="${p.y}" r="14" fill="transparent" class="chart-hit-area" data-idx="${i}" style="cursor:pointer;"/>`).join('');

  svg.innerHTML = `
    <defs><linearGradient id="cg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#236B34" stop-opacity="0.32"/><stop offset="100%" stop-color="#236B34" stop-opacity="0.0"/></linearGradient></defs>
    ${grid}
    <line x1="${pL}" y1="${govY}" x2="${W-pR}" y2="${govY}" stroke="#C58940" stroke-width="1.5" stroke-dasharray="4,4"/>
    <path d="${areaStr}" fill="url(#cg)"/>
    <polyline points="${polyStr}" fill="none" stroke="#236B34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    ${dots}
    ${xLabels}
  `;

  svg.querySelectorAll('.chart-hit-area').forEach(area => {
    const showTip = (e) => {
      const idx = e.target.getAttribute('data-idx');
      const pt = points[idx];
      const svgRect = svg.getBoundingClientRect();
      const sx = svgRect.width / W, sy = svgRect.height / H;
      tooltip.style.display = 'block';
      tooltip.style.left = `${pt.x * sx}px`;
      tooltip.style.top = `${pt.y * sy}px`;
      tooltip.innerHTML = `<div>${pt.fullWeek}</div><div style="color:#A3E635;font-size:0.85rem;">රු. ${pt.val.toLocaleString()}</div>`;
    };
    area.addEventListener('mouseenter', showTip);
    area.addEventListener('click', showTip);
    area.addEventListener('mouseleave', () => { tooltip.style.display = 'none'; });
  });

  if (summary) {
    const d = i18n[currentLang];
    const latest = data[data.length-1], high = Math.max(...data), low = Math.min(...data);
    summary.innerHTML = `
      <div><span class="stat-label">${d.currAvg}:</span> <span class="stat-value">රු. ${latest.toLocaleString()}</span></div>
      <div><span class="stat-label">${d.highPrice}:</span> <span class="stat-value" style="color:var(--gain-green);">රු. ${high.toLocaleString()}</span></div>
      <div><span class="stat-label">${d.lowPrice}:</span> <span class="stat-value" style="color:var(--loss-red);">රු. ${low.toLocaleString()}</span></div>
    `;
  }
}

// =============================================================================
// 12. Mills Directory
// =============================================================================
function initMillsDirectory() {
  document.querySelectorAll('#millCategoryPills .pill-btn').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('#millCategoryPills .pill-btn').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      millCategoryFilter = pill.getAttribute('data-category');
      renderMillsList();
    });
  });
  document.getElementById('millDistrictSelect')?.addEventListener('change', e => { millDistrictFilter = e.target.value; renderMillsList(); });
  document.getElementById('millSearchInput')?.addEventListener('input', e => { millSearchQuery = e.target.value.toLowerCase().trim(); renderMillsList(); });
}

function renderMillsList() {
  const container = document.getElementById('millsListContainer');
  const countBadge = document.getElementById('millsCountBadge');
  if (!container) return;

  let filtered = millsData.filter(m => {
    return (millCategoryFilter === 'all' || m.category === millCategoryFilter) &&
           (millDistrictFilter === 'all' || m.district === millDistrictFilter) &&
           (!millSearchQuery || m.nameSi.toLowerCase().includes(millSearchQuery) || m.nameEn.toLowerCase().includes(millSearchQuery) || m.townEn.toLowerCase().includes(millSearchQuery) || m.district.toLowerCase().includes(millSearchQuery));
  });
  filtered.sort((a, b) => (b.isVerified ? 1 : 0) - (a.isVerified ? 1 : 0));

  if (countBadge) countBadge.textContent = `${filtered.length} ${i18n[currentLang].millsCountSuffix}`;

  if (!filtered.length) {
    container.innerHTML = `<div style="text-align:center;padding:40px 20px;color:var(--text-muted);"><div style="font-size:2.2rem;margin-bottom:8px;">🏭</div><div style="font-weight:700;">${currentLang==='si'?'කිසිදු මෝලක් හමු නොවීය':'No mills found'}</div></div>`;
    return;
  }

  container.innerHTML = filtered.map(m => {
    const name = currentLang==='si'?m.nameSi:m.nameEn;
    const town = currentLang==='si'?m.townSi:m.townEn;
    const cap = currentLang==='si'?m.capacitySi:m.capacityEn;
    const catLabel = m.category==='coconut'?(currentLang==='si'?'පොල් මෝල':'Coconut Mill'):m.category==='oil'?(currentLang==='si'?'තෙල් මෝල':'Oil Mill'):(currentLang==='si'?'කොහු මෝල':'Coir Mill');
    const badge = m.isVerified ? `<span class="badge-verified">${i18n[currentLang].verifiedBadge}</span>` : `<span class="badge-unverified">${i18n[currentLang].unverifiedBadge}</span>`;

    return `<div class="mill-card ${m.isVerified?'is-verified':'is-unverified'}">
      <div class="mill-header"><h3 class="mill-name">${name}</h3>${badge}</div>
      <div class="mill-tags-row"><span class="tag-district">📍 ${town} (${m.district})</span><span class="tag-type">${catLabel}</span><span class="tag-capacity">⚡ ${cap}</span></div>
      <div class="mill-footer"><span class="mill-phone-display">📞 ${m.phone}</span><a href="tel:${m.phone}" class="mill-call-btn"><span>📞</span><span>${i18n[currentLang].callBtn}</span></a></div>
    </div>`;
  }).join('');
}

// =============================================================================
// 13. Marketplace
// =============================================================================
function initMarketplace() {
  document.querySelectorAll('#marketCategoryTabs .m-cat-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#marketCategoryTabs .m-cat-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      marketCategoryFilter = btn.getAttribute('data-market-cat');
      renderMarketList();
    });
  });
  document.querySelectorAll('#tradeTypeFilters .trade-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#tradeTypeFilters .trade-toggle-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      marketRoleFilter = btn.getAttribute('data-type');
      renderMarketList();
    });
  });
}

function renderMarketList() {
  const container = document.getElementById('marketListContainer');
  const countBadge = document.getElementById('marketCountBadge');
  if (!container) return;

  const filtered = marketData.filter(item => item.category === marketCategoryFilter && (marketRoleFilter === 'all' || item.role === marketRoleFilter));
  if (countBadge) countBadge.textContent = `${filtered.length} ${i18n[currentLang].marketCountSuffix}`;

  if (!filtered.length) {
    container.innerHTML = `<div style="text-align:center;padding:40px 20px;color:var(--text-muted);"><div style="font-size:2.2rem;margin-bottom:8px;">🥥</div><div style="font-weight:700;">${currentLang==='si'?'මෙම කාණ්ඩය සඳහා දැන්වීම් නොමැත':'No listings in this category'}</div></div>`;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const roleText = item.role==='buyer'?i18n[currentLang].tradeBuyerShort:i18n[currentLang].tradeSupplierShort;
    const roleClass = item.role;
    const town = currentLang==='si'?item.townSi:item.townEn;
    const qty = currentLang==='si'?item.qtySi:item.qtyEn;
    const notes = currentLang==='si'?item.notesSi:item.notesEn;
    const isUnlocked = unlockedLeads.has(item.id);

    const contactHtml = isUnlocked
      ? `<div class="contact-unlocked-box"><div class="unlocked-details"><span class="unlocked-name">👤 ${item.contactName}</span><span class="unlocked-phone">📞 ${item.phone}</span></div><div class="unlocked-actions"><a href="tel:${item.phone}" class="btn-contact-action">📞</a><a href="https://wa.me/${item.phone.replace(/[^0-9]/g,'')}" target="_blank" class="btn-contact-action wa">💬</a></div></div>`
      : `<div class="contact-lock-box"><div class="contact-masked-info"><span class="masked-name">•••••••• ••••••••</span><span class="masked-phone">07X ••• ••••</span></div><button class="btn-unlock-lead" onclick="openUnlockModal('${item.id}')"><span>🔓</span><span>${i18n[currentLang].unlockBtnShort}</span></button></div>`;

    return `<div class="market-card">
      <div class="market-card-top"><span class="trade-badge ${roleClass}">${roleText}</span><span class="post-date">📅 ${item.date}</span></div>
      <div class="listing-main"><h3 class="listing-qty-title">${qty}</h3><div class="listing-meta-row"><span class="listing-district">📍 ${town} (${item.district})</span></div><div class="listing-notes">${notes}</div></div>
      ${contactHtml}
    </div>`;
  }).join('');
}

// =============================================================================
// 14. Payment Cards & Modal System
// =============================================================================
function initPaymentCards() {
  document.querySelectorAll('.pay-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.pay-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      card.querySelector('input[type="radio"]').checked = true;
    });
  });
}

window.openUnlockModal = function(leadId) {
  const lead = marketData.find(l => l.id === leadId);
  if (!lead) return;
  currentPendingLeadId = leadId;
  const summaryBox = document.getElementById('unlockListingSummary');
  if (summaryBox) {
    const qty = currentLang==='si'?lead.qtySi:lead.qtyEn;
    const town = currentLang==='si'?lead.townSi:lead.townEn;
    const roleText = lead.role==='buyer'?i18n[currentLang].tradeBuyerShort:i18n[currentLang].tradeSupplierShort;
    summaryBox.innerHTML = `<div style="font-weight:700;color:var(--husk-dark);">${qty}</div><div style="color:var(--text-secondary);margin-top:2px;">${roleText} • 📍 ${town} (${lead.district})</div>`;
  }
  document.getElementById('unlockModal')?.classList.remove('hidden');
};

function initModals() {
  const unlockModal = document.getElementById('unlockModal');
  const processingModal = document.getElementById('paymentProcessingModal');
  const successModal = document.getElementById('unlockedSuccessModal');
  const postModal = document.getElementById('postListingModal');

  document.getElementById('closeUnlockModal')?.addEventListener('click', () => unlockModal.classList.add('hidden'));
  document.getElementById('cancelUnlockBtn')?.addEventListener('click', () => unlockModal.classList.add('hidden'));
  document.getElementById('closeSuccessModal')?.addEventListener('click', () => successModal.classList.add('hidden'));
  document.getElementById('finishSuccessBtn')?.addEventListener('click', () => successModal.classList.add('hidden'));
  document.getElementById('closePostModal')?.addEventListener('click', () => postModal.classList.add('hidden'));

  // Confirm Unlock with animated processing flow
  document.getElementById('confirmUnlockBtn')?.addEventListener('click', () => {
    if (!currentPendingLeadId) return;

    const selectedMethod = document.querySelector('input[name="payMethod"]:checked')?.value || 'ez_cash';
    unlockModal.classList.add('hidden');
    processingModal.classList.remove('hidden');

    // Animate processing steps
    const steps = [
      document.getElementById('procStep1'),
      document.getElementById('procStep2'),
      document.getElementById('procStep3')
    ];

    steps.forEach(s => { s.classList.remove('active', 'done'); s.querySelector('.proc-check').textContent = '⏳'; });
    steps[0].classList.add('active');

    setTimeout(() => {
      steps[0].classList.remove('active'); steps[0].classList.add('done'); steps[0].querySelector('.proc-check').textContent = '✅';
      steps[1].classList.add('active');
    }, 1200);

    setTimeout(() => {
      steps[1].classList.remove('active'); steps[1].classList.add('done'); steps[1].querySelector('.proc-check').textContent = '✅';
      steps[2].classList.add('active');
    }, 2400);

    setTimeout(() => {
      steps[2].classList.remove('active'); steps[2].classList.add('done'); steps[2].querySelector('.proc-check').textContent = '✅';

      setTimeout(() => {
        processingModal.classList.add('hidden');
        unlockedLeads.add(currentPendingLeadId);
        const targetLead = marketData.find(l => l.id === currentPendingLeadId);

        // Populate success modal
        const revealCard = document.getElementById('revealedContactCard');
        if (revealCard && targetLead) {
          revealCard.innerHTML = `
            <div style="font-size:1.15rem;font-weight:800;color:var(--husk-dark);margin-bottom:4px;">${targetLead.contactName}</div>
            <div style="font-family:'Plus Jakarta Sans',monospace;font-size:1.25rem;font-weight:800;color:var(--palm-green);margin-bottom:12px;">${targetLead.phone}</div>
            <div style="display:flex;gap:8px;justify-content:center;">
              <a href="tel:${targetLead.phone}" class="mill-call-btn" style="padding:8px 16px;"><span>📞</span> ${i18n[currentLang].callBtn}</a>
              <a href="https://wa.me/${targetLead.phone.replace(/[^0-9]/g,'')}" target="_blank" class="mill-call-btn" style="background:#25D366;border-color:#25D366;color:#fff;padding:8px 16px;"><span>💬</span> WhatsApp</a>
            </div>
          `;
        }

        // Transaction receipt
        const txId = `CTY-${Date.now().toString(36).toUpperCase()}`;
        const receiptTxEl = document.getElementById('receiptTxId');
        const receiptMethodEl = document.getElementById('receiptMethod');
        if (receiptTxEl) receiptTxEl.textContent = txId;
        if (receiptMethodEl) receiptMethodEl.textContent = paymentMethodNames[selectedMethod] || selectedMethod;

        successModal.classList.remove('hidden');
        renderMarketList();
        showToast(i18n[currentLang].toastUnlockSuccess);
      }, 600);
    }, 3600);
  });

  // Post Listing
  document.getElementById('postListingBtn')?.addEventListener('click', () => postModal.classList.remove('hidden'));

  document.getElementById('submitListingBtn')?.addEventListener('click', () => {
    const form = document.getElementById('newListingForm');
    const role = form.querySelector('input[name="listingRole"]:checked')?.value || 'buyer';
    const category = document.getElementById('formCommoditySelect').value;
    const district = document.getElementById('formDistrictSelect').value;
    const qty = document.getElementById('formQtyInput').value.trim();
    const phone = document.getElementById('formPhoneInput').value.trim();
    const notes = document.getElementById('formNotesInput').value.trim();

    if (!qty || !phone) { alert(currentLang==='si'?'ප්‍රමාණය සහ දුරකථන අංකය ඇතුළත් කරන්න.':'Please enter quantity and phone number.'); return; }

    const newId = `l-${Date.now()}`;
    unlockedLeads.add(newId);
    marketData.unshift({ id: newId, category, role, district, townSi: district, townEn: district, qtySi: qty, qtyEn: qty, date: "2026.09.04", notesSi: notes || "නව දැන්වීම.", notesEn: notes || "New listing.", contactName: "ඔබ (You)", phone });
    postModal.classList.add('hidden');
    form.reset();
    marketCategoryFilter = category;
    document.querySelectorAll('#marketCategoryTabs .m-cat-tab').forEach(b => { b.classList.toggle('active', b.getAttribute('data-market-cat') === category); });
    renderMarketList();
    showToast(i18n[currentLang].toastListingSuccess);
  });
}

// =============================================================================
// 15. Auto-Update Engine (Simulated CDA Government Market Sync)
// =============================================================================
function initAutoUpdateEngine() {
  countdownSeconds = 300;
  updateCountdownDisplay();

  // Countdown timer
  setInterval(() => {
    countdownSeconds--;
    if (countdownSeconds <= 0) {
      countdownSeconds = 300;
      simulateAutoUpdate();
    }
    updateCountdownDisplay();
  }, 1000);
}

function updateCountdownDisplay() {
  const timerEl = document.getElementById('timerCountdown');
  if (timerEl) {
    const m = Math.floor(countdownSeconds / 60);
    const s = countdownSeconds % 60;
    timerEl.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  }
}

function simulateAutoUpdate() {
  // Simulate price fluctuations (realistic small changes ±0.5% to ±3%)
  Object.values(commoditiesData).forEach(c => {
    const fluctuation = (Math.random() - 0.48) * 0.03; // Slight upward bias like real markets
    const newPrice = Math.round(c.price * (1 + fluctuation) * 100) / 100;
    const oldPrice = c.price;
    c.price = newPrice;
    c.changePct = Math.round(((newPrice - c.history[c.history.length - 2]) / c.history[c.history.length - 2]) * 1000) / 10;
    c.isUp = c.changePct >= 0;
    c.history[c.history.length - 1] = Math.round(newPrice);
  });

  // Update time
  const now = new Date();
  const timeEl = document.getElementById('lastUpdatedTime');
  if (timeEl) timeEl.textContent = now.toLocaleTimeString('en-LK', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  // Flash update banner
  const banner = document.getElementById('updateNotificationBanner');
  const bannerText = document.getElementById('updateBannerText');
  if (banner && bannerText) {
    bannerText.textContent = i18n[currentLang].updateBannerText;
    banner.classList.remove('hidden');
    setTimeout(() => banner.classList.add('hidden'), 3500);
  }

  // Shimmer animation on cards
  document.querySelectorAll('.commodity-card').forEach(card => {
    card.classList.add('updating');
    setTimeout(() => card.classList.remove('updating'), 800);
  });

  // Re-render everything
  renderTickerTrack();
  renderCommodityCards();
  renderGovStats();
  renderTrendChart(selectedCommodityKey);

  countdownSeconds = 300;
  showToast(i18n[currentLang].toastRefreshed);
}

// =============================================================================
// 16. Toast Helper
// =============================================================================
function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const msg = document.getElementById('toastMessage');
  if (!toast || !msg) return;
  msg.textContent = message;
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 3000);
}
