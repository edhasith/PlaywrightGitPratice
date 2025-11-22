import { test, expect } from '@playwright/test';
import data from '../apiData/requestPayload.json' with { type: 'json' };

let token: string;
let bookingID : number;

test.beforeAll(async ({ request }) => {
    const response = await request.post('https://restful-booker.herokuapp.com/auth', {
        data: data.login,
        headers: { 'Content-Type': 'application/json' }
    })
    const responseJson = await response.json()
    console.log(responseJson)
    token = responseJson.token;
    console.log(token)
});

test('create', async ({ request }) => {
    const response = await request.post('https://restful-booker.herokuapp.com/booking', {
        data: data.create,
        headers: {
            "Content-Type": "application/json"
        }
    })
    const responseJson = await response.json()
    console.log(await response.status())
    console.log(responseJson)
    bookingID = responseJson.bookingid
});


test('get', async ({ request }) => {
    const response = await request.get("https://restful-booker.herokuapp.com/booking", {
        params: {
            firstname: "Haru",
            lastname: "Haru"
        }
    })

    // const response = await request.get("https://restful-booker.herokuapp.com/booking?firstname=sally&lastname=brown")

    const responseJson = await response.json()
    console.log(await response.status())
    console.log(responseJson)
});

test('getid', async ({ request }) => {
    const response = await request.get(`https://restful-booker.herokuapp.com/booking/116`)
    //const responseJson = await response.json()
    console.log(await response.status())
  //  console.log(responseJson)
    //const tp = await responseJson.totalprice
  //  console.log(tp)

});

test('putid', async ({ request }) => {
    const response = await request.put("https://restful-booker.herokuapp.com/booking/69",
        {
            data: {

                "firstname": "Johnny",
                "lastname": "Sins",
                "totalprice": 6969,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2018-01-01",
                    "checkout": "2019-01-01"

                },
                "additionalneeds": "Breakfast"
            }
            ,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Cookie': `token=${token}`
               
            }
        })
    console.log( response.status())
    //const responseJson = await response.json() 


})


