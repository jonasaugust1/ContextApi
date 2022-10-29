import api from "../api";

export async function salvarProduto(produto) {
    try {
        const response = await api.post('/produtos', produto)
        return response.data
    } catch (error) {
        console.log(error)
        return {}
    }
}

export async function pegarProduto() {
    try {
        const response = await api.get('/produtos')
        return response.data
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function removerProduto(produto) {
    try {
        await api.delete(`/produtos/${produto.id}`)
        return 'sucesso'
    } catch (error) {
        console.log(error)
        return 'error'
    }
}