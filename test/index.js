require('babel-register')

import {
  test
} from 'tape'

import {
  transform,
} from 'babel-core'


const log = console.log.bind({})

const plugin_path = require.resolve('../src')

const parse = (code) =>
	transform(code, {
		plugins: [plugin_path]
	})


const t = ([description, _in, _out]) =>
  test(description, ({deepEquals, end}) => {
    const a = parse(_in)
    const b = parse(_out)

    deepEquals(a.code,b.code)

    end()
  })

const cases = [
  [ `number assignment to constant declaration`,
    `a=4`,
    `const a=4` ],
  [ `string assignment to constant declaration`,
    `a="what"`,
    `const a="what"` ],
  [ `expression assignment to constant declaration`,
    `a=1+3`,
    `const a=1+3` ],
  [ `function assignment to constant declaration`,
    `a = () => 1`,
    `const a = () => 1` ],
]

cases.map(t)
