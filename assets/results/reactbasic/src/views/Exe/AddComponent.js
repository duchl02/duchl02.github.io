import React from 'react';

class AddComponent extends React.Component{
    state={
        title:'',
        salary:'',
    }
    handerOnChangeJob= (e)=>{
        this.setState({
            title: e.target.value,
        })
    }
    handerOnChangeSalary= (e)=>{
        this.setState({
            salary: e.target.value,
        })
    }
    handerCreateForm=(e)=>{
        e.preventDefault()
        if(this.state.title=='' || this.state.salary==''){
            console.log('nhap lai')
            return;
        }
        this.props.addNewJob({
            id:Math.floor(Math.random()*1000),
            title:this.state.title,
            salary:this.state.salary,
        })
        this.state.title='';
        this.state.salary='';
    }
    render(){
        return (
            <form>
                <p>job</p>
                <input type="text" value={this.state.title}
                    onChange={(e)=>this.handerOnChangeJob(e)}
                />
                <p>salary</p>
                <input type="text" value={this.state.salary}
                    onChange={(e)=>this.handerOnChangeSalary(e)}
                /> <br/>
                <input type="submit" value='submit'
                    onClick={(e)=>this.handerCreateForm(e)}
                />
              </form>
        )
    }
}

export default AddComponent