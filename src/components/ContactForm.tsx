import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Form as BootstrapForm, Button, Col } from 'react-bootstrap';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().required('Required'),
});

const ContactForm: React.FC = () => (
  <Formik
    initialValues={{ name: '', email: '', message: '' }}
    validationSchema={validationSchema}
    onSubmit={(values, { setSubmitting }) => {
      setSubmitting(false);
      alert(`Form submitted! Name: ${values.name}, Email: ${values.email}`);
    }}
  >
    <BootstrapForm as={Form} name="contact" data-netlify="true" data-netlify-recaptcha="true" className="row g-3">
      <input type="hidden" name="form-name" value="contact" />
      <Col md={6}>
        <BootstrapForm.Group>
          <BootstrapForm.Label>Name</BootstrapForm.Label>
          <Field name="name" className="form-control" />
          <ErrorMessage name="name" component="div" className="text-danger small" />
        </BootstrapForm.Group>
      </Col>
      <Col md={6}>
        <BootstrapForm.Group>
          <BootstrapForm.Label>Email</BootstrapForm.Label>
          <Field name="email" type="email" className="form-control" />
          <ErrorMessage name="email" component="div" className="text-danger small" />
        </BootstrapForm.Group>
      </Col>
      <Col md={12}>
        <BootstrapForm.Group>
          <BootstrapForm.Label>Message</BootstrapForm.Label>
          <Field name="message" as="textarea" className="form-control" rows={4} />
          <ErrorMessage name="message" component="div" className="text-danger small" />
        </BootstrapForm.Group>
      </Col>
      <Col md={12}>
        <div data-netlify-recaptcha="true"></div>
        <Button type="submit" variant="primary-custom">Send</Button>
      </Col>
    </BootstrapForm>
  </Formik>
);

export default ContactForm;