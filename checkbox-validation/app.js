const ValidationMessage = props => {
  const { txt } = props;
  return <p> {txt} </p>;
};

const OrderForm = props => {
  const { submit, checked, change } = props;
  return (
    <form onSubmit={submit}>
      <input type="checkbox" id="age" onChange={change} checked={checked} />
      <label htmlFor="age"> Mam co najmniej 16 lat </label> <br />
      <button> Kup bilet </button>
    </form>
  );
};

class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmitted: false
  };

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true
      });
    }
  };

  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <ValidationMessage txt="Możesz obejrzeć film" />;
      } else {
        return (
          <ValidationMessage txt="Nie mozesz obejrzeć tego filmu, jeśli masz mniej niż 16 lat" />
        );
      }
    } else {
      return null;
    }
  };

  render() {
    const { isConfirmed, isFormSubmitted } = this.state;

    return (
      <>
        <h1>Kup bilet</h1>
        <OrderForm
          change={this.handleCheckboxChange}
          submit={this.handleFormSubmit}
          checked={isConfirmed}
        />
        {this.displayMessage()}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
