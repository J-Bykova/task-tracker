import PropsTypes from "prop-types";

const Button = ({color, text, onClick}) => {
  return (
   <button
     onClick={onClick}
     className='btn'
     style={{backgroundColor: color}}
   >
     {text}
   </button>
  )
}

Button.defaultProps = {
  color: 'green',
}

Button.propTypes = {
  color: PropsTypes.string,
  text: PropsTypes.string,
  onClick: PropsTypes.func,
}

export default Button
