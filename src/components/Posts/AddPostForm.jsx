import { useFormik } from 'formik';
import * as Yup from 'yup';

function AddPostForm(props) {
  //
  const formik = useFormik({
    initialValues: {
      image: 'https://picsum.photos/id/18/600/400',
      title: 'Fourth fireBase post',
      body: 'Fourth learned firebase today',
      userId: '',
      archived: false,
    },
    validationSchema: Yup.object().shape({
      image: Yup.string().url().required(),
      title: Yup.string().min(3).max(23).required(),
      body: Yup.string().min(10).required(),
    }),
    onSubmit: (values) => {
      console.log('values ===', values);
      props.onNewPost(values);
    },
  });

  // console.log('formik.values ===', formik.values);
  return (
    <div>
      <h2>AddPostForm</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          type='text'
          name='title'
          placeholder='Title'
        />
        {formik.touched.title && formik.errors.title && (
          <p>{formik.errors.title}</p>
        )}
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.image}
          type='text'
          name='image'
          placeholder='Image url'
        />
        {formik.touched.image && formik.errors.image && (
          <p>{formik.errors.image}</p>
        )}
        <textarea
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.body}
          name='body'
          placeholder='your text'
        ></textarea>
        {formik.touched.body && formik.errors.body && (
          <p>{formik.errors.body}</p>
        )}
        <button type='submit'>create post</button>
      </form>
    </div>
  );
}
export default AddPostForm;
