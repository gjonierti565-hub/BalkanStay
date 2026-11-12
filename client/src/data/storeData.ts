export interface Product {
  id: string;
  name: string;
  category: string;
  categoryName: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  stock: number;
  image: string;
  badge?: string;
  tier?: 'Entry Level' | 'Mid Range' | 'High End';
  specs: Record<string, string>;
  description: string;
  features: string[];
}

export const CATEGORIES = [
  { id: 'all', name: 'Të Gjitha', icon: 'Sparkles' },
  { id: 'gaming-pcs', name: 'Gaming PCs', icon: 'Gamepad2' },
  { id: 'laptops', name: 'Laptops', icon: 'Laptop' },
  { id: 'desktop-pcs', name: 'Desktop PCs', icon: 'Monitor' },
  { id: 'components', name: 'Pjesë & Komponentë', icon: 'Cpu' },
  { id: 'accessories', name: 'Aksesorë Gaming', icon: 'Headphones' },
  { id: 'monitors', name: 'Monitore', icon: 'Tv' },
];

export const PRODUCTS: Product[] = [
  // Gaming PCs
  {
    id: 'pc-beast-rtx4090',
    name: 'NEXORA Titan X-90 Gaming Monster',
    category: 'gaming-pcs',
    categoryName: 'Gaming PCs',
    price: 3299,
    originalPrice: 3599,
    rating: 4.9,
    reviewCount: 38,
    stock: 5,
    badge: 'High End',
    tier: 'High End',
    image: '/manus-storage/gAaeHLUMeUcf_36310f7c.webp',
    description: 'PC Gaming pa kompromise me procesorin më të fuqishëm Intel i9 dhe kartën grafike RTX 4090 24GB për 4K Gaming me mbi 140 FPS.',
    features: ['Cooling Liquid 360mm ARGB', 'Kuti Premium me Qelq të Kalitur', 'Windows 11 Pro i Instaluar & Licencuar', '3 Vite Garanci e Plotë'],
    specs: {
      CPU: 'Intel Core i9-14900K (24 Bërthama, deri në 6.0 GHz)',
      GPU: 'NVIDIA GeForce RTX 4090 24GB GDDR6X',
      RAM: '64GB Kingston Fury DDR5 6000MHz RGB',
      Storage: '2TB Samsung 990 PRO NVMe Gen4 SSD',
      Motherboard: 'ASUS ROG STRIX Z790-F Gaming WiFi',
      PSU: 'Corsair RM1000x 1000W 80+ Gold Modulare',
      Case: 'Lian Li O11 Dynamic EVO RGB Black'
    }
  },
  {
    id: 'pc-pulse-rtx4070ti',
    name: 'NEXORA Pulse Vanguard Gaming PC',
    category: 'gaming-pcs',
    categoryName: 'Gaming PCs',
    price: 1799,
    originalPrice: 1999,
    badge: 'Mid Range',
    tier: 'Mid Range',
    rating: 4.8,
    reviewCount: 64,
    stock: 8,
    image: '/manus-storage/rtJXRBv6lCbl_90571e4a.jpg',
    description: 'Zgjedhja ideale për 1440p High Refresh Rate dhe 4K Ultra në çdo lojë moderne me mbështetje DLSS 3.5.',
    features: ['Performancë maksimale për çmimin', 'Ftohje e qetë me 4 ventilatorë ARGB', 'Optimizuar për streaming dhe gaming', '2 Vite Garanci'],
    specs: {
      CPU: 'AMD Ryzen 7 7800X3D (V-Cache Gaming King)',
      GPU: 'NVIDIA GeForce RTX 4070 Ti SUPER 16GB',
      RAM: '32GB G.Skill Flare X5 DDR5 6000MHz',
      Storage: '1TB Kingston KC3000 PCIe 4.0 NVMe',
      Motherboard: 'MSI B650 Gaming Plus WiFi',
      PSU: 'Gigabyte 750W 80+ Gold PCIe 5.0',
      Case: 'NZXT H5 Flow RGB Edition'
    }
  },
  {
    id: 'pc-starter-rtx4060',
    name: 'NEXORA Apex Scout Entry Gaming PC',
    category: 'gaming-pcs',
    categoryName: 'Gaming PCs',
    price: 849,
    originalPrice: 949,
    badge: 'Entry Level',
    tier: 'Entry Level',
    rating: 4.7,
    reviewCount: 82,
    stock: 14,
    image: '/manus-storage/9uEmhmhe2pnq_1b17889c.jpg',
    description: 'PC perfekt për të nisur botën e gaming me 1080p Ultra në CS2, Valorant, GTA V, Fortnite dhe Cyberpunk me Ray Tracing.',
    features: ['Efiçencë e lartë energjie', 'Konsum i ulët dhe zhurmë minimale', 'Mundësi upgrade të ardhshëm', '2 Vite Garanci'],
    specs: {
      CPU: 'AMD Ryzen 5 5600X (6 Bërthama, 12 Threads)',
      GPU: 'NVIDIA GeForce RTX 4060 8GB GDDR6',
      RAM: '16GB DDR4 3200MHz Corsair Vengeance',
      Storage: '1TB Crucial P3 Plus NVMe SSD',
      Motherboard: 'ASUS Prime B550M-A WiFi',
      PSU: 'DeepCool 650W 80+ Bronze',
      Case: 'Montech Air 100 ARGB Mesh'
    }
  },

  // Laptops
  {
    id: 'laptop-msi-stealth17',
    name: 'MSI Stealth 17 Studio RTX 4080',
    category: 'laptops',
    categoryName: 'Laptops',
    price: 2699,
    originalPrice: 2899,
    badge: '-200€ Deal',
    rating: 4.9,
    reviewCount: 27,
    stock: 4,
    image: '/manus-storage/GQNP5l5FrSZn_84db1705.jpg',
    description: 'Laptop premium për profesionistë dhe gamer me ekran 17.3" QHD 240Hz dhe trup të hollë alumini.',
    features: ['Ekran 17.3" QHD 240Hz 100% DCI-P3', 'Thunderbolt 4 & WiFi 6E', 'Tastierë Per-Key RGB SteelSeries', 'Audio Dynaudio me 6 autoparlantë'],
    specs: {
      CPU: 'Intel Core i9-13900H 14 Cores',
      GPU: 'NVIDIA GeForce RTX 4080 12GB GDDR6',
      RAM: '32GB DDR5 5200MHz',
      Storage: '1TB NVMe PCIe Gen4 SSD',
      Display: '17.3" QHD (2560x1440) 240Hz IPS-Level',
      Weight: '2.80 kg'
    }
  },
  {
    id: 'laptop-msi-stealth14',
    name: 'MSI Stealth 14 Studio Ultra Slim',
    category: 'laptops',
    categoryName: 'Laptops',
    price: 1699,
    originalPrice: 1849,
    badge: 'Popular',
    rating: 4.7,
    reviewCount: 19,
    stock: 6,
    image: '/manus-storage/Ut2sQLMBRi4Q_0ab936e0.jpg',
    description: 'Fuqi masive në përmasë ultra-portative 14 inç me sistem të avancuar me Vapor Chamber ftohje.',
    features: ['Trup magnezi dhe alumini ultra i lehtë 1.7kg', 'Ekran 16:10 QHD+ 240Hz OLED/IPS', 'Mbushje e shpejtë 100W Type-C'],
    specs: {
      CPU: 'Intel Core i7-13700H',
      GPU: 'NVIDIA GeForce RTX 4060 8GB',
      RAM: '16GB DDR5 5200MHz',
      Storage: '1TB NVMe SSD',
      Display: '14" QHD+ 240Hz 100% DCI-P3',
      Weight: '1.7 kg'
    }
  },

  // Components
  {
    id: 'gpu-rtx-4080-super',
    name: 'ASUS ROG Strix GeForce RTX 4080 SUPER 16GB OC',
    category: 'components',
    categoryName: 'Pjesë & Komponentë',
    price: 1249,
    originalPrice: 1399,
    badge: 'Hot Deal',
    rating: 4.9,
    reviewCount: 45,
    stock: 7,
    image: '/manus-storage/dXYKfbXjt5Bj_971df629.jpg',
    description: 'Karta grafike supreme për 4K Gaming, renderim 3D dhe inteligjencë artificiale me ftohje me 3 ventilatorë Axial-tech.',
    features: ['Bërthamë Ada Lovelace me DLSS 3', 'Kornizë metalike me drita RGB Aura Sync', 'Dual BIOS (Performance / Quiet)'],
    specs: {
      'Memoria': '16GB GDDR6X 256-bit',
      'Boost Clock': '2670 MHz (OC Mode)',
      'Portat': '2x HDMI 2.1a, 3x DisplayPort 1.4a',
      'Furnizimi i Rekomanduar': '850W'
    }
  },
  {
    id: 'gpu-rtx-4070-dual',
    name: 'MSI GeForce RTX 4070 Ventus 2X 12GB',
    category: 'components',
    categoryName: 'Pjesë & Komponentë',
    price: 639,
    originalPrice: 699,
    badge: '-60€',
    rating: 4.8,
    reviewCount: 31,
    stock: 11,
    image: '/manus-storage/T2fxZIrHZtSb_7c469075.jpg',
    description: 'Efiçencë e mahnitshme dhe performancë solide për çdo titull AAA në 1440p rezolucion.',
    features: ['Dizajn kompakt me dy ventilatorë TORX 4.0', 'Zero Frozr (ventilatorët ndalen kur karta është e ftohtë)', 'Konsum vetëm 200W'],
    specs: {
      'Memoria': '12GB GDDR6X 192-bit',
      'Portat': '3x DisplayPort, 1x HDMI',
      'Furnizimi i Rekomanduar': '650W'
    }
  },
  {
    id: 'cpu-intel-core-i9',
    name: 'Intel Core i9-14900K 24-Core 6.0 GHz',
    category: 'components',
    categoryName: 'Pjesë & Komponentë',
    price: 589,
    originalPrice: 649,
    rating: 4.9,
    reviewCount: 52,
    stock: 12,
    image: '/manus-storage/cpu_2984439b.jpg',
    badge: 'Flagship',
    description: 'Procesori më i fuqishëm për multitasking ekstrem, eksportim video në sekonda dhe performancë kulmore në lojëra.',
    features: ['24 Bërthama (8 P-Cores + 16 E-Cores)', 'Deri në 6.0 GHz me Intel Thermal Velocity Boost', 'Mbështet DDR4 dhe DDR5'],
    specs: {
      'Socket': 'LGA1700',
      'Bërthama / Threads': '24 / 32',
      'Cache': '36MB Intel Smart Cache',
      'TDP': '125W Base / 253W Turbo'
    }
  },

  // Peripherals
  {
    id: 'keyboard-cyber-rgb',
    name: 'NEXORA Pro Phantom RGB Mechanical Keyboard',
    category: 'accessories',
    categoryName: 'Aksesorë Gaming',
    price: 119,
    originalPrice: 149,
    badge: 'Best Seller',
    rating: 4.8,
    reviewCount: 94,
    stock: 22,
    image: '/manus-storage/keyboard_e09d3775.jpg',
    description: 'Tastierë mekanike me ndërprerës linearë të lubrifikuar, mbulesë alumini dhe ndriçim të personalizueshëm RGB.',
    features: ['Hot-swappable switches', 'PBT Double-Shot keycaps rezistente ndaj fshirjes', 'Lidhje Wireless 2.4G, Bluetooth dhe Type-C'],
    specs: {
      'Switches': 'Gateron Yellow Pro Linear',
      'Bateria': '4000mAh (deri në 200 orë pa drita)',
      'Layout': '75% Kompakt me Rrotë Zëri Metalike'
    }
  },
  {
    id: 'monitor-curved-gaming',
    name: 'Samsung Odyssey G7 32" Curved 240Hz QHD',
    category: 'monitors',
    categoryName: 'Monitore',
    price: 549,
    originalPrice: 629,
    badge: 'Weekend Deal',
    rating: 4.9,
    reviewCount: 39,
    stock: 6,
    image: '/manus-storage/pklLZOiRUEaP_5e8827c1.jpg',
    description: 'Kurbaturë 1000R që përputhet plotësisht me fushën e shikimit njerëzor, kohë përgjigje 1ms dhe 240Hz për fluiditet total.',
    features: ['Panel VA QLED me ngjyra ultra të gjalla', 'HDR600 dhe mbështetje G-Sync / FreeSync Premium Pro', 'Ndriçim pasiv CoreSync'],
    specs: {
      'Rezolucioni': '2560 x 1440 (QHD)',
      'Refresh Rate': '240Hz',
      'Kurbatura': '1000R',
      'Koha e Reagimit': '1ms (GtG)'
    }
  }
];

