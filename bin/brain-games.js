#!/usr/bin/env node

import Welcome from './../src/cli.js'
import ParityCheck from './../src/parityCheck.js'


let usernane = Welcome();
ParityCheck(usernane);

export default usernane;
