type DisplayProps = {
  // 文字を表示させるためのものなので、string型でよい
  // 計算するときはnumber型
  value: string;
  className?: string;
};

function sizeClassFor(value: string): string {
  const length = value.length;
  // 最大14桁まで枠内に収まるように段階的に小さくする
  if (length > 6) return "text-4xl"; // 7〜9桁
  return "text-6xl"; // 〜6桁
}

export function Display({ value, className }: DisplayProps) {
  return (
    <div
      className={[
        "w-full text-right text-white font-light tracking-tight tabular-nums",
        sizeClassFor(value),
        className ?? "",
      ].join(" ")}
    >
      {value}
    </div>
  );
}
