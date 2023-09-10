# [Accessing Device Information with react-native-device-info library in Expo](https://medium.com/@amilaupendra5/accessing-device-information-with-react-native-device-info-library-in-expo-cc9861dafbaf#:~:text=When%20developing%20an%20Expo%20project,offer%20access%20to%20certain%20properties.)


### Here our main focus is to accessing device information through react-native-device-info library from expo. Refer to the available APIs here for retrieving device details here. Let’s start.

1. Run the following command to create a new React Native project called “get-dev-info”
`npx create-expo-app get-dev-info`

`cd get-dev-info`

2. check initialised project works

`npm run android`

3. Install necessary libraries

`npm install react-native-device-info`
`npm install expo-dev-client`

4. import installed libraries

`import DeviceInfo from 'react-native-device-info';`
`import 'expo-dev-client';`

5. Initialize EAS Build

`eas build:configure`
`select ALL`

6. copy this to eas.json file

{
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {}
  }
}

7. change your code to get device id

```javascript
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import 'expo-dev-client';


export default function App() {

  let deviceId = DeviceInfo.getDeviceId();
  return (
    <View style={styles.container}>
      <Text>{deviceId}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 
```

8. Create a build for emulator/simulator

after creating the development build. we can continue developing app using react-native-device-info . the created build will be a custom expo app.

Each platform has specific instructions you’ll have to follow. I use here android build. refer for IOS.

eas build --profile development --platform android

your project will start to build

after finished building. install the apk.
you can scan the QR code in expo app and then it will redirect to download the apk.

or

you can install it on emulator. to do that type ‘Y’ in terminal

9. run the installed app in emulator

npx expo start --dev-client
now when you run above code the created custom expo app will be running. .

That’s it.
