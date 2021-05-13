import { Get } from 'react-axios';
import { Card, ListGroup } from 'react-bootstrap';
import ImportScript from '../hooks/ImportScript';

const People = () => {

    ImportScript("https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js");

    return (
        <div>
            <h1>People</h1>
            <Get url="https://ghibliapi.herokuapp.com/people">
                {(error, response, isLoading, makeRequest, axios) => {
                if(error) {
                    return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
                }
                else if(isLoading) {
                    return (<div>Loading...</div>)
                }
                else if(response !== null) {
                    let data_masonry = `{"percentPosition": true }`;
                    return (
                        <div className="row g-3" data-masonry={data_masonry}>
                            {response.data.map( val => {
                                let api_link = `https://ghibliapi.herokuapp.com/people/${val.id}`;

                                return (
                                    <div key={val.id} className="col-md-4">
                                        <Card className="shadow-sm rounded-3">
                                            <Card.Body>
                                                <Card.Title>{val.name}</Card.Title>
                                                <ListGroup variant="flush" className="mb-3">
                                                    <ListGroup.Item className="px-0">
                                                        <small className="text-muted">Gender</small> {val.gender}
                                                    </ListGroup.Item>
                                                    <ListGroup.Item className="px-0">
                                                        <small className="text-muted">Age</small> {val.age}
                                                    </ListGroup.Item>
                                                    <ListGroup.Item className="px-0">
                                                        <small className="text-muted">Eye Color</small> {val.eye_color}
                                                    </ListGroup.Item>
                                                    <ListGroup.Item className="px-0">
                                                        <small className="text-muted">Hair Color</small> {val.hair_color}
                                                    </ListGroup.Item>
                                                </ListGroup>
                                                <Card.Text>
                                                    {val.description}
                                                </Card.Text>
                                                <Card.Text>
                                                    <small><a href={api_link} target="_blank" rel="noreferrer">API Resource Link</a></small>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            })}
                            <button className="btn btn-primary" onClick={() => makeRequest({ params: { refresh: true } })}>Refresh</button>
                        </div>
                        )
                }
                return (<div>Welcome to our People Page!</div>)
                }}
            </Get>
        </div>
    )
}

export default People
