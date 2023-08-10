import { Image, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import { c1,c2,c3 } from '../../images';
const arr = [
  c1,c2,c3
]
export class Map extends Component {
  state={
    count:0
  }
  componentDidMount(): void {
    this.set
  }
fun = ()=>{
  if(this.state.count < arr.length-1){
    this.setState({count:this.state.count+1})
  }else{
    this.setState({count:0})
  }
  }
 set = setInterval(this.fun,3000)
    render() {
    return (
      <View>

     
      <Image style={{height:400,width:"80%",marginLeft:35,marginTop:15}} source={arr[this.state.count]}/>
      <View style={{display:"flex",flexDirection:"row",justifyContent:"center",gap:25}}>
      <Text style={{...styles.dot,color:`${this.state.count === 0 ? "red" : "black"}`}}>.</Text>
      <Text style={{...styles.dot,color:`${this.state.count === 1 ? "red" : "black"}`}}>.</Text>
      <Text style={{...styles.dot,color:`${this.state.count === 2 ? "red" : "black"}`}}>.</Text>
      </View>
     
       </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    height:"60%"
  },
  dot:{
    fontWeight:"bold",
    fontSize:40,
  
  }
})
export default Map