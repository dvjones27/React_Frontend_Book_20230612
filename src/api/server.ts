const token = '404f583804853aed1a1445d068e65dfb2096b9bd1c6dc2af'
// if using flask token enter above and modify links below

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://book-backend-3k55.onrender.com/api/books`,
        // change url to my url once set up
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`,
            },
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://book-backend-3k55.onrender.com/api/books`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'access-control-allow-origin':	'*',
                'x-access-token': `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://book-backend-3k55.onrender.com/api/books/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://book-backend-3k55.onrender.com/api/books/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            }
        })

        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}