export interface ComponentOption {
  id: string;
  name: string;
  price: number;
  specs: string;
  image?: string;
  category: 'cpu' | 'gpu' | 'motherboard' | 'ram' | 'storage' | 'psu' | 'case';
}

export const PC_BUILDER_OPTIONS: Record<string, ComponentOption[]> = {
  cpu: [
    { id: 'cpu-1', name: 'Intel Core i5-14400F', price: 199, specs: '10 Cores, up to 4.7 GHz', category: 'cpu' },
    { id: 'cpu-2', name: 'AMD Ryzen 7 7800X3D', price: 399, specs: '8 Cores 3D V-Cache, Best Gaming CPU', category: 'cpu' },
    { id: 'cpu-3', name: 'Intel Core i9-14900K', price: 589, specs: '24 Cores, up to 6.0 GHz Flagship', category: 'cpu' },
  ],
  gpu: [
    { id: 'gpu-1', name: 'NVIDIA RTX 4060 8GB', price: 329, specs: '1080p Ultra & DLSS 3', category: 'gpu' },
    { id: 'gpu-2', name: 'NVIDIA RTX 4070 Ti SUPER 16GB', price: 849, specs: '1440p High Refresh & 4K Ready', category: 'gpu' },
    { id: 'gpu-3', name: 'NVIDIA RTX 4090 24GB GDDR6X', price: 1899, specs: 'Extreme 4K / VR / AI Powerhouse', category: 'gpu' },
  ],
  motherboard: [
    { id: 'mb-1', name: 'MSI B760 Gaming Plus WiFi', price: 159, specs: 'PCIe 5.0, WiFi 6E, DDR5', category: 'motherboard' },
    { id: 'mb-2', name: 'ASUS TUF Gaming B650-PLUS', price: 219, specs: 'AM5, 2.5G LAN, M.2 Heatsinks', category: 'motherboard' },
    { id: 'mb-3', name: 'ASUS ROG MAXIMUS Z790 HERO', price: 599, specs: 'Extreme VRM, Dual Thunderbolt 4', category: 'motherboard' },
  ],
  ram: [
    { id: 'ram-1', name: '16GB (2x8GB) Kingston Fury DDR5 5600MHz', price: 75, specs: 'CL36 Black Heatsink', category: 'ram' },
    { id: 'ram-2', name: '32GB (2x16GB) Corsair Vengeance RGB DDR5 6000MHz', price: 135, specs: 'CL30 Ultra Low Latency', category: 'ram' },
    { id: 'ram-3', name: '64GB (2x32GB) G.Skill Trident Z5 RGB 6400MHz', price: 249, specs: 'Për Video Editing & Multitasking', category: 'ram' },
  ],
  storage: [
    { id: 'ssd-1', name: '1TB Crucial P3 Plus M.2 NVMe', price: 69, specs: 'Deri në 5000 MB/s Shpejtësi', category: 'storage' },
    { id: 'ssd-2', name: '2TB Samsung 990 PRO Gen4 NVMe', price: 179, specs: '7450 MB/s Read, Heatsink i përfshirë', category: 'storage' },
    { id: 'ssd-3', name: '4TB Kingston KC3000 PCIe 4.0', price: 329, specs: 'Hapësirë masive për librari lojërash', category: 'storage' },
  ],
  psu: [
    { id: 'psu-1', name: 'DeepCool PK650D 650W 80+ Bronze', price: 59, specs: 'Efiçencë e besueshme për buxhet', category: 'psu' },
    { id: 'psu-2', name: 'Corsair RM850x 850W 80+ Gold Modulare', price: 139, specs: 'Kabllo të zeza të sheshta, 10 vjet garanci', category: 'psu' },
    { id: 'psu-3', name: 'Seasonic Vertex GX-1200 1200W ATX 3.0', price: 239, specs: 'PCIe 5.0 12VHPWR kabëll i dedikuar', category: 'psu' },
  ],
  case: [
    { id: 'case-1', name: 'NZXT H5 Flow Compact Mesh Case', price: 95, specs: 'Airflow optimal me dy ventilatorë', category: 'case' },
    { id: 'case-2', name: 'Lian Li O11 Dynamic EVO Panorama', price: 169, specs: 'Dizajn panoramik me xham të dyfishtë', category: 'case' },
    { id: 'case-3', name: 'Fractal Design North Charcoal Walnut', price: 179, specs: 'Dru natyral arre dhe dizajn modern skandinav', category: 'case' },
  ]
};

