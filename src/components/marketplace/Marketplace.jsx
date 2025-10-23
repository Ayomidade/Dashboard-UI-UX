import React, { useState } from "react";
import ProductCard from "./ProductCard";
// import Header from "../header/Header";
import { useSelector } from "react-redux";
import { IoCreateSharp, IoRemove, IoRemoveSharp } from "react-icons/io5";
import Formbuilder from "../formbuilder/Formbuilder";
import { MdRemoveCircle } from "react-icons/md";
import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "../../firebase/app.config";

const Marketplace = () => {
  const { products } = useSelector((store) => store.marketPlaceSlice);
  const { user } = useSelector((store) => store.userSlice);
  const { info } = user;
  const [loading, setLoading] = useState(false);
  const [listProduct, setListProduct] = useState(false);
  const productForm = [
    {
      name: "ProductName",
      type: "text",
      placeholder: "Enter product name",
      value: "",
    },
    {
      name: "Description",
      type: "text",
      placeholder: "Description for the property",
      value: "",
    },
    {
      name: "Price",
      type: "text",
      placeholder: "Property rentage cost",
      value: "",
    },

    {
      name: "Location",
      type: "Location",
      placeholder: "Where is the propterty located",
      value: "",
    },
  ];

  // form values
  const values = productForm.reduce(
    (acc, curr) => ({
      ...acc,
      [curr.name]: curr.value,
    }),
    {}
  );

  const [formValues, setFormValues] = useState(values);
  //
  const handleFormChange = (key, value) => {
    setFormValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const userRef = doc(db, "users", info.id);
    const propertiesRef = collection(userRef, "properties");
    setLoading(true);
    try {
      const result = await addDoc(propertiesRef, { formValues });
      alert("Property listed successfully");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {listProduct && (
        <div
          className={`fixed bg-[rgba(0,0,0,0.20)] top-0 bottom-0 right-0 left-0 h-[100vh]  flex justify-between items-center z-index-50`}
        >
          <div className="h-full w-[50%] max-sm:hidden"></div>

          <div className="h-full w-[50%] px-16 py-10 bg-[#e74c3c] max-sm:w-full max-sm:px-4 relative">
            <div className="absolute top-0 right-0 p-2">
              <MdRemoveCircle
                className="text-4xl text-black transition duration-400 hover:text-black"
                onClick={() => setListProduct(!listProduct)}
              />
            </div>
            <Formbuilder
              forms={productForm}
              formValues={formValues}
              handleFormChange={handleFormChange}
            />
            <div className="p-1">
              <button
                onClick={handleSubmitForm}
                className="p-3 rounded-md w-full bg-[#1e2a38] text-white hover:bg-[rgba(0,0,0,0.19)] transition duration-400"
              >
                {loading ? "Please wait..., " : "List product"}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="marketplace">
        <div
          className={`absolute bottom-10 right-5 p-2 ${
            info.role === "Property owner" ? "visible" : "invisible"
          }`}
        >
          <IoCreateSharp
            className="text-4xl text-[#e74c3c] transition duration-400 hover:text-black"
            onClick={() => setListProduct(!listProduct)}
          />
        </div>

        <div className="property-grid">
          {products.map(({ id, name, price, description, image }) => (
            <ProductCard
              id={id}
              key={id}
              propertyImage={image}
              propertyName={name}
              propertyDescription={description}
              propertyPrice={price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Marketplace;
