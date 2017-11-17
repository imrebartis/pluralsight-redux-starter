import React, { Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

      render() {
        const {courses} = this.props;

        return (
            <div>
                <h1>Courses</h1>
                <CourseList courses={courses}/>
            </div>
        );
    }
}

CoursesPage.propTypes = {
    //dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
    // createCourse: PropTypes.func.isRequired
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // createCourse: course => dispatch(courseActions.createCourse(course)) 
        actions: bindActionCreators(courseActions, dispatch)
    }; 
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
