/* @flow */

import { baseOptions } from './options'
import { createCompiler } from 'compiler/index'
 
const { compile, compileToFunctions } = createCompiler(baseOptions) // 可以根据不同平台下的baseOptions生成不同的编译器

export { compile, compileToFunctions }
