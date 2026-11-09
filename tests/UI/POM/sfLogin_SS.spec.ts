import {test} from '@playwright/test'
import data from '../../../Data/dpSfLogin.json'
test('Salesforce Login',async({page})=>{
    await page.goto('https://orgfarm-b5ee75a3ba-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome')
    await page.getByRole('textbox',{name:'Username'}).fill(data.username)
    await page.locator('#Login').click()
    await page.getByRole('textbox',{name:'Password'}).fill(data.password)
    await page.getByRole('button',{name:'Log In'}).click()
    // Complete the email verification manually
    await page.pause();
    await page.context().storageState({path:'Data/sfLogin_SS.json'})
})  