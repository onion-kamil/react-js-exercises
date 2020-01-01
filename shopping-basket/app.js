class App extends React.Component {
  state = {
    availableProduct: 7,
    shoppingCart: 5
  };

  handleRemoveFromCard = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart - 1
    });
  };

  handleAddToCard = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart + 1
    });
  };

  handleBuy = () => {
    this.setState({
      availableProduct: this.state.availableProduct - this.state.shoppingCart,
      shoppingCart: 0
    });
  };

  render() {
    const { shoppingCart, availableProduct } = this.state;

    const style = shoppingCart === 0 ? { opacity: 0.3 } : {};

    return (
      <>
        <button
          disabled={shoppingCart ? false : true}
          onClick={this.handleRemoveFromCard}
        >
          -
        </button>
        <span style={style}>{shoppingCart}</span>
        <button
          disabled={availableProduct === shoppingCart ? true : false}
          onClick={this.handleAddToCard}
        >
          +
        </button>
        {shoppingCart > 0 && <button onClick={this.handleBuy}> Kup </button>}
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
