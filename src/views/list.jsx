import React, { Component } from 'react';
import DataService from '../services/list';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: []
    }
  }
  componentDidMount() {
    const { type } = this.props.match.params;
    let _source = null;
    console.log(type);
    switch (type) {
      case 'motos':
        _source = DataService.getBikes.then(r => r);
        break;
      case 'cars':
        _source = DataService.getCars.then(r => r);
        break;
      default: break;
    }
    _source.then(
      r => r.json().then(
        body => this.setState({ collection: body.data })
      )
    )
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {
            this.state.collection.length > 0 && this.state.collection.map(
              o => (
                <div className="col-4">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div><img src="https://via.placeholder.com/300.png/09f/fff" alt="" style={{ borderRadius: '20px' }} /></div>
                      <div style={{ padding: '5px' }}>id: {o.id}</div>
                      <div style={{ padding: '5px' }}>modelo: {o.name}</div>
                    </div>
                  </div>
                </div>
              )
            )
          }
        </div>
      </div>
    )
  }
}

export default List;