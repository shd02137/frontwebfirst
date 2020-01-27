import React from 'react';
import ReactDOM from 'react-dom';



class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col-xs-12">a</div>
          </div>
          <div class="row">
            <div class="col-sm-6 col-md-3">b</div>
            <div class="col-sm-6">c</div>
            <div class="col-md-3">d</div>
          </div>
          <div class="row">e</div>
        </div>
        Seconds: {this.state.seconds}
    <button type="button" class="btn">Basic</button>
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-secondary">Secondary</button>
  <button type="button" class="btn btn-success">Success</button>
  <button type="button" class="btn btn-info">Info</button>
  <button type="button" class="btn btn-warning">Warning</button>
  <button type="button" class="btn btn-danger">Danger</button>
  <button type="button" class="btn btn-dark">Dark</button>
  <button type="button" class="btn btn-light">Light</button>
  <button type="button" class="btn btn-link">Link</button>
        <button type="button" class="btn btn-link"><a herf="www.naver.com">Link</a></button>
      </div>
    );
  }
}

ReactDOM.render(
  <Timer />,
  document.getElementById('timer-example')
);