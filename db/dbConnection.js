const mongoose = require('mongoose');

const dbConnection = () => {
	mongoose
		.connect(
			`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.7j9b4.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		)
		.then(() => console.log('DB Connected'))
		.catch((err) => console.log(err));
};

module.exports = { dbConnection };
