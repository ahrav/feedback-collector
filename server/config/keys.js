if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}

// mongodb+srv://ahrav:V7XSMNpRkarQM1jA@cluster0-8krrb.mongodb.net/feedback-collector-prod?retryWrites=true&w=majority
// "client_id":"964137436532-tr5l0kbem4j7oinr241ccrmtbq1dd0hh.apps.googleusercontent.com"
// "client_secret":"bA3m142r0nJ5CzZWn1ghzsgs"
