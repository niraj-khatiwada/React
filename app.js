class Play extends React.Component {
  render() {
    return (
      <div>
        <h1>Start the game</h1>
        <Machine items={['🥝', '🍎', '🍑']} />
        <Machine items={['🥝', '🍎', '🍑']} />
      </div>
    )
  }
}

ReactDOM.render(<Play />, document.querySelector('.slotMachine'))