export const SERVICES = [
  {
    id: 'pc-assembly',
    title: 'PC Assembly & Cable Management',
    description: 'Montim profesional me teste termike 24-orëshe dhe rregullim të padukshëm të kabllove.',
    price: '30 €',
    icon: 'Wrench'
  },
  {
    id: 'windows-installation',
    title: 'Windows Installation & Drivers',
    description: 'Instalim i pastër Windows 11 Pro, aktivizim i licencës, të gjithë drajverat më të fundit dhe BIOS update.',
    price: '20 €',
    icon: 'MonitorCheck'
  },
  {
    id: 'pc-cleaning',
    title: 'PC Deep Cleaning & Dust Removal',
    description: 'Pastrim i thellë me kompresor antistatik, pastrim i ventilatorëve dhe filtrave të pluhurit.',
    price: '15 €',
    icon: 'Sparkle'
  },
  {
    id: 'thermal-paste',
    title: 'Thermal Paste Replacement',
    description: 'Aplikim i pastës termike premium Noctua NT-H2 ose Arctic MX-6 për ulje deri në 10°C të temperaturave.',
    price: '15 €',
    icon: 'ThermometerSnowflake'
  },
  {
    id: 'troubleshooting',
    title: 'Hardware Diagnostics & Repair',
    description: 'Zbulimi dhe riparimi i defekteve me pajisje profesionale testuese të RAM, GPU dhe motherboard.',
    price: '25 €',
    icon: 'Stethoscope'
  },
  {
    id: 'custom-builds',
    title: 'Custom Watercooling & Modding',
    description: 'Ftohje me ujë të personalizuar (hard tubing), drita ARGB të sinkronizuara dhe kabllo Sleeved me ngjyra.',
    price: 'Nga 80 €',
    icon: 'Layers'
  }
];

export const DEALS = [
  {
    id: 'deal-1',
    title: 'Oferta e Fundjavës: -200€ në Gaming Monster',
    discount: '-200 €',
    code: 'WEEKEND200',
    expires: 'Edhe 2 Ditë',
    target: 'NEXORA Titan X-90'
  },
  {
    id: 'deal-2',
    title: 'Back to School: Laptops me -15% Zbritje',
    discount: '-15%',
    code: 'STUDENT15',
    expires: 'Deri në fund të muajit',
    target: 'Të gjithë laptopët për shkollë & studentë'
  },
  {
    id: 'deal-3',
    title: 'Clearance Sale: Komponentë me çmime fabrike',
    discount: 'Deri -40%',
    code: 'CLEARANCE',
    expires: 'Sasia e kufizuar',
    target: 'Pjesë të zgjedhura hardware'
  }
];
