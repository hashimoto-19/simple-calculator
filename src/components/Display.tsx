type DisplayProps = {
<<<<<<< HEAD
  // 文字を表示させるためのものなので、string型でよい
  // 計算するときはnumber型
  value: string;
};
=======
    // 文字を表示させるためのものなので、string型でよい
    // 計算するときはnumber型
    value: string;
}

export function Display ({ value }: DisplayProps) {
    return (
        <div>{value}</div>
    );
}
>>>>>>> 3a26fe0947ebbe77cff6a78c21920ea26141b7ca

export function Display({ value }: DisplayProps) {}
