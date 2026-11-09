import { Wrapper } from "../helper/pwWrapper";
import { selectors } from '../Pages/locator_file';
export class SfHome extends Wrapper{
    async viewAppLauncher(){
        // Click the App Launcher
        await this.clickAction(this.page.locator(selectors(this.page).homePage.clickAppLauncher))
        // Click View All Applications
        await this.clickAction(this.page.locator(selectors(this.page).homePage.clickViewAll))
        // Search for Leads application
        // Search for Leads application
        await this.clearAndFill(selectors(this.page).homePage.searchLead, 'Leads')
        // Wait until Leads search result appears
        const leadsApp = this.page.locator(selectors(this.page).homePage.clickLead)
        await leadsApp.waitFor({ state: 'visible', timeout: 15000 })
        // Click Leads
        await this.clickAction(leadsApp)
    }
}