import React, { useState } from 'react';
import AsideBar from '../AsideBar/AsideBar';
import NavAdmin from '../NavAdmin/NavAdmin';
import useCreateProduct from './CreateProduct.logic';

function NewProduct() {
  const [active, setActive] = useState(false);
  const {
    product,
    productImg,
    title,
    type,
    cost,
    discription,
    btnSubimt,
    handleProductImageUpload,
    handleSubmit,
    setTitle,
    setType,
    setCost,
    setDiscription,
  } = useCreateProduct();
  const { loading } = product;
  const productTypes = ['Appetizers', 'Beverages', 'Burgers', 'Chicken', 'Desserts', 'Pasta', 'Pizza', 'Sauces', 'SeaFood', 'Shakes'];

  return (
    <>
        <section className="dashboard">
            <div className="container-fluid">
                <div className="row">
                    <div className={active ? 'col-lg-1' : 'col-lg-3'}>
                    <AsideBar active={active} setActive={setActive} />
                    </div>
                    <div className={active ? 'col-lg-11' : 'col-lg-9'}>
                        <section className="dashboard-content">
                            <NavAdmin active={active} setActive={setActive} />
                        </section>
                        <section className="newProduct">
                            <div className="container">
                                <div className="row reverse">
                                    <div className="col-lg-8 col-md-6 col-sm-12">
                                    <div className="product_form_data">
                                        <p>Create product</p>
                                        <form action="#" onSubmit={handleSubmit}>
                                            <input
                                                accept="image/"
                                                onChange={handleProductImageUpload}
                                                type="file"
                                                className="form-control"
                                                required
                                            />

                                            <input
                                                className="form-control"
                                                placeholder="Name"
                                                onChange={(e) => setTitle(e.target.value)}
                                                value={title}
                                                type="text"
                                                required
                                            />

                                            <select
                                                className="form-control"
                                                onChange={(e) => setType(e.target.value)}
                                                value={type}
                                                required
                                            >
                                                <option value="" disabled>
                                                Select Type
                                                </option>
                                                {productTypes.map((item, index) => (
                                                <option key={index} value={item}>
                                                    {item}
                                                </option>
                                                ))}
                                            </select>

                                            <input
                                                className="form-control"
                                                placeholder="Cost"
                                                onChange={(e) => setCost(e.target.value)}
                                                type="text"
                                                required
                                            />

                                            <textarea
                                                className="form-control"
                                                placeholder="Description"
                                                onChange={(e) => setDiscription(e.target.value)}
                                                value={discription}
                                                rows="4" 
                                                required
                                            ></textarea>

                                            {loading ? (
                                                <span className="d-flex justify-content-center align-items-center rounded submit_btn">
                                                    <span className="loader"></span>
                                                </span>
                                            ) : (
                                                <span className="d-flex justify-content-center align-items-center rounded submit_btn">
                                                    <input
                                                        type="submit"
                                                        value="submit"
                                                        disabled={btnSubimt}
                                                        className={btnSubimt ? 'btn active' : 'btn'}
                                                    />
                                                </span>
                                            )}
                                        </form>
                                    </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="product_form_img d-flex justify-content-center align-items-center rounded">
                                            {productImg ? 
                                            (
                                                <img
                                                    src={productImg}
                                                    alt="Product Preview"
                                                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                                                />
                                            ): 
                                            (
                                                <p>Image preview will appear here!</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

export default NewProduct;