import React from "react";
import Projects from './Projects'
import Tasklists from './Tasklists'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      projects: [],
      tasklists: []
    }
  }

  async componentDidMount() {
    const projectsResponse = await fetch('https://app.paymoapp.com/api/projects', {
      headers: {
        "X-Session": "5059fe5ba060edfd2e29cf241a40d1fd",
      },
    })

    const projects = (await projectsResponse.json()).projects

    this.setState({projects})
  }

  async componentDidMount() {
 
      const tasklistsResponse = await fetch('https://app.paymoapp.com/api/tasklists', {
      headers: {
        "X-Session": "5059fe5ba060edfd2e29cf241a40d1fd",
      },
    })

    const tasklists = (await tasklistsResponse.json()).tasklists

    this.setState({tasklists})
  }

  render() {
    return <Projects projects={this.state.projects}/>
  }
  render1(){
    return <Tasklists tasklists={this.state.tasklists}/>

  }

}
export default App;
