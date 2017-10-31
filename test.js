import test from 'ava'
import alfyTest from 'alfy-test'
// import trending from 'trending-github';

test(async t => {
  const alfy = alfyTest()
  const result = await alfy('Rainbow')
  delete result[0].mods
  t.deepEqual([result[0]], [
    {
      title: 'Alimei/hangzhouYunQi2017ppt',
      subtitle: null,
      quicklookurl: 'https://github.com/Alimei/hangzhouYunQi2017ppt',
      arg: 'https://github.com/Alimei/hangzhouYunQi2017ppt'
    }
  ])
})
