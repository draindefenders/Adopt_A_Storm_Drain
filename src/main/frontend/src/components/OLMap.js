import React from 'react'

// Start Openlayers imports
import 'ol/ol.css';
import '../css/popup.css';
import Map from 'ol/Map';
import View from 'ol/View';
import Overlay from 'ol/Overlay';
import {fromLonLat, toLonLat} from 'ol/proj';
import {defaults as defaultInteractions, DragRotateAndZoom} from 'ol/interaction';
import TileLayer from 'ol/layer/Tile';
import {
    ScaleLine,
    Zoom,
    MousePosition,
    defaults as DefaultControls
} from 'ol/control';
import Stamen from "ol/source/Stamen";
import MapPoints from "../scripts/MapPoints.js";



import {toStringHDMS} from 'ol/coordinate';
import TileJSON from 'ol/source/TileJSON';
import Feature from "ol/Feature";
import Point from "ol/geom/Point";



// End Openlayers imports


class OLMap extends React.Component {

    constructor(props) {
        super(props)
        this.map = {};
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    updateDimensions(){
        const h = window.innerWidth >= 992 ? window.innerHeight-64 : window.innerHeight-64
        this.setState({height: h})
    }

    componentWillMount(){
        window.addEventListener('resize', this.updateDimensions())
        this.updateDimensions()
    }
    componentDidMount() {
       this.container = document.getElementById('popup');
       this.content = document.getElementById('popup-content');
       this.closer = document.getElementById('popup-closer');

       this.popup = new Overlay({
            element: this.container.current,
            autoPan: true,
            autoPanAnimation: {
                duration: 250
            }
       });

        this.map = new Map({
            interactions: defaultInteractions().extend([
                new DragRotateAndZoom()
            ]),
            layers: [
                new TileLayer({
                    source: new Stamen({
                        layer: 'terrain'
                    })
                })
            ],
            overlays: [],
            controls: DefaultControls().extend([
                new Zoom(),
                //new MousePosition(),
                new ScaleLine({units: 'us'})
            ]),
            target: 'map',
            view: new View({
                center: fromLonLat([-92.02,30.22]),
                zoom: 12.5
            })
        });
        this.popup = new Overlay({
          positioning: "center-center",
          element: document.getElementById("popup"),
          stopEvent: false
        });
        this.getPointData = function(coordinate){
            return null;
        }
        this.map.on('click', evt => {
          if (this.getPointData(evt.coordinate) != null){
              this.popup.setPosition(evt.coordinate);
              this.map.addOverlay(this.popup);
              document.getElementById('popup').style.display = "block"
              document.getElementById("popup-content").innerHTML = "Hello World! \n Adopted by Nick"
          }
        })

       this.closer.onclick = function() {
         document.getElementById('popup').style.display = "none"
         return false;
       };
        MapPoints();
    }
    componentWillUnmount(){
        window.removeEventListener('resize', this.updateDimensions)
    }
    render(){
        const style = {
            width: '100%',
            height: this.state.height,
            backgroundColor: '#cccccc'
        }

        return (

        <div>
           <div id='map' style={style}>
            </div>
            <div id="popup" class="ol-popup">
               <a href="#" id="popup-closer" class="ol-popup-closer"></a>
               <div id="popup-content"></div>
            </div>
         </div>
        )
    }
}
export default OLMap