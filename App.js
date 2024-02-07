import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Form />
      <Barra />
    </View>
  );
}

export const Header = () => {
  return (
    <View style={styles.topContainer}>
      <Image style={styles.imgLogo} source={require("./assets/logo.png")} />
      <Text style={styles.texto}>Buenas tardes,</Text>
      <Text style={[styles.texto, styles.bold]}>Lluvia Victoria</Text>
    </View>
  )
}
export const Form = () => {
  return (
    <View style={styles.form}>
      <Text>Contraseña</Text>
      <View style={styles.input}>
        <TextInput />
        <Image source={require("./assets/eye.png")} />
      </View>
      <Text style={styles.passwordText}>OLVIDE MI CONTRASEÑA</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: "white" }}>ENVIAR</Text>
      </TouchableOpacity>
    </View>
  )
}

export const Barra = () => {
  return (
    <View style={styles.barra}>
      <TouchableOpacity style={styles.buttonNav}>
        <Image style={styles.buttonImg} source={require("./assets/baz.jpeg")} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonNav}>
        <Image style={styles.imgNav} source={require("./assets/elektra.png")} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonNav}>
        <Image style={styles.imgNav} source={require("./assets/enviarDinero.png")} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonNav}>
        <Image style={styles.imgNav} source={require("./assets/telefono.png")} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonNav}>
        <Image style={styles.imgNav} source={require("./assets/donacion.png")} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonNav}>
        <Image style={styles.imgNav} source={require("./assets/puntos3.png")} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    paddingTop: 30,
  },
  imgLogo: {
    width: 80,
    height: 80
  },
  topContainer: {
    paddingTop: 40,
    gap: 30,
  },
  texto: {
    fontSize: 30,
    color: "green",
  },
  bold: {
    fontWeight: 800,
  },
  form: {
    paddingTop: 40,
    gap: 50
  },
  input: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 10
  },
  passwordText: {
    textAlign: "right",
    color: "green",
    fontWeight: "bold",
  },
  button: {
    borderRadius: 20,
    backgroundColor: "green",
    width: 230,
    padding: 15,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 70
  },
  barra:{
    flexDirection:"row",
    gap:10,
    justifyContent: "center",
    marginTop:70
  },
  buttonNav: {
    width: 50,
    height: 50,
    backgroundColor: "#dcdcdc",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonImg: {
    width: 50,
    height: 50,
  },
  imgNav:{
    width:30,
    height:30,
  }
});
