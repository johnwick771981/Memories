import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({limit : "30mb" , extended: true}));
app.use(bodyParser.urlencoded({limit : "30mb" , extended: true}));
app.use(cors());

app.use('/posts' , postRoutes);

const CONNECTION_URL = 'mongodb+srv://anirudh_025:Anirudh@007@cluster0.csodj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(CONNECTION_URL , { useNewUrlParser : true , useUnifiedTopology : true})
    .then(() => app.listen( process.env.PORT || 3001, () => console.log('Server Running on port : 3001')))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify' , false);

