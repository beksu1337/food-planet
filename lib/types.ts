export type ReviewsModel = {
    dateCurr: string;
    username: string;
    desc: string;
    user_img: string;
    id: string;
};

export type FoodModel = {
    img_src: string;
    title: string;
    title_desc: string;
    price: number;
    type: FoodType;
    id: string;
};

export enum FoodType {
    burger = 'burger',
    desert = 'desert',
    drink = 'drink',
    pizza = 'pizza',
    rolls = 'rolls',
    salat = 'salat',
    sushi = 'sushi',
}

export enum CategoryType {
    pizza = 'Пицца',
    burger = 'Бургер',
    sushi = 'Суши',
    rolls = 'Роллы',
    salat = 'Салаты',
    desert = 'Десерты',
    drink = 'Напитки',
}
