

const AddnewBlog = () => {
 
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
                                    <form >
          <input
            type="text"
            name="title"
            className="form-control mb-3"
            placeholder="Enter title"
         
          />

          <select
            name="categoryId"
            className="form-control mb-3"
          
          >
            <option value="">Select Category</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>

          <textarea
            name="content"
            className="form-control mb-3"
            rows="5"
            placeholder="Enter content"
           
          />

          <input
            type="file"
            className="form-control mb-3"
           
          />

          <select
            name="status"
            className="form-control mb-3"
           
          >
            <option value="PUBLIC">PUBLIC</option>
            <option value="PRIVATE">PRIVATE</option>
            <option value="DRAFT">DRAFT</option>
          </select>

          <button className="btn btn-primary" type="submit">Save</button>
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