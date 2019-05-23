import React, { Component } from 'react'

export default class Bookmarks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: '',
            token: this.props.token
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData() {
        fetch('/api/bookmarks', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWNlNTQ1ZjlkZTg0MjQyMDUyOTRmZWU4IiwiaWF0IjoxNTU4NTk2NzgyLCJleHAiOjE1NTg2MDAzODJ9.yTRdQsdUZyDQZjjUcVbyL7Kdi5LDzeYFB4D5QzrQOi0'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({ error: data.error })
            })
    }



    render() {
        console.log()
        return (
            <div>
                <h2 className="h5">Bookmarks</h2>
                {this.state.error !== '' ?
                    <div className="border border-danger text-danger d-inline-block m-auto p-1">{this.state.error}</div> :
                    this.state.loggedIn === true ?
                        <div>Bookmarks will be shown here</div> :
                        <div>Please log in to see your bookmarks</div>
                }
            </div>
        )
    }
}
