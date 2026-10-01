const fallbackProducts = [
  {
    name: "Nova High 01",
    cat: "Men",
    price: 15990,
    old: 19990,
    img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=84",
    tag: "-20%",
    rating: "4.9",
    desc: "A sculpted high-top with premium leather panels and an editorial street silhouette.",
  },
  {
    name: "Nova 550",
    cat: "Women",
    price: 13990,
    old: 17990,
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=84",
    tag: "NEW",
    rating: "4.8",
    desc: "Soft neutral tones, refined proportions and a comfortable everyday profile.",
  },
  {
    name: "Aero 350",
    cat: "Running",
    price: 18990,
    old: 23990,
    img: "https://images.unsplash.com/photo-1534653299134-96a171b61581?auto=format&fit=crop&w=1200&q=84",
    tag: "-15%",
    rating: "4.9",
    desc: "A lightweight runner made for responsive movement and all-day comfort.",
  },
  {
    name: "Nova Classic 550",
    cat: "Lifestyle",
    price: 14990,
    old: 18990,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=84",
    tag: "NEW",
    rating: "4.7",
    desc: "A clean lifestyle staple with a bold colourway and premium finish.",
  },
  {
    name: "Court 04",
    cat: "Basketball",
    price: 17990,
    old: 21990,
    img: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=1200&q=84",
    tag: "HOT",
    rating: "4.8",
    desc: "High-collar court energy with supportive construction and strong lines.",
  },
  {
    name: "Street Mono",
    cat: "Men",
    price: 12990,
    old: 15990,
    img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=84",
    tag: "BEST",
    rating: "4.6",
    desc: "Minimal monochrome styling designed to work from morning to night.",
  },
  {
    name: "Aura Low",
    cat: "Women",
    price: 15490,
    old: 18990,
    img: "https://images.unsplash.com/photo-1687511597667-dcf4b483be5f?auto=format&fit=crop&w=1200&q=84",
    tag: "NEW",
    rating: "4.8",
    desc: "A softly sculpted low-top with a refined feminine colour palette.",
  },
  {
    name: "Nova Blackout",
    cat: "Limited",
    price: 22990,
    old: 27990,
    img: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=1200&q=84",
    tag: "LIMITED",
    rating: "5.0",
    desc: "A dark limited-edition statement pair for the NOVA private edit.",
  },
  {
    name: "Nova Apex 02",
    cat: "Men",
    price: 16990,
    old: 20990,
    img: "https://images.unsplash.com/photo-1722988739840-741f160d7a08?auto=format&fit=crop&w=1200&q=84",
    tag: "NEW",
    rating: "4.8",
    desc: "A sharp everyday runner with layered panels and a confident street profile.",
  },
  {
    name: "Nova Courtline",
    cat: "Men",
    price: 14990,
    old: 18990,
    img: "https://images.unsplash.com/photo-1724921194807-c0d17dc7cfe4?auto=format&fit=crop&w=1200&q=84",
    tag: "HOT",
    rating: "4.7",
    desc: "Clean court-inspired lines with soft cushioning and an easy daily fit.",
  },
  {
    name: "Nova Street 02",
    cat: "Men",
    price: 13490,
    old: 16990,
    img: "https://images.unsplash.com/photo-1557330359-ffb0deed6163?auto=format&fit=crop&w=1200&q=84",
    tag: "BEST",
    rating: "4.6",
    desc: "Minimal streetwear energy with a premium textured upper.",
  },

  {
    name: "Nova Muse 01",
    cat: "Women",
    price: 15490,
    old: 19490,
    img: "https://images.unsplash.com/photo-1727061181133-3797c19254f5?auto=format&fit=crop&w=1200&q=84",
    tag: "NEW",
    rating: "4.9",
    desc: "A refined low-top with soft tones and a sculpted feminine silhouette.",
  },
  {
    name: "Nova Pearl",
    cat: "Women",
    price: 16490,
    old: 19990,
    img: "https://images.unsplash.com/photo-1672622012959-45355279c93e?auto=format&fit=crop&w=1200&q=84",
    tag: "BEST",
    rating: "4.8",
    desc: "Polished neutral styling with a plush everyday feel.",
  },
  {
    name: "Nova Bloom",
    cat: "Women",
    price: 14490,
    old: 17990,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=84",
    tag: "-18%",
    rating: "4.7",
    desc: "A playful colourway built around lightweight comfort and clean lines.",
  },

  {
    name: "Aero Run 02",
    cat: "Running",
    price: 19990,
    old: 24990,
    img: "https://images.unsplash.com/photo-1690911433471-83d3af12afcb?auto=format&fit=crop&w=1200&q=84",
    tag: "NEW",
    rating: "4.9",
    desc: "Responsive cushioning and a breathable upper for energetic daily miles.",
  },
  {
    name: "Aero Pulse",
    cat: "Running",
    price: 18490,
    old: 22990,
    img: "https://images.unsplash.com/photo-1707616782025-5d9e96413cee?auto=format&fit=crop&w=1200&q=84",
    tag: "HOT",
    rating: "4.8",
    desc: "A lightweight performance silhouette tuned for quick movement.",
  },
  {
    name: "Aero Cloud",
    cat: "Running",
    price: 17490,
    old: 21990,
    img: "https://images.unsplash.com/photo-1595309849731-f7ce86eda9fc?auto=format&fit=crop&w=1200&q=84",
    tag: "-20%",
    rating: "4.7",
    desc: "Soft underfoot comfort with a clean technical finish.",
  },

  {
    name: "Aero Goldline",
    cat: "Running",
    price: 20490,
    old: 24990,
    img: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?auto=format&fit=crop&w=1200&q=84",
    tag: "NEW",
    rating: "4.8",
    desc: "Warm gold tones and a responsive runner profile made for fast daily miles.",
  },
  {
    name: "Court Force 01",
    cat: "Basketball",
    price: 18990,
    old: 22990,
    img: "https://images.unsplash.com/photo-1786379582186-83ef57a1c420?auto=format&fit=crop&w=1200&q=84",
    tag: "NEW",
    rating: "4.8",
    desc: "High-top court attitude with supportive structure and bold proportions.",
  },
  {
    name: "Court Redline",
    cat: "Basketball",
    price: 19990,
    old: 24990,
    img: "https://images.unsplash.com/photo-1669265268995-fad46ae774c7?auto=format&fit=crop&w=1200&q=84",
    tag: "HOT",
    rating: "4.9",
    desc: "Statement red accents and stable support for an unmistakable court look.",
  },
  {
    name: "Court Shadow",
    cat: "Basketball",
    price: 17990,
    old: 21990,
    img: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=1200&q=84",
    tag: "BEST",
    rating: "4.7",
    desc: "Dark tonal styling with a balanced high-top construction.",
  },

  {
    name: "Nova Daily 01",
    cat: "Lifestyle",
    price: 13990,
    old: 17490,
    img: "https://images.unsplash.com/photo-1637437757614-6491c8e915b5?auto=format&fit=crop&w=1200&q=84",
    tag: "NEW",
    rating: "4.8",
    desc: "An effortless lifestyle pair for everyday rotation and weekend plans.",
  },
  {
    name: "Nova Daily 02",
    cat: "Lifestyle",
    price: 14990,
    old: 18990,
    img: "https://images.unsplash.com/photo-1646953225831-228c632d1411?auto=format&fit=crop&w=1200&q=84",
    tag: "BEST",
    rating: "4.7",
    desc: "A versatile low-top with premium detailing and easy styling.",
  },
  {
    name: "Nova Motion",
    cat: "Lifestyle",
    price: 15990,
    old: 19990,
    img: "https://images.unsplash.com/photo-1642088338903-735e55b45c1a?auto=format&fit=crop&w=1200&q=84",
    tag: "HOT",
    rating: "4.8",
    desc: "Modern proportions with a soft neutral palette and everyday comfort.",
  },

  {
    name: "Nova Greyline",
    cat: "Men",
    price: 15490,
    old: 18990,
    img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=84",
    tag: "NEW",
    rating: "4.8",
    desc: "Clean grey profile with a premium product-shot finish for everyday rotation.",
  },
  {
    name: "Nova Muse Air",
    cat: "Women",
    price: 15990,
    old: 19490,
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=84",
    tag: "NEW",
    rating: "4.9",
    desc: "Crisp white runner styling with a refined silhouette and lightweight feel.",
  },
  {
    name: "Aero Blue Shift",
    cat: "Running",
    price: 19490,
    old: 23990,
    img: "https://images.unsplash.com/photo-1534653299134-96a171b61581?auto=format&fit=crop&w=1200&q=84",
    tag: "HOT",
    rating: "4.9",
    desc: "Blue-and-white performance styling built around a clean, race-ready profile.",
  },
  {
    name: "Court Air Red",
    cat: "Basketball",
    price: 20990,
    old: 25990,
    img: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=1200&q=84",
    tag: "LIMITED",
    rating: "4.9",
    desc: "High-impact court styling with a crisp white upper and signature red energy.",
  },
  {
    name: "Nova Noir Daily",
    cat: "Lifestyle",
    price: 15490,
    old: 18990,
    img: "https://images.unsplash.com/photo-1557330359-ffb0deed6163?auto=format&fit=crop&w=1200&q=84",
    tag: "NEW",
    rating: "4.8",
    desc: "Dark tonal styling with a clean silhouette made for effortless daily wear.",
  },
  {
    name: "Nova Coast",
    cat: "Lifestyle",
    price: 15990,
    old: 19490,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=84",
    tag: "NEW",
    rating: "4.9",
    desc: "White lifestyle sneakers with fresh colour accents and an editorial still-life finish.",
  },
  {
    name: "Nova Atelier 01",
    cat: "Limited",
    price: 24990,
    old: 29990,
    img: "https://images.unsplash.com/photo-1557330359-ffb0deed6163?auto=format&fit=crop&w=1200&q=84",
    tag: "LIMITED",
    rating: "5.0",
    desc: "A numbered-feel statement pair from the NOVA private atelier edit.",
  },
  {
    name: "Nova Atelier 02",
    cat: "Limited",
    price: 26990,
    old: 32990,
    img: "https://images.unsplash.com/photo-1722988739840-741f160d7a08?auto=format&fit=crop&w=1200&q=84",
    tag: "LIMITED",
    rating: "4.9",
    desc: "Premium contrast panels and a collectible editorial silhouette.",
  },
  {
    name: "Nova Noir Edition",
    cat: "Limited",
    price: 28990,
    old: 34990,
    img: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=1200&q=84",
    tag: "RARE",
    rating: "5.0",
    desc: "A dark monochrome limited release with elevated finishing.",
  },
];
let products = fallbackProducts.map((product, index) => ({
  ...product,
  slug: product.slug || `local-${index}`,
}));
let bag = [];
let loggedInUser = { email: "", name: "" };
let currentProductIndex = 0;
let currentQty = 1;
let couponApplied = false;
const NOVA_CONTACT_EMAIL = "shariq.mailbox1@gmail.com";
const NOVA_CONTACT_PHONE = "+92 320 8131452";
const NOVA_API_BASE_URL = "http://localhost:3002";
const NOVA_SANITY = {
  projectId: "qdlqona2",
  dataset: "production",
  apiVersion: "2025-02-19",
};

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>\"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function safeProductImage(value) {
  try {
    const image = new URL(value);
    return image.protocol === "https:" ? image.href : "assest/nova-sneaker-fallback.svg";
  } catch {
    return "assest/nova-sneaker-fallback.svg";
  }
}

