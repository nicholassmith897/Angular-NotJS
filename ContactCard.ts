interface Person: {
    firstName: string;
    lastName?: string;
    birthday?: Date;
}
interface Contact: {
    phoneNumber: string;
    email?: string;
    slack?: string;
    function formatNumber(phoneNumber){
    }
}
interface ContactCard extends Person, Contact: {
    function sendMessage(){
    }
    function addToFavorites(){
    }
}
