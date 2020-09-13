import React ,{useState} from 'react';
import {useDispatch} from 'react-redux';
import { View, Text, TextInput, Button } from 'react-native';
import {register_user__post, search_code} from '../../redux/actions'

export default () => {
   const dispatch = useDispatch()
   const [code, setCode] = useState(0)
   const hOnCh_code = (e) => {
      setCode({ codigo: e.target.value})
   }

   const validationCode = () => {
      try {
         var validate = new Promise (dispatch(search_code(code))).then(res => {
            console.log(res)
         })
      } catch (error) {
         console.log(error)
      }
   }
  return (
    <View>
      <Text>Código de autentificación</Text>
      <TextInput onChange={hOnCh_code} keyboardType='numeric' editable name='documentNumber'/>
      <Button title="send"/>
     </View>
  );
}