function productUrl(product, index) {
  const slug = product.slug || `local-${index}`;
  return `product.html?slug=${encodeURIComponent(slug)}`;
}

async function loadBackendProducts() {
  try {
    const response = await fetch(`${NOVA_API_BASE_URL}/api/products`);
    if (!response.ok) throw new Error(`Backend returned ${response.status}`);
    const remoteProducts = await response.json();
    if (!Array.isArray(remoteProducts) || !remoteProducts.length) return false;

    products = remoteProducts.map((product, index) => ({
      ...product,
      name: String(product.name || `Product ${index + 1}`),
      slug: String(product.slug || product.name || `backend-${index + 1}`),
      cat: String(product.cat || 'Lifestyle'),
      price: Number(product.price || 0),
      old: Number(product.old || product.price || 0),
      img: safeProductImage(product.img),
      tag: String(product.tag || 'NEW'),
      rating: String(product.rating || '4.8'),
      desc: String(product.desc || ''),
    }));

    refreshProductSurfaces();
    return true;
  } catch (error) {
    console.warn('Backend catalog unavailable; trying Sanity next.', error);
    return false;
  }
}

async function loadSanityProducts() {
  const { projectId, dataset, apiVersion } = NOVA_SANITY;
  if (!projectId || projectId === "YOUR_SANITY_PROJECT_ID") return;
  if (!/^[a-z0-9]+$/i.test(projectId) || !/^[a-z0-9_-]+$/i.test(dataset)) return;

  const query = `*[_type == "product" && defined(name) && defined(slug.current)] | order(sortOrder asc, _createdAt asc) { _id, name, "slug": slug.current, "cat": category, price, "old": compareAtPrice, "img": coalesce(image.asset->url, externalImageUrl), tag, rating, "desc": description }`;
  const endpoint = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(endpoint, { headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error(`Sanity returned ${response.status}`);
    const payload = await response.json();
    const remoteProducts = (payload.result || [])
      .map((item) => ({
        id: item._id,
        name: String(item.name || ""),
        slug: String(item.slug || ""),
        cat: String(item.cat || "Lifestyle"),
        price: Number(item.price),
        old: Number(item.old ?? item.price),
        img: safeProductImage(item.img),
        tag: String(item.tag || "NEW"),
        rating: String(item.rating ?? "5.0"),
        desc: String(item.desc || ""),
      }))
      .filter((product) => product.name && product.slug && product.price > 0);

    if (!remoteProducts.length) return;
    products = remoteProducts;
    refreshProductSurfaces();
  } catch (error) {
    console.warn("Sanity catalog unavailable; using the local product catalog.", error);
  }
}

function refreshProductSurfaces() {
  const categoryGrid = document.getElementById("categoryProductGrid");
  if (categoryGrid) {
    initCategoryPage();
  } else if (document.getElementById("productGrid")) {
    const requestedCategory = new URLSearchParams(location.search).get("cat");
    const activeFilter = requestedCategory ||
      document.querySelector(".shop-filter.active")?.textContent.trim() ||
      document.querySelector(".cat.active strong")?.textContent.trim() ||
      "All";
    const category = activeFilter.startsWith("Limited") ? "Limited" : activeFilter;
    render(category === "All" ? products : products.filter((product) => product.cat === category));
  }

  if (document.body.classList.contains("product-body")) initProductPage();
}

function loadBag() {
  try {
    const saved = JSON.parse(localStorage.getItem("novaBag") || "[]");
    bag = Array.isArray(saved) ? saved : [];
  } catch {
    bag = [];
  }
}
function saveBag() {
  localStorage.setItem("novaBag", JSON.stringify(bag));
}
function loadUser() {
  try {
    const saved = JSON.parse(localStorage.getItem("novaUser") || "{}");
    loggedInUser = { email: saved.email || "", name: saved.name || "" };
  } catch {
    loggedInUser = { email: "", name: "" };
  }
}
function saveUser() {
  localStorage.setItem("novaUser", JSON.stringify(loggedInUser));
}
const NOVA_CURRENCIES = {
  PKR: { rate: 1, symbol: "Rs", locale: "en-PK", decimals: 0 },
  USD: { rate: 0.00358, symbol: "$", locale: "en-US", decimals: 2 },
  GBP: { rate: 0.00265, symbol: "£", locale: "en-GB", decimals: 2 },
  EUR: { rate: 0.00304, symbol: "€", locale: "de-DE", decimals: 2 },
  AED: { rate: 0.01315, symbol: "AED", locale: "en-AE", decimals: 2 },
  SAR: { rate: 0.01344, symbol: "SAR", locale: "en-SA", decimals: 2 },
  CAD: { rate: 0.00485, symbol: "CA$", locale: "en-CA", decimals: 2 },
  AUD: { rate: 0.00548, symbol: "A$", locale: "en-AU", decimals: 2 },
};
let novaCurrency = localStorage.getItem("novaCurrency") || "PKR";
if (!NOVA_CURRENCIES[novaCurrency]) novaCurrency = "PKR";
function money(n) {
  const c = NOVA_CURRENCIES[novaCurrency] || NOVA_CURRENCIES.PKR;
  const value = Number(n || 0) * c.rate;
  return `${c.symbol} ${value.toLocaleString(c.locale, { minimumFractionDigits: c.decimals, maximumFractionDigits: c.decimals })}`;
}
function initCurrencySwitcher() {
  document.querySelectorAll("[data-currency-switcher]").forEach((wrap) => {
    const trigger = wrap.querySelector(".currency-trigger");
    const menu = wrap.querySelector(".currency-menu");
    const label = wrap.querySelector("[data-currency-label]");
    if (!trigger || !menu) return;
    if (label) label.textContent = novaCurrency;
    menu.querySelectorAll("[data-currency]").forEach((btn) => {
      btn.classList.toggle("selected", btn.dataset.currency === novaCurrency);
      btn.onclick = (e) => {
        e.stopPropagation();
        const next = btn.dataset.currency;
        if (!NOVA_CURRENCIES[next]) return;
        localStorage.setItem("novaCurrency", next);
        location.reload();
      };
    });
    trigger.onclick = (e) => {
      e.stopPropagation();
      const open = wrap.classList.toggle("open");
      trigger.setAttribute("aria-expanded", open ? "true" : "false");
    };
  });
  document.addEventListener("click", () => document.querySelectorAll(".currency-switcher.open").forEach(w => w.classList.remove("open")), { once: true });
}

function render(list = products) {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  grid.innerHTML = list
    .map((p) => {
      const i = products.indexOf(p);
      const href = productUrl(p, i);
      const discount =
        p.old > p.price ? Math.round((1 - p.price / p.old) * 100) : 0;

      return `<article class="product-card product-3d">
      <div class="product-card-media">
        <span class="tag">${escapeHtml(p.tag)}</span>
        <button class="heart" onclick="toggleWishlist(this,event)" aria-label="Wishlist">
          <i class="bi bi-heart"></i>
        </button>
        <a class="product-visual product-link" href="${href}" aria-label="Open ${escapeHtml(p.name)}">
          <img src="${escapeHtml(safeProductImage(p.img))}" alt="${escapeHtml(p.name)}" loading="lazy" decoding="async" width="560" height="560" onerror="this.onerror=null;this.src='assest/nova-sneaker-fallback.svg';">
        </a>
        <div class="image-hover-actions">
          <a href="${href}"><i class="bi bi-eye"></i> View Product</a>
          <button onclick="addToBag(${i},1)"><i class="bi bi-bag-plus"></i> Add to Cart</button>
        </div>
      </div>

      <div class="product-info">
        <div class="product-card-topline">
          <span>${escapeHtml(p.cat)}</span>
          <span>${p.tag === "NEW" ? "NEW ARRIVAL" : "NOVA EDIT"}</span>
        </div>

        <a href="${href}" class="product-name-link">
          <h4>${escapeHtml(p.name)}</h4>
        </a>

        <p class="product-description">${escapeHtml(p.desc)}</p>

        <div class="product-rating-row">
          <span class="stars">★★★★★</span>
          <span class="rating-number">${escapeHtml(p.rating)}</span>
          <span class="review-count">128 reviews</span>
        </div>

        <div class="product-price-row">
          <span class="price">${money(p.price)}</span>
          <span class="old">${money(p.old)}</span>
          ${discount ? `<span class="discount-pill">-${discount}%</span>` : ""}
        </div>

        <div class="product-actions">
          <a class="view-product-btn" href="${href}">
            View Product <i class="bi bi-arrow-up-right"></i>
          </a>
          <button class="add-cart-btn" onclick="addToBag(${i},1)">
            Add to Cart <i class="bi bi-bag-plus"></i>
          </button>
        </div>
      </div>
    </article>`;
    })
    .join("");

  bind3D();
}

function toggleWishlist(btn, e) {
  if (e) e.preventDefault();
  btn.classList.toggle("liked");
  const icon = btn.querySelector("i");
  if (icon)
    icon.className = btn.classList.contains("liked")
      ? "bi bi-heart-fill"
      : "bi bi-heart";
}

function filterProducts(cat, btn) {
  document
    .querySelectorAll(".cat")
    .forEach((x) => x.classList.remove("active"));
  if (btn) btn.classList.add("active");
  const list = cat === "All" ? products : products.filter((p) => p.cat === cat);
  render(list);
  const counter = document.getElementById("shopCount");
  if (counter)
    counter.textContent = `${list.length} ${list.length === 1 ? "style" : "styles"} shown`;
  document
    .getElementById("shop")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}
function bind3D() {
  document.querySelectorAll(".product-3d").forEach((card) => {
    card.onmousemove = (e) => {
      const r = card.getBoundingClientRect(),
        x = e.clientX - r.left - r.width / 2,
        y = e.clientY - r.top - r.height / 2;
      card.style.transform = `perspective(1000px) rotateX(${(-y / r.height) * 5}deg) rotateY(${(x / r.width) * 7}deg) translateY(-6px)`;
    };
    card.onmouseleave = () => (card.style.transform = "");
  });
}

function openBag() {
  const el = document.getElementById("bag");
  if (el && window.bootstrap) new bootstrap.Offcanvas(el).show();
}
function addToBag(i, qty = 1) {
  for (let n = 0; n < qty; n++) bag.push({ ...products[i] });
  saveBag();
  updateBag();
  showCartToast(products[i], qty);
  openBag();
}
function showCartToast(p, qty) {
  const old = document.getElementById("novaCartToast");
  if (old) old.remove();
  const toast = document.createElement("div");
  toast.id = "novaCartToast";
  toast.className = "nova-cart-toast";
  toast.innerHTML = `<span class="toast-check"><i class="bi bi-check2"></i></span><div><b>${p.name}</b><small>${qty} × added to your cart</small></div><a href="checkout.html">Checkout</a>`;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
function updateBag() {
  const items = document.getElementById("bagItems");
  if (items)
    items.innerHTML = bag.length
      ? bag
          .map(
            (p, idx) =>
              `<div class="bag-line"><img src="${p.img}" alt="" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=84';"><div><b>${p.name}</b><small>${p.cat}</small></div><strong>${money(p.price)}</strong><button onclick="removeBag(${idx})"><i class="bi bi-x"></i></button></div>`,
          )
          .join("")
      : '<p class="text-secondary">Your bag is empty.</p>';
  const subtotal = bag.reduce((s, p) => s + p.price, 0);
  const sub = document.getElementById("subtotal");
  if (sub) sub.textContent = money(subtotal);
  const count = document.getElementById("bagCount");
  if (count) count.textContent = bag.length;
  const drawerCount = document.getElementById("bagDrawerCount");
  if (drawerCount)
    drawerCount.textContent =
      bag.length + " " + (bag.length === 1 ? "item" : "items");
  const pcount = document.getElementById("productBagCount");
  if (pcount) pcount.textContent = bag.length;
}
function removeBag(i) {
  bag.splice(i, 1);
  saveBag();
  updateBag();
}
function checkout() {
  if (!bag.length) {
    alert("Your bag is empty. Add a pair before checkout.");
    return;
  }
  window.location.href = "checkout.html";
}

function ensureSearchPanel() {
  let p = document.getElementById("searchPanel");
  if (!p) {
    p = document.createElement("div");
    p.className = "search-panel";
    p.id = "searchPanel";
    p.innerHTML = `<button class="search-close" type="button" aria-label="Close search" onclick="closeSearch()"><i class="bi bi-x-lg"></i></button><div class="eyebrow">SEARCH NOVA</div><input id="searchInput" autocomplete="off" oninput="searchProducts()" placeholder="Search sneakers..."/><div id="searchResults"></div>`;
    document.body.appendChild(p);
  }
  if (!p.dataset.bound) {
    p.dataset.bound = "1";
    p.addEventListener("click", (e) => { if (e.target === p) closeSearch(); });
    p.addEventListener("keydown", (e) => { if (e.key === "Escape") closeSearch(); });
  }
  return p;
}
function positionMobileSearchPanel() {
  const p = document.getElementById("searchPanel");
  if (!p || window.innerWidth > 767) return;
  const header = document.querySelector(".site-header.shared-site-header, .site-header");
  if (!header) return;
  const rect = header.getBoundingClientRect();
  const top = Math.max(8, Math.round(rect.bottom + 8));
  document.documentElement.style.setProperty("--nova-search-top", top + "px");
}
function openSearch() {
  const p = ensureSearchPanel();
  // Keep the search UI outside the navbar stacking/overflow context.
  if (p.parentElement !== document.body) document.body.appendChild(p);
  positionMobileSearchPanel();
  p.classList.add("show");
  document.body.classList.add("nova-search-open");
  requestAnimationFrame(() => {
    positionMobileSearchPanel();
    document.getElementById("searchInput")?.focus();
  });
}
function closeSearch() {
  document.getElementById("searchPanel")?.classList.remove("show");
  document.body.classList.remove("nova-search-open");
}
window.addEventListener("resize", positionMobileSearchPanel, { passive: true });
function searchProducts() {
  const q = (document.getElementById("searchInput")?.value || "").toLowerCase();
  const found = products.filter((p) =>
    (p.name + " " + p.cat).toLowerCase().includes(q),
  );
  const r = document.getElementById("searchResults");
  if (!r) return;
  r.innerHTML = found.length
    ? found
        .map((p) => {
          const i = products.indexOf(p);
          return `<a class="search-result" href="${productUrl(p, i)}"><span>${escapeHtml(p.name)}<small>${escapeHtml(p.cat)}</small></span><b>${money(p.price)}</b></a>`;
        })
        .join("")
    : '<p class="mt-4 text-secondary">No NOVA pair found. Try “running”, “women” or “high”.</p>';
}
function subscribe(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const input = form.querySelector('input[type="email"]');
  const email = input ? input.value.trim() : "";
  if (!email) return;
  localStorage.setItem("novaClubEmail", email);
  const old = form.querySelector(".subscribe-success");
  if (old) old.remove();
  const msg = document.createElement("div");
  msg.className = "subscribe-success";
  msg.innerHTML =
    '<i class="bi bi-check-circle-fill"></i><span><b>Welcome to the NOVA Club.</b><small>Your email has been saved for this demo.</small></span>';
  form.appendChild(msg);
  if (input) input.value = "";
}

function initIndexFaq(){
  const lists = document.querySelectorAll('.faq-list');
  if (!lists.length) return;

  lists.forEach((list) => {
    list.addEventListener('click', (event) => {
      const btn = event.target.closest('.faq-question');
      if (!btn || !list.contains(btn)) return;
      event.preventDefault();

      const item = btn.closest('.faq-item');
      if (!item) return;
      const shouldOpen = !item.classList.contains('active');

      list.querySelectorAll('.faq-item.active, .faq-item.open').forEach((other) => {
        if (other === item) return;
        other.classList.remove('active', 'open');
        const otherBtn = other.querySelector('.faq-question');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
      });

      item.classList.toggle('active', shouldOpen);
      item.classList.toggle('open', shouldOpen);
      btn.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
    });

    // Keep keyboard interaction accessible.
    list.querySelectorAll('.faq-question').forEach((btn) => {
      btn.setAttribute('aria-controls', btn.nextElementSibling?.id || '');
    });
  });
}

function toggleFaq(btn){
  if(!btn) return false;
  const item = btn.closest('.faq-item');
  if(!item) return false;
  const list = item.closest('.faq-list');
  const willOpen = !item.classList.contains('open');
  if(list){
    list.querySelectorAll('.faq-item.open').forEach(other => {
      other.classList.remove('open');
      const q = other.querySelector('.faq-q');
      if(q) q.setAttribute('aria-expanded','false');
    });
  }
  item.classList.toggle('open', willOpen);
  btn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
  return false;
}

function quickView(i) {
  const p = products[i],
    q = document.getElementById("quickContent");
  if (!q) return;
  q.innerHTML = `<div class="col-md-6"><div class="quick-photo" style="background-image:url('${escapeHtml(safeProductImage(p.img))}')"></div></div><div class="col-md-6 quick-info"><div class="eyebrow">${escapeHtml(p.cat)} / ${escapeHtml(p.tag)}</div><h2>${escapeHtml(p.name)}</h2><div class="stars mt-3">★★★★★ <span>${escapeHtml(p.rating)}</span></div><h5 class="mt-4">${money(p.price)}</h5><p class="mt-4">${escapeHtml(p.desc)}</p><div class="eyebrow mt-4 mb-2">SELECT SIZE</div><div class="size-row"><button>40</button><button>41</button><button>42</button><button>43</button><button>44</button></div><a class="primary-btn mt-4" href="${productUrl(p, i)}">Open Product <i class="bi bi-arrow-up-right"></i></a></div>`;
  if (window.bootstrap)
    new bootstrap.Modal(document.getElementById("quickModal")).show();
}

function positionAccountMenu(menu, button) {
  if (!menu || !button) return;
  const rect = button.getBoundingClientRect();
  const gap = 10;
  const menuWidth = Math.min(330, window.innerWidth - 24);
  let left = rect.right - menuWidth;
  left = Math.max(12, Math.min(left, window.innerWidth - menuWidth - 12));
  let top = rect.bottom + gap;
  const maxH = Math.max(180, window.innerHeight - top - 12);
  if (top + 180 > window.innerHeight) top = Math.max(12, window.innerHeight - Math.min(430, maxH) - 12);
  menu.style.setProperty('--account-left', `${left}px`);
  menu.style.setProperty('--account-top', `${top}px`);
  menu.style.setProperty('--account-width', `${menuWidth}px`);
  menu.style.maxHeight = `${Math.max(180, window.innerHeight - top - 12)}px`;
}

function portalAccountMenu() {
  const menu = document.getElementById('accountMenu');
  if (menu && menu.parentElement !== document.body) {
    document.body.appendChild(menu);
    menu.classList.add('account-menu-portal');
  }
  return menu;
}

function toggleAccountMenu(e) {
  e.preventDefault();
  e.stopPropagation();
  const button = e.currentTarget || e.target.closest?.('.account-icon');
  const menu = portalAccountMenu();
  if (!menu) return;
  const willOpen = !menu.classList.contains('show');
  if (willOpen && button) positionAccountMenu(menu, button);
  menu.classList.toggle('show', willOpen);
  button?.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
}

document.addEventListener('click', (e) => {
  const menu = document.getElementById('accountMenu');
  const wrap = e.target.closest?.('.account-menu-wrap');
  const insideMenu = e.target.closest?.('#accountMenu');
  if (menu?.classList.contains('show') && !wrap && !insideMenu) {
    menu.classList.remove('show');
    document.querySelector('.account-icon')?.setAttribute('aria-expanded', 'false');
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  const menu = document.getElementById('accountMenu');
  if (menu?.classList.contains('show')) {
    menu.classList.remove('show');
    document.querySelector('.account-icon')?.setAttribute('aria-expanded', 'false');
  }
});
window.addEventListener('resize', () => {
  const menu = document.getElementById('accountMenu');
  const button = document.querySelector('.account-icon');
  if (menu?.classList.contains('show') && button) positionAccountMenu(menu, button);
});
window.addEventListener('scroll', () => {
  const menu = document.getElementById('accountMenu');
  const button = document.querySelector('.account-icon');
  if (menu?.classList.contains('show') && button) positionAccountMenu(menu, button);
}, {passive:true});

document.addEventListener('DOMContentLoaded', () => {
  portalAccountMenu();
});

function toggleInnerNav(button) {
  const nav = document.getElementById("innerNav");
  if (!nav) return;
  const open = nav.classList.toggle("show");
  button.setAttribute("aria-expanded", open ? "true" : "false");
  button.innerHTML = `<i class="bi bi-${open ? "x-lg" : "list"}"></i>`;
}
function initInnerHeader() {
  const header = document.querySelector(".inner-shop-header");
  if (!header) return;
  const nav = header.querySelector("nav");
  if (!nav) return;
  nav.classList.add("inner-nav");
  nav.id = "innerNav";
  let button = header.querySelector(".inner-menu-toggle");
  if (!button) {
    button = document.createElement("button");
    button.className = "inner-menu-toggle";
    button.type = "button";
    button.setAttribute("aria-label", "Open menu");
    button.setAttribute("aria-expanded", "false");
    button.onclick = () => toggleInnerNav(button);
    button.innerHTML = '<i class="bi bi-list"></i>';
    header.insertBefore(button, nav);
  }
  nav
    .querySelectorAll("a")
    .forEach((link) =>
      link.addEventListener("click", () => nav.classList.remove("show")),
    );
}
function initSharedChrome() {
  const path = location.pathname.split('/').pop().toLowerCase();
  const isHome = path === 'index.html' || path === '';

  if (!isHome) {
    document.querySelectorAll('.topbar, .site-header, .inner-shop-header, .checkout-header').forEach(el => el.remove());

    const topbar = document.createElement('div');
    topbar.className = 'topbar';
    topbar.innerHTML = `<div class="topbar-left"><span><i class="bi bi-truck"></i> Free Shipping on Orders Above Rs 999</span><span class="divider"></span><span>30-Day Easy Returns</span></div><div class="top-right"><a class="track-order-link" href="track-order.html">Track Order</a><span>|</span><div class="currency-switcher" data-currency-switcher><button class="currency-trigger" type="button" aria-expanded="false" aria-haspopup="listbox"><span data-currency-label>${novaCurrency}</span><i class="bi bi-chevron-down"></i></button><div class="currency-menu" role="listbox" aria-label="Currency"><button type="button" data-currency="PKR">PKR · Pakistan</button><button type="button" data-currency="USD">USD · United States</button><button type="button" data-currency="GBP">GBP · United Kingdom</button><button type="button" data-currency="EUR">EUR · Europe</button><button type="button" data-currency="AED">AED · UAE</button><button type="button" data-currency="SAR">SAR · Saudi Arabia</button><button type="button" data-currency="CAD">CAD · Canada</button><button type="button" data-currency="AUD">AUD · Australia</button></div></div></div>`;

    const header = document.createElement('header');
    header.className = 'site-header shared-site-header';
    header.id = 'navbar';
    header.innerHTML = `<div class="container header-inner">
      <a aria-label="NOVA home" class="brand-logo" href="index.html"><img alt="NOVA logo" src="assest/Nova-Logo-Clean.png?v=3"/></a>
      <button aria-label="Menu" class="mobile-toggle" data-bs-target="#mainNav" data-bs-toggle="collapse" type="button"><i class="bi bi-list"></i></button>
      <nav class="main-nav collapse navbar-collapse" id="mainNav">
        <ul class="nav-list">
          <li><a href="index.html">Home</a></li>
          <li><a href="shop.html">Shop</a></li>
          <li class="nav-category-item"><a class="nav-category-trigger" href="categories.html" aria-haspopup="true" aria-expanded="false">Categories <i class="bi bi-chevron-down"></i></a>
            <div class="category-mega-menu" role="menu" aria-label="NOVA categories">
              <div class="category-mega-head"><span class="eyebrow">NOVA / SHOP BY WORLD</span><a href="categories.html">View all categories <i class="bi bi-arrow-up-right"></i></a></div>
              <div class="category-mega-grid">
                <a href="category-men.html" class="category-mega-card" role="menuitem"><span class="mega-index">01</span><span class="mega-thumb"><img src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=82" alt="Men sneakers"></span><span class="mega-copy"><b>Men</b><small>Modern essentials</small></span><i class="bi bi-arrow-up-right"></i></a>
                <a href="category-women.html" class="category-mega-card" role="menuitem"><span class="mega-index">02</span><span class="mega-thumb"><img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=84" alt="Women sneakers"></span><span class="mega-copy"><b>Women</b><small>Soft power</small></span><i class="bi bi-arrow-up-right"></i></a>
                <a href="category-running.html" class="category-mega-card" role="menuitem"><span class="mega-index">03</span><span class="mega-thumb"><img src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=82" alt="Running sneakers"></span><span class="mega-copy"><b>Running</b><small>Move further</small></span><i class="bi bi-arrow-up-right"></i></a>
                <a href="category-basketball.html" class="category-mega-card" role="menuitem"><span class="mega-index">04</span><span class="mega-thumb"><img src="https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=900&q=82" alt="Basketball sneakers"></span><span class="mega-copy"><b>Basketball</b><small>Own the court</small></span><i class="bi bi-arrow-up-right"></i></a>
                <a href="category-lifestyle.html" class="category-mega-card" role="menuitem"><span class="mega-index">05</span><span class="mega-thumb"><img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=82" alt="Lifestyle sneakers"></span><span class="mega-copy"><b>Lifestyle</b><small>Everyday icon</small></span><i class="bi bi-arrow-up-right"></i></a>
              </div>
            </div>
          </li>
          <li><a href="about.html">Our Story</a></li>
          <li><a href="journal.html">Journal</a></li>
          <li><a href="faq.html">FAQ</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
      <div class="nav-tools">
        <button aria-label="Search" class="search-trigger" onclick="openSearch()" type="button"><span>Search for sneakers...</span><i class="bi bi-search"></i></button>
        <div class="account-menu-wrap">
          <button aria-label="Account" aria-expanded="false" class="account-icon" onclick="toggleAccountMenu(event)" type="button"><i class="bi bi-person"></i></button>
          <div class="account-menu" id="accountMenu">
            <div class="account-menu-head"><span class="account-avatar"><i class="bi bi-person"></i></span><div><b id="accountMenuTitle">Welcome to NOVA</b><small>Luxury starts here.</small></div></div>
            <a href="auth.html?mode=signin"><i class="bi bi-box-arrow-in-right"></i><span><b>Sign in</b><small>Access your NOVA account</small></span></a>
            <a href="auth.html?mode=signup"><i class="bi bi-person-plus"></i><span><b>Sign up</b><small>Create a new account</small></span></a>
          </div>
        </div>
        <button aria-label="Bag" class="bag-icon" onclick="openBag()" type="button"><i class="bi bi-bag"></i><b id="bagCount">0</b></button>
      </div>
    </div>`;

    document.body.insertBefore(topbar, document.body.firstChild);
    document.body.insertBefore(header, topbar.nextSibling);
    const toggle = header.querySelector('.mobile-toggle');
    const nav = header.querySelector('.main-nav');
    toggle.onclick = () => { const open = nav.classList.toggle('show'); toggle.setAttribute('aria-expanded', open ? 'true' : 'false'); toggle.innerHTML = `<i class="bi bi-${open ? 'x-lg' : 'list'}"></i>`; };
    header.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('show')));
    header.querySelectorAll('.main-nav a').forEach(a => {
      const href = a.getAttribute('href') || '';
      if ((path === 'shop.html' && href === 'shop.html') || (path === 'categories.html' && href === 'categories.html') || (path === 'about.html' && href === 'about.html') || (path === 'faq.html' && href === 'faq.html') || (path === 'contact.html' && href === 'contact.html') || (path === 'journal.html' && href === 'journal.html') || (path === 'track-order.html' && href === 'track-order.html') || (path.startsWith('category-') && href === 'categories.html')) a.classList.add('active');
    });
  }

  document.querySelectorAll('footer#contact, footer[data-shared-footer]').forEach(el => el.remove());
  if (!document.querySelector('footer[data-shared-footer]')) {
    const footer = document.createElement('footer');
    footer.id = 'contact'; footer.dataset.sharedFooter = 'true';
    footer.innerHTML = `<div class="container footer-main">
      <div class="footer-brand"><a class="footer-logo" href="index.html" aria-label="NOVA home"><img src="assest/Nova-Logo-Clean.png?v=3" alt="NOVA logo"></a><p>More than shoes. It's a lifestyle built around movement, comfort and considered design.</p><div class="socials"><a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a><a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a><a href="#" aria-label="X"><i class="bi bi-twitter-x"></i></a><a href="#" aria-label="YouTube"><i class="bi bi-youtube"></i></a><a href="#" aria-label="Pinterest"><i class="bi bi-pinterest"></i></a></div></div>
      <div><h6>Shop</h6><a href="shop.html">All Products</a><a href="shop.html#new">New Arrivals</a><a href="shop.html#best">Best Sellers</a><a href="shop.html#limited">Limited Edition</a><a href="shop.html#sale">Sale</a></div>
      <div><h6>Categories</h6><a href="category-men.html">Men</a><a href="category-women.html">Women</a><a href="category-running.html">Running</a><a href="category-basketball.html">Basketball</a><a href="category-lifestyle.html">Lifestyle</a></div>
      <div><h6>About NOVA</h6><a href="about.html">Our Story</a><a href="about.html#standard">The NOVA Standard</a><a href="journal.html">Journal</a><a href="about.html#careers">Careers</a><a href="contact.html">Contact Us</a></div>
      <div><h6>Customer Care</h6><a href="track-order.html">Track Order</a><a href="return-policy.html">Return Policy</a><a href="refund-policy.html">Refund Policy</a><a href="cancelation-policy.html">Cancellation Policy</a><a href="faq.html">FAQ</a></div>
      <div><h6>Get in Touch</h6><a href="mailto:${NOVA_CONTACT_EMAIL}">${NOVA_CONTACT_EMAIL}</a><a href="tel:+923208131452">+92 320 8131452</a><p class="footer-note">Mon–Sat · 10:00–18:00 PKT</p><div class="payments" aria-label="Accepted payment methods"><img src="assest/payment-visa.png" alt="Visa"><img src="assest/payment-paypak.png" alt="PayPak"><img src="assest/payment-jazzcash.png" alt="JazzCash"><img src="assest/payment-easypaisa.png" alt="EasyPaisa"></div></div>
    </div><div class="footer-showcase container"><div><span class="eyebrow">NOVA / PRIVATE EDIT</span><h3>Stay close to<br><em>the next drop.</em></h3></div><div class="footer-showcase-copy"><p>Sign up for launch notes, new colourways, limited releases and styling stories — curated, not crowded.</p><a href="index.html#newsletter" class="footer-cta">Join the NOVA Club <i class="bi bi-arrow-up-right"></i></a></div><div class="footer-mark">N</div></div><div class="footer-bottom container"><span>COPYRIGHT 2026 | ALL RIGHTS RESERVED | POWERED BY <a href="https://shari-q.github.io/Portfolio/" target="_blank" rel="noreferrer">SHARIQ</a></span></div>`;
    document.body.appendChild(footer);
  }
}

function submitAuthPage(e, mode) {
  e.preventDefault();
  if (mode === "signin") {
    const email = document.getElementById("loginEmailPage").value.trim();
    const pass = document.getElementById("loginPasswordPage").value.trim();
    if (!email || !pass) return;
    loggedInUser = {
      email,
      name: email.includes("@") ? email.split("@")[0] : email,
    };
    saveUser();
    localStorage.setItem("novaJustSignedIn", "1");
    window.location.href = "index.html";
  } else {
    const name = document.getElementById("signupNamePage").value.trim(),
      email = document.getElementById("signupEmailPage").value.trim(),
      p1 = document.getElementById("signupPasswordPage").value,
      p2 = document.getElementById("signupConfirmPage").value;
    if (p1 !== p2) {
      alert("Passwords do not match.");
      return;
    }
    loggedInUser = { name, email };
    saveUser();
    localStorage.setItem("novaJustSignedIn", "1");
    window.location.href = "index.html";
  }
}
function togglePassword(id, btn) {
  const input = document.getElementById(id);
  if (!input) return;
  input.type = input.type === "password" ? "text" : "password";
  btn.innerHTML = `<i class="bi bi-${input.type === "password" ? "eye-slash" : "eye"}"></i>`;
}
function refreshCaptcha(btn) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let s = "";
  for (let i = 0; i < 4; i++)
    s += chars[Math.floor(Math.random() * chars.length)];
  const span = btn.previousElementSibling;
  if (span) span.textContent = s;
}
function initAuthPage() {
  const params = new URLSearchParams(location.search);
  const mode = params.get("mode") === "signup" ? "signup" : "signin";
  document
    .querySelectorAll(".auth-tab-page")
    .forEach((b) => b.classList.toggle("active", b.dataset.mode === mode));
  document
    .querySelectorAll(".auth-form-page")
    .forEach((f) =>
      f.classList.toggle("active", f.id.toLowerCase().includes(mode)),
    );
  document.querySelectorAll(".auth-tab-page").forEach(
    (b) =>
      (b.onclick = () => {
        document
          .querySelectorAll(".auth-tab-page")
          .forEach((x) => x.classList.remove("active"));
        b.classList.add("active");
        document
          .querySelectorAll(".auth-form-page")
          .forEach((f) =>
            f.classList.toggle(
              "active",
              f.id.toLowerCase().includes(b.dataset.mode),
            ),
          );
      }),
  );
}

