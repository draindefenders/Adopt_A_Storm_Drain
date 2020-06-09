import React from 'react'

// Start Openlayers imports
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import {fromLonLat} from 'ol/proj';
import {defaults as defaultInteractions, DragRotateAndZoom} from 'ol/interaction';
import TileLayer from 'ol/layer/Tile';
import {
    ScaleLine,
    Zoom,
    MousePosition,
    defaults as DefaultControls
} from 'ol/control';
import Stamen from "ol/source/Stamen";

// End Openlayers imports

class OLMap extends React.Component {
    constructor(props) {
        super(props)
        this.map = {};
        this.updateDimensions = this.updateDimensions.bind(this)
    }
    updateDimensions(){
        const h = window.innerWidth >= 992 ? window.innerHeight-64 : window.innerHeight-64
        this.setState({height: h})
    }
    componentWillMount(){
        window.addEventListener('resize', this.updateDimensions)
        this.updateDimensions()
    }
    componentDidMount() {
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
            <div id='map' style={style} >
            </div>
        )
    }
}
export default OLMap