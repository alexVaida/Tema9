import React from "react";

export default class Tasklist extends React.Component {
	render() {
	  const tasksList = this.props.tasks.map( task => {
		return <div key={tasklist.id}>{tasklist.name}</div>
	  })
	  return <div>{taskslistsList}</div>
	}
}