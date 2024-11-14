
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface BotaoSecundarioProps {
  onPress: () => void;
  title: string;
}

const BotaoSecundario: React.FC<BotaoSecundarioProps> = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.buttonSecondary} onPress={onPress}>
      <Text style={styles.buttonTextSecondary}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonSecondary: {
    backgroundColor: '#575f66',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  buttonTextSecondary: {
    color: '#ccc',
    fontSize: 16,
  },
});

export default BotaoSecundario;

