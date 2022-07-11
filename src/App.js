import './App.css';

//import MapView from 'react-native-maps/lib/MapView';
//import {MapView} from 'react-native-maps/lib/Geojson';
var MapView = (require("react-native-maps/lib/Geojson"));
function App() {
  return (
    <div className="App">
    <wrapper>
      <MapView
  style={{flex:1}}
  region={{latitude: 52.5200066,
  longitude: 13.404954,
  latitudeDelta: 0.005,
  longitudeDelta: 0.005}}
   />
   </wrapper>
    </div>
  );
}

export default App;
