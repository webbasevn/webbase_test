const webPush = require('web-push')

webPush.setVapidDetails(
  `mailto:appwebbase@gmail.com`,
  'BEqre-Rv3wGxZ_HPcf_JV7R8aKrm7u8TeA0IYvvHiJWntEoifklNaI88gZ95bpmmbvqrYlvKTUOz3phF4DNikW4',
  '4oanpngxUcCCndi549KfCls2uUqJZc9RISYb1ca2vdc'
)

const Notification = (req, res) => {
  if (req.method == 'POST') {
    const { subscription } = req.body

    webPush
      .sendNotification(
        subscription,
        JSON.stringify({ title: 'Hello Web Push', message: 'Your web push notification is here!' })
      )
      .then(response => {
        res.writeHead(response.statusCode, response.headers).end(response.body)
      })
      .catch(err => {
        if ('statusCode' in err) {
          res.writeHead(err.statusCode, err.headers).end(err.body)
        } else {
          console.error(err)
          res.statusCode = 500
          res.end()
        }
      })
  } else {
    res.statusCode = 405
    res.end()
  }
}

export default Notification