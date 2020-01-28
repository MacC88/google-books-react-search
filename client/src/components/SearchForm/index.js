import React from "react";

const SearchForm = props => {
    return (
        <form>
            <div className="form-group">
                <input className="col-12 form-control border-dark text-center"
                    value={props.search}
                    type="text"
                    name="searchBook"
                    placeholder="Search"
                    onChange={props.handleInputChange}
                />
            </div>
            <br></br>
            <button type="submit" className="btn btn-dark btn-block" onClick={props.handleFormSubmit}>
                Submit
            </button>
        </form>
    )
}



export default SearchForm
