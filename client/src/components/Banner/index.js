import banner from "../../images/restaurant-banner.jpeg"

export default function Banner() {
  return (
    <picture id="main-banner">
      {/* <source media="(min-width:728px)" srcset="https://unsplash.it/1250/500" /> */}
      <img src={banner} width="100%" alt="" />
    </picture>
  )
}
