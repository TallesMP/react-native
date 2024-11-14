
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface BotaoPrimarioProps {
  onPress: () => void;
  title: string;
}

const BotaoPrimario: React.FC<BotaoPrimarioProps> = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFa500',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BotaoPrimario;

