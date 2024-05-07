

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

export async function searchPaymentHistory(account_number, start_date, end_date) {
    let token = localStorage.getItem('jdotwdott')
    var passwords = ""
    passwords = {
        params: [account_number, start_date, end_date],
    }
    passwords = JSON.stringify(passwords)

    try {
        const rawResponse = await fetch('https://api.ikejaelectric.com/idbwebapi/ie/v1/paymenthistory2', {
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
        // console.log(response)
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


export async function registerIntent(meterNumber) {
    var user_meter_number = ""
    user_meter_number = {
        params: [meterNumber],
    }
    user_meter_number = JSON.stringify(user_meter_number)

    try {
        const rawResponse = await fetch('https://api.ikejaelectric.com/idbwebapi/ie/v1/registerintent', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer 8bcdcbd0-6e0c-3fb4-87af-602e87b5654f',
                'Content-Type': 'application/json',

            },
            body: user_meter_number,
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


export async function confirmOtp(otp) {
    let token = localStorage.getItem('jdotwdott')
    var userOtp = ""
    userOtp = {
        params: [otp],
    }
    userOtp = JSON.stringify(userOtp)

    try {
        const rawResponse = await fetch('https://api.ikejaelectric.com/idbwebapi/ie/v1/register', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer 8bcdcbd0-6e0c-3fb4-87af-602e87b5654f',
                'Content-Type': 'application/json',
                'token': token

            },
            body: userOtp,
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


export async function changePassword(newPassword, confirmPassword) {
    let token = localStorage.getItem('jdotwdott')
    var userPasswords = ""
    userPasswords = {
        params: [newPassword, confirmPassword],
    }
    userPasswords = JSON.stringify(userPasswords)

    try {
        const rawResponse = await fetch('https://api.ikejaelectric.com/idbwebapi/ie/v1/changepassword', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer 8bcdcbd0-6e0c-3fb4-87af-602e87b5654f',
                'Content-Type': 'application/json',
                'token': token

            },
            body: userPasswords,
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

export async function passwordResetIntent(username) {
    var usernameReq = ""
    usernameReq = {
        params: [username],
    }
    usernameReq = JSON.stringify(usernameReq)

    try {
        const rawResponse = await fetch('https://api.ikejaelectric.com/idbwebapi/ie/v1/resetintent', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer 8bcdcbd0-6e0c-3fb4-87af-602e87b5654f',
                'Content-Type': 'application/json',

            },
            body: usernameReq,
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

export async function confirmPasswordResetToken(otp) {
    let token = localStorage.getItem('jdotwdott')
    var userOtp = ""
    userOtp = {
        params: [otp],
    }
    userOtp = JSON.stringify(userOtp)

    try {
        const rawResponse = await fetch('https://api.ikejaelectric.com/idbwebapi/ie/v1/reset', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer 8bcdcbd0-6e0c-3fb4-87af-602e87b5654f',
                'Content-Type': 'application/json',
                'token': token

            },
            body: userOtp,
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


export async function getOnlineStatus() {
    let token = localStorage.getItem('jdotwdott')
    // var userMeterNumber = ""
    // userMeterNumber = {
    //     params: [otp],
    // }
    // userMeterNumber = JSON.stringify(userMeterNumber)

    try {
        const rawResponse = await fetch('https://api.ikejaelectric.com/idbwebapi/ie/v1/onlinestatus', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer 8bcdcbd0-6e0c-3fb4-87af-602e87b5654f',
                'Content-Type': 'application/json',
                'token': token

            },
            // body: userMeterNumber,
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

// payment receipt 
export async function paymentReceipt(orderNumber, channel) {
    let token = localStorage.getItem('jdotwdott')
    var userReceiptReq = ""
    userReceiptReq = {
        params: [orderNumber, channel],
    }
    userReceiptReq = JSON.stringify(userReceiptReq)

    try {
        const rawResponse = await fetch('https://api.ikejaelectric.com/idbwebapi/ie/v1/paymentreceipt', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer 8bcdcbd0-6e0c-3fb4-87af-602e87b5654f',
                'Content-Type': 'application/json',
                'token': token

            },
            body: userReceiptReq,
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


// energy balance api call
export async function energyBalance() {
    let token = localStorage.getItem('jdotwdott')

    try {
        const rawResponse = await fetch('https://api.ikejaelectric.com/idbwebapi/ie/v1/energybalance', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer 8bcdcbd0-6e0c-3fb4-87af-602e87b5654f',
                'Content-Type': 'application/json',
                'token': token

            },
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



// remote token loading
export async function loadToken(userToken) {
    let token = localStorage.getItem('jdotwdott')
    var userTokenReq = ""
    userTokenReq = {
        params: [userToken],
    }
    userTokenReq = JSON.stringify(userTokenReq)

    try {
        const rawResponse = await fetch('https://api.ikejaelectric.com/idbwebapi/ie/v1/loadtoken', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer 8bcdcbd0-6e0c-3fb4-87af-602e87b5654f',
                'Content-Type': 'application/json',
                'token': token

            },
            body: userTokenReq,
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


export function logOut() {
    if(process.client) {
      localStorage.clear()
      return {'message': 0}
    }
  }