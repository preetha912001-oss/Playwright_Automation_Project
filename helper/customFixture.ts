import {test as base} from '@playwright/test'
import { SfLead } from '../Pages/sfleadPage'
import { SfLogin } from '../Pages/sfloginPage'
import { SfHome } from '../Pages/sfhomePage'
type myFixture = {
    loginFix : SfLogin
    homeFix : SfHome
    leadFix : SfLead
}
export const test = base.extend<myFixture>({
    loginFix: async({page},use)=>{
        let loginObj = new SfLogin(page)
        await use(loginObj)
    },
    homeFix: async({page},use)=>{
        let homeObj = new SfHome(page)
        await use(homeObj)
    },
    leadFix: async({page},use)=>{
        let leadObj = new SfLead(page)
        await use(leadObj)
    }
})