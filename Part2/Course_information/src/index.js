import React from 'react'
import ReactDOM from 'react-dom'

const Courses = (props) => {
  const course = props.course
  return (
    <div>
      <Content parts={course.parts} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    props.parts.map(part => {
      return (
        <div key={part.id}>
        {part.name} {part.exercises}
        </div>
      )
    }
      )
  )
}

const Total = (props) => {
  //console.log(props)
  const parts = props.parts
  const totalAmount = parts.reduce(function(sum, part) {
    //console.log('hello', sum, part)
    return sum + part.exercises 
  }, 0)

  return (
    <div>
      <b>Total of {totalAmount} exercises</b>
    </div>
  )
}

const App = () => {
  const course = {
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
  }

  return (
    <div>
      <Header course={course.name} />
      <Courses course={course} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
