import React, { Component } from 'react'

export default class Bookmarks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: ''
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
                'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWNlNTQ1ZjlkZTg0MjQyMDUyOTRmZWU4IiwiaWF0IjoxNTU4NTI5NTU0LCJleHAiOjE1NTg1MzMxNTR9.__zf4BNnYb6mFwUr2mhwo5ifpM_Kemfpeqfj-D5Y6NI'
            }
        })
            .then(res => res.json())
            .then(data => this.setState({ error: data.error }))
    }



    render() {
        console.log()
        return (
            <div>
                <h2 className="h5">Bookmarks</h2>
                {this.state.error !== '' ?
                    <div className="border border-danger box">{this.state.error}</div> :
                    <div>Bookmarks will be listed here</div>
                }
            </div>
        )
    }
}
