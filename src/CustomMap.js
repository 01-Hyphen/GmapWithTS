"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomMap = void 0;
var CustomMap = /** @class */ (function () {
    function CustomMap(divId) {
        this.googleMap = new google.maps.Map(document.querySelector(divId), {
            zoom: 2.1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }
    CustomMap.prototype.addMarker = function (mappable) {
        var _this = this;
        var marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lan
            },
        });
        marker.addListener('click', function () {
            var infoWindow = new google.maps.InfoWindow({
                content: mappable.summary()
            });
            infoWindow.open(_this.googleMap, marker);
        });
    };
    return CustomMap;
}());
exports.CustomMap = CustomMap;
