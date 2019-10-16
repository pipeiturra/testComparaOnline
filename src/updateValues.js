function updateFunction(producto) {

    //todos los productos descuentan dias menos mega cobertura
    if (producto.name != 'Mega Coverage')
        producto.sellIn = producto.sellIn - 1;


    //switch para reconocimiento de calculo de cobertura
    switch (producto.name) {
        case 'Full Coverage':
            fullCoverage(producto);
            break;
        case 'Mega Coverage':
            break;
        case 'Special Full Coverage':
            specialFullCoverage(producto);
            break;
        case 'Super Sale':
            superSale(producto);
            break;
        default:
            //calculo descuento normal con descuento como parametro
            precioNormal(producto, 1);
            break;
    }
}

//calculo para categoria full coverage
function fullCoverage(producto) {

    var adicional = 1;

    //si se acaban los dias, los aumentos se duplican
    if ((producto.sellIn) < 0)
        adicional = 2 * adicional;

    if ((producto.price + adicional) < 50) {
        //de acuerdo a logica normal se adiciona valor
        producto.price = producto.price + adicional;
    } else
        producto.price = 50;
}

function specialFullCoverage(producto) {

    var adicional = 1;

    if ((producto.sellIn) >= 0) {
        if ((producto.sellIn) < 10) {
            //si hay menos de 10 dias se adicionan 2, si hay menos de 5 dias 3
            if ((producto.sellIn) < 5)
                adicional = 3;
            else
                adicional = 2;

            if ((producto.price + adicional) < 50) {
                //de acuerdo a logica normal se adiciona valor
                producto.price = producto.price + adicional;
            } else
                producto.price = 50;
        } else
            fullCoverage(producto);
    } else
        producto.price = 0; //si no quedan dias, el precio queda en 0

}

function superSale(producto) {
    //funcionalidad similar a descuento normal pero con doble dscto
    precioNormal(producto, 2);
}

//calculo para categoria normal y SuperSale que tienen 
function precioNormal(producto, descuento) {

    //si se acaban los dias, los descuentos se duplican
    if ((producto.sellIn) < 0)
        descuento = 2 * descuento;

    if ((producto.price - descuento) > 0) {

        //de acuerdo a logica normal se aplica descuento
        producto.price = producto.price - descuento;

    } else
        producto.price = 0;

}

exports.updateFunction = updateFunction;