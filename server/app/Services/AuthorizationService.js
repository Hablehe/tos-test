

class AuthorizationService {
    verifyPermission(resource,user){
        if(resource.user_id !== user.id){
            console.log('invalid access');
            throw new Error();
        }
    }
}

 module.exports = new AuthorizationService();