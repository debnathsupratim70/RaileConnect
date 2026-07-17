import { NavLink, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-blue-700 text-white shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <h1 className="text-3xl font-bold">
            🚆 RaileConnect
          </h1>

<nav className="flex gap-8">

  <NavLink
    to="/"
    className={({ isActive }) =>
      isActive ? "font-medium text-yellow-300" : "font-medium hover:text-blue-200"
    }
  >
    Home
  </NavLink>

  <NavLink
    to="/search"
    className={({ isActive }) =>
      isActive ? "font-medium text-yellow-300" : "font-medium hover:text-blue-200"
    }
  >
    Search Train
  </NavLink>

  <NavLink
    to="/pnr"
    className={({ isActive }) =>
      isActive ? "font-medium text-yellow-300" : "font-medium hover:text-blue-200"
    }
  >
    PNR Status
  </NavLink>

  <NavLink
    to="/login"
    className={({ isActive }) =>
      isActive ? "font-medium text-yellow-300" : "font-medium hover:text-blue-200"
    }
  >
    Login
  </NavLink>

</nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;