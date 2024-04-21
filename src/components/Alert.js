import React from 'react'

function Alert(props) {
  return (
    <div>
        <div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>{props.msg}</strong> has been removed !!
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  </div>
  )
}

export default Alert