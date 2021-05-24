import React from "react"
import PropTypes from "prop-types"
import Button from "./Button"
import {useLocation} from 'react-router-dom'

// const Header = (props) => {
//     return (
//         <div>
//         <h1>{props.title} </h1>
//         </div>
//     )
// }

const Header = ({ title, onAdd, showAdd }) => {
  //     const onClick = (e) => {
  //         console.log('click');
  //     }

  //   const onClick = (e) => {
  //     console.log("click")
  //   }

    const location = useLocation()
  return (
    <div className="header">
      {/* <h1 style={{color: "orange",backgroundColor:'grey'}} >{title} </h1> */}
      <h1 style={headingStyle}>{title} </h1>
      {/* <Button  color='orange' text='Add' onClick={onClick} /> */}
      {
        (location.pathname === "/" && (
          <Button
            color={showAdd ? "red" : "orange"}
            text={showAdd ? "close" : "add"}
            onClick={onAdd}
          />
        ))
      }
    </div>
  )
}

const headingStyle = {
  color: "blue",
  backgroundColor: "yellow",
}

// Header.defaultProps = {
//     title:'HiDefault!!!'
// }

Header.propTypes = {
  title: PropTypes.string.isRequired,
}
export default Header
