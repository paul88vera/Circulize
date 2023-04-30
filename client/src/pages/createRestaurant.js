import React from "react"
import { useForm } from "react-hook-form"
import Banner from "../components/Banner"

export default function AddRestaurant() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const send = {
      name: data.name,
      address: {
        street: data.street,
        city: data.city,
        state: data.state,
        zip: data.zip,
      },
      tel: data.tel,
      website: data.web,
      bio: data.bio,
      cuisine: data.cuisine,
      img: data.img,
      imgAlt: data.imgAlt,
      map: data.map,
    }
    await fetch("http://localhost:9000/api/restaurants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(send),
    }).then(() => {
      window.location.reload(false)
    })
  }

  return (
    <div className="cuisine-gallery" style={{ marginBottom: "3rem" }}>
      <Banner />
      <h4 className="cuisine-title">Add a Restaurant</h4>
      <form
        id="restaurant-form"
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "grid", gridRowGap: "1rem" }}
        className="bg-zinc-200 p-8 max-w-300 rounded"
      >
        <div>
          <label>Name</label>
          <input type="text" {...register("name", { required: true })} />
          <label className={errors.hasOwnProperty("name") ? "" : "hidden"}>
            Name Required
          </label>
        </div>
        <div>
          <label>Street</label>
          <input type="text" {...register("street", { required: true })} />
          <label className={errors.hasOwnProperty("street") ? "" : "hidden"}>
            Street Required
          </label>
        </div>
        <div>
          <label>City</label>
          <input type="text" {...register("city", { required: true })} />
          <label className={errors.hasOwnProperty("city") ? "" : "hidden"}>
            City Required
          </label>
        </div>
        <div>
          <label>State</label>
          <input type="text" {...register("state", { required: true })} />
          <label className={errors.hasOwnProperty("state") ? "" : "hidden"}>
            State Required
          </label>
        </div>
        <div>
          <label>Zip</label>
          <input type="number" {...register("zip", { required: true })} />
          <label className={errors.hasOwnProperty("zip") ? "" : "hidden"}>
            Zip Required
          </label>
        </div>
        <div>
          <label>Bio</label>
          <input type="text" {...register("description", { required: true })} />
          <label
            className={errors.hasOwnProperty("description") ? "" : "hidden"}
          >
            Bio Required
          </label>
        </div>
        <div>
          <label>Website</label>
          <input type="text" {...register("website", { required: true })} />
          <label className={errors.hasOwnProperty("website") ? "" : "hidden"}>
            Website Required
          </label>
        </div>
        <div>
          <label>Telephone</label>
          <input type="tel" {...register("tel", { required: true })} />
          <label className={errors.hasOwnProperty("tel") ? "" : "hidden"}>
            Telephone Required
          </label>
        </div>
        <div>
          <label>Cuisine Type</label>
          <select {...register("cuisine", { required: true })}>
            <option value="mexican">Mexican</option>
            <option value="seafood">Seafood</option>
            <option value="american">American</option>
            <option value="asian">Asian</option>
            <option value="barbecue">Barbecue</option>
            <option value="italian">Italian</option>
          </select>
          <label className={errors.hasOwnProperty("cuisine") ? "" : "hidden"}>
            Cuisine Required
          </label>
        </div>
        <div>
          <label>Image URL</label>
          <input type="text" {...register("img", { required: true })} />
          <label className={errors.hasOwnProperty("img") ? "" : "hidden"}>
            Image URL Required
          </label>
        </div>
        <div>
          <label>Image Text</label>
          <input type="text" {...register("imgAlt", { required: true })} />
          <label className={errors.hasOwnProperty("imgAlt") ? "" : "hidden"}>
            Image Text Required
          </label>
        </div>
        <div>
          <label>Map URL</label>
          <input type="text" {...register("map", { required: true })} />
          <label className={errors.hasOwnProperty("map") ? "" : "hidden"}>
            Map URL Required
          </label>
        </div>

        <input
          type="submit"
          style={
            {
              // marginTop: "8px",
              // padding: "5px",
              // backgroundColor: "bg-green-500",
              // fontWeight: "bold",
            }
          }
          className="bg-green-900 text-white rounded p-4"
        />
      </form>
    </div>
  )
}
