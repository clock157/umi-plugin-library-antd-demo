const ghpages = require('gh-pages');

console.log(ghpages);

ghpages.publish('.docz/dist/', {
    repo: 'https://github.com/umijs/umi-plugin-library-demo'
}, () => {
  // tslint:disable-next-line
  console.log('publish done');
});