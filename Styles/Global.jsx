import { StyleSheet } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";




export const globalStyles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: "center",
  },
  homeTitle: {
    fontFamily: "nunito-bold",
    fontSize: 18,
  },

  pargraph: {
    lineHeight: 20,
    marginVertical: 20,
    fontSize: 20,
    textAlign: "center",
    fontFamily: "nunito-bold",
  },

  Input: {
    width: 200,
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 20,
    marginBottom: 10,
    padding: 10,
  },
  Centerd_modal: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center",
    backgroundColor:'#00000099'
  },

  warning_Modal: {
    width: 300,
    height: 300,
    backgroundColor:'white',
    borderRadius:20, 

  },
  Modal_title : {
    backgroundColor:'#ff0',
    borderTopRightRadius : 20,
    borderTopLeftRadius:20 , 

  },
  warn_body : {
      height:200,
      justifyContent:'center',
      alignItems:'center'
  },
  Modal_press : {
    fontSize:20,
    textAlign:'center', 
    // margin : 10,
    paddingBottom:10,
    paddingTop:14,
    backgroundColor:'blue',
    borderBottomRightRadius : 10,
    borderBottomLeftRadius:10 , 

  } , 
  regester_img : {
    width:70,
    height:70, 
    margin: 10 , 
   
  } , 
});
