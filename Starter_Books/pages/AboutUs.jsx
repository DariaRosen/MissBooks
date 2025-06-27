const { Outlet, NavLink } = ReactRouterDOM

export function AboutUs() {

    return (
        <section className="about">
            <h1 className="animate__animated animate__bounce">About books and us...</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio dolore sapiente, iste animi corporis nisi atque tempora assumenda dolores. Nobis nam dolorem rerum illo facilis nemo sit voluptatibus laboriosam necessitatibus!</p>

            <section>
                <nav>
                    <NavLink to="/about/team">Team</NavLink>
                    <NavLink to="/about/goal">Goal</NavLink>
                </nav>
                <Outlet />
            </section>
        </section>
    )
}