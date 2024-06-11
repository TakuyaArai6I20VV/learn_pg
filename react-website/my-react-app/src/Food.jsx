
function Food() {
  const food1 = "Orange";
  const food2 = "Banana";
  const food3 = "Tomato";

  return (
    <ul>
      <li>{food1}</li>
      <li>{food2.toUpperCase()}</li>
      <li>{food3}</li>
    </ul>
  );
}

export default Food
