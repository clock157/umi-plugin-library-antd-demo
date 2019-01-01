const ghpages = require('gh-pages');

console.log(ghpages);

ghpages.publish('.docz/dist/', () => {
  // tslint:disable-next-line
  console.log('publish done');
});