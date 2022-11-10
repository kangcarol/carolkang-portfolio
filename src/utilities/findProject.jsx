import { projects } from "../data/projects"
import hyphenateWords from "./hyphenateWords"

function findProject(str){
  // const getProject = projects.find(project => project.title === str)
  // const title = hyphenateWords(getProject.title)
  // console.log("TITLE", title)
  // return title

  return projects.find(project => hyphenateWords(project.title)===str)
}


// function findProject (str) {
//   // const title = str.replace('/projects/', '')

//   const foundProject = projects.find(project => {
//     const thisTitle = hyphenateWords(project.title)
//     return thisTitle === title
//   })
  
//   return foundProject
// }

export default findProject