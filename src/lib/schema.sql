-- ============================================================
-- CV. ALRA BERJAYA ABADI — Supabase Schema & Seed Data
-- Run this in Supabase SQL Editor (Dashboard > SQL Editor)
-- ============================================================

-- 1. Create products table
CREATE TABLE IF NOT EXISTS products (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT NOT NULL,
  category    TEXT NOT NULL,
  description TEXT,
  image_url   TEXT,
  unit        TEXT NOT NULL DEFAULT 'Ton',
  moq         INTEGER NOT NULL DEFAULT 1,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- 3. Allow public read access (catalog is public)
CREATE POLICY "Allow public read" ON products
  FOR SELECT USING (true);

-- 4. Create index for category filter performance
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);

-- 5. Create index for full-text search
CREATE INDEX IF NOT EXISTS idx_products_name ON products USING gin(to_tsvector('indonesian', name));

-- ============================================================
-- SEED DATA — All 31 Commodities
-- ============================================================

INSERT INTO products (name, category, description, image_url, unit, moq) VALUES

-- Agriculture & Plantation
('Sawit (Palm Fruit)', 'Agriculture & Plantation',
 'Buah sawit segar berkualitas tinggi dari perkebunan terpilih di Kalimantan dan Sumatera. Kandungan minyak optimal, siap ekspor dalam skala besar.',
 'https://images.unsplash.com/photo-1625701596527-d6e3f8c0a18d?auto=format&fit=crop&w=800&q=80', 'Ton', 20),

