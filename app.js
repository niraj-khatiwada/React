class Welcome extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Form />
        <Greetings value= {[{1:'one', 2:"two"}]} />
      </div>
    )
  }
}

ReactDOM.render(<Welcome />, document.querySelector('.greetings'))
