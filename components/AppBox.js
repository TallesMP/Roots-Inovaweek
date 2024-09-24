import { Text, View, } from "react-native";


interface BoxProps {
  titulo: string;
  conteudos: string[];
}

const Box : React.FC<BoxProps> = ({ titulo, conteudos }) => {
  return (
    <View style={{ backgroundColor:'#221D1D', width:'75%', height:'27%',borderRadius: 10, padding: 10, elevation: 50, shadowRadius: 25, marginBottom: 25 }}>
      <View style={{ backgroundColor:'#AC0808', width:'5%', height:'10%', borderRadius: 1000}}></View>
      <Text style={{ color: 'white', margin: 10, marginTop: 5,}}>{titulo}:</Text>
      {conteudos.map((conteudo, index) => (
        <Text key={index} style={{color: 'white', margin: 2, marginLeft: '5%'}}>{conteudo}</Text>
      ))}
    </View>
  );
}

export default Box;
