import { useState } from 'react';

export default function StateBasic({ init }) {
  // Props (init) で State (Count)を)初期化
  const [count, setCount] = useState(init);
  // [カウント]ボタンクリック時にカウント値をインクリメント
  const handleCLick = () => setCount(count + 1);
  return (
    <>
      <button onClick={handleCLick}>カウント</button>
      <p>{count}回、クリックされました。</p>
    </>
  )
}
