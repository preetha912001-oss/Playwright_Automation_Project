import { Wrapper } from "../helper/pwWrapper";
import { selectors } from '../Pages/locator_file';
import { expect } from "@playwright/test";
export class SfHome extends Wrapper{
    async viewAppLauncher(){
        // Click the App Launcher
        await this.clickAction(this.page.locator(selectors(this.page).homePage.clickAppLauncher))
        // Click View All Applications
        await this.clickAction(this.page.locator(selectors(this.page).homePage.clickViewAll))
        // Search for Leads application
        //orignal code
        await this.clearAndFill(selectors(this.page).homePage.searchLead,'Leads')
        // await this.page.waitForTimeout(2000)
        // const leads = selectors(this.page).homePage.searchLead;
        // await this.clearAndFill(leads, 'Leads');
        // await expect(leads).toBeVisible();
        // Click the Leads application
       await this.clickAction(this.page.locator(selectors(this.page).homePage.clickLead))
    }
}