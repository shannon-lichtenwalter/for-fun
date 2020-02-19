import React from 'react';
import sharky from './shark.png';


class App extends React.Component {
  state = {
    shark: null
  }

  hoverAction = (e) => {
    this.setState({
      shark: e.target.className
    })
  }

  renderBabyShark = () => {
    let doo= 'doo '.repeat(6);
    let sharks = ['baby', 'mommy', 'daddy', 'grandma', 'gandpa', 'lady swimmin\'']
    return sharks.map((shark, index) => {
      let sharkLine = shark === 'lady swimmin\'' ? shark + ' ' + doo : shark + ' shark ' + doo;
      return (
        <div onMouseOver={(e) => this.hoverAction(e)} className={shark + ' container'} key={index} id={this.state.shark === shark ? 'selected' : null}>
        <div id='song' className={shark}>
        <p className={shark}>{sharkLine}</p>
        <p className={shark}>{sharkLine}</p>
        <p className={shark}>{sharkLine}</p>
        <p className={shark}>{shark === 'lady swimmin\'' ? 'CHOMP' : shark + ' shark! '}</p>
        </div>
        {this.state.shark === shark ? <img className='sharky' src={sharky} alt='shark'/> : null}
        </div>
      )
    })
  }
  
  render() {
    return (
      <main className='App'>
        <h1>Baby Shark</h1>
        {this.renderBabyShark()}
    </main>
    );
  }

}

export default App;