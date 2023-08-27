import React from 'react'
import Button from 'react-bootstrap/Button'

class Candidate extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <Button variant="danger">-</Button>
            </div>
        );
    }
}