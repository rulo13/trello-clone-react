import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../header/header';

class Boards extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const user = this.props.user
    if (Object.keys(user).length === 0 && user.constructor === Object) {
      this.props.history.push('/login');
    }
  }

  render() {
    return (
      <div>
        <Header></Header>
        <div className=''>
          Boards!!!
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ user: state.currentUser});

const HomePage = connect(mapStateToProps)(Boards);

export default HomePage;;
