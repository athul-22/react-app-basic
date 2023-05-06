import React, { Component } from 'react'
import axios from 'axios';


 class ApiComponent extends Component {
// POST IN CONSTRUCTOR
    constructor(props) {
        super(props)
      
        this.state = {
           post: []
        }
     
     
      }

    // API FETCHING PART

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            this.setState({post: response.data})
        })
       .catch(error => {
            console.log(error)
    })
}

  render() {
    const { post } = this.state
    return (

      <div>
        ApiComponent COMPONENT 
        {
            post.length ?
            post.map(post => <div key={post.id}>{post.title}{post.body}</div>) :
            null
        }
      </div>
    )
  }
}

export default ApiComponent
