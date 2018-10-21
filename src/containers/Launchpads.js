import React, { Component } from 'react';
import Launchpad from '../components/Launchpad'
// import { connect } from 'react-redux'
// import { launchpadsFetchData } from '../actions/launchpads'

class Launchpads extends Component {
  constructor(props) {
    super(props);

    this.state = {
      launchpads: null
    }
  }

  componentDidMount() {
    fetch('https://api.spacexdata.com/v3/launchpads')
    .then((response) => {
      return response;
    })
    .then(response => response.json())
    .then(launchpads => this.setState({launchpads: launchpads}))
  }

  render() {
    if (this.state.launchpads === null) {
      return (
        <p>Loading</p>
      )
    } else {
      return (
        <div className = "launchpads">
          <h1 className="title">Launchpads</h1>
          <div>
            {this.state.launchpads.map(launchpad => <Launchpad key={launchpad.id} launchpad={launchpad} />)}
          </div>
        </div>
      )
    }
  }
}

// const mapStateToProps = state => {
//   return {
//     launchpads: state.launchpads,
//     hasErrored: state.launchpadsHasErrored,
//     isLoading: state.launchpadsIsLoading
//   }
// }
//
// const mapDispatchToProps = dispatch => {
//   return {
//     fetchData: (url) => dispatch(launchpadsFetchData(url))
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Launchpads)
export default Launchpads;
