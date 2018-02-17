import { connect } from 'react-redux'
import Footer from '../components/Footer'


const mapStateToProps = (state) => {
    let count = 0;
    for (let i = 0; i<state.todos.length; i++ ){
        if(state.todos[i].completed){
            count++;
            console.log(state.todos);
        }
    }
    return({
  total: count,
  totalunmarket:state.todos.length-count
})}


const total = connect(
  mapStateToProps,
)(Footer)

export default total
