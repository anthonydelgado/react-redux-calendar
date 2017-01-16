import React, { Component } from 'react';

export default class App extends Component {

  render() {
    return (
      <div className="container">

        <div className="jumbotron">
          <h1 className="display-3">React Redux Calendar!</h1>
          <p className="lead">This is a simple calendar app built using React, Redux, Node, Express, MYSQL and Bootstrap!</p>
          <hr className="my-4" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid corporis cum, dolorum ducimus eum eveniet, ex facere ipsa laboriosam laborum magni molestias nulla officia omnis quae quasi, quibusdam velit!</p>
            <p className="lead">

              <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#eventModal">
                Add New Event
              </button> 
            </p>
        </div>


        <div className="modal fade" id="eventModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">

            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add an Event</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                 Please fill in the event details below.
                <br/>
                <div className="form-group">
                    <input type="text" className="form-control" max="100" name="title" placeholder="Event Title"/>
                </div>
                <div className="form-group">
                  <textarea type="text" className="form-control" name="description" placeholder="Description"/>
                </div>
                <br/>
                <div class="dropdown">
                  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Event Type
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Hackathon</a>
                    <a className="dropdown-item" href="#">Meetup</a>
                    <a className="dropdown-item" href="#">Conference</a>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }
}
