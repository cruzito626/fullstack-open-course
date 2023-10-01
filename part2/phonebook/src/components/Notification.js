const Notification = ({ message, ...rest }) => {
  if (message === null) {
    return null
  }

  return (
    <div {...rest}>
      {message}
    </div>
  )
}

export default Notification