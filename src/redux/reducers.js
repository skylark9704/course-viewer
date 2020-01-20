/* eslint-disable default-case */
let initialState = {
    courses : [],
    loading: false
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

        case 'GET_COURSES':
            return {
                ...state,
                loading:true
            }

        case 'GET_COURSES_SUCCESS':
            let {coursesData} = payload
            console.log(payload)
            return {
                ...state, loading: false, courses:coursesData
            }

        case 'GET_COURSES_FAILURE':
            return {
                ...state, loading:false
            }

        default:
            return state
    }
}

export default courseReducer