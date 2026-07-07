import {useState, useEffect} from 'react'

// 4 custom, hook

export const useFetch = (url) => {
    const [data, setData] = useState(null)

    //5 - refatorando post
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    // 6 - loading
    const [loading, setLoading] = useState(false)

    // 7 - tratando erros
    const [error, setError] = useState(null)

    // 8 - desafio 6
    const [itemId, setItemId] = useState(null)

    const httpConfig = (data, method) => {
        if(method === 'POST') {
            setConfig({
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            setMethod(method)
        }else if(method === 'DELETE') {
            setConfig({
                method,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            setMethod(method)
            setItemId(data) //data = id do item a ser deletado
        }
    }
    useEffect(() => {

        const fetchData = async () => {
            // 6 - loading
            setLoading(true)
            setError(null)

            try{
                const res = await fetch(url)

                if(!res.ok) {
                    throw new Error(`Erro ao carregar os dados: ${res.status}`)
                }

                const json = await res.json()

                setData(json)
            } catch(error) {
                console.log(error.message)
                setError('Houve algum erro ao carregar os dados.')
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [url, callFetch]) //callFetch = quando mudar, executa o useEffect

    // 5 - refatorando post
    useEffect(() => {
        const httpRequest = async () => {

            if(method === 'POST') {
                let fetchOptions = [url, config]

                const res = await fetch(...fetchOptions)
                const json = await res.json()
                setCallFetch(json)
            }else if(method === 'DELETE') {
                const deleteUrl = `${url}/${itemId}` //itemId = id do item a ser deletado
                const res = await fetch(deleteUrl, config)
                const json = await res.json()
                setCallFetch(json)
            }
        }
        if(method) {
            httpRequest()
        }
    }, [config, method, url, itemId]) //config = quando mudar, executa o useEffect

    return {data, httpConfig, loading, error}
}