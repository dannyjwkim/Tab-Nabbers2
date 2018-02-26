


// OAuth2

// Github

// Endpoints
    // 1- authorize = https://accounts.google.com/o/oauth2/v2/auth
        // Params
            // client_id = 331517669142-36per55su6oftkriuaipe3k9d7e2mj4d.apps.googleusercontent.com
            // scope = https://www.googleapis.com/auth/calendar
            // redirect_uri = http://localhost:3000/googlecalendar/authorize
            // state = youreawesome
    // 2- token = https://www.googleapis.com/oauth2/v4/token
        // Params
            // code = 7f7ae71d446144ba6bae
            // client_id = be6bdf039890ab8c1f6d
            // client_secret = vzVCbbkNfpgIvsf1GRAVL9Oe
            // redirect_uri = http://localhost:3000/googlecalendar/authorize



// Authorize
    // Github:  https://github.com/login/oauth/authorize?client_id=be6bdf039890ab8c1f6d&scope=repo&redirect_uri=http://localhost:3000&state=youreawesome
    // Google: https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/calendar&client_id=331517669142-36per55su6oftkriuaipe3k9d7e2mj4d.apps.googleusercontent.com&redirect_uri=http://localhost:3000/googlecalendar/authorize&&access_type=offline&response_type=code

    // Google Token: https://www.googleapis.com/oauth2/v4/token?