function initProductPage() {
  const params = new URLSearchParams(location.search);
  const slug = params.get("slug");
  const slugIndex = slug ? products.findIndex((product) => product.slug === slug) : -1;
  const requestedIndex = slugIndex >= 0 ? slugIndex : parseInt(params.get("id") || "0", 10) || 0;
  const i = Math.max(0, Math.min(products.length - 1, requestedIndex));
  currentProductIndex = i;
  const p = products[i];
  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };
  const img = document.getElementById("productMainImage");
  if (img) img.style.backgroundImage = `url('${safeProductImage(p.img)}')`;
  set("productName", p.name);
  set("productCategory", `${p.cat} / ${p.tag}`);
  set("productRating", p.rating);
  set("productPrice", money(p.price));
  set("productOld", money(p.old));
  set("productTag", p.tag);
  set("productDiscount", p.tag.includes("%") ? p.tag : "LIMITED");
  set("productDescription", p.desc);
  updateBag();
  document.querySelectorAll("#sizeOptions button").forEach(
    (b) =>
      (b.onclick = () => {
        document
          .querySelectorAll("#sizeOptions button")
          .forEach((x) => x.classList.remove("selected"));
        b.classList.add("selected");
      }),
  );
}
function changeQty(n) {
  currentQty = Math.max(1, currentQty + n);
  const el = document.getElementById("qtyValue");
  if (el) el.textContent = currentQty;
}
function addCurrentProduct() {
  const p = products[currentProductIndex];
  for (let n = 0; n < currentQty; n++) bag.push({ ...p });
  saveBag();
  updateBag();
  showCartToast(p, currentQty);
  currentQty = 1;
  const el = document.getElementById("qtyValue");
  if (el) el.textContent = "1";
}
function buyCurrentProduct() {
  for (let n = 0; n < currentQty; n++)
    bag.push({ ...products[currentProductIndex] });
  saveBag();
  window.location.href = "checkout.html";
}

