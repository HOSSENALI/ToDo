import getUserData from "./userData";

export default function CheckLogin(state) {
    const userData = getUserData();

    const checkedData = userData.filter(user => (user.username === state.username && user.password === state.password));
    if (checkedData.length > 0) {
        return {
            login: true,
            data: checkedData[0]
        };
    } else {
        return {
            login: false,
            data: null
        };
    }
}