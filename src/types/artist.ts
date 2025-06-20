export interface Artist {
	id: string;
	name: string;
    genere: string;
    image: string; 
    verified: boolean;
    followers?: {
        total: number;
    };
    monthlyListeners: number;
}   