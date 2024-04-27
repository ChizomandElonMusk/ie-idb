

export async function loginUser(username, password) {
    var passwords = ""
    passwords = {
        params: [username, password],
    }
    passwords = JSON.stringify(passwords)

    try {
        const rawResponse = await fetch('https://api.ikejaelectric.com/idbwebapi/ie/v1/authenticate', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer 8bcdcbd0-6e0c-3fb4-87af-602e87b5654f',
                'Content-Type': 'application/json'

            },
            body: passwords,
        })

        const response = await rawResponse.json()
        // return response

        // console.log(response)

        // console.log(response.passwords)
        // console.log(response)
        return response
    } catch (error) {
        console.log(error)
        M.toast({html: `<b class="red-text">${error}</b>`})
    }
}


export async function getUserInfo() {
    let token = localStorage.getItem('jdotwdott')
    var passwords = ""
    passwords = {
        param: "0102327327",
    }
    passwords = JSON.stringify(passwords)

    try {
        const rawResponse = await fetch('https://api.ikejaelectric.com/idbwebapi/ie/v1/acctinfo', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer 8bcdcbd0-6e0c-3fb4-87af-602e87b5654f',
                'Content-Type': 'application/json',
                'token': token

            },
            body: passwords,
        })

        const response = await rawResponse.json()
        console.log(response)
        return response

        // console.log(response)

        // console.log(response.passwords)
        // console.log(response)
        return response
    } catch (error) {
        console.log(error)
        M.toast({html: `<b class="red-text">${error}</b>`})
    }
}


export async function getPaymentHistory() {
    let token = localStorage.getItem('jdotwdott')
    var passwords = ""
    passwords = {
        param: "0102327327",
    }
    passwords = JSON.stringify(passwords)

    try {
        const rawResponse = await fetch('https://api.ikejaelectric.com/idbwebapi/ie/v1/paymenthistory', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer 8bcdcbd0-6e0c-3fb4-87af-602e87b5654f',
                'Content-Type': 'application/json',
                'token': token

            },
            body: passwords,
        })

        const response = await rawResponse.json()
        console.log(response)
        return response

        // console.log(response)

        // console.log(response.passwords)
        // console.log(response)
        // return response
    } catch (error) {
        console.log(error)
        M.toast({html: `<b class="red-text">${error}</b>`})
    }
}



export async function changePassword() {
    let token = localStorage.getItem('jdotwdott')
    console.log('this is the token ', token);
    var passwords = ""
    passwords = {
        params: ["Test@001","Test@001"],
    }
    passwords = JSON.stringify(passwords)

    try {
        const rawResponse = await fetch('https://api.ikejaelectric.com/idbwebapi/ie/v1/changepassword', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer 8bcdcbd0-6e0c-3fb4-87af-602e87b5654f',
                'Content-Type': 'application/json',
                'token': token

            },
            body: passwords,
        })

        const response = await rawResponse.json()
        console.log(response)
        return response

        // console.log(response)

        // console.log(response.passwords)
        // console.log(response)
        // return response
    } catch (error) {
        console.log(error)
        M.toast({html: `<b class="red-text">${error}</b>`})
    }
}