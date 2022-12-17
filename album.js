const url = new URL(location.href);
const id = url.searchParams.get('data')

fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
    .then(response => response.json())
    .then(photos => {

        let wrapper = document.createElement('div');
        wrapper.classList.add('wrapper_detail_photo');
        document.body.appendChild(wrapper);

        for (const photo of photos) {

            let divCardComments = document.createElement('div');
            divCardComments.classList.add('card_photo');
            divCardComments.innerHTML = `
                 <h3>PHOTOS</h3>
                 <h3>AlbumID: ${photo.albumId}</h3>
                 <h3>ID: ${photo.id}</h3>
                 <h4>TITLE: ${photo.title}</h4>
                 <img src='${photo.thumbnailUrl}' alt="photo">
                 <a href='${photo.url}' alt="photoBig">ЗБІЛЬШИТИ ФОТО</a> 
                `;
            wrapper.append(divCardComments);
        }
    });