function initCheckout() {
  loadBag();
  const email = localStorage.getItem("novaUser");
  if (email) {
    try {
      const u = JSON.parse(email);
      const e = document.getElementById("checkoutEmailPage");
      if (e) e.value = u.email || "";
    } catch {}
  }
  const items = document.getElementById("checkoutItems");
  if (!items) return;
  if (!bag.length) {
    items.innerHTML =
      '<div class="empty-checkout"><i class="bi bi-bag"></i><h3>Your bag is empty.</h3><p>Choose a NOVA pair before continuing.</p><a href="index.html#shop">Return to shop</a></div>';
    return;
  }
  items.innerHTML = bag
    .map(
      (p, i) =>
        `<div class="checkout-item-page"><img src="${p.img}" alt="" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=84';"><div><b>${p.name}</b><span>${p.cat} · Premium</span><small>${money(p.price)}</small></div><button onclick="removeCheckoutItem(${i})"><i class="bi bi-x"></i></button></div>`,
    )
    .join("");
  updateCheckoutTotals();
}
function removeCheckoutItem(i) {
  bag.splice(i, 1);
  saveBag();
  initCheckout();
  updateBag();
}
function applyCoupon() {
  const input = document.getElementById("couponInput");
  if (!input) return;
  if (input.value.trim().toUpperCase() === "NOVA10") {
    couponApplied = true;
    alert("NOVA10 applied — 10% off.");
  } else alert("Try code NOVA10 for a demo discount.");
  updateCheckoutTotals();
}
function updateCheckoutTotals() {
  const sub = bag.reduce((s, p) => s + p.price, 0),
    shipping = sub ? 0 : 0,
    discount = couponApplied ? Math.round(sub * 0.1) : 0,
    total = sub + shipping - discount;
  const set = (id, v) => {
    const e = document.getElementById(id);
    if (e) e.textContent = money(v);
  };
  set("checkoutSubtotal", sub);
  set("checkoutShipping", shipping);
  set("checkoutDiscount", discount ? "- " + money(discount) : "- Rs 0");
  set("checkoutTotal", total);
}
function placeOrder(e) {
  if (e) e.preventDefault();
  if (!bag.length) { alert("Your bag is empty."); return; }
  const form = document.getElementById("checkoutForm");
  if (form && !form.checkValidity()) { form.reportValidity(); return; }

  const email = document.getElementById("checkoutEmailPage")?.value.trim() || "";
  const customerName = document.querySelector('#checkoutForm input[placeholder="Full name"]')?.value.trim() || loggedInUser.name || "Customer";
  const phone = document.querySelector('#checkoutForm input[type="tel"]')?.value.trim() || "";
  const address = document.querySelector('#checkoutForm textarea')?.value.trim() || "";
  const city = document.querySelector('#checkoutForm input[placeholder="Karachi"]')?.value.trim() || "";
  const payment = document.querySelector('input[name="paymentMethod"]:checked')?.value || "Cash on Delivery";
  const walletType = document.getElementById('walletType')?.value || '';
  const walletNumber = document.getElementById('walletNumber')?.value.trim() || '';
  if (payment === 'Easypaisa / JazzCash' && !walletNumber) { alert('Please enter your mobile wallet number.'); document.getElementById('walletNumber')?.focus(); return; }
  const coupon = document.getElementById('couponInput')?.value.trim() || "";
  const subtotal = bag.reduce((sum,p)=>sum+p.price,0);
  const shipping = subtotal >= 999 ? 0 : 250;
  const discountText = document.getElementById('checkoutDiscount')?.textContent || '- Rs 0';
  const discount = Number(discountText.replace(/[^0-9.]/g,'')) || 0;
  const total = Math.max(0, subtotal + shipping - discount);
  const orderId = 'NOVA-' + Date.now().toString(36).toUpperCase();
  const items = bag.map((p,i)=>`${i+1}. ${p.name} | ${p.cat} | ${money(p.price)}`).join('\n');

  loggedInUser.email = email; loggedInUser.name = customerName; saveUser();
  const order = { orderId, customerName, email, phone, address, city, payment, walletType, walletNumber, coupon, items: bag.map(p=>({name:p.name,cat:p.cat,price:p.price})), total, createdAt:new Date().toISOString() };
  localStorage.setItem('novaLastOrder', JSON.stringify(order));
  localStorage.setItem('novaOrderPlaced','1');

  const subject = `NOVA Order ${orderId} — ${customerName}`;
  const body = `NEW NOVA ORDER\n\nOrder ID: ${orderId}\nCustomer: ${customerName}\nCustomer email: ${email}\nPhone: ${phone}\nCity: ${city}\nAddress: ${address}\nPayment method: ${payment}\nWallet: ${walletType ? walletType + ' · ' + walletNumber : 'N/A'}\nCoupon: ${coupon || 'None'}\n\nITEMS\n${items}\n\nSubtotal: ${money(subtotal)}\nShipping: ${money(shipping)}\nDiscount: ${discount ? money(discount) : 'Rs 0'}\nTOTAL: ${money(total)}\n\nPlease contact the customer to confirm the order/payment.\n`;

// NOVA contact form — polished FormSubmit flow inspired by the portfolio contact experience.
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form.nova-contact-form[action*="formsubmit.co"]');
  if (!form) return;
  const status = document.getElementById('contactFormStatus');
  const submit = form.querySelector('button[type="submit"]');
  const setStatus = (message, type='') => {
    if (!status) return;
    status.className = `contact-form-status ${type}`.trim();
    status.textContent = message;
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const first = String(data.get('First Name') || '').trim();
    const last = String(data.get('Last Name') || '').trim();
    const email = String(data.get('Email') || '').trim();
    const subject = String(data.get('Subject') || '').trim();
    const message = String(data.get('Message') || '').trim();
    const order = String(data.get('Order Number') || '').trim();
    if (first.length < 2 || last.length < 2) return setStatus('Please enter your first and last name.', 'error');
    if (!email || !email.includes('@')) return setStatus('Please enter a valid email address.', 'error');
    if (!subject) return setStatus('Please choose a subject.', 'error');
    if (message.length < 10) return setStatus('Please write a little more detail (at least 10 characters).', 'error');

    const payload = new FormData();
    payload.append('Name', `${first} ${last}`.trim());
    payload.append('Email', email);
    payload.append('Subject', subject);
    payload.append('Order Number', order || 'N/A');
    payload.append('Message', message);
    payload.append('_subject', `NOVA Contact — ${subject}`);
    payload.append('_captcha', 'false');
    payload.append('_template', 'table');
    payload.append('_replyto', email);

    const body = `Name: ${first} ${last}\nEmail: ${email}\nOrder Number: ${order || 'N/A'}\nSubject: ${subject}\n\n${message}`;
    if (window.location.protocol === 'file:') {
      setStatus('Opening your email app with the message prepared…', 'success');
      window.location.href = `mailto:shariq.mailbox1@gmail.com?subject=${encodeURIComponent(`NOVA Contact — ${subject}`)}&body=${encodeURIComponent(body)}`;
      return;
    }

    if (submit) { submit.disabled = true; submit.dataset.originalText = submit.innerHTML; submit.innerHTML = 'Sending… <i class="bi bi-arrow-repeat"></i>'; }
    setStatus('Sending your message to NOVA customer care…', '');
    try {
      const response = await fetch('https://formsubmit.co/ajax/shariq.mailbox1@gmail.com', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: payload
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success === false) throw new Error('FormSubmit rejected the request');
      setStatus('Message sent successfully. NOVA customer care will get back to you soon.', 'success');
      form.reset();
    } catch (error) {
      setStatus('We could not send it online. Opening your email app instead…', 'error');
      window.location.href = `mailto:shariq.mailbox1@gmail.com?subject=${encodeURIComponent(`NOVA Contact — ${subject}`)}&body=${encodeURIComponent(body)}`;
    } finally {
      if (submit) { submit.disabled = false; submit.innerHTML = submit.dataset.originalText || 'Send Message <i class="bi bi-arrow-up-right"></i>'; }
    }
  });
});

