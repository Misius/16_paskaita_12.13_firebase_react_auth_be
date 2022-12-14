import AddPostForm from '../components/Posts/AddPostForm';
import { sendRequest } from '../hepers';
import { useAuthCtx } from '../store/AuthContext';

// values
const dummyPost = {
  image: 'https://picsum.photos/id/18/600/400',
  title: 'Fourth fireBase post',
  body: 'Fourth learned firebase today',
  userId: '',
  archived: false,
};

// AddPost
// sukurti arba pernaudoti AddPostForm.jsx
// sukurti forma, sudeti inputus,
// suvaldyti su formik
// onSumit issiusti taip pat kaip handleNewPost
// extra prideti title validacija

function AddPost(props) {
  const { uid, token } = useAuthCtx();
  const handleNewPost = async (formValues) => {
    console.log('formValues ===', formValues);

    const url = `${import.meta.env.VITE_REAL_DB_URL}/firePost/posts.json`;
    console.log('url ===', url);

    // pasiimti userId is contexto ir irasyti i dummyPost pries issiunciant
    // pridejom userId is contexto
    formValues.userId = uid;
    const [ats, err] = await sendRequest(formValues, url);
    console.log('err ===', err);
    console.log('ats ===', ats);
    // redirect to /posts
  };

  return (
    <div className='container'>
      <h1>AddPost</h1>
      <AddPostForm onNewPost={handleNewPost} />
      {/* <button onClick={handleNewPost}>Create post</button> */}
    </div>
  );
}
export default AddPost;
