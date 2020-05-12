import React from 'react';
import { ThemeContext } from './App';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.initialCount,
    };
  }

  changeCount(amount) {
    this.setState((prevState) => {
      return { count: prevState.count + amount };
    });
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(style) => (
          <div>
            <button style={style} onClick={() => this.changeCount(-1)}>
              -
            </button>
            <span>{this.state.count}</span>
            <button style={style} onClick={() => this.changeCount(1)}>
              +
            </button>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Counter;
