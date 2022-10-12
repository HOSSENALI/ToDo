export default function getUserData() {
    return [
        {
            id: 1,
            username: 'Shawon',
            name: 'Shawon Ahmed',
            password: '123456',
            role: null
        },
        {
            id: 2,
            username: 'Hossen',
            name: 'Hossen Ali',
            password: '123456',
            role: {
                id:2,
                name:"Super Admin"
            }
        },
        {
            id: 3,
            username: 'Shahin',
            name: 'Shahin Howlader',
            password: '123456',
            role: {
                id:1,
                name:"Admin"
            }
        }
    ]
}