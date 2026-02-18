/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  TextInput,
  Text,
  FlatList,
} from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App() {
  const [data, setData] = useState([]);
  const [txtInputData, setTxtInputData] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        onChangeText={text => {
          setTxtInputData(text);
        }}
        style={styles.txtInput}
      />
      <Text
        onPress={() => {
          console.log(txtInputData);
          setData([{ name: txtInputData }, ...data]);
        }}
        style={{ alignContent: 'center', textAlign: 'center' }}
      >
        Add Data
      </Text>
      {data && (
        <FlatList
          data={data}
          renderItem={({ item }) => {
            console.log(item);
            return <Text>{item.name}</Text>;
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txtInput: {
    borderWidth: 0.5,
    borderRadius: 5,
    marginVertical: 5,
  },
});

export default App;
