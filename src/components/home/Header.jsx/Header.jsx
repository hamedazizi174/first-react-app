export default function Header() {
  return (
    <div className="flex items-middle w-[1100px] m-auto pt-7 ">
      <div className="text-3xl grow">balsamiq</div>
      <div className="flex gap-5">
        <div className="py-3">PRODUCT</div>
        <div className="py-3">PRICING</div>
        <div className="py-3">LEART TO WIREFRAME</div>
        <div className="py-3">COMPANY</div>
        <div className="py-3">SUPPORT</div>
        <div className="py-3">LOG IN</div>
        <label htmlFor="" className="relative py-3">
          <input type="text" placeholder="Search..." />
          {/* <img src="" className="absolute right-0" alt="search" /> */}
        </label>
      </div>
    </div>
  );
}
