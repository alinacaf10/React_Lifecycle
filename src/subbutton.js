import React,{Component} from "react"
import { render } from "react-dom"
import "./subbutton.css"



export default class SubButton extends Component{
  state={
    from:"from",
    to:"to",
    amount:"",
  }
  getData(){
    fetch("https://acb-api.algoritmika.org/api/transaction")
    .then(res=>res.json())
    .then(data=>{
   console.log(data[1])
   this.setState({from:data[1].from,to:data[1].to,amount:data[1].amount})
    })
  }
  componentDidMount(){
    this.getData()
  }
  
render(){
  const {from,to,amount}=this.state
  return(<>
  <p>{from}</p>
  <p>{to}</p>
  <p>{amount}</p>
  </>)
}

}
