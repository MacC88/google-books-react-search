import React from "react";
import {Row, Col} from "../Grid"

const SearchResult = props => {
    return (props.books.length === 0) ? (
        <div className="card bg-dark">
            <div className="card-body player">
                <div className="article">
                    <h1 className="text-light text-center bg-dark">Search Results</h1>
                </div>
            </div>
        </div>
    ) : (
            <div className="card bg-dark">
                <div className="card-body player">
                    <div className="article">
                        <h1 className="text-light text-center">Search Results</h1>
                        <br></br>
                        {props.books.map(book => {
                            return (
                                <li className="search-list list-group-item">
                                    <Row id={book.title + "Card"} key={book._id}>
                                        <Col size="md-3">
                                            <img src={book.image} alt={book.title} />
                                        </Col>
                                        <Col size="md-9">
                                                <h1>{book.title}</h1>
                                                <h2>{book.author}</h2>
                                                <hr></hr>
                                                <p style={{marginRight: 50}}>{book.description}</p>
                                        </Col>
                                        <button className="btn btn-dark" id={book.id} onClick={(event) => props.handleSavedButton(event)}>
                                            Save Book
                                        </button>
                                        <a href={book.link} target="_blank">
                                            <button className="btn btn-light text-dark btn-outline-dark">
                                                View Book
                                            </button>
                                        </a>
                                    </Row>
                                </li>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
}
export default SearchResult