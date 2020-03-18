"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("../enums");
/*
@Injectable({
  providedIn: 'root'
})*/
var DisadvantagePickerService = /** @class */ (function () {
    function DisadvantagePickerService() {
        this.byLvl = /-\d+\/lvl/;
        this.constPrice = /^-\d+/;
        this.resistable = /^-\d+\*$/;
    }
    DisadvantagePickerService.prototype.getDisadvantageCostType = function (adv) {
        if (this.byLvl.test(adv.formula))
            return enums_1.AdvantageCostType.value;
        if (this.resistable.test(adv.formula))
            return enums_1.AdvantageCostType.resistable;
        if (this.constPrice.test(adv.formula))
            return enums_1.AdvantageCostType.check;
        return enums_1.AdvantageCostType.value;
    };
    DisadvantagePickerService.prototype.getDisadvantageCost = function (adv) {
        if (adv.formula.match(this.constPrice))
            return +adv.formula.match(this.constPrice)[0];
        return 0;
    };
    return DisadvantagePickerService;
}());
exports.DisadvantagePickerService = DisadvantagePickerService;
//# sourceMappingURL=DisadvantagePickerService.js.map