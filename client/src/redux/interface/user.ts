export interface Avatar {
    public_id: string;
    url: string;
}

export interface Address {
    street1: string;
    street2: string;
    city: string;
    state: string;
    country: string;
    pinCode: number | string;
    landmark: string;
    deliveryInstruction: string;
}

export interface UserDetail {
    _id: string;
    addresses: Address[]; // Assuming Address is another interface/type. If it's a simple type, replace it accordingly.
    avatar: Avatar;
    createdAt: string; // or Date if you parse it as a date object
    email: string;
    name: string;
    role: string; 
}

export interface User {
    isAuthenticated: boolean;
    isUserLoading: boolean;
    userDetail: UserDetail;
}