import test from 'ava'
import alfyTest from 'alfy-test'
// import trending from 'trending-github';

test(async t => {
  const alfy = alfyTest()
  const result = await alfy('Rainbow')
  delete result[0].mods
  t.deepEqual(
    [result[11]],
    [
      {
        title: 'tensorflow/tensorflow',
        subtitle:
          'Computation using data flow graphs for scalable machine learning',
        quicklookurl: 'https://github.com/tensorflow/tensorflow',
        arg: 'https://github.com/tensorflow/tensorflow',
        text: {
          copy: 'https://github.com/tensorflow/tensorflow',
          largetype:
            'Computation using data flow graphs for scalable machine learning'
        },
        mods: {
          alt: {
            subtitle: 'Language: C++, stars: 75213, fork: 37143'
          }
        }
      }
    ]
  )
})
