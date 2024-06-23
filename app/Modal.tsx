// Modal.tsx
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  data: string;
}

const Modal: React.FC<ModalProps> = ({ visible, onClose, data }) => {
  if (!visible) return null;

  return (
    <View style={styles.modalContainer}>
      <Text style={styles.modalTitle}>Scanned Data</Text>
      <Text style={styles.modalContent}>{data}</Text>
      <Pressable style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeButtonText}>Close</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalContent: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#2196F3',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Modal;
