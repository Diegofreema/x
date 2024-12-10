import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const Details = () => {
  const { id, name, description } = useLocalSearchParams();
  const router = useRouter();
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
};

export default Details;
