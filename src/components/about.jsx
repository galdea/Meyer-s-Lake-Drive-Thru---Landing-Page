import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
        <div id="about">
        <div className="container">
          <div className="row">
          <div className="col-xs-12 col-md-6">
  <a href='https://www.ubereats.com/store/meyers-lake-beverage-%26-drive-thru/VPp98prYWwq4Sob-22RIDQ?utm_campaign=place-action-link-grocohol&utm_medium=organic&utm_source=google' target='_blank'>
    <img src="img/orderonline.png" className="img-responsive" alt=""/>
  </a>
</div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>Order Online</h2>
                <p>{this.props.data ? this.props.data.paragraph : 'loading...'} <a href='https://www.ubereats.com/store/meyers-lake-beverage-%26-drive-thru/VPp98prYWwq4Sob-22RIDQ?utm_campaign=place-action-link-grocohol&utm_medium=organic&utm_source=google' target='_blank'><strong>UberEats</strong></a>!</p>
                <h3>Options</h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {this.props.data ? this.props.data.Why.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                    {this.props.data ? this.props.data.Why2.map((d, i) => <li  key={`${d}-${i}`}> {d}</li>) : 'loading'}

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about
