"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("../enums");
/*
@Injectable({
  providedIn: 'root'
})*/
var AdvantagePickerService = /** @class */ (function () {
    function AdvantagePickerService() {
        this.byLvl = /\d+\/lvl/;
        this.constPrice = /^\d+/;
        this.resistable = /^\d+\*$/;
    }
    AdvantagePickerService.prototype.getAdvantageCostType = function (adv) {
        if (this.byLvl.test(adv.formula))
            return enums_1.AdvantageCostType.value;
        if (this.resistable.test(adv.formula))
            return enums_1.AdvantageCostType.resistable;
        if (this.constPrice.test(adv.formula))
            return enums_1.AdvantageCostType.check;
        return enums_1.AdvantageCostType.value;
    };
    AdvantagePickerService.prototype.getAdvantageCost = function (adv) {
        if (adv.formula.match(this.constPrice))
            return +adv.formula.match(this.constPrice)[0];
        return 0;
    };
    return AdvantagePickerService;
}());
exports.AdvantagePickerService = AdvantagePickerService;
//# sourceMappingURL=AdvantagePickerService.js.map