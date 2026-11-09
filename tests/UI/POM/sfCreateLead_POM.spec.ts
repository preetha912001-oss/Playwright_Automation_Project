import {test} from  '../../../helper/customFixture'
import  dotenv from 'dotenv'
//use the env file data
//config env file
dotenv.config({path:'Data/prod.env'})
test.use({storageState: 'Data/sfLogin_SS.json'});
test('Lead Creation in Salesforce using POM',async({
    loginFix,
    homeFix,
    leadFix
    })=>{
    await loginFix.loadSfUrl(process.env.PROD_URL as string)
    await homeFix.viewAppLauncher()
    await leadFix.clickNew()
    let fName = await leadFix.newLead()
    await leadFix.saveLead()
    console.log('Test steps completed');
    await leadFix.verifyLead(fName)
})                                      