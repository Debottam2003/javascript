"use strict";
var CustomStatus;
(function (CustomStatus) {
    CustomStatus["received"] = "received";
    CustomStatus["pending"] = "panding";
    CustomStatus["delayed"] = "delayed";
})(CustomStatus || (CustomStatus = {}));
console.log(CustomStatus.received);
