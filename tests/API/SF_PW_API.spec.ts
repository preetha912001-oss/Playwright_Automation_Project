import {test, expect} from '@playwright/test';
import credentials from '../../Data/sfCredentials_Api.json';
let accessToken:any;
let tokenType:any;
let instanceUrl:any;
let leadId:any;
let headers_crud: any;
const tokenUrl = credentials.tokenUrl;
const clientId = credentials.clientId;
const clientSecret = credentials.clientSecret;
test('Salesforce API testing with Playwright', async ({page,request}) => {
    // Serialization ->converting object into json
    // Generate OAuth access token using POST request
    let responseBody = await request.post(tokenUrl,{
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: {
            "grant_type": 'client_credentials',
            "client_id": clientId,
            "client_secret": clientSecret
        }
    })
    //Deserialization -> converting json into object
    let tokenResponse = await responseBody.json();
    console.log(tokenResponse);
    expect(responseBody.status()).toBe(200);
    expect(responseBody.statusText()).toBe('OK');
    accessToken = tokenResponse.access_token;
    console.log(accessToken);
    tokenType = tokenResponse.token_type;
    console.log(tokenType);
    instanceUrl = tokenResponse.instance_url;
    console.log(instanceUrl);
    // Create common headers using the generated access token
    headers_crud = {
        headers:{
            "Authorization": `${tokenType} ${accessToken}`,
            'Content-Type': 'application/json'
        }
    }
    // Create Lead using POST request
    let createLead = await request.post(`${instanceUrl}/services/data/v68.0/sobjects/lead`, {
        headers: headers_crud.headers,
        data:{
            "Salutation": "Mr.",
            "LastName": "John",
            "Company": "ABC Corp",
        }
    })
    let createLeadResponse = await createLead.json();
    console.log(createLeadResponse);
    expect(createLead.status()).toBe(201)
    console.log(createLead.status())
    expect(createLead.statusText()).toBe('Created')
    console.log(createLead.statusText())
    leadId = createLeadResponse.id;
    console.log(leadId);
    // Fetch the created Lead using GET request
    let get_Lead = await request.get(`${instanceUrl}/services/data/v68.0/sobjects/lead/${leadId}`, {
        headers: headers_crud.headers,
    })
    let getLeadResponse = await get_Lead.json();
    console.log(getLeadResponse);
    expect(get_Lead.status()).toBe(200)
    console.log(get_Lead.status())
    expect(get_Lead.statusText()).toBe('OK')
    console.log(get_Lead.statusText())
    // Update the created Lead using PATCH request
    let modify_Lead = await request.patch(`${instanceUrl}/services/data/v68.0/sobjects/lead/${leadId}`, {
        headers: headers_crud.headers,
        data:{
            "Salutation": "Ms.",
            FirstName: "Preethi",
        }
    })
    expect(modify_Lead.status()).toBe(204)
    console.log(modify_Lead.status())
    expect(modify_Lead.statusText()).toBe('No Content')
    console.log(modify_Lead.statusText())
    //Delete the Created Lead
    let delete_Lead = await request.delete(`${instanceUrl}/services/data/v68.0/sobjects/lead/${leadId}`, {
        headers: headers_crud.headers,
    })
    expect(delete_Lead.status()).toBe(204)
    console.log(delete_Lead.status())
    expect(delete_Lead.statusText()).toBe('No Content')
    console.log(delete_Lead.statusText())
})