function Header(props: any) {
  return (
    <header className="row header navbar bg-dark shadow">
      <div className="">
        <h1 className="text-center text-light">{props.title}</h1>
      </div>
      <div className="subtitle text-light">
        The following website is a website used to see members of the Marlins and Sharks bowling teams of Washington.
      </div>
      {/* <div className="col-6 subtitle text-light">
        The following website is a website used to see members of the Marlins and Sharks bowling teams of Washington.
      </div> */}

    </header>
  );
}

export default Header;
