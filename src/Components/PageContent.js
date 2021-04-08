import React, { Component } from 'react';

export default class PageContent extends Component {
  render() {
    const styles = {
      backgroundColor: 'white',
      height: '100vh',
      width: '100vw',
    };
    return <div style={styles}>{this.props.children}</div>;
  }
}