// FormSubmit sends the order to the store inbox from a GitHub Pages/static site.
  const iframe = document.getElementById('orderSubmitFrame') || (()=>{ const f=document.createElement('iframe'); f.name='orderSubmitFrame'; f.id='orderSubmitFrame'; f.style.display='none'; document.body.appendChild(f); return f; })();
  const f = document.createElement('form');
  f.action = `https://formsubmit.co/${encodeURIComponent(NOVA_CONTACT_EMAIL)}`;
  f.method = 'POST'; f.target = iframe.name; f.style.display='none';
  const fields = {
    _subject: subject, _template: 'table', _captcha: 'false', _replyto: email,
    'Order ID': orderId, 'Customer Name': customerName, 'Customer Email': email,
    Phone: phone, City: city, Address: address, 'Payment Method': payment, 'Wallet': walletType ? `${walletType} · ${walletNumber}` : 'N/A',
    Items: items, Subtotal: money(subtotal), Shipping: money(shipping), Discount: discount ? money(discount) : 'Rs 0', Total: money(total)
  };
  Object.entries(fields).forEach(([k,v])=>{ const input=document.createElement('input'); input.type='hidden'; input.name=k; input.value=v; f.appendChild(input); });
  document.body.appendChild(f); f.submit(); f.remove();

  bag = []; saveBag(); updateBag();
  alert(`Order ${orderId} received. Your order details have been sent to NOVA.\n\nIf online payment is selected, NOVA will confirm the payment instructions with you.`);
  window.location.href = `order-success.html?order=${encodeURIComponent(orderId)}`;
}

