const randNum = () => {
  return Math.floor(Math.random() * 10)
}

class JSXConditionals extends React.Component {
  render() {
    const num = randNum()
    return (
      <div>
        <h1>
          Your lucky number is {num === 7 && num}{' '}
        </h1>
      </div>
    )
  }
}

ReactDOM.render(<JSXConditionals />, document.querySelector('.conditionals'))
