import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


export default function Layout() {
    const [fontsLoaded] = useFonts({
        'Ticketing': require('../assets/fonts/Ticketing.ttf'),
    });

    useEffect(()=>{
        async function prepare(){
            await SplashScreen.preventAutoHideAsync();

        }
        prepare();
    },[])

    if(!fontsLoaded){
        return undefined;
    }else{
        SplashScreen.hideAsync();
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </GestureHandlerRootView>
    );
}
