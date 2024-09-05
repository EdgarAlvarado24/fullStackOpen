import Part from './Part'

const Content = (parts) =>{
    console.log('Content parts',parts)
    // parts.map((part)=>part)
    return(
        <div>
            <Part parts={parts}/>
        </div>
    )
}

export default Content;