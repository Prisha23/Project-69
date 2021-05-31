import {Text, Veiw, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';

<TouchableOpacity>
  onPress = {this.getCameraPermission}
  style = {styles.scanButton}
  title = "Bar Code Scanner">
      <Text style = {styles.buttonText}>Scan QR Code</Text>>
</TouchableOpacity>