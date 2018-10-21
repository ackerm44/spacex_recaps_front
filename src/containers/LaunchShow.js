import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import '../css/launchShow.css'
import LaunchShowDetail from '../components/LaunchShowDetail'


class LaunchShow extends Component {
  render() {
    return (
      <div>
        <LaunchShowDetail launch={this.props.launch} />
      </div>
    )
  }
}

// const mapStateToProps = (state, ownProps) => {
//   let launch = state.pastLaunches.find(launch => launch.launch.id === +ownProps.match.params.launchId)
//   let comments = state.comments.filter(comment => comment.launch_id === +ownProps.match.params.launchId)
//   if (launch) {
//     launch = launch.launch
//     return {
//       launch: launch,
//       comments: comments
//     }
//   }
//
// }
//
// const mapDispatchToProps = dispatch => {
//   return {
//     fetchPastLaunches: (url) => dispatch(pastLaunchesFetchData(url)),
//     fetchComments: (url) => dispatch(commentsFetchData(url))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(LaunchShow)
export default LaunchShow;
