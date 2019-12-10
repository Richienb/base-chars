import { bases } from "basea"

/**
 * The characters for use in numerical bases.
 * @example
 * ```
 * const baseChars = require("base-chars");
 *
 * baseChars[10];
 * //=> '0123456789'
 *
 * baseChars[16]
 * //=> '0123456789abcdef'
 * ```
*/
declare const baseChars: typeof bases;

export = baseChars;
