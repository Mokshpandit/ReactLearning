const CategoryNav = ({ onCategoryClick }) => {
  const categories = [
    "India", "Sports", "Business", "Technology", "World", "Entertainment", "Health", "Offers", "Upcoming Events", "World Market", "United Nations", 
  ];

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli ", "Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry",
  ];

  return (
    <div className="bg-black text-white text-xs font-semibold uppercase">
      <div className="max-w-7xl mx-auto px-6 py-2 flex flex-wrap gap-4 items-center">
        {categories.map((cat, i) => (
          <span
            key={i}
            className="cursor-pointer hover:underline whitespace-nowrap "
            onClick={() => onCategoryClick(cat)}
          >
            {cat}
          </span>
        ))}
        <div >
          
          <select
            id="state"
            name="state"
            className="block w-full border text-gray-500 border-gray-300 bg-gray-200 rounded-md shadow-sm  text-[12px] focus:outline-none focus:ring-black focus:border-black"
            onChange={e => {if(e.target.value) onCategoryClick(e.target.value)}}
            >
            <option value="">-- Select State --</option>
            {states.map((state, idx) => (
              <option key={idx} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
