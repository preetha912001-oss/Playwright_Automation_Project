import { Wrapper } from "../helper/pwWrapper";
import { selectors } from '../Pages/locator_file'
import {expect} from '@playwright/test'
import { faker } from "@faker-js/faker";
export class SfLead extends Wrapper{
    // Click the New button to create a new Lead
    async clickNew(){
        await this.clickAction(selectors(this.page).leadPage.clickNew)
    }
    // Enter the Lead details
    async newLead(){
        await this.clickAction(selectors(this.page).leadPage.clickSalutation)
        await this.clickAction(this.page.locator(selectors(this.page).leadPage.salutationValue))
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const companyName = faker.company.name()
        await this.clearAndFill(selectors(this.page).leadPage.firstName,firstName)
        await this.clearAndFill(selectors(this.page).leadPage.lastName,lastName)
        await this.clearAndFill(selectors(this.page).leadPage.companyName,companyName)
        return firstName
    }
    // Save the newly created Lead
    async saveLead(){
        await this.clickAction(this.page.locator(selectors(this.page).leadPage.saveLead))
    }
    // Verify that the Lead was created successfully
    async verifyLead(expectedLn:string){
        await expect(this.page.locator(selectors(this.page).leadPage.verifyLead).filter({ hasText: 'Lead' })).toContainText('was created')
        let lName = await this.page.locator(selectors(this.page).leadPage.lastNameCreated).innerText()
        console.log(lName)
        expect(lName).toContain(expectedLn)
    }
}