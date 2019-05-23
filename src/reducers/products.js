var initialState = [
    {
        id : 1,
        name: 'Iphone 7',
        image: 'https://cdn.tgdd.vn/Products/Images/42/78124/iphone-7-plus-32gb-gold-600x600-600x600.jpg',
        description: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory : 10,
        rating: 4
    },
    {
        id : 2,
        name: 'Samsung',
        image: 'https://cdn.tgdd.vn/Products/Images/42/111107/samsung-galaxy-a7-2018-blue-600x600.jpg',
        description: 'Sản phẩm do Sámung sản xuất',
        price: 400,
        inventory : 15,
        rating: 3
    },
    {
        id : 3,
        name: 'Vsmart',
        image: 'https://cdn.tgdd.vn/Products/Images/42/196610/vsmart-joy-1-plus-black-600x600.jpg',
        description: 'Sản phẩm do Vin sản xuất',
        price: 300,
        inventory : 10,
        rating: 5
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default : return [...state];
    }
}

export default products;
