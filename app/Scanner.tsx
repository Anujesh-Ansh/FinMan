import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Dimensions, Pressable, Animated } from "react-native";
import { CameraView, Camera } from "expo-camera";
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Scanner() {
  const [hasPermission, setHasPermission] = useState<any>(null);
  const [scanned, setScanned] = useState<boolean>(false);
  const [stat, setStat] = useState<boolean>(false);
  const [animation] = useState(new Animated.Value(0));
  const router = useRouter();

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  useEffect(() => {
    if (!scanned) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(animation, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
          }),
          Animated.timing(animation, {
            toValue: 0,
            duration: 1500,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }
  }, [scanned]);

  const validateAndExtractData = (data: string) => {
    const regex = /Chore:-\s*(.+)\s+Points:-\s*(\d+)\s+Creator:-\s*(.+)/;
    const match = data.match(regex);
    if (match) {
      return {
        chore: match[1].trim(),
        points: parseInt(match[2], 10),
        creator: match[3].trim(),
      };
    }
    return null;
  };

  const handleBarCodeScanned = ({ type, data }: { type: string; data: string }) => {
    setScanned(true);
    const choreData = validateAndExtractData(data);
    if (choreData) {
      router.push({ pathname: './(tabs)/chores', params: { chore: choreData.chore, points: choreData.points } });
    } else {
      alert('Invalid QR code format');
      setScanned(false);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const animatedStyle = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, Dimensions.get('window').width * 0.8],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan & Add</Text>

      <CameraView
        enableTorch={stat}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["qr", "pdf417"],
        }}
        style={styles.cameraView}
      >
        <View style={styles.cameraOverlay}>
          <View style={styles.scannerFrame}>
            <Animated.View style={[styles.scannerLine, animatedStyle]} />
          </View>
        </View>
      </CameraView>

      <Pressable style={styles.button} onPress={() => setStat(prevStat => !prevStat)}>
        <MaterialIcons name={stat ? 'flashlight-off' : 'flashlight-on'} color={stat ? '#ffc700' : 'black'} size={30} />
      </Pressable>

      {scanned && (
        <Pressable style={styles.refresh} onPress={() => setScanned(false)}>
          <MaterialIcons name="refresh" color='grey' size={50} />
        </Pressable>
      )}
    </View>
  );
}

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:    "column",
    justifyContent: "center",
    alignItems: 'center',
  },
  cameraView: {
    borderColor: 'red',
    borderWidth: 5,
    flex: 1,
    top: -(height * 0.1),
    marginVertical: height * 0.25,
    marginHorizontal: width * 0.1,
    borderRadius: 40,
    width: width * 0.8,
  },
  title: {
    position: 'absolute',
    top: 40,
    fontSize: 85,
    fontFamily: 'Ticketing',
  },
  button: {
    position: 'absolute',
    borderRadius: 50,
    height: 60,
    width: 60,
    left: width * 0.44,
    zIndex: 999,
    flex: 1,
    backgroundColor: 'antiquewhite',
    alignItems: 'center',
    justifyContent: 'center',
    top: height * 0.6,
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  refresh: {
    position: 'absolute',
    borderRadius: 50,
    height: 60,
    width: 40,
    right: width * 0.45,
    zIndex: 999,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: height * 0.31,
  },
  cameraOverlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scannerFrame: {
    width: width * 0.8,
    height: width * 0.8,
    overflow: 'hidden',
  },
  scannerLine: {
    width: '100%',
    height: 2,
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
  },
});

