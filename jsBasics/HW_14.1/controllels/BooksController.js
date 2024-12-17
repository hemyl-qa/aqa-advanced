const BaseController = require('./BaseController');

class BooksController extends BaseController {

    async getAllBooks() {
        return await this.axiosInstance ('/BookStore/v1/Books')
    }
    async addBook(userID, bookID, token) {
        return await this.axiosInstance.post ('/BookStore/v1/Books', {
            "userId": userID,
            "collectionOfIsbns": [
              {
                "isbn": bookID
              }
            ]
          }, {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
          })
    }
    async deleteAllUserBooks(userID, token) {
        return await this.axiosInstance.delete(`/BookStore/v1/Books?UserId=${userID}`,{
            "userId": userID,
                headers:{
                    Authorization : `Bearer ${token}`
                }
            }
        )
    }
    async deleteOneUserBook(userID, token, bookID) {
        return await this.axiosInstance.delete ('/BookStore/BookStoreV1BookDelete', {
            "userId": userID,
            "isbn": bookID
        },{
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}` 
                }
             }
        ) 
    }
}

module.exports = new BooksController();