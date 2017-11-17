import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    // passing down mutable (local) state to the form:
    this.state = {
      // Object.assign helps avoid mutating state
      course: Object.assign({}, props.course),
      errors: {}
    };

    this.updateCourseState = this.updateCourseState.bind(this);
  }

  updateCourseState(event) {
    const field = event.target.name;
    // Object.assign helps avoid mutating state
    let course = Object.assign({}, this.state.course);
    course[field] = event.target.value;
    return this.setState({course: course});
  }

  render() {
    return (
        <CourseForm
          allAuthors={this.props.authors}
          onChange={this.updateCourseState}
          course={this.state.course}
          errors={this.state.errors}
        />
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired
};


function mapStateToProps(state, ownProps) {

  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
  
  //transforming the data from the API into
  // the format required for the dropdown
  // (see SelectInput.js' return)
  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + '' + author.lastName
    };
  });

  return {
    // course: course
    course,
    authors: authorsFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);