import axios from "axios"
const params = {
    headers: {
        Authorization: "bearer " + import.meta.env.VITE_REACT_APP_STRIPE_DEV_APP_KEY
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(
            import.meta.env.VITE_REACT_APP_STRIPE_APP_DEV_URL + url,
            params
        );
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};

export const makePaymentRequest = axios.create({
    baseURL: import.meta.VITE_REACT_APP_STRIPE_APP_DEV_URL,
    headers: {
        Authorization: "bearer " + import.meta.env.VITE_REACT_APP_STRIPE_DEV_APP_KEY
    },
});