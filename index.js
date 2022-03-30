const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const config = require('./config/key');

const { User } = require('./models/User');

//app/x-www-form-urlencoded 형식을 분석해서 가져온다.
app.use(bodyParser.urlencoded({extended: true}));

//app/json 형식을 분석해서 가져온다.
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI)
	.then(()=> console.log('MongoDB Connected...'))
  	.catch((err) => console.log('err'))

app.get('/', (req, res) => {
<<<<<<< HEAD
  res.send('Hello World! mac to win test')
=======
  res.send('Hello World! mac test')
>>>>>>> 65b6f97997097ee8d7faa549fa344a85ee6da624
})

app.post('/register', (req, res)=>{
	//회원 가입할때 필요한 정보들을 client에서 가져오면
	//그것들을 데이터 베이스에 넣어준다.

	const user = new User(req.body);

	user.save((err, userInfo)=>{
		if (err) return res.json({success: false, err})
		return res.status(200).json({
			success: true
		})
	})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})