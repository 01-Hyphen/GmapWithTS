import { User } from "./User";
interface Mappable {
    location: {
        lan: number,
        lat: number
    }

    summary():string;
}
export class CustomMap {

    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.querySelector(divId) as HTMLElement, {
            zoom: 2.1,
            center: {
                lat: 0,
                lng: 0
            }
        })
    }

    addMarker(mappable: Mappable) {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lan
            },
        })
        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow(
                {
                    content: mappable.summary()
                }
            );

            infoWindow.open(this.googleMap, marker);

        })

    }

}