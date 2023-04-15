export interface ResponseApi {
    'origin': string;
    'destination': string;
    'departureDate': string;
    'returnDate': string;
    'seatAvailability': string;
    'price': {
        'amount': string;
        'currency': string
    };
    'offerType': string;
    'uuid': string
}
