
export interface UserSummary {
    id: number;
    user_name: string;
    user_email: string;
    dish_type: string;
    dish_name: string;
    dish_description: string;
}

export interface PartialUserSummary {
    user_email: string,
    dish_name: string,
    dish_description: string,
    dish_type: string
}