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