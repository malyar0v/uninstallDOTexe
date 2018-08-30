const request = require('request');

function getToken() {

  const options = {
    method: 'POST',
    url: 'https://id.twitch.tv/oauth2/token',
    qs: {
      grant_type: 'refresh_token',
      refresh_token: 'vmaufy1eh8bhrg0t7por4esjznhimzjuwywby3431gdajilllb',
      client_id: 'n7v6fl7mbux4l6zb1r16xl9vfq6bcq',
      client_secret: 'zab0zck438ze704r0narpst4qjhhsx'
    }
  };

  request(options, (err, response, body) => {

    request({
      method: 'GET',
      url: 'https://api.twitch.tv/helix/users',
      qs: {
        login: 'highdistortion'
      },
      headers: {
        Authorization: `Bearer ${JSON.parse(body)["access_token"]}`
      }
    }, (err, resp, b) => {
      console.log(JSON.parse(b)['data'][0]['id']);
    })

  })
}

getToken();