import React from 'react'


class CandidatesList extends React.Component {
    render() {
        return (
            <div className="candidates-list">
                <h1>Candidates List</h1>
                <li>
                    this.props.candidates.forEach((candidate) => {
                        console.log("Candiadatge")
                    });
                </li>
            </div>
        );
    }
}

