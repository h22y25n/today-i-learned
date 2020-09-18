// import '../images/copy-regular.svg';
// import '../images/folder-open-regular.svg';

// 각 아이콘을 JS로 긁어오도록 자동화
function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context('../images/', true, /\.svg$/));