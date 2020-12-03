import React from "react";

export default class Tasks extends React.Component {
	render() {
	  const tasksList = this.props.tasks.map( tasks => {
		return <div key={task.id}>{task.name}</div>
	  })
	  return <div>{taskList}</div>
	}
}