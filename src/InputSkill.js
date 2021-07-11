import React,{Component} from 'react'

class InputSkill extends Component{
  constructor(props){
    super(props)
    this.state={
    skills:["React","Node Js"]
  }
  this.inputRef = React.createRef()
}

// remove skill
removeSkill= i =>{
  const skills = this.state.skills
  skills.splice(i,1)
  this.setState({
    skills:skills
  })
}
//add skills

addSkill = e=>{
  const skills = this.state.skills
  const value = e.target.value
  if(e.key === "Enter" && value){
    //check if duplicate skills
    if(skills.find(skill => skill.toLowerCase() === value.toLowerCase())){
    return alert("No duplicate value allowed")
  }
  //else add skill to skills array
  skills.push(value)
  //set new state
  this.setState({
    skills
  })
  this.inputRef.current.value= null
   } else if(e.key ==="Backspace" && !value){
     this.removeSkill(skills.lenght-1)

  }
}

render(){
  const{skills} = this.state
  return(
    <>
      <h2>Add Your Skill</h2>
      <div className="skill">
      <ul>
          {
            skills.map((skill,i)=>{
              return(
                <li key={i}>{skill}<button onClick={()=> this.removeSkill(i)}>+</button></li>
              )
            })}
          <li className="input-skill"> 
              <input onKeyDown={this.addSkill} type="text" size="4" ref={this.inputRef}/>
          </li>
      </ul>
      </div>

    </>
    )
  }
}
export default InputSkill