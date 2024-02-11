import { Router } from "express";
import mysql  from 'mysql2';
import { configDotenv } from "dotenv";

configDotenv();
const app = Router();


const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PW,
    database: process.env.DB
  });
   
  connection.connect((error) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Connected to the database');
    }
  });

//GET method(REST API/HTTP method)--> Server side
app.get('/blogs', (request, response) => {
    connection.query('SELECT * FROM posts', (error, data) => {
      if (error) {
        console.error(error);
        response.status(500).send('Error retrieving blog');
      } else {
        //get all data from db
        response.send(data);
      }
    });
  });

  app.get('/blog/:id', (request, response) => {
    const { id } = request.params;
    connection.query('SELECT * from posts WHERE post_id = ? ',[id], (err, data) => {
      if(!err)
        //get data of the post from database
        response.send(data);
      else
      console.log(err)
    })
  })
  
  //POST METHOD(CREATE)
  //Create BLOG POST
  app.post('/blog', (request, response) => {
    const { title, content,imageUrl } = request.body;
    connection.query('INSERT INTO posts (title, content, imageUrl ) VALUES (?, ?, ?)', [title, content, imageUrl], (error) => {
      if (error) {
        console.error(error);
        response.status(500).send('Error creating blog');
      } else {
        response.send('Blog created successfully');
      }
    });
  });
  
  //UPDATE 
  //UPDATE A POST WHERE ID WAS GIVEN
  app.put('/blog/:post_id', (request, response) => {
    const { post_id } = request.params;
    const { title, content, imageUrl } = request.body;
    connection.query('UPDATE posts SET title = ?, content = ?, imageUrl = ? WHERE post_id = ?', [title, content, imageUrl, post_id], (error) => {
      if (error) {
        console.error(error);
        response.status(500).send('Error updating blog');
      } else {
        response.send('Blog updated successfully');
      }
    });
  });
  
   //DELETE 
   //TO DELETE A POST
  app.delete('/blog/:post_id', (request, response) => {
    const { post_id } = request.params;
    connection.query('DELETE FROM posts WHERE post_id = ?', [post_id], (error) => {
      if (error) {
        console.error(error);
        response.status(500).send('Error deleting blog');
      } else {
        response.send('Blog deleted successfully');
      }
    });
  });


  


// app.post('/api/blog', async (req, res) => {
//   const { title, contents, imageUrl } = req.body;

//   try {
//     const [result] = connection.execute(
//       'INSERT INTO blog (title, contents, imageUrl) VALUES (?, ?, ?)',
//       [title, contents, imageUrl]
//     );

//     const createdBlogId = result.insertId;

   
//     const [createdBlog] = connection.execute('SELECT * FROM blog WHERE id = ?', [createdBlogId]);

//     res.status(201).json(createdBlog);
//   } catch (error) {
//     console.error('Error creating blog:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

//READ
//GET ALL THE DETAILS 
app.get('/api/blogs', (req, res) => {
  
  connection.query('SELECT * FROM posts', (error, results) => {
    if (error) {
      console.error('Error fetching blogs:', error);
      res.status(500).json({ error: 'Error fetching blogs' });
    } else {
      const mappedData = results.map(blog => ({
        id: blog.id,
        title: blog.title,
        content: blog.contents, 
        image: blog.imageUrl, 
      }));

   
      res.status(200).json(mappedData);
    }
  });
});




  export default app;