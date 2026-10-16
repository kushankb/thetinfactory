// Downloads the site's images from the Squarespace CDN into public/images.
// Run once (`npm run fetch-images`) and commit public/images, so the site keeps
// working after the Squarespace subscription ends. The deploy workflow also runs
// this as a fallback, skipping files that already exist.
import { mkdir, writeFile, access } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const CDN = 'https://images.squarespace-cdn.com/content/v1/5fa76a206a30dd6a1fe701c3/';
const outDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images');

// local filename -> CDN path (format=1500w serves a web-sized version)
const images = {
  'favicon.ico': '1605814907400-6W8X16YXW7GWDOGY54AY/favicon.ico',
  'tins-hero.jpg': '1605494277614-7DFW5YBYVVI14C57A5T5/nick-fewings-8MGUft1c5bs-unsplash.jpg',
  'tins-who.jpg': '1605508322079-XY6XH5U9WWPK8YTAFBJH/pedro-da-silva-vK5MZEg8_nc-unsplash.jpg',
  'why-trash.png': '1605503168937-3UQW9ZQSGKUQHWB6Z65N/trash.png',
  'why-product.png': '1605503782778-MXUREN48V70FFJKI9JBS/product.png',
  'why-geometric.png': '1605503854888-FUGQFF07GLQUUV5I9S13/2+geometric.png',
  'why-treasure.png': '1605503961772-02GS5OPXMQT7L8VGTKQT/treasure.png',
  'design-thinking.png': '1605506849135-5QEVSG8VC5BH38NIUQJW/design-thinking.png',
  'how-1-creative-process.png': '1605489144131-QT8LIO7OF4N7BUDTQ3ZA/1+creative-process.png',
  'how-2-geometric.png': '1605489226938-DCA93BA86MBXJA10WE89/2+geometric.png',
  'how-3-magic-wand.png': '1605489290909-C15UNP878BNN1B4IC9HC/3+magic-wand.png',
  'how-4-magnifying-glass.png': '1605489653461-OGLGN7EFNM39KNW44N3B/4a+magnifying-glass.png',
  'how-5-cogwheel.png': '1605489695725-75SZI0DOJHVKPJQ69539/5+cogwheel.png',
  'how-6-delivery-truck.png': '1605489734189-2LEFX6P2AC6VJJ3YKF7T/6+delivery-truck.png',
  'Brow_2.jpg': '4f3b3ea5-461c-4ed6-9ce6-b0769dd3a0d8/Brow_2.jpg',
  'Benetton_1.jpg': 'b80fb6d5-8e34-4ed9-87e3-d306e6bb3a20/Benetton_1.JPG',
  'Tube_1.jpg': '97a154a6-b5b6-4428-9f43-4558c56c8cf1/Tube_1.JPG',
  'BlueYellow_1.jpg': 'fc23cfd5-e9ee-47b3-a2be-3115594a0cd9/BlueYellow_1.jpg',
  'Magic_1.jpg': 'edeb5421-be3c-4e7b-a103-39bc1cfba684/Magic_1.JPG',
  'Milkshake_1.jpg': 'f3680a96-8030-4908-b6bd-ea54ef17a79a/Milkshake_1.jpg',
  'Woodland_2.jpg': '764aefa3-220a-4b08-a181-3a90522be384/Woodland_2.JPG',
  'Yag_3.jpg': '16f6ba73-5d66-40dd-a4d3-d6138a2ad6b0/Yag_3+copy.JPG',
  'London_3.jpg': 'cb9497e3-6698-4892-95b4-59627faec48e/London_3.JPG',
  'Brow_1.jpg': 'ddd8c716-595d-4b18-88f6-e8c6d037933f/Brow_1.JPG',
  'London_4.jpg': 'd94c0fea-86d5-4cb6-9b51-4c10f25ef13e/London_4.JPG',
  'London_5.jpg': '84053f58-0269-4680-8b0b-140003e5a7fc/London_5.JPG',
  'Kahwa_2.jpg': '43f6fb05-b52c-4ef1-953a-10ab9ffbb274/Kahwa_2.JPG',
  'Desire_1.jpg': '11579bab-a0ba-448d-acb7-883652cb5472/Desire_1.JPG',
  'Einstein_1.jpg': 'e30885a3-6845-4aff-a9b2-a3cc5afb7b6b/Einstein_1.JPG',
  'Circular_1.jpg': 'fe934b40-b1a5-4f5a-845d-4b69de57462e/Circular_1.JPG',
  'DSC_9077.jpg': '01ea91f9-90d5-4a82-a883-b7a664cd6800/DSC_9077.JPG',
  'Black_1.jpg': 'd1b08cb7-7be5-4d7e-aeaf-df06e3531009/Black_1.JPG',
  'DSC_9140.jpg': 'aa973bb4-b269-4aaa-bd22-da1cffe7bb98/DSC_9140.JPG',
  'DSC_9069.jpg': '910bbba7-1688-4dd6-8933-2327729ec8b6/DSC_9069.JPG',
  'DSC_9040.jpg': 'bb4ee988-ff4d-4fc2-a0e6-642420ce97f2/DSC_9040.JPG',
  'DSC_9028.jpg': '2e0e28e6-73b5-4400-b009-4a9bbe5b7a67/DSC_9028.JPG',
};

await mkdir(outDir, { recursive: true });
let fetched = 0, skipped = 0, failed = 0;
for (const [name, path] of Object.entries(images)) {
  const dest = join(outDir, name);
  try { await access(dest); skipped++; continue; } catch {}
  const url = CDN + path + (name.endsWith('.ico') ? '' : '?format=1500w');
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await writeFile(dest, Buffer.from(await res.arrayBuffer()));
    fetched++;
    console.log('✓', name);
  } catch (e) {
    failed++;
    console.error('✗', name, e.message);
  }
}
console.log(`\n${fetched} downloaded, ${skipped} already present, ${failed} failed`);
if (failed) process.exitCode = 1;
