import PropTypes from 'prop-types'

const Error = ({children}) => {
  return (
    <div className='bg-red-600 text-white font-bold p-2 rounded-sm mb-2 text-center'>
        {children}
    </div>
  )
}

Error.propTypes = {
    children: PropTypes.node
}

export default Error