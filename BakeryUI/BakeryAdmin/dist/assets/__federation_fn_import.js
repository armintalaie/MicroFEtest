import { _ as __vitePreload } from './preload-helper-8dea4d1a.js';

const moduleMap= {'react':{get:()=>()=>__federation_import('./__federation_shared_react.js'),import:true}};
      const moduleCache = Object.create(null);
      async function importShared(name,shareScope = 'default') {
        return moduleCache[name] ? new Promise((r) => r(moduleCache[name])) : (await getSharedFromRuntime(name, shareScope) || getSharedFromLocal(name));
      }
      async function __federation_import(name){
        return __vitePreload(() => import(name),true?[]:void 0);
      }
      async function getSharedFromRuntime(name,shareScope) {
        let module = null;
        if (globalThis?.__federation_shared__?.[shareScope]?.[name]) {
          const versionObj = globalThis.__federation_shared__[shareScope][name];
          const versionKey = Object.keys(versionObj)[0];
          const versionValue = Object.values(versionObj)[0];
          if (moduleMap[name]?.requiredVersion) {
            // judge version satisfy
            const semver= await __vitePreload(() => import('./__federation_lib_semver.js'),true?[]:void 0);
            const fn = semver.satisfy;
            if (fn(versionKey, moduleMap[name].requiredVersion)) {
               module = (await versionValue.get())();
            } else {
              console.log(`provider support ${name}(${versionKey}) is not satisfied requiredVersion(${moduleMap[name].requiredVersion})`);
            }
          } else {
            module = (await versionValue.get())();
          }
        }
        if(module){
          moduleCache[name] = module;
          return module;
        }
      }
      async function getSharedFromLocal(name , shareScope) {
        if (moduleMap[name]?.import) {
          const module = (await moduleMap[name].get())();
          moduleCache[name] = module;
          return module;
        } else {
          console.error(`consumer config import=false,so cant use callback shared module`);
        }
      }

export { importShared, getSharedFromLocal as importSharedLocal, getSharedFromRuntime as importSharedRuntime };
