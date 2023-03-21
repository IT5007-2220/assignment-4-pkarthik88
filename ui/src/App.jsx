import './style.css';
import graphQLFetch from './graphql.js';
import train from './train.jpg';
import Add from './Add.jsx';
import Display from './Display.jsx';
import Delete from './Delete.jsx';
import Blacklist from './Blacklist.jsx';

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
    console.log("Pending code to Blacklist", passenger); 
    const query =`mutation mymutation($passenger: String!){
	      blacklistTraveller(travellername: $passenger)
    }`; 
    const response = await graphQLFetch(query, {passenger});
    console.log("Response from server", response);
    
    /*End of Q4*/
  }
  render() {
    return (
      <div>
        <h1>Ticket To Ride</h1>
	<img src={train} />
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
