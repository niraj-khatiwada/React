class Machine extends React.Component {
  static defaultProps = {
    items: ['🥝', '🍎', '🍑'],
  }
  render() {
    console.log(this.props.items)
    const first = this.props.items[
      Math.floor(Math.random() * this.props.items.length)
    ]
    const second = this.props.items[
      Math.floor(Math.random() * this.props.items.length)
    ]
    const third = this.props.items[
      Math.floor(Math.random() * this.props.items.length)
    ]
    console.log(first, second, third)
    console.log(first == second && second == third)
    return (
      <div className="fruits">
        <ul>
          {this.props.items.map((value, index) => {
            return <li>{value}</li>
          })}
        </ul>
      </div>
    )
  }
}
