import React, { Component } from 'react';
import Layout from '../components/Layout/Layout'

import BurgerBuilder from '../containers/BurgerBuilder/BurgerBuilder'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <p><strong>Test</strong></p>
        </Layout>
        <BurgerBuilder>
        </BurgerBuilder>
      </div>
    );
  }
}

export default App;
