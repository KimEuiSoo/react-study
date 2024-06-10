export interface UserData{
    id: string,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: Company
}

export interface Address{
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo
}

export interface Geo{
    lat: string,
    lng: string,
}

export interface Company{
    name: string,
    catchPhrase: string,
    bs: string
}

export const initUsers: UserData[] = [
    {
        id: "",
        name: "",
        username: "",
        email: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
                lat: "",
                lng: ""
            }
        },
        phone: "",
        website: "",
        company: {
            name: "",
            catchPhrase: "",
            bs: ""
        }
    }
]