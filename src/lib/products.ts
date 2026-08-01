export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image_url: string;
  unit: string;
  moq: number;
  created_at: string;
}

export const CATEGORIES = [
'All',
'Agriculture & Plantation',
'Spices & Herbs',
'Processed & Food Products',
'Industrial & Biomass',
'Leaves & Botanicals',
'Apparel'] as
const;

export type Category = typeof CATEGORIES[number];

export const PRODUCTS: Product[] = [
// Agriculture & Plantation
{
  id: '1',
  name: 'Sawit (Palm Fruit)',
  category: 'Agriculture & Plantation',
  description: 'Buah sawit segar berkualitas tinggi dari perkebunan terpilih di Kalimantan dan Sumatera. Kandungan minyak optimal, siap ekspor dalam skala besar.',
  image_url: "https://img.rocket.new/generatedImages/rocket_gen_img_106202b53-1784739970519.png",
  unit: 'Ton',
  moq: 20,
  created_at: '2026-01-01'
},
{
  id: '2',
  name: 'Kelapa (Coconut)',
  category: 'Agriculture & Plantation',
  description: 'Kelapa segar dan kelapa kering pilihan, tersedia dalam berbagai varian: kelapa bulat, kopra, dan santan. Langsung dari petani mitra terpercaya.',
  image_url: "https://img.rocket.new/generatedImages/rocket_gen_img_1d8585430-1785490432043.png",
  unit: 'Ton',
  moq: 10,
  created_at: '2026-01-01'
},
{
  id: '3',
  name: 'Semangka (Watermelon)',
  category: 'Agriculture & Plantation',
  description: 'Semangka segar berkualitas ekspor, manis dan renyah. Dipilih dari kebun dengan standar agrikultur internasional, dikemas higienis untuk pengiriman jarak jauh.',
  image_url: "https://img.rocket.new/generatedImages/rocket_gen_img_1d6bd0e9c-1776493980383.png",
  unit: 'Ton',
  moq: 5,
  created_at: '2026-01-01'
},
{
  id: '4',
  name: 'Buah Naga (Dragon Fruit)',
  category: 'Agriculture & Plantation',
  description: 'Buah naga merah dan putih pilihan, kaya antioksidan. Dipanen pada tingkat kematangan optimal untuk mempertahankan kesegaran selama pengiriman internasional.',
  image_url: "https://images.unsplash.com/photo-1659167405984-9f0bcce7705a",
  unit: 'Ton',
  moq: 3,
  created_at: '2026-01-01'
},
{
  id: '5',
  name: 'Limau (Lime)',
  category: 'Agriculture & Plantation',
  description: 'Limau segar kaya vitamin C, aroma tajam khas. Tersedia dalam kemasan bulk untuk industri minuman, kuliner, dan farmasi internasional.',
  image_url: "https://img.rocket.new/generatedImages/rocket_gen_img_182bbd241-1785490431840.png",
  unit: 'Ton',
  moq: 2,
  created_at: '2026-01-01'
},
{
  id: '6',
  name: 'Sukun (Breadfruit)',
  category: 'Agriculture & Plantation',
  description: 'Sukun matang berkualitas tinggi, sumber karbohidrat alami. Cocok untuk industri pangan dan diversifikasi pangan global.',
  image_url: "https://img.rocket.new/generatedImages/rocket_gen_img_1a6d93321-1785490430213.png",
  unit: 'Ton',
  moq: 2,
  created_at: '2026-01-01'
},
{
  id: '7',
  name: 'Rebung (Bamboo Shoot)',
  category: 'Agriculture & Plantation',
  description: 'Rebung segar dan rebung kaleng berkualitas ekspor. Dipanen muda untuk tekstur renyah optimal, populer di pasar Asia Timur dan Eropa.',
  image_url: "https://img.rocket.new/generatedImages/rocket_gen_img_1a9f84e0a-1785490431636.png",
  unit: 'Ton',
  moq: 3,
  created_at: '2026-01-01'
},
{
  id: '8',
  name: 'Kunyit (Turmeric)',
  category: 'Agriculture & Plantation',
  description: 'Kunyit segar dan kering dengan kandungan kurkumin tinggi. Sangat diminati pasar farmasi, suplemen, dan kuliner global.',
  image_url: "https://img.rocket.new/generatedImages/rocket_gen_img_10991089f-1774680984620.png",
  unit: 'Ton',
  moq: 1,
  created_at: '2026-01-01'
},
{
  id: '9',
  name: 'Petai (Stink Bean)',
  category: 'Agriculture & Plantation',
  description: 'Petai segar berkualitas pilihan, dikemas vakum untuk menjaga kesegaran. Sangat populer di pasar Asia Tenggara dan diaspora Indonesia.',
  image_url: "https://images.unsplash.com/photo-1724653957071-4dd22763c774",
  unit: 'Kg',
  moq: 500,
  created_at: '2026-01-01'
},
{
  id: '10',
  name: 'Jengkol (Dogfruit)',
  category: 'Agriculture & Plantation',
  description: 'Jengkol pilihan berkualitas ekspor, dikemas higienis. Komoditas unik Indonesia dengan permintaan tinggi di pasar Asia Tenggara.',
  image_url: "https://img.rocket.new/generatedImages/rocket_gen_img_124e5b168-1785490431980.png",
  unit: 'Kg',
  moq: 500,
  created_at: '2026-01-01'
},
// Spices & Herbs
{
  id: '11',
  name: 'Kayu Manis (Cinnamon)',
  category: 'Spices & Herbs',
  description: 'Kayu manis Cassia dan Ceylon grade A dari Sumatera Barat. Aroma kuat, kandungan minyak atsiri tinggi. Salah satu rempah ekspor unggulan Indonesia.',
  image_url: "https://img.rocket.new/generatedImages/rocket_gen_img_17f5a159b-1785490430358.png",
  unit: 'Ton',
  moq: 1,
  created_at: '2026-01-01'
},
{
  id: '12',
  name: 'Vanili (Vanilla)',
  category: 'Spices & Herbs',
  description: 'Vanili asli Indonesia (Vanilla planifolia) dari Flores dan Papua. Kandungan vanillin alami tinggi, sangat diminati industri makanan dan parfum global.',
  image_url: "https://img.rocket.new/generatedImages/rocket_gen_img_1748ecae1-1785490430196.png",
  unit: 'Kg',
  moq: 100,
  created_at: '2026-01-01'
},
{
  id: '13',
  name: 'Rempah Campur (Mixed Spices)',
  category: 'Spices & Herbs',
  description: 'Campuran rempah pilihan Indonesia: cengkeh, pala, lada hitam, dan kapulaga. Dikemas dalam berbagai format sesuai kebutuhan importir.',
  image_url: "https://images.unsplash.com/photo-1644057440075-3a5b077fe64d",
  unit: 'Ton',
  moq: 1,
  created_at: '2026-01-01'
},
// Processed & Food Products
{
  id: '14',
  name: 'Kopi Aming (Aming Coffee)',
  category: 'Processed & Food Products',
  description: 'Kopi Aming khas Kalimantan Barat — kopi halus dengan cita rasa unik, disangrai dan dikemas dengan standar ekspor. Warisan kuliner lokal yang mendunia.',
  image_url: "https://img.rocket.new/generatedImages/rocket_gen_img_16a41c5db-1785490432186.png",
  unit: 'Kg',
  moq: 200,
  created_at: '2026-01-01'
},
{
  id: '15',
  name: 'Gula Aren (Palm Sugar)',
  category: 'Processed & Food Products',
  description: 'Gula aren murni dari nira pohon aren pilihan. Proses tradisional menghasilkan gula dengan aroma karamel khas. Tersedia dalam bentuk cetak dan bubuk.',
  image_url: "https://img.rocket.new/generatedImages/rocket_gen_img_18d71de08-1785490430767.png",
  unit: 'Ton',
  moq: 2,
  created_at: '2026-01-01'
},
{
  id: '16',
  name: 'Tepung Sagu (Sago Flour)',
  category: 'Processed & Food Products',
  description: 'Tepung sagu murni dari pohon sagu Kalimantan. Bebas gluten, ideal untuk industri pangan, farmasi, dan industri tekstil internasional.',
  image_url: "https://img.rocket.new/generatedImages/rocket_gen_img_1b586990c-1785490431953.png",
  unit: 'Ton',
  moq: 5,
  created_at: '2026-01-01'
},
{
  id: '17',
  name: 'Keripik Dagangan (Trade Chips)',
  category: 'Processed & Food Products',
  description: 'Keripik aneka varian khas Indonesia: singkong, pisang, tempe, dan kentang. Dikemas dalam kemasan retail siap ekspor ke pasar diaspora dan specialty food.',
  image_url: "https://img.rocket.new/generatedImages/rocket_gen_img_10c135ab0-1772687281660.png",
  unit: 'Kg',
  moq: 500,
  created_at: '2026-01-01'
},
{
  id: '18',
  name: 'Indomie (Instant Noodles)',
  category: 'Processed & Food Products',
  description: 'Indomie berbagai varian rasa, produk mie instan ikonik Indonesia. Tersedia dalam kemasan karton bulk untuk ekspor ke seluruh dunia.',
  image_url: "https://img.rocket.new/generatedImages/rocket_gen_img_163400993-1777554737615.png",
  unit: 'Karton',
  moq: 1000,
  created_at: '2026-01-01'
},
{
  id: '19',
  name: 'Belungkur',
  category: 'Processed & Food Products',
  description: 'Belungkur — produk olahan tradisional khas Kalimantan Barat. Dikemas higienis dengan standar ekspor untuk pasar komunitas dan specialty food Asia.',
  image_url: "https://img.rocket.new/generatedImages/rocket_gen_img_18a88fa19-1785490432011.png",
  unit: 'Kg',
  moq: 300,
  created_at: '2026-01-01'
},
{
  id: '20',
  name: 'Tampek Beras (Rice Cake)',
  category: 'Processed & Food Products',
  description: 'Tampek beras — kue beras tradisional Kalimantan Barat. Dikemas vakum dengan masa simpan panjang, cocok untuk pasar diaspora Indonesia global.',
  image_url: "https://img.rocket.new/generatedImages/rocket_gen_img_1d67d5b77-1777043428139.png",
  unit: 'Kg',
  moq: 200,
  created_at: '2026-01-01'
},
{
  id: '21',
  name: 'Capel',
  category: 'Processed & Food Products',
  description: 'Capel — produk olahan pangan khas lokal dengan cita rasa autentik. Diproduksi dengan standar kebersihan dan dikemas untuk distribusi internasional.',
  image_url: "https://img.rocket.new/generatedImages/rocket_gen_img_11de75689-1785490432033.png",
  unit: 'Kg',
  moq: 200,
  created_at: '2026-01-01'
},
// Industrial & Biomass
{
  id: '22',
  name: 'Arang Briket (Charcoal Briquette)',
  category: 'Industrial & Biomass',
  description: 'Arang briket berkualitas premium dari batok kelapa dan kayu pilihan. Kalori tinggi, asap rendah. Sangat diminati pasar BBQ di Eropa, Timur Tengah, dan Amerika.',
  image_url: "https://img.rocket.new/generatedImages/rocket_gen_img_1b9781c72-1785490431035.png",
  unit: 'Ton',
  moq: 20,
  created_at: '2026-01-01'
},
{
  id: '23',
  name: 'Bonggol Jagung (Corn Cob)',
  category: 'Industrial & Biomass',
  description: 'Bonggol jagung kering sebagai bahan biomassa energi. Nilai kalor tinggi, cocok untuk industri energi terbarukan dan pakan ternak internasional.',
  image_url: "https://img.rocket.new/generatedImages/rocket_gen_img_15767041a-1785490430203.png",
  unit: 'Ton',
  moq: 10,
  created_at: '2026-01-01'
},
{
  id: '24',
  name: 'Minyak Nilam (Patchouli Oil)',
  category: 'Industrial & Biomass',
  description: 'Minyak nilam murni (Pogostemon cablin) dari Aceh dan Sumatera. Kandungan patchouli alkohol tinggi, standar ISO. Bahan baku utama industri parfum dunia.',
  image_url: "https://img.rocket.new/generatedImages/rocket_gen_img_14ba4bd8e-1785490431991.png",
  unit: 'Kg',
  moq: 50,
  created_at: '2026-01-01'
},
{
  id: '25',
  name: 'Tepung Kayu Lengket (Sticky Wood Flour)',
  category: 'Industrial & Biomass',
  description: 'Tepung kayu halus dengan daya rekat tinggi, digunakan sebagai bahan baku industri kertas, MDF, dan komposit kayu internasional.',
  image_url: "https://img.rocket.new/generatedImages/rocket_gen_img_1c1df8ec1-1785490429317.png",
  unit: 'Ton',
  moq: 5,
  created_at: '2026-01-01'
},
{
  id: '26',
  name: 'Kayu Kopi (Coffee Wood)',
  category: 'Industrial & Biomass',
  description: 'Kayu kopi dari pohon kopi tua yang tidak produktif. Digunakan sebagai biomassa, arang premium, atau bahan kerajinan. Berkelanjutan dan ramah lingkungan.',
  image_url: "https://img.rocket.new/generatedImages/rocket_gen_img_187d85f82-1785490430243.png",
  unit: 'Ton',
  moq: 5,
  created_at: '2026-01-01'
},
// Leaves & Botanicals
{
  id: '27',
  name: 'Daun Pisang (Banana Leaf)',
  category: 'Leaves & Botanicals',
  description: 'Daun pisang segar dan kering berkualitas ekspor. Digunakan untuk pembungkus makanan alami, dekorasi restoran, dan industri kemasan ramah lingkungan.',
  image_url: "https://images.unsplash.com/photo-1612706732354-57ff9d06c8f1",
  unit: 'Ton',
  moq: 1,
  created_at: '2026-01-01'
},
{
  id: '28',
  name: 'Daun Kelor (Moringa Leaf)',
  category: 'Leaves & Botanicals',
  description: 'Daun kelor segar dan bubuk organik bersertifikat. Superfood dengan kandungan nutrisi luar biasa, sangat diminati industri suplemen dan makanan kesehatan global.',
  image_url: "https://img.rocket.new/generatedImages/rocket_gen_img_1dd1f7440-1785429912952.png",
  unit: 'Ton',
  moq: 1,
  created_at: '2026-01-01'
},
{
  id: '29',
  name: 'Daun Ketapang (Indian Almond Leaf)',
  category: 'Leaves & Botanicals',
  description: 'Daun ketapang kering berkualitas premium. Sangat diminati industri akuakultur dan hobi ikan hias global karena sifat antibakteri alaminya.',
  image_url: "https://img.rocket.new/generatedImages/rocket_gen_img_1f4817027-1785490431909.png",
  unit: 'Kg',
  moq: 100,
  created_at: '2026-01-01'
},
{
  id: '30',
  name: 'Kratom / Keratom (Mitragyna speciosa)',
  category: 'Leaves & Botanicals',
  description: 'Daun kratom kering berkualitas tinggi dari Kalimantan Barat. Tersedia dalam berbagai varian: Maeng Da, Borneo Red, Green Vein. Ekspor sesuai regulasi negara tujuan.',
  image_url: "https://img.rocket.new/generatedImages/rocket_gen_img_1efbb13f6-1785490432084.png",
  unit: 'Ton',
  moq: 1,
  created_at: '2026-01-01'
},
// Apparel
{
  id: '31',
  name: 'Baju / Pakaian (Apparel)',
  category: 'Apparel',
  description: 'Pakaian berkualitas ekspor: batik, tenun tradisional, dan pakaian kasual. Produksi dari mitra UMKM terpilih dengan standar quality control ketat untuk pasar internasional.',
  image_url: "https://img.rocket.new/generatedImages/rocket_gen_img_1b7f959fa-1785490432054.png",
  unit: 'Pcs',
  moq: 1000,
  created_at: '2026-01-01'
}];


export function getProductsByCategory(category: Category): Product[] {
  if (category === 'All') return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === category);
}

export function searchProducts(query: string, category: Category): Product[] {
  const base = getProductsByCategory(category);
  if (!query.trim()) return base;
  const q = query.toLowerCase();
  return base.filter(
    (p) =>
    p.name.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q)
  );
}