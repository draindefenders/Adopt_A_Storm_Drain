import React from 'react'

// Start Openlayers imports
import 'ol/ol.css';
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import MapPoints from "../scripts/MapPoints.js";

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
        window.addEventListener('resize', this.updateDimensions)
        this.updateDimensions()
    }
    componentDidMount() {
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
            <div id='map' style={style} >
            </div>
        )
    }
}
export default OLMap