    export interface Address {
        addressLine1: string;
        addressLine2: string;
        city: string;
        district: string;
    }

    export interface Requirement {
        reqType: string;
        assetType: string;
        assetName: string;
        quantity: number;
    }

    export interface School {
        address: Address;
        proofOfIdentity: number;
        schoolName: string;
        schoolType: string;
        headMasterName: string;
        headMasterEmail: string;
        numberOfTechers: number;
        numberOfStudents: number;
        requirements: Requirement[];
    }
