type ButtonProps = {
  label: string;
};

export function Button({ label, className }: ButtonProps & { className?: string }) {
  return <button className={className} type="button">{label}</button>;
}


// export default function Button() {}　読み込み時は {} を使いません。名前は変更できます。
// export function Button() {}　名前付きで export します。複数 export できます


