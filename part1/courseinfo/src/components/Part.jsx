const Part = ({parts}) =>{
    console.log('parts', parts)
    return (
        <div>
            {/* {parts.map((part)=> part.map((course)=><p>{course.name}</p>))} */}
            {/* {parts.map((part)=><p key={part.id}> {part.name} {part.exercises}</p>)} */}
        </div>
    )
}

export default Part;