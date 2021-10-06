import { Directive, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@solana/wallet-adapter-angular";
export class WalletDisconnectButtonDirective {
    constructor(_walletStore) {
        this._walletStore = _walletStore;
    }
    onClick() {
        this._walletStore.disconnect().subscribe();
    }
}
WalletDisconnectButtonDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.9", ngImport: i0, type: WalletDisconnectButtonDirective, deps: [{ token: i1.WalletStore }], target: i0.ɵɵFactoryTarget.Directive });
WalletDisconnectButtonDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.9", type: WalletDisconnectButtonDirective, selector: "button[wallet-disconnect-button]", host: { listeners: { "click": "onClick()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.9", ngImport: i0, type: WalletDisconnectButtonDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'button[wallet-disconnect-button]' }]
        }], ctorParameters: function () { return [{ type: i1.WalletStore }]; }, propDecorators: { onClick: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzY29ubmVjdC1idXR0b24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Rpc2Nvbm5lY3QtYnV0dG9uL2Rpc2Nvbm5lY3QtYnV0dG9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBSXhELE1BQU0sT0FBTywrQkFBK0I7SUFLeEMsWUFBNkIsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7SUFBRyxDQUFDO0lBSm5DLE9BQU87UUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMvQyxDQUFDOzs0SEFIUSwrQkFBK0I7Z0hBQS9CLCtCQUErQjsyRkFBL0IsK0JBQStCO2tCQUQzQyxTQUFTO21CQUFDLEVBQUUsUUFBUSxFQUFFLGtDQUFrQyxFQUFFO2tHQUVoQyxPQUFPO3NCQUE3QixZQUFZO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2FsbGV0U3RvcmUgfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLWFuZ3VsYXInO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdidXR0b25bd2FsbGV0LWRpc2Nvbm5lY3QtYnV0dG9uXScgfSlcbmV4cG9ydCBjbGFzcyBXYWxsZXREaXNjb25uZWN0QnV0dG9uRGlyZWN0aXZlIHtcbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycpIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3dhbGxldFN0b3JlLmRpc2Nvbm5lY3QoKS5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF93YWxsZXRTdG9yZTogV2FsbGV0U3RvcmUpIHt9XG59XG4iXX0=