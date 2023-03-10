
const dateRegex = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');
function jsonDateReviver(key, value) {
  if (dateRegex.test(value)) return new Date(value);
  return value;
}

async function graphQLFetch(query, variables = {}) {
  try {
    const response = await fetch('/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ query, variables })
    });
    const body = await response.text();
    const result = JSON.parse(body, jsonDateReviver);

    if (result.errors) {
      const error = result.errors[0];
      if (error.extensions.code == 'BAD_USER_INPUT') {
        const details = error.extensions.exception.errors.join('\n ');
        alert(`${error.message}:\n ${details}`);
      } else {
        alert(`${error.extensions.code}: ${error.message}`);
      }
    }
    return result.data;
  } catch (e) {
    alert(`Error in sending data to server: ${e.message}`);
  }
}

function TravellerRow(props) {
  const traveller = props.traveller;
  return (
    <tr>
      <td>{traveller.id}</td>
      <td>{traveller.name}</td>
      <td>{traveller.phone}</td>
      <td>{traveller.bookingTime.toDateString()}</td>
    </tr>
  );
}

function Display(props) {
  const travellerRows = props.travellers.map(i =>
    <TravellerRow key={i.id} traveller={i} />
  );

  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Booking Time</th>
        </tr>
      </thead>
      <tbody>
        {travellerRows}
      </tbody>
    </table>
  );
}

class Add extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.addTraveller;
    const passenger = {
      name: form.travellername.value, phone: form.travellerphone.value,
    }
    this.props.bookTraveller(passenger);
    form.travellername.value = ""; form.travellerphone.value = "";
  }

  render() {
    return (
      <form name="addTraveller" onSubmit={this.handleSubmit}>
        <input type="text" name="travellername" placeholder="Name" />
        <input type="text" name="travellerphone" placeholder="Phone Number" />
        <button>Add</button>
      </form>
    );
  }
}


class Delete extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.deleteTraveller;
    const passenger = {
      name: form.travellername.value,
    }
    this.props.deleteTraveller(passenger);
    form.travellername.value = "";
  }

  render() {
    return (
      <form name="deleteTraveller" onSubmit={this.handleSubmit}>
        <input type="text" name="travellername" placeholder="Name" />
        <button>Delete</button>
      </form>
    );
  }
}

/*Q4. Placeholder for Blacklist component
 * - This component should create a form to accept user input (name of traveller). 
 * - The submit handler should make a call to blacklistTraveller() function with the 
 *   right parameters.
 * - Make sure to invalidate/clear the form input fileds in the UI during cleanup.*/


/*End of Q4*/


class Homepage extends React.Component {
	constructor() {
	super();
	}
	render(){
	return (
	<div>
		<h5>Placeholder for Homepage</h5>
	</div>);
	}
}
class TicketToRide extends React.Component {
  constructor() {
    super();
    this.state = { travellers: [], selector: 1};
    this.bookTraveller = this.bookTraveller.bind(this);
    this.deleteTraveller = this.deleteTraveller.bind(this);
    this.blacklistTraveller = this.blacklistTraveller.bind(this);
  }

  setSelector(value)
  {
	  this.setState({selector: value});
  }
  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    /*Q3: Write code for GraphQL API call to fetch list of travellers
     * - Write the query
     * - Make a call to graphQLFetch with parameter: query
     * - Post process data and take some action (e.g., re-load UI)  */
  

     /*End of Q3*/
  }

  async bookTraveller(passenger) {
    /*Q3: Write code for GraphQL API call to add a traveller
     * - Write the mutation
     * - Make a call to graphQLFetch with two parameters: mutation query, {variable}
     * - Post process data and take some action (e.g., re-load UI)  */
  

     /*End of Q3*/
  }

  async deleteTraveller(passenger) {
    /*Q3: Write code for GraphQL API call to delete a traveller
     * - Write the mutation
     * - Make a call to graphQLFetch with two parameters: mutation query, {variable}
     * - Post process data and take some action (e.g., re-load UI)  */
  

     /*End of Q3*/
  }
  async blacklistTraveller(passenger) {
    /*Q4: Code to blacklist traveller at the back-end
     * - Write a mutation to blacklist traveller by providing the name.
     * - Make a call to graphQLFetch to execute the query.
     * - graphQLFetch accepts two parameters: query and {variable}  
     * - This GraphQL API call does not return anything. */
    

    /*End of Q4*/
  }
  render() {
    return (
      <div>
        <h1>Ticket To Ride</h1>
	<div>
        <button onClick={()=>this.setSelector(1)}>Homepage</button>
        <button onClick={()=>this.setSelector(2)}>Display Travellers</button>
        <button onClick={()=>this.setSelector(3)}>Add Traveller</button>
        <button onClick={()=>this.setSelector(4)}>Delete Traveller</button>
        <button onClick={()=>this.setSelector(5)}>Blacklist Traveller</button>
	</div>
	{
		this.state.selector === 1? <Homepage />:<hr/>
	}
	{
		this.state.selector === 2? <Display travellers={this.state.travellers} />:<hr/>
	}
	{
		this.state.selector === 3? <Add bookTraveller={this.bookTraveller} />: <hr/>
	}
	{
		this.state.selector === 4? <Delete deleteTraveller={this.deleteTraveller} />: <hr/>
	}
	{
		this.state.selector === 5? <Blacklist blacklistTraveller={this.blacklistTraveller} />: <hr/>
	}
      </div>
    );
  }
}

const element = <TicketToRide />;

ReactDOM.render(element, document.getElementById('contents'));
