module.exports = {
    'New Login Test': function (client) {
        client
            .url('http://localhost:8888/login')
            .waitForElementVisible('input[name=user_name]')
            .setValue('input[name=user_name]', '')
            //..waitForElementVisible('input[name=user_name]', 1000)
            .click('input[type=submit]')
            .assert.containsText('#errormessage', 'User name or password is not correct.')
            .end();

    },

    'Verifying TAB functionality': function (client) {
        client
            .url('http://localhost:8888/register')
            .waitForElementVisible('input[name=user_name]', 2000)
            .click('input[name=user_name]')
            .keys(client.Keys.TAB)
            .pause(2000)
            .assert.elementPresent('input[name=password]:focus')
            .end()
    },

    'Verifying login functionality with valid credentials': function (client) {
        client
            .url('http://localhost:8888/login')
            .waitForElementVisible('input[name=user_name]', 2000)
            .setValue('input[name=user_name]', 'jerry')
            .waitForElementVisible('input[name=password]', 2000)
            .setValue('input[name=password]', 'dev2qa.com')
            .click('input[type=submit]')
            .assert.containsText('font', 'User name and password is correct, login success.')
            .end()
    },

    'Verifying the place holders for username and password': function (client) {
        client
            .url('http://localhost:8888/login')
            .waitForElementVisible('input[name=user_name]', 2000)
            .click('input[name=user_name]')
            .assert.elementPresent('input[name=user_name]:focus')
            .waitForElementVisible('input[name=password]', 2000)
            .click('input[name=password]')
            .assert.elementPresent('input[name=password]:focus')
            .end()
    },
    'Verifying the simulation of backward button after login': function (client) {
        client
            .url('http://localhost:8888/login')
            .waitForElementVisible('input[name=user_name]', 2000)
            .setValue('input[name=user_name]', 'jerry')
            .waitForElementVisible('input[name=password]', 2000)
            .setValue('input[name=password]', 'dev2qa.com')
            .click('input[type=submit]')



    },

};