/**
 NOTE:
   Babelとは
    jsのコンパイラ。
    前提としてjsには世代（ES2015, ES2016など）ごとの言語仕様がある。
    Babelはブラウザごとの「上記世代へのサポートの違い」を解消してくれる、Node.js製のツール。
*/
module.exports = {
  presets: [['next/babel', { 'preset-react': { runtime: 'automatic' } }]],
  plugins: [
    'babel-plugin-macros',
    ['babel-plugin-styled-components', { ssr: true }],
  ],
}
