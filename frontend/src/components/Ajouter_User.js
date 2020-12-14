import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
  }

  render() {
    return (
        <div className="container-fluid mb-5 p-5">
        <div className="d-sm-flex justify-content-between align-items-center mb-4">
            <h3 className="text-dark mb-0">Ajouter un utilisateur</h3>
        </div>
        <div>
        <form className="row d-flex justify-content-center" onSubmit={this.onSubmit}>
            <div className="col-xl-8 col-md-10 col-sm-12"> 
                    <div className="form-group">
                        <label for="username">Entrez le nom de l'utilisateur</label>
                        <input type="text" className="form-control" id="username" placeholder="Alexandre" required
  value={this.state.username}
  onChange={this.onChangeUsername}/>
                    </div>
            </div>
            <div className="col-xl-8 col-md-10 col-sm-12">
                <button type="submit" value="Create User Log" className="btn btn-danger">Ajouter</button>
            </div>
            </form>
        </div>
    </div>
    )
  }
}
