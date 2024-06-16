import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';



export default function TabLayout() {
    const [fontsLoaded, fontError] = useFonts({
        'Ticketing': require('../../assets/fonts/Ticketing.ttf'),// Adjust the path as necessary
    });
    return (
        <Tabs
            screenOptions={{
                tabBarStyle: styles.tabBar,
                tabBarShowLabel: true,
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'white',
                tabBarLabelStyle: styles.tabBarLabel,
                tabBarItemStyle: styles.tabBarItem,
            }}
        >
            <Tabs.Screen
                name="learn"
                options={{
                    title: 'Learn',
                    headerTitle: 'Swap Cards',
                    headerStyle: { backgroundColor: '#e8e9ed' },
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="book" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="goal"
                options={{
                    title: 'Goal',
                    headerTitle: 'Chores',
                    headerStyle: { backgroundColor: 'lavender' },
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="star" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerTitle: 'Expense Tracker',
                    headerStyle: { backgroundColor: 'lightblue' },
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="leader"
                options={{
                    title: 'LeaderBoard',
                    headerTitle: 'LeaderBoard',
                    headerStyle: { backgroundColor: 'lightgrey' },
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="leaderboard" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="pay"
                options={{
                    title: 'Pay',
                    headerTitle: 'Scan the Code',
                    headerStyle: { backgroundColor: 'pink' },
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="payment" color={color} size={size} />
                    ),
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#FF9913',
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        borderRadius : 25,
        position: 'absolute',
        left: 10,
        right: 10,
        bottom: 10,
        height: 60,
        paddingHorizontal:1,
        paddingBottom:3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5,
        fontFamily: 'Ticketing',
    },
    tabBarLabel: {
        fontSize: 10,
        fontFamily: 'Ticketing',
    },
    tabBarItem: {
        margin: 5,
        fontFamily: 'Ticketing',
    },
});
