import {Icon, Style} from "ol/style";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import {fromLonLat,transform} from "ol/proj";
import GreenIcon from "../icons/green.png";
import Map from "ol/Map";
import {defaults as defaultInteractions, DragRotateAndZoom} from "ol/interaction";
import TileLayer from "ol/layer/Tile";
import Stamen from "ol/source/Stamen";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import {defaults as DefaultControls, ScaleLine, Zoom} from "ol/control";
import View from "ol/View";
import Select from "ol/interaction/Select";
import MousePosition from "ol/control/MousePosition";
function createStyle(src, img) {
    return new Style({
        image: new Icon({
            anchor: [0.5, 0.96],
            crossOrigin: 'anonymous',
            src: src,
            img: img,
            imgSize: img ? [img.width, img.height] : undefined
        })
    });
}
function MapPoints() {
    let iconFeature = new Feature(new Point(fromLonLat([-92.02,30.22])));
    iconFeature.set('style', createStyle(GreenIcon, undefined));
    let map = new Map({
        interactions: defaultInteractions().extend([
            new DragRotateAndZoom()
        ]),
        layers: [
            new TileLayer({
                source: new Stamen({
                    layer: 'terrain'
                })
            }),
            new VectorLayer({
                style: function(feature) {
                    return feature.get('style');
                },
                source: new VectorSource({features: [iconFeature]})
            })
        ],
        controls: DefaultControls().extend([
            new Zoom(),
            new MousePosition(),
            new ScaleLine({units: 'us'})
        ]),
        target: document.getElementById('map'),
        view: new View({
            center: fromLonLat([-92.02,30.22]),
            zoom: 12.5
        })
    });
    let selectStyle = {};
    let select = new Select({
        style: function (feature) {
            const image = feature.get('style').getImage().getImage();
            if (!selectStyle[image.src]) {
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.width = image.width;
                canvas.height = image.height;
                context.drawImage(image, 0, 0, image.width, image.height);
                const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                const data = imageData.data;
                for (let i = 0, ii = data.length; i < ii; i = i + (i % 4 === 2 ? 2 : 1)) {
                    data[i] = 255 - data[i];
                }
                context.putImageData(imageData, 0, 0);
                selectStyle[image.src] = createStyle(undefined, canvas);
            }
            return selectStyle[image.src];
        }
    });
    map.addInteraction(select);
    map.on('pointermove', function(evt) {
    map.getTargetElement().style.cursor =
        map.hasFeatureAtPixel(evt.pixel) ? 'pointer' : '';

});
    map.on('singleclick', function(evt) {
        if (map.hasFeatureAtPixel(evt.pixel)) {
            map.getView().setCenter(transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326'));


        }
    });
}
export default MapPoints

