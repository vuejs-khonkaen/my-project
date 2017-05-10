// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer + '/shopping')
      .waitForElementVisible('#app', 5000)
      .click('button#p_1')
      .assert.containsText('#sum-price', '20000')
      .pause(1000)
      .click('button#p_1')
      .assert.containsText('#sum-price', '40000')
      .pause(1000)
      .click('button#p_2')
      .assert.containsText('#sum-price', '70000')
      .pause(1000)
      .click('button#p_1')
      .assert.containsText('#sum-price', '90000')
      .pause(1000)
      .click('button#p_2')
      .assert.containsText('#sum-price', '120000')
      .pause(1000)
      .end()
  }
}
