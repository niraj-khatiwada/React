class Machine extends React.Component {
  render() {
    const { ...obj } = this.props
    console.log(obj)
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
    if (first === second && second === third) {
      return (
        <div>
          <p>{[first, second, third]}</p>
          <h1>Winner</h1>
        </div>
      )
    } else {
      return <p>Try again</p>
    }
  }
}
