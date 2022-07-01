import React ,{useEffect , useState} from "react";

class Countdow extends React.Component {
    state={
        count:5
    }
    
    componentDidMount(){
        this.time =setInterval(() => {
          this.setState({count:this.state.count-1})  
        },1000)
    }
    componentWillUnmount(){
        if (this.time){
            clearInterval(this.time)
        }
    }
    componentDidUpdate(prev,prevstate){
        if (prevstate !== this.state.count && this.state.count ===0){
            if (this.time){
                clearInterval(this.time)
                this.props.getTimeEnd()
            }
        }
    }
    render() {
    return <h1>{this.state.count}</h1>;
  }
}

const NewCountdow = (props) => {
    const [count,setCount]= useState(3)
    useEffect(() => {
        if (count === 0){
            props.getTimeEnd()
            return;
        }
        setTimeout(() => {
            setCount(count - 1)
        },1000)
    },[count])
    return(
        <h1>{count}</h1>
    ) 
    
}
export {Countdow,NewCountdow}