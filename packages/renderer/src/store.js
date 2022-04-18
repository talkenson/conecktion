const fs = window.fs;
const path = window.path;
const currentDir = window.currentDir;

console.log(fs, path, currentDir)

class Store {
    constructor(opts) {
        const userDataPath = `${currentDir}/userData`;
        this.path = path.join(userDataPath, opts.configName + '.json');

        this.data = parseDataFile(this.path, opts.defaults);
    }

    get(key) {
        return this.data[key];
    }

    set(key, val) {
        this.data[key] = val;
        fs.writeFileSync(this.path, JSON.stringify(this.data));
    }
}

function parseDataFile(filePath, defaults) {
    try {
        return JSON.parse(fs.readFileSync(filePath));
    } catch(error) {
        return defaults;
    }
}

const store = new Store({
    configName: 'user-preferences',
    defaults: {
        exerciseTimer: 30
    }
});


export default store;