import http from '../http-common'
class ProductDataService {
  getAll () {
    return http.get('/products')
  }

  create (data) {
    return http.post('/products', data)
  }

  get (id) {
    return http.get(`/products/${id}`)
  }

  delete (id) {
    return http.delete(`/products/${id}`)
  }

  update (id, data) {
    return http.put(`/products/product-edit/${id}`, data)
  }
}
export default new ProductDataService()
