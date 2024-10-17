import Content from './Content'

const Header = ({courses}) =>{
    console.log(courses)
    return (
        <div>
            <h1 key={courses[0].id}>{courses[0]}.name</h1>
            {/* <Content parts={courses[0].parts}/> */}
            <h1 key={courses[1].id}>{courses[1]}.name</h1>
            {/* <Content parts={courses[1].parts}/> */}
        </div>
    )
}

export default Header