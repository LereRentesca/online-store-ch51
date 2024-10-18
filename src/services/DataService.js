

const catalog = [
    {
        "title":"Apples",
        "image":"apples.jpg",
        "price":2.33,
        "category":"fruits",
        "_id":"131298"
    },
    {
        "title":"Carrots",
        "image":"carrots.jpg",
        "price":3.49,
        "category":"vegetables",
        "_id":"131299"
    },
    {
        "title":"Cereal",
        "image":"cereal.jpg",
        "price":2.33,
        "category":"dairy",
        "_id":"131300"
    },
    {
        "title":"Cheese",
        "image":"cheese.webp",
        "price":2.33,
        "category":"dairy",
        "_id":"131301"
    },
    {
        "title":"Coffee",
        "image":"coffee.jpg",
        "price":2.33,
        "category":"dairy",
        "_id":"131302"
    },
    {
        "title":"Eggs",
        "image":"eggs.jpeg",
        "price":2.33,
        "category":"dairy",
        "_id":"131303"
    },
    {
        "title":"Milk",
        "image":"milk.jpeg",
        "price":2.33,
        "category":"dairy",
        "_id":"131304"
    },
    {
        "title":"Tomato",
        "image":"tomato.jpg",
        "price":2.33,
        "category":"vegetable",
        "_id":"131305"
    },
    {
        "title":"Toothbrush",
        "image":"toothbrush.webp",
        "price":2.33,
        "category":"non-dairy",
        "_id":"131306"
    },
];

class DataService{
    getProducts(){
        return catalog;
    }
}

export default DataService;