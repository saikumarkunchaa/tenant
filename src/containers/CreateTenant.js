import React from 'react'
import { Field, reduxForm } from 'redux-form'
const fileMinSize = 1 * 1000 * 1000; // 1MB
const fileMaxSize = 50 * 1000 * 1000; // 50MB
const validate = values => {
  const errors = {}
  if (!values.news_title) {
    errors.news_title = 'Required'
  } else if (values.news_title.length > 15) {
    errors.news_title = 'Must be 15 characters or less'
  }
  
  if (!values.news_short_description) {
    errors.news_short_description = 'Required'
  } else if (values.news_short_description.length < 15) {
    errors.news_short_description = 'Must be 15 characters or More'
  }
  if (!values.news_long_description) {
    errors.news_long_description = 'Required'
  } else if (values.news_long_description.length < 30 ) {
    errors.news_long_description = 'Must be 30 characters or More'
  }
    
//   if (!values.news_image) {
//     errors.news_image = 'Required';
//   } else {
//     if(Object.keys(values.news_image).length === 0 && values.news_image.constructor === Object) {
//     let file = values.news_image[0];
//     if (!file.name.endsWith('.doc') || !file.name.endsWith('.pdf')) {
//       errors.news_image = 'Scan file must be an .JPG or .JPEG file';
//     } else if (file.size > fileMaxSize) {
//       errors.news_image = 'Scan file cannot exceed 50MB size';
//     }
//   }
// }
  return errors
}

const warn = values => {
  const warnings = {}
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
}

const renderInputField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} class="form-control" />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)
const renderTextArea = ({input, rows,cols,label, placeholder,meta: { touched, error, warning }}) => (
  <div>
      <label>{label}</label>
      <div>
          <textarea {...input} placeholder={placeholder} rows= {rows}  cols= {cols} class="form-control"/>
          {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
  </div>
);
const CreateTenant = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">Add News</h1>
        <form onSubmit={handleSubmit}   encType="multipart/form-data" >
          <div class="form-group">
            <Field name="news_title" type="text" component={renderInputField} label="News Title" placeholder = "News Title" />
          </div>
          <div class="form-group">
            <Field name="news_short_description" type="textarea" component={renderTextArea} placeholder = "Display Content" rows = '5' cols = '20' label="Display Content" />
          </div>
          <div class="form-group">
            <Field name="news_long_description" type="textarea" component={renderTextArea} placeholder = "Main Content" rows = '10' cols = '40' label="Main Content" />
          </div>
          {/* <div class="form-group">
            <Field name="news_image" type="file" component={renderInputField} placeholder = "News Image" label="News Image" />
          </div> */}
          <div>
            <button type="submit" disabled={submitting} class = 'btn-primary'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default reduxForm({
  form: 'CreateTenant',  // a unique identifier for this form
  validate,                // <--- validation function given to redux-form
  warn                     // <--- warning function given to redux-form
})(CreateTenant)