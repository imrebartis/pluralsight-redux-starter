import React, { Component, PropTypes} from 'react';

class CoursesPage extends Component {
  state = {
    course: { title: "" }
  }

  onTitleChange = (event) => {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course});
    }

      render() {
          return (
              <div>
                  <h1>Courses</h1>
                  <h2>Add Course</h2>
                  <input
                      type="text"
                      onChange={this.onTitleChange}
                      value={this.state.course.title} />
                  <input
                      type="submit"
                      value="Save"
                      onClick={this.onClickSave} />
              </div>
          );
      }
  }

  export default CoursePage;
