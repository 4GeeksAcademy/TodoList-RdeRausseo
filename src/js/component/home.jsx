import React, { useState } from "react";

//create your first component
const Home = () => {
	const [list, setList] = useState([])

	const deleteTask = (id) => {
		setList(list.filter(task => task.id !== id))
	}


	return (
		<>
			<h1 className="display-1 mt-5 text-primary-emphasis text-center">Todos</h1>
			<div className="container bg-primary-subtle">
				<div className="row p-4">
					<div className="col-12 mb-3">
						<input type="text" className="form-control" placeholder="What need to be done ?" onKeyDown={e => { e.key === "Enter" && e.target.value !== "" ? setList([...list, { inf: e.target.value, id: list.length + 1 }]) : "" }} />
					</div>

					<ul className="list-group bg-light ps-2">
						{
							list.map((item) => {
								return (
									<>
										<li className="list-group" key={item.id}>
											<div className="d-flex justify-content-between p-3">
												<p className="fs-3"> {item.inf} </p>
												<button onClick={() => deleteTask(item.id)} className="btn btn-danger show" > <span> X </span> </button>
											</div>
										</li>
										<hr />
									</>

								)
							})
						}
					</ul>
					<span className="text-secondary mt-2"> {list.length} item left </span>

				</div>
			</div>
		</>
	);

};

export default Home;
