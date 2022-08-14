


const Header = ({ courseName }) => <h1>{courseName}</h1>

const Total = ({ parts}) => {
  const initialSum=0;
  //console.log(parts)
  const totalSum=parts.reduce((s, p) => s+p.exercises,0)
 // console.log(totalSum);

  
  
  return(
    <h3>total of {totalSum} exercises</h3>
  )
}


const Content = ({ parts }) => {
  console.log(parts[0].name)
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

const App = () => {
  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>

{
      course.map((singlecourse, index)=>{
        return(
          <Course key={index} singlecourse={singlecourse} />
        )
      })
    }
    </>
  )

}

export default App