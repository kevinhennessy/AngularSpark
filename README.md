# AngularSpark
Demos for Beginners Guide to Angular 2.0 talk at Spark Conference, Charlotte on June 6.  These demos are basically the TypeScript versions of what you can find on http:angular.io with a few tweaks that I made to get them working for me.

For guided setup of Angular 2.0 developer preview and TypeScript 1.5 (which are used in these demos), watch this video from the Angular team https://www.youtube.com/watch?v=HmWm21cCAXM  In this video, the presenter Alex Eagle is using Visual Studio Code.

Here is an alternate set of setup instructions taken from the repository for the Microsoft presentation at NGConf that can be found at https://github.com/Microsoft/ngconfdemo

**install:**
```
npm install tsd
tsd reinstall
tsd rebundle
```

**build:**
```
npm install -g typescript@1.5.0-beta
tsc
```

**run:**
- install http-server package via
 ```
 npm install -g http-server 
 ```
- run server (if port 8080 it taken, pick any port that is free)
 ```
 http-server -p 8080
 ```

**update Visual Studio:**

open a powershell command prompt in the ngconf2015demo folder and run one of the below commands/scripts
- Visual Studio 2013 `vs\VSDevMode.ps1 -vsVersion 12 -tsScript tsc\`
- Visual Studio 2015 CTP `vs\VSDevMode.ps1 -vsVersion 14 -tsScript tsc\`

restart or start visual studio. Under File->Open->Web Site... open the ngconf2015demo folder
