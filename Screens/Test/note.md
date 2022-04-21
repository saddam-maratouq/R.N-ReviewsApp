

* remember :  by true and false you can control to show or hide  someThing 
like this exampel we use submit butoon to show or hide text after submit the user 

  const [submit, setSubmit] = useState(false);

  const changeName = (val) => {
    setName(val);
  };

  const submitHandler = () => {
    setSubmit(!submit);
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.pargraph}> please enter your name : </Text>
      <TextInput
        onChangeText={changeName}
        style={globalStyles.Input}
        placeholder="e.g.joun"
      />
      <Button title="submit" onPress={submitHandler} />

      {submit ? (
        <Text style={globalStyles.pargraph}> Your name is {name} </Text>
      ) : null}
    </View> 

    ________________________________________________________________________________ 

 also you can use toastMessge  insted of alert it takes diffrent param only on Android 

    toast.show / toast.showwithGravity / .....  by 

    by deafult the messges is bottom 
 
 ToastAndroid.showWithGravity(
      'your name must be longer ' ,
       ToastAndroid.LONG , 
       ToastAndroid.TOP 
        
      );


________________________________________________________________________________________



the best way to handel all that by custom modal : you need style and some feathers to to make it nice 

 <Modal
        visible={warnning}
        onRequestClose={() => setWarnning(false)}
        transparent
      >
        <View style={globalStyles.Centerd_modal}>
          <View style={globalStyles.warning_Modal}> 
          <View style={globalStyles.Modal_title}>
            <Text style={globalStyles.pargraph} > Warning </Text>
          </View> 
          <View style={globalStyles.warn_body}>
            <Text style={globalStyles.pargraph}>
              your name must be longer 
            </Text> 
            </View> 
            <Pressable onPress={() => setWarnning(false)} >
              <Text style={globalStyles.Modal_press}> ok </Text> 
            </Pressable> 
          </View> 
        </View>
      </Modal> 

        you have also to make some style .... 
      ________________________________________________ 


      how to add image , backgroundImage from react-Native library 

       <Image
          style={globalStyles.regester_img}
          source={require("../../assets/image/done.png")}
          resizeMode='stretch' 
        /> 

         resizeMode='stretch'  to make photo good look if its note square

        #you can also add image source from internet by use source {uni={''}}

        _____________________________________________________________________________ 


        Navigation Notes : Tab bar Navigation .... 

        