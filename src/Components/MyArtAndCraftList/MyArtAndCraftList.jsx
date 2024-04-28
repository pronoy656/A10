const MyArtAndCraftList = () => {
  return (
    <div>
      <h1 className="text-red-600">My Art And Craft List</h1>
      <div className="dropdown flex justify-center">
        <div tabIndex={0} role="button" className="btn m-1">
          Click
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyArtAndCraftList;
