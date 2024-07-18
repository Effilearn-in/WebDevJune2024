const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const users = [
    {
        id: 1,
        username: "surajsahani",
        password: "surajsahani"
    },
    {
        id: 2,
        username: "amitsahani",
        password: "amitsahani"
    }
]

passport.use(new LocalStrategy((username, password, done) => {

    const user = users.find(u => u.username === username);

    if (!user) {
        return done(null, false, { message: 'Incorrect Username' });
    }

    if (user.password !== password) {
        return done(null, false, { message: 'Incorrect Password' });
    }

    return done(null, user);
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser((id, done) => {
    const user = users.find(u => u.id === id);
    done(null, user);
  });

module.exports = passport;