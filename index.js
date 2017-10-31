'use strict'
const alfy = require('alfy')
const alfredNotifier = require('alfred-notifier')
const trending = require('trending-github')

let [language, period] = alfy.input.split(' ')
if (!period) {
  period = 'daily'
}

alfredNotifier()

if (alfy.cache.get('repos')) {
  alfy.output(alfy.cache.get('repos'))
} else {
  trending(period, language).then(repos => {
    const output = repos.map(repo => ({
      title: `${repo.author}/${repo.name}`,
      subtitle: repo.description,
      arg: repo.href,
      mods: {
        alt: {
          subtitle: `Language: ${repo.language}, stars: ${repo.stars}, fork: ${repo.forks}`
        }
      },
      quicklookurl: repo.href
    }))

    alfy.cache.set('repos', output, {
      maxAge: 600000
    })

    alfy.output(output)
  })
}