function initHeroSlider() {
  const root = document.querySelector('.nova-hero-slider');
  if (!root) return;
  const slides = [...root.querySelectorAll('.hero-slide')];
  const dots = [...root.querySelectorAll('.hero-dot')];
  const track = root.querySelector('#heroSliderTrack');
  const progress = root.querySelector('#heroProgressBar');
  if (!slides.length || !track) return;
  let current = 0, timer = null;
  const duration = 6500;
  const show = (index, user = false) => {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    slides.forEach((s,i) => s.classList.toggle('is-active', i === current));
    dots.forEach((d,i) => { d.classList.toggle('active', i === current); d.setAttribute('aria-current', i === current ? 'true' : 'false'); });
    if (progress) { progress.style.transition = 'none'; progress.style.width = '0%'; requestAnimationFrame(() => { progress.style.transition = `width ${duration}ms linear`; progress.style.width = '100%'; }); }
    if (user) restart();
  };
  const restart = () => { clearInterval(timer); timer = setInterval(() => show(current + 1), duration); };
  root.querySelector('.hero-arrow.left')?.addEventListener('click', () => show(current - 1, true));
  root.querySelector('.hero-arrow.right')?.addEventListener('click', () => show(current + 1, true));
  dots.forEach(d => d.addEventListener('click', () => show(Number(d.dataset.slide), true)));
  root.addEventListener('mouseenter', () => clearInterval(timer));
  root.addEventListener('mouseleave', restart);
  show(0); restart();
}
function initPaymentOptions(){
  const options = [...document.querySelectorAll('.payment-option-page')];
  if (!options.length) return;
  const wallet = document.getElementById('walletPaymentFields');
  const card = document.getElementById('cardPaymentFields');
  const sync = (option) => {
    options.forEach(x => x.classList.toggle('active', x === option));
    const value = option.querySelector('input')?.value || '';
    if (wallet) wallet.hidden = !value.includes('Easypaisa / JazzCash');
    if (card) card.hidden = !value.includes('Debit / Credit Card');
  };
  options.forEach(option => option.addEventListener('click', () => {
    const input = option.querySelector('input');
    if (input) input.checked = true;
    sync(option);
  }));
  const checked = options.find(x => x.querySelector('input')?.checked) || options[0];
  if (checked) sync(checked);
}

