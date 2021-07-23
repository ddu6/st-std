const fs=require('fs')
const path=require('path')
fs.writeFileSync(path.join(__dirname,'../css/0.katex.css'),fixURLInCSS(fs.readFileSync(path.join(__dirname,'../node_modules/katex/dist/katex.css'),{encoding:'utf8'}),'https://cdn.jsdelivr.net/npm/katex/dist/'))
function isRelURL(url) {
    return !/^[a-z][a-z0-9+.-]*:/i.test(url);
}
function relURLToAbsURL(url, dir) {
    try {
        return new URL(url, dir).href;
    }
    catch (err) {
        console.log(err);
        return url;
    }
}
function fixURLInCSS(string, dir) {
    return string.replace(/url\(\s*['"]?(.*?)(['"]?)\s*\)/g, (match, url, mark) => {
        if (typeof url !== 'string') {
            return match;
        }
        if (mark === '"' || mark === "'") {
            url = url.replace(/\\(.)/g, '$1');
        }
        if (!isRelURL(url)) {
            return match;
        }
        return `url(${JSON.stringify(relURLToAbsURL(url, dir))})`;
    });
}