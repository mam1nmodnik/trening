
export type getTariffsType = {
        id: string,
        period: string,
        price: number,
        full_price: number,
        is_best: boolean,
        text: string
    }

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

