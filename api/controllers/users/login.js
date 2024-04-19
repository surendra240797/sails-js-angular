/**
 * Module dependencies
 */

// ...

/**
 * users/login.js
 *
 * Login users.
 */
module.exports = async function login(req, res) {
  // console.log(req.body)
  var user = await Users.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  // if (req.body.email === 'surendra@gmail.com' && req.body.password === 'Surendra@789') {

  if (user) {
    return res.send({
      status: true,
      data: user,
      message: "Login Successful",
    });
  } else {
    return res.send({
      status: false,
      message: "Email/Password does not match",
    });
  }
};
