const API = {
    "characters": "https://rickandmortyapi.com/api/character/",
    "locations": "https://rickandmortyapi.com/api/location/",
    "episodes": "https://rickandmortyapi.com/api/episode/"
};

const charactersPerPage = 6;

let queryData = '';
let page = 1;

let next = null;
let back = null;

$('#next').hide();
$('#back').hide();

$('#search-button').on('click', () => {
    queryData = $('#search-bar').val();
    $('#search-bar').val('');
    page = 1;
    api_request(API.characters, {
        page: page,
        name: queryData
    });
});

/* NEXT BUTTON */
$('#next').on('click', () => {
    api_request(API.characters, {
        page: ++page,
        name: queryData
    });
});

/* BACK BUTTON */
$('#back').on('click', () => {
    api_request(API.characters, {
        page: --page,
        name: queryData
    });
});

function api_request(url, data = {}) {
    $.get({
        url: API.characters,
        data: data,
        success: (res) => {
            /* LIMPIAR SCREEN */
            $('.result').html('');
            /* DATOS EN CONSOLA */
            //console.log(res);
            next = res.info.next || null;

           // console.log(next);
            back = res.info.prev || null;

            for(let [key, value] of Object.entries(res.results)) {
                
                let elem = $('<div>');
                elem.addClass('card');
                let img = $('<img>');
                img.attr('src', value.image);
                let name = $('<span>');
                name.text(value.name);
                name.addClass('card-title');
                elem.append(img);
                elem.append(name);
                $('.result').append(elem);
            }

            if(next !== null) $('#next').show();
            else $('#next').hide();
            if(back !== null) $('#back').show();
            else $('#back').hide();
            
            $('html').scrollTop(0);
        }
    })
}