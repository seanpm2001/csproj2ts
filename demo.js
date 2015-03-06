﻿var csproj2ts = require('./csproj2ts');

var vsProjInfo = {
    ProjectFileName: "csproj2ts.csproj", //You can set this to your project file name.
    ActiveConfiguration: "Debug"
}

csproj2ts.getTypeScriptSettings(vsProjInfo).then(function (settings) {
    console.log(settings);
}).catch(function (error) {
    console.log(error);
});