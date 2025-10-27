import { View , Text, Image, StyleSheet} from 'react-native';
import { FokusButton } from '../components/FokusButton';

export default function Index() {
 return (
   <View>
    <Image source={require('../assets/images/logo.png')} style={{ width: 200, height: 200 }} />
    <View>
      <Text> 
        Otimize sua produtividade, 
        mergulhe no que importa
      </Text>
      <Image source={require('../assets/images/tela_inicial.png')} style={{ width: 300, height: 200 }} />
      <FokusButton title='Quero Iniciar!'/>
    </View>
  
   </View>

  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#B872FF',
    borderRadius: 32,
    padding: 8,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
    color: '#021123',
    fontSize: 18
  }
})