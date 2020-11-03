import React from 'react';
import { useFormik } from 'formik';
import { Container, Row, Form,  Button,Col } from 'react-bootstrap';

function IsseForm(props){
    const warningstyle = { color: 'red' };
    const validate = values => {
        
        const errors = {}

        if (!values.summery) {
            errors.summery = 'Required'
        }
        if (!values.expected) {
            errors.expected = 'Required'
        }
        if (!values.result) {
            errors.result = 'Required'
        }

        return errors;

    }
    const formik = useFormik({
        initialValues: {
            project: '', //Import project value from project card
            summery: '',
            result: '',
            expected: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },

    });

    const projectlist =['Select project','val1','val2','val3'];
    return (
        <div>
            <Container>
                <Row>
                    <Form onSubmit={formik.handleSubmit}>

                        
                        {/* summery of the bug */}
                        <Form.Group>
                            <Form.Label>Summary</Form.Label>
                            <Form.Control type="text" placeholder="Summery of the bug" name="summery" onChange={formik.handleChange} onBlur={formik.handleBlur}
                                value={formik.values.summery}></Form.Control>
                            {formik.errors.summery && formik.touched.summery ? <Form.Text style={warningstyle}>{formik.errors.summery}</Form.Text> : null}
                        </Form.Group>
                        {/* Resulting output */}
                        <Form.Group>
                            <Form.Label>Expected Result</Form.Label>
                            <Form.Control type="text" name="result" onChange={formik.handleChange} onBlur={formik.handleBlur}
                                value={formik.values.result}></Form.Control>
                            {formik.errors.result && formik.touched.result ? <Form.Text style={warningstyle}>{formik.errors.result}</Form.Text> : null}
                        </Form.Group>
                        {/* Expected output */}
                        <Form.Group>
                            <Form.Label>Expected Result</Form.Label>
                            <Form.Control type="text" name="expected" onChange={formik.handleChange} onBlur={formik.handleBlur}
                                value={formik.values.expected}></Form.Control>
                            {formik.errors.expected && formik.touched.expected ? <Form.Text style={warningstyle}>{formik.errors.expected}</Form.Text> : null}
                        </Form.Group>
                    
                        <Button type='submit'  >Add issue</Button>
                        <Button type='button'  onClick={props.cl} >Close</Button>
                       
                      
                        
                        
                    </Form>


                </Row>

            </Container>

        </div>
    )
}
export default IsseForm;