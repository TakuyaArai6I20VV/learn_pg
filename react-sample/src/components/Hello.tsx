const Hello = () => {
  const onClick = () => {
    alert('hello')
  }
  const text = 'Hello, React'

  return (
    <div onClick={onClick}>
      <h1>{text}</h1>
    </div>
  )
}

export default Hello
