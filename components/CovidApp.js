import React,{useState} from 'react';
import {View,TextInput,Text, TouchableOpacity, Alert} from 'react-native';
import MainUrl from '../config/Url'
import Load from './Load'
import HomeDetails from './HomeDetails'
export default function CovidApp(){

const Loader = {
    flag: "",
    todayCases: "",
    cases: "",
    recovered: "",
    todayRecovered: "",
    tests: ""
  };
  const [data, setData] = useState(Loader);
  const [text,setText]=useState('Sai');
  return(
    <View>
       <TextInput placeholder='Enter the Country Name' style={{borderWidth:2, marginTop:30, color:'black', paddingLeft:70, margin:20, height:40}} onChangeText={(text)=>{setText(text)}}/>
<TouchableOpacity onPress={async ()=>{
  console.log('I AM DINEH', text);
  const res=await Load(MainUrl(text));
  console.log('I AM THE RES', res);
  setData(res);
}} style={{backgroundColor:'red', alignItems:'center', alignSelf:'center'}}>
    <Text> Search </Text>
    </TouchableOpacity>
    <View>
    <HomeDetails Covid_Details={data}/>
    </View>
<Text>I NEED CASES {text} & {data.cases}</Text>
    </View>
  )
}