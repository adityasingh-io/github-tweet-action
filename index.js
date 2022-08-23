const { TwitterApi } = require('twitter-api-v2');

const userClient = new TwitterApi({
  appKey: 'yZ4Ng6fXct7JmkQcqh1kpAuJH',
  appSecret: 'DfsvU5esSIQpmPQDo9it9eGue01duCb6Sej4M3GKDJpyDbka73',
  accessToken: '1295073008344797184-5i13Vsdlt22YF9CovebPW6AGVcbaWV',
  accessSecret: 'gbDm1yO3k9Pub7rTEqHRW5uptk9vSLiJkLFIj6XKoTsGg',
});

const rwClient = userClient.readWrite

const twitterFunctions = async () => {
  const createdTweet = await rwClient.v1.tweet('twitter-api-v2 is awesome!', {
    lat: 1.23,
    long: -13.392,
  });
  console.log('Tweet', createdTweet.id_str, ':', createdTweet.full_text);
}

twitterFunctions()
