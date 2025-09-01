import { StyleSheet, Text, Image, View, Pressable } from "react-native";

export default function Index() {  
  return ( 
    <View style={styles.container}>

      <Image source={require('./foco.png')}/>

      <View style={styles.actions}>
        <Text style={styles.time}>25:00</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Iniciar</Text>
        </Pressable>
      </View>

      <View style={styles.footer}>
         <Text style={styles.footerText}>
          Projeto Fictício. Desenvolvido por Aluno.
          </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
  },

  actions: {
    padding: 24,
    backgroundColor:'#144480',
    borderRadius: 32,
    borderColor: '#144480',
    borderWidth: 4,
    alignItems: "center",
    width: '80%',
  },

  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor:'#B872FF',
    borderRadius: 5,
    alignItems: "center",
  },

  time: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#ffff",
  },

  buttonText: {
    color: "#ffff",
    fontSize: 18,
    fontWeight: "bold",
  },

  footer: {
    marginTop: 40,
    alignItems: "center",
  },

  footerText: {
    fontSize: 18,
    color: "#98A0A8",
    fontWeight: "bold",
  },
});