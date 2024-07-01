import React from 'react'

function Search() {
  return (
    <>
         {/* Search Bar */}
         <div className="my-3 container">
          <div className="input-group rounded">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fas fa-search" />
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="What would you like to eat?"
            />
          </div>
        </div>
    </>
  )
}

export default Search