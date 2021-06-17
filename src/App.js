import './App.css'
import { Component } from 'react';



class App extends Component {

  state = {
    header: [],
    addresses: [],
    supplier: [],
    add: [],
  };

  componentDidMount() {
    fetch('https://me-frontend-challenge-api.herokuapp.com/orders/1')
      .then(res => res.json())
      .then(res => {
        //console.log(data.header.number)
        console.log(res)
        this.setState({
          header: res.header,
          addresses: res.addresses,
          supplier: res.supplier,
          add: res.addresses.label
        });
        console.log(res, 'res')
        // console.log(this.state.purchases, 'state')
        // console.log(this.state.purchases.header.buyer, 'state2')
      });

  }


  render() {

    return (
      <div>

        <div className="page">
          <div className="container">
            <div className="Header">
              <div className="purchases">

                <p className="purchase">Purchase Order</p>
                <p className="number">{this.state.header.number}</p>
                <p className="code">SerialME {this.state.header.serial}</p>
              </div>
              <div className="container-data">
                <div className="buyer">
                  <h1>{this.state.header.buyer}</h1>

                  <p className="buyer-name"> <i class="far fa-user"></i>Jacksonville Group (Jason Burn)

                  </p>
                  <p className="buyer-email">
                    <a href="jacksonvillegroup@me.com"> <i class="far fa-envelope"></i>jacksonvillegroup@me.com</a>
                  </p>
                  <i className="buyer-phone"> <i class="fas fa-phone"></i>903-575-3050</i>
                </div>
                <div className="order">
                  <h1>{this.state.header.currency} {this.state.header.price}</h1>
                  <p className="status">{this.state.header.status}</p>
                  <p className="create">16/04/2020</p>

                </div>
              </div>
            </div>
            <div className="supplier">
              <h3>Supplier</h3>
              <h1 className="supplier-data">
                <p className="supplier-name">
                  {this.state.supplier.name}
                </p>
                <span className="supplier-code">Code #{this.state.supplier.code}</span>

              </h1>
              <div className="supplier-inf">
                <div>
                  <p>00.823.053/0001-02</p>
                  <p>{this.state.supplier.address}</p>
                </div>
                <div className="supplier-contact">
                  <i class="far fa-user"></i> <span>Jack Jeff Ripple Applejack - jack_jeff_applejack@motion.com</span>
                  <p><i class="fas fa-phone"></i>800-296-5522 - <i class="fas fa-fax"></i> 800-296-5522 </p>
                </div>
                <div className="supplier-log">
                  <p><i class="far fa-eye"></i>Read: 23/05/2020 12:45</p>
                  <p><i class="fas fa-reply"></i>Last Reply: 23/05/2020 13:00</p>
                </div>
              </div>
            </div>
            <div className="container-address">

              <div>
                <h2>
                  <i class="fas fa-chevron-down"></i>
                  Addresses</h2>
              </div>

              <div className="content-address">
                <div>
                  <div className="address-ship">
                    <div className="address-shipname">
                      <h3>Ship to</h3>
                      <h1>West Plant - (TR01)</h1>
                      <div className="nameaAddress">
                        <h4><i class="fas fa-map-marker-alt"></i>1311 W Washington Blvd, Los Angeles, CA 90006, United States</h4>
                        <h5><i class="far fa-user"></i>Brian Mazda Tetsuo</h5>
                        <h5><i class="far fa-envelope"></i>Z01confirmations@me.com"</h5>
                        <h5><i class="fas fa-phone"></i>222-575-3050 <i class="fas fa-fax"> 222-575-3050 </i></h5>
                      </div>
                    </div>
                    <div className="address-bill">
                      <div className="address-billname">
                        <h3>Bill to</h3>
                        <h1>Pilgrims Pride Corp.</h1>
                        <div className="nameaAddress">
                          <h4><i class="fas fa-map-marker-alt"></i>1301 Glendale Blvd, Los Angeles, CA 90026, USA</h4>
                          <h5><i class="far fa-user"></i>Barbara Streifes Hasseublad</h5>
                          <h5><i class="far fa-envelope"></i>Z01confirmations@me.com"</h5>
                          <h5><i class="fas fa-phone"></i>222-506-8000 <i class="fas fa-fax"> </i> 222-506-8000</h5>
                        </div>
                      </div>
                    </div>
                    <div className="address-charge">
                      <div className="address-chargename">
                        <h3>Charge to</h3>
                        <h1>Lorem Ipsum</h1>
                        <div className="nameaAddress">
                          <h4><i class="fas fa-map-marker-alt"></i>2222 Promontory CR, Greeley, CO 22222-9039 - EUA</h4>
                          <h5><i class="far fa-user"></i>Barbara Streifes Hasseublad</h5>
                          <h5><i class="far fa-envelope"></i>lorem.ipsum@me,com</h5>
                          <h5><i class="fas fa-phone"></i>970-222-8000 <i class="fas fa-fax"></i> 222-506-8000</h5>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );

  }

}

export default App;
