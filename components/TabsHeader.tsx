/* eslint-disable prettier/prettier */

import { Text, View } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
type Props = {};

export const TabsHeader = ({}: Props): JSX.Element => {
  const headerHeight = useHeaderHeight();
  console.log(headerHeight);

  return (
    <View
      style={{
        height: headerHeight || 70,
        backgroundColor: 'white',
        width: '100%',
      }}
    >
      <Text> TabsHeader</Text>
    </View>
  );
};
