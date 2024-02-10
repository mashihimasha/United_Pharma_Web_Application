const express = require("express");
const cors = require("cors");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const { Sequelize, DataTypes } = require("sequelize");
const app = express();

// Sequelize setup
const sequelize = new Sequelize("united_pharma_web_app_test", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

// Define a User model
const User = sequelize.define('User', {
id: {
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true,
  allowNull: false,
},
email: {
  type: DataTypes.STRING,
  allowNull: false,
  unique: true,
},
password: {
  type: DataTypes.STRING,
  allowNull: false,
},
userRole: {
  type: DataTypes.STRING,
  allowNull: false,
},
});
  
// Middleware
app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
  (email, password, done) => {

    User.findOne({ where: { email: email } })
      .then((user) => {
        console.log('User:', user); // Check if the user is found

        if (!user) {
          console.error('No user found');
          return done(null, false, { message: "No User Exists" });
        }

        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) {
            console.error('Error during password comparison:', err);
            return done(err);
          }

          if (isMatch) {
            return done(null, user);
          } else {
            console.error('Incorrect Password');
            return done(null, false, { message: "Incorrect Password" });
          }
        });
      })
      .catch((error) => {
        console.error('Error in database query:', error);
        return done(error);
      });
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findByPk(id).then((user) => {
    done(null, user);
  });
});

// Routes
app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error('Error during authentication:', err);
      throw err;
    }
    if (!user) {
      console.error('No user found:', info.message);
      res.send(info.message);
    } else {
      req.logIn(user, (err) => {
        if (err) {
          console.error('Error during login:', err);
          throw err;
        }
        res.send('Successfully Authenticated');
        console.log('Authenticated User:', req.user);
      });
    }
  })(req, res, next);
});

//register
app.post("/register", (req, res) => {
  const { email, password,userRole } = req.body;
  if(req.body !== ""){
    User.findOne({ where: { email: email } }).then((user) => {
      if (user) {
        res.send("User Already Exists");
      } else {
        bcrypt.hash(password, 10, (err, hashedPassword) => {
          if (err) {
            throw err;
          }
          User.create({
            email: email,
            password: hashedPassword,
            userRole: userRole,
          }).then(() => {
            res.send("User Created");
          });
        });
      }
    });
  }
}
);

app.get("/user", (req, res) => {
  res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});

  
// Sync the models with the database and start the server
sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server Has Started");
  });
});
