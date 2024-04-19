/**
 * Module dependencies
 */

// ...


/**
 * users/signin.js
 *
 * Signin users.
 */
module.exports = async function signin(req, res) {
  var user = await user.findOne({ email:"ram@gmail.com",password:"Ram@123" });
  console.log(user);
  console.log(req.body);

  // sails.log.debug('TODO: implement');
  return res.ok();

};
