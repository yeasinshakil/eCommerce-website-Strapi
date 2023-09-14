import axios from "axios"
const params = {
    headers: {
        Authorization: "bearer " + `2ac7f37d497425ef4a06d2429673ca955e94d19d6c7026b6d3487f06f28a573ff9b0af6987308d0c5514c74215c232b87404b2d4bbb8a60037f511400e14a1df6250c251b3f4553fd4db8052bfb18630d560c9171c839fd1e2be34f8a3fe6b5403cef91ae4285f09f269f4d9154438fc0d98f6bccd563344537ea36be9bc2da3`
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(
            "http://localhost:1337" + url,
            params
        );
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};