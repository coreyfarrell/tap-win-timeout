import {promisify} from 'util';
import {test} from 'tap';

const delay = promisify(setTimeout);

test('test', async t => {
	t.ok(true);
	await delay(10000);
	t.ok(true);
	await delay(10000);
	t.ok(true);
	await delay(10000);
	t.ok(true);
	await delay(10000);
});