function initCategoryPage(){
  const grid = document.getElementById('categoryProductGrid');
  if (!grid) return;
  const cat = grid.dataset.category;
  const list = products.filter(p => p.cat === cat);
  // render() targets #productGrid on the shop page; temporarily reuse it for category pages.
  const oldId = grid.id;
  grid.id = 'productGrid';
  render(list);
  grid.id = oldId;
}

function initCategoryMegaMenu(){
  const item = document.querySelector('.nav-category-item');
  const trigger = item?.querySelector('.nav-category-trigger');
  const menu = item?.querySelector('.category-mega-menu');
  if (!item || !trigger || !menu) return;

  let openTimer = null;
  let closeTimer = null;
  const openMenu = () => {
    clearTimeout(closeTimer);
    clearTimeout(openTimer);
    openTimer = setTimeout(() => {
      item.classList.add('is-open');
      trigger.setAttribute('aria-expanded','true');
    }, 90);
  };
  const closeMenu = () => {
    clearTimeout(openTimer);
    clearTimeout(closeTimer);
    closeTimer = setTimeout(() => {
      if (!item.matches(':hover') && !menu.matches(':hover') && document.activeElement !== trigger && !menu.contains(document.activeElement)) {
        item.classList.remove('is-open');
        trigger.setAttribute('aria-expanded','false');
      }
    }, 260);
  };

  // Desktop: hovering Categories opens the full five-category mega menu.
  item.addEventListener('mouseenter', openMenu);
  item.addEventListener('mouseleave', closeMenu);
  menu.addEventListener('mouseenter', openMenu);
  menu.addEventListener('mouseleave', closeMenu);
  trigger.addEventListener('focus', openMenu);
  trigger.addEventListener('blur', closeMenu);

  // Mobile: tap Categories to expand all sub-categories.
  trigger.addEventListener('click', (e) => {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      const open = item.classList.toggle('is-open');
      trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      item.classList.remove('is-open');
      trigger.setAttribute('aria-expanded','false');
      trigger.blur();
    }
  });

  document.addEventListener('click', (e) => {
    if (!item.contains(e.target)) {
      item.classList.remove('is-open');
      trigger.setAttribute('aria-expanded','false');
    }
  });
}

