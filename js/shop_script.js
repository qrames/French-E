console.log('>>>script.js');

jQuery(document).ready(function($) {

    function leadingItems(myProduct) {
        var article = $('<article>');
        article.addClass("bg-blue");
        var link = $('<a>');
        link.attr('href', "item_index.html");
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

    for (var i = 0; i < catalog.length; i++) {
        leadingItems(catalog[i]);
    }

});
// <article class="bg-blue m-5">
//     <img src="https://picsum.photos/400/600" atl="" />
// </article>
