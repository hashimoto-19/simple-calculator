type DisplayProps = {
  // 文字を表示させるためのものなので、string型でよい
  // 計算するときはnumber型
  value: string;
  className?: string;
};

export function Display({ value, className }: DisplayProps) {
  return <div className={className}>{value}</div>;
}
