jQuery(document).ready(function($) {
    var GET_PARAM = function(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    };
    console.log("this is the pgage of : " + GET_PARAM("yourProduct"));
    var catalogs = function(){
        if(GET_PARAM("catalog") === 'x100'){
            return catalog_x100;
        } else {
            return catalog_x10;
        }
    }

    var myCatalog = catalogs();

    var i = GET_PARAM("yourProduct");


    console.log(catalog_x100[i].pictures[0]);
    var HTMLcarousel = '<h2 class="bg-blue text-white p-4">' + catalog_x100[i].name + '</h2>\
                        <h2 class="price">' + catalog_x100[i].price + '</h2>\
                        <div id="carouselExampleControls" class="carousel slide bg-secondary" data-ride="carousel">\
                            <div class="carousel-inner">\
                                <div class="carousel-item active">\
                                    <section>\
                                        <article>\
                                            <img src=' + catalog_x100[i].pictures[0] + ' alt="First">\
                                        </article>\
                                    </section>\
                                </div>\
                                <div class="carousel-item">\
                                    <section>\
                                        <article>\
                                            <img src=' + catalog_x100[i].pictures[1] + ' alt="First">\
                                        </article>\
                                    </section>\
                                </div>\
                                <div class="carousel-item">\
                                    <section>\
                                        <article>\
                                            <img src=' + catalog_x100[i].pictures[2] + ' alt="First">\
                                        </article>\
                                    </section>\
                                </div>\
                                <div class="carousel-item">\
                                    <section>\
                                        <article>\
                                            <img src=' + catalog_x100[i].pictures[3] + ' alt="First">\
                                        </article>\
                                    </section>\
                                </div>\
                            </div>\
                            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">\
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>\
                                <span class="sr-only">Previous</span>\
                            </a>\
                            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">\
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>\
                                <span class="sr-only">Next</span>\
                            </a>\
                        </div>';
    var description = $('<p>').text(catalog_x100[i].description);
    $('main .col-8').append(HTMLcarousel);
    $('main .col-4').append(description);
    $('.carousel').carousel()
});
