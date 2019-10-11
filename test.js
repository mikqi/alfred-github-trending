import test from 'ava'
import alfyTest from 'alfy-test'
// import trending from 'trending-github';

test(async t => {
  const alfy = alfyTest()
  const result = await alfy('typescript')
  delete result[0].mods
  t.deepEqual(
    [result[0]],
    [
      {
        arg: 'https://github.com/n8n-io/n8n',
        quicklookurl: 'https://github.com/n8n-io/n8n',
        subtitle:
          'Free node based Workflow Automation Tool. Easily automate tasks across different services.',
        text: {
          copy: 'https://github.com/n8n-io/n8n',
          largetype:
            'Free node based Workflow Automation Tool. Easily automate tasks across different services.'
        },
        title: 'n8n-io/n8n'
      }
    ]
  )
})
