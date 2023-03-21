/*Q4. Placeholder for Blacklist component
 * - This component should create a form to accept user input (name of traveller). 
 * - The submit handler should make a call to blacklistTraveller() function with the 
 *   right parameters.
 * - Make sure to invalidate/clear the form input fileds in the UI during cleanup.*/

export default class Blacklist extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.blacklistTraveller;
    const passenger = form.blacklistname.value;
    this.props.blacklistTraveller(passenger);
    form.blacklistname.value = "";
  }

  render() {
    return (
      <form name="blacklistTraveller" onSubmit={this.handleSubmit}>
        <input type="text" name="blacklistname" placeholder="Name" />
        <button>Blacklist</button>
      </form>
    );
  }
}


/*End of Q4*/


