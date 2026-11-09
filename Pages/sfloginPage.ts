import { Wrapper } from "../helper/pwWrapper";
export class SfLogin extends Wrapper{
    async loadSfUrl(url:string){
        await this.loadUrl(url)
    }
}