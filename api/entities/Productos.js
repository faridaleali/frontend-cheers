class Productos {
    constructor(apiService) {
        this.apiService = apiService;
    }

    async getProductos() {
        const response = await this.apiService.get('/productos');
        return response.data;
    }
}

export default Productos;
