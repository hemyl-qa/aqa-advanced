const BaseController = require('./BaseController');

const userName = 'hemyl.qa';
const password = 'zf*Hb$2t!Gd*m93';

class AccountsController  extends BaseController{
     async getAuthToken(userName = 'hemyl.qa', password = 'zf*Hb$2t!Gd*m93') {
        const response = await this.axiosInstance.post('/Account/v1/GenerateToken', {
                "userName": userName,
                "password": password
              }
        );
        return response.data.token;
        
    };
}
module.exports = new AccountsController;