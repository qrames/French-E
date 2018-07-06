jQuery(document).ready(function($) {
    var GET_PARAM = function(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    };
    console.log("this is the pgage of : " + GET_PARAM("yourProduct"));

    var i = GET_PARAM("yourProduct");
    console.log(catalog[i].pictures[0]);
    var HTMLcarousel = '<h2 class="bg-blue text-white p-4">Les bonnes affaires du moment</h2>\
                        <div id="carouselExampleControls" class="carousel slide bg-secondary" data-ride="carousel">\
                            <div class="carousel-inner">\
                                <div class="carousel-item active">\
                                    <section>\
                                        <article>\
                                            <img src=' + catalog[i].pictures[0] + ' alt="First">\
                                            <p>descriptdddddion et PRIX</p>\
                                        </article>\
                                    </section>\
                                </div>\
                                <div class="carousel-item">\
                                    <section>\
                                        <article>\
                                            <img src=' + catalog[i].pictures[1] + ' alt="First">\
                                            <p>descriptdddddion et PRIX</p>\
                                        </article>\
                                    </section>\
                                </div>\
                                <div class="carousel-item">\
                                    <section>\
                                        <article>\
                                            <img src=' + catalog[i].pictures[2] + ' alt="First">\
                                            <p>descriptdddddion et PRIX</p>\
                                        </article>\
                                    </section>\
                                </div>\
                                <div class="carousel-item">\
                                    <section>\
                                        <article>\
                                            <img src=' + catalog[i].pictures[3] + ' alt="First">\
                                            <p>descriptdddddion et PRIX</p>\
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
    var description = $('<p>').text(catalog[i].description);
    $('main').append(HTMLcarousel);
    $('main').append(description);
    $('.carousel').carousel()
});
