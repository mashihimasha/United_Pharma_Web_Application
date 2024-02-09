import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AskQuestionForm = () => {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission of the question (you can add your logic here)
    console.log('Question submitted:', question);
    // Reset the form after submission
    setQuestion('');
  };

  return (
    <Form onSubmit={handleSubmit} className="m-4 rounded-0">
      <Form.Group controlId="questionForm">
        <Form.Label>Your Answer</Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          placeholder="Type your answer here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
      </Form.Group>

      <Button type="success" className='w-25 p-2  mt-4 justify-content-center d-flex '>
        Submit Answer
      </Button>
    </Form>
  );
};

export default AskQuestionForm;
