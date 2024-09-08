import Part from './Part'
import Total from './Total'


const Content = ({courses}) => {
  let content = courses.map((course)=>{
    return ( // <-- Agrega 'return' aquí
      <div key={course.id}> 
        <h2>
          {course.name}
        </h2>
        {
          course.parts.map((part)=>
          <Part key={part.id} part={part} />
        )}
        {
         <Total total={course.parts.reduce((acc, prt)=> acc + prt.exercises,0)} />
        }
      </div>
    ) 
  })

  return (
    <div>     
        {content}
    </div>
    )
  }

export default Content;
