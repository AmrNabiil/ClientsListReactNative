import {StyleSheet} from 'react-native'
export const styles = StyleSheet.create({
})

export const addTodoStyles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'row',
    padding:5,
    justifyContent:'space-between'
  },
  input:{
    padding:0,
    borderBottomColor:'black',
    borderBottomWidth:1,
  },
  inputFocused:{
    flexGrow:1,
    borderBottomWidth:2,
  },
  btnContainer:{
    backgroundColor:'black',
    marginLeft:5,
    width:'25%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
  },
  btnText:{
    color:'white',
    alignSelf:'center',
    fontSize:18,
    fontWeight:'bold'
  }
})


export const listStyles = StyleSheet.create({
  listContainer:{
    margin:5,
    padding:2,
    height:'100%'
  },
  listHeader:{
    fontSize:20,
    textAlign:'center',
    margin:10,
    },
    itemContainer:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      padding:5,

    },
    doneContainer:{
      display:'flex',
      flexDirection:'row',
      width:'20%',
      justifyContent:'space-around'
    }
})

