// 링크 미리보기용 OG 카드 이미지 생성 (담월 문구). public/og.png 출력.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(__dirname, '..', 'public', 'og.png');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1d1834"/>
      <stop offset="60%" stop-color="#15131f"/>
      <stop offset="100%" stop-color="#141020"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f3ead3" stop-opacity="0.9"/>
      <stop offset="55%" stop-color="#e8dcb5" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#e8dcb5" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="moon" cx="38%" cy="36%" r="70%">
      <stop offset="0%" stop-color="#fdf9ee"/>
      <stop offset="60%" stop-color="#eaddb8"/>
      <stop offset="100%" stop-color="#cbb88e"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- 달 + 후광 (우상단) -->
  <circle cx="960" cy="170" r="230" fill="url(#glow)"/>
  <circle cx="960" cy="170" r="92" fill="url(#moon)"/>
  <circle cx="930" cy="150" r="14" fill="#c9b88a" opacity="0.35"/>
  <circle cx="985" cy="195" r="10" fill="#c9b88a" opacity="0.3"/>
  <circle cx="975" cy="135" r="8" fill="#c9b88a" opacity="0.28"/>

  <!-- 브랜드 문구 -->
  <text x="120" y="330" font-family="Batang, 'Malgun Gothic', serif" font-size="180" font-weight="700" fill="#f3eee2" letter-spacing="20">담월</text>
  <text x="128" y="410" font-family="Batang, 'Malgun Gothic', serif" font-size="44" fill="#e8dcb5" letter-spacing="6">달빛을 담은 술 한 병</text>
  <text x="128" y="470" font-family="Batang, 'Malgun Gothic', serif" font-size="30" fill="#aaa3b8" letter-spacing="2">오늘의 밤에 어울리는 술을 담아 전합니다</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('OK ->', out);
