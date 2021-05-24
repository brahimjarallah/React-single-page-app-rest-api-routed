import React from "react"
import PropTypes from "prop-types"

// const Button = ({ color, text, onClick }) => {
// //     const onClick = (e) => {
// //     console.log('click');
// // }
//     return (
//         <button onClick={onClick} style={{ backgroundColor: color }}
//             className="btn">{text} </button>
// )
// }

const Button = ({ color, text, onClick }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
          onClick={onClick}
    >
      {text}
    </button>
  )
}

// const buttonStyling = {
//     backgroundColor: color
// }

Button.defaultProps = {
  color: "steelBlue",
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
// export default Button
