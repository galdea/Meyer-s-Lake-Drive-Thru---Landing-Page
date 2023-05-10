import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
import Gallery from './components/gallery';
import Dogs from './components/dogs';
import Contact from './components/contact';
import JsonData from './data/data.json';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <About data={this.state.landingPageData.About} />
        <Gallery data={this.state.landingPageData.Gallery}/>
        <Features data={this.state.landingPageData.Features} />
        <Dogs />
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default App;
