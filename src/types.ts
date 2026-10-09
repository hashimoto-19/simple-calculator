// 型の作成
// 参考: https://nakamuuu.blog/typescript-type-check/
//
// 【進め方】全部の型を先に完成させなくてOK。
// 機能を1つ足すたびに、必要な型だけここに追加・更新する。

// ✅ できている
export type Operator = "+" | "-" | "×" | "÷";
export type CalculationOperator = "=";
export type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

// ✅ できている: ボタンの見た目（2色）
// digit = 数字・AC・= など / operator = + − × ÷
export type CalculatorButton = "digit" | "operator";

// ---------- まだ空でよい（使うタイミングで埋める）----------

// 電卓の状態 → App で previousValue / operator を useState するときに埋める
// ヒント: displayValue: string / previousValue: number | null / operator: Operator | null
// export type CalculatorState = {
//  displayValue: string;
//  previousValue: number | null;
//  operator: Operator | null;
//  waitingForOperand: boolean;
// };
// AC → AC の処理を直すときに埋める（例: "AC"）
export type CalculatorAC = {};

// ※ 小数点（"."）は不要。型もボタンも作らなくてよい。

// ---------- いまの作業 ----------
// ✅ AC は setDisplayValue("0") に修正済み
// 次: 演算子（previousValue / operator の state）
