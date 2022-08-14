const Header = ({ courseName }) => <h1>{courseName}</h1>

const Total = ({ parts}) => {
  //const initialSum=0;
  //console.log(parts)
  const totalSum=parts.reduce((s, p) => s+p.exercises,0)
 // console.log(totalSum);

  
  
  return(
    <h3>total of {totalSum} exercises</h3>
  )
}


const Content = ({ parts }) => {
  //console.log(parts[0].name)
  return(
    <>

    <Part parts={parts}/>
    
    <Total parts={parts}/>

         
    </>
  )
}

const Part = ({ parts }) => {
  
   return(
     <>
       {parts.map((part)=>{
        return(
          <p key={part.id}>{part.name} {part.exercises}</p>
        )
       })}
     </>
   )
 }

  

  const Course=({singlecourse})=>{
    return(
      <>
      <Header courseName={singlecourse.name}/>
      <Content parts={singlecourse.parts}/>
      </>
    )
  }

  export default Course