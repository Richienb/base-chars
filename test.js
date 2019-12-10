import test from "ava"
import is from "@sindresorhus/is"
import baseChars from "."

test("main", (t) => {
    t.true(is.plainObject(baseChars))
    t.true(is.string(baseChars[10]))
})
