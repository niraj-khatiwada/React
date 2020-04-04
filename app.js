class Play extends React.Component {
  render() {
    return (
      <div>
        <h1>Start the game</h1>
        <Machine />
      </div>
    )
  }
}

ReactDOM.render(
  <Play items={['🥝', '🍎', '🍑']} />,
  document.querySelector('.slotMachine')
)
