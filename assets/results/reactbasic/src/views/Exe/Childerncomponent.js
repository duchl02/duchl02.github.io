import React from 'react';

class Childrencomponet extends React.Component{
    state ={
        statejob:false
    }
    handerShow=()=>{
        this.setState({
            statejob:!this.state.statejob
        })
    }
    handerOnClickDelete=(job)=>{
        this.props.deleteJob(job)
    }
    render() {
        let {listjob}=this.props
        let {statejob} = this.state
        
        return (
            <>
                {statejob === false && 
                <div><button onClick={() =>this.handerShow()}>Show</button></div>
                }
                {statejob === true &&
                <div>
                    {
                        listjob.map((job)=>{
                            return (
                                <p key={job.id}>{job.title} - {job.salary} &nbsp;
                                <button onClick={() =>this.handerOnClickDelete(job)}>delete</button>
                                </p>
                            )
                        })
                    }
                    <button onClick={() =>this.handerShow()}>Hide</button>
                </div>
                }
                
            </>
            
        )
    }
}

export default Childrencomponet