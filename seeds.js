const mongoose = require("mongoose");
var Product = require("./models/products");

var data = [
    // type alimento
    {
        type: "alimento",
        subtype:"alimentadores",
        name:"Alimentador 1 kg",
        image: "http://www.jgsousa.pt/images/stories/virtuemart/product/012.032.png",
        price: "1.00",
        description: ""

    },
    {
        type: "alimento",
        subtype:"alimentadores",
        name:"Alimentador 2 kg",
        image: "https://drwfxyu78e9uq.cloudfront.net/usercontent/apisfilanis/media/images/5a62d4135eff314bca4af3d682e86358.JPG",
        price: "2.00",
        description: ""
    },
    {
        type: "alimento",
        subtype:"alimentadores",
        name:"Alimentador 5 kg",
        image: "https://sc01.alicdn.com/kf/HTB1Wr6vJWSWBuNjSsrbq6y0mVXaC/2018-Beekeeper-hive-bee-feeder-for-bees.jpg_350x350.jpg",
        price: "5.00",
        description: ""
    },
    {
        type: "alimento",
        subtype:"alimentadores",
        name:"Alimentador de entrada",
        image: "https://abadiarural.pt/wp-content/uploads/2018/08/alimentador-garrafa.jpg",
        price: "0.50",
        description: ""
    },
    {
        type: "alimento",
        subtype:"alimento",
        name:"Apifonda pasta 12,5kg",
        image: "https://drwfxyu78e9uq.cloudfront.net/usercontent/apisfilanis/media/images/fe1913d-apifonda.jpg",
        price: "5.00",
        description: ""
    },
    {
        type: "alimento",
        subtype:"alimento",
        name:"Apipasta 15Kg",
        image: "https://www.agroshop.pt/wp-content/uploads/2018/11/phosphorland-agroshop-apicultura-alimento-apipasta-com-proteinas-e-vitaminas-caixa-1.jpg",
        price: "5.00",
        description: ""
    },
    // type colmeias
    {
        type: "colmeias",
        subtype:"lusitana",
        name:"comeia lusitana completa S/cera",
        image: "http://loja.abelhasecompanhia.com/213-large_default/colmeia-lusitana-completa-c-quadros-s-cera.jpg",
        price: "60.00",
        description: ""
    },
    {
        type: "colmeias",
        subtype:"lusitana",
        name:"comeia lusitana completa C/cera",
        image: "http://loja.abelhasecompanhia.com/213-large_default/colmeia-lusitana-completa-c-quadros-c-cera.jpg",
        price: "60.00",
        description: ""
    },
    {
        type: "colmeias",
        subtype:"reversivel",
        name:"comeia reversivel completa S/cera",
        image: "http://loja.abelhasecompanhia.com/240-thickbox_default/colmeia-reversivel-completa-c-quadros-s-cera.jpg",
        price: "60.00",
        description: ""
    },
    {
        type: "colmeias",
        subtype:"reversivel",
        name:"comeia reversivel completa C/cera",
        image: "http://loja.abelhasecompanhia.com/240-thickbox_default/colmeia-reversivel-completa-c-quadros-s-cera.jpg",
        price: "60.00",
        description: ""
    },
    {
        type: "colmeias",
        subtype:"langstroth",
        name:"comeia langstroth completa S/cera",
        image: "https://drwfxyu78e9uq.cloudfront.net/usercontent/apisfilanis/media/images/7101ec1c9a5cae8822d81736ea08531a.jpg",
        price: "60.00",
        description: ""
    },
    {
        type: "colmeias",
        subtype:"langstroth",
        name:"comeia langstroth completa C/cera",
        image: "https://drwfxyu78e9uq.cloudfront.net/usercontent/apisfilanis/media/images/7101ec1c9a5cae8822d81736ea08531a.jpg",
        price: "60.00",
        description: ""
    },
    //embalagens
    {
        type: "embalagens",
        subtype:"frascos",
        name:"Frasco 1 Kg",
        image: "http://www.jgsousa.pt/images/stories/virtuemart/product/028.059.png",
        price: "0.30",
        description: ""
    },
    {
        type: "embalagens",
        subtype:"frascos",
        name:"Frasco 0.5 Kg",
        image: "http://www.jgsousa.pt/images/stories/virtuemart/product/053.059.png",
        price: "0.20",
        description: ""
    },
];

function seedDB() {
    Product.remove({}, function (err) {
        if(err){
            console.log(err);
        }
        console.log("removed Products");
        data.forEach(function (seed) {
            Product.create(seed, function (err, product) {
                if(err){
                    console.log(err);
                } else {
                    //console.log("added product");
                    product.save();
                }
            })
        })
    })
}
module.exports = seedDB();