function initPremium3D() {
  document.querySelectorAll('.premium-3d').forEach(el => {
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX-r.left)/r.width-.5, y = (e.clientY-r.top)/r.height-.5;
      el.style.setProperty('--rx', `${(-y*6).toFixed(2)}deg`);
      el.style.setProperty('--ry', `${(x*7).toFixed(2)}deg`);
      el.style.setProperty('--mx', `${(x*20).toFixed(1)}px`);
      el.style.setProperty('--my', `${(y*20).toFixed(1)}px`);
    });
    el.addEventListener('pointerleave', () => { el.style.setProperty('--rx','0deg'); el.style.setProperty('--ry','0deg'); el.style.setProperty('--mx','0px'); el.style.setProperty('--my','0px'); });
  });
}


function initNovaFollowHeader(){
  let ticking=false;
  const update=()=>{
    const y=window.scrollY || document.documentElement.scrollTop || 0;
    document.body.classList.toggle('nova-scrolled', y>28);
    ticking=false;
  };
  update();
  window.addEventListener('scroll',()=>{
    if(!ticking){ window.requestAnimationFrame(update); ticking=true; }
  },{passive:true});
}

function init() {
  loadBag();
  loadUser();
  render();
  updateBag();
  initSharedChrome();
  ensureSearchPanel();
  initCurrencySwitcher();
  initNovaFollowHeader();
  initInnerHeader();
  initHeroSlider();
  initPremium3D();
  initIndexFaq();
  initCategoryPage();
  initCategoryMegaMenu();
  initPaymentOptions();
  if (
    document.getElementById("authPage") ||
    document.body.classList.contains("auth-body")
  )
    initAuthPage();
  if (document.body.classList.contains("product-body")) initProductPage();
  if (document.body.classList.contains("checkout-body")) initCheckout();
  loadBackendProducts().then((loaded) => {
    if (!loaded) loadSanityProducts();
  });
  document.querySelectorAll(".tilt").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect(),
        x = (e.clientX - r.left) / r.width - 0.5,
        y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(1200px) rotateY(${x * 7}deg) rotateX(${-y * 5}deg) translateZ(18px)`;
    });
    el.addEventListener("mouseleave", () => (el.style.transform = ""));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href="#productGrid"]').forEach((link) =>
    link.addEventListener("click", (e) => {
      const target =
        document.querySelector(".shop-panel-head") ||
        document.getElementById("productGrid");
      if (!target) return;
      e.preventDefault();
      const header = document.querySelector(".site-header,.nova-global-header");
      const offset = (header?.getBoundingClientRect().height || 0) + 18;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - offset,
        behavior: "smooth",
      });
      history.replaceState(null, "", "#productGrid");
    }),
  );
});

document.addEventListener("DOMContentLoaded", init);

// Graceful image fallback: broken remote images never leave a broken-image icon.
(function initNovaImageFallback(){
  const fallback = 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=84';
  const handle = (e) => {
    const img = e.target;
    if (!(img instanceof HTMLImageElement)) return;
    if (img.dataset.novaFallbackApplied === '1') return;
    img.dataset.novaFallbackApplied = '1';
    img.src = fallback;
    img.removeAttribute('srcset');
    img.style.objectFit = 'cover';
  };
  window.addEventListener('error', handle, true);
  document.querySelectorAll('img').forEach(img => img.addEventListener('error', handle, {once:true}));
})();
// Use a different local fallback for the performance slide so failed images still feel intentional.
(function enhanceHeroFallbacks(){
  const heroFallbacks = [
    'https://images.unsplash.com/photo-1686783695684-7b8351fdebbd?auto=format&fit=crop&fm=jpg&q=82&w=1200',
    'https://images.unsplash.com/photo-1646747859549-56d6c2ee3e6e?auto=format&fit=crop&fm=jpg&q=82&w=1200',
    'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&fm=jpg&q=82&w=1200'
  ];
  document.querySelectorAll('.hero-slide img').forEach((img, i) => img.dataset.heroFallback = heroFallbacks[i] || heroFallbacks[0]);
  window.addEventListener('error', (e) => {
    const img = e.target;
    if (!(img instanceof HTMLImageElement)) return;
    const fallback = img.dataset.heroFallback;
    if (!fallback || img.dataset.novaHeroFallbackApplied === '1') return;
    img.dataset.novaHeroFallbackApplied = '1';
    img.src = fallback;
  }, true);
})();
