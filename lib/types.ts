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
    Burger = 'burger',
    Desert = 'desert',
    Drink = 'drink',
    Pizza = 'pizza',
    Rolls = 'rolls',
    Salat = 'salat',
    Sushi = 'sushi',
}

export enum CategoryType {
    All = 'Все',
    pizza = 'Пицца',
    burger = 'Бургер',
    sushi = 'Суши',
    rolls = 'Роллы',
    salat = 'Салаты',
    desert = 'Десерты',
    drink = 'Напитки',
}
