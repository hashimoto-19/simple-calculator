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

- [ ] Vite による React の導入（TS + SWC）
- [ ] Tailwind CSS の導入
- [ ] UIの作成（電卓の全体フレーム / ディスプレイ表示部分 / 数字ボタン / オペレーションボタン）
- [ ] ロジック・状態管理の実装（見えているUIを操作可能にする）
- [ ] GitHub Pages へデプロイするための設定を追加

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
