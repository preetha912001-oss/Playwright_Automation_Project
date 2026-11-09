import { Page } from "@playwright/test"
export const selectors = (page:Page)=>({
    username : page.getByRole('textbox',{name:'Username'}),
    password : page.getByRole('textbox',{name:'Password'}),
    clickLogin : '#Login',
    homePage:{
        clickAppLauncher: '[title="App Launcher"]',
        clickViewAll: '[aria-label="View All Applications"]',
        searchLead: page.getByRole('combobox',{name:'Search apps or items...'}),
        clickLead: 'a[data-label="Leads"]',
    },
    leadPage:{
        clickNew : page.getByRole('button',{name:'New'}),
        clickSalutation : page.getByRole('combobox',{name:'Salutation'}),
        salutationValue : '[data-value="Mr."]',
        firstName : page.getByRole('textbox',{name:'First Name'}),
        lastName: page.getByRole('textbox',{name:'Last Name'}),
        companyName: page.getByRole('textbox',{name:'Company'}),
        saveLead : 'button[name="SaveEdit"]',
        verifyLead:'[data-aura-class="forceActionsText"]',
        lastNameCreated:'[slot="primaryField"]'
    }
})