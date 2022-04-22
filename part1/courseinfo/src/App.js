// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   )
// }

const Header = (props) => {
  return (
    <div>
      <h1> {props.course} </h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
       {props.part} {props.number}
      </p>
    </div>
  )
}


const Content = (props) => {
  return (
    <div>
       <Part part={props.part1} number={props.exercises1}/>
       <Part part={props.part2} number={props.exercises2}/>
       <Part part={props.part3} number={props.exercises3}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
      Number of exercises {props.number}
      </p>
    </div>
  )
}


const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total number={exercises1+exercises2+exercises3} />
    </div>
  )
}

export default App