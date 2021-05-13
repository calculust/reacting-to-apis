import { Get } from 'react-axios';
import { Card, ListGroup } from 'react-bootstrap';
import ImportScript from '../hooks/ImportScript';

const Films = () => {

    ImportScript("https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js");

    return (
        <div>
            <h1>Films</h1>
            <Get url="https://ghibliapi.herokuapp.com/films">
                {(error, response, isLoading, makeRequest, axios) => {
                if(error) {
                    return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
                }
                else if(isLoading) {
                    return (<div>Loading...</div>)
                }
                else if(response !== null) {
                    let data_masonry = `{'percentPosition': true }`;
                    return (
                        <div className="row g-3" data-masonry={data_masonry}>
                            {response.data.map( val => {
                                let rt_score;
                                let api_link = `https://ghibliapi.herokuapp.com/films/${val.id}`;
                                if (val.rt_score > 79) rt_score = <span className="text-success">{val.rt_score}</span>;
                                else rt_score = <span className="text-danger">{val.rt_score}</span>;

                                return (
                                    <div key={val.id} className="col-md-6">
                                        <Card className="shadow-sm rounded-3">
                                            <Card.Body>
                                                <Card.Title>{val.title}</Card.Title>
                                                <ListGroup variant="flush" className="mb-3">
                                                    <ListGroup.Item className="px-0">
                                                        <small className="text-muted">Produced by</small> {val.producer}
                                                    </ListGroup.Item>
                                                    <ListGroup.Item className="px-0">
                                                        <small className="text-muted">Directed by</small> {val.director}
                                                    </ListGroup.Item>
                                                    <ListGroup.Item className="px-0">
                                                        <small className="text-muted">Released in</small> {val.release_date}
                                                    </ListGroup.Item>
                                                    <ListGroup.Item className="px-0">
                                                        <small className="text-muted">Rotten Tomato Score</small> {rt_score}
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
                return (<div>Welcome to our Films Page!</div>)
                }}
            </Get>
        </div>
    )
}

export default Films
