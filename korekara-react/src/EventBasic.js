export default function EventBasic({ type }) {
  // clickイベントハンドラー
  const current = () => {
    const d = new Date();
    // typeの属性に応じて現在日時をログに出力
    switch(type) {
      case 'data':
        console.log(d.toLocaleDateString());
        break;
      case 'time':
        console.log(d.toLocaleTimeString());
        break;
      default:
        console.log(d.toLocaleString());
    }
  };

  return (
    <div>
      <button onClick={current}>現在時刻を取得</button>
    </div>
  );
}
