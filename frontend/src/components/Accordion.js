import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Exercise = props => (
  <div className="card">
  <div className="card-body">
    <h4 className="card-title mb-2">{props.exercise.question}</h4>
    <h6 className="card-text mb-2">{props.exercise.reponse}</h6>
    <h8 className="card-subtitle  text-muted d-block">écrit par :  {props.exercise.username}</h8>
    <button type="button" className="btn btn-secondary m-3 " onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</button>
    <Link to={"/Admin/"+props.exercise._id}><button type="button" className="btn btn-secondary m-3 d-inline">edit</button></Link>
  </div>
</div>
)




export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {exercises: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise(id) {
    axios.delete('http://localhost:5000/exercises/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
  }

  render() {
    return(
      <div>{ this.exerciseList() }</div>
      
    )
 }
}
  

