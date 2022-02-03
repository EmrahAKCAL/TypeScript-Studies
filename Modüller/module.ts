//import edilecek dosyalar(gelen dosyalar)
import { Taxi } from './taxi'; 


let taxi_1: Taxi= new Taxi({ x: 5, y: 8}, 'Red');
taxi_1.travelTo({x:1, y:2});

let currentLocation=taxi_1.location;
taxi_1.location={x:-11, y:21};



