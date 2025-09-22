const Link = ({route}) => {
    return (
      <div>
        <li className="hover:text-white hover:bg-violet-600 px-5 py-3 rounded-lg">
          <a href={route.path}>{route.name}</a>
        </li>
      </div>
    );
};

export default Link;