import test from 'ava';
import alfyTest from 'alfy-test';
// import trending from 'trending-github';

test(async t => {
  const alfy = alfyTest();
  const result = await alfy('Rainbow');
  delete result[0].mods;
  t.deepEqual([result[0]], [
    {
      title: 'yandex/gixy',
      subtitle: 'Nginx configuration static analyzer',
      quicklookurl: 'https://github.com/yandex/gixy',
      arg: 'https://github.com/yandex/gixy'
    }
  ]);
});

