import React from 'react';
import Childrencomponet from './Childerncomponent'
import AddComponent from './AddComponent'
class MyComponent extends React.Component{
    state={
        listjob:[
            {
                id: 1,
                title:'an uong',
                salary:'10h'
            },
            {
                id: 2,
                title:'ngu',
                salary:'10h'
            },
            {
                id: 3,
                title:'thuc day',
                salary:'10h'
            }
        ]
    }
    
    addNewJob =(job)=>{
        this.setState({
            listjob:[...this.state.listjob,job]
        })
    }
    deleteJob =(job)=>{
        let newjob = this.state.listjob
        newjob = newjob.filter(item=>
            item.id !== job.id
        )
        this.setState({
            listjob:newjob
        })
        console.log(newjob)
    }
    render() {
        return (
            <>
            <AddComponent 
                addNewJob={this.addNewJob}
            />
              
            <Childrencomponet 
                listjob={this.state.listjob}
                deleteJob={this.deleteJob}
                />
            </>
        )
    }
}

export default MyComponent