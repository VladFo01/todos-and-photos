import { fetchPhotos } from "./actions";

export const fetchPhotosAsync = id => {
    return function(dispatch) {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
            .then(response => response.json())
            .then(data => dispatch(fetchPhotos(data)));
    }
}