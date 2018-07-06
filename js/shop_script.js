console.log('>>>script.js');

jQuery(document).ready(function($) {

    function leadingItems(myProduct, index, catalog) {
        var article = $('<article>');
        article.addClass("bg-blue");
        var link = $('<a>');
        link.attr('href', "item_index.html?yourProduct=" + index + "&catalog=" + catalog);
        var image = $('<img>');
        var name = $('<p>');
        var price = $('<p>').addClass('price');
        $(price).text(myProduct.price +"\u20AC");
        name.text( myProduct.name);
        image.attr('src', myProduct.thumb);
        $(link).append(image);
        $(link).append(price);
        $(link).append(name);
        $(article).append(link);
        $("#items").append(article);
    }
    var GET_PARAM = function(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    };
    console.log("this is the pgage of : " + GET_PARAM("yourProduct"));


    var catalogs = function(){
        if(GET_PARAM("catalog") === 'x100'){
            console.log(GET_PARAM("catalog"));
            return catalog_x100;
        } else if(GET_PARAM("catalog") === 'x10'){
            return catalog_x10;
        }
    }

    var myCatalog = catalogs();
    for (var i = 0; i < myCatalog.length; i++) {
        leadingItems(myCatalog[i], i, GET_PARAM("catalog"));
    }

});
// <article class="bg-blue m-5">
//     <img src="https://picsum.photos/400/600" atl="" />
// </article>
