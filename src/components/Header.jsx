import { FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
}
return (
    <header>
        <div className="container">
            {/* <h1>計算機アプリ</h1> */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden"
            >
                {isMenuOpen ? <FaXmark /> : <FaBars />}
            </button>
            <nav className={`${isMenuOpen ? 'block' : 'hidden'}`}>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>

); }
};
export default Header;
// useState ：

// React コンポーネントで、変数を管理するための、組み込みの機能です。
// 今回は、ハンバーガーメニューが、開いているか、閉じているか（isMenuOpen）という値を、true or falseで管理しています。
// 関数コンポーネントが return する、マークアップの中で JS を記述したいときは、波括弧（カーリーブラケット）{} の中に記述します
// 今回は、JS の三項演算子（? :）を使って、条件分岐を記述しています
// {isMenuOpen ? <FaXmark /> : <FaBars />}👍



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