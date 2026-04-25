import { useState } from "react"
import { useCategory } from "../hooks/useCategoryhook"
import { postNewBlog } from "../services/blogservice";

const AddnewBlog = () => {

  const { categoryData } = useCategory();

  const [formData, setFormData] = useState({
    title: "",
    categoryId: "",
    content: "",
    image: null,
    status: ""
  });

  function handleBlogForm(e) {
    const { name, value, files } = e.target;

    // ✅ handle file separately
    if (name === "image") {
      setFormData((prev) => ({
        ...prev,
        image: files[0]
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  }

  const addNewBlog = async (e) => {
    e.preventDefault();
    console.log("FORM STATE:", formData); // 🔥 check state first
    if (!formData.categoryId) {
      alert("Select category");
      return;
    }

    const form = new FormData();
    form.append("title", formData.title);
    form.append("content", formData.content);
    form.append("category_id", formData.categoryId);
    form.append("status", formData.status);


    if (formData.image) {
      form.append("image", formData.image);
    }

    const res = await postNewBlog(form);

    console.log(res);

    if (res?.success) {
      alert("Blog added successfully");

      setFormData({  title: "",
    categoryId: "",
    content: "",
    image: "",
    status: ""
   });

    } else {
      alert(res?.message);
    }
  };

  return (
    <>
      <div className="heading-page header-text">
        <section className="page-heading">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-content">
                  <h4>new blog</h4>
                  <h2>add new blog</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-4">
              <div className="card">
                <div className="card-header">
                  Add New Blog
                </div>
                <div className="card-body">
                  <form onSubmit={addNewBlog}>

                    <input
                      type="text"
                      name="title"
                      className="form-control mb-3"
                      placeholder="Enter title"
                      value={formData.title}
                      onChange={handleBlogForm}
                    />

                    <select
                      name="categoryId"
                      className="form-control mb-3"
                      value={formData.categoryId}
                      onChange={handleBlogForm}
                    >
                      <option value="">Select Category</option>

                      {categoryData.map((item, index) => (
                        <option key={item.id || index} value={item.id}>
                          {item.category_name}
                        </option>
                      ))}
                    </select>

                    <textarea
                      name="content"
                      className="form-control mb-3"
                      rows="5"
                      placeholder="Enter content"
                      value={formData.content}
                      onChange={handleBlogForm}
                    />

                    <input
                      type="file"
                      name="image"
                      className="form-control mb-3"
                      onChange={handleBlogForm}
                    />

                    <select
                      name="status"
                      className="form-control mb-3"
                      value={formData.status}
                      onChange={handleBlogForm}
                    >
                      <option value="">Select Status</option>
                      <option value="PUBLIC">PUBLIC</option>
                      <option value="PRIVATE">PRIVATE</option>
                      <option value="DRAFT">DRAFT</option>
                    </select>

                    <button className="btn btn-primary" type="submit">
                      ADD BLOG
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
export default AddnewBlog