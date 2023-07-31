import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { marked }  from 'marked';
import './App.css';

function App() {
  const [value, setValue] = useState("# Your Markdown text goes here");
  const html = marked(value, { breaks: true });

  return (
    <div className="App">
      <Container>
        <h3 className='text-center p-3 text-capitalize'>markdown previewer</h3>

        <Row>
          <Col>
            <Form.Group>
              <Form.Label className='fs-5'>Editor</Form.Label>
              <Form.Control
                id="editor"
                as="textarea"
                placeholder="Enter Your Markdown text here."
                style={{ height: '80vh' }}
                onChange={(e) => setValue(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col>
            <div className='fs-5 pb-2'>Preview</div>
            <div
              id="preview"
              className='p-3 bg-white rounded border overflow-auto'
              dangerouslySetInnerHTML={{ __html: html }}
              style={{ height: '80vh' }}
            >
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
