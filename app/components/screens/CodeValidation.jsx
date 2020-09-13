import React ,{useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { View, Text, TextInput, Button } from 'react-native';
import {register_user__post, search_code} from '../../redux/actions'

export default () => {
   const dispatch = useDispatch()
   const [code, setCode] = useState(0)
   const user = useSelector(state => state.saveUser)

   const hOnCh_code = (e) => {
      setCode({ codigo: parseInt(e.target.value)})
      console.log(code)
   }

   const validationCode = () => {
      try {
         dispatch(search_code(code, user))
      } catch (error) {
         console.log(error)
      }
   }
  return (
    <View>
      <Text>Código de autentificación</Text>
      <TextInput onChange={hOnCh_code} keyboardType='numeric' editable name='documentNumber'/>
      <Button title="send" onPress={validationCode}/>
     </View>
  );
}
