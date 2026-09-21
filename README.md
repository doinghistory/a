# 歴史する｜高校日本史

GitHub Pagesで公開できる、授業用ホームページの初期版です。

## ファイル構成

- `index.html` — トップページ
- `css/style.css` — デザイン
- `js/main.js` — メニュー・スクロールアニメーション

## GitHub Pagesへの公開

1. GitHubで新しいリポジトリを作成
2. このフォルダの中身をアップロード
3. `Settings` → `Pages`
4. `Deploy from a branch`
5. Branchを `main` / `/ (root)` に設定
6. Save

## 次に変更する場所

### YouTube
`index.html` の「観る」セクションを、実際のYouTube動画の埋め込みに変更します。

### 教材
各 `href="#"` をPDFやGoogle Drive、Google FormsなどのURLに変更します。

### 一問一答
以前作成した「日本史一問一答 — 山川準拠」のURLを、`archive-list` のリンクに設定します。

### 写真
現在は外部画像に依存せず、CSSだけで仮ビジュアルを作っています。
実際の寺院・古墳・授業風景などの写真を `assets/images/` に入れ、背景画像へ差し替えるとさらに完成度が上がります。
