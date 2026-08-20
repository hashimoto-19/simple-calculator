![](https://static.zenn.studio/user-upload/e2d2180ca678-20260818.png)

# シンプルな電卓アプリ（iPhone風）

## 概要

このプロジェクトでは、iPhoneの標準アプリのようなシンプルな電卓アプリを構築します。
四則演算やクリア機能などの基本的な計算機能の実装を通して、Reactの基礎を固めます。

さらに、実際の開発現場を想定し、TypeScriptの活用やGit/GitHubによるバージョン管理を実践します。

## 学習目標

- **Reactの基礎**: コンポーネントの分割、`useState` を用いた状態管理（入力値、計算結果、演算子の状態など）、イベントハンドリングを学習します。
- **TypeScript**: 変数やコンポーネントのProps、状態に対する適切な型定義を行い、安全なコードを書く手法を学びます。
- **Git / GitHub**: コミット、プッシュ、イシュー→ブランチ→PR など、実際の開発を想定したバージョン管理の基礎を体験します。

## 推奨技術

このプロジェクトの難易度と趣旨を踏まえて、以下の使用をお勧めします。

- Vite を用いた React 環境構築
- TypeScript による型チェック
- Tailwind CSS を用いたスタイリング（iPhone風のUI再現）
- Git / GitHub によるソースコードのバージョン管理
- GitHub Pages へのデプロイ

---

## 🎯 お題

**「ユーザーストーリー」を全て満たすアプリを構築してください。**

(スタイルは、あなた自身で独自にカスタマイズすることも可能です。）

### 必須機能

- **数字入力**: 0〜9の数字、および小数点の入力。
- **四則演算**: 足し算（+）、引き算（-）、掛け算（×）、割り算（÷）の実行。
- **クリア機能**: 現在の入力をリセットする（AC）。
- **結果表示**: 入力中の数値や計算結果を画面上部に表示する。

### ユーザーストーリー

- [ ] ユーザーがサイトにアクセスすると、iPhone風の電卓UIが表示されている。
- [ ] 数字ボタン（0-9）をクリックすると、ディスプレイにその数字が表示される。
- [ ] 演算子ボタン（+, -, ×, ÷）をクリックし、次の数字を入力して「=」をクリックすると、正しい計算結果が表示される。
- [ ] 連続して計算を行うことができる（例：`1 + 2 + 3 =` で `6` が表示される）。
- [ ] 「AC」ボタンをクリックすると、入力内容や計算状態がリセットされ、ディスプレイが「0」に戻る。
- [ ] アプリケーションがデプロイされており、誰でもアクセス可能である。

その他の要件：

- [ ] TypeScriptを使った型定義ができている
- [ ] コンポーネントの分割・再利用が適切にできている
- [ ] ソースコードがGitHubで管理されている。
- [ ] mainブランチに直接コミットせず、作業用ブランチを作成し、プルリクエストを作成する実践的な開発の流れで進めている

---

## ToDo

着手すべきタスク（Issues）は、以下のとおりです：

- [x] Vite による React の導入（TS + SWC） ※テンプレート導入済み
- [ ] Tailwind CSS の導入
- [ ] UIの作成（電卓の全体フレーム / ディスプレイ表示部分 / 数字ボタン / オペレーションボタン）
- [ ] ロジック・状態管理の実装（見えているUIを操作可能にする）
- [ ] GitHub Pages へデプロイするための設定を追加

---

## 自分で進める細かいタスク

**進め方:** 1タスク = 1作業。コードは自分で書く。`main` には直接コミットしない。小さくコミットする。

**いまの状態:** Vite + React + TypeScript は入っている。Tailwind のパッケージと Vite プラグインもある。`src/App.tsx` はまだ Vite の初期画面。電卓 UI / 計算ロジック / デプロイ設定は未着手。

### A. 開発の始め方

- [ ] `npm run dev` を実行し、ブラウザで初期画面が出ることを確認する
- [ ] `main` から作業ブランチを切る（例: `feature/calculator-ui`）。すでに `feature/calc-page_hashimoto` があるならそれを使ってよい

### B. Tailwind CSS を使えるようにする

パッケージと `vite.config.ts` のプラグインは入っている。CSS 側が未接続。

- [ ] Tailwind v4 の公式ドキュメントで、Vite での使い方を確認する
- [ ] `src/index.css` に Tailwind を読み込む記述を追加する
- [ ] `src/App.tsx` のどこかに Tailwind の `className` を1つ書き、色や余白が変わるか確認する
- [ ] 確認できたら、Vite 初期画面用の見た目（`App.css` や `index.css` のテンプレ CSS）を電卓用に整理する準備をする

### C. 型を先に決める

コンポーネントを増やす前に、TypeScript の型を小さなファイルに置く。

- [ ] `src/types.ts`（名前は任意）を作る
- [ ] 演算子の型を定義する（`+` `-` `×` `÷` だけを許す）
- [ ] 電卓の状態の型を定義する（少なくとも「画面に出している文字列」「直前の数値」「選んでいる演算子」）
- [ ] ボタンの見た目の種類の型を定義する（数字 / 演算子 / 機能 など）

### D. コンポーネントを分ける（見た目だけ。まだ計算しない）

iPhone の電卓を見ながら、色と配置だけ先に作る。`onClick` は後回しでよい。

- [ ] `src/components/` フォルダを作る
- [ ] `Display` を作る。Props は表示する文字列だけ。右寄せ・大きな白い数字
- [ ] `Button` を1つ作る。ラベル・色の種類・クリック時の関数を Props にする
- [ ] `Button` の色を3種類にする（暗い数字ボタン / オレンジの演算子 / 明るい機能ボタン）
- [ ] `0` だけ横幅が2倍になる Props を `Button` に足す
- [ ] `Calculator` を作る。黒い枠・角丸・幅を固定し、中に Display とボタンを並べる
- [ ] ボタンを iPhone と同じ並びに置く
  - 1行目: AC, （任意で ±, %）, ÷
  - 2行目: 7, 8, 9, ×
  - 3行目: 4, 5, 6, −
  - 4行目: 1, 2, 3, +
  - 5行目: 0（横長）, ., =
- [ ] `App.tsx` から初期テンプレを消し、`Calculator` だけを中央に出す
- [ ] ページ全体の背景を暗くし、電卓が中央に来るようにする
- [ ] ブラウザで見て、見た目が電卓になっていることを確認する（押してもまだ動かなくてよい）

※ `±` と `%` は必須機能ではない。見た目を寄せたいときだけ入れる。

### E. 数字入力だけ動かす

ここから `useState` を使う。演算子はまだ無視してよい。

- [ ] 表示用の state を作り、初期値を `"0"` にする
- [ ] その値を `Display` に渡す
- [ ] 数字ボタン（1〜9）を押すと、表示の末尾にその数字が付く
- [ ] 表示が `"0"` のときに `5` を押すと `"05"` ではなく `"5"` になる
- [ ] `0` ボタンを押したとき、`"0"` が `"00"` にならない
- [ ] `.` を押すと小数点が付く
- [ ] すでに `.` がある数字には、もう一度 `.` を付けられない
- [ ] `"0"` のときに `.` を押すと `"0."` になる

確認例: `1` → `2` → `3` で画面が `123`。`AC` はまだ動かなくてよい。

### F. AC を動かす

- [ ] AC を押すと表示が `"0"` に戻る
- [ ] あとで演算の state を足したら、それらもまとめて初期値に戻す

### G. 四則演算を1回分だけ動かす

`1 + 2 =` で `3` が出るまで。連続計算は次の節。

- [ ] 「画面の値」「前の値」「選んだ演算子」「次の数字待ちかどうか」を state で持つ
- [ ] `+` `-` `×` `÷` のどれかを押すと、今の画面の値と演算子を覚える
- [ ] 演算子のあと、次の数字を押し始めたら画面を新しい数字に切り替える
- [ ] 四則演算を行う関数を別ファイル（例: `src/utils/calculate.ts`）に書く。引数と戻り値に型を付ける
- [ ] `=` を押すと計算し、結果を画面に出す
- [ ] 足し算・引き算・掛け算・割り算を、それぞれ1回ずつ手で試す
- [ ] `÷` で 0 除算したときの表示を決める（`Error` にする、`0` にする、など）

確認例: `7` `+` `8` `=` → `15`

### H. 連続計算と演算子の切り替え

- [ ] `1 + 2 + 3 =` で `6` になる（`=` の前に途中結果を出す）
- [ ] `+` を押した直後に `×` を押したら、足し算ではなく掛け算になる
- [ ] `=` のあと、数字を押し始めたら新しい計算として入力できる
- [ ] `=` のあと、演算子を押したら「今の結果」を左辺にして続けられる

確認例: `1 + 2 + 3 =` → `6`  
確認例: `10 − 3 =` → `7` のあと `+ 1 =` → `8`

### I. 見た目の仕上げ（任意だがおすすめ）

- [ ] 選んでいる演算子ボタンの色が、押しているあいだだけ変わる
- [ ] 桁が多くなったら文字を小さくする、または画面からはみ出さない
- [ ] 使っていない Vite 初期ファイル（`App.css`、不要な画像など）を消す
- [ ] `README.md` 末尾の Vite テンプレート説明を、自分のアプリの説明に書き換える

### J. GitHub Pages へ出す

- [ ] Vite の `base` の意味をドキュメントで調べる
- [ ] リポジトリ名に合わせて `vite.config.ts` の `base` を設定する
- [ ] GitHub Pages の出し方を調べる（GitHub Actions か、手動アップロードか）
- [ ] 設定を入れてデプロイする
- [ ] デプロイ先 URL をブラウザで開き、電卓が動くことを確認する
- [ ] その URL を README の概要付近に書いておく

### K. 提出前チェック（ユーザーストーリー）

- [ ] サイトを開くと iPhone 風の電卓 UI がある
- [ ] 0〜9 を押すと画面に数字が出る
- [ ] 演算子のあと `=` で正しい結果が出る
- [ ] 連続計算ができる（`1 + 2 + 3 =` → `6`）
- [ ] AC で `0` に戻る
- [ ] デプロイされて、誰でも URL で触れる
- [ ] TypeScript の型が付いている
- [ ] Display / Button / Calculator のようにコンポーネントが分かれている
- [ ] GitHub で管理している
- [ ] `main` 直コミットではなく、作業ブランチ → プルリクエストで入れている

### コミットの切り方（目安）

1. Tailwind が効くところまで
2. 見た目だけの電卓 UI
3. 数字入力と小数点
4. AC
5. `=` までの四則演算
6. 連続計算
7. デプロイ設定

ブランチは1本でもよい。コミットは上のように細かく分ける。

### 詰まったら自分で調べるキーワード

- React `useState`
- TypeScript union type / Props の型
- Tailwind CSS v4 Vite
- Vite GitHub Pages `base`
- 電卓 連続計算 `waitingForOperand`（この名前で調べると実装の考え方にたどり着きやすい）

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
