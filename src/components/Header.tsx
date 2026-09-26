type HeaderProps = {
  title: string;
  className?: string;
};

export default function Header({ title, className }: HeaderProps) {
  return (
    <header>
      <h1 className={className}>{title}</h1>
    </header>
  );
}

// 元々、ナビゲーションタグ内の、<ul>の中のアイテム（<li>）が、繰り返し記述されていました。

// ↓ これをリファクタリングすると、：

// 実際に表示するデータを、配列として外に出す
// 表示する UI を１度記述し、配列を map() でループさせる
// 定数は、大文字のスネークケースで定義するのが JavaScript/ React の一般的な規約です！
// JS と組み合わせることで、具体的なデータを外に出せるので便利ですね！

// これで、ヘッダーに、新しい項目を追加するのも簡単です 👍

// フッターに、最新の年（2026）を記載することは、一般的に行われます。
// 今回は、{new Date().getFullYear()} のように、直接 JS の構文を記述しています
// しかし、コメントアウトにある方法でも、同じ結果が出力されます。
// １度変数に格納したほうが、マークアップが簡潔になるケースもありますよ！

// React でのイベント処理の種類：

// onClick: クリックイベント
// onChange: 入力変更イベント
// onSubmit: フォーム送信イベント
// ボタンがクリックされた時（イベント発生時）に発火する関数を使用する方法を、しっかり学びましょう！

// 3️⃣ 論理演算子（&&）を使った条件付きレンダリング
// 前回学んだ三項演算子との違い：

// function Message({ hasError, errorMessage }) {
//   return (
//     <div>
//       {/* 論理演算子（&&）: 条件を満たす時だけ表示 */}
//       {hasError && <p className="error">{errorMessage}</p>}

//       {/* 三項演算子（? :）: 2つの選択肢から選ぶ */}
//       {hasError ? (
//         <p className="error">{errorMessage}</p>
//       ) : (
//         <p className="success">正常です</p>
//       )}
//     </div>
//   );
// }
