export default function MyHello(props) {
  return (
    <div>
      <div>こんにちは、{props.lastName + props.firstName}さん！</div>
      <div>あなたは来年{props.age + 1}歳です。</div>
    </div>
  );
}