('Kelapa (Coconut)', 'Agriculture & Plantation',
 'Kelapa segar dan kelapa kering pilihan, tersedia dalam berbagai varian: kelapa bulat, kopra, dan santan. Langsung dari petani mitra terpercaya.',
 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&w=800&q=80', 'Ton', 10),

('Semangka (Watermelon)', 'Agriculture & Plantation',
 'Semangka segar berkualitas ekspor, manis dan renyah. Dipilih dari kebun dengan standar agrikultur internasional, dikemas higienis untuk pengiriman jarak jauh.',
 'https://images.unsplash.com/photo-1563114773-84221bd62daa?auto=format&fit=crop&w=800&q=80', 'Ton', 5),

('Buah Naga (Dragon Fruit)', 'Agriculture & Plantation',
 'Buah naga merah dan putih pilihan, kaya antioksidan. Dipanen pada tingkat kematangan optimal untuk mempertahankan kesegaran selama pengiriman internasional.',
 'https://images.unsplash.com/photo-1527325678964-54921661f888?auto=format&fit=crop&w=800&q=80', 'Ton', 3),

('Limau (Lime)', 'Agriculture & Plantation',
 'Limau segar kaya vitamin C, aroma tajam khas. Tersedia dalam kemasan bulk untuk industri minuman, kuliner, dan farmasi internasional.',
 'https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=800&q=80', 'Ton', 2),

('Sukun (Breadfruit)', 'Agriculture & Plantation',
 'Sukun matang berkualitas tinggi, sumber karbohidrat alami. Cocok untuk industri pangan dan diversifikasi pangan global.',
 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80', 'Ton', 2),

('Rebung (Bamboo Shoot)', 'Agriculture & Plantation',
 'Rebung segar dan rebung kaleng berkualitas ekspor. Dipanen muda untuk tekstur renyah optimal, populer di pasar Asia Timur dan Eropa.',
 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=800&q=80', 'Ton', 3),

('Kunyit (Turmeric)', 'Agriculture & Plantation',
 'Kunyit segar dan kering dengan kandungan kurkumin tinggi. Sangat diminati pasar farmasi, suplemen, dan kuliner global.',
 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=800&q=80', 'Ton', 1),

('Petai (Stink Bean)', 'Agriculture & Plantation',
 'Petai segar berkualitas pilihan, dikemas vakum untuk menjaga kesegaran. Sangat populer di pasar Asia Tenggara dan diaspora Indonesia.',
 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80', 'Kg', 500),

('Jengkol (Dogfruit)', 'Agriculture & Plantation',
 'Jengkol pilihan berkualitas ekspor, dikemas higienis. Komoditas unik Indonesia dengan permintaan tinggi di pasar Asia Tenggara.',
 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=800&q=80', 'Kg', 500),

-- Spices & Herbs
('Kayu Manis (Cinnamon)', 'Spices & Herbs',
 'Kayu manis Cassia dan Ceylon grade A dari Sumatera Barat. Aroma kuat, kandungan minyak atsiri tinggi. Salah satu rempah ekspor unggulan Indonesia.',
 'https://images.unsplash.com/photo-1588710929895-f5a4b5c4a40b?auto=format&fit=crop&w=800&q=80', 'Ton', 1),

('Vanili (Vanilla)', 'Spices & Herbs',
 'Vanili asli Indonesia (Vanilla planifolia) dari Flores dan Papua. Kandungan vanillin alami tinggi, sangat diminati industri makanan dan parfum global.',
 'https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&w=800&q=80', 'Kg', 100),

('Rempah Campur (Mixed Spices)', 'Spices & Herbs',
 'Campuran rempah pilihan Indonesia: cengkeh, pala, lada hitam, dan kapulaga. Dikemas dalam berbagai format sesuai kebutuhan importir.',
 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80', 'Ton', 1),

-- Processed & Food Products
('Kopi Aming (Aming Coffee)', 'Processed & Food Products',
 'Kopi Aming khas Kalimantan Barat — kopi halus dengan cita rasa unik, disangrai dan dikemas dengan standar ekspor. Warisan kuliner lokal yang mendunia.',
 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80', 'Kg', 200),

('Gula Aren (Palm Sugar)', 'Processed & Food Products',
 'Gula aren murni dari nira pohon aren pilihan. Proses tradisional menghasilkan gula dengan aroma karamel khas. Tersedia dalam bentuk cetak dan bubuk.',
 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80', 'Ton', 2),

('Tepung Sagu (Sago Flour)', 'Processed & Food Products',
 'Tepung sagu murni dari pohon sagu Kalimantan. Bebas gluten, ideal untuk industri pangan, farmasi, dan industri tekstil internasional.',
 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80', 'Ton', 5),

('Keripik Dagangan (Trade Chips)', 'Processed & Food Products',
 'Keripik aneka varian khas Indonesia: singkong, pisang, tempe, dan kentang. Dikemas dalam kemasan retail siap ekspor ke pasar diaspora dan specialty food.',
 'https://images.unsplash.com/photo-1578926375605-eaf7559b1458?auto=format&fit=crop&w=800&q=80', 'Kg', 500),

('Indomie (Instant Noodles)', 'Processed & Food Products',
 'Indomie berbagai varian rasa, produk mie instan ikonik Indonesia. Tersedia dalam kemasan karton bulk untuk ekspor ke seluruh dunia.',
 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80', 'Karton', 1000),

('Belungkur', 'Processed & Food Products',
 'Belungkur — produk olahan tradisional khas Kalimantan Barat. Dikemas higienis dengan standar ekspor untuk pasar komunitas dan specialty food Asia.',
 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80', 'Kg', 300),

('Tampek Beras (Rice Cake)', 'Processed & Food Products',
 'Tampek beras — kue beras tradisional Kalimantan Barat. Dikemas vakum dengan masa simpan panjang, cocok untuk pasar diaspora Indonesia global.',
 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80', 'Kg', 200),

('Capel', 'Processed & Food Products',
 'Capel — produk olahan pangan khas lokal dengan cita rasa autentik. Diproduksi dengan standar kebersihan dan dikemas untuk distribusi internasional.',
 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=800&q=80', 'Kg', 200),

-- Industrial & Biomass
('Arang Briket (Charcoal Briquette)', 'Industrial & Biomass',
 'Arang briket berkualitas premium dari batok kelapa dan kayu pilihan. Kalori tinggi, asap rendah. Sangat diminati pasar BBQ di Eropa, Timur Tengah, dan Amerika.',
 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=800&q=80', 'Ton', 20),

('Bonggol Jagung (Corn Cob)', 'Industrial & Biomass',
 'Bonggol jagung kering sebagai bahan biomassa energi. Nilai kalor tinggi, cocok untuk industri energi terbarukan dan pakan ternak internasional.',
 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=800&q=80', 'Ton', 10),

('Minyak Nilam (Patchouli Oil)', 'Industrial & Biomass',
 'Minyak nilam murni (Pogostemon cablin) dari Aceh dan Sumatera. Kandungan patchouli alkohol tinggi, standar ISO. Bahan baku utama industri parfum dunia.',
 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80', 'Kg', 50),

('Tepung Kayu Lengket (Sticky Wood Flour)', 'Industrial & Biomass',
 'Tepung kayu halus dengan daya rekat tinggi, digunakan sebagai bahan baku industri kertas, MDF, dan komposit kayu internasional.',
 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80', 'Ton', 5),

('Kayu Kopi (Coffee Wood)', 'Industrial & Biomass',
 'Kayu kopi dari pohon kopi tua yang tidak produktif. Digunakan sebagai biomassa, arang premium, atau bahan kerajinan. Berkelanjutan dan ramah lingkungan.',
 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80', 'Ton', 5),

-- Leaves & Botanicals
('Daun Pisang (Banana Leaf)', 'Leaves & Botanicals',
 'Daun pisang segar dan kering berkualitas ekspor. Digunakan untuk pembungkus makanan alami, dekorasi restoran, dan industri kemasan ramah lingkungan.',
 'https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?auto=format&fit=crop&w=800&q=80', 'Ton', 1),

('Daun Kelor (Moringa Leaf)', 'Leaves & Botanicals',
 'Daun kelor segar dan bubuk organik bersertifikat. Superfood dengan kandungan nutrisi luar biasa, sangat diminati industri suplemen dan makanan kesehatan global.',
 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?auto=format&fit=crop&w=800&q=80', 'Ton', 1),

('Daun Ketapang (Indian Almond Leaf)', 'Leaves & Botanicals',
 'Daun ketapang kering berkualitas premium. Sangat diminati industri akuakultur dan hobi ikan hias global karena sifat antibakteri alaminya.',
 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=800&q=80', 'Kg', 100),

('Kratom / Keratom (Mitragyna speciosa)', 'Leaves & Botanicals',
 'Daun kratom kering berkualitas tinggi dari Kalimantan Barat. Tersedia dalam berbagai varian: Maeng Da, Borneo Red, Green Vein. Ekspor sesuai regulasi negara tujuan.',
 'https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=800&q=80', 'Ton', 1),

-- Apparel
('Baju / Pakaian (Apparel)', 'Apparel',
 'Pakaian berkualitas ekspor: batik, tenun tradisional, dan pakaian kasual. Produksi dari mitra UMKM terpilih dengan standar quality control ketat untuk pasar internasional.',
 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80', 'Pcs', 1000);

-- ============================================================
-- VERIFICATION QUERY — Run after insert to confirm all 31 rows
-- ============================================================
-- SELECT category, COUNT(*) as total FROM products GROUP BY category ORDER BY category;
-- Expected: Agriculture & Plantation (10), Spices & Herbs (3), Processed & Food Products (8),
--           Industrial & Biomass (5), Leaves & Botanicals (4), Apparel (1) = 31 total