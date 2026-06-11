// 링크 미리보기용 OG 카드 이미지 생성 (담월 문구). public/og.png 출력.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(__dirname, '..', 'public', 'og2.png');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1d1834"/>
      <stop offset="60%" stop-color="#15131f"/>
      <stop offset="100%" stop-color="#141020"/>
    </linearGradient>
    <radialGradient id="vign" cx="50%" cy="40%" r="75%">
      <stop offset="60%" stop-color="#150f28" stop-opacity="0"/>
      <stop offset="100%" stop-color="#0e0a1a" stop-opacity="0.6"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#vign)"/>

  <!-- 브랜드 문구 (가운데, 달 없음) -->
  <text x="600" y="300" text-anchor="middle" font-family="Batang, 'Malgun Gothic', serif" font-size="210" font-weight="700" fill="#f3eee2" letter-spacing="30">담월</text>
  <text x="600" y="395" text-anchor="middle" font-family="Batang, 'Malgun Gothic', serif" font-size="50" fill="#e8dcb5" letter-spacing="10">달빛을 담은 술 한 병</text>
  <text x="600" y="455" text-anchor="middle" font-family="Batang, 'Malgun Gothic', serif" font-size="30" fill="#aaa3b8" letter-spacing="3">오늘의 밤에 어울리는 술을 담아 전합니다</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('OK ->', out);
