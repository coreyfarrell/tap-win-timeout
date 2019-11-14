import {promisify} from 'util';
import {test} from 'tap';

import fn1 from '../lib/file1.js';
import fn2 from '../lib/file2.js';

test('test', async t => {
	t.ok(fn1());
	t.ok(fn2());
});
