const bcrypt = require('bcrypt');



const dataEncrypt = () => {
    const bcrypt = require('bcrypt');
    const saltRounds = 10;
    const pwd = 's0/\/\P4$$w0rD';
    const someOtherPlaintextPassword = 'not_bacon';

    bcrypt.hash(pwd, saltRounds, function(err, hash) {
        // Store hash in your password DB.
        localStorage.setItem("email", pwd )
        localStorage.setItem("password",pwd )
    });


}
