import React from 'react';
import './ErrorBoundaryTile.css';

export class ErrorBoundaryTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }
  
  render() {
    if (this.state.errorInfo) {
      return (
        <div className='error-tile-container'>
          <div>Error Boundary Test</div>
          <div>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </div>
        </div>
      );
    }

    return this.props.children;
  }  
}