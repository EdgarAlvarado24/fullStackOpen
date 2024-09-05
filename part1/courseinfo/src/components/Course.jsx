import Header from './Header'

// import Total from './Total'

const Course = ({courses}) =>{
    return (
        <div>
            <Header courses={courses}/>
            {/* <Total parts={course.parts}/> */}
        </div>
    )
}

export default Course;