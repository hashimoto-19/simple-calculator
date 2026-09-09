type ButtonProps = {
  label: string;
  className?: string;
  onClick?: () => void;
};

export function Button({ label, className, onClick }: ButtonProps) {
  return <button className={className} type="button" onClick={onClick}>{label}</button>;
}

// ButtonProps の型定義は、実行時に表示するものではなく、TypeScript のチェック専用だからです。

// export default function Button() {}読み込み時は {} を使いません。名前は変更できます。
// export function Button() {}名前付きで export します。複数 export できます
