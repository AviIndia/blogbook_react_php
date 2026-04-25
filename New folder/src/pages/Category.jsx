import { useEffect, useState } from "react"
import { addCategory, getCategory } from "../services/blogservice";


const Category = ()=>{
    const [form, setForm] = useState({ category_name: ""});
   const [categoryData, setCategoryData] = useState([]);

   // ✅ move outside
const fetchCategory = async () => {
  try {
    const res = await getCategory();
    setCategoryData(res.data);
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};

useEffect(() => {
  fetchCategory(); // ✅ works
}, []);

const postCategory = async (e) => {
  e.preventDefault();

  const res = await addCategory(form);

  if (res.success) {
    alert(res.message || "Category added");
    setForm({ category_name: "" });

    fetchCategory(); // ✅ now works
  } else {
    alert(res.message || "Error occurred");
  }
};
    return(
        <>
         <div className="heading-page header-text">
      <section className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-content">
                <h4>category</h4>
                <h2>category details</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
                    <div className="row">
                        <div className="col-md-4 mt-4">
                            <div className="card">
                                <div className="card-header">
                                    Add New Category
                                </div>
                                <div className="card-body">
                                    <form onSubmit={postCategory}>
                                        <input
                                            type="text"
                                            name="category_name"
                                            value={form.category_name}
                                            onChange={(e) =>
                                            setForm(prev => ({
                                                ...prev,
                                                [e.target.name]: e.target.value
                                            }))
                                            }
                                            className="form-control mb-3"
                                            placeholder="Enter Category"
                                        />

                                        <button className="btn btn-primary" type="submit">
                                            ADD CATEGORY
                                        </button>
                                        </form>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 mt-4">
                            <div className="card">
                                <div className="card-header">
                                    Category Details
                                </div>
                                <div className="card-body">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                            <th>Category Name</th>
                                            </tr>
                                            
                                        </thead>
                                      <tbody>
                                        {categoryData.length > 0 ? (
                                        categoryData.map((item, index) => (
                                            <tr key={item.id || index}>
                                            <td>{item.id || index + 1}</td>
                                            <td>{item.category_name}</td>
                                            </tr>
                                        ))
                                        ) : (
                                        <tr>
                                            <td colSpan="2" className="text-center">
                                            No Data Found
                                            </td>
                                        </tr>
                                        )}
                                    </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
</div>
        </>
    )
}


export default Category