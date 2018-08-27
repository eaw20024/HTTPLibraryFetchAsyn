class EasyHTTP{
    // Make a HTTP Get Request 
    async get(url) {
        const res = await fetch(url);
        const resData = await res.json();
        return resData;
    }

    // Make HTTP Post Request 
    async post(url, data) {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            const resData = await res.json();
            return resData;
    }

    // Make HTTP Put Request 
    async put(url, data) {
            const res = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            const resData = await res.json();
            return resData;
    }

    // Make HTTP Delete Request 
    async delete(url) {
            const res = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            const resData = await 'Resouce Deleted';
            return resData;
    }
}