import './App.css'
import { Component } from 'react';



class App extends Component {

  state = {
    purchases: []
  };

  componentDidMount() {
    fetch('https://me-frontend-challenge-api.herokuapp.com/orders/1')
      .then(res => res.json())
      .then(res => {
        //console.log(data.header.number)
        this.setState({
          purchases: res
        });

      });
  }


  render() {

    return (
      <div>
        <div className="page">
          <div className="Header">
            <div className="purchases">
              <p className="purchase">Purchase Order</p>
              <p className="number">4510001114</p>
              <p className="code">Serial ME 11223344</p>
            </div>
            <div className="container-data">
              <div className="buyer">
                <h1>MTP West Buyer</h1>
                <p className="buyer-name">Jacksonville Group (Jason Burn)</p>
                <p className="buyer-email">
                  <a href="jacksonvillegroup@me.com">jacksonvillegroup@me.com</a> </p>
                <i>903-575-3050</i>
              </div>
              <div className="order">
                <h1>USD 20000</h1>
                <p className="status">Need to confirm</p>
                <p className="create">16/04/2020</p>

              </div>
            </div>
          </div>

        </div>
      </div>

    );

  }

}

export default App;
