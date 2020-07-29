import React from 'react'

const Courses = (props) => {
  return (
    props.courses.map(course => {
      return (
        <div key={course.id}>
          <Header course={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      )
    })
  )
}

const Header = (props) => {
  return (
    <div>
      <h2>{props.course}</h2>
    </div>
  )
}

const Content = (props) => {
  return (
    props.parts.map(part => {
      return (
        <div key={part.id}>
          <p>{part.name} {part.exercises} </p>
        </div>
      )
    })
  )
}

const Total = (props) => {
  // console.log(props)
  const parts = props.parts
  const totalAmount = parts.reduce(function (sum, part) {
    // console.log('hello', sum, part)
    return sum + part.exercises
  }, 0)

  return (
    <div>
      <b>Total of {totalAmount} exercises</b>
    </div>
  )
}

export default Courses
