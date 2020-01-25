export default {
    /* Colors */
    primary: 'purple',
    macColor: 'purple',
    secondLight: '#B58EBB',
    background:'#a7353a',
    backgroundDarker:'#cdcdcd',
    btnConfirm:'#2296f3',
    btnCancel:'red',
    regularText: '#6c757d',
 
     /* Font SIzes */
     font_Size_primary: 14,
     font_Size_secondary: 14,
     font_Size_Title: 25,
     font_Size_icons: 23,
    /* Structure */
    container :{
      flex: 0.9,
      textAlign: 'center',
      padding: 10,
      flexWrap: 'wrap',
      backgroundColor: '#ee7e83',   
    },
    wrapper:{
      flex: 0.9,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: 10,
      flexWrap: 'wrap',
      backgroundColor: '#ccccff',   
    },
    categoryWrapper:{
      flex: 0.9,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      flexWrap: 'wrap',
      backgroundColor: '#B58EBB',  
    },
    
    /* Others */
    hide:{
        display: 'none'
      },
      p5 : {
        padding: 5,
        paddingBottom: 15
      },
      mealRow:{
        width: '100%',
      },
      flatlist: {
        alignItems: 'stretch',
        backgroundColor: 'gray',
      },
    
 /* Detail */
      mealWrapper:{
        flex:0.5, 
        backgroundColor: 'purple', 
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        height:200,
        margin: 5
      },
      mealWrapperDetail:{
        flex:0.5, 
        backgroundColor: '#cccccc', 
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        fontSize: 30,
      },
       MealItem: {
        flex:1,
        minWidth: '100%',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 20,
      },
     
   
      detailTitleWrap:{
        width: '100%',
        height: 200,
        backgroundColor: 'purple',  
        marginTop: 5,
        marginBottom: 5,
      },
      detailTitle :{
        width: '100%',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
      },
      details:{
        flexWrap: 'wrap',
       justifyContent: 'space-evenly',
      flexDirection: 'row',
     
      },
      detailImg:{
        height: '100%',
        width: '100%',
       },
       detailListWrapper:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '80%',
        backgroundColor: 'white'

       },

       detailList:{
        width: '100%',
        fontSize: 22,
        marginVertical: 10,
        marginHorizontal: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 1,
       }
 
  }  