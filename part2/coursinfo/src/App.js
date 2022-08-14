


const Header = ({ course }) => <h1>{course.name}</h1>

const Total = ({ sum }) => {
  
  return(
    <h3>total of {sum} exercises</h3>
  )
}

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    <Part
      part={parts[0]} 
    />
    <Part
      part={parts[1]} 
    />
    <Part
      part={parts[2]} 
    /> 
    <Part
      part={parts[3]} 
    /> 



    <Total sum={parts[0].exercises+parts[1].exercises+parts[2].exercises+parts[3].exercises}/>

         
  </>

  const Course=({course})=>{
    return(
      <>
      <Header course={course}/>
      <Content parts={course.parts}/>
      </>
    )
  }

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
      }
      ,
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
      
    ]
  }

  return <Course course={course} />

}

export default App