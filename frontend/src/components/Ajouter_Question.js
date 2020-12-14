import React, { Component } from 'react';
import axios from 'axios';

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeQuestion = this.onChangeQuestion.bind(this);
    this.onChangeReponse = this.onChangeReponse.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      question: '',
      reponse: '',
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeQuestion(e) {
    this.setState({
      question: e.target.value
    })
  }

  onChangeReponse(e) {
    this.setState({
      reponse: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      question: this.state.question,
      reponse: this.state.reponse,
    }

    console.log(exercise);

    axios.post('http://localhost:5000/exercises/add', exercise)
      .then(res => console.log(res.data));

    window.location = '/';
    }
    
    render() {
        return(
            <div className="container-fluid p-5">
                    <div className="d-sm-flex justify-content-between align-items-center mb-4">
                        <h3 className="text-dark mb-0">Ajouter une question</h3>
                    </div>
                    <div>
                    <form className="row d-flex justify-content-center" onSubmit={this.onSubmit}>
                        <div className="col-xl-8 col-md-10 col-sm-12">  
                        <div className="form-group"> 
                                <label>username </label>
                                <select ref="userInput"
                                    required
                                    className="form-control"
                                    value={this.state.username}
                                    onChange={this.onChangeUsername}>
                                    {
                                        this.state.users.map(function(user) {
                                        return <option 
                                            key={user}
                                            value={user}>{user}
                                            </option>;
                                        })
                                    }
                                </select>
                                </div>
                                <div className="form-group">
                                    <label for="question">Tapez votre question</label>
                                    <input type="text" className="form-control" id="question" placeholder="Pourquoi le ciel est bleu ?" required
              value={this.state.question}
              onChange={this.onChangeQuestion}/>
                                </div>
                                <div className="form-group">
                                <label for="réponse">Tapez votre réponse</label>
                                <input type="text" className="form-control" id="réponse"
                                    placeholder="C'est comme ça" value={this.state.reponse}
              onChange={this.onChangeReponse}/>
                                </div>
                        </div>
                        <div className="col-xl-8 col-md-10 col-sm-12">
                            <button type="submit" value="Create Exercise Log" className="btn btn-danger">Ajouter</button>
                        </div>
                        </form>
                    </div>
                </div>
        )
    }
}
  