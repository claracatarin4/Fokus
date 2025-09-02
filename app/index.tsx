import { StyleSheet, Text, Image, View, Pressable } from "react-native";

export default function Index() {  
  return ( 
    <View style={styles.container}>

      <Image source={require('./foco.png')}/>

      <View style={styles.actions}>

        <View style={styles.content}>
          <Pressable style={styles.contentButtonText}>
            <Text>Foco</Text>   
          </Pressable>

           <Pressable style={styles.contentButtonText}>
            <Text>Pausa Curta</Text>   
          </Pressable>

           <Pressable style={styles.contentButtonText}>
            <Text>Pausa Longa</Text>   
          </Pressable>
        </View>

        <Text style={styles.time}>25:00</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Começar</Text>
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
    backgroundColor:'#14448080',
    borderRadius: 32,
    borderColor: '#144480',
    borderWidth: 2,
    alignItems: "center",
    width: '80%',
    gap: 32,
  },

  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor:'#B872FF',
    width: 264,
    borderRadius: 32,
    alignItems: "center",
  },

  time: {
    fontSize: 53.7,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffff",
  },

  buttonText: {
    padding: 8,
    color: "#021123",
    fontSize: 18,
    fontWeight: "semibold",
  },

  footer: {
    width: '80%',
    marginTop: 40,
    alignItems: "center",
  },

  footerText: {
    fontSize: 12.5,
    textAlign: "center",
    color: "#98A0A8",
    fontWeight: "regular",
  },

  content: {
    position: "absolute"

  },
  contentButtonText: {

  }
  
});