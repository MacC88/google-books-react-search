import React from "react";
import {Row, Col} from "../Grid"

const SavedResult = props => {
    return (props.savedBooks.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h1>Saved Books</h1>
                </div>
            </div>
        </div>
    ):(
        <div className="card bg-dark">
            <div className="card-body player">
                <div className="article">
                    <h1 className="animated fadeIn delay-2s text-light text-center">Saved Books</h1>
                    <br></br>
                    {props.savedBooks.map(savedbook => {
                        return (
                            <li className="saved-list list-group-item">
                                <Row id={savedbook.title + "Card"} key={savedbook._id}>
                                    <Col size="md-3">
                                        <img src={savedbook.image} alt={savedbook.title} />
                                    </Col>
                                    <Col size="md-9">
                                            <h1>{savedbook.title}</h1>
                                            <h2>{savedbook.authors}</h2>
                                            <hr></hr>
                                            <p style={{marginRight: 50}}>{savedbook.description}</p>
                                    </Col>
                                    <button className="btn btn-dark" id={savedbook._id} onClick={() => props.handleDeleteButton(savedbook._id)}>
                                        Delete Book
                                    </button>
                                    <a href={savedbook.link} target="_blank">
                                        <button className="viewBook btn btn-light text-dark btn-outline-dark">
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
export default SavedResult