class Ordenar {
    constructor(apiService) {
        this.apiService = apiService;
    }

    async postOrdenar(data) {
        const response = await this.apiService.post('/.ordenar', data);
        return response.data;
    }
}

export default Ordenar;
