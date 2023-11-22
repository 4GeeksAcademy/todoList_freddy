import React , {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [tarea, setTarea]= useState("")

	const [lista, setLista]= useState([])

	function lista_de_tareas(e){

		e.preventDefault()

		setLista([...lista,tarea])

		setTarea("")

	}


	function eliminar(id){

		let arrayNew=[]

		arrayNew=lista.filter((item,index)=>{

			if(index!=id){

				return item
			}
		})
	
	setLista(arrayNew)

	}
	return (
		<div className="text-center container">
			<br />

			<input type="text" className="form-control" value={tarea} onChange={(e)=> setTarea(e.target.value)} />

			<button className="btn btn-dark" onClick={(e)=> lista_de_tareas(e) }>
				Tarea
			</button>
			<br />

			<div>
				<ul className="list-group">

					{lista.map((item,id)=>(
						<li className="list-group-item" key={id}>

							{item}
							<button className="btn btn-danger float-end" onClick={()=>eliminar(id)}>
								X
							</button>

						</li>
					))}

				</ul>
			</div>

			<p>
				tareas pendientes: {lista.length}
			</p>
		</div>
	);
};

export default Home;
