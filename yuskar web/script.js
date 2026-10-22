const DEFAULT_DATA = {
  contact: { email: 'yuskarshop@gmail.com', whatsapp: '250781652135', phone: '+250 795 153 994' },
  home: {
    heroImage: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=2000&q=85',
    eyebrow: 'One empire. Many possibilities.',
    title: 'Move with intention.',
    copy: 'Yuskar Empire brings together the things that shape how we move, live, build and express ourselves.'
  },
  motorInventory: [
    { id: 'yk-gle-450', mode: 'buy', name: 'Mercedes-Benz GLE 450', year: '2023', price: 118000000, image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1000&q=85', specs: ['Automatic', '42,000 km', 'SUV'], featured: true },
    { id: 'yk-range-rover', mode: 'buy', name: 'Range Rover Sport', year: '2022', price: 145000000, image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1000&q=85', specs: ['Automatic', '31,500 km', 'SUV'], featured: false },
    { id: 'yk-toyota-camry', mode: 'buy', name: 'Toyota Camry XSE', year: '2021', price: 42000000, image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1000&q=85', specs: ['Automatic', '28,200 km', 'Saloon'], featured: false },
    { id: 'yk-lexus-rx', mode: 'rent', name: 'Lexus RX 350', year: '2023', price: 180000, image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1000&q=85', specs: ['Per day', '5 seats', 'SUV'], featured: true },
    { id: 'yk-mercedes-c', mode: 'rent', name: 'Mercedes-Benz C-Class', year: '2022', price: 150000, image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=85', specs: ['Per day', '5 seats', 'Saloon'], featured: false },
    { id: 'yk-toyota-hiace', mode: 'rent', name: 'Toyota Hiace Bus', year: '2022', price: 220000, image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1000&q=85', specs: ['Per day', '14 seats', 'Van'], featured: false },
    { id: 'yk-suv-wanted', mode: 'sell', name: 'Premium SUVs wanted', year: '2019+', price: 0, image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1000&q=85', specs: ['Verified papers', 'Clean history', 'Lagos'], featured: true },
    { id: 'yk-saloon-wanted', mode: 'sell', name: 'Executive saloons wanted', year: '2019+', price: 0, image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=85', specs: ['Low mileage', 'Full service', 'Nigeria'], featured: false }
  ],
  fashionInventory: [
    { id: 'yk-linen-set', category: 'clothes', name: 'Linen co-ord set', price: 85000, image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85', description: 'Breathable tailoring for slow afternoons and late dinners.', featured: true },
    { id: 'yk-silk-dress', category: 'clothes', name: 'Silk column dress', price: 125000, image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85', description: 'A clean silhouette with a little drama.', featured: false },
    { id: 'yk-leather-loafers', category: 'shoes', name: 'Leather loafers', price: 78000, image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=900&q=85', description: 'Polished, comfortable and made for repeat wear.', featured: true },
    { id: 'yk-strappy-heels', category: 'shoes', name: 'Strappy evening heels', price: 92000, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85', description: 'The finishing lift for nights that run late.', featured: false },
    { id: 'yk-gold-hoops', category: 'jewels', name: 'Sculpted gold hoops', price: 65000, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85', description: 'A quiet statement in warm polished gold.', featured: true },
    { id: 'yk-pearl-chain', category: 'jewels', name: 'Pearl chain necklace', price: 110000, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=85', description: 'Classic pearls with a modern, easy line.', featured: false },
    { id: 'yk-glow-set', category: 'beauty', name: 'Everyday glow set', price: 42000, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85', description: 'A simple ritual for hydrated, luminous skin.', featured: true },
    { id: 'yk-scent-no-04', category: 'beauty', name: 'Scent No. 04', price: 68000, image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=85', description: 'Soft woods, spice and a trace of something sweet.', featured: false }
  ],
  departments: {
    motors: {
      name: 'Motors', image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=2000&q=85',
      items: [{ name: 'Vehicle purchase', description: 'Quality vehicles selected for the journeys ahead.', price: 0 }, { name: 'Vehicle sale', description: 'A trusted route to the right buyer for your car.', price: 0 }, { name: 'Vehicle rental', description: 'Flexible access for a day, a weekend or longer.', price: 0 }]
    },
    buildings: {
      name: 'Buildings', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=85',
      items: [
        { name: 'Building document search', description: 'Finding the right approvals, land records, permits and project documents before you build.', price: 0, image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=85' },
        { name: 'Architectural drawing', description: 'Concept drawings, working plans and design layout for homes, offices and mixed-use spaces.', price: 0, image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=85' },
        { name: 'Planning & feasibility', description: 'Space planning, layout decisions and a realistic review of what works on your site.', price: 0, image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1000&q=85' },
        { name: 'Interior planning', description: 'Room arrangement, material guidance and functional design ideas for a complete interior.', price: 0, image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85' },
        { name: 'Renovation guidance', description: 'Updates, extension planning and redesign support for existing properties.', price: 0, image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1000&q=85' },
        { name: 'Build consultation', description: 'Budget, contractor guidance and practical decisions for a smoother construction process.', price: 0, image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=85' }
      ]
    },
    plots: {
      name: 'Plots', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=85',
      items: [{ name: 'Lekki residential plot', description: 'A serviced opportunity for a home, with access and title support available.', price: 38000000, priceUsd: 27143 }, { name: 'Ogun farmland', description: 'Open acreage for farming, retreat or a long-term land investment.', price: 12500000, priceUsd: 8929 }, { name: 'Abuja commercial site', description: 'A visible plot for a workspace, retail concept or mixed-use development.', price: 65000000, priceUsd: 46429 }, { name: 'Title verification', description: 'Independent checks and clear guidance before you commit to a land purchase.', price: 150000, priceUsd: 107 }]
    },
    fashion: {
      name: 'Fashion', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=2000&q=85',
      items: [{ name: 'Womenswear', description: 'Soft power, from everyday essentials to statement pieces.', price: 0 }, { name: 'Menswear', description: 'Quiet confidence in every cut and texture.', price: 0 }, { name: 'Accessories', description: 'The finishing touch for every expression.', price: 0 }, { name: 'Kidswear', description: 'Small, but mighty pieces for growing personalities.', price: 0 }]
    }
  }
};

const DATA_KEY = 'yuskarSiteData';
const CART_KEY = 'yuskarCart';
const CUSTOMER_KEY = 'yuskarCustomer';
const ORDERS_KEY = 'yuskarOrders';
const CHAT_KEY = 'yuskarChat';
const BUSINESS_WHATSAPP = '250781652135';
const ADMIN_SESSION_KEY = 'yuskarAdminSession';
const ADMIN_CREDENTIAL_HASH = 'd1ae9b49e5536d137154b0f509e3c92f11da44854a916a4d6146ef2ca9a945f4';

function clone(value) { return JSON.parse(JSON.stringify(value)); }
function normalizeGallery(item) {
  const gallery = [];
  if (Array.isArray(item.gallery)) gallery.push(...item.gallery.filter(Boolean));
  if (Array.isArray(item.images)) gallery.push(...item.images.filter(Boolean));
  if (item.image) gallery.unshift(item.image);
  return [...new Set(gallery.filter(Boolean))];
}
function hydrateItem(item) {
  item.priceRwf = Number(item.priceRwf ?? item.price ?? 0);
  item.price = item.priceRwf;
  item.priceUsd = Number(item.priceUsd) || (item.priceRwf ? Math.round(item.priceRwf / 1400) : 0);
  item.oldPriceRwf = Number(item.oldPriceRwf ?? 0);
  item.oldPriceUsd = Number(item.oldPriceUsd ?? 0);
  item.discount = Number(item.discount ?? 0);
  item.gallery = normalizeGallery(item);
  item.image = item.gallery[0] || item.image || '';
  return item;
}
function hydrateData(data) {
  data.contact = { ...DEFAULT_DATA.contact, ...(data.contact || {}) };
  data.motorInventory = (data.motorInventory || []).map((item, index) => hydrateItem({ id: item.id || `motor-${index}`, ...item }));
  data.fashionInventory = (data.fashionInventory || []).map((item, index) => hydrateItem({ id: item.id || `fashion-${index}`, ...item }));
  const storedBuildings = data.departments?.buildings || {};
  const hasLegacyBuildings = Array.isArray(storedBuildings.items) && storedBuildings.items.some((item) => item.name === 'Architecture design' || item.name === 'Interior design' || item.name === 'Build consulting' || item.name === 'Site assessment');
  if (hasLegacyBuildings || !Array.isArray(storedBuildings.items) || storedBuildings.items.length === 0) {
    data.departments = { ...data.departments, buildings: { ...clone(DEFAULT_DATA.departments.buildings), ...storedBuildings, items: clone(DEFAULT_DATA.departments.buildings.items) } };
  }
  Object.entries(data.departments || {}).forEach(([key, department]) => { department.items = (department.items || []).map((item, index) => hydrateItem({ id: item.id || `${key}-${index}`, ...item })); });
  return data;
}
function loadData() {
  try { return hydrateData({ ...clone(DEFAULT_DATA), ...JSON.parse(localStorage.getItem(DATA_KEY) || '{}') }); } catch { return hydrateData(clone(DEFAULT_DATA)); }
}
function saveData(data) { localStorage.setItem(DATA_KEY, JSON.stringify(data)); }
function loadList(key) { try { return JSON.parse(localStorage.getItem(key) || '[]'); } catch { return []; } }
function saveList(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
async function hashAdminCredentials(email, password) { const bytes = new TextEncoder().encode(`${email.trim().toLowerCase()}\u0000${password}`); const digest = await crypto.subtle.digest('SHA-256', bytes); return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join(''); }
function money(value) { return Number(value) > 0 ? `RWF ${Number(value).toLocaleString()}` : 'Price on request'; }
function priceMarkup(item) {
  const rwf = Number(item.priceRwf ?? item.price ?? 0);
  const usd = Number(item.priceUsd ?? 0);
  const oldRwf = Number(item.oldPriceRwf ?? 0);
  const oldUsd = Number(item.oldPriceUsd ?? 0);
  const current = rwf ? `RWF ${rwf.toLocaleString()}` : 'Price on request';
  const currentUsd = usd && rwf ? ` / $${usd.toLocaleString()}` : '';
  const old = oldRwf ? `<del>RWF ${oldRwf.toLocaleString()}${oldUsd && oldRwf ? ` / $${oldUsd.toLocaleString()}` : ''}</del>` : '';
  const discount = Number(item.discount) > 0 ? `<b class="discount-badge">-${Number(item.discount)}%</b>` : '';
  return `<span class="price-current">${current}${currentUsd}</span>${old}${discount}`;
}
function escapeHtml(value) { return String(value ?? '').replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' })[char]); }
function showStatus(message) {
  const status = document.querySelector('#admin-status');
  if (!status) return;
  status.textContent = message;
  status.classList.add('show');
  setTimeout(() => status.classList.remove('show'), 2400);
}

function addBrandLoader() {
  if (document.querySelector('.brand-loader')) return;
  const loader = document.createElement('div');
  loader.className = 'brand-loader';
  loader.setAttribute('aria-live', 'polite');
  loader.innerHTML = '<div class="brand-loader-inner"><img class="brand-loader-logo" src="logo.png" alt="Yuskar Empire logo"><div class="brand-loader-text">Yuskar Empire</div></div>';
  document.body.appendChild(loader);
  const hideLoader = () => {
    loader.classList.add('is-hidden');
    document.body.style.overflow = '';
    setTimeout(() => loader.remove(), 500);
  };
  document.body.style.overflow = 'hidden';
  window.addEventListener('load', () => setTimeout(hideLoader, 700), { once: true });
  setTimeout(hideLoader, 1800);
}

function mountLogo() {
  document.querySelectorAll('.brand').forEach((brand) => {
    if (brand.querySelector('.brand-logo')) return;
    const logo = document.createElement('img');
    logo.className = 'brand-logo'; logo.src = 'logo.png'; logo.alt = 'Yuskar Empire';
    logo.style.width = brand.closest('.site-footer') ? '112px' : '78px';
    logo.style.height = brand.closest('.site-footer') ? '84px' : '58px';
    logo.style.objectFit = 'contain';
    if (brand.closest('.site-footer')) { logo.style.filter = 'invert(1)'; logo.style.mixBlendMode = 'screen'; }
    brand.replaceChildren(logo);
  });
}

function normalizeDepartmentLinks() {
  const routes = { 'motors.html': 'motor-inventory.html', 'buildings.html': 'buildings-services.html', 'plots.html': 'plots-opportunities.html', 'fashion.html': 'fashion-shop.html' };
  document.querySelectorAll('a[href]').forEach((link) => { if (routes[link.getAttribute('href')]) link.href = routes[link.getAttribute('href')]; });
}

function addStylesheet() {
  if (document.querySelector('link[href="enhancements.css"]')) return;
  const link = document.createElement('link'); link.rel = 'stylesheet'; link.href = 'enhancements.css'; document.head.appendChild(link);
}

function addInventoryStylesheet() {
  if (!document.body.classList.contains('motors-inventory-page') || document.querySelector('link[href="inventory.css"]')) return;
  const link = document.createElement('link'); link.rel = 'stylesheet'; link.href = 'inventory.css'; document.head.appendChild(link);
}

function addFashionStylesheet() {
  if (!document.body.classList.contains('fashion-shop-page') || document.querySelector('link[href="fashion-shop.css"]')) return;
  const link = document.createElement('link'); link.rel = 'stylesheet'; link.href = 'fashion-shop.css'; document.head.appendChild(link);
}

function addPropertyStylesheet() {
  if (!document.body.classList.contains('property-page') || document.querySelector('link[href="property.css"]')) return;
  const link = document.createElement('link'); link.rel = 'stylesheet'; link.href = 'property.css'; document.head.appendChild(link);
}

function addCtaStylesheet() {
  if (document.body.classList.contains('admin-body') || document.querySelector('link[href="cta.css"]')) return;
  const link = document.createElement('link'); link.rel = 'stylesheet'; link.href = 'cta.css'; document.head.appendChild(link);
}

function addPricingStylesheet() {
  if (document.querySelector('link[href="pricing.css"]')) return;
  const link = document.createElement('link'); link.rel = 'stylesheet'; link.href = 'pricing.css'; document.head.appendChild(link);
}

function addEditableMediaStylesheet() {
  if (document.querySelector('link[href="editable-media.css"]')) return;
  const link = document.createElement('link'); link.rel = 'stylesheet'; link.href = 'editable-media.css'; document.head.appendChild(link);
}

function addContactStylesheet() {
  if (document.querySelector('link[href="contact.css"]')) return;
  const link = document.createElement('link'); link.rel = 'stylesheet'; link.href = 'contact.css'; document.head.appendChild(link);
}

function addCurrencyCleanupStylesheet() {
  if (document.querySelector('link[href="currency-cleanup.css"]')) return;
  const link = document.createElement('link'); link.rel = 'stylesheet'; link.href = 'currency-cleanup.css'; document.head.appendChild(link);
}

function addLanguageStylesheet() {
  if (document.querySelector('link[href="language.css"]')) return;
  const link = document.createElement('link'); link.rel = 'stylesheet'; link.href = 'language.css'; document.head.appendChild(link);
}

function addAdminAuthStylesheet() {
  if (!document.body.classList.contains('category-admin') || document.querySelector('link[href="admin-auth.css"]')) return;
  const link = document.createElement('link'); link.rel = 'stylesheet'; link.href = 'admin-auth.css'; document.head.appendChild(link);
}

const TRANSLATIONS = {
  rw: { Home: 'Ahabanza', Motors: 'Imodoka', Buildings: 'Inyubako', Plots: 'Ibibanza', Fashion: 'Imyambarire', Account: 'Konti', 'Start a conversation ↗': 'Tangira ikiganiro ↗', 'Work with us ↗': 'Dukorane ↗', 'Choose a department ↗': 'Hitamo ishami ↗', 'All departments': 'Amashami yose', 'Add to order +': 'Ongeraho ku byo wahisemo +', 'Continue with request ↗': 'Komeza usabe ↗', 'Send message ↗': 'Ohereza ubutumwa ↗', 'Chat on site ↗': 'Ganira kuri uru rubuga ↗', 'Email us ↗': 'Twandikire kuri email ↗', 'Call ↗': 'Hamagara ↗' },
  fr: { Home: 'Accueil', Motors: 'Automobiles', Buildings: 'Bâtiments', Plots: 'Terrains', Fashion: 'Mode', Account: 'Compte', 'Start a conversation ↗': 'Démarrer une conversation ↗', 'Work with us ↗': 'Travaillons ensemble ↗', 'Choose a department ↗': 'Choisir un service ↗', 'All departments': 'Tous les services', 'Add to order +': 'Ajouter à la demande +', 'Continue with request ↗': 'Continuer la demande ↗', 'Send message ↗': 'Envoyer le message ↗', 'Chat on site ↗': 'Chat sur le site ↗', 'Email us ↗': 'Nous écrire ↗', 'Call ↗': 'Appeler ↗' }
};

function applyLanguage(language) {
  const dictionary = TRANSLATIONS[language] || {};
  document.querySelectorAll('.main-nav a,.header-cta,.commerce-button,.text-link,.work-with-us-button,.admin-tab,.admin-header>a:last-child,.category-actions button,.property-action,.fashion-add,.vehicle-action,.add-to-cart,.panel-action,.contact-options a,.contact-options button').forEach((element) => {
    const original = element.dataset.languageOriginal || element.textContent.trim(); element.dataset.languageOriginal = original;
    if (dictionary[original]) element.textContent = dictionary[original];
    if (original.startsWith('Order ')) element.textContent = `${language === 'rw' ? 'Ibyo wahisemo' : language === 'fr' ? 'Demande' : 'Order'} ${original.split(' ').pop()}`;
  });
  document.documentElement.lang = language === 'rw' ? 'rw' : language === 'fr' ? 'fr' : 'en';
}

function setupLanguageSelector() {
  addLanguageStylesheet(); const header = document.querySelector('.site-header') || document.querySelector('.admin-header'); if (!header || header.querySelector('.language-switcher')) return;
  const select = document.createElement('select'); select.className = 'language-switcher'; select.setAttribute('aria-label', 'Language'); select.innerHTML = '<option value="en">EN</option><option value="rw">RW</option><option value="fr">FR</option>'; select.value = localStorage.getItem('yuskarLanguage') || 'en'; header.appendChild(select); applyLanguage(select.value); select.addEventListener('change', () => { localStorage.setItem('yuskarLanguage', select.value); applyLanguage(select.value); });
}

function setupAdminAuth() {
  if (!document.body.classList.contains('category-admin')) return;
  const layout = document.querySelector('.admin-layout');
  const openAdminWhatsApp = () => {
    const message = encodeURIComponent('Hello Yuskar Empire, I want to access the admin control room.');
    window.open(`https://wa.me/${BUSINESS_WHATSAPP}?text=${message}`, '_blank', 'noopener,noreferrer');
  };
  const addLockButton = () => {
    const header = document.querySelector('.admin-header');
    if (!header || header.querySelector('.admin-lock')) return;
    const lock = document.createElement('button');
    lock.className = 'admin-lock';
    lock.textContent = 'Open WhatsApp';
    lock.addEventListener('click', () => { openAdminWhatsApp(); });
    header.appendChild(lock);
  };
  if (layout) layout.hidden = false;
  document.querySelector('.admin-auth-backdrop')?.remove();
  sessionStorage.setItem(ADMIN_SESSION_KEY, 'granted');
  addLockButton();
}

function addHeroStylesheet() {
  if (!document.querySelector('.home-hero') || document.querySelector('link[href="hero-slider.css"]')) return;
  const link = document.createElement('link'); link.rel = 'stylesheet'; link.href = 'hero-slider.css'; document.head.appendChild(link);
}

function addDepartmentHeroStylesheet() {
  if (!document.body.classList.contains('department-page') || document.querySelector('link[href="department-hero-links.css"]')) return;
  const link = document.createElement('link'); link.rel = 'stylesheet'; link.href = 'department-hero-links.css'; document.head.appendChild(link);
}

function addDepartmentShowcaseStylesheet() {
  if (!document.body.classList.contains('department-page') || document.querySelector('link[href="department-showcase.css"]')) return;
  const link = document.createElement('link'); link.rel = 'stylesheet'; link.href = 'department-showcase.css'; document.head.appendChild(link);
  const heroLink = document.createElement('link'); heroLink.rel = 'stylesheet'; heroLink.href = 'department-showcase-hero.css'; document.head.appendChild(heroLink);
  const imageLink = document.createElement('link'); imageLink.rel = 'stylesheet'; imageLink.href = 'department-image-fit.css'; document.head.appendChild(imageLink);
}

function addCommerceTools() {
  if (!document.querySelector('.site-header') || document.querySelector('.commerce-tools')) return;
  const header = document.querySelector('.site-header');
  const tools = document.createElement('div'); tools.className = 'commerce-tools';
  tools.innerHTML = '<button class="commerce-button account-button" data-open-account>Account</button><button class="commerce-button" data-open-cart>Order <span class="cart-count">0</span></button>';
  header.appendChild(tools);
  tools.querySelector('[data-open-account]').addEventListener('click', openAccount);
  tools.querySelector('[data-open-cart]').addEventListener('click', openCart);
}

function renderDepartmentCatalog(data) {
  const bodyClass = [...document.body.classList].find((name) => name !== 'department-page' && name.endsWith('-page'));
  const key = bodyClass?.replace('-page', '');
  if (!key || key === 'motors' || !data.departments[key] || document.querySelector('.catalog-section')) return;
  const section = document.createElement('section'); section.className = 'catalog-section shell';
  section.innerHTML = `<div class="section-label"><span>Available now</span><span>Choose your ${key === 'fashion' ? 'edit' : 'service'}</span></div><div class="catalog-grid"></div>`;
  const grid = section.querySelector('.catalog-grid');
  data.departments[key].items.forEach((item, index) => {
    const card = document.createElement('article'); card.className = 'catalog-card';
    card.innerHTML = `<span class="catalog-type">${String(index + 1).padStart(2, '0')} / ${escapeHtml(data.departments[key].name)}</span><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.description)}</p><div class="catalog-bottom"><span class="catalog-price">${money(item.price)}</span><button class="add-to-cart" data-item="${escapeHtml(item.name)}" data-department="${escapeHtml(data.departments[key].name)}" data-price="${Number(item.price) || 0}">Add to order +</button></div>`;
    grid.appendChild(card);
  });
  document.querySelector('.service-section')?.after(section);
  grid.querySelectorAll('.add-to-cart').forEach((button) => button.addEventListener('click', () => addToCart({ name: button.dataset.item, department: button.dataset.department, price: Number(button.dataset.price) })));
  const hero = document.querySelector('.dept-hero-image'); if (hero) hero.style.backgroundImage = `url('${data.departments[key].image}')`;
}

function applyHomeContent(data) {
  const hero = document.querySelector('.home-hero');
  if (!hero) return;
  hero.style.backgroundImage = `url('${data.home.heroImage}')`;
  hero.querySelector('.eyebrow')?.replaceChildren(document.createTextNode(data.home.eyebrow));
  const title = hero.querySelector('h1');
  if (title) title.textContent = data.home.title;
  hero.querySelector('.hero-copy')?.replaceChildren(document.createTextNode(data.home.copy));
}

function setupHomeHeroSlider(data) {
  const hero = document.querySelector('.home-hero');
  if (!hero || hero.dataset.sliderReady) return;
  addHeroStylesheet(); hero.dataset.sliderReady = 'true'; hero.classList.add('department-slider');
  const slides = [
    { key: 'motors', label: '01 / Motors', title: 'Find your<br><i>next move.</i>', copy: 'Buy, sell or rent with confidence. Every vehicle is selected for quality, character and the journeys ahead.', image: data.home.heroImage, services: [['Buy cars', 'motor-inventory.html?mode=buy'], ['Used cars', 'motor-inventory.html?mode=sell'], ['Rent cars', 'motor-inventory.html?mode=rent']], cta: ['Explore Motors', 'motor-inventory.html'] },
    { key: 'buildings', label: '02 / Buildings', title: 'Build something<br><i>that lasts.</i>', copy: 'Architecture, interiors and practical guidance for spaces with a point of view.', image: data.departments.buildings.image, services: [['Architecture design', 'buildings-services.html'], ['Interior design', 'buildings-services.html'], ['Build consulting', 'buildings-services.html'], ['Site assessment', 'buildings-services.html']], cta: ['Explore Buildings', 'buildings-services.html'] },
    { key: 'plots', label: '03 / Plots', title: 'Find your<br><i>solid ground.</i>', copy: 'Explore land opportunities and the support to buy, sell or verify your next plot.', image: data.departments.plots.image, services: [['Residential land', 'plots-opportunities.html'], ['Commercial land', 'plots-opportunities.html'], ['Title verification', 'plots-opportunities.html']], cta: ['Explore Plots', 'plots-opportunities.html'] },
    { key: 'fashion', label: '04 / Fashion', title: 'Wear your<br><i>own story.</i>', copy: 'Clothes, shoes, jewels and beauty for every version of you.', image: data.departments.fashion.image, services: [['Clothes', 'fashion-shop.html?category=clothes'], ['Shoes', 'fashion-shop.html?category=shoes'], ['Jewels', 'fashion-shop.html?category=jewels'], ['Beauty', 'fashion-shop.html?category=beauty']], cta: ['Explore Fashion', 'fashion-shop.html'] }
  ];
  hero.innerHTML = `<div class="slider-stage">${slides.map((slide, index) => `<article class="hero-slide${index === 0 ? ' active' : ''}" data-slide="${index}" style="background-image:url('${slide.image}')"><div class="hero-slide-content"><p class="eyebrow light">${slide.label}</p><h1>${slide.title}</h1><p class="hero-slide-copy">${slide.copy}</p><div class="slide-services">${slide.services.map(([label, href]) => `<a class="slide-service" href="${href}">${label} ↗</a>`).join('')}</div><a class="slide-main-link" href="${slide.cta[1]}">${slide.cta[0]} <span>↗</span></a></div></article>`).join('')}</div><p class="slider-label">Yuskar Empire / Departments</p><div class="slider-controls"><button class="slider-arrow" data-slide-prev aria-label="Previous department">←</button><div class="slider-dots">${slides.map((slide, index) => `<button class="slider-dot${index === 0 ? ' active' : ''}" data-slide-dot="${index}" aria-label="Show ${slide.key}"></button>`).join('')}</div><button class="slider-arrow" data-slide-next aria-label="Next department">→</button></div><div class="slider-progress running"></div><p class="hero-note">EST. 2024 &nbsp; / &nbsp; LAGOS · NIGERIA</p>`;
  hero.querySelectorAll('.slide-services').forEach((services) => services.remove());
  hero.querySelector('.hero-note')?.remove();
  hero.querySelector('.slider-controls').hidden = true;
  hero.querySelector('.slider-progress').hidden = true;
  const slideNodes = [...hero.querySelectorAll('.hero-slide')]; const dots = [...hero.querySelectorAll('.slider-dot')]; const progress = hero.querySelector('.slider-progress'); let current = 0; let timer;
  const showSlide = (next) => { current = (next + slides.length) % slides.length; slideNodes.forEach((slide, index) => slide.classList.toggle('active', index === current)); dots.forEach((dot, index) => dot.classList.toggle('active', index === current)); progress.classList.remove('running'); void progress.offsetWidth; progress.classList.add('running'); };
  const restart = () => { clearInterval(timer); timer = setInterval(() => showSlide(current + 1), 5500); };
  hero.querySelector('[data-slide-prev]').addEventListener('click', () => { showSlide(current - 1); restart(); }); hero.querySelector('[data-slide-next]').addEventListener('click', () => { showSlide(current + 1); restart(); }); dots.forEach((dot) => dot.addEventListener('click', () => { showSlide(Number(dot.dataset.slideDot)); restart(); })); restart();
}

function applyEditableMedia(data) {
  addEditableMediaStylesheet();
  const mediaTargets = [
    ['.motors-inventory-page .inventory-hero', data.departments.motors],
    ['.fashion-shop-page .fashion-shop-hero', data.departments.fashion],
    ['.buildings-services-page .property-hero', data.departments.buildings],
    ['.plots-opportunities-page .property-hero', data.departments.plots]
  ];
  mediaTargets.forEach(([selector, media]) => { const target = document.querySelector(selector); if (!target || !media) return; if (media.image) target.style.backgroundImage = `linear-gradient(90deg,rgba(12,21,23,.76),rgba(12,21,23,.34)),url('${media.image}')`; if (media.video) { const video = document.createElement('video'); video.className = 'editable-hero-video'; video.src = media.video; video.autoplay = true; video.muted = true; video.loop = true; video.playsInline = true; target.prepend(video); } });
  const homeSlide = document.querySelector('.home-hero .hero-slide.active'); if (homeSlide && data.home.heroVideo) { const video = document.createElement('video'); video.className = 'editable-hero-video'; video.src = data.home.heroVideo; video.autoplay = true; video.muted = true; video.loop = true; video.playsInline = true; homeSlide.prepend(video); }
}

function setupMotorLinks() {
  if (!document.body.classList.contains('motors-page')) return;
  const links = document.querySelectorAll('.service-cards article a');
  ['buy', 'sell', 'rent'].forEach((mode, index) => { if (links[index]) links[index].href = `motor-inventory.html?mode=${mode}`; });
}

function openVehicleWhatsApp(details) {
  const messageLines = [
    'Hello Yuskar Empire,',
    '',
    'I want to sell my car with Yuskar.',
    '',
    `Make: ${details.make || 'Not provided'}`,
    `Model: ${details.model || 'Not provided'}`,
    `Year: ${details.year || 'Not provided'}`,
    `Condition: ${details.condition || 'Not provided'}`,
    `What I have: ${details.whatTheyHave || 'Not provided'}`,
    `Sale amount / expected price: ${details.amount || 'Not provided'}`,
    `Commission / fee: ${details.commission || 'Not provided'}`,
    `Location: ${details.location || 'Not provided'}`,
    `Contact: ${details.contact || 'Not provided'}`,
    '',
    details.images && details.images.length ? `Selected images: ${details.images.map((image) => image.name).join(', ')}` : 'No images selected yet.',
    '',
    'Please contact me on WhatsApp to continue.'
  ];
  const url = `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(messageLines.join('\n'))}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

function openBuildingServiceWhatsApp(serviceName) {
  const service = serviceName || 'Building service';
  const message = [
    'Hello Yuskar Empire,',
    '',
    `I need help with: ${service}`,
    '',
    'Please contact me on WhatsApp and let me know the next steps.',
    '',
    'Project type: ',
    'Location: ',
    'Budget range: ',
    'Timeline: ',
    'Contact: ',
    '',
    'I can share more details on WhatsApp.'
  ].join('\n');
  const url = `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

function renderMotorInventory(data) {
  if (!document.body.classList.contains('motors-inventory-page')) return;
  addInventoryStylesheet();
  const params = new URLSearchParams(location.search);
  let mode = ['buy', 'sell', 'rent'].includes(params.get('mode')) ? params.get('mode') : 'buy';
  const copy = {
    buy: ['Vehicles ready for the road.', 'Browse selected vehicles available to buy, with clear details and a Yuskar standard.'],
    sell: ['Used cars.', 'Sell your vehicle with us and let us handle the listing, buyer matching and sale process.'],
    rent: ['Your key to the city.', 'Reserve a reliable vehicle for a day, a weekend or the road trip ahead.']
  };
  const title = document.querySelector('#inventory-title'); const description = document.querySelector('#inventory-copy');
  title.innerHTML = `${copy[mode][0].split(' ')[0]} ${copy[mode][0].split(' ').slice(1, -1).join(' ')}<br><i>${copy[mode][0].split(' ').slice(-1)}</i>`;
  description.textContent = copy[mode][1];
  document.querySelectorAll('[data-inventory-mode]').forEach((tab) => tab.classList.toggle('active', tab.dataset.inventoryMode === mode));
  const grid = document.querySelector('#inventory-grid'); const formWrap = document.querySelector('#sell-form-wrap');
  const render = () => {
    const sort = document.querySelector('#inventory-sort')?.value || 'featured';
    const vehicles = data.motorInventory.filter((vehicle) => vehicle.mode === mode).sort((a, b) => sort === 'low' ? a.price - b.price : sort === 'high' ? b.price - a.price : Number(b.featured) - Number(a.featured));
    grid.innerHTML = vehicles.map((vehicle) => `<article class="vehicle-card"><div class="vehicle-image" style="background-image:url('${vehicle.image}')"></div><div class="vehicle-info"><span class="vehicle-meta">${escapeHtml(vehicle.year)} / ${mode === 'rent' ? 'Available to rent' : mode === 'sell' ? 'We are looking for this' : 'Available to buy'}</span><h2>${escapeHtml(vehicle.name)}</h2><div class="vehicle-specs">${vehicle.specs.map((spec) => `<span>${escapeHtml(spec)}</span>`).join('')}</div><div class="vehicle-bottom"><span class="vehicle-price">${money(vehicle.price)}<small>${mode === 'rent' ? 'per day' : mode === 'sell' ? 'Request a valuation' : 'all-in estimate'}</small></span><button class="vehicle-action" data-vehicle-id="${vehicle.id}">${mode === 'buy' ? 'Enquire to buy ↗' : mode === 'rent' ? 'Reserve vehicle ↗' : 'Send this type ↗'}</button></div></div></article>`).join('') || '<p class="empty-state">No vehicles are listed for this mode yet. Check back soon or contact the Motors team.</p>';
    grid.querySelectorAll('.vehicle-price').forEach((node, index) => { node.innerHTML = `${priceMarkup(vehicles[index])}<small>${mode === 'rent' ? 'per day' : mode === 'sell' ? 'Request a valuation' : 'all-in estimate'}</small>`; });
    grid.querySelectorAll('[data-vehicle-id]').forEach((button) => button.addEventListener('click', () => {
      const vehicle = data.motorInventory.find((item) => item.id === button.dataset.vehicleId);
      if (mode === 'sell') {
        openVehicleWhatsApp({ make: vehicle.name, model: vehicle.specs.join(' / '), year: vehicle.year, condition: 'Used car consignment enquiry', location: '', contact: 'Please contact me via WhatsApp.', images: [] });
        return;
      }
      openProductDetails(vehicle, { department: 'Motors', category: mode === 'rent' ? 'Vehicle rental' : 'Vehicle purchase', action: mode === 'rent' ? 'rent' : 'buy' });
    }));
  };
  render(); document.querySelector('#inventory-sort')?.addEventListener('change', render);
  if (mode === 'sell') {
    formWrap.innerHTML = '<div class="sell-intro"><div><p class="eyebrow">Used cars</p><h2>Sell your vehicle<br><i>with Yuskar.</i></h2></div><p>Tell us what you have, your expected sale amount and the commission terms you want, and we will review it on WhatsApp.</p></div><div class="sell-cta-box"><h3>Ready to list your car?</h3><p>We help you sell faster with trusted buyers and a clear process.</p><button type="button" class="sell-trigger">Sell my car with us</button></div><div class="sell-form-box" hidden><form class="sell-form" id="sell-car-form"><label>Vehicle make<input name="make" required placeholder="e.g. Toyota"></label><label>Model<input name="model" required placeholder="e.g. Land Cruiser"></label><label>Year<input name="year" required placeholder="e.g. 2021"></label><label>Current condition<input name="condition" placeholder="Excellent / good / needs work"></label><label>What do you have?<input name="whatTheyHave" placeholder="Engine, mileage, service history, etc."></label><label>Sale amount / expected price<input name="amount" placeholder="e.g. 12,000,000 RWF"></label><label>Commission / fee<input name="commission" placeholder="e.g. 5% or agreed fee"></label><label>Location<input name="location" placeholder="City or district"></label><label>Upload images<input type="file" name="images" accept="image/*" multiple></label><label class="full">Your phone or email<input name="contact" required placeholder="How should we reach you?"></label><button type="submit">Send vehicle details ↗</button></form></div>';
    const triggerButton = formWrap.querySelector('.sell-trigger');
    const formBox = formWrap.querySelector('.sell-form-box');
    triggerButton?.addEventListener('click', () => {
      formBox.hidden = false;
      formBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    formWrap.querySelector('form')?.addEventListener('submit', (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const formData = new FormData(form);
      const imageFiles = Array.from(form.querySelector('input[type="file"]').files || []);
      const details = {
        make: formData.get('make'),
        model: formData.get('model'),
        year: formData.get('year'),
        condition: formData.get('condition'),
        whatTheyHave: formData.get('whatTheyHave'),
        amount: formData.get('amount'),
        commission: formData.get('commission'),
        location: formData.get('location'),
        contact: formData.get('contact'),
        images: imageFiles
      };
      openVehicleWhatsApp(details);
      form.reset();
      formBox.hidden = true;
    });
  } else formWrap.innerHTML = '';
}

function setupFashionLinks() {
  if (!document.body.classList.contains('fashion-page')) return;
  document.querySelector('.fashion-page .service-section .section-label')?.remove();
  const categories = [
    ['clothes', 'Clothes', 'The pieces you live in', 'fashion-womens'],
    ['shoes', 'Shoes', 'Ground your look', 'fashion-mens'],
    ['jewels', 'Jewels', 'Small statements', 'fashion-accessories'],
    ['beauty', 'Beauty', 'Your daily ritual', 'fashion-kids']
  ];
  document.querySelectorAll('.fashion-card').forEach((card, index) => {
    const [key, label, title, oldClass] = categories[index];
    card.classList.remove(oldClass); card.classList.add(`fashion-${key}`); card.href = `fashion-shop.html?category=${key}`;
    card.innerHTML = `<span>0${index + 1} / ${label}</span><h3>${title}</h3><span class="card-arrow">↗</span>`;
  });
}

function setupDepartmentHeroLinks() {
  if (!document.body.classList.contains('department-page')) return;
  addDepartmentHeroStylesheet();
  const bodyClass = [...document.body.classList].find((name) => name !== 'department-page' && name.endsWith('-page'));
  const key = bodyClass?.replace('-page', '');
  const services = {
    motors: [['Buy cars', 'motor-inventory.html?mode=buy'], ['Used cars', 'motor-inventory.html?mode=sell'], ['Rent cars', 'motor-inventory.html?mode=rent']],
    buildings: [['Architecture design', 'buildings-services.html'], ['Interior design', 'buildings-services.html'], ['Build consulting', 'buildings-services.html'], ['Site assessment', 'buildings-services.html']],
    plots: [['Residential land', 'plots-opportunities.html'], ['Commercial land', 'plots-opportunities.html'], ['Title verification', 'plots-opportunities.html']],
    fashion: [['Clothes', 'fashion-shop.html?category=clothes'], ['Shoes', 'fashion-shop.html?category=shoes'], ['Jewels', 'fashion-shop.html?category=jewels'], ['Beauty', 'fashion-shop.html?category=beauty']]
  };
  const heroContent = document.querySelector('.dept-hero-content');
  if (heroContent && services[key] && !heroContent.querySelector('.dept-hero-links')) {
    const links = document.createElement('div'); links.className = 'dept-hero-links';
    links.innerHTML = services[key].map(([label, href]) => `<a class="dept-hero-link" href="${href}">${label} ↗</a>`).join('');
    heroContent.appendChild(links);
  }
  document.querySelectorAll('.service-cards article a').forEach((link) => link.remove());
}

function renderFashionShop(data) {
  if (!document.body.classList.contains('fashion-shop-page')) return;
  addFashionStylesheet();
  const params = new URLSearchParams(location.search);
  const category = ['clothes', 'shoes', 'jewels', 'beauty'].includes(params.get('category')) ? params.get('category') : 'all';
  document.querySelectorAll('[data-fashion-category]').forEach((tab) => tab.classList.toggle('active', tab.dataset.fashionCategory === category));
  const grid = document.querySelector('#fashion-grid');
  const render = () => {
    const sort = document.querySelector('#fashion-sort')?.value || 'featured';
    const products = data.fashionInventory.filter((product) => category === 'all' || product.category === category).sort((a, b) => sort === 'low' ? a.price - b.price : sort === 'high' ? b.price - a.price : Number(b.featured) - Number(a.featured));
    grid.innerHTML = products.map((product) => `<article class="fashion-product-card"><div class="fashion-product-image" style="background-image:url('${product.image}')"></div><div class="fashion-product-info"><span class="fashion-product-category">${escapeHtml(product.category)} / Yuskar edit</span><h2>${escapeHtml(product.name)}</h2><p>${escapeHtml(product.description)}</p><div class="fashion-product-bottom"><span class="fashion-product-price">${money(product.price)}</span><button class="fashion-add" data-fashion-product="${product.id}">Add to order +</button></div></div></article>`).join('') || '<p class="empty-state">There are no pieces in this category yet.</p>';
    grid.querySelectorAll('.fashion-product-price').forEach((node, index) => { node.innerHTML = priceMarkup(products[index]); });
    grid.querySelectorAll('[data-fashion-product]').forEach((button) => button.addEventListener('click', () => { const product = data.fashionInventory.find((item) => item.id === button.dataset.fashionProduct); openProductDetails(product, { department: 'Fashion', category: product.category, action: 'buy' }); }));
  };
  render(); document.querySelector('#fashion-sort')?.addEventListener('change', render);
}

function setupDepartmentShowcase(data) {
  if (!document.body.classList.contains('department-page')) return;
  addDepartmentShowcaseStylesheet();
  const bodyClass = [...document.body.classList].find((name) => name !== 'department-page' && name.endsWith('-page'));
  const key = bodyClass?.replace('-page', '');
  if (!['motors', 'buildings', 'plots', 'fashion'].includes(key)) return;
  document.querySelector('.dept-hero-links')?.remove();
  document.querySelector('.department-page .service-section')?.remove();
  const items = key === 'motors'
    ? data.motorInventory.slice(0, 6).map((item) => ({ ...item, type: `${item.mode} / Motors`, description: item.specs.join(' · ') }))
    : key === 'fashion'
      ? data.fashionInventory.map((item) => ({ ...item, type: `${item.category} / Fashion` }))
      : data.departments[key].items.map((item) => ({ ...item, type: `${key} / Service`, image: data.departments[key].image }));
  const section = document.createElement('section'); section.className = 'dept-showcase-section';
  section.innerHTML = `<div class="shell"><div class="dept-showcase-heading"><h2>Explore this department.</h2><p>Services and products / <span data-showcase-count></span></p></div><div class="dept-showcase-viewport"><div class="dept-showcase-track">${items.map((item) => `<article class="dept-showcase-card" style="background-image:url('${item.image}')"><div class="dept-showcase-content"><span class="dept-showcase-type">${escapeHtml(item.type)}</span><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.description)}</p><div class="dept-showcase-bottom"><span class="dept-showcase-price">${money(item.price)}<small>${item.price ? 'starting point' : 'enquire for details'}</small></span><button class="dept-showcase-action" data-showcase-name="${escapeHtml(item.name)}" data-showcase-price="${Number(item.price) || 0}">${item.price ? 'Add to order +' : 'Request service +'}</button></div></div></article>`).join('')}</div></div><div class="dept-showcase-status" data-showcase-status>01 / ${String(items.length).padStart(2, '0')}</div></div>`;
  const hero = document.querySelector('.department-hero'); hero?.classList.add('department-hero-with-showcase'); hero?.append(section);
  section.querySelectorAll('.dept-showcase-price').forEach((node, index) => { node.innerHTML = `${priceMarkup(items[index])}<small>${items[index].priceRwf ? 'starting point' : 'enquire for details'}</small>`; });
  section.querySelector('[data-showcase-count]').textContent = `${items.length} selected`; const track = section.querySelector('.dept-showcase-track'); const status = section.querySelector('[data-showcase-status]'); let current = 0;
  const show = (index) => { current = (index + items.length) % items.length; track.style.transform = `translateX(-${current * 100}%)`; status.textContent = `${String(current + 1).padStart(2, '0')} / ${String(items.length).padStart(2, '0')}`; };
  setInterval(() => show(current + 1), 4800);
  section.querySelectorAll('[data-showcase-name]').forEach((button) => {
    const item = items.find((entry) => entry.name === button.dataset.showcaseName) || items[0];
    button.addEventListener('click', () => openProductDetails(item, { department: key === 'motors' ? 'Motors' : key === 'fashion' ? 'Fashion' : key.charAt(0).toUpperCase() + key.slice(1), category: item.category || key, action: key === 'motors' ? 'buy' : key === 'fashion' ? 'buy' : 'visit' }));
  });
}

function setupPropertyPage(data) {
  if (!document.body.classList.contains('property-page')) return;
  addPropertyStylesheet();
  const key = document.body.classList.contains('buildings-services-page') ? 'buildings' : 'plots'; const department = data.departments[key]; const grid = document.querySelector('.property-grid');
  if (grid && department) {
    grid.innerHTML = department.items.map((item, index) => {
      const isBuildings = key === 'buildings';
      return `<article class="property-card"><div class="property-image" style="background-image:url('${item.image || department.image}')"></div><div class="property-info"><span class="property-type">${String(index + 1).padStart(2, '0')} / ${isBuildings ? 'Service' : 'Opportunity'}</span><h2>${escapeHtml(item.name)}</h2><p>${escapeHtml(item.description)}</p><div class="property-bottom">${isBuildings ? '<span class="property-price">Consultation / planning<small>send on WhatsApp</small></span>' : `<span class="property-price">${priceMarkup(item)}<small>guide price</small></span>`}<button class="property-action" data-property-name="${escapeHtml(item.name)}" data-property-price="${Number(item.priceRwf) || 0}">${isBuildings ? 'Send on WhatsApp ↗' : 'View opportunity ↗'}</button></div></div></article>`;
    }).join('');
  }
  document.querySelectorAll('[data-property-name]').forEach((button) => {
    const item = department.items.find((entry) => entry.name === button.dataset.propertyName) || department.items[0];
    button.addEventListener('click', () => {
      if (document.body.classList.contains('buildings-services-page')) {
        openBuildingServiceWhatsApp(item.name);
        return;
      }
      openProductDetails(item, { department: 'Plots', category: key, action: 'visit' });
    });
  });
}

function openWorkWithUs() {
  if (document.querySelector('.work-modal')) return;
  const modal = document.createElement('div'); modal.className = 'work-modal';
  const departments = [
    { name: 'Motors', services: [['Buy a car', 'motor-inventory.html?mode=buy'], ['Used cars', 'motor-inventory.html?mode=sell'], ['Rent a car', 'motor-inventory.html?mode=rent']] },
    { name: 'Buildings', services: [['Architecture design', 'buildings-services.html'], ['Interior design', 'buildings-services.html'], ['Build consulting', 'buildings-services.html'], ['Site assessment', 'buildings-services.html']] },
    { name: 'Plots', services: [['Residential land', 'plots-opportunities.html'], ['Agricultural land', 'plots-opportunities.html'], ['Commercial land', 'plots-opportunities.html'], ['Title verification', 'plots-opportunities.html']] },
    { name: 'Fashion', services: [['Clothes', 'fashion-shop.html?category=clothes'], ['Shoes', 'fashion-shop.html?category=shoes'], ['Jewels', 'fashion-shop.html?category=jewels'], ['Beauty', 'fashion-shop.html?category=beauty']] }
  ];
  modal.innerHTML = `<div class="work-modal-card"><div class="work-modal-head"><div><p class="eyebrow">Choose your next move</p><h2>Work with us.</h2></div><button class="work-modal-close" data-close-work aria-label="Close work with us">×</button></div><p>Select a department or service and we will take you to the right place.</p><div class="work-departments">${departments.map((department) => `<section class="work-department"><h3>${department.name}</h3><div class="work-services">${department.services.map(([label, href]) => `<a class="work-service" href="${href}">${label} ↗</a>`).join('')}</div></section>`).join('')}</div></div>`;
  document.body.appendChild(modal); modal.querySelector('[data-close-work]').addEventListener('click', () => modal.remove()); modal.addEventListener('click', (event) => { if (event.target === modal) modal.remove(); }); applyLanguage(localStorage.getItem('yuskarLanguage') || 'en');
}

function setupWorkWithUs() {
  if (document.body.classList.contains('admin-body')) return;
  const homeCta = document.querySelector('.statement-section .text-link');
  if (homeCta) { homeCta.href = '#work-with-us'; homeCta.dataset.openWork = 'true'; }
  if (!homeCta) {
    const band = document.createElement('section'); band.className = 'work-with-us-band'; band.id = 'work-with-us';
    band.innerHTML = '<div class="shell work-with-us-inner"><div><p class="eyebrow">Yuskar Empire</p><h2>Work with us.</h2></div><button class="work-with-us-button" data-open-work>Choose a department ↗</button></div>';
    document.querySelector('.site-footer')?.before(band);
  }
  document.querySelectorAll('[data-open-work]').forEach((trigger) => trigger.addEventListener('click', (event) => { event.preventDefault(); openWorkWithUs(); }));
}

function cartItems() { return loadList(CART_KEY); }
function updateCartCount() { document.querySelectorAll('.cart-count').forEach((count) => { count.textContent = cartItems().reduce((total, item) => total + item.quantity, 0); }); }
function addToCart(item) {
  const cart = cartItems(); const existing = cart.find((entry) => entry.name === item.name && entry.department === item.department);
  if (existing) existing.quantity += 1; else cart.push({ ...item, quantity: 1 });
  saveList(CART_KEY, cart); updateCartCount(); openCart();
}
function openProductDetails(item, options = {}) {
  const product = {
    id: item.id || item.name,
    name: item.name || 'Product',
    description: item.description || item.copy || 'No description available.',
    category: item.category || options.category || 'General',
    department: options.department || item.department || 'Yuskar Empire',
    price: Number(item.priceRwf ?? item.price ?? 0),
    priceUsd: Number(item.priceUsd ?? 0),
    image: item.image || '',
    gallery: normalizeGallery(item),
    specs: Array.isArray(item.specs) ? item.specs : (Array.isArray(item.features) ? item.features : []),
    action: options.action || 'buy'
  };
  const modal = document.createElement('div'); modal.className = 'modal-wrap';
  const actionLabel = product.action === 'rent' ? 'Request to rent ↗' : product.action === 'visit' ? 'Request a visit ↗' : 'Request to buy ↗';
  modal.innerHTML = `<div class="modal-card product-detail-card"><button class="icon-close" data-close-modal aria-label="Close product details">×</button><div class="product-detail-visual"><div class="product-detail-main-image" style="background-image:url('${product.gallery[0] || product.image || ''}')"></div><div class="product-detail-thumbs">${product.gallery.map((image, index) => `<button type="button" class="product-detail-thumb${index === 0 ? ' active' : ''}" data-product-thumb="${index}" style="background-image:url('${image}')" aria-label="View image ${index + 1}"></button>`).join('')}</div></div><div class="product-detail-content"><p class="eyebrow">${escapeHtml(product.department)}</p><h2>${escapeHtml(product.name)}</h2><div class="product-detail-price">${priceMarkup(product)}</div><p>${escapeHtml(product.description)}</p>${product.specs.length ? `<ul class="product-detail-specs">${product.specs.map((spec) => `<li>${escapeHtml(spec)}</li>`).join('')}</ul>` : ''}<div class="product-detail-actions"><button class="panel-action" data-send-product-request>${actionLabel}</button><button type="button" class="button-muted" data-close-modal>Close</button></div></div></div>`;
  document.body.appendChild(modal);
  const mainImage = modal.querySelector('.product-detail-main-image');
  const updateMainImage = (index) => {
    const image = product.gallery[index] || product.image || '';
    mainImage.style.backgroundImage = `url('${image}')`;
    modal.querySelectorAll('.product-detail-thumb').forEach((thumb) => thumb.classList.toggle('active', Number(thumb.dataset.productThumb) === index));
  };
  modal.querySelectorAll('[data-product-thumb]').forEach((thumb) => thumb.addEventListener('click', () => updateMainImage(Number(thumb.dataset.productThumb))));
  modal.querySelectorAll('[data-close-modal]').forEach((button) => button.addEventListener('click', () => modal.remove()));
  modal.querySelector('[data-send-product-request]')?.addEventListener('click', () => {
    const requestType = product.action === 'rent' ? 'rent' : product.action === 'visit' ? 'visit' : 'buy';
    const verb = requestType === 'rent' ? 'rent' : requestType === 'visit' ? 'visit' : 'buy';
    addToCart({ name: product.name, department: `${product.department} / ${product.category}`, price: product.price, requestType, image: product.image });
    const message = `Hello Yuskar Empire, I want to ${verb} this item.\n\nProduct: ${product.name}\nDepartment: ${product.department}\nCategory: ${product.category}\nRequest type: ${requestType.toUpperCase()}\nPrice: ${product.price ? money(product.price) : 'Price on request'}\nDescription: ${product.description}\n\nPlease contact me with the next steps.`;
    window.open(`https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    modal.remove();
    openCart();
  });
}
function closePanel() { document.querySelector('.commerce-panel')?.remove(); }
function openCart() {
  closePanel(); const items = cartItems(); const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const panel = document.createElement('div'); panel.className = 'commerce-panel is-open';
  panel.innerHTML = `<div class="panel-backdrop"></div><aside class="side-panel"><div class="panel-head"><h2>Your order</h2><button class="icon-close" data-close-panel aria-label="Close order">×</button></div><div class="cart-items">${items.length ? items.map((item, index) => `<div class="cart-item"><div><strong>${escapeHtml(item.name)}</strong><small>${escapeHtml(item.department)}${item.requestType ? ` · ${escapeHtml(item.requestType)}` : ''} · Qty ${item.quantity}</small><button data-remove-item="${index}">Remove</button></div><span class="cart-price">${item.price ? money(item.price * item.quantity) : 'Quote'}</span></div>`).join('') : '<p class="empty-state">Your order is empty. Add a service or product to begin.</p>'}</div>${items.length ? `<div class="cart-total"><span>Total</span><span>${total ? money(total) : 'Price on request'}</span></div><button class="panel-action" data-checkout>Continue with request ↗</button>` : ''}</aside>`;
  document.body.appendChild(panel); panel.querySelector('.panel-backdrop').addEventListener('click', closePanel); panel.querySelector('[data-close-panel]').addEventListener('click', closePanel);
  panel.querySelectorAll('[data-remove-item]').forEach((button) => button.addEventListener('click', () => { const next = cartItems(); next.splice(Number(button.dataset.removeItem), 1); saveList(CART_KEY, next); updateCartCount(); openCart(); }));
  panel.querySelector('[data-checkout]')?.addEventListener('click', () => { closePanel(); openAccount(true); });
}
function openAccount(checkout = false) {
  const customer = JSON.parse(localStorage.getItem(CUSTOMER_KEY) || 'null');
  const modal = document.createElement('div'); modal.className = 'modal-wrap';
  modal.innerHTML = customer ? `<div class="modal-card"><button class="icon-close" data-close-modal aria-label="Close account">×</button><p class="eyebrow">Customer account</p><h2>Hello, ${escapeHtml(customer.name.split(' ')[0])}.</h2><p>${escapeHtml(customer.email)}${checkout ? ' Your order request is ready to send.' : ''}</p><div class="modal-actions"><button class="button-muted" data-signout>Sign out</button>${checkout ? '<button class="panel-action" data-send-request>Send request ↗</button>' : ''}</div></div>` : `<div class="modal-card"><button class="icon-close" data-close-modal aria-label="Close registration">×</button><p class="eyebrow">Yuskar customer account</p><h2>Keep your place.</h2><p>Register once to save your details and send requests faster.</p><form id="register-form"><label for="customer-name">Full name</label><input id="customer-name" name="name" required><label for="customer-email">Email address</label><input id="customer-email" type="email" name="email" required><label for="customer-phone">Phone number</label><input id="customer-phone" name="phone" required><div class="modal-actions"><button type="button" class="button-muted" data-close-modal>Cancel</button><button class="panel-action" type="submit">Create account</button></div></form></div>`;
  document.body.appendChild(modal); applyLanguage(localStorage.getItem('yuskarLanguage') || 'en'); modal.querySelectorAll('[data-close-modal]').forEach((button) => button.addEventListener('click', () => modal.remove()));
  modal.querySelector('[data-signout]')?.addEventListener('click', () => { localStorage.removeItem(CUSTOMER_KEY); modal.remove(); openAccount(); });
  modal.querySelector('#register-form')?.addEventListener('submit', (event) => { event.preventDefault(); const form = new FormData(event.currentTarget); localStorage.setItem(CUSTOMER_KEY, JSON.stringify(Object.fromEntries(form))); modal.remove(); if (checkout) openAccount(true); });
  modal.querySelector('[data-send-request]')?.addEventListener('click', () => { const orders = loadList(ORDERS_KEY); orders.push({ id: `YK-${Date.now().toString().slice(-6)}`, customer, items: cartItems(), created: new Date().toLocaleString() }); saveList(ORDERS_KEY, orders); saveList(CART_KEY, []); updateCartCount(); modal.remove(); alert('Your request has been recorded. Yuskar Empire will contact you shortly.'); }); setupChatRegistrationBridge();
}

function readFileAsDataUrl(file) {
  return new Promise((resolve) => { if (!file || !file.size) return resolve(''); const reader = new FileReader(); reader.onload = () => resolve(reader.result); reader.readAsDataURL(file); });
}

function setupAdvancedAdmin(data) {
  const editor = document.querySelector('#advanced-admin-editor');
  if (!editor) return;
  const render = () => {
    const groups = Object.entries(data.departments).map(([key, department]) => ({ key, title: department.name, items: department.items, media: department }));
    groups.push({ key: 'motorInventory', title: 'Motors inventory', items: data.motorInventory, media: null });
    groups.push({ key: 'fashionInventory', title: 'Fashion shop inventory', items: data.fashionInventory, media: null });
    editor.innerHTML = `<div class="admin-rich-group"><h3>Home hero media</h3><div class="admin-rich-row"><div class="admin-field upload-field"><label>Replace home image</label><input type="file" accept="image/*" data-home-image-file></div><div class="admin-field upload-field"><label>Replace home video</label><input type="file" accept="video/*" data-home-video-file></div></div></div>${groups.map((group) => `<div class="admin-rich-group" data-advanced-group="${group.key}"><h3>${escapeHtml(group.title)}</h3>${group.media ? `<div class="admin-rich-row"><div class="admin-field upload-field"><label>Department hero image</label><input type="file" accept="image/*" data-group-image-file></div><div class="admin-field upload-field"><label>Department hero video</label><input type="file" accept="video/*" data-group-video-file></div></div>` : ''}<div data-advanced-items>${group.items.map((item, index) => `<div class="admin-rich-row" data-advanced-item="${item.id || index}"><div class="admin-field"><label>Name</label><input data-advanced-name value="${escapeHtml(item.name)}"></div><div class="admin-field"><label>${group.key === 'motorInventory' ? 'Mode (buy, sell, rent)' : group.key === 'fashionInventory' ? 'Category' : 'Type'}</label><input data-advanced-type value="${escapeHtml(item.mode || item.category || '')}"></div><div class="admin-field full"><label>Description / specs</label><input data-advanced-description value="${escapeHtml(item.description || (item.specs || []).join(' · '))}"></div><div class="admin-field"><label>Price RWF</label><input type="number" min="0" data-advanced-rwf value="${Number(item.priceRwf) || 0}"></div><div class="admin-field"><label>Price USD</label><input type="number" min="0" data-advanced-usd value="${Number(item.priceUsd) || 0}"></div><div class="admin-field"><label>Previous RWF</label><input type="number" min="0" data-advanced-old-rwf value="${Number(item.oldPriceRwf) || 0}"></div><div class="admin-field"><label>Previous USD</label><input type="number" min="0" data-advanced-old-usd value="${Number(item.oldPriceUsd) || 0}"></div><div class="admin-field"><label>Discount %</label><input type="number" min="0" max="100" data-advanced-discount value="${Number(item.discount) || 0}"></div><div class="admin-field upload-field"><label>Replace image</label><input type="file" accept="image/*" data-advanced-image-file></div><div class="admin-field upload-field"><label>Add more images</label><input type="file" accept="image/*" multiple data-advanced-gallery-file></div><div class="admin-field upload-field"><label>Attach video</label><input type="file" accept="video/*" data-advanced-video-file></div></div>`).join('')}</div><div class="admin-add-row"><button type="button" class="admin-add-button" data-add-advanced="${group.key}">Add ${escapeHtml(group.title)} item +</button></div></div>`).join('')}`;
    editor.querySelectorAll('[data-add-advanced]').forEach((button) => button.addEventListener('click', () => { const key = button.dataset.addAdvanced; const item = { id: `${key}-${Date.now()}`, name: 'New item', description: '', priceRwf: 0, priceUsd: 0, oldPriceRwf: 0, oldPriceUsd: 0, discount: 0, image: '', video: '' }; if (key === 'motorInventory') { item.mode = 'buy'; data.motorInventory.push(item); } else if (key === 'fashionInventory') { item.category = 'clothes'; data.fashionInventory.push(item); } else data.departments[key].items.push(item); render(); }));
  };
  render();
  document.querySelector('#save-advanced-admin')?.addEventListener('click', async () => {
    const homeImage = await readFileAsDataUrl(editor.querySelector('[data-home-image-file]')?.files?.[0]); const homeVideo = await readFileAsDataUrl(editor.querySelector('[data-home-video-file]')?.files?.[0]);
    if (homeImage) data.home.heroImage = homeImage; if (homeVideo) data.home.heroVideo = homeVideo;
    for (const group of editor.querySelectorAll('[data-advanced-group]')) {
      const key = group.dataset.advancedGroup; const items = key === 'motorInventory' ? data.motorInventory : key === 'fashionInventory' ? data.fashionInventory : data.departments[key].items;
      const image = await readFileAsDataUrl(group.querySelector('[data-group-image-file]')?.files?.[0]); const video = await readFileAsDataUrl(group.querySelector('[data-group-video-file]')?.files?.[0]);
      if (key !== 'motorInventory' && key !== 'fashionInventory') { if (image) data.departments[key].image = image; if (video) data.departments[key].video = video; }
      for (const row of group.querySelectorAll('[data-advanced-item]')) { const item = items.find((entry) => String(entry.id) === row.dataset.advancedItem) || items[Number(row.dataset.advancedItem)]; if (!item) continue; item.name = row.querySelector('[data-advanced-name]').value; const type = row.querySelector('[data-advanced-type]').value; if (key === 'motorInventory') item.mode = type; else if (key === 'fashionInventory') item.category = type; item.description = row.querySelector('[data-advanced-description]').value; item.specs = item.specs || []; item.priceRwf = Number(row.querySelector('[data-advanced-rwf]').value) || 0; item.priceUsd = Number(row.querySelector('[data-advanced-usd]').value) || 0; item.oldPriceRwf = Number(row.querySelector('[data-advanced-old-rwf]').value) || 0; item.oldPriceUsd = Number(row.querySelector('[data-advanced-old-usd]').value) || 0; item.discount = Number(row.querySelector('[data-advanced-discount]').value) || 0; const itemImage = await readFileAsDataUrl(row.querySelector('[data-advanced-image-file]')?.files?.[0]); const galleryFiles = Array.from(row.querySelector('[data-advanced-gallery-file]')?.files || []); const uploadedGallery = []; for (const file of galleryFiles) { const imageUrl = await readFileAsDataUrl(file); if (imageUrl) uploadedGallery.push(imageUrl); } if (itemImage) { item.image = itemImage; item.gallery = [itemImage, ...((Array.isArray(item.gallery) ? item.gallery : []).filter((url) => url && url !== itemImage)), ...uploadedGallery]; } else if (uploadedGallery.length) { item.gallery = [...(Array.isArray(item.gallery) ? item.gallery : []), ...uploadedGallery]; if (!item.image && item.gallery[0]) item.image = item.gallery[0]; } if (!item.gallery || !item.gallery.length) { item.gallery = item.image ? [item.image] : []; } const itemVideo = await readFileAsDataUrl(row.querySelector('[data-advanced-video-file]')?.files?.[0]); if (itemVideo) item.video = itemVideo; }
    }
    saveData(data); showStatus('All media, inventory and prices saved.');
  });
}

function showOrderConfirmation(order, whatsappUrl) {
  const modal = document.createElement('div'); modal.className = 'modal-wrap';
  modal.innerHTML = `<div class="modal-card"><p class="eyebrow">Order ${escapeHtml(order.id)}</p><h2>Order confirmed.</h2><p>Your request was sent to Yuskar Empire. We will contact you on WhatsApp at <strong>${escapeHtml(order.customer.whatsapp)}</strong>.</p><div class="modal-actions"><button class="button-muted" data-close-modal>Close</button><a class="panel-action" href="${whatsappUrl}" target="_blank" rel="noreferrer">Open WhatsApp ↗</a></div></div>`;
  document.body.appendChild(modal); applyLanguage(localStorage.getItem('yuskarLanguage') || 'en'); modal.querySelector('[data-close-modal]').addEventListener('click', () => modal.remove());
}

function sendOrderToWhatsApp(customer, modal) {
  const items = cartItems(); const total = items.reduce((sum, item) => sum + Number(item.price || 0) * item.quantity, 0); const order = { id: `YK-${Date.now().toString().slice(-6)}`, status: 'Confirmed', customer, items, total, created: new Date().toLocaleString() };
  const lines = items.map((item) => `- ${item.name} x${item.quantity} (${money(item.price * item.quantity)})`).join('\n'); const message = `Hello Yuskar Empire, I would like to place this order.\n\nCustomer: ${customer.name}\nEmail: ${customer.email}\nWhatsApp: ${customer.whatsapp}\n\nOrder:\n${lines}\n\nTotal: ${total ? money(total) : 'Price on request'}\nOrder ID: ${order.id}`; const whatsappUrl = `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(message)}`;
  const orders = loadList(ORDERS_KEY); orders.push(order); saveList(ORDERS_KEY, orders); saveList(CART_KEY, []); updateCartCount(); modal.remove(); window.open(whatsappUrl, '_blank', 'noopener,noreferrer'); showOrderConfirmation(order, whatsappUrl);
}

function openCustomerAccount(checkout = false) {
  const customer = JSON.parse(localStorage.getItem(CUSTOMER_KEY) || 'null'); const modal = document.createElement('div'); modal.className = 'modal-wrap';
  if (customer && !customer.whatsapp) { modal.innerHTML = '<div class="modal-card"><button class="icon-close" data-close-modal aria-label="Close account">×</button><p class="eyebrow">One last detail</p><h2>Add WhatsApp.</h2><p>We need a WhatsApp number so Yuskar Empire can reply to you.</p><form id="whatsapp-form"><label for="customer-whatsapp">WhatsApp number</label><input id="customer-whatsapp" name="whatsapp" type="tel" placeholder="+250 781 652 135" required><div class="modal-actions"><button type="button" class="button-muted" data-close-modal>Cancel</button><button class="panel-action" type="submit">Save number</button></div></form></div>'; document.body.appendChild(modal); applyLanguage(localStorage.getItem('yuskarLanguage') || 'en'); modal.querySelector('[data-close-modal]').addEventListener('click', () => modal.remove()); modal.querySelector('#whatsapp-form').addEventListener('submit', (event) => { event.preventDefault(); customer.whatsapp = new FormData(event.currentTarget).get('whatsapp'); localStorage.setItem(CUSTOMER_KEY, JSON.stringify(customer)); modal.remove(); openCustomerAccount(checkout); }); return; }
  modal.innerHTML = customer ? `<div class="modal-card"><button class="icon-close" data-close-modal aria-label="Close account">×</button><p class="eyebrow">Customer account</p><h2>Hello, ${escapeHtml(customer.name.split(' ')[0])}.</h2><p>${escapeHtml(customer.email)} · WhatsApp ${escapeHtml(customer.whatsapp)}${checkout ? ' Your order is ready.' : ''}</p><div class="modal-actions"><button class="button-muted" data-signout>Sign out</button>${checkout ? '<button class="panel-action" data-send-whatsapp>Send order on WhatsApp ↗</button>' : ''}</div></div>` : `<div class="modal-card"><button class="icon-close" data-close-modal aria-label="Close registration">×</button><p class="eyebrow">Yuskar customer account</p><h2>Create your account.</h2><p>We need your WhatsApp number so the Yuskar team can reply to your order.</p><form id="register-form"><label for="customer-name">Full name</label><input id="customer-name" name="name" required><label for="customer-email">Email address</label><input id="customer-email" type="email" name="email" required><label for="customer-whatsapp">WhatsApp number</label><input id="customer-whatsapp" name="whatsapp" type="tel" placeholder="+250 781 652 135" required><div class="modal-actions"><button type="button" class="button-muted" data-google-signin>Continue with Google</button><button class="panel-action" type="submit">Create account</button></div></form></div>`;
  document.body.appendChild(modal); applyLanguage(localStorage.getItem('yuskarLanguage') || 'en'); modal.querySelectorAll('[data-close-modal]').forEach((button) => button.addEventListener('click', () => modal.remove()));
  modal.querySelector('[data-signout]')?.addEventListener('click', () => { localStorage.removeItem(CUSTOMER_KEY); modal.remove(); openCustomerAccount(checkout); });
  modal.querySelector('[data-google-signin]')?.addEventListener('click', () => { localStorage.setItem(CUSTOMER_KEY, JSON.stringify({ name: 'Google customer', email: 'google.customer@example.com', whatsapp: '' })); modal.remove(); openCustomerAccount(checkout); });
  modal.querySelector('#register-form')?.addEventListener('submit', (event) => { event.preventDefault(); const form = new FormData(event.currentTarget); const saved = Object.fromEntries(form); localStorage.setItem(CUSTOMER_KEY, JSON.stringify(saved)); modal.remove(); if (checkout) openCustomerAccount(true); });
  modal.querySelector('[data-send-whatsapp]')?.addEventListener('click', () => sendOrderToWhatsApp(customer, modal));
}

function openChat() {
  const customer = JSON.parse(localStorage.getItem(CUSTOMER_KEY) || 'null');
  if (!customer) { sessionStorage.setItem('openChatAfterAccount', '1'); openAccount(); return; }
  const modal = document.createElement('div'); modal.className = 'modal-wrap';
  modal.innerHTML = '<div class="modal-card chat-card"><button class="icon-close" data-close-modal aria-label="Close chat">×</button><p class="eyebrow">Yuskar Empire chat</p><h2>How can we help?</h2><p>Your message will be sent to the Yuskar team.</p><form id="chat-form"><textarea name="message" required placeholder="Write your message..."></textarea><div class="modal-actions"><button type="button" class="button-muted" data-close-modal>Cancel</button><button class="panel-action" type="submit">Send message ↗</button></div></form></div>';
  document.body.appendChild(modal); applyLanguage(localStorage.getItem('yuskarLanguage') || 'en'); modal.querySelectorAll('[data-close-modal]').forEach((button) => button.addEventListener('click', () => modal.remove()));
  modal.querySelector('#chat-form').addEventListener('submit', (event) => { event.preventDefault(); const message = new FormData(event.currentTarget).get('message'); const chats = loadList(CHAT_KEY); chats.push({ id: `CHAT-${Date.now().toString().slice(-6)}`, customer, message, created: new Date().toLocaleString(), from: 'customer' }); saveList(CHAT_KEY, chats); modal.remove(); alert('Your message has been sent to Yuskar Empire.'); });
}

function openContactChooser(data) {
  const modal = document.createElement('div'); modal.className = 'modal-wrap';
  const whatsapp = BUSINESS_WHATSAPP;
  modal.innerHTML = `<div class="modal-card contact-card"><button class="icon-close" data-close-modal aria-label="Close contact options">×</button><p class="eyebrow">Yuskar Empire</p><h2>Start a conversation.</h2><p>Choose how you would like to reach us.</p><div class="contact-options"><button data-contact-site>Chat on site ↗</button><a href="https://wa.me/${whatsapp}" target="_blank" rel="noreferrer">WhatsApp ↗</a><a href="mailto:${escapeHtml(data.contact.email)}">Email us ↗</a><a href="tel:${escapeHtml(data.contact.phone)}">Call ${escapeHtml(data.contact.phone)} ↗</a></div></div>`;
  document.body.appendChild(modal); applyLanguage(localStorage.getItem('yuskarLanguage') || 'en'); modal.querySelectorAll('[data-close-modal]').forEach((button) => button.addEventListener('click', () => modal.remove())); modal.querySelector('[data-contact-site]').addEventListener('click', () => { modal.remove(); openChat(); });
}

function setupContactButtons(data) {
  if (document.body.classList.contains('admin-body')) return;
  document.querySelectorAll('.header-cta').forEach((button) => { button.href = '#contact'; button.textContent = 'Start a conversation ↗'; button.addEventListener('click', (event) => { event.preventDefault(); openContactChooser(data); }); });
  document.querySelectorAll('.site-footer a[href^="mailto:"]').forEach((link) => { link.href = `mailto:${data.contact.email}`; });
}

function setupChatRegistrationBridge() {
  const form = document.querySelector('#register-form'); if (!form) return;
  const google = document.createElement('button'); google.type = 'button'; google.className = 'button-muted'; google.textContent = 'Continue with Google'; form.querySelector('.modal-actions')?.before(google);
  google.addEventListener('click', () => { localStorage.setItem(CUSTOMER_KEY, JSON.stringify({ name: 'Google customer', email: 'google.customer@example.com', phone: '' })); document.querySelector('.modal-wrap')?.remove(); if (sessionStorage.getItem('openChatAfterAccount')) { sessionStorage.removeItem('openChatAfterAccount'); openChat(); } });
  form.addEventListener('submit', () => { setTimeout(() => { if (sessionStorage.getItem('openChatAfterAccount')) { sessionStorage.removeItem('openChatAfterAccount'); document.querySelector('.modal-wrap')?.remove(); openChat(); } }, 0); });
}

function setupCategoryAdmin(data) {
  if (!document.body.classList.contains('category-admin')) return;
  document.querySelectorAll('[data-admin-tab]').forEach((tab) => tab.addEventListener('click', () => { document.querySelectorAll('.admin-tab').forEach((button) => button.classList.remove('active')); document.querySelectorAll('.category-manager').forEach((section) => section.classList.remove('active')); tab.classList.add('active'); document.querySelector(`[data-admin-section="${tab.dataset.adminTab}"]`)?.classList.add('active'); }));
  const categoryConfig = { motors: { title: 'Motors inventory', source: 'motorInventory', prices: true, type: 'Mode: buy, sell or rent' }, buildings: { title: 'Buildings services', source: 'buildings', prices: false, type: 'Service type' }, plots: { title: 'Plot opportunities', source: 'plots', prices: true, type: 'Opportunity type' }, fashion: { title: 'Fashion products', source: 'fashionInventory', prices: true, type: 'Category: clothes, shoes, jewels or beauty' } };
  const collectionFor = (key) => key === 'motors' ? data.motorInventory : key === 'fashion' ? data.fashionInventory : data.departments[key].items;
  const mediaFor = (key) => key === 'motors' || key === 'fashion' ? null : data.departments[key];
  const itemEditor = (key) => {
    const config = categoryConfig[key]; const editor = document.querySelector(`#category-${key}-editor`); if (!editor) return;
    const collection = collectionFor(key); const media = mediaFor(key);
    editor.innerHTML = `<div class="category-card"><h3>${config.title}</h3>${media ? `<div class="category-fields"><div class="admin-field"><label>Department hero image</label><input type="file" accept="image/*" data-category-image><img class="media-preview" src="${escapeHtml(media.image || '')}" alt="Current department image"></div><div class="admin-field"><label>Department hero video</label><input type="file" accept="video/*" data-category-video></div></div>` : ''}<div class="category-items">${collection.map((item, index) => `<div class="category-item" data-category-item="${item.id}"><div class="category-item-head"><strong>${String(index + 1).padStart(2, '0')} / ${escapeHtml(item.name || 'New item')}</strong><span>${escapeHtml(config.type)}</span></div><div class="category-fields"><div class="admin-field"><label>Name</label><input data-field="name" value="${escapeHtml(item.name)}"></div><div class="admin-field"><label>${config.type}</label><input data-field="type" value="${escapeHtml(item.mode || item.category || '')}"></div><div class="admin-field full"><label>Description or specifications</label><textarea data-field="description">${escapeHtml(item.description || (item.specs || []).join(' · '))}</textarea></div>${key === 'motors' ? '<div class="admin-field"><label>Year</label><input data-field="year" value="' + escapeHtml(item.year || '') + '"></div>' : ''}${config.prices ? `<div class="admin-field"><label>Current price RWF</label><input type="number" min="0" data-field="priceRwf" value="${Number(item.priceRwf) || 0}"></div><div class="admin-field"><label>Current price USD</label><input type="number" min="0" data-field="priceUsd" value="${Number(item.priceUsd) || 0}"></div><div class="admin-field"><label>Previous price RWF</label><input type="number" min="0" data-field="oldPriceRwf" value="${Number(item.oldPriceRwf) || 0}"></div><div class="admin-field"><label>Previous price USD</label><input type="number" min="0" data-field="oldPriceUsd" value="${Number(item.oldPriceUsd) || 0}"></div><div class="admin-field"><label>Discount %</label><input type="number" min="0" max="100" data-field="discount" value="${Number(item.discount) || 0}"></div>` : ''}<div class="admin-field"><label>Replace image</label><input type="file" accept="image/*" data-field-image></div><div class="admin-field"><label>Attach video</label><input type="file" accept="video/*" data-field-video></div></div></div>`).join('')}</div><div class="category-actions"><p>Images/videos are attached from your computer and saved locally.</p><button type="button" data-add-category="${key}">Add new item +</button><button type="button" data-save-category="${key}">Save ${config.title}</button></div></div>`;
    editor.querySelector('[data-add-category]')?.addEventListener('click', () => { const item = { id: `${key}-${Date.now()}`, name: 'New item', description: '', image: '', video: '', priceRwf: 0, priceUsd: 0, oldPriceRwf: 0, oldPriceUsd: 0, discount: 0 }; if (key === 'motors') { item.mode = 'buy'; item.year = ''; item.specs = []; data.motorInventory.push(item); } else if (key === 'fashion') item.category = 'clothes'; else data.departments[key].items.push(item); itemEditor(key); });
    editor.querySelector('[data-save-category]')?.addEventListener('click', async () => { if (media) { const image = await readFileAsDataUrl(editor.querySelector('[data-category-image]')?.files?.[0]); const video = await readFileAsDataUrl(editor.querySelector('[data-category-video]')?.files?.[0]); if (image) media.image = image; if (video) media.video = video; } for (const row of editor.querySelectorAll('[data-category-item]')) { const item = collection.find((entry) => entry.id === row.dataset.categoryItem); if (!item) continue; item.name = row.querySelector('[data-field="name"]').value; const type = row.querySelector('[data-field="type"]').value; if (key === 'motors') item.mode = type; else if (key === 'fashion') item.category = type; item.description = row.querySelector('[data-field="description"]').value; if (key === 'motors') { item.year = row.querySelector('[data-field="year"]').value; item.specs = item.description.split('·').map((part) => part.trim()).filter(Boolean); } if (config.prices) { item.priceRwf = Number(row.querySelector('[data-field="priceRwf"]').value) || 0; item.priceUsd = Number(row.querySelector('[data-field="priceUsd"]').value) || 0; item.oldPriceRwf = Number(row.querySelector('[data-field="oldPriceRwf"]').value) || 0; item.oldPriceUsd = Number(row.querySelector('[data-field="oldPriceUsd"]').value) || 0; item.discount = Number(row.querySelector('[data-field="discount"]').value) || 0; item.price = item.priceRwf; } const image = await readFileAsDataUrl(row.querySelector('[data-field-image]')?.files?.[0]); const galleryFiles = Array.from(row.querySelector('[data-field-gallery]')?.files || []); const uploadedGallery = []; for (const file of galleryFiles) { const imageUrl = await readFileAsDataUrl(file); if (imageUrl) uploadedGallery.push(imageUrl); } if (image) { item.image = image; item.gallery = [image, ...((Array.isArray(item.gallery) ? item.gallery : []).filter((url) => url && url !== image)), ...uploadedGallery]; } else if (uploadedGallery.length) { item.gallery = [...(Array.isArray(item.gallery) ? item.gallery : []), ...uploadedGallery]; if (!item.image && item.gallery[0]) item.image = item.gallery[0]; } if (!item.gallery || !item.gallery.length) { item.gallery = item.image ? [item.image] : []; } const video = await readFileAsDataUrl(row.querySelector('[data-field-video]')?.files?.[0]); if (video) item.video = video; } saveData(data); showStatus(`${config.title} saved.`); });
  };
  const homeEditor = document.querySelector('#category-home-editor'); homeEditor.innerHTML = `<div class="category-card"><h3>Home hero content</h3><div class="category-fields"><div class="admin-field"><label>Eyebrow</label><input data-home-field="eyebrow" value="${escapeHtml(data.home.eyebrow)}"></div><div class="admin-field"><label>Main title</label><input data-home-field="title" value="${escapeHtml(data.home.title)}"></div><div class="admin-field full"><label>Description</label><textarea data-home-field="copy">${escapeHtml(data.home.copy)}</textarea></div><div class="admin-field"><label>Replace hero image</label><input type="file" accept="image/*" data-home-category-image><img class="media-preview" src="${escapeHtml(data.home.heroImage)}" alt="Current home hero"></div><div class="admin-field"><label>Replace hero video</label><input type="file" accept="video/*" data-home-category-video></div></div><div class="category-actions"><p>One focused place for home copy and media.</p><button type="button" data-save-home-category>Save home media</button></div></div>`;
  homeEditor.querySelector('[data-save-home-category]').addEventListener('click', async () => { homeEditor.querySelectorAll('[data-home-field]').forEach((field) => { data.home[field.dataset.homeField] = field.value; }); const image = await readFileAsDataUrl(homeEditor.querySelector('[data-home-category-image]').files[0]); const video = await readFileAsDataUrl(homeEditor.querySelector('[data-home-category-video]').files[0]); if (image) data.home.heroImage = image; if (video) data.home.heroVideo = video; saveData(data); showStatus('Home media saved.'); });
  const contactEditor = document.querySelector('#category-contact-editor'); contactEditor.innerHTML = `<div class="category-card"><h3>Public contact details</h3><div class="category-fields"><div class="admin-field"><label>Email address</label><input data-contact-field="email" type="email" value="${escapeHtml(data.contact.email)}"></div><div class="admin-field"><label>WhatsApp number</label><input data-contact-field="whatsapp" value="${escapeHtml(data.contact.whatsapp)}" placeholder="250788000000"></div><div class="admin-field"><label>Call number</label><input data-contact-field="phone" value="${escapeHtml(data.contact.phone)}"></div></div><div class="category-actions"><p>Use an international WhatsApp number without spaces for the link.</p><button type="button" data-save-contact>Save contact channels</button></div></div>`;
  contactEditor.querySelector('[data-save-contact]').addEventListener('click', () => { contactEditor.querySelectorAll('[data-contact-field]').forEach((field) => { data.contact[field.dataset.contactField] = field.value; }); saveData(data); showStatus('Contact channels saved.'); });
  const chats = loadList(CHAT_KEY); const chatEditor = document.querySelector('#category-chat-editor'); chatEditor.innerHTML = chats.length ? chats.slice().reverse().map((chat) => `<article class="category-card"><h3>${escapeHtml(chat.id)}</h3><p><strong>${escapeHtml(chat.customer.name)}</strong> · ${escapeHtml(chat.customer.email)} · ${escapeHtml(chat.created)}</p><p>${escapeHtml(chat.message)}</p><div class="category-actions"><p>Reply through email or WhatsApp using the contact details.</p><a class="admin-save" href="mailto:${escapeHtml(data.contact.email)}?subject=Reply%20to%20${encodeURIComponent(chat.id)}">Reply by email ↗</a></div></article>`).join('') : '<p class="orders-empty">No on-site chat messages yet.</p>';
  Object.keys(categoryConfig).forEach(itemEditor);
  const orders = loadList(ORDERS_KEY); document.querySelector('#admin-order-count').textContent = orders.length; document.querySelector('#admin-dept-count').textContent = Object.keys(data.departments).length; document.querySelector('#admin-item-count').textContent = data.motorInventory.length + data.fashionInventory.length + Object.values(data.departments).reduce((total, department) => total + department.items.length, 0); document.querySelector('#category-orders-editor').innerHTML = orders.length ? orders.map((order) => `<article class="category-card"><h3>${escapeHtml(order.id)}</h3><p>${escapeHtml(order.customer.name)} · ${escapeHtml(order.customer.email)} · ${escapeHtml(order.created)}</p><p>${order.items.map((item) => `${escapeHtml(item.name)} × ${item.quantity}`).join(', ')}</p></article>`).join('') : '<p class="orders-empty">No customer orders recorded in this browser yet.</p>';
  document.querySelector('#reset-site')?.addEventListener('click', () => { saveData(clone(DEFAULT_DATA)); location.reload(); });
}

function setupAdmin(data) {
  if (!document.body.classList.contains('admin-body')) return;
  document.querySelectorAll('[data-admin-tab]').forEach((tab) => tab.addEventListener('click', () => { document.querySelectorAll('.admin-tab').forEach((button) => button.classList.remove('active')); document.querySelectorAll('.admin-section').forEach((section) => section.classList.remove('active')); tab.classList.add('active'); document.querySelector(`[data-admin-section="${tab.dataset.adminTab}"]`)?.classList.add('active'); }));
  const homeForm = document.querySelector('#home-form');
  if (homeForm) { homeForm.elements.eyebrow.value = data.home.eyebrow; homeForm.elements.title.value = data.home.title; homeForm.elements.copy.value = data.home.copy; homeForm.querySelector('#home-hero-preview').src = data.home.heroImage; homeForm.addEventListener('submit', async (event) => { event.preventDefault(); data.home.eyebrow = homeForm.elements.eyebrow.value; data.home.title = homeForm.elements.title.value; data.home.copy = homeForm.elements.copy.value; const image = await readFileAsDataUrl(homeForm.elements.heroFile.files[0]); const video = await readFileAsDataUrl(homeForm.elements.heroVideo.files[0]); if (image) data.home.heroImage = image; if (video) data.home.heroVideo = video; saveData(data); showStatus('Home content and media saved.'); }); }
  const editor = document.querySelector('#catalog-editor');
  if (editor) { editor.innerHTML = Object.entries(data.departments).map(([key, department]) => `<div class="admin-row" data-editor-department="${key}"><h3>${escapeHtml(department.name)}</h3><div class="admin-field full"><label>Department hero image URL</label><input data-department-image value="${escapeHtml(department.image)}"></div>${department.items.map((item, index) => `<div class="admin-field"><label>Service / product ${index + 1}</label><input data-item-name value="${escapeHtml(item.name)}"><input data-item-description value="${escapeHtml(item.description)}"><input type="number" min="0" data-item-price value="${Number(item.price) || 0}" placeholder="Price in RWF"></div>`).join('')}</div>`).join(''); }
  const fashionEditor = document.querySelector('#fashion-inventory-editor');
  if (fashionEditor) fashionEditor.innerHTML = data.fashionInventory.map((item, index) => `<div class="admin-row" data-fashion-editor="${item.id}"><h3>${String(index + 1).padStart(2, '0')} / ${escapeHtml(item.category)}</h3><div class="admin-field"><label>Product name</label><input data-fashion-name value="${escapeHtml(item.name)}"></div><div class="admin-field"><label>Price in RWF</label><input type="number" min="0" data-fashion-price value="${Number(item.price) || 0}"></div><div class="admin-field full"><label>Description</label><input data-fashion-description value="${escapeHtml(item.description)}"></div><div class="admin-field full"><label>Product image URL</label><input data-fashion-image value="${escapeHtml(item.image)}"></div></div>`).join('');
  document.querySelector('#save-catalog')?.addEventListener('click', () => { document.querySelectorAll('[data-editor-department]').forEach((row) => { const department = data.departments[row.dataset.editorDepartment]; department.image = row.querySelector('[data-department-image]').value; row.querySelectorAll('[data-item-name]').forEach((input, index) => { department.items[index].name = input.value; department.items[index].description = row.querySelectorAll('[data-item-description]')[index].value; department.items[index].price = Number(row.querySelectorAll('[data-item-price]')[index].value) || 0; }); }); document.querySelectorAll('[data-fashion-editor]').forEach((row) => { const item = data.fashionInventory.find((product) => product.id === row.dataset.fashionEditor); item.name = row.querySelector('[data-fashion-name]').value; item.price = Number(row.querySelector('[data-fashion-price]').value) || 0; item.description = row.querySelector('[data-fashion-description]').value; item.image = row.querySelector('[data-fashion-image]').value; }); saveData(data); showStatus('Departments, services and Fashion products saved.'); });
  document.querySelector('#reset-site')?.addEventListener('click', () => { saveData(clone(DEFAULT_DATA)); location.reload(); });
  const orders = loadList(ORDERS_KEY); document.querySelector('#admin-order-count').textContent = orders.length; document.querySelector('#admin-dept-count').textContent = Object.keys(data.departments).length;
  document.querySelector('#orders-list').innerHTML = orders.length ? orders.map((order) => `<article class="cart-item"><div><strong>${escapeHtml(order.id)}</strong><small>${escapeHtml(order.customer.name)} · ${escapeHtml(order.customer.email)} · ${escapeHtml(order.created)}</small><small>${order.items.map((item) => `${escapeHtml(item.name)} × ${item.quantity}`).join(', ')}</small></div></article>`).join('') : '<p class="empty-state">No customer orders recorded in this browser yet.</p>';
  setupAdvancedAdmin(data);
}

function init() {
  const data = loadData(); addStylesheet(); addPricingStylesheet(); addEditableMediaStylesheet(); addContactStylesheet(); addCurrencyCleanupStylesheet(); addLanguageStylesheet(); addAdminAuthStylesheet(); addInventoryStylesheet(); addFashionStylesheet(); addPropertyStylesheet(); addCtaStylesheet(); addHeroStylesheet(); addDepartmentHeroStylesheet(); addDepartmentShowcaseStylesheet(); addBrandLoader(); mountLogo(); normalizeDepartmentLinks(); setupLanguageSelector(); setupAdminAuth();
  openAccount = openCustomerAccount;
  if (!document.body.classList.contains('admin-body')) { applyHomeContent(data); updateCartCount(); }
  setupHomeHeroSlider(data);
  applyEditableMedia(data);
  setupMotorLinks(); setupFashionLinks(); setupDepartmentShowcase(data); renderMotorInventory(data); renderFashionShop(data); setupPropertyPage(data); setupWorkWithUs(); setupContactButtons(data);
  if (document.body.classList.contains('category-admin')) setupCategoryAdmin(data); else setupAdmin(data);
  const menuToggle = document.querySelector('.menu-toggle'); const nav = document.querySelector('.main-nav');
  menuToggle?.addEventListener('click', () => { nav.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', nav.classList.contains('open')); });
  document.querySelectorAll('a[href^="#"]').forEach((link) => link.addEventListener('click', () => nav?.classList.remove('open')));
}

init();
