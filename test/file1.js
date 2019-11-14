import {test} from 'tap';

import fn from '../lib/file1.js';

test('test', async t => {
	t.ok(fn());
});
