import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Dimensions, Pressable } from "react-native";
import { CameraView, Camera } from "expo-camera";
import { MaterialIcons } from '@expo/vector-icons';

export default function Pay() {
  const [hasPermission, setHasPermission] = useState<any>(null);
  const [scanned, setScanned] = useState<boolean>(false);
  const [stat,setStat] = useState<boolean>(false);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }: {type:string;data:string}) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>

      

      <CameraView
        enableTorch={stat}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["qr", "pdf417"],
        }}
        style={styles.cameraView}
      />

      <Pressable style={styles.button} onPress={() => setStat(prevStat => !prevStat)}>
        <MaterialIcons name={stat ? 'flashlight-off' : 'flashlight-on'} color={stat ? 'yellow' : 'white'} size={30} />
      </Pressable>

      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  cameraView:{
    borderColor: 'red',
    borderWidth: 5,
    flex:1,
    top: -(height*0.1),
    marginVertical: height*0.25,
    marginHorizontal:width*0.1,
    borderRadius:40,

  },
  button: {
    position: 'absolute',
    borderRadius: 50,
    height: 60,
    width:40,
    right:width*0.45,
    
    zIndex: 999,
    flex:1,
    // backgroundColor: 'blue',
    alignItems:'center',
    justifyContent:'center',    
    top: height*0.35,
  },
});
