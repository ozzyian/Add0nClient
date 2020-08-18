import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddonList from './components/AddonList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
const ipc = require('electron').ipcRenderer;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {reply: ''};
  }
  componentDidMount() {
    const self = this;
    ipc.on('asynReply', (event, data) => {
      console.log('Message received');
      self.setState({reply: data});
    });
  }
  buttonClick = () => {
    ipc.send('aSynMessage', 'A async message to main');
  };
  render() {
    return (
      <Container className="App" fluid>
        <AddonList />
        <Button onClick={this.buttonClick}>Skicka meddelande</Button>
        <h1 id="mess">Meddelande: {this.state.reply}</h1>
      </Container>
    );
  }
}

export default App;
