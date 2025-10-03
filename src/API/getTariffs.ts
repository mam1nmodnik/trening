
export type getTariffsType = {
        id: string,
        period: string,
        price: number,
        full_price: number,
        is_best: boolean,
        text: string
    }

// const lockApiTariffs = [
//   {
//     "id": "f347d050-073c-4969-ae91-7346f935cf70",
//     "period": "1 неделя",
//     "price": 149,
//     "full_price": 999,
//     "is_best": false,
//     "text": "Чтобы просто начать"
//   },
//   {
//     "id": "f347d050-073c-4969-ae91-7346f935cf71",
//     "period": "1 месяц",
//     "price": 399,
//     "full_price": 1690,
//     "is_best": false,
//     "text": "Чтобы получить первые результаты"
//   },
//   {
//     "id": "f347d050-073c-4969-ae91-7346f935cf72",
//     "period": "3 месяца",
//     "price": 990,
//     "full_price": 3990,
//     "is_best": false,
//     "text": "Привести тело в порядок"
//   },
//   {
//     "id": "f347d050-073c-4969-ae91-7346f935cf72",
//     "period": "Навсегда",
//     "price": 5990,
//     "full_price": 18990,
//     "is_best": true,
//     "text": "Для тех, кто хочет всегда быть в форме и поддерживать здоровье"
//   }
// ]

export const getTariffs = async () => {
        const url = 'https://t-core.fit-hub.pro/Test/GetTariffs';
        try {
            const response = await fetch(url);
            const data: getTariffsType[] = await response.json();   
            return data
        } catch (error) {
            console.error(error);
        }
    }

