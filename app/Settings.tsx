import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Settings = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profile</Text>
        <View style={styles.item}>
          <MaterialIcons name="person" size={24} color="black" />
          <Text style={styles.itemText}>Edit Profile</Text>
        </View>
        <View style={styles.item}>
          <MaterialIcons name="security" size={24} color="black" />
          <Text style={styles.itemText}>Change Password</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.item}>
          <MaterialIcons name="notifications" size={24} color="black" />
          <Text style={styles.itemText}>Manage Notifications</Text>
        </View>
        <View style={styles.item}>
          <MaterialIcons name="volume-up" size={24} color="black" />
          <Text style={styles.itemText}>Sound Settings</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>
        <View style={styles.item}>
          <MaterialIcons name="help-outline" size={24} color="black" />
          <Text style={styles.itemText}>Help & Support</Text>
        </View>
        <View style={styles.item}>
          <MaterialIcons name="info-outline" size={24} color="black" />
          <Text style={styles.itemText}>About Us</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Legal</Text>
        <View style={styles.item}>
          <MaterialIcons name="policy" size={24} color="black" />
          <Text style={styles.itemText}>Privacy Policy</Text>
        </View>
        <View style={styles.item}>
          <MaterialIcons name="assignment" size={24} color="black" />
          <Text style={styles.itemText}>Terms of Service</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Ticketing',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemText: {
    marginLeft: 10,
    fontSize: 20,
    color:'grey',
    fontFamily: 'Ticketing',
  },
});
