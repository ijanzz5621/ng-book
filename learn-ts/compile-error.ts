function hello(name: string): string {
    return "12";
}

class Report{
    data: Array<string>;

    constructor(data: Array<string>){
        this.data = data;
    }

    run() {
        // this.data.forEach(function(line){
        //     console.log(line);
        // });
        this.data.forEach((line) => console.log(line));
    }
}

class TabbedReport extends Report {
    headers: Array<string>;

    constructor(headers: string[], values: string[]) {
        super(values);
        this.headers = headers;
    }

    run(){
        console.log(this.headers);
        super.run();
    }
}

// var r: Report = new Report(['Azian', 'Majid']);
// r.run();

var headers: string[] = ['Name'];
var data: string[] = ['Sharizan', 'Azian', 'Irfan'];

var r: TabbedReport = new TabbedReport(headers, data);
r.run();

