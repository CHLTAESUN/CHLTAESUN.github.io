import { defineConfig } from 'astro/config';

// 메인 사이트 username.github.io 용. base = '/'.
// 커스텀 도메인 쓸 때 site 값만 바꾸면 됨.
export default defineConfig({
  site: 'https://chltaesun.github.io',
  base: '/',
});
