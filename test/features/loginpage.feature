Feature: Bukalapak Login

Background: Open Bukalapak home page
Given a web browser is in Bukalapak homepage
When user click login button in homepage

# POSITIVE SCHENARIO
@id:1
Scenario: User View BL Login Page
Then user redirect to url 'https://accounts.bukalapak.com/login'
And user view login page

@id:2
Scenario: User Login Successfully
When user input email 'bldewiaprilia@gmail.com'
And user click lanjut button
And user input password 'Agustus@21'
And user click login button
Then user login success
And user redirect to url 'https://www.bukalapak.com/?flash=you_login'

# NEGATIVE SCHENARIO
@id:1
Scenario: User Login with Wrong Email
When user input email 'bldewiaprilia.com'
And user click lanjut button
Then user view error message

@id:2
Scenario: User Login with Wrong Password
When user input email 'bldewiaprilia@gmail.com'
And user click lanjut button
And user input password 'wrongpassword'
And user click login button
Then user view error message


