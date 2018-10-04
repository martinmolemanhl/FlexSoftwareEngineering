export class MyHttp {
    getDataFromIMDB(url){
        console.log(">>getDataFromIMDB");
        var prom = new Promise(function(resolve, reject) {
            console.log("getDataFromIMDB::Promise body");

            // create an object to call a REST API
            var xhr = new XMLHttpRequest();

            // set the URL to be opened
            xhr.open('GET', url);

            // set a function that is called when the API call is completed without errors
            xhr.onload = function () {
                resolve(xhr.response);
            };

            // set a function that is called when the API call cannot be completed.
            xhr.onerror = function () {
                reject(xhr.response);
            };

            // do the actual call to the REST API
            xhr.send();

        });
        console.log("<<getDataFromIMDB");
        return prom;
    }//getDataFromIMDB

    ShowDataFromIMDB(url){
        console.log(">>ShowDataFromIMDB");
        var prom = this.getDataFromIMDB(url);

        prom.then(
            strJsonData => {
                console.log("ShowDataFromIMDB::Ready 1: raw JSON data -> JS Object ");
                //console.log(strJsonData);
                var objJson = JSON.parse(strJsonData);
                return objJson;
            },
            reason => console.log("#ERROR : " + reason)
        );
        console.log("<<ShowDataFromIMDB");
        return prom;
    }//ShowDataFromIMDB

}//class MyHttpClass