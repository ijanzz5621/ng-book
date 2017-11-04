var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function hello(name) {
    return "12";
}
var Report = /** @class */ (function () {
    function Report(data) {
        this.data = data;
    }
    Report.prototype.run = function () {
        // this.data.forEach(function(line){
        //     console.log(line);
        // });
        this.data.forEach(function (line) { return console.log(line); });
    };
    return Report;
}());
var TabbedReport = /** @class */ (function (_super) {
    __extends(TabbedReport, _super);
    function TabbedReport(headers, values) {
        var _this = _super.call(this, values) || this;
        _this.headers = headers;
        return _this;
    }
    TabbedReport.prototype.run = function () {
        console.log(this.headers);
        _super.prototype.run.call(this);
    };
    return TabbedReport;
}(Report));
// var r: Report = new Report(['Azian', 'Majid']);
// r.run();
var headers = ['Name'];
var data = ['Sharizan', 'Azian', 'Irfan'];
var r = new TabbedReport(headers, data);
r.run();
