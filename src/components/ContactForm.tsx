import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Form as BootstrapForm, Button, Col, Alert, Spinner } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { AdvancedSecurity } from '../../utils/security';

interface FormData {
  name: string;
  email: string;
  message: string;
  _gotcha: string;
  _timestamp: string;
}

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'rate_limited'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [userFingerprint, setUserFingerprint] = useState<string>('');
  const [isProduction, setIsProduction] = useState(false);

  useEffect(() => {
    setUserFingerprint(AdvancedSecurity.generateFingerprint());
    // Check if we're in production (Netlify) or development (localhost)
    setIsProduction(window.location.hostname !== 'localhost' && !window.location.hostname.includes('127.0.0.1'));
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Name is required')
      .min(2, 'Name must be at least 2 characters')
      .max(50, 'Name must be less than 50 characters')
      .matches(/^[a-zA-Z\s\-']+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
    email: Yup.string()
      .required('Email is required')
      .email('Please enter a valid email address')
      .test('email-validation', 'Please use a valid email address', (value) => {
        const validation = AdvancedSecurity.validateEmail(value || '');
        return validation.isValid;
      }),
    message: Yup.string()
      .required('Message is required')
      .min(10, 'Message must be at least 10 characters')
      .max(1000, 'Message must be less than 1000 characters')
      .test('no-malicious-content', 'Message contains suspicious content', (value) => {
        if (!value) return true;
        return !AdvancedSecurity.hasXSSAttempt(value);
      }),
    _gotcha: Yup.string().max(0, 'Invalid submission'),
    _timestamp: Yup.string().required('Timestamp is required')
  });

  const performSecurityChecks = (): boolean => {
    if (AdvancedSecurity.isBlacklisted(userFingerprint)) {
      setErrorMessage('Unable to process your request at this time.');
      setSubmitStatus('error');
      return false;
    }

    if (!AdvancedSecurity.checkRateLimit(userFingerprint)) {
      setSubmitStatus('rate_limited');
      return false;
    }

    return true;
  };

  const handleSubmit = async (values: FormData, { resetForm }: any) => {
    if (values._gotcha || !values._timestamp) {
      setErrorMessage('Invalid form submission. Please refresh the page.');
      setSubmitStatus('error');
      return;
    }

    const formTime = parseInt(values._timestamp);
    const currentTime = Date.now();
    if (currentTime - formTime > 3600000) {
      setErrorMessage('Form session expired. Please refresh the page.');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const securityPassed = performSecurityChecks();
      if (!securityPassed) {
        setIsSubmitting(false);
        return;
      }

      // Use the correct URL based on environment
      const submitUrl = isProduction ? '/' : 'https://your-portfolio-name.netlify.app/';
      
      const formData = new FormData();
      formData.append('form-name', 'contact');
      formData.append('name', AdvancedSecurity.sanitizeInput(values.name, 50));
      formData.append('email', AdvancedSecurity.sanitizeInput(values.email, 100));
      formData.append('message', AdvancedSecurity.sanitizeInput(values.message, 1000));
      formData.append('_fingerprint', userFingerprint);
      formData.append('_timestamp', values._timestamp);

      console.log('Submitting to:', submitUrl);
      console.log('Form data:', Object.fromEntries(formData));

      const response = await fetch(submitUrl, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        resetForm();
        (document.querySelector('[name="_timestamp"]') as HTMLInputElement).value = Date.now().toString();
      } else {
        console.error('Form submission failed with status:', response.status);
        if (isProduction) {
          setErrorMessage('Form submission failed. Please try again or contact me directly at musasachristopher2@gmail.com');
        } else {
          setErrorMessage('Form only works when deployed to Netlify. It will work when you deploy your site.');
        }
        setSubmitStatus('error');
      }

    } catch (error) {
      console.error('Form submission error:', error);
      if (isProduction) {
        setErrorMessage('Connection error. Please try again or email me directly at musasachristopher2@gmail.com');
      } else {
        setErrorMessage('Form only works on Netlify deployment. Test it after deploying.');
      }
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      {!isProduction && (
        <Alert variant="info" className="mb-4">
          <strong>🛠️ Development Mode</strong><br />
          The contact form only works when deployed to Netlify. It will function properly after deployment.
        </Alert>
      )}

      {submitStatus === 'success' && (
        <Alert variant="success" className="mb-4">
          <strong>✅ Message Sent!</strong><br />
          Thank you for your message. I'll get back to you within 24 hours.
        </Alert>
      )}
      
      {submitStatus === 'error' && (
        <Alert variant="danger" className="mb-4">
          <strong>❌ Unable to Send</strong><br />
          {errorMessage}
        </Alert>
      )}

      {submitStatus === 'rate_limited' && (
        <Alert variant="warning" className="mb-4">
          <strong>⚠️ Please Wait</strong><br />
          You've sent several messages recently. Please wait 15 minutes before trying again.
        </Alert>
      )}

      {/* Hidden HTML form for Netlify bots */}
      <form name="contact" netlify-honeypot="bot-field" style={{ display: 'none' }}>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>

      <Formik
        initialValues={{ 
          name: '', 
          email: '', 
          message: '', 
          _gotcha: '',
          _timestamp: Date.now().toString()
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <BootstrapForm as={Form} className="row g-3">
            <input type="hidden" name="form-name" value="contact" />
            
            <div style={{ display: 'none' }}>
              <Field name="_gotcha" type="text" tabIndex={-1} />
              <Field name="_timestamp" type="hidden" />
              {/* Netlify bot field */}
              <input type="text" name="bot-field" />
            </div>

            <Col md={6}>
              <BootstrapForm.Group>
                <BootstrapForm.Label>Full Name *</BootstrapForm.Label>
                <Field 
                  name="name" 
                  type="text" 
                  className="form-control" 
                  maxLength={50}
                  placeholder="Enter your full name"
                  disabled={isSubmitting}
                />
                <ErrorMessage name="name" component="div" className="text-danger small mt-1" />
              </BootstrapForm.Group>
            </Col>
            
            <Col md={6}>
              <BootstrapForm.Group>
                <BootstrapForm.Label>Email Address *</BootstrapForm.Label>
                <Field 
                  name="email" 
                  type="email" 
                  className="form-control" 
                  maxLength={100}
                  placeholder="your.email@example.com"
                  disabled={isSubmitting}
                />
                <ErrorMessage name="email" component="div" className="text-danger small mt-1" />
              </BootstrapForm.Group>
            </Col>
            
            <Col md={12}>
              <BootstrapForm.Group>
                <BootstrapForm.Label>Message *</BootstrapForm.Label>
                <Field 
                  name="message" 
                  as="textarea" 
                  className="form-control" 
                  rows={5}
                  maxLength={1000}
                  placeholder="Please describe your project or inquiry..."
                  disabled={isSubmitting}
                />
                <div className="d-flex justify-content-between mt-1">
                  <ErrorMessage name="message" component="div" className="text-danger small" />
                  <small className="text-muted">
                    {values.message.length}/1000 characters
                  </small>
                </div>
              </BootstrapForm.Group>
            </Col>
            
            <Col md={12}>
              <Button 
                type="submit" 
                variant="primary-custom"
                disabled={isSubmitting}
                size="lg"
              >
                {isSubmitting ? (
                  <>
                    <Spinner animation="border" size="sm" className="me-2" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
              <div className="mt-2">
                <small className="text-muted">
                  Having issues? Email me directly at <a href="mailto:musasachristopher2@gmail.com">musasachristopher2@gmail.com</a>
                </small>
              </div>
            </Col>
          </BootstrapForm>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;