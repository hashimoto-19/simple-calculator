import type { CalculatorButton } from "../types";
type ButtonProps = {
  label: string;
  variant: CalculatorButton;
  className?: string;
  onClick?: () => void;
};

export function Button({ label, variant, className, onClick }: ButtonProps) {
  // ❌ className={variant + " " + className}
  //    → HTML では class="digit ..." になるだけ。digit という CSS は無いので色は付かない。
  //
  // ✅ やること: variant（名前）を、Tailwind の色クラス（見た目）に変換する
  //
  // 手順:
  // 1. 下の colorClass を、variant ごとに変える
  // 2. button の className に colorClass と className を両方入れる
  //
  // 2色だけ:
  //   digit    → "bg-zinc-700 text-white"
  //   operator → "bg-orange-500 text-white"

  const colors = {
    digit: "bg-zinc-400 text-black",
    operator: "bg-orange-500 text-white",
  };
  const colorClass = colors[variant];
  // ← ここに上の色クラスを入れる

  return (
    <button
      type="button"
      className={colorClass + "" + (className ?? "")}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

// ButtonProps の型定義は、実行時に表示するものではなく、TypeScript のチェック専用だからです。

// export default function Button() {}読み込み時は {} を使いません。名前は変更できます。
// export function Button() {}名前付きで export します。複数 export できます
