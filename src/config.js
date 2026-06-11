// 사이트 전역 설정. 여기 값만 바꾸면 전체 반영됨.
export const SITE = {
  name: '담월',
  storeName: '담월상점',
  tagline: '달빛을 담은 술 한 병',
  description: '오늘의 밤에 어울리는 술을 담아 전합니다.',
  phone: '',          // 나중에 입력
  kakao: '',          // 없음
  instagram: '',      // 없음
  storeMain: '',      // 스마트스토어 아직 없음 -> 만들면 여기 주소 입력
  address: '',        // 없음
};

// 상단 메뉴. 추가/삭제 자유.
export const NAV = [
  { label: '홈', href: '/' },
  { label: '상품', href: '/products/' },
  { label: '소개', href: '/about/' },
  { label: '문의', href: '/contact/' },
  { label: 'FAQ', href: '/faq/' },
];
