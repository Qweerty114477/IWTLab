import simpleEs ,{simpleEs2}from "./EsmoduleSec.mjs";
simpleEs(); 
simpleEs2();
import {simpleEs2 as simpleEs} from "./EsmoduleSec.mjs";
simpleEs();
import * as a2 from "./EsmoduleSec.mjs";
console.log(a2);
console.log(a2.simpleEs2());