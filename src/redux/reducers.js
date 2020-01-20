/* eslint-disable default-case */
let initialState = {
    courses : ['React','Redux']
}
const courseReducer = (state = initialState,action) => {
    const {type, payload} = action
    switch (type) {
        case 'ADD_COURSE':
            let {course} = payload
            let {courses} = state
            let newCourses = courses.slice()
            newCourses.push(course)

            return {
                ...state,
                courses : newCourses
            }

        default:
            return state
    }
}

export default courseReducer