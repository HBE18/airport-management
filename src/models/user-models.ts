export type User = UserInsert & {id: number};

export interface UserInsert{
    password : string,
    email : string,
    flights ?: Array<number>
}

export interface UserAuth{
    email : string,
    password : string
}

export interface UserPass{
    password: string;
}

export interface UserUpdate {
    email: string;
    password?: string;
    flights ?: Array<number>;
}


export interface UserPatch extends Partial<UserInsert>{}

/*export interface CRUD {
    list: (limit: number, page: number) => Promise<any>;
    create: (resource: any) => Promise<any>;
    putById: (id: string, resource: any) => Promise<string>;
    readById: (id: string) => Promise<any>;
    deleteById: (id: string) => Promise<string>;
    patchById: (id: string, resource: any) => Promise<string>;
}*/

export interface Ticket {
    id: number;
    flightid : string;
    seat : string;
    flightname?:string;
}